#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create thali directory if it doesn't exist
const thaliDir = path.join(__dirname, 'public', 'assets', 'img', 'thali');

if (!fs.existsSync(thaliDir)) {
  fs.mkdirSync(thaliDir, { recursive: true });
  console.log('✅ Created thali directory:', thaliDir);
} else {
  console.log('✅ Thali directory already exists:', thaliDir);
}

// Check for required images
const requiredImages = [
  'ornate-brass-tray-thali.jpg',
  'banana-leaf-thali.jpg', 
  'wooden-platter-thali.jpg'
];

console.log('\n📋 Required images:');
requiredImages.forEach((image, index) => {
  const imagePath = path.join(thaliDir, image);
  if (fs.existsSync(imagePath)) {
    console.log(`✅ ${index + 1}. ${image} - Found`);
  } else {
    console.log(`❌ ${index + 1}. ${image} - Missing`);
  }
});

console.log('\n📝 Next steps:');
console.log('1. Add the three thali images to:', thaliDir);
console.log('2. Name them exactly as shown above');
console.log('3. Restart your development server');
console.log('4. Check the banner slider on the homepage');

console.log('\n🎯 Image order in banner:');
console.log('1. ornate-brass-tray-thali.jpg (First banner)');
console.log('2. banana-leaf-thali.jpg (Second banner)');
console.log('3. wooden-platter-thali.jpg (Third banner)');
