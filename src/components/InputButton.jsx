export default function InputButton({
    className = '',
    // type = 'button',
    ...rest
}) {
    return (
        <div>
            <button {...rest}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-[1.01] cursor-pointer ${className}
                `}>
                Sign In
            </button>
        </div>
    )
}