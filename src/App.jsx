import { useEffect, useState } from "react";
// React Router DOM
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Language Context
import { useLangContext } from "./context/LangContext";

// Components
import { Footer, Header } from "./components";
import "./components/hover.css";
import "./components/animation.css";
import "./components/glow.css";
import Loading from "./components/Loading";
import PreloadImages from "./PreloadImages";

// Pages
import {
  Contact,
  Discord,
  Landing,
  Minecraft,
  Ping,
  Privacy,
  Terms,
  VPS,
  Web,
  Dedicated,
  Error404,
} from "./pages";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll restoration when route changes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  const { lang } = useLangContext();
  return (
    <div
      dir={lang == "en" ? "ltr" : "rtl"}
      className="flex flex-col justify-between min-h-screen"
    >
      <PreloadImages setIsLoading={setIsLoading} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes key={location.pathname} location={location}>
            <Route index element={<Landing />} />
            <Route path="/vps" element={<VPS />} />
            <Route path="/web" element={<Web />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ping" element={<Ping />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/dedicated" element={<Dedicated />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
