"use client";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/navigation';
import { useAddProductMutation, useEditProductMutation } from "@/redux/product/productApi";
import { notifyError, notifySuccess } from "@/utils/toast";

// ImageURL type
export interface ImageURL {
  color: {
    name?: string;
    clrCode?: string;
  };
  img: string;
  sizes?: string[];
}
type IBrand = {
  name: string;
  id: string;
};
type ICategory = {
  name: string;
  id: string;
};

type Status = "available" | "unavailable" | "discontinued";

const useProductSubmit = () => {
  const [sku, setSku] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [imageURLs, setImageURLs] = useState<ImageURL[]>([]);
  const [parent, setParent] = useState<string>("");
  const [children, setChildren] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [brand, setBrand] = useState<IBrand>({ name: "", id: "" });
  const [category, setCategory] = useState<ICategory>({ name: "", id: "" });
  const [status, setStatus] = useState<Status>("available");
  const [productType, setProductType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [offerDate, setOfferDate] = useState<{
    startDate: null;
    endDate: null;
  }>({
    startDate: null,
    endDate: null,
  });
  const [additionalInformation, setAdditionalInformation] = useState<
    {
      key: string;
      value: string;
    }[]
  >([]);
  const [tags, setTags] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const router = useRouter();


  // useAddProductMutation
  const [addProduct, { data: addProductData, isError, isLoading }] =
    useAddProductMutation();
  // useAddProductMutation
  const [editProduct, { data: editProductData, isError: editErr, isLoading: editLoading }] =
    useEditProductMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm();
  // resetForm
  const resetForm = () => {
    setSku("");
    setImg("");
    setTitle("");
    setSlug("");
    setUnit("");
    setImageURLs([]);
    setParent("");
    setChildren("");
    setPrice(0);
    setDiscount(0);
    setQuantity(0);
    setBrand({ name: "", id: "" });
    setCategory({ name: "", id: "" });
    setStatus("available");
    setProductType("");
    setDescription("");
    setVideoId("");
    setOfferDate({
      startDate: null,
      endDate: null,
    });
    setAdditionalInformation([]);
    setTags([]);
    setSizes([]);
    reset();
  };

  // handle submit product
  const handleSubmitProduct = async (data: any) => {
    console.log("product data--->", data);

    // Ensure brand is set - use first available brand as default if none selected
    let selectedBrand = brand;
    if (!brand.name || !brand.id) {
      // Set default brand - Urban Kitchen from the API response
      selectedBrand = {
        name: "Urban Kitchen",
        id: "68c1e077e3a8f3a04982b617"
      };
    }

    // Food item data - mapped to backend schema
    const productData = {
      sku: data.SKU,
      img: img,
      name: data["Add-on_Name"] || data["Dish_Name"] || data.title || data.name, // Handle multiple possible field names
      title: data["Add-on_Name"] || data["Dish_Name"] || data.title || data.name, // Add title field
      slug: slugify(data["Add-on_Name"] || data["Dish_Name"] || data.title || data.name || "item", { replacement: "-", lower: true }),
      unit: data.unit || "piece",
      imageURLs: imageURLs,
      parent: parent || "Thali",
      children: children || "Main Course",
      price: Number(data.price),
      discount: Number(data["discount_percentage"]) || 0,
      quantity: Number(data.quantity),
      brand: selectedBrand, // Keep brand for backward compatibility
      restaurant: selectedBrand, // Backend expects 'restaurant' not 'brand'
      category: category,
      status: status as "available" | "unavailable" | "discontinued",
      productType: productType || "veg", // Add productType field
      offerDate: {
        startDate: offerDate.startDate,
        endDate: offerDate.endDate,
      },
      foodType: productType && ["veg", "non-veg", "vegan", "jain"].includes(productType) ? productType : "veg", // Valid enum values only
      description: data.description,
      videoId: data.youtube_video_Id,
      ingredients: data.ingredients ? data.ingredients.split(",").map((i: string) => i.trim()) : [],
      preparationTime: Number(data.preparationTime) || Number(data["Preparation_Time_(mins)"]) || 5,
      spiceLevel: data.spiceLevel || "mild",
      thaliType: data.thaliType,
      featured: data.featured || false,
      additionalInformation: additionalInformation,
      tags: tags,
    };

    console.log('productData-------------------..>',productData)


    if (!img) {
      return notifyError("Product image is required");
    }
    if (!category.name) {
      return notifyError("Category is required");
    }
    if (Number(data.discount) > Number(data.price)) {
      return notifyError("Product price must be gether than discount");
    } else {
      const res = await addProduct(productData);
      if ("error" in res) {
        console.log("Add product error:", res.error);
        if ("data" in res.error) {
          const errorData = res.error.data as { message?: string };
          if (typeof errorData.message === "string") {
            return notifyError(errorData.message);
          }
        }
        // Fallback error message
        return notifyError("Failed to add food item. Please check all required fields.");
      } else {
        notifySuccess("Food item created successfully!");
        setIsSubmitted(true);
        resetForm();
        router.push('/product-grid')
      }
    }
  };
  // handle edit product
  const handleEditProduct = async (data: any, id: string) => {
    console.log("=== EDIT FORM SUBMISSION DEBUG ===");
    console.log("Edit form data--->", data);
    console.log("Form errors--->", errors);
    
    // Ensure brand is set - use first available brand as default if none selected
    let selectedBrand = brand;
    if (!brand.name || !brand.id) {
      // Set default brand - Urban Kitchen from the API response
      selectedBrand = {
        name: "Urban Kitchen",
        id: "68c1e077e3a8f3a04982b617"
      };
    }
    
    // product data
    const productData = {
      sku: data.SKU,
      img: img,
      name: data["Dish_Name"] || data.title || data.name, // Handle multiple field names
      title: data["Dish_Name"] || data.title || data.name, // Add title field
      slug: slugify(data["Dish_Name"] || data.title || data.name || "item", { replacement: "-", lower: true }),
      unit: data.unit || "piece",
      imageURLs: imageURLs,
      parent: parent || "Thali",
      children: children || "Main Course",
      price: Number(data.price),
      discount: Number(data["discount_percentage"]) || 0,
      quantity: Number(data.quantity),
      brand: selectedBrand, // Keep brand for backward compatibility
      restaurant: selectedBrand, // Backend expects 'restaurant' not 'brand'
      category: category,
      status: status as "available" | "unavailable" | "discontinued",
      productType: productType || "veg", // Add productType field
      offerDate: {
        startDate: offerDate.startDate,
        endDate: offerDate.endDate,
      },
      foodType: productType && ["veg", "non-veg", "vegan", "jain"].includes(productType) ? productType : "veg", // Valid enum values only
      description: data.description,
      videoId: data.youtube_video_Id,
      ingredients: data.ingredients ? data.ingredients.split(",").map((i: string) => i.trim()) : [],
      preparationTime: Number(data.preparationTime) || Number(data["Preparation_Time_(mins)"]) || 5,
      spiceLevel: data.spiceLevel || "mild",
      thaliType: data.thaliType,
      featured: data.featured || false,
      additionalInformation: additionalInformation,
      tags: tags,
    };
    console.log('edit productData---->',productData)
    const res = await editProduct({ id: id, data: productData });
    if ("error" in res) {
      if ("data" in res.error) {
        const errorData = res.error.data as { message?: string };
        if (typeof errorData.message === "string") {
          return notifyError(errorData.message);
        }
      }
    } else {
      notifySuccess("Product edit successFully");
      setIsSubmitted(true);
      router.push('/product-grid')
      resetForm();
    }
  };

  return {
    sku,
    setSku,
    img,
    setImg,
    title,
    setTitle,
    slug,
    setSlug,
    unit,
    setUnit,
    imageURLs,
    setImageURLs,
    parent,
    setParent,
    children,
    setChildren,
    price,
    setPrice,
    discount,
    setDiscount,
    quantity,
    setQuantity,
    brand,
    setBrand,
    category,
    setCategory,
    status,
    setStatus,
    productType,
    setProductType,
    description,
    setDescription,
    videoId,
    setVideoId,
    additionalInformation,
    setAdditionalInformation,
    tags,
    setTags,
    sizes,
    setSizes,
    handleSubmitProduct,
    handleEditProduct,
    register,
    handleSubmit,
    errors,
    control,
    offerDate,
    setOfferDate,
    setIsSubmitted,
    isSubmitted,
  };
};

export default useProductSubmit;
