

export const CarriageTypesEnum = {
  FOURTH: 'fourth',
  THIRD: 'third',
  SECOND: 'second',
  FIRST: 'first',
}

const createCommonArea = (args) => {
  return { width: 26, height: 30, ...args };
};

const commonAreas1= [
  { x: 38, y: 0, width: 33, height: 24, index: 0 },
  createCommonArea({ x: 133, y: 58, index: 1 }),
  createCommonArea({ x: 133, y: 28, index: 2 }),
  createCommonArea({ x: 193, y: 58, index: 3 }),
  createCommonArea({ x: 193, y: 28, index: 4 }),
  createCommonArea({ x: 223, y: 58, index: 5 }),
  createCommonArea({ x: 223, y: 28, index: 6 }),
  createCommonArea({ x: 281, y: 58, index: 7 }),
  createCommonArea({ x: 281, y: 28, index: 8 }),
  createCommonArea({ x: 311, y: 58, index: 9 }),
  createCommonArea({ x: 311, y: 28, index: 10 }),
  createCommonArea({ x: 372, y: 58, index: 11 }),
  createCommonArea({ x: 372, y: 28, index: 12 }),
  createCommonArea({ x: 402, y: 58, index: 13 }),
  createCommonArea({ x: 402, y: 28, index: 14 }),
  createCommonArea({ x: 460, y: 58, index: 15 }),
  createCommonArea({ x: 460, y: 28, index: 16 }),
  createCommonArea({ x: 492, y: 58, index: 17 }),
  createCommonArea({ x: 492, y: 28, index: 18 }),
  createCommonArea({ x: 550, y: 58, index: 19 }),
  createCommonArea({ x: 550, y: 28, index: 20 }),
  createCommonArea({ x: 581, y: 58, index: 21 }),
  createCommonArea({ x: 581, y: 28, index: 22 }),
  createCommonArea({ x: 639, y: 58, index: 23 }),
  createCommonArea({ x: 639, y: 28, index: 24 }),
  createCommonArea({ x: 670, y: 58, index: 25 }),
  createCommonArea({ x: 670, y: 28, index: 26 }),
  createCommonArea({ x: 729, y: 58, index: 27 }),
  createCommonArea({ x: 729, y: 28, index: 28 }),
  createCommonArea({ x: 760, y: 58, index: 29 }),
  createCommonArea({ x: 760, y: 28, index: 30 }),
  createCommonArea({ x: 819, y: 58, index: 31 }),
  createCommonArea({ x: 819, y: 28, index: 32 }),
];

