import {Ability} from "./Ability";

export class BaseCharacter {
    #abilityStr;
    #abilityDex;
    #abilityCon;
    #abilityInt;
    #abilityWis;
    #abilityCha;

    constructor() {
        this.#abilityStr = new Ability("strength", 10);
        this.#abilityDex = new Ability("dexterity", 10);
        this.#abilityCon = new Ability("constitution", 10);
        this.#abilityInt = new Ability("intelligence", 10);
        this.#abilityWis = new Ability("wisdom", 10);
        this.#abilityCha = new Ability("charisma", 10);
    }

    get abilityStr() {
        return this.#abilityStr;
    }

    get abilityDex() {
        return this.#abilityDex;
    }

    get abilityCon() {
        return this.#abilityCon;
    }

    get abilityInt() {
        return this.#abilityInt;
    }

    get abilityWis() {
        return this.#abilityWis;
    }

    get abilityCha() {
        return this.#abilityCha;
    }

    set abilityStr(value) {
        this.#abilityStr = value;
    }

    set abilityDex(value) {
        this.#abilityDex = value;
    }

    set abilityCon(value) {
        this.#abilityCon = value;
    }

    set abilityInt(value) {
        this.#abilityInt = value;
    }

    set abilityWis(value) {
        this.#abilityWis = value;
    }

    set abilityCha(value) {
        this.#abilityCha = value;
    }
    
    toJSON() {
        return {
            "strength": this.#abilityStr,
            "dexterity": this.#abilityDex,
            "constitution": this.#abilityCon,
            "intelligence": this.#abilityInt,
            "wisdom": this.#abilityWis,
            "charisma": this.#abilityCha,
        }
    }
}
