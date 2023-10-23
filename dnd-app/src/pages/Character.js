import React from "react";
import AbilityTable from "../AppAbilityTable";
import StarterTable from "../AppStarterTable";
import StatsInformation from '../AppStatsInformation';


function CharacterPage() {
    return (
        <>
            <table>
                <tr>
                    <h1>dungeon and dragon (singular)</h1>
                </tr>
                <tr>
                    <StarterTable />
                </tr>
                <tr>
                    <td>
                        <img src="https://images.ctfassets.net/swt2dsco9mfe/4Z0hz8blpuUE5vWv6eGc14/4bac7dadc60e92678301a87f81778316/dnd_chsheet_sorcerer.jpg?w=365&h=196&fit=thumb&fm=avif"/>
                    </td>
                    <td>Dragonborn Sorcerer</td>
                </tr>
            </table>
        </>
    )
}

export default CharacterPage;