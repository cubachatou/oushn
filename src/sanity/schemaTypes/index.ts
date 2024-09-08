import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'
import {workType} from './workType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, workType],
}
