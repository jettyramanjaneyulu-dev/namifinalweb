export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div  className="min-h-screen bg-[#193f62]">
      {children}
    </div>
  );
}
