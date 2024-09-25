import { ContentItem } from "../../../../shared/models";

export default function CreditsBlock({ block }: { block: ContentItem }) {
  return (
    <div id="credits" className="xl:mb-16 lg:mb-10 mb-8">
      <div className="container max-w-screen-md">
        <div className="flex flex-col items-center lg:gap-16 gap-8">
          <h2 className="h2">{block.title}</h2>
          <ul className="grid grid-cols-[auto,45%] gap-x-16 gap-y-4 [&_strong]:h5 [&_strong]:whitespace-nowrap [&_span]:p-medium [&_span]:font-GillLight">
            {block.credits.map((credit) => (
              <li
                key={credit.role + credit.name}
                className="grid grid-cols-subgrid col-span-2"
              >
                <strong>{credit.role}</strong>
                <span>{credit.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
