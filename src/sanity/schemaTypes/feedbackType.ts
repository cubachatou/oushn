import { defineField, defineType } from 'sanity'

export const feedbackType = defineType({
  name: 'feedbacks',
  title: 'Feedbacks',
  type: 'document',
  fields: [
    defineField({
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Feedback Text',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar',
    },
  },
})