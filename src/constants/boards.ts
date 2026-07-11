import { GraduationCap, Building2, BookOpen } from "lucide-react";

export const boards = [
  {
    id: "cbse",
    title: "CBSE",
    subtitle: "National Curriculum",
    badge: "Recommended",
    icon: GraduationCap,
    features: ["Classes 5–12", "NCERT Based", "AI Optimized"],
  },

  {
    id: "bseb",
    title: "BSEB",
    subtitle: "Bihar Board",
    badge: "Regional",
    icon: Building2,
    features: ["Classes 8–12", "BSEB Syllabus", "Previous Year Focus"],
  },

  // {
  //   id: "icse",
  //   title: "ICSE",
  //   subtitle: "CISCE",
  //   icon: BookOpen,
  //   features: ["Classes 1–12", "English Medium", "Concept Based"],
  // },
];
