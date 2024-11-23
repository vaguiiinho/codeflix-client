import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { getFeaturedMovie } from "./service/MovieService";

export default async function Home() {
  const featureMovie = await getFeaturedMovie('101')
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b md:h-h-full lg:h-full'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featureMovie} />
        <MovieRow sectionTitle="Trending Now" />
        <MovieRow sectionTitle="Top Movies" />
        <MovieRow sectionTitle="Action Movies" />
      </main>
    </div>
  );
}
