import { useEffect, useState } from 'react';
import { theme } from '../styles/theme';

export default function useBreakpoint() {
  const [isMatch, setIsMatch] = useState<boolean | null>(null);

  const mobileQuery = `(max-width: ${theme.breakpoints.mobile.maxWidth}px)`;

  useEffect(() => {
    if (window) {
      let mounted = true;
      const mql = window.matchMedia(mobileQuery);

      const onChange = () => {
        if (!mounted) {
          return;
        }
        setIsMatch(mql.matches);
      };

      window.addEventListener('resize', onChange);
      setIsMatch(mql.matches);

      return () => {
        mounted = false;
        window.removeEventListener('resize', onChange);
      };
    }
  }, []);

  return isMatch;
}
