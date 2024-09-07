interface IntroTextSectionProps {
  title: string;
  description: string;
  titleColor?: string;
  maxWidth?: number;
}

export default function IntroTextSection({ title, description, titleColor, maxWidth }: IntroTextSectionProps) {
  return (
    <section className="py-24">
      <div className="container">
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className={`text-7xl font-California font-bold ${titleColor ? `${titleColor}` : 'text-inherit'}`}
          style={{ maxWidth: maxWidth ? `${maxWidth / 16}rem` : 'none' }}
          >{title}</h1>
          <p className="max-w-screen-md text-2xl text-dark-sienna">{description}</p>
        </header>
      </div>
    </section>
  );
}