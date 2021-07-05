export const neonifyText = (glowColor: string) => {
  return `0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px ${glowColor},
    0 0 80px ${glowColor},
    0 0 90px ${glowColor},
    0 0 100px ${glowColor},
    0 0 150px ${glowColor}`;
};

export const neonifyContainer = (glowColor: string) => {
  return `0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${glowColor},
    0 0 0.8rem ${glowColor},
    0 0 2.8rem ${glowColor},
    inset 0 0 1.3rem ${glowColor}`;
};

export const neonifyHr = (glowColor: string) => {
  return `0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${glowColor},
    0 0 0.8rem ${glowColor},
    0 0 2.8rem ${glowColor}`;
};
