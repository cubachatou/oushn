import { defineField, defineType } from "sanity";

export const characterCoursePageType = defineType({
  name: "characterCoursePage",
  title: "Character Course Page",
  type: "document",
  fields: [
    defineField({
      name: "introSection",
      title: "Intro Section",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentSection",
      title: "Content Section",
      type: "object",
      fields: [
        defineField({
          name: "firstImage",
          title: "First Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "program",
          title: "Program",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "list",
              title: "List",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "highlightedText",
                      title: "Highlighted Text",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "defaultText",
                      title: "Default Text",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "secondImage",
          title: "Second Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "forWhomSection",
      title: "For Whom Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorSection",
      title: "Author Section",
      type: "object",
      fields: [
        defineField({
          name: "img",
          title: "Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "position",
          title: "Position",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "socials",
          title: "Socials",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.max(4).required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceSection",
      title: "Price Section",
      type: "object",
      fields: [
        defineField({
          name: "price",
          title: "Price",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "enrollButton",
          title: "Enroll Button",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "addInfo",
          title: "Additional Information",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Character Course Page",
      };
    },
  },
});
