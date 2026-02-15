import { useState } from "react";
import { toast } from "react-hot-toast";

const AddParcel = () => {
  const [type, setType] = useState("document");
  const [formData, setFormData] = useState({
    title: "",
    weight: "",
    senderName: "Suborna Khatun", // Prefilled example
    senderContact: "",
    senderRegion: "",
    senderCenter: "",
    senderAddress: "",
    pickupInstruction: "",
    receiverName: "",
    receiverContact: "",
    receiverRegion: "",
    receiverCenter: "",
    receiverAddress: "",
    deliveryInstruction: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Cost Calculation Logic
  const calculateCost = () => {
    let base = 50;

    if (type === "non-document") {
      base += Number(formData.weight || 0) * 10;
    }

    if (formData.senderCenter !== formData.receiverCenter) {
      base += 40;
    }

    return base;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    for (let key in formData) {
      if (!formData[key] && key !== "weight") {
        return toast.error("Please fill all required fields");
      }
    }

    const cost = calculateCost();

    toast(
      (t) => (
        <div>
          <p className="font-bold mb-2">
            Delivery Cost: ৳ {cost}
          </p>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              const parcelData = {
                ...formData,
                type,
                cost,
                creation_date: new Date(),
              };

              console.log("Saved Data:", parcelData);

              toast.success("Parcel Confirmed!");
              toast.dismiss(t.id);
            }}
          >
            Confirm
          </button>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto bg-base-100 p-10 rounded-2xl shadow-xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">
          Add Parcel
        </h1>
        <p className="text-gray-500 mb-8">
          Enter your parcel details
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* ========== Parcel Info ========== */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Parcel Info
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {/* Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select
                  className="select select-bordered"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="document">Document</option>
                  <option value="non-document">Non-Document</option>
                </select>
              </div>

              {/* Title */}
              <input
                type="text"
                name="title"
                placeholder="Parcel Title"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              {/* Weight (Conditional) */}
              {type === "non-document" && (
                <input
                  type="number"
                  name="weight"
                  placeholder="Parcel Weight (KG)"
                  className="input input-bordered"
                  onChange={handleChange}
                />
              )}
            </div>
          </div>

          {/* ========== Sender Info ========== */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Sender Info
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="senderName"
                className="input input-bordered"
                value={formData.senderName}
                readOnly
              />

              <input
                name="senderContact"
                placeholder="Contact"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="senderRegion"
                placeholder="Select Region"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="senderCenter"
                placeholder="Select Service Center"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="senderAddress"
                placeholder="Address"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="pickupInstruction"
                placeholder="Pick up Instruction"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* ========== Receiver Info ========== */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Receiver Info
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                name="receiverName"
                placeholder="Name"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="receiverContact"
                placeholder="Contact"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="receiverRegion"
                placeholder="Select Region"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="receiverCenter"
                placeholder="Select Service Center"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="receiverAddress"
                placeholder="Address"
                className="input input-bordered"
                onChange={handleChange}
                required
              />

              <input
                name="deliveryInstruction"
                placeholder="Delivery Instruction"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full md:w-auto">
            Proceed to Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddParcel;
