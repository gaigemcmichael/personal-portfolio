export type Project = {
  name: string;
  descriptionShort: string;
  descriptionLong: string;
  imageUrl: string;
  imageAlt: string;
};

export type Job = {
  title: string;
  company: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  descriptionPoints: string[];
  link: string;
  classes: string;
};
