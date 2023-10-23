export default function StarterTable() {
    return (
        <div id="starterDiv" class="tabContent">
            <table className="starterTable">
            <tbody>
                <tr>
                <td>
                    {/* Class options form */}
                    <div id="classDiv">
                    <form id="classForm">
                        Class: <br />
                        <select id="classOptions">
                        <option value="" />
                        <option value="barbarian">Barbarian</option>
                        <option value="bard">Bard</option>
                        <option value="cleric">Cleric</option>
                        <option value="druid">Druid</option>
                        <option value="fighter">Fighter</option>
                        <option value="monk">Monk</option>
                        <option value="paladin">Paladin</option>
                        <option value="ranger">Ranger</option>
                        <option value="rogue">Rogue</option>
                        <option value="sorcerer">Sorcerer</option>
                        <option value="warlock">Warlock</option>
                        <option value="wizard">Wizard</option>
                        </select>
                    </form>
                    </div>
                </td>
                <td>
                    {/* Background options form */}
                    <div id="backgroundDiv">
                    <form id="backgroundForm">
                        Background: <br />
                        <select id="backgroundOptions">
                        <option value="" />
                        <option value="acolyte">Acolyte</option>
                        <option value="charlatan">Charlatan</option>
                        <option value="criminal">Criminal</option>
                        <option value="spy">*Spy</option>
                        <option value="entertainer">Entertainer</option>
                        <option value="gladiator">*Gladiator</option>
                        <option value="folkHero">Folk Hero</option>
                        <option value="guildArtisan">Guild Artisan</option>
                        <option value="guildMerchant">*Guild Merchant</option>
                        <option value="hermit">Hermit</option>
                        <option value="noble">Noble</option>
                        <option value="knight">*Knight</option>
                        <option value="outlander">Outlander</option>
                        <option value="sage">Sage</option>
                        <option value="sailor">Sailor</option>
                        <option value="pirate">*Pirate</option>
                        <option value="soldier">Soldier</option>
                        <option value="urchin">Urchin</option>
                        </select>
                    </form>
                    </div>
                </td>
                <td>
                    {/* Character name open text box */}
                    <div id="characterNameDiv">
                        Character Name:
                        <br />
                        <input type="text"></input>
                    </div>
                </td>
                </tr>
                <tr>
                <td>
                    {/* Race options form */}
                    <div id="raceDiv">
                    <form id="raceForm">
                        Race: <br />
                        <select id="raceOptions">
                        <option value="" />
                        <option value="dragonborn">Dragonborn</option>
                        <option value="dwarf">Dwarf</option>
                        <option value="elf">Elf</option>
                        <option value="gnome">Gnome</option>
                        <option value="halfelf">Half-Elf</option>
                        <option value="halfing">Halfling</option>
                        <option value="halforc">Half-Orc</option>
                        <option value="human">Human</option>
                        <option value="tiefling">Tiefling</option>
                        </select>
                    </form>
                    </div>
                </td>
                <td>
                    {/* Alignment options form */}
                    <div id="alignmentDiv">
                    <form id="alignmentForm">
                        Alignment: <br />
                        <select id="alignmentOptions">
                        <option value="" />
                        <option value="lawfulGood">Lawful Good</option>
                        <option value="lawfulNeutral">Lawful Neutral</option>
                        <option value="lawfulEvil">Lawful Evil</option>
                        <option value="neutralGood">Neutral Good</option>
                        <option value="trueNeutral">True Neutral</option>
                        <option value="neutralEvil">Neutral Evil</option>
                        <option value="chaoticGood">Chaotic Good</option>
                        <option value="chaoticNeutral">Chaotic Neutral</option>
                        <option value="chaoticEvil">Chaotic Evil</option>
                        </select>
                    </form>
                    </div>
                </td>
                <td>
                    {/* Player name open text box */}
                    <div id="playerNameDiv">
                        Player Name:
                        <br />
                        <input type="text"></input>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
};