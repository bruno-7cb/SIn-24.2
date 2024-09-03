import Anotation from "../components/Anotation";
import CardList from "../components/CardList";
import Header from "../components/Header";
import PriorityCard from "../components/PriorityCard";
import Registration from "../components/Registration";

export default function Planner() {
    return (
        <main className="grid grid-cols-2  mx-auto px-4 py-6 h-screen w-1/2 bg-slate-300  ">
            <Header  />
            <Registration />
            <CardList title="morning" />
            <CardList title="afternoon" />
            <CardList title="evening" />
            <PriorityCard />
            <Anotation />
        </main>
    )
}
