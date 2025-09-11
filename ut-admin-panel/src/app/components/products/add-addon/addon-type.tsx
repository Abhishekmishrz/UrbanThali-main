import React, { useEffect } from "react";
import ReactSelect from "react-select";
import { FieldErrors, Controller, Control } from "react-hook-form";
import ErrorMsg from "../../common/error-msg";

// prop type
type IPropType = {
  errors: FieldErrors<any>;
  control: Control;
  setSelectProductType: React.Dispatch<React.SetStateAction<string>>;
  default_value?: string;
};

const AddonType = ({
  errors,
  control,
  default_value,
  setSelectProductType,
}: IPropType) => {
  // handleSelectProduct
  const handleSelectProduct = (value: string) => {
    setSelectProductType(value);
  };
  
  // set default product
  useEffect(() => {
    if (default_value) {
      setSelectProductType(default_value);
    }
  }, [default_value, setSelectProductType]);
  
  return (
    <>
      <Controller
        name="productType"
        control={control}
        rules={{
          required: default_value
            ? false
            : "Add-on type is required!",
        }}
        render={({ field }) => (
          <ReactSelect
            {...field}
            value={field.value}
            defaultValue={
              default_value
                ? {
                    label: default_value,
                    value: default_value,
                  }
                : {
                    label: "Select Add-on Type..",
                    value: 0,
                  }
            }
            onChange={(selectedOption) => {
              field.onChange(selectedOption);
              handleSelectProduct(selectedOption?.value);
            }}
            options={[
              // Add-on specific categories
              { value: "addon-bread", label: "Extra Bread & Roti" },
              { value: "addon-dairy", label: "Dairy Products (Curd, Buttermilk)" },
              { value: "addon-rice", label: "Rice Items (Jeera Rice, Plain Rice)" },
              { value: "addon-drinks", label: "Drinks & Beverages" },
              { value: "addon-sides", label: "Sides & Extras (Papad, Salad)" },
              { value: "addon-sweets", label: "Desserts & Sweets" },
              { value: "addon-condiments", label: "Condiments & Pickles" },
              { value: "addon-curries", label: "Extra Curries" },
            ]}
          />
        )}
      />
      <ErrorMsg msg={errors?.productType?.message as string} />
    </>
  );
};

export default AddonType;