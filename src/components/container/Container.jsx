import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container

// function Container({ children, className = '' }) {
//   return (
//     <div
//       className={`
//         w-full max-w-7xl mx-auto
//         px-6 sm:px-8 lg:px-12
//         bg-gray-50
//         rounded-lg
//         shadow-md
//         hover:shadow-lg
//         transition-shadow duration-300 ease-in-out
//         ${className}
//       `}
//     >
//       {children}
//     </div>
//   );
// }

// export default Container;


