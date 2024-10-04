import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export interface ItemType {
  id: number;
  name: string;
}
interface ComboboxTpProps {
  items: ItemType[];
  onChange: (value: ItemType) => void;
}
export type ItemsType = ItemType[];

export default function ComboboxTp({ items = [], onChange }: ComboboxTpProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ItemType>(items[0]);

  const filteredItem =
    query === ""
      ? items
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selected}
      onChange={(value: ItemType) => {
        setSelected(value);
        onChange(value);
      }}
      onClose={() => setQuery("")}
    >
      <div className='relative'>
        <ComboboxInput
          className={clsx(
            "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          displayValue={(person: ItemType) => person?.name}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
          <ChevronDownIcon className='size-4 fill-white/60 group-data-[hover]:fill-white' />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor='bottom'
        transition
        className={clsx(
          "w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredItem.map((item: ItemType) => (
          <ComboboxOption
            key={item.id}
            value={item}
            className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'
          >
            <CheckIcon className='invisible size-4 fill-white group-data-[selected]:visible' />
            <div className='text-sm/6 text-white'>{item.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
