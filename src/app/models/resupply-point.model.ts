export interface ResupplyPointLocation {
  name: string;
  milesFromTrail: number;
  locationType: ResupplyLocationType;
  resupplyType: ResupplyType;
  description: string;
  recommendations?: string[];
}

export interface ResupplyPoint {
  mileMarker: number;
  locations: ResupplyPointLocation[];
}

export interface ResupplyColors {
  main: string;
  border: string;
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
