import { defineField, defineType } from "sanity";

export const blockquoteType = defineType({
  name: "blockquote",
  title: "Blockquote",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "text",
      title: "Text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "figcaption",
      type: "string",
      title: "Figcaption",
    }),
  ],
  preview: {
    select: {
      text: "text",
      figcaption: "figcaption",
    },
    prepare(selection) {
      const { text, figcaption } = selection;
      return {
        title: text,
        subtitle: figcaption,
      };
    },
  },
});
