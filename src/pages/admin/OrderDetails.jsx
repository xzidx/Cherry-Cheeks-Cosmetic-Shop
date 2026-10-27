import React from "react";
import { useParams } from "react-router-dom";
import orders from "../../data/orders";
import {
  FiDownload,
  FiTruck,
  FiPackage,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiCheckCircle,
  FiClock,
  FiShoppingBag,
  FiCalendar,
  FiHash,
} from "react-icons/fi";

function DetailCard({ icon: Icon, title, subtitle, children }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 p-5 sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F6] text-[#F66B87]">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h2 className="font-bold text-gray-800">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}

function DetailRow({ label, children }) {
  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
      <dt className="text-sm text-gray-500">{label}</dt>
      <dd className="text-sm font-medium text-gray-800 sm:text-right">
        {children}
      </dd>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-[#F66B87]" />

      <div className="min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 break-words text-sm font-medium text-gray-800">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
}

function OrderDetails() {
  const { orderId } = useParams();

  const order = orders.find(
    (item) => String(item.id) === decodeURIComponent(orderId || "")
  );

  if (!order) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold text-gray-800">
          Order not found
        </h1>
      </div>
    );
  }

  // Keep handleExport, handleMarkShipped, and your existing JSX here.

  // Keep handleExport, handleMarkShipped, and your existing JSX here.


  function handleExport() {
    const report = [
      `Order Report: ${order.id}`,
      `Customer: ${order.customer}`,
      `Email: ${order.email}`,
      `Phone: ${order.phone}`,
      `Location: ${order.location}`,
      `Placed on: ${order.placedOn}`,
      `Payment status: ${order.paymentStatus}`,
      `Fulfillment status: ${order.fulfillmentStatus}`,
      `Product: ${order.product}`,
      `Size: ${order.size}`,
      `Shade: ${order.shade}`,
      `Quantity: ${order.quantity}`,
      `Unit price: $${order.unitPrice.toFixed(2)}`,
      `Amount: $${order.amount.toFixed(2)}`,
      `Shipping address: ${order.shippingAddress}`,
      `Tracking number: ${order.trackingNumber}`,
    ].join("\n");

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${order.id}-report.txt`;
    link.click();

    URL.revokeObjectURL(url);
  }

  function handleMarkShipped() {
    alert(
      "Connect your backend to update the order status."
    );
  }

  return (
    <main className="mb-8">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-1">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Order Details
          </h1>

          <p className="mt-2 text-gray-500">
            View and manage order {order.id} for {order.user}.
          </p>
        </div>

        {/* Order Actions */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#F66B87] hover:text-[#F66B87]"
          >
            <FiDownload className="h-4 w-4" />
            Export Report
          </button>

          <button
            type="button"
            onClick={handleMarkShipped}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E05571]"
          >
            <FiTruck className="h-4 w-4" />
            Mark as Shipped
          </button>
        </div>

     


        
        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* LEFT COLUMN */}
          <div className="space-y-6 lg:col-span-2">

            {/* Order Summary */}
            <DetailCard
              icon={FiShoppingBag}
              title="Order Summary"
              subtitle="Overview of this transaction"
            >
              <dl className="divide-y divide-gray-100">
                <DetailRow label="Order ID">{order.id}</DetailRow>

                <DetailRow label="Placed on">
                  <span className="inline-flex items-center gap-2">
                    <FiCalendar className="h-4 w-4 text-gray-400" />
                    {order.placedOn}
                  </span>
                </DetailRow>

                <DetailRow label="Payment status">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    <FiCheckCircle className="h-3.5 w-3.5" />
                    {order.paymentStatus}
                  </span>
                </DetailRow>

                <DetailRow label="Fulfillment">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                    <FiClock className="h-3.5 w-3.5" />
                    {order.fulfillmentStatus}
                  </span>
                </DetailRow>

                <DetailRow label="Amount">
                  <span className="text-lg font-bold text-[#F66B87]">
                    ${order.amount.toFixed(2)}
                  </span>
                </DetailRow>
              </dl>
            </DetailCard>

            {/* Customer Info */}
            <DetailCard
              icon={FiUser}
              title="Customer Info"
              subtitle="Buyer details for this order"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <InfoItem
                  icon={FiUser}
                  label="Customer"
                  value={order.customer}
                />

                <InfoItem
                  icon={FiMail}
                  label="Email"
                  value={order.email}
                />

                <InfoItem
                  icon={FiPhone}
                  label="Phone"
                  value={order.phone}
                />

                <InfoItem
                  icon={FiMapPin}
                  label="Location"
                  value={order.location}
                />
              </div>
            </DetailCard>

            {/* Payment & Fulfillment */}
            <DetailCard
              icon={FiTruck}
              title="Payment & Fulfillment"
              subtitle="Transaction and delivery status"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="mb-3 text-sm text-gray-500">
                      Payment status
                    </p>

                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                      <FiCheckCircle className="h-4 w-4" />
                      {order.paymentStatus}
                    </span>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="mb-3 text-sm text-gray-500">
                      Fulfillment status
                    </p>

                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600">
                      <FiClock className="h-4 w-4" />
                      {order.fulfillmentStatus}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <InfoItem
                    icon={FiMapPin}
                    label="Shipping address"
                    value={order.shippingAddress}
                  />

                  <div className="mt-3 border-t border-gray-100 pt-3">
                    <InfoItem
                      icon={FiHash}
                      label="Tracking number"
                      value={order.trackingNumber}
                    />
                  </div>
                </div>
              </div>
            </DetailCard>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* Ordered Item */}
            <DetailCard
              icon={FiPackage}
              title="Ordered Item"
              subtitle="Product details for this order"
            >
              <div className="mb-5 flex items-center gap-4 rounded-xl bg-[#FFF5F6] p-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-[#F66B87]">
                  <FiPackage className="h-8 w-8" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-gray-800">
                    {order.product}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {order.size} · {order.shade}
                  </p>
                </div>
              </div>

              <dl className="divide-y divide-gray-100">
                <DetailRow label="Product">{order.product}</DetailRow>
                <DetailRow label="Size / Volume">{order.size}</DetailRow>
                <DetailRow label="Shade / Color">{order.shade}</DetailRow>
                <DetailRow label="Quantity">{order.quantity}</DetailRow>

                <DetailRow label="Unit price">
                  ${order.unitPrice.toFixed(2)}
                </DetailRow>
              </dl>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#FFF5F6] p-4">
                <span className="text-sm font-medium text-gray-600">
                  Total amount
                </span>

                <span className="text-xl font-bold text-[#F66B87]">
                  ${order.amount.toFixed(2)}
                </span>
              </div>
            </DetailCard>

            {/* Order Timeline */}
            <DetailCard
              icon={FiClock}
              title="Order Timeline"
              subtitle="Status history"
            >
              <div className="relative ml-2 space-y-6 border-l-2 border-gray-100 pl-6">

                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#F66B87] ring-2 ring-[#FFF5F6]" />

                  <h3 className="text-sm font-semibold text-gray-800">
                    Order placed
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    The order was created successfully.
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#F66B87]">
                    October 25, 2026
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#F66B87] ring-2 ring-[#FFF5F6]" />

                  <h3 className="text-sm font-semibold text-gray-800">
                    Payment completed
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Payment was confirmed successfully.
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#F66B87]">
                    October 25, 2026
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-amber-400 ring-2 ring-amber-50" />

                  <h3 className="text-sm font-semibold text-gray-800">
                    Fulfillment update
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your order is being prepared for shipment.
                  </p>

                  <p className="mt-2 text-xs font-medium text-amber-600">
                    In progress
                  </p>
                </div>
              </div>
            </DetailCard>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 rounded-xl border border-[#F66B87]/10 bg-[#FFF5F6] p-4">
          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-[#F66B87]">
              Order information:
            </span>{" "}
            This page currently uses sample order data. Connect it to your
            backend API to display actual customer, payment, and shipping
            information.
          </p>
        </div>
      </div>
    </main>
  );
}

export default OrderDetails;
