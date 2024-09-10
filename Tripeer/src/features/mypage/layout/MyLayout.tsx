import { ReactNode } from 'react';

export default function MyLayout({ children }: { children: ReactNode }) {
  return (
    <section
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      {children}
    </section>
  );
}
