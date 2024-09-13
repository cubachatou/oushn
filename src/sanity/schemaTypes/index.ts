import { type SchemaTypeDefinition } from "sanity";
import { textRedactor } from "./textRedactor";
import { shiftedDoubleMediaGridType } from "./shiftedDoubleMediaGridType";
import { doubleMediaGridType } from "./doubleMediaGridType";
import { singleMediaType } from "./singleMedia";
import { blockContentType } from "./blockContentType";
import { workType } from "./workType";
import { feedbackType } from "./feedbackType";
import { tripleMediaGridType } from "./tripleMediaGridType";
import { videoType } from "./videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    workType,
    feedbackType,
    tripleMediaGridType,
    videoType,
    singleMediaType,
    doubleMediaGridType,
    shiftedDoubleMediaGridType,
    textRedactor,
  ],
};
