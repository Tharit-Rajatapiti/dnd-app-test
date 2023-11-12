import { useState, useEffect } from "react";
import {characterGlobalState} from "./states/CharacterState";
import {useRecoilState} from "recoil";

// Sets default ability values and saves them to local storage
let defaultAbilityValueList = {
    Strength: "10",
    Dexterity: "10",
    Constitution: "10",
    Intelligence: "10",
    Wisdom: "10",
    Charisma: "10"
};

// Ability names and abbreviations
const abilityList = [
    { abilityAbbreviation: "STR", abilityName: "Strength" },
    { abilityAbbreviation: "DEX", abilityName: "Dexterity" },
    { abilityAbbreviation: "CON", abilityName: "Constitution" },
    { abilityAbbreviation: "INT", abilityName: "Intelligence" },
    { abilityAbbreviation: "WIS", abilityName: "Wisdom" },
    { abilityAbbreviation: "CHA", abilityName: "Charisma" }
]

//let parsedAbilityValues = JSON.parse(localStorage.getItem("abilityValues"));

export const AbilityInput = ({initialAbilityValue, abilityAbbreviation, abilityName}) => {
    const [characterGlobal, setCharacterGlobal] = useRecoilState(characterGlobalState);

    // Allows the value of the input box to be tracked and changed
    const [abilityValue, setAbilityValue] = useState(initialAbilityValue);

    // Takes abilityValue and calculates abilityBonus
    const getAbilityBonus = (abilityValue) => {
        let abilityBonus = Math.floor(((abilityValue - 10) / 2));
        if (abilityBonus >= 0) {
            abilityBonus = "+" + abilityBonus
        };
        return [ "(", abilityBonus, ")" ];
    };

    const changeAbilityValue = (event) => {
        // Changes the visible text ability value
        setAbilityValue(event.target.value);

        // Changes the ability value in 
        //abilityValues[abilityName] = event.target.value;
        
        // Saves abilityValueList to local storage
        //localStorage.setItem("abilityValues", JSON.stringify(abilityValues))

        const value = parseInt(event.target.value)
        switch (abilityName) {
            case "Strength":
                characterGlobal.abilityStr.value = value;
                break;
            case "Dexterity":
                characterGlobal.abilityDex.value = value;
                break;
            case "Constitution":
                characterGlobal.abilityCha.value = value;
                break;
            case "Intelligence":
                characterGlobal.abilityInt.value = value;
                break;
            case "Wisdom":
                characterGlobal.abilityWis.value = value;
                break;
            case "Charisma":
                characterGlobal.abilityCha.value = value;
                break;
        }
    };    

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
            id={abilityName}
            value={abilityValue}
            min={0}
            max={20}
            onChange={changeAbilityValue}
            />
        </td>
        <td>
            <p id={abilityName + "value" }>{ getAbilityBonus(abilityValue) }</p>
        </td>
        </tr>
    )
};
 
// Table which displays the ability input boxes
export default function AbilityTable({characterClass}) {
    const [characterGlobal, setCharacterGlobal] = useRecoilState(characterGlobalState);

    const loadAbilityValues = () => {
        const currentAbilityValues = localStorage.getItem("abilityValues");
        if (currentAbilityValues != null) {
            return JSON.parse(currentAbilityValues);
        }
        else {
            return defaultAbilityValueList;
        }
    }

    const getAbilityValue = (abilityName) => {
        switch (abilityName) {
            case "Strength":
                return characterGlobal.abilityStr.value;
            case "Dexterity":
                return characterGlobal.abilityDex.value;
            case "Constitution":
                return characterGlobal.abilityCha.value;
            case "Intelligence":
                return characterGlobal.abilityInt.value;
            case "Wisdom":
                return characterGlobal.abilityWis.value;
            case "Charisma":
                return characterGlobal.abilityCha.value;
        }
    }

    return (
        <div id="abilityDiv" className="tabContent">
            <div>{characterClass}</div>
            <table className="abilityTable">
                <tbody>
                    <tr>
                        {/* Maps the values in abilityList to the abilityInput component */}
                        <td>
                           {abilityList.map((ability) => 
                                (<AbilityInput
                                abilityAbbreviation={ability.abilityAbbreviation}
                                abilityName={ability.abilityName}
                                initialAbilityValue={getAbilityValue(ability.abilityName)}
                                />)
                           )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};