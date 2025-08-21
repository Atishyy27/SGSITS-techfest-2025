import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{`${title} | SRIJAN 2025`}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
    </Helmet>
  );
}