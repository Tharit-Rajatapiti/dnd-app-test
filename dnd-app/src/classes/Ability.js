/*
class Ability {
    private String abilityName;
    private Integer value;

    // getter
    public String getAbilityName() {
        return this.abilityName;
    }

    // setter
    public void setAbilityName(String value) {
        this.abilityName = value;
    }
}

Ability a = new Ability();
a.abilityName = "Strength"; // not ok
a.value = 20; // not ok

a.setAbilityName("John"); // use setter
a.getAbilityName(); // use getter
*/


export class Ability {
    #abilityName;
    #value;

    constructor(abilityName, value) {
        this.#abilityName = abilityName;
        this.#value = value;
    }

    set abilityName(value) {
        this.#abilityName = value;
    }

    get abilityName() {
        return this.#abilityName;
    }

    set value(value) {
        this.#value = value;
    }

    get value() {
        return this.#value;
    }
}
