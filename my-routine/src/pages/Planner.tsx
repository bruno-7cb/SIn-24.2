import Anotation from "../components/Anotation";
import CardList from "../components/CardList";
import Header from "../components/Header";
import PriorityCard from "../components/PriorityCard";
import Registration from "../components/Registration";

export default function Planner() {
    return (
        <main className="bg-slate-300 w-1/2 mx-auto max-w-90 p-6">
            <Header />
            <Registration />
            <CardList title="morning" />
            <CardList title="afternoon" />
            <CardList title="evening" />
            <PriorityCard />
            <Anotation />
        </main>
    )
}
