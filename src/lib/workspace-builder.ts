import {
  AccessoryId,
  AccessoryOption,
  AccessoryQuantities,
  FurnishingOption,
  WorkspaceCatalog
} from '@/src/types/workspace';

export const getSelectedOption = (options: FurnishingOption[], selectedId: string): FurnishingOption =>
  options.find((option) => option.id === selectedId) ?? options[0];

export const getTotalPricePerMonth = ({
  selectedDesk,
  selectedChair,
  accessories,
  selectedAccessoryQuantities
}: {
  selectedDesk: FurnishingOption;
  selectedChair: FurnishingOption;
  accessories: AccessoryOption[];
  selectedAccessoryQuantities: AccessoryQuantities;
}): number => {
  const accessoriesTotal = accessories.reduce((sum, accessory) => {
    return sum + accessory.pricePerMonth * (selectedAccessoryQuantities[accessory.id] ?? 0);
  }, 0);

  return selectedDesk.pricePerMonth + selectedChair.pricePerMonth + accessoriesTotal;
};

export const getCheckoutSummaryLines = ({
  catalog,
  selectedDesk,
  selectedChair,
  selectedAccessoryQuantities
}: {
  catalog: WorkspaceCatalog;
  selectedDesk: FurnishingOption;
  selectedChair: FurnishingOption;
  selectedAccessoryQuantities: AccessoryQuantities;
}): string[] => {
  const accessoryLines = catalog.accessories
    .filter((accessory) => selectedAccessoryQuantities[accessory.id] > 0)
    .map(
      (accessory) => `${accessory.name} × ${selectedAccessoryQuantities[accessory.id]}`
    );

  return [`Desk: ${selectedDesk.name}`, `Chair: ${selectedChair.name}`, ...accessoryLines];
};

export const getNextAccessoryQuantity = ({
  accessoryId,
  selectedAccessoryQuantities,
  maxQuantity
}: {
  accessoryId: AccessoryId;
  selectedAccessoryQuantities: AccessoryQuantities;
  maxQuantity: number;
}): number => {
  const currentQuantity = selectedAccessoryQuantities[accessoryId] ?? 0;

  return currentQuantity >= maxQuantity ? 0 : currentQuantity + 1;
};
