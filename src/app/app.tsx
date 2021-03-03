import {
  HashRouter
} from "react-router-dom";
import Header from "../shared/layout/header";
import Footer from "../shared/layout/footer"
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;