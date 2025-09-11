const { secret } = require("../config/secret");
const cloudinary = require("../utils/cloudinary");
const { Readable } = require('stream');

// cloudinary Image Upload
// const cloudinaryImageUpload = async (image) => {
//   console.log('image service',image)
//   const uploadRes = await cloudinary.uploader.upload(image, {
//     upload_preset: secret.cloudinary_upload_preset,
//   });
//   return uploadRes;
// };

const cloudinaryImageUpload = (imageBuffer) => {
  return new Promise((resolve, reject) => {
    // Configure upload options
    const uploadOptions = {
      folder: 'urban-thali', // Organize uploads in a folder
      resource_type: 'image'
    };
    
    // Only add upload_preset if it's configured and not a placeholder
    if (secret.cloudinary_upload_preset && 
        !secret.cloudinary_upload_preset.includes('your cloudinary') && 
        secret.cloudinary_upload_preset !== 'your cloudinary upload preset') {
      uploadOptions.upload_preset = secret.cloudinary_upload_preset;
    }
    
    const uploadStream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          console.error('Error uploading to Cloudinary:', error);
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    const bufferStream = new Readable();
    bufferStream.push(imageBuffer);
    bufferStream.push(null);

    bufferStream.pipe(uploadStream);
  });
};


// cloudinaryImageDelete
const cloudinaryImageDelete = async (public_id) => {
  const deletionResult = await cloudinary.uploader.destroy(public_id);
  return deletionResult;
};

exports.cloudinaryServices = {
  cloudinaryImageDelete,
  cloudinaryImageUpload,
};
