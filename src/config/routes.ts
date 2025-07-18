import slug from "slug";
import { MultiStepFormat } from "./type";

export const routes = {
  home: "/",
  //   about: "/about",
  //   contact: "/contact",
  //   inventory: "/inventory",
  //   classified: "/classified/[id]",
  singleClassified: (slug: string) => `/classified/${slug}`,
  reserve: (slug: string, step: MultiStepFormat) =>
    `/classified/${slug}/reserve?step=${step}`,
};
