import React from "react";
import CustomButton from "../ui/CustomButton";

const ContactForm: React.FC = () => {
  return (
    <form className="p-4 md:py-8">
      <div className="grid gap-4 mb-4 grid-cols-2 w-full">
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
        <div className="col-span-2 md:col-span-1">
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
        <div className="col-span-2 md:col-span-1">
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
        <div className="col-span-2">
          <p className="block mb-2 text-sm font-medium text-gray-900">
            Select Subject *
          </p>
          <fieldset className="flex flex-col md:flex-row md:gap-8">
            <div className="flex items-center mb-4">
              <input
                id="inquiry-option-1"
                type="radio"
                name="type"
                value="generalEnquiry"
                className="w-4 h-4 border-gray-300"
                defaultChecked
              />
              <label
                htmlFor="inquiry-option-1"
                className="block ms-2  text-sm text-gray-800"
              >
                General Inquiry
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="inquiry-option-2"
                type="radio"
                name="type"
                value="supportRequest"
                className="w-4 h-4 border-gray-300"
              />
              <label
                htmlFor="inquiry-option-2"
                className="block ms-2 text-sm text-gray-800"
              >
                Support Request
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="inquiry-option-3"
                type="radio"
                name="type"
                value="feedback"
                className="w-4 h-4 border-gray-300"
              />
              <label
                htmlFor="inquiry-option-3"
                className="block ms-2 text-sm text-gray-800"
              >
                Feedback
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="inquiry-option-4"
                type="radio"
                name="type"
                value="jobOpportunities"
                className="w-4 h-4 border-gray-300"
              />
              <label
                htmlFor="inquiry-option-4"
                className="block ms-2 text-sm text-gray-800"
              >
                Job Opportunities
              </label>
            </div>
          </fieldset>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="col-span-2">
          <CustomButton type="secondary">Send Message</CustomButton>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
