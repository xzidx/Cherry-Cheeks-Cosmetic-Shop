
import React, { useState } from "react";
import {
  FiFileText,
  FiTag,
  FiDatabase,
  FiInfo,
  FiDollarSign,
  FiImage,
  FiUploadCloud,
  FiShoppingCart,
  FiSave,
  FiCalendar,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";

const initialForm = {
  name: "",
  description: "",
  category: "",
  subCategory: "",
  stock: "",
  minimumStock: "",
  brand: "",
  size: "",
  color: "",
  regularPrice: "",
  salePrice: "",
  discount: "",
  minimumOrder: "1",
};

const categories = {
  Cosmetics: ["Lipstick", "Foundation", "Blush", "Eyeshadow"],
  "Skin Care": [
    "Face Serum",
    "Face Cream",
    "Facial Cleanser",
    "Sunscreen",
  ],
  "Body Care": ["Body Lotion", "Body Wash", "Body Scrub"],
  "Hair Care": ["Shampoo", "Conditioner", "Hair Oil"],
};

const brands = [
  "SinkCare",
  "Lancôme",
  "L'Oréal",
  "The Ordinary",
  "CeraVe",
  "Other",
];

const sizes = ["15ml", "30ml", "50ml", "100ml", "200ml", "Medium", "Large"];

const colors = [
  "Natural",
  "Pink",
  "Rose",
  "Red",
  "Nude",
  "Brown",
  "Clear",
  "Other",
];

function FormSection({ icon: Icon, title, children }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F6] text-[#F66B87]">
          <Icon className="h-5 w-5" />
        </div>

        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function FormField({ label, children, hint }) {
  return (
    <div className="min-w-0">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      {children}

      {hint && (
        <p className="mt-2 text-xs leading-5 text-gray-400">{hint}</p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#F66B87] focus:ring-2 focus:ring-[#F66B87]/10";

function AddProduct() {
  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([null, null, null]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const subCategories = form.category ? categories[form.category] || [] : [];

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => {
      const updated = { ...previous, [name]: value };

      if (name === "category") {
        updated.subCategory = "";
      }

      if (name === "regularPrice" || name === "salePrice") {
        const regular = Number(
          name === "regularPrice" ? value : updated.regularPrice
        );
        const sale = Number(
          name === "salePrice" ? value : updated.salePrice
        );

        if (regular > 0 && sale >= 0 && sale <= regular) {
          updated.discount = Math.round(((regular - sale) / regular) * 100);
        } else if (name === "regularPrice" || name === "salePrice") {
          updated.discount = "";
        }
      }

      return updated;
    });

    setMessage("");
  }

  function handleImageChange(index, file) {
    if (!file) return;

    if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
      setMessageType("error");
      setMessage("Please select a PNG, JPG, or GIF image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessageType("error");
      setMessage("Each image must be smaller than 10MB.");
      return;
    }

    setImages((previous) => {
      const updated = [...previous];

      if (updated[index]?.preview) {
        URL.revokeObjectURL(updated[index].preview);
      }

      updated[index] = {
        file,
        preview: URL.createObjectURL(file),
      };

      return updated;
    });

    setMessage("");
  }

  function removeImage(index) {
    setImages((previous) => {
      const updated = [...previous];

      if (updated[index]?.preview) {
        URL.revokeObjectURL(updated[index].preview);
      }

      updated[index] = null;
      return updated;
    });
  }

  function handleSubmit(event, action) {
    event.preventDefault();
    setMessage("");

    if (action === "draft") {
      setMessageType("success");
      setMessage("Draft saved in this form. Connect your backend to save it permanently.");
      return;
    }

    if (action === "schedule") {
      setMessageType("success");
      setMessage("Your product is ready to be scheduled. Connect your backend to finish scheduling.");
      return;
    }

    if (!form.name.trim() || !form.category || !form.brand) {
      setMessageType("error");
      setMessage("Please enter the product name, category, and brand.");
      return;
    }

    if (form.regularPrice === "" || Number(form.regularPrice) < 0) {
      setMessageType("error");
      setMessage("Please enter a valid regular price.");
      return;
    }

    if (
      form.salePrice !== "" &&
      Number(form.salePrice) > Number(form.regularPrice)
    ) {
      setMessageType("error");
      setMessage("The sale price cannot be greater than the regular price.");
      return;
    }

    if (Number(form.stock) < 0 || Number(form.minimumStock) < 0) {
      setMessageType("error");
      setMessage("Stock values cannot be negative.");
      return;
    }

    const productData = {
      ...form,
      stock: Number(form.stock || 0),
      minimumStock: Number(form.minimumStock || 0),
      regularPrice: Number(form.regularPrice),
      salePrice: form.salePrice === "" ? null : Number(form.salePrice),
      discount: form.discount === "" ? 0 : Number(form.discount),
      minimumOrder: Number(form.minimumOrder || 1),
      images: images.filter(Boolean).map((item) => item.file),
    };

    // Replace this with your API request when your backend is ready.
    console.log("Product data:", productData);

    setMessageType("success");
    setMessage("Product information is valid! Connect your backend to save it permanently.");
  }

  return (
    <main className="min-h-screen bg-slate-50 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1550px] px-4 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-8">
          <h2 className="mb-3 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
            PRODUCT MANAGEMENT
          </h2>

          <h1 className="text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
            Add New Product
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Add a new product to your cosmetic collection. Fill in the product
            information below.
          </p>
        </div>

        {/* Feedback Message */}
        {message && (
          <div
            role="status"
            className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
              messageType === "error"
                ? "border-red-100 bg-red-50 text-red-700"
                : "border-green-100 bg-green-50 text-green-700"
            }`}
          >
            <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p>{message}</p>
          </div>
        )}

        <form onSubmit={(event) => handleSubmit(event, "add")}>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

            {/* LEFT COLUMN */}
            <div className="space-y-6">

              {/* Name & Description */}
              <FormSection icon={FiFileText} title="Name & Description">
                <div className="space-y-5">
                  <FormField label="Product Name">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter product name"
                      className={inputClass}
                      required
                    />
                  </FormField>

                  <FormField
                    label="Product Description"
                    hint="Describe the product's features, benefits, and usage."
                  >
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Write a product description..."
                      rows={5}
                      className={`${inputClass} resize-y`}
                    />
                  </FormField>
                </div>
              </FormSection>

              {/* Category */}
              <FormSection icon={FiTag} title="Category">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField label="Product Category">
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select category</option>

                      {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Product Sub-Category">
                    <select
                      name="subCategory"
                      value={form.subCategory}
                      onChange={handleChange}
                      disabled={!form.category}
                      className={`${inputClass} disabled:cursor-not-allowed disabled:bg-gray-50`}
                    >
                      <option value="">Select sub-category</option>

                      {subCategories.map((subCategory) => (
                        <option key={subCategory} value={subCategory}>
                          {subCategory}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>
              </FormSection>

              {/* Manage Stock */}
              <FormSection icon={FiDatabase} title="Manage Stock">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Product Stock"
                    hint="Total units currently available."
                  >
                    <input
                      type="number"
                      name="stock"
                      value={form.stock}
                      onChange={handleChange}
                      min="0"
                      step="1"
                      placeholder="e.g. 100"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField
                    label="Minimum Stock"
                    hint="Get notified when stock falls below this amount."
                  >
                    <input
                      type="number"
                      name="minimumStock"
                      value={form.minimumStock}
                      onChange={handleChange}
                      min="0"
                      step="1"
                      placeholder="e.g. 10"
                      className={inputClass}
                    />
                  </FormField>
                </div>
              </FormSection>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">

              {/* Product Details */}
              <FormSection icon={FiInfo} title="Product Details">
                <div className="space-y-5">
                  <FormField label="Brand Name">
                    <select
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select brand</option>

                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField label="Product Size / Volume">
                      <select
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select size</option>

                        {sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Product Colors / Shades">
                      <select
                        name="color"
                        value={form.color}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select color</option>

                        {colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>
                </div>
              </FormSection>

              {/* Product Pricing */}
              <FormSection icon={FiDollarSign} title="Product Pricing">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField label="Regular Price ($)">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-gray-400">
                        $
                      </span>

                      <input
                        type="number"
                        name="regularPrice"
                        value={form.regularPrice}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        className={`${inputClass} pl-8`}
                        required
                      />
                    </div>
                  </FormField>

                  <FormField label="Sale Price ($)">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-gray-400">
                        $
                      </span>

                      <input
                        type="number"
                        name="salePrice"
                        value={form.salePrice}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        className={`${inputClass} pl-8`}
                      />
                    </div>
                  </FormField>

                  <FormField label="Discount (%)">
                    <div className="relative">
                      <input
                        type="number"
                        name="discount"
                        value={form.discount}
                        onChange={handleChange}
                        min="0"
                        max="100"
                        placeholder="0"
                        className={`${inputClass} pr-10`}
                      />

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-sm text-gray-400">
                        %
                      </span>
                    </div>
                  </FormField>

                  <FormField label="Minimum Order">
                    <input
                      type="number"
                      name="minimumOrder"
                      value={form.minimumOrder}
                      onChange={handleChange}
                      min="1"
                      step="1"
                      className={inputClass}
                    />
                  </FormField>
                </div>
              </FormSection>

              {/* Product Images */}
              <FormSection icon={FiImage} title="Product Images">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {images.map((image, index) => (
                    <div key={index} className="min-w-0">
                      <label
                        htmlFor={`product-image-${index}`}
                        className="group relative flex min-h-36 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-3 text-center transition hover:border-[#F66B87] hover:bg-[#FFF9FA]"
                      >
                        {image ? (
                          <>
                            <img
                              src={image.preview}
                              alt={`Product preview ${index + 1}`}
                              className="absolute inset-0 h-full w-full object-cover"
                            />

                            <button
                              type="button"
                              aria-label={`Remove image ${index + 1}`}
                              onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                removeImage(index);
                              }}
                              className="absolute right-2 top-2 z-10 rounded-full bg-white p-1.5 text-gray-600 shadow hover:text-red-500"
                            >
                              <FiX className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <FiUploadCloud className="mb-3 h-8 w-8 text-[#F66B87] transition group-hover:scale-110" />

                            <span className="text-xs font-medium text-gray-600">
                              Upload Image
                            </span>

                            <span className="mt-1 text-[11px] text-gray-400">
                              Image {index + 1}
                            </span>
                          </>
                        )}

                        <input
                          id={`product-image-${index}`}
                          type="file"
                          accept="image/png,image/jpeg,image/gif"
                          className="sr-only"
                          onChange={(event) => {
                            handleImageChange(index, event.target.files?.[0]);
                            event.target.value = "";
                          }}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5 text-gray-400">
                  PNG, JPG or GIF up to 10MB. Recommended 800x800px.
                </p>
              </FormSection>
            </div>
          </div>

          {/* Actions Panel */}
          <section className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Ready to add your product?
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Check your product details before saving.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={(event) => handleSubmit(event, "draft")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:text-[#F66B87]"
                >
                  <FiSave className="h-4 w-4" />
                  Save Draft
                </button>

                <button
                  type="button"
                  onClick={(event) => handleSubmit(event, "schedule")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F66B87]/30 bg-[#FFF5F6] px-5 py-3 text-sm font-medium text-[#F66B87] transition hover:bg-[#FFE8ED]"
                >
                  <FiCalendar className="h-4 w-4" />
                  Schedule
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F66B87] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#E05571] focus:outline-none focus:ring-2 focus:ring-[#F66B87] focus:ring-offset-2"
                >
                  <FiShoppingCart className="h-4 w-4" />
                  Add Product
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}

export default AddProduct;
