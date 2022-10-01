import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../globals.css";
import { appWithTranslation } from "next-i18next";
import { pageView } from "../src/common/lib/ga";
import { useEffect } from "react";

const App = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} key={router.route} />;
};

export default appWithTranslation(App);
