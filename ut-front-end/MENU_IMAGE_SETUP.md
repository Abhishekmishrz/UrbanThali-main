# Menu Image Setup Instructions

To display the Urban Thali menu image in the modal, please follow these steps:

## 1. Create the Menu Image Directory
Create the following directory in your project:
```
ut-front-end/public/assets/img/menu/
```

## 2. Add the Menu Image
Place your menu image file in the directory with the exact filename:
```
ut-front-end/public/assets/img/menu/urban-thali-menu.jpg
```

## 3. Image Specifications
- **Format**: JPG or PNG
- **Recommended size**: 800x1200 pixels or similar aspect ratio
- **File size**: Keep under 2MB for optimal loading
- **Content**: The complete Urban Thali menu as shown in the provided image

## 4. Fallback Behavior
If the image file is not found, the modal will display a fallback message with a link to the full menu page.

## 5. Testing
After adding the image:
1. Click the "View Menu" button on the homepage banner
2. The modal should open and display your menu image
3. You can close the modal by clicking the X button or clicking outside the modal

## File Structure
```
ut-front-end/
├── public/
│   └── assets/
│       └── img/
│           └── menu/
│               └── urban-thali-menu.jpg  ← Add your image here
└── src/
    └── components/
        └── common/
            └── menu-modal.jsx  ← Modal component (already created)
```

The modal is now ready and will automatically display your menu image once you add it to the specified location!
