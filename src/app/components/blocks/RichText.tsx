"use client";
import { ContentItem } from "../../../../shared/models";
import { PortableText } from "@portabletext/react";

export default function RichTextBlock({ block }: { block: ContentItem }) {
  return (
    <div>
      <div className="container prose prose-2xl">
        <PortableText value={block} />
      </div>
    </div>
  );
}
