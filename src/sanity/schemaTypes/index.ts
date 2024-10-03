import { type SchemaTypeDefinition } from "sanity";
import { artDirCoursePageType } from "./artDirCoursePageType";
import { blockquoteType } from "./blockquoteType";
import { characterCoursePageType } from "./characterCoursePageType";
import { creditsType } from "./creditsType";
import { doubleMediaGridType } from "./doubleMediaGridType";
import { feedbackType } from "./feedbackType";
import { mainPageType } from "./mainPageType";
import { reachTextType } from "./reachTextType";
import { shiftedDoubleMediaGridType } from "./shiftedDoubleMediaGridType";
import { singleMediaType } from "./singleMedia";
import { textRedactor } from "./textRedactor";
import { tripleMediaGridType } from "./tripleMediaGridType";
import { videoType } from "./videoType";
import { workType } from "./workType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    workType,
    feedbackType,
    tripleMediaGridType,
    videoType,
    singleMediaType,
    doubleMediaGridType,
    shiftedDoubleMediaGridType,
    textRedactor,
    blockquoteType,
    reachTextType,
    creditsType,

    mainPageType,
    artDirCoursePageType,
    characterCoursePageType,
  ],
};
