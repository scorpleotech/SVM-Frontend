import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = React.lazy(() => import("./App"));
// const TagManager = React.lazy(() => import("react-gtm-module"));
const FacebookPixel = React.lazy(() => import("./Components/facebookPxel"));
const GoogleTagManager = React.lazy(() => import("./Components/GoogleModule"));



/**
 * React hook that returns `true` if prerendering or on initial render (to allow rehydration,
 * or `false` otherwise).
 */


// const tagManagerArgs = {
//   gtmId: "G-MRMRFGX55W",
// };

// if (bannerData) {
//   TagManager.initialize(tagManagerArgs);
// }

// useEffect(() => {

// }, [bannerData]);

// const options = {
//   autoConfig: true, // set pixel's autoConfig
//   debug: false, // enable logs
// };

// ReactPixel.init('482050072671748', options);


const MainComponent = () => {
  

  return(
<React.StrictMode>
    <App />
      <Suspense fallback={<div></div>}>
      <FacebookPixel />
      <GoogleTagManager />
    </Suspense>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
  
