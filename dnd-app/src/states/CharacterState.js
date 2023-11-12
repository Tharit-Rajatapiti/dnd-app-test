import {atom} from "recoil";
import {DndCharacter} from "../classes/DndCharacter";

export const characterGlobalState = atom({
    key: "characterGlobalState",
    default: new DndCharacter(),
    dangerouslyAllowMutability: true,
})