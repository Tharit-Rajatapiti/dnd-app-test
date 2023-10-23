import { useState } from "react";

// Sets default ability values and saves them to local storage
let abilityValueList = {
    Strength: "10",
    Dexterity: "10",
    Constitution: "10",
    Intelligence: "10",
    Wisdom: "10",
    Charisma: "10"
};

localStorage.setItem("abilityValues", JSON.stringify(abilityValueList))

function AbilityInput({ abilityAbbreviation, abilityName }) {
    // Allows the value of the input box to be tracked and changed
    const [abilityValue, setAbilityValue] = useState(10);

    // Takes abilityValue and calculates abilityBonus
    function getAbilityBonus(abilityValue) {
        let abilityBonus = Math.floor(((abilityValue - 10) / 2));
        if (abilityBonus >= 0) {
            abilityBonus = "+" + abilityBonus
        };
        return [ "(", abilityBonus, ")" ];
    };
    
    function changeAbilityValue(event) {
        // Changes the ability value
        setAbilityValue(event.target.value)
        // Adds the ability name and value as a key-value pair to abilityValueList
        abilityValueList[abilityName] = event.target.value;
        // Saves abilityValueList to local storage
        localStorage.setItem("abilityValues", JSON.stringify(abilityValueList))
    };
    
    // Component for the ability input boxes
    return (
        <tr>
        <td>
            <p>
            <b>{abilityAbbreviation}</b>
            </p>
        </td>
        <td>
            <input
            type="number"
            className="abilityInput"
            id={"manual" + abilityName}
            value={abilityValue}
            min={0}
            max={20}
            onChange={changeAbilityValue}
            />
        </td>
        <td>
            <p id={ "manual" + abilityName + "number" }>{ getAbilityBonus(abilityValue) }</p>
        </td>
        </tr>
    )
};
 
// Table which displays the ability input boxes
export default function AbilityTable() {
    return (
        <div id="abilityDiv" class="tabContent">
            <table className="abilityTable">
                <tbody>
                <AbilityInput 
                    abilityAbbreviation={"STR"}
                    abilityName={"Strength"}
                />
                <AbilityInput 
                    abilityAbbreviation={"DEX"}
                    abilityName={"Dexterity"}
                />
                <AbilityInput 
                    abilityAbbreviation={"CON"}
                    abilityName={"Constitution"}
                />
                <AbilityInput 
                    abilityAbbreviation={"INT"}
                    abilityName={"Intelligence"}
                />
                <AbilityInput 
                    abilityAbbreviation={"WIS"}
                    abilityName={"Wisdom"}
                />
                <AbilityInput 
                    abilityAbbreviation={"CHA"}
                    abilityName={"Charisma"}
                />
                </tbody>
            </table>
        </div>
    )
};