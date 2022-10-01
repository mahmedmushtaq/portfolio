import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import axios from "axios";

const App = ({ Component, pageProps, router }) => {
  useEffect(() => {
    (async () => {
      // const res = await axios.get()
    })();
  }, []);
  return <Component {...pageProps} key={router.route} />;
};

export default appWithTranslation(App);
