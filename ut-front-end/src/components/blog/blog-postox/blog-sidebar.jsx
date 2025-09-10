// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// // internal
// // Placeholder images since blog functionality is not needed for Urban Thali
// const user = {
//   src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Vc2VyPC90ZXh0Pjwvc3ZnPg==',
//   width: 100,
//   height: 100
// };

// const signature = {
//   src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNmI3MjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2lnbmF0dXJlPC90ZXh0Pjwvc3ZnPg==',
//   width: 120,
//   height: 40
// };
// import { Search } from '@/svg';
// import blogData from '@/data/blog-data';

// // latest post
// const latest_post = blogData.slice(0,3)

// const BlogSidebar = () => {
//   return (
//     <>
//       <div className="tp-sidebar-wrapper tp-sidebar-ml--24">
//         <div className="tp-sidebar-widget mb-35">
//           <div className="tp-sidebar-search">
//             <form action="#">
//               <div className="tp-sidebar-search-input">
//                 <input type="text" placeholder="Search..." />
//                 <button type="submit">
//                   <Search/>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* about  */}
//         <div className="tp-sidebar-widget mb-35">
//           <h3 className="tp-sidebar-widget-title">About me</h3>
//           <div className="tp-sidebar-widget-content">
//             <div className="tp-sidebar-about">
//               <div className="tp-sidebar-about-thumb mb-25">
//                 <a href="#">
//                   <Image src={user} alt="user" />
//                 </a>
//               </div>
//               <div className="tp-sidebar-about-content">
//                 <h3 className="tp-sidebar-about-title">
//                   <a href="#">Ravi {"O'Leigh"}</a>
//                 </h3>
//                 <span className="tp-sidebar-about-designation">Photographer & Blogger</span>
//                 <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient</p>
//                 <div className="tp-sidebar-about-signature">
//                   <Image src={signature} alt="signature" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- about end --> */}

//         {/* <!-- latest post start --> */}
//         <div className="tp-sidebar-widget mb-35">
//           <h3 className="tp-sidebar-widget-title">Latest Posts</h3>
//           <div className="tp-sidebar-widget-content">
//             <div className="tp-sidebar-blog-item-wrapper">
//               {latest_post.map(b => (
//               <div key={b.id} className="tp-sidebar-blog-item d-flex align-items-center">
//                 <div className="tp-sidebar-blog-thumb">
//                   <Link href={`/blog-details/${b.id}`}>
//                     <Image src={b.img} alt="blog img" />
//                   </Link>
//                 </div>
//                 <div className="tp-sidebar-blog-content">
//                   <div className="tp-sidebar-blog-meta">
//                     <span>{b.date}</span>
//                   </div>
//                   <h3 className="tp-sidebar-blog-title">
//                     <Link href={`/blog-details/${b.id}`}>{b.title}</Link>
//                   </h3>
//                 </div>
//               </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* <!-- latest post end --> */}

//         {/* <!-- categories start --> */}
//         <div className="tp-sidebar-widget widget_categories mb-35">
//           <h3 className="tp-sidebar-widget-title">Categories</h3>
//           <div className="tp-sidebar-widget-content">
//             <ul>
//               <li><Link href="/blog">Farming <span>(12)</span></Link></li>
//               <li><Link href="/blog">Crisp Bread & Cake <span>(6)</span></Link></li>
//               <li><Link href="/blog">Milk & Meat <span>(2)</span></Link></li>
//               <li><Link href="/blog">Organic Fruits <span>(8)</span></Link></li>
//               <li><Link href="/blog">Sea Foods <span>(0)</span></Link></li>
//               <li><Link href="/blog">Vegetable <span>(3)</span></Link></li>
//             </ul>
//           </div>
//         </div>
//         {/* <!-- categories end --> */}

//         {/* <!-- tag cloud start --> */}
//         <div className="tp-sidebar-widget mb-35">
//           <h3 className="tp-sidebar-widget-title">Popular Tags</h3>
//           <div className="tp-sidebar-widget-content tagcloud">
//             <a href="#">Summer</a>
//             <a href="#">Vintage</a>
//             <a href="#">Sunglasses</a>
//             <a href="#">Organic Food</a>
//             <a href="#">Lifesttyle</a>
//             <a href="#">Nature</a>
//           </div>
//         </div>
//         {/* <!-- tag cloud end --> */}

//       </div>
//     </>
//   );
// };

// export default BlogSidebar;