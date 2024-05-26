import { create } from "zustand";
import { accordions, capsulePrefix, grindIsEnable } from "./init-store";
import { COFFEE_TYPE, DELIVERY_TYPE, DRINK_TYPE, GRIND_TYPE, QUANTITY_TYPE } from "./types";
import { produce } from "immer";

export const Store = create((set, get) => {
    return {
        drinkTypeAccordionData: {
            title: 'How do you drink your coffee?',
            prefix: 'as',
            choices: [
                {
                    id: 1,
                    title: 'Capsule',
                    description: 'Compatible with Nespresso systems and similar brewers',
                },
                {
                    id: 2,
                    title: 'Filter',
                    description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
                },
                {
                    id: 3,
                    title: 'Espresso',
                    description: 'Dense and finely ground beans for an intense, flavorful experience',
                }
            ]
        },


        coffeeTypeAccordionData: {
            title: 'What type of coffee?',
            choices: [
                {
                    id: 1,
                    title: 'Single Origin',
                    description: 'Distinct, high quality coffee from a specific family-owned farm'
                },
                {
                    id: 2,
                    title: 'Decaf',
                    description: 'Just like regular coffee, except the caffeine has been removed'
                },
                {
                    id: 3,
                    title: 'Blended',
                    description: 'Combination of two or three dark roasted beans of organic coffees'
                }
            ]
        },


        quantityAccordionData: {
            title: 'How much would you like?',
            choices: [
                {
                    id: 1,
                    title: '250g',
                    description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
                },
                {
                    id: 2,
                    title: '500g',
                    description: 'Perfect option for a couple. Yields about 40 delectable cups.'
                },
                {
                    id: 3,
                    title: '1000g',
                    description: 'Perfect for offices and events. Yields about 90 delightful cups.'
                }
            ]
        },


        drinkTypeSelectedID: null,
        coffeeTypeSelectedID: null,
        quantitySelectedID: null,
        grindTypeSelectedID: null,
        deliverySelectedID: null,

        drinkTypePlaceholder: '_____',
        coffeeTypePlaceholder: '_____',
        quantityPlaceholder: '_____',
        grindPlaceholder: '_____',
        deliveryPlaceholder: '_____',

        accordions,
        drinkTypePrefix: 'as',
        grindIsEnable: true,

        indexCurrentAccordion: 0,

        setChoice: (type, id, title) => {
            //console.log(type, id);

            set(produce(state => {


                switch (type) {
                    case DRINK_TYPE: {
                        state.drinkTypeSelectedID = id;
                        state.accordions[0].selectedID = id;
                        state.drinkTypePlaceholder = title;

                        if (title === 'Capsule') {
                            state.drinkTypePrefix = 'usnig';
                            state.grindIsEnable = false;
                            state.grindTypeSelectedID = null,
                                state.accordions[3].selectedID = null;
                        }
                        else {
                            state.drinkTypePrefix = 'as';
                            state.grindIsEnable = true;
                        }
                        break;
                    }
                    case COFFEE_TYPE: {
                        state.coffeeTypeSelectedID = id;
                        state.accordions[1].selectedID = id;
                        state.coffeeTypePlaceholder = title;
                        break;
                    }
                    case QUANTITY_TYPE: {
                        state.quantitySelectedID = id;
                        state.accordions[2].selectedID = id;
                        state.quantityPlaceholder = title;
                        break;
                    }
                    case GRIND_TYPE: {
                        state.grindTypeSelectedID = id;
                        state.accordions[3].selectedID = id;
                        state.grindPlaceholder = title;
                        break;
                    }
                    case DELIVERY_TYPE: {
                        state.deliverySelectedID = id;
                        state.accordions[4].selectedID = id;
                        state.deliveryPlaceholder = title;
                        break;
                    }

                }

            }))


            // set((prevStore) => {
            //     if (type === COFFEE_TYPE)
            //         return { coffeeTypeSelectedID: id }
            //     else if (type === DRINK_TYPE)
            //         return { drinkTypeSelectedID: id }
            //     else if (type === QUANTITY_TYPE)
            //         return { quantitySelectedID: id }
            //     else return { ...prevStore }
            // })
        },
        setCurrentAccordion: (index) => {
            set(prevState => ({ indexCurrentAccordion: index }))
        }
    }
})