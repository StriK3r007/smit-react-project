import Stat from "../components/Stat";

export default function Stats() {
    return (
        <section className="w-full max-w-300 mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Stat name="Total Expense" value="20,00" />
            <Stat name="Current Month Expense" value="20,00" />
            <Stat name="Last Month Expense" value="20,00" />
            <Stat name="Income" value="20,00" />
        </div>
        </section>
    )
}