const loadedCharacterStats = JSON.parse(localStorage.getItem("characterStats"));

const getClassInformation = () => {

}

export default function StatsInformation() {
    return (
        <>
            <b>Class:</b><br/>
            <i>No class currently selected.</i>
        </>
    );
};