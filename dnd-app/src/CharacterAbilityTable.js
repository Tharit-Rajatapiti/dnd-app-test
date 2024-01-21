import { useEffect, useState } from "react";

// // Sets default ability values and saves them to local storage
// const abilityValues = {
//     Strength: "10",
//     Dexterity: "10",
//     Constitution: "10",
//     Intelligence: "10",
//     Wisdom: "10",
//     Charisma: "10"
// };

// Ability names and abbreviations
const abilityList = [
    { abilityAbbreviation: "STR", abilityName: "Strength" },
    { abilityAbbreviation: "DEX", abilityName: "Dexterity" },
    { abilityAbbreviation: "CON", abilityName: "Constitution" },
    { abilityAbbreviation: "INT", abilityName: "Intelligence" },
    { abilityAbbreviation: "WIS", abilityName: "Wisdom" },
    { abilityAbbreviation: "CHA", abilityName: "Charisma" }
]

// localStorage.setItem("abilityValues", JSON.stringify(abilityValues))

export default function AbilityTable() {
    // Allows the value of the input box to be tracked and changed
    const [abilityValue, setAbilityValue] = useState({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10    
    });

    // Takes abilityValue and calculates abilityBonus
    const getAbilityBonus = (abilityValue) => {
        let abilityBonus = Math.floor(((abilityValue - 10) / 2));
        if (abilityBonus >= 0) {
            abilityBonus = "+" + abilityBonus
        };
        return [ "(", abilityBonus, ")" ];
    };

    const saveStrength = (event) => {
        abilityValue.Strength = event.target.value;
        localStorage.setItem("abilityValues", JSON.stringify(abilityValue));
        console.log(abilityValue)
    };

    useEffect(() => {
        console.log("reloaded")

        const v = JSON.parse(localStorage.getItem("abilityValues"))
        setAbilityValue(v)
        console.log(abilityValue)

        // const loadedAbilityValues = JSON.parse(localStorage.getItem("abilityValues"));
        // setAbilityValue(loadedAbilityValues);
        
        // document.getElementById("strength").value = loadedAbilityValues.Strength;
        // document.getElementById("dexterity").value = loadedAbilityValues.Dexterity;
        // document.getElementById("constitution").value = loadedAbilityValues.Constitution;
        // document.getElementById("intelligence").value = loadedAbilityValues.Intelligence;
        // document.getElementById("wisdom").value = loadedAbilityValues.Wisdom;
        // document.getElementById("charisma").value = loadedAbilityValues.Charisma;
    }, []);

    // Component for the ability input boxes
    return (
        <div id="abilityDiv" class="tabContent">
            <table className="abilityTable">
            <tbody>
                <tr>
                <td>
                    <p>
                    <b>STR</b>
                    </p>
                </td>
                <td>
                    <input
                    type="number"
                    className="abilityInput"
                    id="strength"
                    value={parseInt(abilityValue.Strength)}
                    min={0}
                    max={20}
                    onChange={saveStrength}
                    />
                </td>
                <td>
                    <p id="strengthNumber">{ getAbilityBonus(10) }</p>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

    )
};