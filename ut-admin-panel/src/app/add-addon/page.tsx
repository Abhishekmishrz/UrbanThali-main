import Wrapper from "@/layout/wrapper";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import AddAddonSubmit from "../components/products/add-addon/addon-submit";

const AddAddon = () => {
  return (
    <Wrapper>
      <div className="body-content px-8 py-8 bg-slate-100">
        {/* breadcrumb start */}
        <Breadcrumb title="Add Add-on Item" subtitle="Add Add-on Item" />
        {/* breadcrumb end */}

        {/* add an addon start */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 2xl:col-span-10">
            <AddAddonSubmit />
          </div>
        </div>
        {/* add an addon end */}
      </div>
    </Wrapper>
  );
};

export default AddAddon;