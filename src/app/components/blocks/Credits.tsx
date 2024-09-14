import { ContentItem } from "../../../../shared/models";

export default function CreditsBlock({ block }: { block: ContentItem }) {
  return (
    <section id="credits" className="py-16">
      <div className="container max-w-screen-md">
        <div className="flex flex-col items-center gap-16">
          <h2 className="h2">{block.title}</h2>
          <ul className="grid grid-cols-[auto,45%] gap-x-16 gap-y-4 [&_strong]:h5 [&_strong]:whitespace-nowrap [&_span]:p-medium [&_span]:font-GillLight">
            {block.credits.map((credit) => (
              <>
                <strong>{credit.name}</strong>
                <span>{credit.name}</span>
              </>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
