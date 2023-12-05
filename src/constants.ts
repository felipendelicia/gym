export const MUSCLES = {
  shoulders: {
    name: "Hombros",
  },
  trapezius: {
    name: "Trapecios",
  },
  dorsal: {
    name: "Dorsales",
  },
  lowerBack: {
    name: "Espalda baja",
  },
  highChest: {
    name: "Pecho alto",
  },
  lowerChest: {
    name: "Pecho bajo",
  },
  middleChest: {
    name: "Pecho medio",
  },
  highBack: {
    name: "Espalda alta",
  },
  biceps: {
    name: "Biceps",
  },
  triceps: {
    name: "Triceps",
  },
  forearms: {
    name: "Antebrazos",
  },
  obliques: {
    name: "Oblicuos",
  },
  abdominals: {
    name: "Abdominales",
  },
  quadriceps: {
    name: "Cuadriceps",
  },
  hamstrings: {
    name: "Isquios",
  },
  calves: {
    name: "Pantorrillas",
  },
  glutes: {
    name: "Gluteos",
  },
};

export const MUSCULAR_GROUPS = {
  back: { name: "Espalda" },
  chest: { name: "Pecho" },
  legs: { name: "Piernas" },
  arms: { name: "Brazos" },
  core: { name: "Core" },
};

export function getMuscularGroupNames() {
  return Object.values(MUSCULAR_GROUPS).map(item => item.name);
}

export function getMuscleNames() {
  return Object.values(MUSCLES).map(item => item.name);
}