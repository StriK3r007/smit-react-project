import Stat from '../components/Stat'

export default function Overview() {
    return (
        <section className="full min-h-screen">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Overview</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-12'>
                <Stat name="Total Expense" value="500" />
                <Stat name="Current Month Expenses" value="500" />
                <Stat name="Latest Expense" value="230" />
                <Stat />
                <Stat />
            </div>
        </section>
    )
}