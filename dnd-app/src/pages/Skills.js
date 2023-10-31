import React from "react";

import '../App.css';

import AppNavigationBar from "../AppNavigationBar";
import SkillsSelection from "../SkillsSelection";

function SkillsPage() {
    return (
        <>
            <AppNavigationBar />
            <h1>Skills</h1>
            <SkillsSelection />
        </>
    )
}

export default SkillsPage;