import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input

// import React, { useId } from "react";

// const Input = React.forwardRef(function Input(
//   { label, type = "text", className = "", error = "", disabled = false, ...props },
//   ref
// ) {
//   const id = useId();

//   return (
//     <div className="w-full">
//       {label && (
//         <label
//           htmlFor={id}
//           className="block mb-1 text-gray-700 font-medium select-none"
//         >
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         id={id}
//         disabled={disabled}
//         ref={ref}
//         className={`
//           w-full
//           px-4 py-2
//           rounded-md
//           bg-white
//           text-gray-900
//           border
//           border-gray-300
//           placeholder-gray-400
//           focus:outline-none
//           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//           transition
//           duration-200
//           disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
//           ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
//           ${className}
//         `}
//         {...props}
//       />
//       {error && (
//         <p className="mt-1 text-sm text-red-600" role="alert">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// });

// export default Input;
