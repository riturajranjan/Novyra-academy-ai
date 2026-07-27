import { config } from "dotenv";

// `tsx prisma/seed.ts` is a plain Node process — it never goes through
// prisma.config.ts's env loading, so DATABASE_URL/DIRECT_URL must be loaded
// explicitly here, before the Prisma Client is constructed.
config({ path: ".env.local" });

import { PrismaClient } from "@prisma/client";

import { seedLearningContent } from "./seed/content";
import { seedDemoUser } from "./seed/demoUser";

// Uses DIRECT_URL (unpooled), not the default pooled DATABASE_URL — a long
// sequential script making many small round-trips over several minutes was
// repeatedly hanging mid-run against the pooled PgBouncer connection with
// no error, no timeout, and zero open sockets when inspected (a dropped
// connection the driver never surfaced). Direct connections don't hit that.
const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DIRECT_URL } },
});

// Mirrors src/constants/boards.ts (icon fields store the Lucide icon's component name).
const boards = [
  {
    id: "cbse",
    title: "CBSE",
    subtitle: "National Curriculum",
    badge: "Recommended",
    icon: "GraduationCap",
    features: ["Classes 5–12", "NCERT Based", "AI Optimized"],
  },
  {
    id: "bseb",
    title: "BSEB",
    subtitle: "Bihar Board",
    badge: "Regional",
    icon: "Building2",
    features: ["Classes 8–12", "BSEB Syllabus", "Previous Year Focus"],
  },
];

// Mirrors src/constants/classes.ts (types/class.ts: chapters -> chapterCount, subjects -> subjectCount, streams -> streamCount).
const classes = [
  { id: 5, title: "Class 5", subtitle: "Maths, Science, English, Social", chapterCount: 42, subjectCount: 4 },
  { id: 6, title: "Class 6", subtitle: "Advanced Arithmetic, Biology", chapterCount: 48, subjectCount: 6 },
  { id: 7, title: "Class 7", subtitle: "Pre-Algebra, Chemistry", chapterCount: 54, subjectCount: 7 },
  { id: 8, title: "Class 8", subtitle: "Physics, Literature", chapterCount: 60, subjectCount: 7 },
  { id: 9, title: "Class 9", subtitle: "Geometry, Chemistry", chapterCount: 68, subjectCount: 8 },
  { id: 10, title: "Class 10", subtitle: "Board Preparation", chapterCount: 72, subjectCount: 8, personalized: true },
  { id: 11, title: "Class 11", subtitle: "Science / Commerce", chapterCount: 78, subjectCount: 5, streamCount: 5 },
  { id: 12, title: "Class 12", subtitle: "Final Board", chapterCount: 84, subjectCount: 5, streamCount: 5 },
];

// Mirrors src/constants/subjects.ts (chapters -> chapterCount).
const subjects = [
  { id: 1, title: "Physics", description: "Mechanics, Electricity, Modern Physics", chapterCount: 12, level: "Advanced", badge: "POPULAR", icon: "flare" },
  { id: 2, title: "Chemistry", description: "Organic, Inorganic, Physical", chapterCount: 15, level: "Advanced", badge: "TRENDING", icon: "menu_book" },
  { id: 3, title: "Biology", description: "Botany, Zoology, Genetics", chapterCount: 18, level: "Intermediate", icon: "vital_signs" },
  { id: 4, title: "Mathematics", description: "Algebra, Geometry, Calculus", chapterCount: 24, level: "Expert", badge: "TOP PICK", icon: "architecture" },
];

// Mirrors src/constants/learningStyles.ts.
const learningStyles = [
  { id: "reading", title: "Reading", description: "Detailed explanations, Smart Notes", icon: "menu_book", color: "#C0C1FF" },
  { id: "visual", title: "Visual Learning", description: "Diagrams, Animations", icon: "movie", color: "#45D9FF" },
  { id: "voice", title: "Voice Learning", description: "AI Teacher, Audio Lessons", icon: "podcasts", color: "#B8C4FF" },
  { id: "practice", title: "Practice First", description: "Exercises, Problem Solving", icon: "science", color: "#FFB4AB" },
  { id: "conversation", title: "AI Conversation", description: "Interactive Chat, Doubts", icon: "forum", color: "#C0C1FF" },
  { id: "revision", title: "Revision Mode", description: "Flashcards, Memory Tricks", icon: "quiz", color: "#45D9FF" },
];

// Mirrors src/constants/targetScores.ts.
const targetScores = [
  { id: 70, score: "70%", title: "Foundation", desc: "30m/day • Easy" },
  { id: 80, score: "80%", title: "Strong", desc: "45m/day • Moderate" },
  { id: 90, score: "90%", title: "Excelent", desc: "1.5h/day • High" },
  { id: 95, score: "95%", title: "Top Performer", desc: "2h/day • Intense" },
  { id: 99, score: "99%", title: "Elite Rank", desc: "4h/day • Extreme" },
];

// Mirrors src/constants/dailyGoals.ts (icon fields store the Lucide icon's component name).
const dailyGoals = [
  { id: "light", title: "Light", duration: "30 mins / day", icon: "Coffee" },
  { id: "steady", title: "Steady", duration: "1 hour / day", icon: "Zap" },
  { id: "intense", title: "Intense", duration: "2 hours / day", icon: "Hammer" },
  { id: "elite", title: "Elite", duration: "4 hours / day", icon: "Brain" },
];

async function main() {
  for (const board of boards) {
    await prisma.board.upsert({ where: { id: board.id }, create: board, update: board });
  }

  for (const schoolClass of classes) {
    await prisma.schoolClass.upsert({ where: { id: schoolClass.id }, create: schoolClass, update: schoolClass });
  }

  for (const subject of subjects) {
    await prisma.subject.upsert({ where: { id: subject.id }, create: subject, update: subject });
  }

  for (const learningStyle of learningStyles) {
    await prisma.learningStyle.upsert({ where: { id: learningStyle.id }, create: learningStyle, update: learningStyle });
  }

  for (const targetScore of targetScores) {
    await prisma.targetScore.upsert({ where: { id: targetScore.id }, create: targetScore, update: targetScore });
  }

  for (const dailyGoal of dailyGoals) {
    await prisma.dailyGoal.upsert({ where: { id: dailyGoal.id }, create: dailyGoal, update: dailyGoal });
  }

  // Every board currently offers every class (5-12), and every board+class
  // offers every subject. Kept as explicit join rows (rather than assumed)
  // so the onboarding UI can honestly query "classes for this board" and
  // "subjects for this board+class" once boards/classes/subjects diverge.
  for (const board of boards) {
    for (const schoolClass of classes) {
      await prisma.boardClass.upsert({
        where: { boardId_classId: { boardId: board.id, classId: schoolClass.id } },
        create: { boardId: board.id, classId: schoolClass.id },
        update: {},
      });

      for (const subject of subjects) {
        await prisma.boardClassSubject.upsert({
          where: {
            boardId_classId_subjectId: {
              boardId: board.id,
              classId: schoolClass.id,
              subjectId: subject.id,
            },
          },
          create: { boardId: board.id, classId: schoolClass.id, subjectId: subject.id },
          update: {},
        });
      }
    }
  }

  await seedLearningContent(prisma);
  await seedDemoUser(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
