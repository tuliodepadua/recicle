import { useState } from "react";
import items from "../../data/items";
import materials from "../../data/materials";
import { Input, Field } from "@headlessui/react";
import {
  calcAllItems,
  calcImpactOfRecycling,
  calcTimeActive,
} from "../../data/calcs";
import itemsUsingEnergy from "../../data/energyUsage";
import clsx from "clsx";

export default function Home() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const quantityChange = (id: number, value: string) => {
    const numberValue = parseInt(value);
    if (!isNaN(numberValue)) {
      const newValue = numberValue >= 0 ? numberValue : 0;
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: newValue,
      }));
    }
  };
  const { costSave, kwhSafe } = calcImpactOfRecycling(quantities);

  return (
    <>
      <header className='bg-slate-400 shadow-sm '>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-slate-800'>
            Calculadora
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='text-slate-700'>
            <div className='flex'>
              <div className='flex-grow'>Produto</div>
              <div className='flex-grow-0 text-left'>Quantidade</div>
            </div>
            <hr className='mt-5 mb-5 border-cyan-500' />
            {items.map((item) => (
              <div className='flex flex-col sm:flex-row'>
                <div className='flex-grow text-slate-700'>
                  <h2 className='font-bold'>{item.name}</h2>
                  <p className='text-xs italic text-gray-500'>
                    <b>Tempo para decomposição:</b>
                    {materials.map((material) => {
                      if (item.plastictype === material.id) {
                        return ` ${material.time}`;
                      }
                      return null;
                    })}
                  </p>
                </div>
                <div className='flex-grow-0'>
                  <Field>
                    <Field>
                      <Input
                        className={clsx(
                          "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-slate-700",
                          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
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
            ))}
          </div>
          <div className='text-slate-700'>
            <div className='flex'>
              <div className='flex-grow'>Impacto</div>
            </div>
            <hr className='mt-5 mb-5 border-cyan-500' />
            <div className='flex'>
              <div className='flex-grow'>Peso total</div>
              <div className='flex-grow-0 text-left'>
                {calcAllItems(quantities).toFixed(4)} Kg
              </div>
            </div>
            <div className='flex'>
              <div className='flex-grow'>Economia ao reciclar</div>
              <div className='flex-grow-0 text-left'>
                R$ {costSave.toFixed(2)}
              </div>
            </div>
            <div className='flex'>
              <div className='flex-grow'>Economia na reciclagem</div>
              <div className='flex-grow-0 text-left'>
                {kwhSafe.toFixed(4)} kHw/h
              </div>
            </div>
            <hr className='mt-5 mb-5 border-cyan-500' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {itemsUsingEnergy.map((item) => {
                const timeActive = calcTimeActive(
                  kwhSafe,
                  item.consumo_por_hora
                );
                if (timeActive) {
                  return (
                    <div className='border-cyan-700 bg-cyan-700/5 border-solid border rounded-lg p-2 min-h-36'>
                      <h2 className='font-bold'>{item.name}</h2>
                      <p className='text-sm'>
                        Tempo de funcionamento: <b>{timeActive}</b>.
                      </p>
                      <p className='text-sm pb-1 text-gray-500'>
                        {item.description}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
