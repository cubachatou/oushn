import {
  BriefcaseBusiness,
  Database,
  Home,
  Megaphone,
  MessageCircleHeart,
  PanelsTopLeft,
  PersonStanding,
} from "lucide-react";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Oushn Studio")
    .items([
      S.listItem()
        .title("Pages")
        .icon(PanelsTopLeft)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Main Page")
                .icon(Home)
                .child(
                  S.document()
                    .schemaType("mainPage")
                    .documentId("singleton-mainPage"),
                ),
              S.listItem()
                .title("Art Direction Course Page")
                .icon(Megaphone)
                .child(
                  S.document()
                    .schemaType("artDirCoursePage")
                    .documentId("singleton-artDirCoursePage"),
                ),
              S.listItem()
                .title("Character Course Page")
                .icon(PersonStanding)
                .child(
                  S.document()
                    .schemaType("characterCoursePage")
                    .documentId("singleton-characterCoursePage"),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("General")
        .icon(Database)
        .child(
          S.list()
            .title("Reusable")
            .items([
              S.documentTypeListItem("work")
                .title("Works")
                .icon(BriefcaseBusiness),
              S.divider(),
              S.documentTypeListItem("feedbacks")
                .title("Feedbacks")
                .icon(MessageCircleHeart),
              // Uncomment and adjust the filter if needed
              // ...S.documentTypeListItems().filter(
              //   (item) => item.getId() && !["work"].includes(item.getId()!),
              // ),
            ]),
        ),
    ]);
