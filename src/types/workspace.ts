export type ItemCategory = 'desk' | 'chair' | 'accessory';

export type AccessoryId = 'monitor' | 'lamp' | 'plant';

export type FurnishingOption = {
  id: string;
  name: string;
  pricePerMonth: number;
  swatchClassName: string;
};

export type AccessoryOption = {
  id: AccessoryId;
  name: string;
  pricePerMonth: number;
};

export type WorkspaceCatalog = {
  desks: FurnishingOption[];
  chairs: FurnishingOption[];
  accessories: AccessoryOption[];
};

export type AccessoryQuantities = Record<AccessoryId, number>;
