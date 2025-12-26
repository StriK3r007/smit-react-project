export default function InputButton({
    className = '',
    type = 'button',
}) {
    return (
        <div>
            <button
                type={type}
                className={`py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white transition duration-300 transform hover:scale-[1.01] cursor-pointer ${className}
                `}>
                Sign In
            </button>
        </div>
    )
}