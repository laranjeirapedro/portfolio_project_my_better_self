import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'
import {
  sanityDataset,
  sanityProjectId,
  siteApiId,
  siteBuildHookId,
  siteName,
  siteTitle,
  siteUrl,
} from './src/environments'

export default defineConfig({
  name: 'default',
  title: 'arcanehut-app',

  projectId: sanityProjectId!,
  dataset: sanityDataset!,

  plugins: [
    structureTool({
      structure,
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            ...(siteApiId!
              ? [
                  {
                    title: siteTitle!,
                    apiId: siteApiId!,
                    buildHookId: siteBuildHookId!,
                    name: siteName,
                    url: siteUrl,
                  },
                ]
              : []),
          ],
        }),
      ],
    }),
    visionTool(),
    colorInput(),
    iconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
})
