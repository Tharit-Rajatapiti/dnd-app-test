import {BaseCharacter} from "./BaseCharacter";

export class DndCharacter extends BaseCharacter {
    #class = "";
    #background = "";
    #characterName = "";
    #race = "";
    #alignment = "";
    #playerName = "";

    constructor() {
        super();
    }

    set class(value) {
        this.#class = value;
    }

    get class() {
        return this.#class;
    }

    get background() {
        return this.#background;
    }

    set background(value) {
        this.#background = value;
    }

    get characterName() {
        return this.#characterName;
    }

    set characterName(value) {
        this.#characterName = value;
    }

    get race() {
        return this.#race;
    }

    set race(value) {
        this.#race = value;
    }

    get alignment() {
        return this.#alignment;
    }

    set alignment(value) {
        this.#alignment = value;
    }

    get playerName() {
        return this.#playerName;
    }

    set playerName(value) {
        this.#playerName = value;
    }

    toJSON() {
        return {
            "characterStats": {
                "class": this.#class,
                "background": this.#background,
                "characterName": this.#characterName,
                "race": this.#race,
                "alignment": this.#alignment,
                "playerName": this.#playerName,
            },
            "abilityValues": super.toJSON(),
        }
    }
}