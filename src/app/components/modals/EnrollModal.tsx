import Button from "../Button";

export default function EnrollModal() {
  return (
    <div className="z-50 fixed inset-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.8)]">
      <form action="#" className="w-full max-w-[560px] flex flex-col gap-6 py-12 px-10 bg-white rounded-xl p-base">
        <fieldset>
          <label htmlFor="name">Ім'я</label>
          <input type="text" id="name" name="Name" placeholder="Ім'я" required />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="Email" placeholder="example@gmail.com" required />
        </fieldset>

        <fieldset>
          <label htmlFor="phone">Телефон</label>
          <input type="tel" id="phone" name="Phone" placeholder="+380" required />
        </fieldset>

        <fieldset>
          <label htmlFor="message">Ваші запитання</label>
          <textarea id="message" name="Message" placeholder="Якщо у Вас є питання щодо курсу, залиште його тут"></textarea>
        </fieldset>

        <Button as="button" type="submit" className="button w-full mt-4">Записатися</Button>
      </form>
    </div>
  );
}