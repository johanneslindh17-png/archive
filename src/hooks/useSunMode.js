import { useState, useEffect, useRef } from 'react';

/**
 * Simple NOAA-approximation solar calculator.
 * Returns { sunrise: Date, sunset: Date } in UTC,
 * or { alwaysDay: true } / { alwaysNight: true } for polar extremes.
 */
function calcSunTimes(lat, lng, date = new Date()) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;

  const utcY = date.getUTCFullYear();
  const utcM = date.getUTCMonth();
  const utcD = date.getUTCDate();

  // Day of year (UTC)
  const n = Math.floor(
    (Date.UTC(utcY, utcM, utcD) - Date.UTC(utcY, 0, 0)) / 86400000
  );

  // Solar declination
  const decl = toRad(23.45) * Math.sin(toRad((360 / 365) * (n - 81)));

  // Hour angle at the horizon
  const cosHA = -Math.tan(toRad(lat)) * Math.tan(decl);
  if (cosHA <= -1) return { alwaysDay: true };
  if (cosHA >= 1)  return { alwaysNight: true };

  const ha = toDeg(Math.acos(cosHA)); // degrees

  // Equation of time (minutes)
  const B = toRad((360 / 365) * (n - 81));
  const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

  // Solar noon in UTC minutes from today's UTC midnight
  const solarNoon  = 720 - 4 * lng - eot;
  const sunriseMin = solarNoon - ha * 4;
  const sunsetMin  = solarNoon + ha * 4;

  const utcMidnight = Date.UTC(utcY, utcM, utcD);
  return {
    sunrise: new Date(utcMidnight + sunriseMin * 60000),
    sunset:  new Date(utcMidnight + sunsetMin  * 60000),
  };
}

/**
 * useSunMode — returns whether it is currently after sunset / before sunrise
 * at the user's location. Fires a precise setTimeout at the next transition
 * rather than polling. Falls back to the system prefers-color-scheme if
 * geolocation is unavailable or denied.
 */
export function useSunMode() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const timerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function schedule(lat, lng) {
      if (cancelled) return;

      const now   = new Date();
      const times = calcSunTimes(lat, lng, now);

      let dark;
      let nextMs;

      if (times.alwaysDay) {
        dark   = false;
        // Recheck at tomorrow's UTC midnight
        nextMs = Date.UTC(
          now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1
        );
      } else if (times.alwaysNight) {
        dark   = true;
        nextMs = Date.UTC(
          now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1
        );
      } else {
        const { sunrise, sunset } = times;
        dark = now < sunrise || now >= sunset;

        if (now < sunrise) {
          nextMs = sunrise.getTime();          // flip to light at sunrise
        } else if (now < sunset) {
          nextMs = sunset.getTime();           // flip to dark at sunset
        } else {
          // After tonight's sunset — wait for tomorrow's sunrise
          const tomorrow = new Date(now.getTime() + 86400000);
          const t2 = calcSunTimes(lat, lng, tomorrow);
          nextMs = t2.sunrise
            ? t2.sunrise.getTime()
            : Date.UTC(
                tomorrow.getUTCFullYear(),
                tomorrow.getUTCMonth(),
                tomorrow.getUTCDate()
              );
        }
      }

      setIsDark(dark);

      // Schedule the next flip (minimum 1 s to avoid tight loops)
      const delay = Math.max(1000, nextMs - Date.now());
      timerRef.current = setTimeout(() => schedule(lat, lng), delay);
    }

    if (!navigator.geolocation) return; // keep system-preference default

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => schedule(coords.latitude, coords.longitude),
      ()           => { /* denied — keep system-preference default */ },
      { timeout: 8000, maximumAge: 3_600_000 } // cache location for 1 h
    );

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
    };
  }, []);

  return isDark;
}
