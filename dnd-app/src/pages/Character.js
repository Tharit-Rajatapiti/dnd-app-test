import React from "react";
// import { useState } from "react";

import '../App.css';

import AbilityTable from "../CharacterAbilityTable";
import StarterTable from "../CharacterStarterTable";
import StatsInformation from '../CharacterStatsInformation';
import AppNavigationBar from "../AppNavigationBar";

function CharacterPage() {

    function debug() {
        let itemExists = JSON.parse(localStorage.getItem("abilityValues"));
        console.log(itemExists.Dexterity)
    }

  	return (
		<>
            <AppNavigationBar />
            <StarterTable />
            <AbilityTable />
            <StatsInformation />
            <button onClick={debug}>DEBUG</button>
		</>
	)
}

export default CharacterPage;