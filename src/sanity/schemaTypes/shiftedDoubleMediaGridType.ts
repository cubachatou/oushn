import { defineField, defineType } from "sanity";

export const shiftedDoubleMediaGridType = defineType({
  name: "shifted-double-media-grid",
  title: "Shifted Double Media Grid",
  type: "document",
  fields: [
    defineField({
      name: "mediaArray",
      type: "array",
      title: "Media Array",
      of: [
        {
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
        Rule.required().min(2).max(2).error("Should contain 2 images."),
    }),
  ],
});
