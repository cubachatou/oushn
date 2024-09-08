import Image, { StaticImageData } from "next/image";

interface AuthorProps {
  name: string,
  title: string,
  image: StaticImageData,
  bgColor: string,
}

export default function CourseAuthorSection({ name, title, image, bgColor }: AuthorProps) {
  return (
    <section className={`py-16 text-white ${bgColor ? `${bgColor}` : 'bg-inherit'}`}>
      <div className="container">
        <div className="max-w-screen-md mx-auto grid sm:grid-cols-2 sm:gap-16 gap-8">
          <Image src={image} alt="Liza Tarasova" className="object-cover" />

          <div className="flex flex-col max-md:items-center gap-4">
            <div className="mb-auto flex flex-col max-md:items-center gap-4 max-md:text-center">
              <span className="lg:h2 md:h3 h2">Ліза Тарасова</span>
              <p className="p-medium">Кураторка курсу та
                авторка програми</p>
            </div>

            <ul className="w-fit flex sm:grid grid-cols-2 gap-4">
              <li className="size-16 rounded-full bg-gray"></li>
              <li className="size-16 rounded-full bg-gray"></li>
              <li className="size-16 rounded-full bg-gray"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}