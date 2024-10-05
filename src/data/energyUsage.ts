interface ItemsUsingEnergyType {
  name: string;
  consumo_por_hora: number;
  description: string;
}

const itemsUsingEnergy:ItemsUsingEnergyType[] = [
  {
    name: "Lâmpada incandescente de 60W",
    consumo_por_hora: 0.06,
    description: "Uma lâmpada comum de 60 watts consome 0.06 kWh por hora. Com a energia economizada, você pode manter essa lâmpada acesa por várias horas."
  },
  {
    name: "Abastecimento de uma casa média",
    consumo_por_hora: 0.21139,
    description: "Uma casa média consome cerca de 1.5 kWh por hora, considerando eletrodomésticos e iluminação. A energia economizada pode ser usada para abastecer a casa por alguns minutos ou até horas, dependendo da economia."
  },
  {
    name: "Abastecimento de uma pequena cidade",
    consumo_por_hora: 10000,
    description: "O consumo médio de energia de uma pequena cidade pode chegar a 10.000 kWh por hora. A energia economizada em reciclagem de plásticos tem impacto pequeno no abastecimento, mas, em grande escala, pode representar uma contribuição significativa."
  },
  {
    name: "Lâmpada LED de 9W",
    consumo_por_hora: 0.009,
    description: "Uma lâmpada LED de 9 watts consome 0.009 kWh por hora. Este tipo de lâmpada é mais eficiente do que as lâmpadas incandescentes e fluorescentes."
  }
];
 
export default itemsUsingEnergy;
