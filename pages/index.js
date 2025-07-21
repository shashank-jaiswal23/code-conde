// This is still needed for older JSX builds
import React from 'react';

import { getEntry } from "api/strapi";

import Page from "components/Page";



const Index = (props) => {
  console.log("contents", props);
  return (
    <>
      <Page
        locales={props.locales}
        selectedLocale={props.selectedLocale}
        data={props.req}
      />
    </>
  );
};

export async function getStaticProps(context) {
  let entry;

  if (context.locale) {
    entry = await getEntry(context.locale);
  } else {
    entry = await getEntry();
  }

  // const entry = await getEntry();

  return {
    props: {
      req: entry.req,
      locales: entry.locales,
      selectedLocale: context.locale,
    },
    revalidate: 10,
  };
}

export default Index;
