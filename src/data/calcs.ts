import items, { itemType } from "./items";
import materials, { MaterialType } from "./materials";
//Quantidade de plastico equivalente a um barril de petroleo 
const barrilPetroleo = 13600; // https://www.wwf.org.br/?14001/#:~:text=A%20reciclagem%20do%20pl%C3%A1stico%20economiza,de%201%20tonelada%20de%20petr%C3%B3leo.
//preço do barril
const barrilPrice = 426.33 // https://www.melhorcambio.com/petroleo-hoje#:~:text=O%20valor%20do%20barril%20de,em%20R%24%20426%2C33.
const recyclingEfficiency = .9;
const valueEnergy = 0.76447000;
const calcWeight = (qtd : number, weight: number) => qtd * weight;

const calcAllItems = (quantities: { [key: string]: number }) => {
    let allWeightItems = 0;

    for (const key in quantities) {
        if (Object.prototype.hasOwnProperty.call(quantities, key)) { 
            const quantitiesKey = Number(key) - 1;
            const quantity = quantities[key];
            const responseCalcWeight = calcWeight(quantity,items[quantitiesKey].weight)
            allWeightItems += responseCalcWeight; 
        }
    }
    return allWeightItems;
}
interface calcImpactOfRecyclingType {
    costSave: number;
    kwhSafe: number;
}
const calcImpactOfRecycling = (quantities: { [key: string]: number }):calcImpactOfRecyclingType => {
    let allWeightItems = 0;
  
    for (const key in quantities) {
        if (Object.prototype.hasOwnProperty.call(quantities, key)) {
            const quantitiesKey = Number(key) - 1;
            const quantity = quantities[key];
            const responseCalcWeight = calcWeight(quantity,items[quantitiesKey].weight)
            allWeightItems += responseCalcWeight; 
        }
    }
    const costSave = ((barrilPrice * allWeightItems) / barrilPetroleo) * recyclingEfficiency;
    const kwhSafe = costSave * valueEnergy;
    
    return { costSave, kwhSafe };
}

const calcTimeActive = (kwh: number, necessaryEnergy: number) => {
    const hour = kwh / necessaryEnergy;
    if (hour >= 1) {
        return ` ${Math.round(hour)}h ` 
    }
    if (hour * 60 >= 1) {
        return ` ${Math.round(hour * 60)}m ` 
    }
    if (hour * 3600 >= 1) {
        return ` ${Math.round(hour * 3600)}s ` 
    }
    return null;
}
export {
    calcAllItems,
    calcImpactOfRecycling,
    calcWeight,
    calcTimeActive
}