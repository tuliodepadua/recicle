import items, { itemType } from "./items";
import materials, { MaterialType } from "./materials";
 

const calcWeight = (qtd : number, weight: number) => qtd * weight;

const calcAllItems = (quantities: { [key: string]: number }) => {
    let allWeightItems = 0;

    for (const key in quantities) {
        if (Object.prototype.hasOwnProperty.call(quantities, key)) {
            console.log('KEY',key);
            const quantitiesKey = Number(key) - 1;
            const quantity = quantities[key];
            const responseCalcWeight = calcWeight(quantity,items[quantitiesKey].weight)
            allWeightItems += responseCalcWeight;
            console.log(responseCalcWeight)
        }
    }
    return allWeightItems;
}

export {
    calcWeight,
    calcAllItems
}