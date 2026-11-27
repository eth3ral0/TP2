import StatBar from "./StatBar.jsx";

const stateDefault = [
    {
        name: "Vitesse",
        current: "115",
        max: "130",
        type: "stamina"
    },
    {
        name: "Temperature-huile",
        current: "80",
        max: "150",
        type: "hp"
    },
    {
        name: "Compte-tour",
        current: "2180",
        max: "6600",
        type: "mana"
    },
    {
        name: "Carburant",
        current: "18",
        max: "50",
        type: "xp"
    }

]

export default function StatBars() {
    return (
            stateDefault.map((stat) => {
                return <StatBar key={stat.name} {...stat} /> /*Identifiant unique est le name */
            })
    );
}