export default function WhiteWrapperLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative z-1 bg-white shadow-[0px_0px_24px_-16px] shadow-black">
      {children}
    </div>
  );
}