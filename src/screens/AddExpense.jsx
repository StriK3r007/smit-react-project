import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import InputButton from "../components/InputButton";
import toast from "react-hot-toast";

export default function AddExpense({ onAddExpense }) {
    const [error, setError] = useState('');
    const [expenseArr, setExpenseArr] = useState([])
    // Get Current Date
    const getTodayDate = () => {
        return new Date().toISOString().split('T')[0];
    };

    const [expenseData, setExpenseData] = useState({
        name: '',
        amount: '',
        category: '',
        date: getTodayDate(),
    })

    

    const handleChange = (event) => {
        const { name, value } = event.target
        setExpenseData(prevState => ({ ...prevState, [name]: value }));
        console.log(expenseData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!expenseData.name.trim() || !expenseData.amount.trim() || !expenseData.category.trim() || !expenseData.date.trim()) {
            setError("All fields are required");
            toast.error("All fields are required");
            return;
        }
        if (expenseData.amount <= 0) {
            toast.error("Amount must be greater than zero")
            return
        }

        console.log(expenseData)
        // setExpenseArr(prevExpenses => [...prevExpenses, expenseData]);
        setExpenseArr(prev => [...prev, { ...expenseData }]);

        // localStorage.setItem("expenses", JSON.stringify(expenseArr))

        onAddExpense({ ...expenseData });

        console.log('Expense Arr', expenseArr)
        toast.success("Expense added successfully!");

        setExpenseData({
            name: '',
            amount: '',
            category: '',
            date: getTodayDate(),
        });
    
        setError('');

        document.getElementById('my_modal_3').close();

    };
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenseArr));
    }, [expenseArr]);


    return (
        <section className="w-full flex items-center justify-center">
            <div className="bg-white w-full sm:w-[168] px-7 py-10">
                <div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold">Add New Expense</h3>
                        <p>Enter details to add new expense</p>
                    </div>
                    <form className="flex flex-col gap-5 mt-12" onSubmit={handleSubmit}>
                        <TextField
                            id='name'
                            name='name'
                            type='text'
                            required
                            autoComplete='name'
                            placeholder='Grocery'
                            className=''
                            label='Name'
                            error={error && !expenseData.name ? "Name is required" : ''}
                            value={expenseData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            id='amount'
                            name='amount'
                            type='text'
                            required
                            autoComplete='amount'
                            placeholder='150'
                            className=''
                            label='Amount'
                            error={error && !expenseData.amount ? "Amount is required" : ''}
                            value={expenseData.amount}
                            onChange={handleChange}
                        />
                        <TextField
                            id='category'
                            name='category'
                            type='text'
                            required
                            autoComplete='category'
                            placeholder='Food'
                            className=''
                            label='Category'
                            error={error && !expenseData.category ? "Category is required" : ''}
                            value={expenseData.category}
                            onChange={handleChange}
                        />
                        <TextField
                            id='date'
                            name='date'
                            type='date'
                            required
                            autoComplete='date'
                            placeholder=''
                            className=''
                            label='Date'
                            error={error && !expenseData.date ? "Date is required" : ''}
                            value={expenseData.date}
                            onChange={handleChange}
                        />
                        <InputButton
                            type='submit'
                            value="Add Expense"
                            className='w-full flex justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        />
                    </form>
                </div>
            </div>
        </section>
    )
};
