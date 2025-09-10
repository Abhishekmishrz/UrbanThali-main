# Thali Images Setup Guide

## Overview
This guide will help you add the three beautiful thali images to the banner slider.

## Required Images
You need to add these three images to the `public/assets/img/thali/` directory:

1. **ornate-brass-tray-thali.jpg** - Ornate brass tray thali (first banner)
2. **banana-leaf-thali.jpg** - Banana leaf thali (second banner)  
3. **wooden-platter-thali.jpg** - Wooden platter thali (third banner)

## Steps to Add Images

### Step 1: Create the thali directory (if it doesn't exist)
```bash
mkdir -p public/assets/img/thali
```

### Step 2: Add the images
1. Save the three thali images from your conversation
2. Rename them exactly as specified above
3. Place them in the `public/assets/img/thali/` directory

### Step 3: Update the banner component
Once the images are added, update the banner component:

1. Open `src/components/banner/beauty-banner.jsx`
2. Replace the import statements with:
```javascript
import thali_1 from "@assets/img/thali/ornate-brass-tray-thali.jpg";
import thali_2 from "@assets/img/thali/banana-leaf-thali.jpg";
import thali_3 from "@assets/img/thali/wooden-platter-thali.jpg";
```

3. Update the slider_data array:
```javascript
const slider_data = [
  {
    id: 1,
    bg: thali_1, // Ornate brass tray thali (first image)
  },
  {
    id: 2,
    bg: thali_2, // Banana leaf thali (second image)
  },
  {
    id: 3,
    bg: thali_3, // Wooden platter thali (third image)
  },
];
```

4. Update the background image usage:
```javascript
<div
  className="tp-slider-thumb-3 include-bg"
  style={{ backgroundImage: `url(${item.bg.src})` }}
></div>
```

## Image Specifications
- **Format**: JPG
- **Recommended size**: 1920x1080px or similar high resolution
- **Quality**: High quality for web display
- **File names**: Must match exactly as specified

## Verification
After adding the images:
1. Restart your development server
2. Check the banner slider on the homepage
3. Verify all three images are displaying correctly
4. Test the slider navigation (arrows and dots)

## Troubleshooting
- If images don't appear, check the file paths and names
- Ensure images are in the correct directory
- Check browser console for any 404 errors
- Verify image file permissions
