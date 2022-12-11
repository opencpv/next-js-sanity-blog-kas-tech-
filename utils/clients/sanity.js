import {  createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const config = {
 dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
 projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
 apiVersion: "2021-03-25",
 useCdn: process.env.NODE_ENV === "production",
};

// This is to fetch data by making a query to the backend in sanity studio
export const sanityClient = createClient(config);

// This will parse the source we get back from the query and give us the image url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

