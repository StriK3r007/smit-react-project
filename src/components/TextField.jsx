export default function TextField({
    type = 'text',
    placeholder = 'Input field',
    required = false,
    label = 'Input Field',
    icon = null,
    id = '',
    name = '',
    autoComplete = '',
    className = '',
    error = '',
}) {
    return (
        <div className="relative">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            )}
            
            <div className="mt-1">
                {icon && (
                    <div
                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    required={required}
                    placeholder={placeholder}
                    className={`appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ${icon ? 'pl-10' : ''} ${error ? 'border-red-500' : ''} ${className}
                    `}
                />
            </div>
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
    )
}