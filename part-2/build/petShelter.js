"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetShelter = void 0;
var PetShelter = /** @class */ (function () {
    function PetShelter(pets) {
        this.pets = pets;
    }
    PetShelter.prototype.addPet = function (pet) {
        this.pets.push(pet);
    };
    PetShelter.prototype.adoptPet = function (name) {
        var _this = this;
        var pet = this.pets.find(function (pet) {
            if (pet.name === name) {
                pet.adopted = true;
                _this.pets.splice(_this.pets.indexOf(pet), 1);
                return pet;
            }
        });
    };
    PetShelter.prototype.displayPets = function () {
        console.log(this.pets);
    };
    PetShelter.prototype.allPets = function () {
        return this.pets;
    };
    PetShelter.prototype.searchPetsBySpecies = function (species) {
        //console.log(this.pets.filter((pet) => pet.species === species));
        return this.pets.filter(function (pet) { return pet.species === species; });
    };
    PetShelter.prototype.searchPetsBySpecialSkill = function (skill) {
        console.log(this.pets.filter(function (pet) { return pet.specialSkills.includes(skill); }));
        return this.pets.filter(function (pet) { return pet.specialSkills.includes(skill); });
    };
    return PetShelter;
}());
exports.PetShelter = PetShelter;
