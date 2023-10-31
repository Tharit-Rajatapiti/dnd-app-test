import React from "react";
import { useState } from "react";

import '../App.css';

import {AbilityTable} from "../CharacterAbilityTable";
import {StarterTable} from "../CharacterStarterTable";
// import StatsInformation from '../AppStatsInformation';
import AppNavigationBar from "../AppNavigationBar";

function CharacterPage() {
    const [characterClass, setCharacterClass] = useState();

    function debug() {
        console.log(localStorage.getItem("abilityValues"))
    }

  	return (
		<>
            <AppNavigationBar />
            <StarterTable setCharacterClass={setCharacterClass}/>
            <AbilityTable characterClass={characterClass}/>
            <button onClick={debug}>DEBUG</button>
		</>
	)
}

export default CharacterPage;