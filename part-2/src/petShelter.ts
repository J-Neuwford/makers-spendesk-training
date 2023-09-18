import { Pet } from "./pet";

export class PetShelter {
  pets: Pet[];

  constructor(pets: Pet[]) {
    this.pets = pets;
  }

  addPet(pet: Pet): void {
    this.pets.push(pet);
  }

  adoptPet(name: string): void {
    const pet = this.pets.find((pet) => {
      if (pet.name === name) {
        pet.adopted = true;
        this.pets.splice(this.pets.indexOf(pet), 1);
        return pet;
      }
    });
  }

  displayPets(): void {
    console.log(this.pets);
  }

  allPets(): Pet[] {
    return this.pets;
  }

  searchPetsBySpecies(species: string): Pet[] {
    //console.log(this.pets.filter((pet) => pet.species === species));
    return this.pets.filter((pet) => pet.species === species);
  }

  searchPetsBySpecialSkill(skill: string): Pet[] {
    console.log(this.pets.filter((pet) => pet.specialSkills.includes(skill)));
    return this.pets.filter((pet) => pet.specialSkills.includes(skill));
  }
}
