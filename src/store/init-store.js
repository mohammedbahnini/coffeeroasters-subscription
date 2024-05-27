import {
  COFFEE_TYPE,
  DELIVERY_TYPE,
  DRINK_TYPE,
  GRIND_TYPE,
  QUANTITY_TYPE,
} from "./types";

/* export const accordions = [
  {
    type: DRINK_TYPE,
    selectedID: null,
    title: "How do you drink your coffee?",
    order: "01",
    altTitle: "Preferences",
    isOpen: true,
    choices: [
      {
        id: 1,
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 2,
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 3,
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    type: COFFEE_TYPE,
    selectedID: null,
    title: "What type of coffee?",
    order: "02",
    altTitle: "Bean Type",
    choices: [
      {
        id: 1,
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 2,
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 3,
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    type: QUANTITY_TYPE,
    selectedID: null,
    title: "How much would you like?",
    order: "03",
    altTitle: "Quantity",
    choices: [
      {
        id: 1,
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        prices: [7.2, 9, 60, 12],
      },
      {
        id: 2,
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        prices: [13, 17, 22],
      },
      {
        id: 3,
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        prices: [22, 32, 42],
      },
    ],
  },
  {
    type: GRIND_TYPE,
    selectedID: null,
    title: "Want us to grind them?",
    order: "04",
    altTitle: "Grind Option",
    choices: [
      {
        id: 1,
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 2,
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 3,
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    type: DELIVERY_TYPE,
    selectedID: null,
    title: "How often should we deliver?",
    order: "05",
    altTitle: "Deliveries",
    choices: [
      {
        id: 1,
        title: "Every week",
        price: 22,
        description: `$ per shipment. Includes free first-class shipping.`,
      },
      {
        id: 2,
        title: "Every 2 weeks",
        description: `$${prices[1]} per shipment. Includes free priority shipping.`,
      },
      {
        id: 3,
        title: "Every month",
        description: `$${prices[2]} per shipment. Includes free priority shipping.`,
      },
    ],
  },
]; */

export const accordions = {
  items: [
    {
      type: DRINK_TYPE,
      selectedID: null,
      title: "How do you drink your coffee?",
      order: "01",
      altTitle: "Preferences",
      isOpen: true,
      choices: [
        {
          id: 1,
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 3,
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      type: COFFEE_TYPE,
      selectedID: null,
      title: "What type of coffee?",
      order: "02",
      altTitle: "Bean Type",
      choices: [
        {
          id: 1,
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 2,
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 3,
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      type: QUANTITY_TYPE,
      selectedID: null,
      title: "How much would you like?",
      order: "03",
      altTitle: "Quantity",
      choices: [
        {
          id: 1,
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
          prices: [7.2, 9, 60, 12],
        },
        {
          id: 2,
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
          prices: [13, 17, 22],
        },
        {
          id: 3,
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
          prices: [22, 32, 42],
        },
      ],
    },
    {
      type: GRIND_TYPE,
      selectedID: null,
      title: "Want us to grind them?",
      order: "04",
      altTitle: "Grind Option",
      choices: [
        {
          id: 1,
          title: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 3,
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      type: DELIVERY_TYPE,
      selectedID: null,
      title: "How often should we deliver?",
      order: "05",
      altTitle: "Deliveries",
      choices: [
        {
          id: 1,
          title: "Every week",
          priceMultiplyedBy: 4,
          description: (price) => `$${price} per shipment. Includes free first-class shipping.`,
        },
        {
          id: 2,
          title: "Every 2 weeks",
          priceMultiplyedBy: 2,
          description: (price) => `$${price} per shipment. Includes free priority shipping.`,
        },
        {
          id: 3,
          title: "Every month",
          priceMultiplyedBy: 1,
          description: (price) => `$${price} per shipment. Includes free priority shipping.`,
        },
      ],
    },
  ]

};

