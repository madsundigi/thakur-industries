export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="py-16 md:py-24">{children}</div>
}
