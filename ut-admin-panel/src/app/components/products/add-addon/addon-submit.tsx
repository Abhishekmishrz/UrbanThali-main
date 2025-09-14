"use client";
import React from "react";
import useProductSubmit from "@/hooks/useProductSubmit";
import DescriptionTextarea from "../add-product/description-textarea";
import ProductImgUpload from "../add-product/product-img-upload";
import ProductCategory from "../../category/product-category";
import Tags from "../add-product/tags";
import FormField from "../form-field";
import AddonType from "./addon-type";

const AddAddonSubmit = () => {
  const {
    handleSubmit,
    handleSubmitProduct,
    register,
    errors,
    tags,
    setTags,
    control,
    setCategory,
    setParent,
    setChildren,
    setImg,
    img,
    setBrand,
    setProductType,
    isSubmitted,
  } = useProductSubmit();

  // Pre-configure for add-ons category
  React.useEffect(() => {
    setParent("Add-ons");
  }, [setParent]);

  return (
    <form onSubmit={handleSubmit(handleSubmitProduct)}>
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* left side */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="mb-6 bg-white px-8 py-8 rounded-md">
            <h4 className="text-[22px]">Add-on Item Information</h4>
            <FormField
              title="Add-on Name"
              isRequired={true}
              placeHolder="Enter add-on name (e.g., Extra Roti, Curd, Papad)"
              register={register}
              errors={errors}
            />
            <DescriptionTextarea register={register} errors={errors} />
          </div>

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6">
              <FormField
                title="price"
                isRequired={true}
                placeHolder="Add-on price"
                bottomTitle="Set the price for this add-on."
                type="number"
                register={register}
                errors={errors}
              />
              <FormField
                title="SKU"
                isRequired={true}
                placeHolder="SKU"
                bottomTitle="Enter unique SKU for this add-on."
                register={register}
                errors={errors}
              />
              <FormField
                title="quantity"
                isRequired={true}
                placeHolder="Available quantity"
                bottomTitle="How many units are available."
                type="number"
                register={register}
                errors={errors}
              />
              <FormField
                title="discount percentage"
                type="number"
                isRequired={false}
                placeHolder="Discount"
                bottomTitle="Optional discount percentage."
                register={register}
                errors={errors}
              />
            </div>
          </div>

          {/* Add-on specific fields */}
          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <h4 className="text-[18px] mb-4">Add-on Details</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-6">
              <FormField
                title="unit"
                isRequired={true}
                placeHolder="e.g., piece, bowl, glass, plate"
                bottomTitle="Unit of measurement for this add-on."
                register={register}
                errors={errors}
              />
              <FormField
                title="preparationTime"
                type="number"
                isRequired={false}
                placeHolder="Preparation time in minutes"
                bottomTitle="Time needed to prepare this add-on."
                register={register}
                errors={errors}
              />
            </div>
          </div>

          {/* Add-on type selection */}
          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <h4 className="text-[18px] mb-4">Add-on Type</h4>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-5">
              <AddonType
                errors={errors}
                control={control}
                setSelectProductType={setProductType}
              />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <ProductImgUpload
            imgUrl={img}
            setImgUrl={setImg}
            isSubmitted={isSubmitted}
          />

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <p className="mb-5 text-base text-black">Add-on Category</p>
            {/* category start - pre-filtered to Add-ons */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-5">
              <ProductCategory
                setCategory={setCategory}
                setParent={setParent}
                setChildren={setChildren}
              />
            </div>
            <p className="text-sm text-gray-600">
              Select the specific add-on subcategory for better organization.
            </p>
          </div>

          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <p className="mb-5 text-base text-black">Add-on Tags</p>
            {/* tags start */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 mb-5">
              <Tags tags={tags} setTags={setTags} />
            </div>
            <p className="text-sm text-gray-600">
              Add relevant tags like &quot;vegetarian&quot;, &quot;dairy&quot;, &quot;spicy&quot;, etc.
            </p>
          </div>

          {/* Add-on specific info */}
          <div className="bg-white px-8 py-8 rounded-md mb-6">
            <h5 className="text-[16px] mb-3 text-gray-800">Add-on Guidelines</h5>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Add-ons complement main thali orders</p>
              <p>• Keep prices affordable for extras</p>
              <p>• Use clear, descriptive names</p>
              <p>• Specify accurate preparation times</p>
            </div>
          </div>
        </div>
      </div>
      <button className="tp-btn px-5 py-2 mt-5" type="submit">
        Add Add-on Item
      </button>
    </form>
  );
};

export default AddAddonSubmit;