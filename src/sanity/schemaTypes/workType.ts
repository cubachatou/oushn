import {
  AlignHorizontalJustifyCenterIcon,
  ContactIcon,
  ImageIcon,
  ImagesIcon,
  LetterTextIcon,
  QuoteIcon,
  VideoIcon,
} from "lucide-react";
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
          type: "reach-text",
          icon: LetterTextIcon,
        },
        {
          type: "blockquote",
          icon: QuoteIcon,
        },
        {
          type: "credits",
          icon: ContactIcon,
        },
        {
          type: "video",
          icon: VideoIcon,
        },
        {
          type: "single-media",
          icon: ImageIcon,
        },
        {
          type: "double-media-grid",
          icon: ImagesIcon,
        },
        {
          type: "triple-media-grid",
          icon: ImagesIcon,
        },
        {
          type: "shifted-double-media-grid",
          icon: AlignHorizontalJustifyCenterIcon,
        },
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
    // defineField({
    //   name: "someName",
    //   title: "Some title",
    //   type: "blockContent",
    // }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