export const ClickableAreasMap = {
  [CarriageTypesEnum.FOURTH]: [
    { x: 38, y: 0, width: 33, height: 24, index: 0 },
    { x: 145, y: 53, width: 25, height: 17, index: 1 },
    { x: 145, y: 33, width: 25, height: 17, index: 2 },
    { x: 190, y: 53, width: 25, height: 17, index: 3 },
    { x: 190, y: 33, width: 25, height: 17, index: 4 },
    { x: 233, y: 53, width: 25, height: 17, index: 5 },
    { x: 233, y: 33, width: 25, height: 17, index: 6 },
    { x: 277, y: 53, width: 25, height: 17, index: 7 },
    { x: 277, y: 33, width: 25, height: 17, index: 8 },
    { x: 321, y: 53, width: 25, height: 17, index: 9 },
    { x: 321, y: 33, width: 25, height: 17, index: 10 },
    { x: 365, y: 53, width: 25, height: 17, index: 11 },
    { x: 365, y: 33, width: 25, height: 17, index: 12 },
    { x: 409, y: 53, width: 25, height: 17, index: 13 },
    { x: 409, y: 33, width: 25, height: 17, index: 14 },
    { x: 453, y: 53, width: 25, height: 17, index: 15 },
    { x: 453, y: 33, width: 25, height: 17, index: 16 },
    { x: 497, y: 53, width: 25, height: 17, index: 17 },
    { x: 497, y: 33, width: 25, height: 17, index: 18 },
    { x: 540, y: 53, width: 25, height: 17, index: 19 },
    { x: 540, y: 33, width: 25, height: 17, index: 20 },
    { x: 584, y: 53, width: 25, height: 17, index: 25 },
    { x: 584, y: 33, width: 25, height: 17, index: 22 },
    { x: 629, y: 53, width: 25, height: 17, index: 27 },
    { x: 629, y: 33, width: 25, height: 17, index: 24 },
    { x: 672, y: 53, width: 25, height: 17, index: 25 },
    { x: 672, y: 33, width: 25, height: 17, index: 26 },
    { x: 717, y: 53, width: 25, height: 17, index: 27 },
    { x: 717, y: 33, width: 25, height: 17, index: 28 },
    { x: 760, y: 53, width: 25, height: 17, index: 29 },
    { x: 760, y: 33, width: 25, height: 17, index: 30 },
    { x: 804, y: 53, width: 25, height: 17, index: 31 },
    { x: 804, y: 33, width: 25, height: 17, index: 32 },
    { x: 145, y: 110, width: 25, height: 17, index: 33 },
    { x: 190, y: 90, width: 25, height: 17, index: 34 },
    { x: 190, y: 110, width: 25, height: 17, index: 35 },
    { x: 233, y: 90, width: 25, height: 17, index: 36 },
    { x: 233, y: 110, width: 25, height: 17, index: 37 },
    { x: 277, y: 90, width: 25, height: 17, index: 38 },
    { x: 277, y: 110, width: 25, height: 17, index: 39 },
    { x: 321, y: 90, width: 25, height: 17, index: 40 },
    { x: 321, y: 110, width: 25, height: 17, index: 41 },
    { x: 365, y: 90, width: 25, height: 17, index: 42 },
    { x: 365, y: 110, width: 25, height: 17, index: 43 },
    { x: 409, y: 90, width: 25, height: 17, index: 44 },
    { x: 409, y: 110, width: 25, height: 17, index: 45 },
    { x: 453, y: 90, width: 25, height: 17, index: 46 },
    { x: 453, y: 110, width: 25, height: 17, index: 47 },
    { x: 497, y: 90, width: 25, height: 17, index: 48 },
    { x: 497, y: 110, width: 25, height: 17, index: 49 },
    { x: 540, y: 90, width: 25, height: 17, index: 50 },
    { x: 540, y: 110, width: 25, height: 17, index: 51 },
    { x: 584, y: 90, width: 25, height: 17, index: 52 },
    { x: 584, y: 110, width: 25, height: 17, index: 53 },
    { x: 629, y: 90, width: 25, height: 17, index: 54 },
    { x: 629, y: 110, width: 25, height: 17, index: 55 },
    { x: 672, y: 90, width: 25, height: 17, index: 56 },
    { x: 672, y: 110, width: 25, height: 17, index: 57 },
    { x: 717, y: 90, width: 25, height: 17, index: 58 },
    { x: 717, y: 110, width: 25, height: 17, index: 59 },
    { x: 760, y: 90, width: 25, height: 17, index: 60 },
    { x: 760, y: 110, width: 25, height: 17, index: 61 },
    { x: 804, y: 110, width: 25, height: 17, index: 62 },
  ],
  [CarriageTypesEnum.THIRD]: [
    ...commonAreas1,
    { x: 38, y: 0, width: 33, height: 24, index: 0 },
    { x: 134, y: 109, width: 41, height: 24, index: 33 },
    { x: 176, y: 109, width: 41, height: 24, index: 34 },
    { x: 222, y: 109, width: 41, height: 24, index: 35 },
    { x: 265, y: 109, width: 41, height: 24, index: 36 },
    { x: 312, y: 109, width: 41, height: 24, index: 37 },
    { x: 355, y: 109, width: 41, height: 24, index: 38 },
    { x: 402, y: 109, width: 41, height: 24, index: 39 },
    { x: 444, y: 109, width: 41, height: 24, index: 40 },
    { x: 491, y: 109, width: 41, height: 24, index: 41 },
    { x: 534, y: 109, width: 41, height: 24, index: 42 },
    { x: 581, y: 109, width: 41, height: 24, index: 43 },
    { x: 624, y: 109, width: 41, height: 24, index: 44 },
    { x: 670, y: 109, width: 41, height: 24, index: 45 },
    { x: 713, y: 109, width: 41, height: 24, index: 46 },
    { x: 759, y: 109, width: 41, height: 24, index: 47 },
    { x: 802, y: 109, width: 41, height: 24, index: 48 },
  ],
  [CarriageTypesEnum.SECOND]: [...commonAreas1],
  [CarriageTypesEnum.FIRST]: [
    { x: 38, y: 0, width: 33, height: 24, index: 0 },
    { x: 133, y: 28, width: 27, height: 60, index: 1 },
    { x: 193, y: 28, width: 27, height: 60, index: 3 },
    { x: 223, y: 28, width: 27, height: 60, index: 4 },
    { x: 281, y: 28, width: 27, height: 60, index: 5 },
    { x: 311, y: 28, width: 27, height: 60, index: 6 },
    { x: 372, y: 28, width: 27, height: 60, index: 7 },
    { x: 402, y: 28, width: 27, height: 60, index: 8 },
    { x: 460, y: 28, width: 27, height: 60, index: 9 },
    { x: 492, y: 28, width: 27, height: 60, index: 10 },
    { x: 550, y: 28, width: 27, height: 60, index: 11 },
    { x: 581, y: 28, width: 27, height: 60, index: 12 },
    { x: 639, y: 28, width: 27, height: 60, index: 13 },
    { x: 670, y: 28, width: 27, height: 60, index: 14 },
    { x: 729, y: 28, width: 27, height: 60, index: 15 },
    { x: 760, y: 28, width: 27, height: 60, index: 16 },
    { x: 819, y: 28, width: 27, height: 60, index: 18 },
  ],
};