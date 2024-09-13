import { defineType } from "sanity";

export const textRedactor = defineType({
  title: 'Text Redactor',
  name: 'text-redactor',
  type: 'array',
  of: [{type: 'block'}]
});
