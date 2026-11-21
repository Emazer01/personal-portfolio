import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? 'hero');

  useEffect(() => {
    const supportsNativeScrollTargetGroup =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('scroll-target-group: auto');

    if (supportsNativeScrollTargetGroup) {
      const syncAriaCurrent = () => {
        const currentLink = document.querySelector<HTMLAnchorElement>(
          'nav.primary-nav a:target-current'
        );
        const navLinks = document.querySelectorAll<HTMLAnchorElement>(
          'nav.primary-nav a'
        );
        navLinks.forEach((link) => {
          const isCurrent = link === currentLink;
          link.setAttribute('aria-current', isCurrent ? 'true' : 'false');
        });
        if (currentLink) {
          const href = currentLink.getAttribute('href') ?? '';
          if (href.startsWith('#')) {
            setActiveId(href.slice(1));
          }
        }
      };

      syncAriaCurrent();
      document.addEventListener('scrollend', syncAriaCurrent);
      return () => {
        document.removeEventListener('scrollend', syncAriaCurrent);
      };
    }

    // Fallback with IntersectionObserver when scroll-target-group is unsupported
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (!id) continue;
            setActiveId(id);
            const navLinks = document.querySelectorAll<HTMLAnchorElement>(
              'nav.primary-nav a'
            );
            navLinks.forEach((link) => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('target-current', isActive);
              link.setAttribute('aria-current', isActive ? 'true' : 'false');
            });
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
