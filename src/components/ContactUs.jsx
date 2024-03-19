import React from "react";

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("hi");
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81357b82-16e7-41a1-bf49-9e82e51bb3b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      window.alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="p-16 text-lg">
      <h1 className="flex items-center justify-center font-bold mt-8 text-2xl text-blue mb-20 ">
        Send me a Message
      </h1>
      <form
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="full-name" className="input-label">
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            placeholder="John Smith"
            name="full-name"
            required
            className="input-field text-white bg-black rounded-lg h-10" // Added w-full class
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            name="email"
            required
            className="input-field text-white bg-black rounded-lg h-10" // Added w-full class
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="number" className="input-label">
            Number
          </label>
          <input
            id="number"
            type="tel"
            placeholder="000-000-0000"
            name="number"
            required
            className="input-field text-white bg-black rounded-lg w-full h-10" // Added w-full class
          />
        </div>
        <div className="mt-8 flex flex-col col-span-3">
          <label htmlFor="message" className="input-label">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message here"
            name="message"
            rows="8"
            required
            className="input-field text-white bg-black rounded-lg h-52" // Added w-full class
          ></textarea>
        </div>
        <div className="flex justify-center col-span-3">
          <button
            type="submit"
            className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-opacity-80"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
