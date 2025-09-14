'use client';
import { useState, useEffect } from 'react';
import foodItemService from '@/services/foodItemService';

// Hook to fetch and manage thali items
export const useThaliItems = () => {
  const [thalis, setThalis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThalis = async () => {
      try {
        setLoading(true);
        const data = await foodItemService.getTransformedThaliItems();
        setThalis(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setThalis([]);
      } finally {
        setLoading(false);
      }
    };

    fetchThalis();
  }, []);

  return { thalis, loading, error };
};

// Hook to fetch and manage add-on items
export const useAddOnItems = () => {
  const [addOns, setAddOns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAddOns = async () => {
      try {
        setLoading(true);
        const data = await foodItemService.getTransformedAddOnItems();
        setAddOns(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setAddOns([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAddOns();
  }, []);

  return { addOns, loading, error };
};

// Hook to fetch all food items
export const useAllFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setLoading(true);
        const data = await foodItemService.getAllFoodItems();
        const transformed = data.map(item => foodItemService.transformFoodItem(item));
        setFoodItems(transformed);
        setError(null);
      } catch (err) {
        setError(err.message);
        setFoodItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  return { foodItems, loading, error };
};

// Hook to fetch a single food item by ID
export const useFoodItem = (id) => {
  const [foodItem, setFoodItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchFoodItem = async () => {
      try {
        setLoading(true);
        const data = await foodItemService.getFoodItemById(id);
        if (data) {
          setFoodItem(foodItemService.transformFoodItem(data));
        } else {
          setFoodItem(null);
        }
        setError(null);
      } catch (err) {
        setError(err.message);
        setFoodItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItem();
  }, [id]);

  return { foodItem, loading, error };
};