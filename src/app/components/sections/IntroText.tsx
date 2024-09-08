interface IntroTextSectionProps {
  title: string;
  description: string;
  titleColor?: string;
  maxWidth?: number;
}

export default function IntroTextSection({ title, description, titleColor, maxWidth }: IntroTextSectionProps) {
  return (
    <section className="xl:pt-24 md:pt-44 pt-40 md:pb-24 pb-16">
      <div className="container">
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className={`md:text-7xl text-6xl font-California font-bold ${titleColor ? `${titleColor}` : 'text-inherit'}`}
          style={{ maxWidth: maxWidth ? `${maxWidth / 16}rem` : 'none' }}
          >{title}</h1>
          <p className="max-w-screen-md p-base">{description}</p>
        </header>
      </div>
    </section>
  );
}