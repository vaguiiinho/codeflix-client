import Image from "next/image";
import Header from "./components/Header";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className=' absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.png'
              alt='The Witcher'
              fill={true}
              className="object-cover object-top h-[65vh] lg:h-[95vh]"
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            MAID
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            After fleeing an abusive relationship, a young mother finds a job
            cleaning houses as she fights to provide for her child and build
            them a better future.
          </p>
        </div>
        <div className="flex space-x-3 ">
        <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <PlayIcon className="h-6" />
            Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            <InformationCircleIcon className="h-6" />
            More Info
          </button>
        </div>
        <div className="flex-col space-y-4">
          <div className="flex">
            <h2 className="-ml-2 inline-flex  items-center text-2xl font-bold">Feature</h2>
          </div>
          <div className="-ml-8 flex space-x-4 overflow-x-scroll scrollbar-hide p-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div key={index} className="group h-28 min-w-[200px] relative transition duration-200 ease-in transform hover:scale-110 hover:z-50
              md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]">
                <Image
                  src={`/item_${index}.png`}
                  fill={true}
                  alt="MAID"
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
