import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import "./index.css";


const App = () => {
  return (
    <>
      <Navbar/>
      <section>
        <PostList />
      </section>
    </>
  );
};

export default App;
