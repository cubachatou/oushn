import { type SchemaTypeDefinition } from "sanity";
import { textRedactor } from "./textRedactor";
import { shiftedDoubleMediaGridType } from "./shiftedDoubleMediaGridType";
import { doubleMediaGridType } from "./doubleMediaGridType";
import { singleMediaType } from "./singleMedia";
import { workType } from "./workType";
import { feedbackType } from "./feedbackType";
import { tripleMediaGridType } from "./tripleMediaGridType";
import { videoType } from "./videoType";
import { blockquoteType } from "./blockquoteType";
import { reachTextType } from "./reachTextType";
import { creditsType } from "./creditsType";
import { mainPageType } from "./mainPageType";

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
  ],
};
