import React from "react";

// import logo from './logo.svg';
import '../App.css';

import AbilityTable from "../AppAbilityTable";
import StarterTable from "../AppStarterTable";
import StatsInformation from '../AppStatsInformation';

// Debug button (temporary)
export function debug() {
	console.log(localStorage.getItem("abilityValues"))
}

function CharacterPage() {
  	return (
		<>
            <h1>dungeon and dragon (singular)</h1>
            <StarterTable />
            <table>
                <tr>
                    <td><AbilityTable /></td>
                    <td><StatsInformation /></td>
                </tr>
            </table>
            <button onClick={debug}>DEBUG</button>
		</>
	)
}

export default CharacterPage;