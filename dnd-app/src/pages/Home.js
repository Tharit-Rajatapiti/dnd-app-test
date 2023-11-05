import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { saveAs } from "file-saver";
import '../App.css';

import AppNavigationBar from "../AppNavigationBar";

function HomePage() {
    const inputFileRef = useRef();

    const save = () => {
        const content = [];
        const characterStats = localStorage.getItem("characterStats");
        content.push(`characterStats|${characterStats}\n`);
        const abilityValues = localStorage.getItem("abilityValues");
        content.push(`abilityValues|${abilityValues}`);
        const blob = new Blob(content);
        saveAs(blob);
    }

    const handleUpload = () => {
        inputFileRef?.current.click();
    }

    const parseLine = (line) => {
        const array = line.split("|");
        const key = array[0];
        const value = array[1];
        return [key, value];
    }

    const load = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const lines = e.target.result;
            const linesArray = lines.split("\n");
            for (let i = 0; i < linesArray.length; i++) {
                const [key, value] = parseLine(linesArray[i]);
                localStorage.setItem(key, value);
            }
        }
        reader.readAsText(event.target.files[0]);
    }

    return (
        <>
            <AppNavigationBar />
            <h1>Home</h1>
            <Card style={{ width: '300px', marginBottom: '8px' }}>
                <Card.Body>
                    <Card.Title>BlackHawk</Card.Title>
                    <Card.Text>Human/Warrior</Card.Text>
                    <Button>Edit</Button>
                </Card.Body>
            </Card>
            <Button style={{ marginRight: '8px' }}>New Character</Button>
            <Button onClick={save} style={{ marginRight: '8px' }}>Save</Button>
            <input ref={inputFileRef} onChange={load} type="file" hidden/>
            <Button onClick={handleUpload}>Load</Button>
        </>
    )
}

export default HomePage;