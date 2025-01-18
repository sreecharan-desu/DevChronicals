const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'ddrj7yzyl',
  api_key: '385132251738571',
  api_secret: 'tHR9Fr5mR3VmD_qHqx5suUH6ouY',
});

// Upload File with Progress
const uploadFileWithProgress = (filePath) => {
    const fileSize = fs.statSync(filePath).size;
    let uploadedBytes = 0;
  
    const readStream = fs.createReadStream(filePath);
    readStream.on('data', (chunk) => {
      uploadedBytes += chunk.length;
      const progress = ((uploadedBytes / fileSize) * 100).toFixed(2);
      console.log(`Uploaded: ${progress}%`);
    });
  
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'video' },
      (error, result) => {
        if (error) {
          console.error('Upload failed:', error);
        } else {
          console.log('Upload completed successfully:', result.secure_url);
        }
      }
    );
  
    readStream.pipe(uploadStream);
  };
  
  
// Call the function
uploadFileWithProgress('./test.mp4');
