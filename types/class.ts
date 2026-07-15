export interface SchoolClass {
  id: number;
  title: string;
  subtitle: string;
  chapters: number;
  subjects: number;
  streams?: number;
  personalized?: boolean;
}
