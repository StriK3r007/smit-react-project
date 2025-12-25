export default function Stat(props) {
    // const [name, value] = prop
    return (
        <>
            <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-yellow-500">
                <p className="text-sm font-medium text-gray-500 uppercase">{props.name}</p>
                <p className="text-4xl font-extrabold text-gray-900 mt-1">Rs. {props.value}</p>
                {/* <p className="text-sm text-red-600 mt-2">▼ 5% vs last month</p> */}
            </div>
        </>
    )
}