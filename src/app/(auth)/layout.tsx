import LogoWithText from "@/components/logo-with-text";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-grid flex min-h-screen flex-col items-center justify-center">
      <LogoWithText className="mb-4 scale-150" />
      {children}
    </div>
  );
}
