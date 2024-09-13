import { defineField, defineType } from "sanity";

export const feedbackType = defineType({
  name: "feedbacks",
  title: "Feedbacks",
  type: "document",
  fields: [
    defineField({
      name: "avatar",
      type: "image",
      title: "Avatar",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      type: "text",
      title: "Feedback Text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
});
