import { defineField, defineType } from "sanity";

export const creditsType = defineType({
  name: "credits",
  title: "Credits",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Credits",
    }),
    defineField({
      name: "credits",
      title: "Credits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error("At least one credit is required"),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Credits",
      };
    },
  },
});
