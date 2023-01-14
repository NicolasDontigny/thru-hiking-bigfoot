export interface ResupplyPoint {
  mileMarker: number;
  locations: ResupplyPointLocation[];
}

export interface ResupplyPointLocation {
  name: string;
  milesFromTrail: number;
  locationType: ResupplyLocationType;
  resupplyType: ResupplyType;
  icons: {
    favorite: boolean;
    camping: boolean;
    lodging: boolean;
    restaurants: boolean;
    grocery: boolean;
    store: boolean;
    gearShop: boolean;
    postOffice: boolean;
    box?: boolean;
  };
  description: string;
  recommendations?: string[];
}

export enum ResupplyLocationType {
  town,
  village,
  resort,
}

export enum ResupplyType {
  green,
  yellow,
  orange,
  red,
  blue,
}

export interface ResupplyColors {
  main: string;
  border: string;
}
