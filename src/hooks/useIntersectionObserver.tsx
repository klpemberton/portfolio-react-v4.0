import React, { MutableRefObject, useEffect, useState } from 'react';

interface IntersectionObserverOptions {
  root: Element | Document | null | undefined;
  rootMargin: string;
  threshold: number;
}

export default function useIntersectionObserver(
  observerOptions: IntersectionObserverOptions,
  targetElement: React.ReactNode | MutableRefObject<Element>,
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    if (targetElement) {
      const node = targetElement?.['current'];
      const observer = new IntersectionObserver(updateEntry, observerOptions);

      observer.observe(node);

      return () => {
        observer.unobserve(node);
      };
    }
  }, [targetElement]);

  return entry;
}
