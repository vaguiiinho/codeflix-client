import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b md:h-h-full lg:h-full'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle="Trending Now" />
        <MovieRow sectionTitle="Top Movies" />
        <MovieRow sectionTitle="Action Movies" />
      </main>
    </div>
  );
}
