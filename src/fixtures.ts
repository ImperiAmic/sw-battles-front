import type { Battle, BattleFormData } from "./types";

export const roncesvallesBattle: Battle = {
  id: "111aaa111aaa111aaa111aaa",
  battleName: "Battle of Roncesvalles",
  conflict: "Muslim-Christian Conflicts in the Iberian Peninsula",
  year: 778,
  period: "BBY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Battle_of_Roncesvalles.jpg",
  imageAlt: "Depiction of the Battle of Roncesvalles",
  description:
    "Fought in 778, this ambush in the Pyrenees involved Basque forces attacking the rearguard of Charlemagne’s army. Though not a 'Catalan' army, the event impacted early Frankish efforts in the region that would eventually shape Catalonia.",
  lightSide: ["Basques", "Local mountain tribes"],
  darkSide: ["Frankish Empire"],
  doesLightSideWin: true,
};

export const tebasBattle: Battle = {
  id: "222bbb222bbb222bbb222bbb",
  battleName: "Battle of Tebas",
  conflict: "Frankish-Muslim Border Skirmishes",
  year: 793,
  period: "BBY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Battle_Tebas.jpg",
  imageAlt: "Imagined scene of the Battle of Tebas",
  description:
    "This lesser-known clash was part of early confrontations between Muslim forces and the Carolingians in what would become Catalonia. The battle showed the vulnerabilities of early Frankish outposts in Hispania.",
  lightSide: ["Frankish defenders"],
  darkSide: ["Al-Andalus raiders"],
  doesLightSideWin: false,
};

export const barcelonaBattle: Battle = {
  id: "333ccc333ccc333ccc333ccc",
  battleName: "Siege of Barcelona",
  conflict: "Reconquista",
  year: 801,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Barcelona_801_Siege.jpg",
  imageAlt: "Siege of Barcelona by Frankish forces",
  description:
    "Led by Louis the Pious, Frankish forces captured Barcelona from Muslim control in 801. This marked a turning point in establishing the Catalan counties under the Carolingian Empire.",
  lightSide: ["Frankish Empire", "Local Christian allies"],
  darkSide: ["Emirate of Córdoba"],
  doesLightSideWin: true,
};

export const lleidaBattle: Battle = {
  id: "444ddd444ddd444ddd444ddd",
  battleName: "Battle of Lleida",
  conflict: "Catalan Reconquest",
  year: 1149,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Battle_of_Lleida.jpg",
  imageAlt: "Depiction of Christian forces in Lleida",
  description:
    "Part of the Christian reconquest, the capture of Lleida in 1149 by the Count of Barcelona and allies marked the integration of western Catalonia into Christian rule.",
  lightSide: ["Catalans", "Aragonese"],
  darkSide: ["Almohads"],
  doesLightSideWin: true,
};

export const muretBattle: Battle = {
  id: "555eee555eee555eee555eee",
  battleName: "Battle of Muret",
  conflict: "Albigensian Crusade",
  year: 1213,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Battle_of_Muret_1213.jpg",
  imageAlt: "Illustration of the Battle of Muret",
  description:
    "Catalan forces led by King Peter II of Aragon faced a crushing defeat at the hands of Simon de Montfort. The loss curtailed Catalan ambitions in Occitania.",
  lightSide: ["Crown of Aragon"],
  darkSide: ["French Crusaders"],
  doesLightSideWin: false,
};

export const mallorcaBattle: Battle = {
  id: "666fff666fff666fff666fff",
  battleName: "Conquest of Mallorca",
  conflict: "Catalan Expansion",
  year: 1229,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Conquest_Mallorca_1229.jpg",
  imageAlt: "General view of Conquest of Mallorca",
  description:
    "Under King James I, Catalan-Aragonese forces conquered Mallorca from the Moors. It marked a major step in the Mediterranean expansion of Catalonia.",
  lightSide: ["Crown of Aragon", "Catalan nobles"],
  darkSide: ["Moorish Taifa of Mallorca"],
  doesLightSideWin: true,
};

