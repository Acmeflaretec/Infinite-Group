import React from "react";
import { Icons } from "../common/Icons";

const QuickApplyForm: React.FC = () => {
  return (
    <div className="p-2 md:p-8 flex flex-col gap-5">
      <form className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name *
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Firstname"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name *
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Lastname"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email ID *
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Email Id"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              LinkedIn ID
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Linkedin Id"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Place of Residence *
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Place of Residence"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="qualification"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Highest Qualification *
            </label>
            <select
              id="qualification"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option value={"10th"} selected>
                10th Grade
              </option>
              <option value={"12th"}>12th Grade</option>
              <option value={"UG"}>UG (undergraduate)</option>
              <option value={"PG"}>PG (postgraduate)</option>
              <option value={"Others"}>Others</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact Number *
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter contact number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="whatsapp"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Whatsapp Number *
            </label>
            <input
              type="number"
              name="whatsapp"
              id="whatsapp"
              placeholder="Enter whatsapp number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="flex flex-col text-gray-900 gap-4 border p-4 border-gray-300">
          <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Upload Resume *
          </h1>
          <p className="text-gray-500 text-sm">
            If uploading, upload either DOC, DOCX, or PDF file types (1MB max)
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="inline-flex items-center bg-blue-50 gap-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center">
              <Icons.linkedIn className="text-blue-400" /> Apply via Linked In
            </button>
            <button
              type="submit"
              className="inline-flex items-center bg-blue-50 gap-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <Icons.upload /> Upload from device
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuickApplyForm;
