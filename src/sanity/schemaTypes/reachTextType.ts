import { HighlightIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const reachTextType = defineType({
  name: "reach-text",
  title: "Reach Text",
  type: "document",
  fields: [
    defineField({
      name: "text",
      type: "array",
      title: "Text",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Code", value: "code" },
              { title: "Strike", value: "strike-through" },
              { title: "Highlight", value: "highlight", icon: HighlightIcon },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    // defineField({
    //   name: "media",
    //   type: "single-media",
    //   icon: ImageIcon,
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Reach Text",
      };
    },
  },
});
