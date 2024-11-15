import Image from "next/image";
import Header from "./components/Header";

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
            The Witcher
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of Riva, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>
       
      </main>
    </div>
  );
}
