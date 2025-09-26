import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const FacebookPixel = () => {
  useEffect(() => {
    // Function to initialize Facebook Pixel
    const initFacebookPixel = () => {
      if (window.fbq) return; // Check if already initialized

      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];

      // Load the script asynchronously
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.body.appendChild(script);

      // Initialize Facebook Pixel
      window.fbq("init", "482050072671748"); // Replace with your actual Pixel ID
      window.fbq("track", "PageView");

      // Clean up the script on unmount
      return () => {
        document.body.removeChild(script);
      };
    };

    initFacebookPixel();
  }, []);

  return (
    <Helmet>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Ensure that fbq is available before initializing
            if (!window.fbq) {
              (function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              }
            }
          `,
        }}
      />
    </Helmet>
  );
};

export default FacebookPixel;
