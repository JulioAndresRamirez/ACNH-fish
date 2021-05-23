import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
// Components
import Fish from '../Fish';
import Layout from '../../Layout/Layout';

export default {
  title: 'Fishes',
  component: Fish,
  decorators: [withKnobs],
};

//select setup

const options2 = [
  {
    id: 1,
    name: 'Bitterling',
    price: 900,
    seasons: {
      North: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
      South: [['May', 'Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish01.png',
  },
  {
    id: 2,
    name: 'Pale Chub',
    price: 160,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish02.png',
  },
  {
    id: 3,
    name: 'Crucian Carp',
    price: 160,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish03.png',
  },
  {
    id: 4,
    name: 'Dace',
    price: 240,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish04.png',
  },
  {
    id: 5,
    name: 'Carp',
    price: 300,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish05.png',
  },
  {
    id: 6,
    name: 'Koi',
    price: 4000,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '16:00-09:00',
    location: 'Pond',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish06.png',
  },
  {
    id: 7,
    name: 'Goldfish',
    price: 1300,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish07.png',
  },
  {
    id: 8,
    name: 'Pop-eyed Goldfish',
    price: 1300,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '09:00-16:00',
    location: 'Pond',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish08.png',
  },
  {
    id: 9,
    name: 'Ranchu Goldfish',
    price: 4500,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '09:00-16:00',
    location: 'Pond',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish09.png',
  },
  {
    id: 10,
    name: 'Killifish',
    price: 300,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish10.png',
  },
  {
    id: 11,
    name: 'Crawfish',
    price: 200,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish11.png',
  },
  {
    id: 12,
    name: 'Soft-shelled Turtle',
    price: 3750,
    seasons: {
      North: [['Aug', 'Sep']],
      South: [['Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish12.png',
  },
  {
    id: 13,
    name: 'Snapping Turtle',
    price: 5000,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: '21:00-04:00',
    location: 'River',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish13.png',
  },
  {
    id: 14,
    name: 'Tadpole',
    price: 100,
    seasons: {
      North: [['Mar', 'Apr', 'May', 'Jun', 'Jul']],
      South: [['Sep', 'Oct', 'Nov', 'Dec', 'Jan']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish14.png',
  },
  {
    id: 15,
    name: 'Frog',
    price: 120,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug']],
      South: [['Nov', 'Dec', 'Jan', 'Feb']],
    },
    schedule: 'All day',
    location: 'Pond',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish15.png',
  },
  {
    id: 16,
    name: 'Freshwater Goby',
    price: 400,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish16.png',
  },
  {
    id: 17,
    name: 'Loach',
    price: 400,
    seasons: {
      North: [['Mar', 'Apr', 'May']],
      South: [['Sep', 'Oct', 'Nov']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish17.png',
  },
  {
    id: 18,
    name: 'Catfish',
    price: 800,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: '16:00-09:00',
    location: 'Pond',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish18.png',
  },
  {
    id: 19,
    name: 'Giant Snakehead',
    price: 5500,
    seasons: {
      North: [['Jun', 'Jul', 'Aug']],
      South: [['Dec', 'Jan', 'Feb']],
    },
    schedule: '09:00-16:00',
    location: 'Pond',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish19.png',
  },
  {
    id: 20,
    name: 'Bluegill',
    price: 180,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish20.png',
  },
  {
    id: 21,
    name: 'Yellow Perch',
    price: 300,
    seasons: {
      North: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
      South: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish21.png',
  },
  {
    id: 22,
    name: 'Black Bass',
    price: 400,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish22.png',
  },
  {
    id: 23,
    name: 'Tilapia',
    price: 800,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish23.png',
  },
  {
    id: 24,
    name: 'Pike',
    price: 1800,
    seasons: {
      North: [['Sep', 'Oct', 'Nov', 'Dec']],
      South: [['Mar', 'Apr', 'May', 'Jun']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish24.png',
  },
  {
    id: 25,
    name: 'Pond Smelt',
    price: 500,
    seasons: {
      North: [['Dec', 'Jan', 'Feb']],
      South: [['Jun', 'Jul', 'Aug']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish25.png',
  },
  {
    id: 26,
    name: 'Sweetfish',
    price: 900,
    seasons: {
      North: [['Jul', 'Aug', 'Sep']],
      South: [['Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'River',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish26.png',
  },
  {
    id: 27,
    name: 'Cherry Salmon',
    price: 1000,
    seasons: {
      North: [
        ['Mar', 'Apr', 'May', 'Jun'],
        ['Sep', 'Oct', 'Nov'],
      ],
      South: [
        ['Mar', 'Apr', 'May'],
        ['Sep', 'Oct', 'Nov', 'Dec'],
      ],
    },
    schedule: '16:00-09:00',
    location: 'R. Clifftop',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish27.png',
  },
  {
    id: 28,
    name: 'Char',
    price: 3800,
    seasons: {
      North: [
        ['Mar', 'Apr', 'May', 'Jun'],
        ['Sep', 'Oct', 'Nov'],
      ],
      South: [
        ['Mar', 'Apr', 'May'],
        ['Sep', 'Oct', 'Nov', 'Dec'],
      ],
    },
    schedule: '16:00-09:00',
    location: 'R. Clifftop',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish28.png',
  },
  {
    id: 29,
    name: 'Golden Trout',
    price: 15000,
    seasons: {
      North: [
        ['Mar', 'Apr', 'May', 'Jun'],
        ['Sep', 'Oct', 'Nov'],
      ],
      South: [
        ['Mar', 'Apr', 'May'],
        ['Sep', 'Oct', 'Nov', 'Dec'],
      ],
    },
    schedule: '16:00-09:00',
    location: 'R. Clifftop',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish29.png',
  },
  {
    id: 30,
    name: 'Stringfish',
    price: 15000,
    seasons: {
      North: [['Dec', 'Jan', 'Feb', 'Mar']],
      South: [['Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: '16:00-09:00',
    location: 'R. Clifftop',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish30.png',
  },
  {
    id: 31,
    name: 'Salmon',
    price: 700,
    seasons: {
      North: [['Sep']],
      South: [['Mar']],
    },
    schedule: 'All day',
    location: 'R. Mouth',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish31.png',
  },
  {
    id: 32,
    name: 'King Salmon',
    price: 1800,
    seasons: {
      North: [['Sep']],
      South: [['Mar']],
    },
    schedule: 'All day',
    location: 'R. Mouth',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish32.png',
  },
  {
    id: 33,
    name: 'Mitten Crab',
    price: 2000,
    seasons: {
      North: [['Sep', 'Oct', 'Nov']],
      South: [['Mar', 'Apr', 'May']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish33.png',
  },
  {
    id: 34,
    name: 'Guppy',
    price: 1300,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish34.png',
  },
  {
    id: 35,
    name: 'Nibble Fish',
    price: 1500,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish35.png',
  },
  {
    id: 36,
    name: 'Angelfish',
    price: 3000,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish36.png',
  },
  {
    id: 37,
    name: 'Betta',
    price: 2500,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish37.png',
  },
  {
    id: 38,
    name: 'Neon Tetra',
    price: 500,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish38.png',
  },
  {
    id: 39,
    name: 'Rainbowfish',
    price: 800,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: '09:00-16:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish39.png',
  },
  {
    id: 40,
    name: 'Piranha',
    price: 2500,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '09:00-16:00 / 21:00-04:00',
    location: 'River',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish40.png',
  },
  {
    id: 41,
    name: 'Arowana',
    price: 10000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish41.png',
  },
  {
    id: 42,
    name: 'Dorado',
    price: 15000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '04:00-21:00',
    location: 'River',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish42.png',
  },
  {
    id: 43,
    name: 'Gar',
    price: 6000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'Pond',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish43.png',
  },
  {
    id: 44,
    name: 'Arapaima',
    price: 10000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'River',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish44.png',
  },
  {
    id: 45,
    name: 'Saddled Bichir',
    price: 4000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '21:00-04:00',
    location: 'River',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish45.png',
  },
  {
    id: 46,
    name: 'Sturgeon',
    price: 10000,
    seasons: {
      North: [['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
      South: [['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: 'All day',
    location: 'R. Mouth',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish46.png',
  },
  {
    id: 47,
    name: 'Mar Butterfly',
    price: 1000,
    seasons: {
      North: [['Dec', 'Jan', 'Feb', 'Mar']],
      South: [['Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish47.png',
  },
  {
    id: 48,
    name: 'Mar Horse',
    price: 1100,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish48.png',
  },
  {
    id: 49,
    name: 'Clown Fish',
    price: 650,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Smallest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish49.png',
  },
  {
    id: 50,
    name: 'Surgeonfish',
    price: 1000,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish50.png',
  },
  {
    id: 51,
    name: 'Butterfly Fish',
    price: 1000,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish51.png',
  },
  {
    id: 52,
    name: 'Napoleonfish',
    price: 10000,
    seasons: {
      North: [['Jul', 'Aug']],
      South: [['Jan', 'Feb']],
    },
    schedule: '04:00-21:00',
    location: 'Sea',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish52.png',
  },
  {
    id: 53,
    name: 'Zebra Turkeyfish',
    price: 500,
    seasons: {
      North: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish53.png',
  },
  {
    id: 54,
    name: 'Blowfish',
    price: 5000,
    seasons: {
      North: [['Nov', 'Dec', 'Jan', 'Feb']],
      South: [['May', 'Jun', 'Jul', 'Aug']],
    },
    schedule: '18:00-04:00',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish54.png',
  },
  {
    id: 55,
    name: 'Puffer Fish',
    price: 250,
    seasons: {
      North: [['Jul', 'Aug', 'Sep']],
      South: [['Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish55.png',
  },
  {
    id: 56,
    name: 'Anchovy',
    price: 200,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '04:00-21:00',
    location: 'Sea',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish56.png',
  },
  {
    id: 57,
    name: 'Horse Mackerel',
    price: 150,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish57.png',
  },
  {
    id: 58,
    name: 'Barred Knifejaw',
    price: 5000,
    seasons: {
      North: [['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish58.png',
  },
  {
    id: 59,
    name: 'Mar Bass',
    price: 400,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish59.png',
  },
  {
    id: 60,
    name: 'Red Snapper',
    price: 3000,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish60.png',
  },
  {
    id: 61,
    name: 'Dab',
    price: 300,
    seasons: {
      North: [['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
      South: [['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish61.png',
  },
  {
    id: 62,
    name: 'Olive Flounder',
    price: 800,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish62.png',
  },
  {
    id: 63,
    name: 'Squid',
    price: 500,
    seasons: {
      North: [['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']],
      South: [['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Medium',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish63.png',
  },
  {
    id: 64,
    name: 'Moray Eel',
    price: 2000,
    seasons: {
      North: [['Aug', 'Sep', 'Oct']],
      South: [['Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Narrow',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish64.png',
  },
  {
    id: 65,
    name: 'Ribbon Eel',
    price: 600,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Narrow',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish65.png',
  },
  {
    id: 66,
    name: 'Tune',
    price: 7000,
    seasons: {
      North: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
      South: [['Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'Pier',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish66.png',
  },
  {
    id: 67,
    name: 'Blue Marlin',
    price: 10000,
    seasons: {
      North: [
        ['Jul', 'Aug', 'Sep'],
        ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      ],
      South: [
        ['Jan', 'Feb', 'Mar'],
        ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      ],
    },
    schedule: 'All day',
    location: 'Pier',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish67.png',
  },
  {
    id: 68,
    name: 'Giant Trevally',
    price: 4500,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'Pier',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish68.png',
  },
  {
    id: 69,
    name: 'Mahi Mahi',
    price: 6000,
    seasons: {
      North: [['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']],
      South: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']],
    },
    schedule: 'All day',
    location: 'Pier',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish69.png',
  },
  {
    id: 70,
    name: 'Ocean Sunfish',
    price: 4000,
    seasons: {
      North: [['Jul', 'Aug', 'Sep']],
      South: [['Jan', 'Feb', 'Mar']],
    },
    schedule: '04:00-21:00',
    location: 'Sea',
    shadow: 'Large (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish70.png',
  },
  {
    id: 71,
    name: 'Ray',
    price: 3000,
    seasons: {
      North: [['Aug', 'Sep', 'Oct', 'Nov']],
      South: [['Feb', 'Mar', 'Apr', 'May']],
    },
    schedule: '04:00-21:00',
    location: 'Sea',
    shadow: 'X-Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish71.png',
  },
  {
    id: 72,
    name: 'Saw Shark',
    price: 12000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'Sea',
    shadow: 'Largest (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish72.png',
  },
  {
    id: 73,
    name: 'Hammerhead Shark',
    price: 8000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'Sea',
    shadow: 'Largest (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish73.png',
  },
  {
    id: 74,
    name: 'Great White Shark',
    price: 15000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: '16:00-09:00',
    location: 'Sea',
    shadow: 'Largest (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish74.png',
  },
  {
    id: 75,
    name: 'Whale Shark',
    price: 13000,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Largest (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish75.png',
  },
  {
    id: 76,
    name: 'Suckerfish',
    price: 1500,
    seasons: {
      North: [['Jun', 'Jul', 'Aug', 'Sep']],
      South: [['Dec', 'Jan', 'Feb', 'Mar']],
    },
    schedule: 'All day',
    location: 'Sea',
    shadow: 'Large (Fin)',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish76.png',
  },
  {
    id: 77,
    name: 'Football Fish',
    price: 2500,
    seasons: {
      North: [['Nov', 'Dec', 'Jan', 'Feb', 'Mar']],
      South: [['May', 'Jun', 'Jul', 'Aug', 'Sep']],
    },
    schedule: '16:00-09:00',
    location: 'Sea',
    shadow: 'Large',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish77.png',
  },
  {
    id: 78,
    name: 'Oarfish',
    price: 9000,
    seasons: {
      North: [['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']],
      South: [['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']],
    },
    schedule: '16:00-09:00',
    location: 'Sea',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish78.png',
  },
  {
    id: 79,
    name: 'Barreleye',
    price: 15000,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: '21:00-04:00',
    location: 'Sea',
    shadow: 'Small',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish79.png',
  },
  {
    id: 80,
    name: 'Coelacanth',
    price: 15000,
    seasons: {
      North: [['All year']],
      South: [['All year']],
    },
    schedule: 'All day',
    location: 'Sea (Rainy)',
    shadow: 'Largest',
    imageURL:
      'https://res.cloudinary.com/juliorafrecloud/image/upload/v1590362447/Fishes/Fish80.png',
  },
];

export const primaryFish = () => {
  const value = select('Fishes', options2, options2[0]);

  return (
    <Layout>
      <Fish
        id={value.id}
        name={value.name}
        price={value.price}
        location={value.location}
        schedule={value.schedule}
      />
    </Layout>
  );
};

export const secundaryFish = () => {
  const value = select('Fishes', options2, options2[0]);
  const inWater = boolean('In Water?', false);
  return (
    <Layout>
      <Fish
        id={value.id}
        name={value.name}
        price={value.price}
        location={value.location}
        schedule={value.schedule}
        seasons={value.seasons.South}
        inWater={inWater}
      />
    </Layout>
  );
};
