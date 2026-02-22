export type Product = {
  name: string;
  strength?: string;
  category: "SR" | "CR" | "DR" | "EC" | "MUPS" | "IR" | "ER" | "Granules" | "Combo" | "Nutra";
  group: "Pharma" | "Combination" | "Nutraceutical";
};

export const products: Product[] = [
  { name: "Aceclofenac SR Pellets", strength: "70%, 60%, 50%", category: "SR", group: "Pharma" },
  { name: "Atorvastatin Pellets", strength: "7.5%, 10%, 15%", category: "IR", group: "Pharma" },
  { name: "Aspirin EC Pellets", strength: "65%, 45%", category: "EC", group: "Pharma" },
  { name: "Ambroxol HCl SR Pellets", strength: "35%, 30%, 20%, 18.75%", category: "SR", group: "Pharma" },
  { name: "Budesonide DR Pellets", strength: "0.88%, 0.50%", category: "DR", group: "Pharma" },
  { name: "Dexlansoprazole EC MUPS", strength: "15%, 22.5%", category: "MUPS", group: "Pharma" },
  { name: "Venlafaxine HCl SR Pellets", strength: "20%, 33%, 35%, 40%", category: "SR", group: "Pharma" },

  // --- Combination ---
  {
    name: "Atorvastatin + Clopidogrel + Aspirin EC",
    strength: "20 mg + 75 mg + 75 mg",
    category: "Combo",
    group: "Combination",
  },

  
  // --- Nutraceutical ---
  { name: "Curcumin Capsules", category: "Nutra", group: "Nutraceutical" },
  { name: "Omega-3 Fish Oil Capsules", category: "Nutra", group: "Nutraceutical" },
];
