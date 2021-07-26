import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}