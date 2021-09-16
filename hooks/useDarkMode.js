import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function usePrefersDarkMode() {
  if (typeof window === 'undefined') return false;

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true;
  }
  return false;
}

export default function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  const prefersDarkMode = usePrefersDarkMode();

  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    const element = window.document.body;

    if (enabled) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}
