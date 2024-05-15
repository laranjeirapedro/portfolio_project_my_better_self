import {StructureBuilder, UnserializedListItemChild} from 'sanity/structure'
import {FaHardHat} from 'react-icons/fa'
import {BsGearFill} from 'react-icons/bs'
import {IoIosColorPalette} from 'react-icons/io'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Dashboard')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Layout')
            .items([
              S.listItem()
                .title('Header')
                .child(S.document().title('Header').schemaType('header').documentId('header'))
                .icon(FaHardHat),
              S.listItem()
                .title('Color')
                .child(S.document().title('Color').schemaType('colorSettings').documentId('colorSettings'))
                .icon(IoIosColorPalette),
            ]),
        )
        .icon(BsGearFill),
      ...S.documentTypeListItems().filter(
        (listItem) => !['header', 'colorSettings'].includes(listItem.getId() ?? ''),
      ),
    ])
