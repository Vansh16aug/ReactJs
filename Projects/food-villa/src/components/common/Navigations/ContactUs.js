import { MessageSquare, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="flex max-w-4xl mx-auto w-full h-screen items-center">
      <div className="flex flex-col gap-6 w-full lg:w-1/2 p-8">
        {/* Contact Options */}
        <div className="flex justify-between items-center gap-8 py-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <MessageSquare className="w-5 h-5" />
            <span>VIA MESSAGE</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Phone className="w-5 h-5" />
            <span>VIA PHONE</span>
          </button>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
          <Mail className="w-5 h-5" />
          <span>VIA EMAIL FORM</span>
        </button>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div className="relative w-full">
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 px-2 bg-white text-sm"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 px-2 bg-white text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative w-full">
            <label
              htmlFor="message"
              className="absolute -top-2 left-3 px-2 bg-white text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={7}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {/* Illustration */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
        <img
          src="https://res.cloudinary.com/vanshstorage/image/upload/v1730295924/virtual-assistant_3_edrxrq.svg"
          alt="contact-illustration"
          className="w-4/5 max-w-lg"
        />
      </div>
    </section>
  );
};

export default ContactForm;
