
export interface itemType {
  id: number;
  name: string;
  plastictype: number;
  weight: number;
} 

type itemsType =  itemType[];

const items:itemsType = [
  {
    id: 1,
    name: "Garrafa de água",
    plastictype: 4,
    weight: 0.025,
  },
  {
    id: 2,
    name: "Sacola plástica de supermercado",
    plastictype: 1,
    weight: 0.007,
  },
  {
    id: 3,
    name: "Embalagem de iogurte",
    plastictype: 3,
    weight: 0.015,
  },
  {
    id: 4,
    name: "Canudo descartável",
    plastictype: 3,
    weight: 0.002,
  },
  {
    id: 5,
    name: "Embalagem de alimentos (filme plástico)",
    plastictype: 1,
    weight: 0.005,
  },
  {
    id: 6,
    name: "Tampa de garrafa",
    plastictype: 3,
    weight: 0.0015,
  },
  {
    id: 7,
    name: "Copo descartável",
    plastictype: 5,
    weight: 0.005,
  },
  {
    id: 8,
    name: "Embalagem de shampoo",
    plastictype: 2,
    weight: 0.06,
  },
  {
    id: 9,
    name: "Frasco de detergente",
    plastictype: 2,
    weight: 0.055,
  },
  {
    id: 10,
    name: "Embalagem de biscoito",
    plastictype: 3,
    weight: 0.003,
  },
  {
    id: 11,
    name: "Frasco de óleo de cozinha",
    plastictype: 4,
    weight: 0.03,
  },
  {
    id: 12,
    name: "Saco de lixo",
    plastictype: 1,
    weight: 0.015,
  },
];

export default items;
