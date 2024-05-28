import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Contact Me
            </h2>
            <div className="container px-5 py-10 mx-auto justify-center grid grid-cols-2 gap-4">
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
                    <h2 className="title-font font-semibold text-white tracking-widest text-400">
                        Phone Number
                    </h2>
                    <h2>
                        (803) 247 - 2814
                    </h2>
                </div>
                <div className="ml-4 flex-col text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                    <h2 className="title-font font-semibold text-white tracking-widest text-400">
                        GitHub
                    </h2>
                    <h2 className="hover:bg-gray-700 hover:text-white">
                        <a href="https://github.com/8BitBoar">8BitBoar</a>
                    </h2>
                </div>
          </div>
        </section>
      );
}