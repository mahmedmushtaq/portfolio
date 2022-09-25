import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../globals.css";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />;
};

export default appWithTranslation(App);
