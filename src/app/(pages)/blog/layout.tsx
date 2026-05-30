import { ReadingProgressBar } from '@/components/shared/ReadingProgressBar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgressBar />
      {children}
    </>
  );
}
