import items from "./items";

const barrilPetroleo = 13600; 
const barrilPrice = 426.33 
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