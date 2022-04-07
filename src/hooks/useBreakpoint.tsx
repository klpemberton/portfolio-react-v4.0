import { theme } from '../styles/theme';
import useMatchMedia from './useMatchMedia';

export default function useBreakpoint(query = null) {
  const mobileQuery = `(max-width: ${theme.breakpoints.mobile.maxWidth}px)`;
  const desktopQuery = `(min-width: ${theme.breakpoints.desktop.minWidth}px)`;

  if (typeof query === 'string' && theme.breakpoints[query] !== null) {
    query = theme.breakpoints[query];
  }

  const desktop = useMatchMedia(desktopQuery, true);
  const mobile = useMatchMedia(mobileQuery, !desktop);
  const matches = useMatchMedia(query, false);

  return {
    mobile,
    desktop,
    matches,
  };
}
