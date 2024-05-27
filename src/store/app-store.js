import { create } from "zustand";
import { accordions } from "./init-store";
import {
  COFFEE_TYPE,
  DELIVERY_TYPE,
  DRINK_TYPE,
  GRIND_TYPE,
  QUANTITY_TYPE,
} from "./types";
import { produce } from "immer";

export const Store = create((set) => {
  return {

    drinkTypeSelectedID: null,
    coffeeTypeSelectedID: null,
    quantitySelectedID: null,
    grindTypeSelectedID: null,
    deliverySelectedID: null,

    drinkTypePlaceholder: "_____",
    coffeeTypePlaceholder: "_____",
    quantityPlaceholder: "_____",
    grindPlaceholder: "_____",
    deliveryPlaceholder: "_____",
    prices: [0, 0, 0],
    accordions: [...accordions.items],

    drinkTypePrefix: "as",
    grindIsEnable: true,

    indexCurrentAccordion: 0,
    price: 0,
    priceMultiplyedBy: 0,

    setChoice: (type, id, title, priceMultiplyedBy, prices, deliveryIndex) => {

      set(
        produce((state) => {
          switch (type) {
            case DRINK_TYPE: {
              state.drinkTypeSelectedID = id;
              state.accordions[0].selectedID = id;
              state.drinkTypePlaceholder = title;

              if (title === "Capsule") {
                state.drinkTypePrefix = "usnig";
                state.grindIsEnable = false;
                (state.grindTypeSelectedID = null),
                  (state.accordions[3].selectedID = null);
              } else {
                state.drinkTypePrefix = "as";
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

              state.prices = [...prices];


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
              state.priceMultiplyedBy = priceMultiplyedBy;

              state.price = state.prices[deliveryIndex];

              console.log(state.prices[deliveryIndex]);

              break;
            }
          }
        }),
      );
    },
    setCurrentAccordion: (index) => {
      set((prevState) => ({ indexCurrentAccordion: index }));
    },
  };
});
