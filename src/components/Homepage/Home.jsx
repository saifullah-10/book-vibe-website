import HomeBookList from "./HomeBookList";
import HomeTopSection from "./HomeTopSection";

const Home = () => {
  return (
    <>
      <section>
        <div>
          <HomeTopSection></HomeTopSection>
        </div>
        <div>
          <HomeBookList></HomeBookList>
        </div>
      </section>
    </>
  );
};

export default Home;
