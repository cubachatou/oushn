import Image from "next/image";

interface AuthorProps {
  name: string,
  title: string,
  image: string,
  bgColor: string,
}

export default function CourseAuthorSection({ name, title, image, bgColor }: AuthorProps) {
  return (
    <section className={`py-16 text-white ${bgColor ? `${bgColor}` : 'bg-inherit'}`}>
      <div className="container">
        <div className="max-w-screen-md mx-auto grid grid-cols-2 gap-16">
          <Image src={image} alt="Liza Tarasova" className="object-cover" />

          <div className="flex flex-col gap-4">
            <div className="mb-auto flex flex-col gap-4">
              <span className="h2">Ліза Тарасова</span>
              <p className="p-medium">Кураторка курсу та
                авторка програми</p>
            </div>

            <ul className="w-fit grid grid-cols-2 gap-4">
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