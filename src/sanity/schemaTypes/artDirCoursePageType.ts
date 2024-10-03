import { defineField, defineType } from "sanity";

export const artDirCoursePageType = defineType({
  name: "artDirCoursePage",
  title: "Art Director Course Page",
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
      name: "courseProgramSection",
      title: "Course Program Section",
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
          name: "firstGroup",
          title: "First Group",
          type: "object",
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "img",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "list",
              title: "List",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: "secondGroup",
          title: "Second Group",
          type: "object",
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "img",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "list",
              title: "List",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            }),
          ],
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
          name: "list",
          title: "List",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
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
          name: "startDate",
          title: "Start Date",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "feedbacksSection",
      title: "Feedbacks Section",
      type: "object",
      fields: [
        defineField({
          name: "lookButton",
          title: "Look Button",
          type: "object",
          fields: [
            defineField({
              name: "buttonURL",
              title: "Button URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "additionalInfo",
          title: "Additional Info",
          type: "text",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Art Director Course Page",
      };
    },
  },
});
