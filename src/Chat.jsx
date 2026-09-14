import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import { ref as dbRef, push, onValue, serverTimestamp, onDisconnect, set, remove, query, limitToLast } from 'firebase/database';
import { db } from './firebase.js';

const COLORS = ['#e05555','#d07030','#a09520','#38a848','#3070c8','#7050c8','#b03898'];

function getMe() {
  try {
    const s = JSON.parse(localStorage.getItem('archive_chat_user') || 'null');
    if (s?.id && s?.color && s?.name) return s;
  } catch {}
  const me = {
    id:    Math.random().toString(36).slice(2, 10),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    name:  'Listener ' + (100 + Math.floor(Math.random() * 900)),
  };
  try { localStorage.setItem('archive_chat_user', JSON.stringify(me)); } catch {}
  return me;
}

const ME = getMe();

function timeAgo(ts) {
  if (!ts) return '';
  const d = Date.now() - ts;
  if (d < 60000) return 'now';
  if (d < 3600000) return Math.floor(d / 60000) + 'm';
  return Math.floor(d / 3600000) + 'h';
}

export const Chat = forwardRef(function Chat({ open, darkMode, onSelectNode }, ref) {
  const [msgs,   setMsgs]   = useState([]);
  const [online, setOnline] = useState(0);
  const [text,   setText]   = useState('');
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // Expose share() to parent via ref
  useImperativeHandle(ref, () => ({
    share(nodeId, nodeLabel) {
      if (!db) return;
      push(dbRef(db, 'chat/messages'), {
        nodeId, nodeLabel,
        userId: ME.id, userName: ME.name, userColor: ME.color,
        at: serverTimestamp(),
      });
    },
  }), []);

  // Presence — mark online while connected
  useEffect(() => {
    if (!db) return;
    const myRef = dbRef(db, `chat/presence/${ME.id}`);
    const unsub = onValue(dbRef(db, '.info/connected'), snap => {
      if (!snap.val()) return;
      onDisconnect(myRef).remove();
      set(myRef, { color: ME.color, at: serverTimestamp() });
    });
    return () => { unsub(); remove(myRef); };
  }, []);

  // Online count
  useEffect(() => {
    if (!db) return;
    return onValue(dbRef(db, 'chat/presence'), snap => {
      setOnline(snap.exists() ? Object.keys(snap.val()).length : 0);
    });
  }, []);

  // Messages — last 80
  useEffect(() => {
    if (!db) return;
    const q = query(dbRef(db, 'chat/messages'), limitToLast(80));
    return onValue(q, snap => {
      if (!snap.exists()) { setMsgs([]); return; }
      setMsgs(Object.entries(snap.val()).map(([id, v]) => ({ id, ...v })));
    });
  }, []);

  // Scroll to bottom when messages arrive or panel opens
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [msgs, open]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  const send = useCallback(() => {
    const t = text.trim();
    if (!t || !db) return;
    push(dbRef(db, 'chat/messages'), {
      text: t,
      userId: ME.id, userName: ME.name, userColor: ME.color,
      at: serverTimestamp(),
    });
    setText('');
  }, [text]);

  return (
    <div className={`chat-panel${open ? ' open' : ''}${darkMode ? ' dark' : ''}`}>
      <div className="chat-header">
        <span className="chat-title">CHAT</span>
        <span className="chat-online">
          <span className="chat-dot" />
          {online} online
        </span>
      </div>

      <div className="chat-msgs">
        {!db && (
          <div className="chat-unconfigured">
            Firebase not configured yet — see <code>src/firebase.js</code>
          </div>
        )}
        {msgs.map(m => (
          <div key={m.id} className={`chat-msg${m.userId === ME.id ? ' me' : ''}`}>
            <div className="chat-msg-meta">
              <span className="chat-user" style={{ color: m.userColor }}>{m.userName}</span>
              <span className="chat-time">{timeAgo(m.at)}</span>
            </div>
            {m.nodeId ? (
              <button className="chat-node-chip" onClick={() => onSelectNode(m.nodeId)}>
                ↗ {m.nodeLabel}
              </button>
            ) : (
              <span className="chat-text">{m.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-row">
        <input
          ref={inputRef}
          className="chat-input"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder="say something…"
          maxLength={200}
        />
        <button className="chat-send" onClick={send}>→</button>
      </div>
    </div>
  );
});
