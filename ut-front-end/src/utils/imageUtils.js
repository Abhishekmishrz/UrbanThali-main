// Utility function to cycle through collection images
export const getCollectionImage = (index) => {
  const collectionImages = [
    "/assets/img/product/collection/collection-1.jpg",
    "/assets/img/product/collection/collection-2.jpg",
    "/assets/img/product/collection/collection-3.jpg"
  ];
  
  // Use modulo to cycle through the images
  return collectionImages[index % collectionImages.length];
};

// Alternative function that uses product ID for consistent image assignment
export const getCollectionImageById = (productId) => {
  const collectionImages = [
    "/assets/img/product/collection/collection-1.jpg",
    "/assets/img/product/collection/collection-2.jpg",
    "/assets/img/product/collection/collection-3.jpg"
  ];
  
  // Convert product ID to number and use modulo for consistent assignment
  const numericId = typeof productId === 'string' ? 
    productId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 
    productId;
  
  return collectionImages[numericId % collectionImages.length];
};

