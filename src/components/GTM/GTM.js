"use client";

import { useEffect } from 'react';
// import Head from 'next/head';

const GTM_ID = 'YOUR_GTM_ID';

const GTM = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTHL37DM');
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTHL37DM"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  );
};

export default GTM;