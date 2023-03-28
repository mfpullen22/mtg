import MTG from "../../images/MTG.png";

export default function Body() {
    return (
        <div className="relative bg-black px-20">
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="mt-24 text-xl tracking-tight text-gray-900 sm:mt-10 sm:text-xl">
                            <span className="font-bold">March 27, 2023 - 10:13am: </span>Nashville Police receive the first 911 call of an active shooting inside Covenant School, an elementary school in the metro area where three 9-year olds would be killed.
                        </h1>
                        <h1 className="mt-24 text-xl  tracking-tight text-gray-900 sm:mt-10 sm:text-xl">
                            <span className="font-bold">March 27, 2023 - 3:45pm: </span>Marjorie Taylor Greene posts this tweet. 
                        </h1>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                    className="aspect-[3/2] w-full object-scale-down lg:absolute lg:inset-0 lg:aspect-auto lg:h-2/3"
                    src={MTG}
                    alt=""
                    />
                </div>
            </div>
            <div className="lg:col-span-12 lg:-mr-8  xl:inset-0 xl:left-1/2 xl:mr-0">
                <h1 className="text-center mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                    5 hours and 32 minutes.
                </h1>
                <h1 className="text-center mt-24 text-xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-xl">
                    That's how long it took Marjorie Taylor Greene to turn the deaths of three 9-year olds into a ghoulish, depraved attack on the transgender community.
                </h1>
                <h1 className="text-center mt-24 text-xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-xl pb-20">
                    If you are a citizen of her district with children, remember that she values hate and guns more than your child's life when you vote in 2024.
                </h1>
            </div>
        </div>
        
    </div>
    );
}