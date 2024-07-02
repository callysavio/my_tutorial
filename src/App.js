import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import Header from "./pages/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Pages/>
     </Router>
    </div>
  );
}

export default App;
