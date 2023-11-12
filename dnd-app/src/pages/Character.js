import React from "react";
import { useState } from "react";
import {characterGlobalState} from "../states/CharacterState";
import {useRecoilState} from "recoil";

import '../App.css';

import AbilityTable from "../CharacterAbilityTable";
import StarterTable from "../CharacterStarterTable";
import StatsInformation from '../CharacterStatsInformation';
import AppNavigationBar from "../AppNavigationBar";

function CharacterPage() {
    const [characterGlobal, setCharacterGlobal] = useRecoilState(characterGlobalState);

    function debug() {
        console.log(characterGlobal)
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