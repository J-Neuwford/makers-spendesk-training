"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var petShelter_1 = require("./petShelter");
var dog = {
    name: "fido",
    species: "dog",
    age: 4,
    adopted: true,
    specialSkills: ["jumping", "catching", "rolling"],
};
var cat = {
    name: "Hilda",
    species: "cat",
    age: 3,
    adopted: true,
    specialSkills: ["throwing up"],
};
var shelter = new petShelter_1.PetShelter([]);
shelter.addPet(dog);
shelter.addPet(cat);
shelter.displayPets();
console.log("...");
console.log(" species matches: ".concat(shelter.searchPetsBySpecies("cat")));
shelter.searchPetsBySpecialSkill("throwing up");
shelter.adoptPet("Hilda");
//shelter.displayPets();
