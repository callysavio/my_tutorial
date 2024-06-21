import "./App.css";
import { ThemeProvider } from "./hooks/useContext/themeContext";
import ThemeToggleButton from "./hooks/useContext/ThemeToggleButton";
import CurrentTheme from "./hooks/useContext/CurrentTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <h1>Ligh/Dark Mode</h1>
        <ThemeToggleButton />
        <CurrentTheme/>
      </ThemeProvider>
    </div>
  );
}

export default App;
