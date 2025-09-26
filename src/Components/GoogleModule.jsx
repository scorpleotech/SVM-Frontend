import React from "react";
import { Helmet } from "react-helmet";

const GoogleTagManager = () => {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MRMRFGX55W"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-MRMRFGX55W'); // Replace with your GTM ID
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTagManager;
