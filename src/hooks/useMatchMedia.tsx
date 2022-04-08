import { useEffect, useState } from 'react';

export default function useMatchMedia(query: string, defaultState = null) {
  const [state, setState] = useState<boolean | null>(defaultState);

  useEffect(() => {
    if (query && window) {
      let mounted = true;
      const mql = window.matchMedia(query);
      console.log(mql);

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
