import React from "react";
import ReactSelect from "react-select";
import { notifySuccess } from "@/utils/toast";
import { useUpdateStatusMutation } from "@/redux/order/orderApi";

// option
const options = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "preparing", label: "Preparing" },
  { value: "ready", label: "Ready for Pickup" },
  { value: "out-for-delivery", label: "Out for Delivery" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const OrderStatusChange = ({ id }: { id: string }) => {
  const [updateStatus, { data: updateStatusData }] = useUpdateStatusMutation();
  const handleChange = async (value: string | undefined, id: string) => {
    if (value) {
      const res = await updateStatus({ id, status: { status: value } });
      if ("data" in res) {
        if ("message" in res.data) {
          notifySuccess(res.data.message);
        }
      }
    }
  };
  return (
    <ReactSelect
      onChange={(value) => handleChange(value?.value, id)}
      options={options}
    />
  );
};

export default OrderStatusChange;
