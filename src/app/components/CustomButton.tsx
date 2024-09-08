import Link from "next/link";

interface ButtonProps {
  as: 'button' | 'link';
  url?: string;
  type?: 'button' | 'submit' | 'reset';
  className: string;
  children: React.ReactNode;
}

export default function CustomButton({ as = 'button', url, type, className, children }: ButtonProps) {
  if (as === 'link' && url) {
    return (
      <Link href={url} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}