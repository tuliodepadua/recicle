import { useState } from "react";
import items from "../../data/items";
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
      <header className='bg-slate-600 shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            Calculadora
          </h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full grid grid-cols-2 gap-4'>
          <div className='  text-white '>
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
          <div className='  text-white '>
            <div className='flex'>
              <div className='flex-grow'>Impacto</div>
            </div>
            <hr className='mt-5 mb-5' />

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
                {kwhSafe.toFixed(4)} KHw/h
              </div>
            </div>
            <hr className='mt-5 mb-5' />

            <div className='grid grid-cols-1 gap-1'>
              <div>Impacto</div>
              <div className='pt-3 grid grid-cols-2 gap-2'>
                {itemsUsingEnergy.map((item) => {
                  const timeActive = calcTimeActive(
                    kwhSafe,
                    item.consumo_por_hora
                  );
                  if (timeActive) {
                    return (
                      <div className='border-cyan-200 border-solid border rounded-lg p-2 min-h-36'>
                        <h2 className='font-bold'>{item.name}</h2>
                        <p className='text-sm'>
                          Tempo de funcionamento: <b>{timeActive}</b>.
                        </p>
                        <p className='text-sm pb-1 text-gray-300'>
                          {item.description}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
