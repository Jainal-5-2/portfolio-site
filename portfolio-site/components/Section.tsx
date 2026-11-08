import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}