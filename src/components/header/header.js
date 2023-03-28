import MTG_Gun2 from "../../images/mtg_gun2.jpg";

export default function Header() {
    return (
      <div className="relative bg-black px-20 pt-20 pb-5">
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Marjorie Taylor Greene
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Champion of Guns over Children since 2021
                        </p>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                    className="aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    src={MTG_Gun2}
                    alt=""
                    />
                </div>
            </div>
        </div>
    </div>
    )
  }


/* import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div>
            <div className=></div>
        </div>
    );
} */