import {defineField, defineType} from 'sanity'

export const expediaWidget = defineType({
  name: 'expediaWidget',
  title: 'Expedia Widget',
  type: 'object',
  fields: [
    defineField({
      name: 'className',
      title: 'Class Name',
      type: 'string',
      options: {
        list: [
          {title: 'Banner', value: 'eg-affiliate-banners'},
          {title: 'Seach', value: 'eg-widget'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'widget',
      title: 'Widget',
      type: 'string',
      options: {
        list: [{title: 'Search', value: 'search'}],
        layout: 'radio',
      },
      hidden: ({parent}) => parent?.className !== 'eg-widget',
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
      options: {
        list: [
          {title: 'Expedia-US', value: 'us-expedia'},
          // {title: 'Expedia-CA', value: 'ca-expedia'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lobs',
      title: 'Lobs',
      type: 'string',
      options: {
        list: [
          {title: 'Stay & Flight', value: 'stays,flights'},
          {title: 'Flight', value: 'flights'},
          {title: 'Stay', value: 'stays'},
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.className !== 'eg-widget',
    }),
    defineField({
      name: 'network',
      title: 'Network',
      type: 'string',
      options: {
        list: [{title: 'PZ', value: 'pz'}],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'camref',
      title: 'Camref',
      type: 'string',
      options: {
        list: [
          {title: 'Expedia-US', value: '1100l49CGd'},
          // {title: 'Expedia-CA', value: '1101l49CIn'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Rectangle - 300x250', value: 'medium-rectangle'},
          {title: 'Leaderboard - 728x90', value: 'leaderboard'},
          {title: 'Wide-Skyscraper - 160x600', value: 'wide-skyscraper'},
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.className !== 'eg-affiliate-banners',
    }),
    defineField({
      name: 'imageType',
      title: 'Image',
      type: 'string',
      options: {
        list: [
          {title: 'Adventure', value: 'adventure'},
          {title: 'Beach', value: 'beach'},
          {title: 'Castle', value: 'castle'},
          {title: 'City', value: 'city'},
          {title: 'Coastal', value: 'coastal'},
          {title: 'Colorful Village', value: 'colorful-village'},
          {title: 'Fall', value: 'fall'},
          {title: 'Mountains', value: 'mountains'},
          {title: 'Nature', value: 'nature'},
          {title: 'Peaceful', value: 'peaceful'},
          {title: 'Relaxing', value: 'relaxing'},
          {title: 'Resort', value: 'resort'},
          {title: 'Romantic', value: 'romantic'},
          {title: 'Sailing', value: 'sailing'},
          {title: 'Searching', value: 'searching'},
          {title: 'Solo Trip', value: 'solo-trip'},
          {title: 'Sunset', value: 'sunset'},
          {title: 'Surfing', value: 'surfing'},
          {title: 'Tropical', value: 'tropical'},
          {title: 'Winter', value: 'winter'},
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.className !== 'eg-affiliate-banners',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Perfect cruise', value: 'ahoy-discover-perfect-cruise'},
          {
            title: 'Bye Bye bucket list hello adventure',
            value: 'bye-bye-bucket-list-hello-adventure',
          },
          {title: 'Explore world of travel', value: 'explore-world-travel'},
          {title: 'Find perfect car rental', value: 'find-perfect-car-rental'},
          {title: 'Find perfect getaway package', value: 'find-perfect-getaway-package'},
          {
            title: 'Hotel or treehouse? Find the perfect place to stay',
            value: 'hotel-treehouse-find-perfect-place-stay',
          },
          {
            title: 'Make it exciting with activities & attractions',
            value: 'make-exciting-activities-attractions',
          },
          {
            title: 'Ready for takeoff. Find your perfect flight',
            value: 'ready-takeoff-find-perfect-flight',
          },
          {
            title: 'Snow days. Find your ultimate ski getaway',
            value: 'snow-days-find-ultimate-ski-getaway',
          },
          {
            title: 'Search hotels, flights, cars, activities & more',
            value: 'search-hotels-flights-cars-activities-more',
          },
          {title: 'Start your travel planning', value: 'start-travel-planning'},
          {
            title: 'Sun seeker. Find the perfect beach getaway',
            value: 'sun-seeker-find-perfect-beach-getaway',
          },
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.className !== 'eg-affiliate-banners',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      options: {
        list: [
          {title: 'Expedia Home', value: 'home'},
          {title: 'Expedia Stays', value: 'stays'},
          {title: 'Expedia Flights', value: 'flights'},
          {title: 'Expedia Packages', value: 'packages'},
          {title: 'Expedia Cars', value: 'cars'},
          {title: 'Expedia Cruises', value: 'cruises'},
        ],
        layout: 'dropdown',
      },
      hidden: ({parent}) => parent?.className !== 'eg-affiliate-banners',
    }),
  ],
})
