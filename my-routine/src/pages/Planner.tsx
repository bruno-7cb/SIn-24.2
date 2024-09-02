import Anotation from "../components/Anotation";
import CardList from "../components/CardList";
import Header from "../components/Header";
import PriorityCard from "../components/PriorityCard";
import Registration from "../components/Registration";

export default function Planner() {
    return (
        <main className="container bg-slate-300 mx-auto px-4 py-6 columns-2 gap-6">
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
