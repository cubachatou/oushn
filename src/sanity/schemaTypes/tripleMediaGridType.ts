import { defineField, defineType } from "sanity";

export const tripleMediaGridType = defineType({
  name: "triple-media-grid",
  title: "Triple Media Grid",
  type: "document",
  fields: [
    defineField({
      name: "mediaArray",
      type: "array",
      title: "Media Array",
      of: [
        {
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
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
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).max(3).error("Should contain 3 images."),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Triple Media Grid",
      };
    },
  },
});
