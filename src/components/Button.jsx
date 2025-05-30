import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

// import React from "react";

// export default function Button({
//   children,
//   type = "button",
//   bgColor = "bg-blue-600",
//   hoverBgColor = "hover:bg-blue-700",
//   textColor = "text-white",
//   className = "",
//   ...props
// }) {
//   return (
//     <button
//       type={type}
//       className={`
//         px-5 py-2.5
//         rounded-md
//         font-semibold
//         shadow-sm
//         transition
//         duration-200
//         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
//         cursor-pointer
//         ${bgColor} ${hoverBgColor} ${textColor} ${className}
//       `}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
