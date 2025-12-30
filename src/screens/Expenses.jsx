import Modal from "../components/Modal"
import AddExpense from "./AddExpense"


export default function Expenses() {
    return (
        <>
            <section className="w-full min-h-screen">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Expenses</h1>;
                <Modal name={'Add Expense'} children={<AddExpense />} />
                </div>
            </section>
        </>
    )
}