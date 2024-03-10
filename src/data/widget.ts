import {IconType, Status} from 'src/library/types';

const data = {
  weather: {
    label: 'Melbourne',
    temperature: 32,
    dateTime: new Date().toISOString(),
    icon: 'snowy' as IconType,
  },
  forecast: [
    {
      label: 'Humidity',
      value: '78%',
    },
    {
      label: 'Chance of Rain',
      value: '34%',
    },
    {
      label: 'Wind',
      value: '21',
      meta: 'kmh',
    },
    {
      label: 'Tomorrow',
      value: '30°',
      icon: 'sunny' as IconType,
    },
  ],
  delayedRoutes: [
    {
      id: '1',
      status: 'high' as Status,
      name: 'Monash Fwy Out',
      via: ['Kings Way', 'Eastlink'],
      distance: 13,
      duration: 45,
    },
    {
      id: '2',
      status: 'high' as Status,
      name: 'Monash Fwy Out',
      via: ['Kings Way', 'Eastlink'],
      distance: 15,
      duration: 28,
    },
    {
      id: '3',
      status: 'medium' as Status,
      name: 'Western Ring Road',
      via: ['West Gate Fwy', 'Western Fwy'],
      distance: 5,
      duration: 5,
    },
    {
      id: '4',
      status: 'medium' as Status,
      name: 'Eastern Fwy',
      via: ['Hoddle St', 'Springvale Rd'],
      distance: 15,
      duration: 25,
    },
  ],
};

export default data;
