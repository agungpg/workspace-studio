import { AccessoryQuantities, WorkspaceCatalog } from '@/src/types/workspace';

export const MAX_ACCESSORY_QUANTITY = 3;

export const workspaceCatalog: WorkspaceCatalog = {
  desks: [
    {
      id: 'desk-light',
      name: 'Nomad Light Desk',
      pricePerMonth: 49,
      swatchClassName: 'bg-amber-300'
    },
    {
      id: 'desk-dark',
      name: 'Studio Walnut Desk',
      pricePerMonth: 59,
      swatchClassName: 'bg-amber-700'
    }
  ],
  chairs: [
    {
      id: 'chair-ergonomic',
      name: 'Ergo Cloud Chair',
      pricePerMonth: 45,
      swatchClassName: 'bg-slate-700'
    },
    {
      id: 'chair-minimal',
      name: 'Zen Mesh Chair',
      pricePerMonth: 39,
      swatchClassName: 'bg-slate-500'
    }
  ],
  accessories: [
    { id: 'monitor', name: '4K Monitor', pricePerMonth: 19 },
    { id: 'lamp', name: 'Desk Lamp', pricePerMonth: 9 },
    { id: 'plant', name: 'Green Plant', pricePerMonth: 7 }
  ]
};

export const defaultAccessoryQuantities: AccessoryQuantities = {
  monitor: 1,
  lamp: 1,
  plant: 1
};
