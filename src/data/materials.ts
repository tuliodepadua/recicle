export interface MaterialType {
  id: number;
  name: string; 
  time: string;
  recycling_saving: string;
} 

type MaterialsType = MaterialType[];

const materials: MaterialsType = [
  {
    id: 1,
    name: "Polietileno de baixa densidade (LDPE)",
    time: "500 - 1.000 anos",
    recycling_saving: "50-60%",
  },
  {
    id: 2,
    name: "Polietileno de alta densidade (HDPE)", 
    time: "450 anos",
    recycling_saving: "50-60%",
  },
  {
    id: 3,
    name: "Polipropileno (PP)",
    time: "500 anos",
    recycling_saving: "70%",
  },
  {
    id: 4,
    name: "Polietileno tereftalato (PET)",
    time: "450 anos",
    recycling_saving: "40-60%",
  },
  {
    id: 5,
    name: "Poliestireno (PS)",
    time: "500 anos",
    recycling_saving: "60-70%",
  },
  {
    id: 6,
    name: "Policloreto de vinila (PVC)",
    time: "1000 anos",
    recycling_saving: "50-60%",
  },
];

export default materials;
