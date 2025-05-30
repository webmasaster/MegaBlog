import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard

// import React, { useState } from 'react';
// import { Calendar, Eye, Heart, MessageCircle, Share2, BookOpen, Clock, User } from 'lucide-react';

// // Mock service - replace with your actual appwriteService
// const appwriteService = {
//   getFilePreview: (id) => `https://picsum.photos/400/300?random=${id}`
// };

// // Mock Link component - replace with your actual react-router-dom Link
// const Link = ({ to, children, className }) => (
//   <a href={to} className={className} onClick={(e) => e.preventDefault()}>
//     {children}
//   </a>
// );

// function PostCard({ $id, title, featuredImage, author, createdAt, excerpt, readTime, views, likes, comments, category, tags }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(likes || Math.floor(Math.random() * 50));
  
//   // Mock data for demonstration
//   const mockData = {
//     author: author || 'Jane Doe',
//     createdAt: createdAt || '2024-01-15',
//     excerpt: excerpt || 'Discover the latest trends and insights in this comprehensive post that will change your perspective...',
//     readTime: readTime || Math.floor(Math.random() * 10) + 2,
//     views: views || Math.floor(Math.random() * 1000) + 100,
//     comments: comments || Math.floor(Math.random() * 20),
//     category: category || 'Technology',
//     tags: tags || ['React', 'JavaScript', 'Web Development']
//   };

//   const handleLike = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsLiked(!isLiked);
//     setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
//   };

//   const handleShare = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (navigator.share) {
//       navigator.share({
//         title: title,
//         url: `/post/${$id}`
//       });
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   return (
//     <Link to={`/post/${$id}`} className="block group">
//       <article className="relative w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 transform hover:-translate-y-2">
//         {/* Featured Image Container */}
//         <div className="relative overflow-hidden">
//           <div className="aspect-[16/10] overflow-hidden">
//             <img
//               src={appwriteService.getFilePreview(featuredImage)}
//               alt={title}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//               loading="lazy"
//             />
//           </div>
          
//           {/* Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
//           {/* Category Badge */}
//           <div className="absolute top-4 left-4">
//             <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full border border-white/20 shadow-sm">
//               {mockData.category}
//             </span>
//           </div>
          
//           {/* Reading Time Badge */}
//           <div className="absolute top-4 right-4">
//             <div className="flex items-center gap-1 px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
//               <Clock size={12} />
//               <span>{mockData.readTime} min read</span>
//             </div>
//           </div>
          
//           {/* Floating Action Buttons */}
//           <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//             <button
//               onClick={handleLike}
//               className={`p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 ${
//                 isLiked 
//                   ? 'bg-red-500 text-white' 
//                   : 'bg-white/20 text-white hover:bg-white/30'
//               }`}
//             >
//               <Heart size={16} className={isLiked ? 'fill-current' : ''} />
//             </button>
//             <button
//               onClick={handleShare}
//               className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
//             >
//               <Share2 size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="p-6">
//           {/* Author & Date */}
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
//               <User size={14} className="text-white" />
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <span className="font-medium">{mockData.author}</span>
//               <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
//               <div className="flex items-center gap-1">
//                 <Calendar size={12} />
//                 <span>{formatDate(mockData.createdAt)}</span>
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
//             {title}
//           </h2>

//           {/* Excerpt */}
//           <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
//             {mockData.excerpt}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {mockData.tags.slice(0, 3).map((tag, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
//               >
//                 #{tag}
//               </span>
//             ))}
//             {mockData.tags.length > 3 && (
//               <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
//                 +{mockData.tags.length - 3}
//               </span>
//             )}
//           </div>

//           {/* Stats Footer */}
//           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-1 text-gray-500">
//                 <Eye size={14} />
//                 <span className="text-xs font-medium">{mockData.views.toLocaleString()}</span>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <Heart size={14} />
//                 <span className="text-xs font-medium">{likeCount}</span>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <MessageCircle size={14} />
//                 <span className="text-xs font-medium">{mockData.comments}</span>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
//               <BookOpen size={14} />
//               <span>Read More</span>
//             </div>
//           </div>
//         </div>

//         {/* Hover Glow Effect */}
//         <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//           <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-blue-500/10"></div>
//         </div>
//       </article>
//     </Link>
//   );
// }

// export default PostCard;
