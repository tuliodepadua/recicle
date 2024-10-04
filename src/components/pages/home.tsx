import { useState } from "react";
import ComboboxTp, { ItemType } from "../atoms/ComboboxTp";
import materials, { MaterialType } from "../../data/materials";
import items, { itemType } from "../../data/items";
import { MaterialContext } from "../../contexts";
import { Input, Field, Label, Description } from "@headlessui/react";
import { calcAllItems } from "../../data/calcs";
import clsx from "clsx";

export default function Home() {
  const [materialStateContext, setMaterialStateContext] =
    useState<MaterialType | null>(null);

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const getMaterialSelected = (itemSelected: ItemType) => {
    const { id } = itemSelected;
    const materialSelected = materials.find((item) => item.id === id) || null;
    setMaterialStateContext(materialSelected);
  };

  const quantityChange = (id: number, value: string) => {
    const newValue = parseInt(value) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newValue,
    }));
  };

  return (
    <MaterialContext.Provider value={materialStateContext}>
      <header className='bg-slate-600 shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
            Calculadora
          </h1>
          {materialStateContext && materialStateContext.id}
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full flex'>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8  text-white flex-grow'>
            <div className='flex'>
              <div className='flex-grow'>Produto</div>
              <div className='flex-grow-0 text-left'>Quantidade</div>
            </div>
            <hr className='mt-5 mb-5' />
            {items.map((item) => {
              return (
                <div className='flex'>
                  <div className='flex-grow text-white'>{item.name}</div>
                  <div className='flex-grow-0'>
                    <Field>
                      <Field>
                        <Input
                          className={clsx(
                            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                          type='number'
                          value={quantities[item.id] || 0}
                          onChange={(e) =>
                            quantityChange(item.id, e.target.value)
                          }
                        />
                      </Field>
                    </Field>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8  text-white flex-grow'>
            <div className='flex'>
              <div className='flex-grow'>Impacto</div>
            </div>
            <hr className='mt-5 mb-5' />

            <div className='flex'>
              <div className='flex-grow'>Peso total</div>
              <div className='flex-grow-0 text-left'>
                {calcAllItems(quantities)}
              </div>
            </div>
            <div className='flex'>
              <div className='flex-grow'>Gasto energético para criação</div>
              <div className='flex-grow-0 text-left'>
                {calcAllItems(quantities)}
              </div>
            </div>
            <div className='flex'>
              <div className='flex-grow'>Economia energética da reciclagem</div>
              <div className='flex-grow-0 text-left'>
                {calcAllItems(quantities)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </MaterialContext.Provider>
  );
}
