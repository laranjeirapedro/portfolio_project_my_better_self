import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import { iconPicker } from 'sanity-plugin-icon-picker';

import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'truco-app',

  projectId: 'hjl1wz6u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    colorInput(),
    iconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
})
