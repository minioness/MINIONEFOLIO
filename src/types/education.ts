export type EducationItem = {
  id?: string;
  date: string;
  title: string;
  hasDetail?: boolean;
};

export type EducationYear = {
  year: number;
  items: EducationItem[];
};

export type DetailItem = {
  text: string;
  highlightText?: string;
  children?: DetailItem[];
};

export type EducationDetail = {
  id: string;
  title: string;
  period: string;
  tag: string;
  items: DetailItem[];
};
