export interface Subject {
  id: number;
  title: string;
  description: string;
  chapters: number;
  level: string;
  badge?: string;
  icon: React.ReactNode;
}