export const llucmajorBattle: Battle = {
  id: "aaa111aaa111aaa111aaa111",
  battleName: "Battle of Llucmajor",
  conflict: "Unification of the Balearic Islands",
  year: 1349,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Battle_of_Llucmajor.jpg",
  imageAlt: "Naval Battle of Llucmajor",
  description:
    "In this decisive battle, King Peter IV of Aragon defeated James III of Mallorca, ending the independence of the Kingdom of Mallorca and integrating it fully into the Crown of Aragon.",
  lightSide: ["Crown of Aragon"],
  darkSide: ["Kingdom of Mallorca"],
  doesLightSideWin: true,
};

export const montjuicBattle: Battle = {
  id: "bbb222bbb222bbb222bbb222",
  battleName: "Battle of Montjuïc",
  conflict: "Reapers' War",
  year: 1641,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Battle_Montjuic_1641.jpg",
  imageAlt: "Catalan and French troops defending Montjuïc",
  description:
    "Catalan and French forces successfully defended Barcelona against the Spanish Crown. The battle strengthened Catalan resistance during the Reapers' War.",
  lightSide: ["Catalan rebels", "France"],
  darkSide: ["Spanish Crown"],
  doesLightSideWin: true,
};

export const almansaBattle: Battle = {
  id: "ccc333ccc333ccc333ccc333",
  battleName: "Battle of Almansa",
  conflict: "War of Spanish Succession",
  year: 1707,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Battle_of_Almansa_1707.jpg",
  imageAlt: "Battle of Almansa scene",
  description:
    "This major defeat of the pro-Habsburg forces led to the eventual suppression of Catalan institutions after the Bourbon victory in the War of Spanish Succession.",
  lightSide: ["Austrian Habsburgs", "Catalan allies"],
  darkSide: ["Bourbon Spanish troops", "French troops"],
  doesLightSideWin: false,
};

export const catalanBattles = [
  roncesvallesBattle,
  tebasBattle,
  barcelonaBattle,
];

export const vilafrancaFormBattle: BattleFormData = {
  battleName: "Battle of Vilafranca",
  conflict: "Guerra del Penedès",
  darkSide: "Los dolents, Los més dolents",
  description: "Coses coses coses coses coses coses",
  doesLightSideWin: true,
  lightSide: "Los bons, Los més bons",
  period: "BBY",
  year: 2025,
  imageUrl: "vilafranca.cat/foto.webp",
};

export const updatedAlmansaBattle: Battle = {
  id: "ccc333ccc333ccc333ccc333",
  battleName: "Killing of Almansa",
  conflict: "War of Spanish Succession",
  year: 1707,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Battle_of_Almansa_1707.jpg",
  imageAlt: "Battle of Almansa scene",
  description:
    "This major defeat of the pro-Habsburg forces led to the eventual suppression of Catalan institutions after the Bourbon victory in the War of Spanish Succession.",
  lightSide: ["Austrian Habsburgs", "Catalan allies"],
  darkSide: ["Bourbon Spanish troops", "French troops"],
  doesLightSideWin: false,
};

export const wrongUpdatedAlmansaBattle: Battle = {
  id: "alsosprachzarathustra",
  battleName: "Killing of Almansa",
  conflict: "War of Spanish Succession",
  year: 1707,
  period: "ABY",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/5/57/Battle_of_Almansa_1707.jpg",
  imageAlt: "Battle of Almansa scene",
  description:
    "This major defeat of the pro-Habsburg forces led to the eventual suppression of Catalan institutions after the Bourbon victory in the War of Spanish Succession.",
  lightSide: ["Austrian Habsburgs", "Catalan allies"],
  darkSide: ["Bourbon Spanish troops", "French troops"],
  doesLightSideWin: false,
};
