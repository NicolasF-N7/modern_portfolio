import type {StaticImageData} from "@/data/types/StaticImageDataType"

export type ProjectDataType = {
  title: string;
  gist: string;
  proj_desc: string;
  my_work: string;
  tech_stack: string[];
  github: string;
  screenshots: {
    src: StaticImageData;
    alt: string;
  }[];
};