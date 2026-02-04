import { useEffect, useRef, type ReactNode } from 'react';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionShell({ children, className = '', id }: SectionShellProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-reveal py-16 md:py-24 px-4 ${className}`}
    >
      <div className="container max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
