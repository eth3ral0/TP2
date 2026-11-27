
import './App.css'
import StatBars from "./components/StatBars.jsx";

export default function App() {
    return <StatBars stats={
        [
                {
                    name: "John",
                    current: "15",
                    max: "20",
                    type: "stamina"
                },
                {
                    name: "Yasmine",
                    current: "27",
                    max: "30",
                    type: "hp"
                },
        ]
    }/>
}


