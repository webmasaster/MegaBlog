// import React from 'react'

// function Logo({width = '100px'}) {
//   return (
//     <div>Logo</div>
//   )
// }

// export default Logo
import React from 'react';
import { Link } from 'react-router-dom';
 // Adjust path as needed

function Logo({ width = '120px' }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={`https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg`}
        alt="App Logo"
        style={{ width }}
        className="object-contain drop-shadow-sm"
      />
      
    </Link>
  );
}

export default Logo;
