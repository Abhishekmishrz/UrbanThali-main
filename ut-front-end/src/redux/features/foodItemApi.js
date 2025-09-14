import { apiSlice } from "../api/apiSlice";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9000';

export const foodItemApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllFoodItems: builder.query({
      query: () => ({
        url: `${BACKEND_URL}/api/food-item/all`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        // Transform the response to match expected format
        if (response?.data) {
          return response.data.map(item => ({
            _id: item._id,
            img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
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
            imageURLs: item.imageURLs?.map(img => img.img || img) || [item.img || '/assets/img/product/collection/collection-1.jpg'],
            parent: item.parent || null,
            children: item.children || null,
            type: item.type || null,
            sizes: item.sizes || null,
            discount: item.discount || 0,
            isAddOn: item.category?.name === 'Add-ons',
            isThali: item.category?.name === 'Thali'
          }));
        }
        return [];
      },
      providesTags: ['FoodItems']
    }),
    
    getThaliItems: builder.query({
      query: () => ({
        url: `${BACKEND_URL}/api/food-item/all`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          return response.data
            .filter(item => item.category?.name === 'Thali')
            .map(item => ({
              _id: item._id,
              img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
              category: {
                id: item.category?.id || item.category?._id,
                name: item.category?.name || 'Thali'
              },
              status: item.status || 'in-stock',
              name: item.name || 'Unnamed Thali',
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
              imageURLs: item.imageURLs?.map(img => img.img || img) || [item.img || '/assets/img/product/collection/collection-1.jpg'],
              isThali: true
            }));
        }
        return [];
      },
      providesTags: ['ThaliItems']
    }),
    
    getAddOnItems: builder.query({
      query: () => ({
        url: `${BACKEND_URL}/api/food-item/all`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          return response.data
            .filter(item => item.category?.name === 'Add-ons')
            .map(item => ({
              _id: item._id,
              img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
              category: {
                id: item.category?.id || item.category?._id,
                name: item.category?.name || 'Add-ons'
              },
              status: item.status || 'in-stock',
              name: item.name || 'Unnamed Add-on',
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
              imageURLs: item.imageURLs?.map(img => img.img || img) || [item.img || '/assets/img/product/collection/collection-1.jpg'],
              isAddOn: true
            }));
        }
        return [];
      },
      providesTags: ['AddOnItems']
    }),
    
    getSingleFoodItem: builder.query({
      query: (id) => ({
        url: `${BACKEND_URL}/api/food-item/single-food-item/${id}`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          const item = response.data;
          return {
            _id: item._id,
            img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
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
            imageURLs: item.imageURLs?.map(img => img.img || img) || [item.img || '/assets/img/product/collection/collection-1.jpg'],
            parent: item.parent || null,
            children: item.children || null,
            type: item.type || null,
            sizes: item.sizes || null,
            discount: item.discount || 0,
            isAddOn: item.category?.name === 'Add-ons',
            isThali: item.category?.name === 'Thali'
          };
        }
        return null;
      },
      providesTags: (result, error, arg) => [{ type: "FoodItem", id: arg }]
    }),
    
    getOfferFoodItems: builder.query({
      query: () => ({
        url: `${BACKEND_URL}/api/food-item/offer`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          return response.data.map(item => ({
            _id: item._id,
            img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
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
            discount: item.discount || 0,
            offerExpiryTime: item.offerExpiryTime || null,
            isAddOn: item.category?.name === 'Add-ons',
            isThali: item.category?.name === 'Thali'
          }));
        }
        return [];
      },
      providesTags: ['OfferFoodItems']
    }),
    
    getTopRatedFoodItems: builder.query({
      query: () => ({
        url: `${BACKEND_URL}/api/food-item/top-rated`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          return response.data.map(item => ({
            _id: item._id,
            img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
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
            rating: item.rating || 0,
            reviews: item.reviews || 0,
            isAddOn: item.category?.name === 'Add-ons',
            isThali: item.category?.name === 'Thali'
          }));
        }
        return [];
      },
      providesTags: ['TopRatedFoodItems']
    }),
    
    getRelatedFoodItems: builder.query({
      query: (id) => ({
        url: `${BACKEND_URL}/api/food-item/related-food-item/${id}`,
        method: 'GET',
      }),
      transformResponse: (response) => {
        if (response?.data) {
          return response.data.map(item => ({
            _id: item._id,
            img: item.imageURLs?.[0]?.img || item.img || '/assets/img/product/collection/collection-1.jpg',
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
            isAddOn: item.category?.name === 'Add-ons',
            isThali: item.category?.name === 'Thali'
          }));
        }
        return [];
      },
      providesTags: (result, error, arg) => [{ type: "RelatedFoodItems", id: arg }]
    }),
  }),
});

export const {
  useGetAllFoodItemsQuery,
  useGetThaliItemsQuery,
  useGetAddOnItemsQuery,
  useGetSingleFoodItemQuery,
  useGetOfferFoodItemsQuery,
  useGetTopRatedFoodItemsQuery,
  useGetRelatedFoodItemsQuery,
} = foodItemApi;