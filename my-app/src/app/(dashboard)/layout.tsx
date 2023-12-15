export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-neutral h-screen">
      <div className="max-w-screen-lg mx-auto text-white pt-12 pb-2">
        olá Júlio
      </div>
      <div className="bg-white max-w-screen-lg mx-auto rounded-lg p-6">
        {children}
      </div>
    </main>
  );
}
