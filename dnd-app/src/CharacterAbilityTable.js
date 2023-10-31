import { useEffect, useState } from "react";

// Sets default ability values and saves them to local storage
let abilityValueList = {
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

localStorage.setItem("abilityValues", JSON.stringify(abilityValueList))

const AbilityInput = ({ abilityAbbreviation, abilityName }) => {
    // Allows the value of the input box to be tracked and changed
    const [abilityValue, setAbilityValue] = useState(10);

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
        setAbilityValue(event.target.value)
        // Changes the ability value in 
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
export const AbilityTable = ({characterClass}) => {
    return (
        <div id="abilityDiv" class="tabContent">
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
                                />)
                           )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

const AbilityTableSave = () => {
    const [abilityValues, setAbilityValuesList] = useState({});

    const loadedAbilityValueList = JSON.parse(localStorage.getItem("abilityValues"));
    
    document.getElementById("Dexterity").value = loadedAbilityValueList.Dexterity;
}