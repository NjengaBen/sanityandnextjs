import { createClient } from "next-sanity";

const projectId = "6qmr63g0";
const dataset = "production";
const apiVersion = "2023-10-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
