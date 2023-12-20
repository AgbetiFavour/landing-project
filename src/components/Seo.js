import React from "react";
import Helmet from "react-helmet";

const Seo = ({ title="" }) => {
  return (
    <Helmet>
      ‍<title>AltBank - {title}</title>‍
      <meta
        name="description"
        content="Find all the best quality products your pet may need"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@altbank" />
      <meta name="twitter:creator" content="@altbank" />
      <meta name="twitter:title" content={`altBank - ${title}`} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="url_to_image" />
      <meta property="fb:app_id" content="altBank" />
    </Helmet>
  );
};

export default Seo;
