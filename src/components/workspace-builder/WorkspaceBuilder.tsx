'use client';

import { useMemo, useState } from 'react';

import {
  defaultAccessoryQuantities,
  MAX_ACCESSORY_QUANTITY,
  workspaceCatalog
} from '@/src/data/catalog';
import {
  getCheckoutSummaryLines,
  getNextAccessoryQuantity,
  getSelectedOption,
  getTotalPricePerMonth
} from '@/src/lib/workspace-builder';
import { AccessoryId } from '@/src/types/workspace';

import { CheckoutCard } from './CheckoutCard';
import { OptionCard } from './OptionCard';
import { SelectionSection } from './SelectionSection';
import { WorkspacePreview } from './WorkspacePreview';

const RENT_SUCCESS_MESSAGE =
  'Great choice! We will contact you on WhatsApp to schedule delivery in Bali.';

export function WorkspaceBuilder() {
  const [selectedDeskId, setSelectedDeskId] = useState(workspaceCatalog.desks[0].id);
  const [selectedChairId, setSelectedChairId] = useState(workspaceCatalog.chairs[0].id);
  const [rentMessage, setRentMessage] = useState('');
  const [accessoryQuantities, setAccessoryQuantities] = useState(defaultAccessoryQuantities);

  const selectedDesk = useMemo(
    () => getSelectedOption(workspaceCatalog.desks, selectedDeskId),
    [selectedDeskId]
  );
  const selectedChair = useMemo(
    () => getSelectedOption(workspaceCatalog.chairs, selectedChairId),
    [selectedChairId]
  );

  const totalPricePerMonth = useMemo(
    () =>
      getTotalPricePerMonth({
        selectedDesk,
        selectedChair,
        accessories: workspaceCatalog.accessories,
        selectedAccessoryQuantities: accessoryQuantities
      }),
    [selectedDesk, selectedChair, accessoryQuantities]
  );

  const checkoutSummaryLines = useMemo(
    () =>
      getCheckoutSummaryLines({
        catalog: workspaceCatalog,
        selectedDesk,
        selectedChair,
        selectedAccessoryQuantities: accessoryQuantities
      }),
    [selectedDesk, selectedChair, accessoryQuantities]
  );

  const handleAccessoryClick = (accessoryId: AccessoryId) => {
    setAccessoryQuantities((previousQuantities) => ({
      ...previousQuantities,
      [accessoryId]: getNextAccessoryQuantity({
        accessoryId,
        selectedAccessoryQuantities: previousQuantities,
        maxQuantity: MAX_ACCESSORY_QUANTITY
      })
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 px-4 py-6 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            monis.rent • Bali
          </span>
          <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Design your dream workspace
          </h1>
          <p className="mt-2 text-slate-600">
            Pick your setup visually, see pricing instantly, and rent in one click.
          </p>
        </header>

        <section className="grid gap-4 lg:grid-cols-[340px_1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-xl font-bold">1) Pick your essentials</h2>

            <SelectionSection title="Desk" helperText="Choose one">
              {workspaceCatalog.desks.map((desk) => (
                <OptionCard
                  key={desk.id}
                  title={desk.name}
                  subtitle={`$${desk.pricePerMonth}/month`}
                  isSelected={selectedDeskId === desk.id}
                  onClick={() => setSelectedDeskId(desk.id)}
                />
              ))}
            </SelectionSection>

            <SelectionSection title="Chair" helperText="Choose one">
              {workspaceCatalog.chairs.map((chair) => (
                <OptionCard
                  key={chair.id}
                  title={chair.name}
                  subtitle={`$${chair.pricePerMonth}/month`}
                  isSelected={selectedChairId === chair.id}
                  onClick={() => setSelectedChairId(chair.id)}
                />
              ))}
            </SelectionSection>

            <SelectionSection
              title="Accessories"
              helperText={`Click to cycle qty (0-${MAX_ACCESSORY_QUANTITY})`}
            >
              {workspaceCatalog.accessories.map((accessory) => (
                <OptionCard
                  key={accessory.id}
                  title={accessory.name}
                  subtitle={`$${accessory.pricePerMonth}/month • Qty: ${accessoryQuantities[accessory.id]}`}
                  isSelected={accessoryQuantities[accessory.id] > 0}
                  onClick={() => handleAccessoryClick(accessory.id)}
                />
              ))}
            </SelectionSection>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-xl font-bold">2) Live preview</h2>
            <p className="text-sm text-slate-500">What your setup will look like</p>

            <WorkspacePreview
              selectedDesk={selectedDesk}
              selectedChair={selectedChair}
              accessoryQuantities={accessoryQuantities}
            />

            <CheckoutCard
              summaryLines={checkoutSummaryLines}
              totalPricePerMonth={totalPricePerMonth}
              rentMessage={rentMessage}
              onRent={() => setRentMessage(RENT_SUCCESS_MESSAGE)}
            />
          </section>
        </section>
      </div>
    </main>
  );
}
