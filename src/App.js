<<<<<<< HEAD
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContentContainer from "./components/container/ContentContainer";

function App() {
  return <div className="App">
    <Navbar />
    <ContentContainer />
    <Footer />
  </div>;
=======
import Navbar from "./components/header/Navbar";
import store from "./store/store";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import Container from "./components/container/Container";

function App() {
  return (
    <Provider store={store}>
      <div id="App" className="App">
        <Navbar />
        <Container />
        <Footer />
      </div>
    </Provider>
  );
>>>>>>> update
}

export default App;
