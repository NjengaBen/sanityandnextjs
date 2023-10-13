import ImageUrlbuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageUrlbuilder(client);

export const urlFor = (source) => builder.image(source);
