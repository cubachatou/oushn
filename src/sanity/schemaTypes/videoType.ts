import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "video",
      type: "mux.video",
      options: {
        accept: "video/mp4",
        hotspot: true,
      },
    }),
  ],
});
