// Food Item API Service
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9000';

class FoodItemService {
  // Get all food items
  async getAllFoodItems() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/api/food-item/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch food items');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching food items:', error);
      return [];
    }
  }

  // Get only thali items
  async getThaliItems() {
    try {
      const allItems = await this.getAllFoodItems();
      return allItems.filter(item => item.category?.name === 'Thali');
    } catch (error) {
      console.error('Error fetching thali items:', error);
      return [];
    }
  }

  // Get only add-on items
  async getAddOnItems() {
    try {
      const allItems = await this.getAllFoodItems();
      return allItems.filter(item => item.category?.name === 'Add-ons');
    } catch (error) {
      console.error('Error fetching add-on items:', error);
      return [];
    }
  }

  // Get single food item by ID
  async getFoodItemById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/api/food-item/single-food-item/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch food item');
      }
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error('Error fetching food item:', error);
      return null;
    }
  }

  // Get popular food items by type
  async getPopularFoodItems(type) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/api/food-item/popular/${type}`);
      if (!response.ok) {
        throw new Error('Failed to fetch popular food items');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching popular food items:', error);
      return [];
    }
  }

  // Get offer timer food items
  async getOfferFoodItems() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/food-item/offer`);
      if (!response.ok) {
        throw new Error('Failed to fetch offer food items');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching offer food items:', error);
      return [];
    }
  }

  // Get top rated food items
  async getTopRatedFoodItems() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/food-item/top-rated`);
      if (!response.ok) {
        throw new Error('Failed to fetch top rated food items');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching top rated food items:', error);
      return [];
    }
  }

  // Get related food items
  async getRelatedFoodItems(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/food-item/related-food-item/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch related food items');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching related food items:', error);
      return [];
    }
  }

  // Transform backend data to match frontend format
  transformFoodItem(item) {
    // Handle imageURLs which can be an array of objects with img property
    const firstImage = item.imageURLs?.[0]?.img || item.imageURLs?.[0] || item.img || '/assets/img/product/collection/collection-1.jpg';
    const allImages = item.imageURLs?.map(img => typeof img === 'string' ? img : img.img) || [firstImage];
    
    return {
      _id: item._id,
      img: firstImage,
      category: {
        id: item.category?.id || item.category?._id,
        name: item.category?.name || 'Uncategorized'
      },
      status: item.status || 'in-stock',
      name: item.name || 'Unnamed Item',
      price: item.price || 0,
      originalPrice: item.originalPrice || item.price || 0,
      quantity: item.quantity || 0,
      sold: item.sold || 0,
      available: item.available ?? true,
      description: item.description || '',
      additionalInformation: item.additionalInformation || [],
      sellCount: item.sellCount || 0,
      offerExpiryTime: item.offerExpiryTime || null,
      tags: item.tags || [],
      sku: item.sku || '',
      productInfo: item.productInfo || '',
      unit: item.unit || '1',
      imageURLs: allImages,
      parent: item.parent || null,
      children: item.children || null,
      type: item.type || null,
      sizes: item.sizes || null,
      discount: item.discount || 0,
      isAddOn: item.category?.name === 'Add-ons',
      isThali: item.category?.name === 'Thali'
    };
  }

  // Get transformed thali items for components
  async getTransformedThaliItems() {
    const thalis = await this.getThaliItems();
    return thalis.map(item => this.transformFoodItem(item));
  }

  // Get transformed add-on items for components
  async getTransformedAddOnItems() {
    const addOns = await this.getAddOnItems();
    return addOns.map(item => this.transformFoodItem(item));
  }
}

// Export singleton instance
const foodItemService = new FoodItemService();
export default foodItemService;