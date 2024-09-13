import { defineField, defineType } from "sanity";

export const workType = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Preview Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "video",
      type: "mux.video",
      title: "Intro Video",
      options: {
        accept: "video/mp4",
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content Blocks",
      of: [
        {
          type: "video",
        },
        {
          type: "single-media",
        },
        {
          type: "double-media-grid",
        },
        {
          type: "triple-media-grid",
        },
        {
          type: "shifted-double-media-grid",
        },
        { type: "block" },
      ],
      options: {
        insertMenu: {
          showIcons: true,
          filter: true,
          views: [{ name: "list" }, { name: "grid" }],
        },
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
