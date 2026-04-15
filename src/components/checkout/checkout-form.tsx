"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

export default function CheckoutForm() {
  const [step, setStep] = useState<Step>(1);

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [address, setAddress] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="space-y-4">
      {/* STEP 1 */}
      <section className="border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Step 1
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Contact information
            </h2>
            {step !== 1 && contact.email ? (
              <p className="mt-1 text-sm text-slate-500">
                {contact.firstName} {contact.lastName} · {contact.email}
              </p>
            ) : null}
          </div>
          <span className="text-sm font-medium text-slate-500">
            {step === 1 ? "Active" : "Edit"}
          </span>
        </button>

        {step === 1 && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-4">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                value={contact.firstName}
                onChange={(e) =>
                  setContact({ ...contact, firstName: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={contact.lastName}
                onChange={(e) =>
                  setContact({ ...contact, lastName: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900 md:col-span-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900 md:col-span-2"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Continue to Address
              </button>
            </div>
          </div>
        )}
      </section>

      {/* STEP 2 */}
      <section className="border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Step 2
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Address information
            </h2>
            {step !== 2 && address.street ? (
              <p className="mt-1 text-sm text-slate-500">
                {address.street}, {address.city}, {address.state}
              </p>
            ) : null}
          </div>
          <span className="text-sm font-medium text-slate-500">
            {step === 2 ? "Active" : "Edit"}
          </span>
        </button>

        {step === 2 && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-4">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="Street Address"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900 md:col-span-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={address.apartment}
                onChange={(e) =>
                  setAddress({ ...address, apartment: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900 md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={address.zip}
                onChange={(e) =>
                  setAddress({ ...address, zip: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
              <input
                type="text"
                placeholder="Country"
                value={address.country}
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
                className="h-11 border border-slate-300 px-4 text-sm outline-none focus:border-slate-900"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </section>

      {/* STEP 3 */}
      <section className="border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Step 3
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Payment method
            </h2>
            {step !== 3 ? (
              <p className="mt-1 text-sm text-slate-500">
                {paymentMethod === "card"
                  ? "Credit / Debit Card"
                  : "Cash on Delivery"}
              </p>
            ) : null}
          </div>
          <span className="text-sm font-medium text-slate-500">
            {step === 3 ? "Active" : "Edit"}
          </span>
        </button>

        {step === 3 && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-4">
            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3 border border-slate-300 px-4 py-4 hover:border-slate-900">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="mt-1"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    Credit / Debit Card
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Pay securely using your card
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer items-start gap-3 border border-slate-300 px-4 py-4 hover:border-slate-900">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mt-1"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    Cash on Delivery
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Pay when your order is delivered
                  </p>
                </div>
              </label>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Continue to Review
              </button>
            </div>
          </div>
        )}
      </section>

      {/* STEP 4 */}
      <section className="border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setStep(4)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Step 4
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Review order
            </h2>
          </div>
          <span className="text-sm font-medium text-slate-500">
            {step === 4 ? "Active" : "Edit"}
          </span>
        </button>

        {step === 4 && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-4">
            <div className="space-y-3 text-sm text-slate-600">
              <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-900">Contact:</span>{" "}
                {contact.firstName} {contact.lastName}, {contact.email}
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-900">Address:</span>{" "}
                {address.street}, {address.city}, {address.state}, {address.zip},{" "}
                {address.country}
              </div>
              <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="font-semibold text-slate-900">Payment:</span>{" "}
                {paymentMethod === "card"
                  ? "Credit / Debit Card"
                  : "Cash on Delivery"}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}