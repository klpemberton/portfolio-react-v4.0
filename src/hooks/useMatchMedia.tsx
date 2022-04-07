import { useEffect, useState } from 'react';

export default function useMatchMedia(query: string, defaultState = null) {
  const [state, setState] = useState<boolean>(defaultState);

  useEffect(() => {
    if (query) {
      let mounted = true;
      const mql = window.matchMedia(query);

      const onChange = () => {
        if (!mounted) {
          return;
        }
        setState(mql.matches);
      };

      window.addEventListener('resize', onChange);
      setState(mql.matches);

      return () => {
        mounted = false;
        window.removeEventListener('resize', onChange);
      };
    }
  }, [defaultState, query]);

  return query ? state : defaultState;
}
