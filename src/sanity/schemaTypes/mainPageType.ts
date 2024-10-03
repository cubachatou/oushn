import { defineField, defineType } from "sanity";

export const mainPageType = defineType({
  name: "mainPage",
  title: "Main Page",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "works",
      title: "Works",
      type: "object",
      fields: [
        defineField({
          name: "moreButton",
          title: "More Button",
          type: "object",
          fields: [
            defineField({
              name: "linkText",
              title: "Link Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "clients",
      title: "Clients",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          of: [
            defineField({
              name: "client",
              title: "Client",
              type: "object",
              fields: [
                defineField({
                  name: "img",
                  title: "Image",
                  type: "image",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Main Page",
      };
    },
  },
});
