// 'use client';
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import PopupVideo from "../common/popup-video";
// import { getCollectionImageById } from "@/utils/imageUtils";

// const DetailsThumbWrapper = ({
//   imageURLs,
//   handleImageActive,
//   activeImg,
//   imgWidth = 416,
//   imgHeight = 480,
//   videoId = false,
//   status,
//   productId
// }) => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
  
//   // Create collection image URLs for thumbnails
//   const collectionImages = [
//     "/assets/img/product/collection/collection-1.jpg",
//     "/assets/img/product/collection/collection-2.jpg",
//     "/assets/img/product/collection/collection-3.jpg"
//   ];
  
//   return (
//     <>
//       <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
//         <nav>
//           <div className="nav nav-tabs flex-sm-column">
//             {collectionImages?.map((img, i) => (
//               <button
//                 key={i}
//                 className={`nav-link ${img === activeImg ? "active" : ""}`}
//                 onClick={() => handleImageActive({img})}
//               >
//                 <Image
//                   src={img}
//                   alt="image"
//                   width={78}
//                   height={100}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </button>
//             ))}
//           </div>
//         </nav>
//         <div className="tab-content m-img">
//           <div className="tab-pane fade show active">
//             <div className="tp-product-details-nav-main-thumb p-relative">
//               <Image
//                 src={activeImg}
//                 alt="product img"
//                 width={imgWidth}
//                 height={imgHeight}
//               />
//               <div className="tp-product-badge">
//                 {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
//               </div>
//               {videoId && (
//                 <div
//                   onClick={() => setIsVideoOpen(true)}
//                   className="tp-product-details-thumb-video"
//                 >
//                   <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
//                     <i className="fas fa-play"></i>
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* modal popup start */}
//       {videoId && (
//         <PopupVideo
//           isVideoOpen={isVideoOpen}
//           setIsVideoOpen={setIsVideoOpen}
//           videoId={videoId}
//         />
//       )}
//       {/* modal popup end */}
//     </>
//   );
// };

// export default DetailsThumbWrapper;
