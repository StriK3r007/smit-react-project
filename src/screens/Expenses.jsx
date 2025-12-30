import { useEffect, useState } from "react";
import Modal from "../components/Modal"
import AddExpense from "./AddExpense"


export default function Expenses() {
    const [expenseArr, setExpenseArr] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    // keep localStorage in sync
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenseArr));
    }, [expenseArr]);

    const addExpense = (expense) => {
        setExpenseArr(prev => [...prev, expense]);
    };

    return (
        <>
            <section className="w-full min-h-screen">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Expenses</h1>
                    {/* <Modal name={'Add Expense'} children={<AddExpense />} /> */}
                    <Modal name="Add Expense">
                        <AddExpense onAddExpense={addExpense} />
                    </Modal>
                </div>

                {/* Expense List */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 2 */}
                            {expenseArr && expenseArr.length > 0 ? (
                                expenseArr.map((expense, index) => (
                                    <tr 
                                        key={index}
                                        className="hover:bg-base-300"
                                    >
                                        <th>{index + 1}</th>
                                        <td>{expense.name}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.category}</td>
                                        <td>{expense.date}</td>
                                        <td className="flex gap-3">
                                            <span className="text-green-500 cursor-pointer">Edit</span>
                                            <span className="text-red-500">Delete</span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No Expenses Found
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}