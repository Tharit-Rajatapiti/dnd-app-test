import { Form } from "react-bootstrap";

const SKILL_SET = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival",
]

const FIGHTER_SKILL_SET = [
    "Acrobatics",
    "Animal Handling",
    "Athletics",
    "History",
    "Insight",
    "Intimidation",
    "Perception",
    "Survival",
]

const WIZARD_SKILL_SET = [

]

function SkillsCheckbox({ skillId, skillName, disable }) {
    return (
        <Form.Check 
            type="checkbox"
            id={skillId}
            label={skillName}
            disabled={disable}
        />
    )
}

/*
[  "Arcana", "Survival"  ]
[  "Arcana", "Survival"  ].map( function to_lower(s) { return s.toLower(); } )
equals
[  "arcana", "survival" ]
*/

function checkSkillAvailable(skill, characterClass) {
    if (characterClass == "fighter") {
        for (let i = 0; i < FIGHTER_SKILL_SET.length; i++) {
            if (skill == FIGHTER_SKILL_SET[i]) {
                return true
            }
        }
        return false
    }
    return false
}

function createSkillCheckbox(skill, characterClass) {
    return (
        <SkillsCheckbox
            skillId={skill}
            skillName={skill}
            disable={!checkSkillAvailable(skill, characterClass)}
        />
    )
}

/*
{SKILL_SET.map((s) => (<div>{s}</div>))}
+
[  "Arcana", "Survival"  ]
equals
[ <div>Arcana</div>, <div>Survival</div> ]
*/

function SkillsSelection() {
    return (
        <Form>
            {SKILL_SET.map((skillSet) => createSkillCheckbox(skillSet, "fighter"))}
            <div>---</div>
            {SKILL_SET.map((skillSet) => createSkillCheckbox(skillSet, "wizard"))}
        </Form>
    )
}

export default SkillsSelection;