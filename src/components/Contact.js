import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex justify-center grid-cols-2">
                <div>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">LinkedIn</h2>
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        in/sriversgreen
                    </h2>
                </div>
                <div>
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Email
                    </h2>
                </div>
                <div>
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Phone Number
                    </h2>
                </div>
                <div>
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        GitHub
                    </h2>
                </div>
          </div>
        </section>
      );
}