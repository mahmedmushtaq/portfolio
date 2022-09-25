import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../globals.css";

const App = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />;
};

export default App;
