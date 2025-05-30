import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)

// import React, { useId } from 'react';

// function Select({ options, label, className = '', ...props }, ref) {
//   const id = useId();

//   return (
//     <div className="w-full">
//       {label && (
//         <label
//           htmlFor={id}
//           className="block mb-1 pl-1 text-sm font-medium text-gray-700"
//         >
//           {label}
//         </label>
//       )}
//       <select
//         {...props}
//         id={id}
//         ref={ref}
//         className={`px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition duration-200 w-full ${className}`}
//       >
//         {options?.map((option) => (
//           <option key={option} value={option} className="text-gray-800">
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default React.forwardRef(Select);
