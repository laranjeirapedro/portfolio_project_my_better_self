import {StructureBuilder, UnserializedListItemChild} from 'sanity/structure'
import {FaHardHat, FaFont} from 'react-icons/fa'
import {BsGearFill, BsCardList} from 'react-icons/bs'
import {IoIosColorPalette, IoIosRadioButtonOn } from 'react-icons/io'

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
                .child(
                  S.document()
                    .title('Color')
                    .schemaType('colorSettings')
                    .documentId('colorSettings'),
                )
                .icon(IoIosColorPalette),
              S.listItem()
                .title('Font')
                .child(
                  S.document()
                    .title('Font Settings')
                    .schemaType('fontSettings')
                    .documentId('fontSettings'),
                )
                .icon(FaFont),
              S.listItem()
                .title('Footer')
                .child(S.document().title('Footer').schemaType('footer').documentId('footer'))
                .icon(FaHardHat),
              S.listItem()
                .title('Button')
                .child(S.document().title('Button').schemaType('button').documentId('button'))
                .icon(IoIosRadioButtonOn),
              S.listItem()
                .title('Card')
                .child(S.document().title('Card').schemaType('card').documentId('card'))
                .icon(BsCardList),
            ]),
        )
        .icon(BsGearFill),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['header', 'colorSettings', 'fontSettings', 'footer', 'card', 'button'].includes(listItem.getId() ?? ''),
      ),
    ])
