import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex justify-center">
                <div className="ml-4 flex-col text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    <h2 className="title-font font-semibold text-white tracking-widest text-400">LinkedIn</h2>
                    <h2>
                        in/sriversgreen
                    </h2>
                </div>
                <div className="ml-4 flex-col text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    <h2 className="title-font font-semibold text-white tracking-widest text-400">
                        Email
                    </h2>
                    <h2>
                        riversgreen.shaelyn@gmail.com
                    </h2>
                </div>
                <div className="ml-4 flex-col text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Phone Number
                    </h2>
                    <h2>
                        (803) 247 - 2814
                    </h2>
                </div>
                <div className="ml-4 flex-col text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        GitHub
                    </h2>
                    <h2 className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        <a href="https://github.com/8BitBoar">https://github.com/8BitBoar</a>
                    </h2>
                </div>
          </div>
        </section>
      );
}