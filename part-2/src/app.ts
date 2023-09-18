import { Pet } from "./pet";
import { PetShelter } from "./petShelter";

const dog: Pet = {
  name: "fido",
  species: "dog",
  age: 4,
  adopted: true,
  specialSkills: ["jumping", "catching", "rolling"],
};

const cat: Pet = {
  name: "Hilda",
  species: "cat",
  age: 3,
  adopted: true,
  specialSkills: ["throwing up"],
};

const shelter = new PetShelter([]);

shelter.addPet(dog);
shelter.addPet(cat);

shelter.displayPets();
console.log("...");

console.log(` species matches: ${shelter.searchPetsBySpecies("cat")}`);

shelter.searchPetsBySpecialSkill("throwing up");

shelter.adoptPet("Hilda");

//shelter.displayPets();
