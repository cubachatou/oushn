import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {workType} from './workType'
import {feedbackType} from './feedbackType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, workType, feedbackType],
}
