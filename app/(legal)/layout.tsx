export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="prose max-w-4xl container pt-20">{children}</div>;
}
