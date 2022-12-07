import { ResupplyColors, ResupplyType } from '../models/resupply-point.model';

export const getResupplyMainColor: { [key in ResupplyType]: ResupplyColors } = {
  [ResupplyType.green]: {
    main: 'lightgreen',
    border: 'green',
  },
  [ResupplyType.yellow]: {
    main: 'yellow',
    border: '#ffd800',
  },
  [ResupplyType.orange]: {
    main: '#ffb807',
    border: '#ff9000',
  },
  [ResupplyType.red]: {
    main: '#f2946f',
    border: '#ef4b00',
  },
  [ResupplyType.blue]: {
    main: 'lightgreen',
    border: 'green',
  },
};

export const getResupplyColorLegend: { [key in ResupplyType]: string } = {
  [ResupplyType.green]: 'Great resupply, as good as it gets on trail',
  [ResupplyType.yellow]: 'Has mostly everything you need',
  [ResupplyType.orange]: 'Expensive and/or limited supplies',
  [ResupplyType.red]: 'Only snacks or less',
  [ResupplyType.blue]: 'Special resupply',
};
