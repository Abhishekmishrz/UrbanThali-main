import React from "react";
import FormField from "../form-field";

const FoodDetails = ({ register, errors }: any) => {
  return (
    <div className="bg-white px-8 py-8 rounded-md mb-6">
      <h4 className="text-[22px] mb-4">Food Details</h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-6">
        <FormField
          title="Preparation Time (mins)"
          type="number"
          isRequired={true}
          placeHolder="e.g., 30"
          bottomTitle="Time to prepare this dish"
          register={register}
          errors={errors}
        />
        <FormField
          title="Calories"
          type="number"
          isRequired={false}
          placeHolder="e.g., 450"
          bottomTitle="Calorie content per serving"
          register={register}
          errors={errors}
        />
        <FormField
          title="Serving Size"
          isRequired={false}
          placeHolder="e.g., 2 persons"
          bottomTitle="Number of servings"
          register={register}
          errors={errors}
        />
      </div>
      
      <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-x-6 mt-4">
        <div className="mb-5">
          <label className="mb-2 text-base text-black capitalize">
            Ingredients <span className="text-red">*</span>
          </label>
          <textarea
            {...register("ingredients", { required: "Ingredients are required" })}
            className="input w-full h-[100px] p-3 border border-gray-300 rounded-md"
            placeholder="List main ingredients separated by commas (e.g., Chicken, Rice, Spices, Vegetables)"
          />
          {errors.ingredients && (
            <span className="text-red-500 text-sm">{errors.ingredients.message}</span>
          )}
        </div>
        
        <div className="mb-5">
          <label className="mb-2 text-base text-black capitalize">
            Dietary Information
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("vegetarian")}
                className="mr-2"
              />
              <span>Vegetarian</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("vegan")}
                className="mr-2"
              />
              <span>Vegan</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("glutenFree")}
                className="mr-2"
              />
              <span>Gluten-Free</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("dairyFree")}
                className="mr-2"
              />
              <span>Dairy-Free</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("halal")}
                className="mr-2"
              />
              <span>Halal</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("spicy")}
                className="mr-2"
              />
              <span>Spicy</span>
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-2 text-base text-black capitalize">
            Spice Level
          </label>
          <select
            {...register("spiceLevel")}
            className="input w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select Spice Level</option>
            <option value="mild">Mild</option>
            <option value="medium">Medium</option>
            <option value="hot">Hot</option>
            <option value="extra-hot">Extra Hot</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;