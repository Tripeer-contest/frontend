import { ReactNode } from 'react';

export default function MyLayout({ children }: { children: ReactNode }) {
  return (
    <section
      style={{
        display: 'flex',
        paddingTop: '20px',
        paddingBottom: '20px',
        height: '100%',
      }}
    >
      {children}
    </section>
  );
}
