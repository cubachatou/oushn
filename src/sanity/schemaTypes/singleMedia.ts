import { defineField, defineType } from "sanity";

export const singleMediaType = defineType({
  name: "single-media",
  title: "Single Media",
  type: "document",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "aspectRatio",
          type: "string",
          title: "Aspect Ratio",
        }),
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required().error("Image is required."),
    }),
  ],
});
