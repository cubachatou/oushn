export default function WhiteWrapperLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative z-1 bg-white shadow-[0px_0px_24px_-16px] shadow-black ${className}`}
    >
      {children}
    </div>
  );
}
