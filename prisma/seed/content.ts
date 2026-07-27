import type { PrismaClient } from "@prisma/client";

/**
 * Hand-authored content only — no generated placeholders. Deliberately
 * minimal: just enough per subject to exercise every hierarchy/quiz/
 * flashcard flow, not a full curriculum. Chapter/Lesson/Question/Flashcard
 * ids are fully deterministic (boardId + subject slug + position encoded
 * directly into the id string), so expanding a chapter's lesson count or
 * adding a chapter later never requires renaming existing ids/relations —
 * new entries just get the next order number.
 */

interface LessonSeed {
  title: string;
  summary: string;
  content: string;
  analogy?: string;
  formula?: string;
  aiTeacherIntro?: string;
  estimatedMinutes?: number;
}

interface OptionSeed {
  text: string;
  isCorrect: boolean;
}

interface QuestionSeed {
  prompt: string;
  explanation: string;
  aiHint?: string;
  marks?: number;
  timeLimitSeconds?: number;
  options: OptionSeed[];
}

interface FlashcardSeed {
  front: string;
  back: string;
}

interface ChapterSeed {
  title: string;
  description: string;
  lessons: LessonSeed[];
  quizTitle?: string;
  questions?: QuestionSeed[];
  flashcards?: FlashcardSeed[];
}

interface SubjectContentSeed {
  subjectId: number;
  boardId: string;
  slug: string;
  chapters: ChapterSeed[];
}

const cbsePhysics: ChapterSeed[] = [
  {
    title: "Units and Measurements",
    description: "How physical quantities are measured, expressed, and combined using standard units.",
    lessons: [
      {
        title: "Physical Quantities and Units",
        summary: "Every measurement needs a number and a unit — this lesson introduces the SI system of base units.",
        content:
          "A physical quantity is anything that can be measured, like length, mass, or time. To measure it, we compare it against a fixed reference called a unit. The International System of Units (SI) defines seven base units — metre, kilogram, second, ampere, kelvin, mole, and candela — from which every other unit, like speed or force, is derived.",
        analogy: "Saying \"the wall is 3\" means nothing without a unit — \"3 metres\" and \"3 feet\" describe very different walls.",
        estimatedMinutes: 12,
      },
      {
        title: "Significant Figures",
        summary: "Significant figures tell you how precisely a measurement is known.",
        content:
          "Every measured value carries some uncertainty. Significant figures are the digits in a number that carry real meaning about its precision — all certain digits plus one estimated digit. All non-zero digits are significant, zeros between non-zero digits are significant, and leading zeros are not.",
        estimatedMinutes: 10,
      },
      {
        title: "Dimensional Analysis",
        summary: "Dimensions let you check whether an equation could possibly be correct, without doing any calculation.",
        content:
          "Every physical quantity can be expressed as a combination of the base dimensions — mass [M], length [L], and time [T]. Dimensional analysis checks that both sides of an equation have matching dimensions, catching many errors before you ever plug in numbers.",
        formula: "[Speed] = [L][T]⁻¹",
        estimatedMinutes: 15,
      },
    ],
    quizTitle: "Units and Measurements Quiz",
    questions: [
      {
        prompt: "Which of these is an SI base unit?",
        explanation: "The kilogram is one of the seven SI base units; newton, joule, and watt are all derived units.",
        aiHint: "Derived units are built from combinations of base units.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "Newton", isCorrect: false },
          { text: "Kilogram", isCorrect: true },
          { text: "Joule", isCorrect: false },
          { text: "Watt", isCorrect: false },
        ],
      },
      {
        prompt: "A student measures a length as 2.50 cm. How many significant figures does this value have?",
        explanation:
          "2.50 has three significant figures: the 2, the 5, and the trailing zero after the decimal point, which is significant because it shows precision to the hundredths place.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "1", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      { front: "What is the SI unit of mass?", back: "Kilogram (kg) — one of the seven SI base units." },
      {
        front: "How many significant figures does 0.0450 have?",
        back: "Three — the 4, 5, and trailing zero are significant; leading zeros are not.",
      },
    ],
  },
  {
    title: "Motion in a Straight Line",
    description: "Describing how objects move along a line using position, velocity, and acceleration.",
    lessons: [
      {
        title: "Position, Distance and Displacement",
        summary: "Position locates an object; distance and displacement describe how it moved.",
        content:
          "An object's position is its location relative to a chosen origin. Distance is the total path length travelled, while displacement is the straight-line change in position, including direction. A runner who completes one full lap covers a large distance but ends with zero displacement.",
        estimatedMinutes: 12,
      },
      {
        title: "Velocity and Acceleration",
        summary: "Velocity is how fast position changes; acceleration is how fast velocity changes.",
        content:
          "Average velocity is displacement divided by the time taken. Instantaneous velocity is the rate of change of position at a single moment. Acceleration measures how quickly velocity itself is changing — speeding up, slowing down, or reversing direction.",
        formula: "v = Δx / Δt",
        estimatedMinutes: 14,
      },
      {
        title: "Equations of Motion",
        summary: "Three equations connect velocity, acceleration, time, and displacement for constant acceleration.",
        content:
          "When acceleration is constant, motion can be fully described by three equations relating initial velocity, final velocity, acceleration, time, and displacement. These let you solve for any one unknown quantity once the other three are known.",
        formula: "v = u + at,  s = ut + ½at²,  v² = u² + 2as",
        estimatedMinutes: 18,
      },
    ],
    quizTitle: "Motion in a Straight Line Quiz",
    questions: [
      {
        prompt: "A cyclist rides 300 m east then 300 m west, returning to the start. What is the displacement?",
        explanation:
          "Displacement is the net change in position; since the cyclist returns to the starting point, displacement is zero even though the distance travelled is 600 m.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "0 m", isCorrect: true },
          { text: "600 m", isCorrect: false },
          { text: "300 m", isCorrect: false },
          { text: "150 m", isCorrect: false },
        ],
      },
      {
        prompt: "An object starts from rest and accelerates at 2 m/s² for 5 seconds. What is its final velocity?",
        explanation: "Using v = u + at: v = 0 + (2)(5) = 10 m/s.",
        aiHint: "Start with v = u + at and substitute the given values.",
        marks: 2,
        timeLimitSeconds: 90,
        options: [
          { text: "10 m/s", isCorrect: true },
          { text: "2.5 m/s", isCorrect: false },
          { text: "7 m/s", isCorrect: false },
          { text: "25 m/s", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      {
        front: "What's the difference between distance and displacement?",
        back: "Distance is the total path length travelled; displacement is the straight-line change in position, including direction.",
      },
      { front: "What does acceleration measure?", back: "The rate at which velocity changes over time." },
    ],
  },
  {
    title: "Laws of Motion",
    description: "Newton's three laws of motion and the forces that govern movement.",
    lessons: [
      {
        title: "Newton's First Law",
        summary:
          "An object at rest remains at rest, and an object in motion remains in motion unless acted upon by an external force.",
        content:
          "An object at rest remains at rest, and an object in motion remains in motion unless acted upon by an external force.",
        analogy: "Think of a lazy cat lying on the sofa. It won't move until someone pushes it.",
        formula: "ΣF = 0",
        aiTeacherIntro:
          "Hi, I'm your AI Teacher for this lesson. Ask me anything about Newton's First Law and I'll walk you through it.",
        estimatedMinutes: 15,
      },
      {
        title: "Newton's Second Law",
        summary:
          "The acceleration of an object is directly proportional to the net force acting on it, and inversely proportional to its mass.",
        content:
          "Newton's second law quantifies how force changes motion: the net force on an object equals its mass times its acceleration. Push twice as hard and, for the same mass, you get twice the acceleration; double the mass and you need twice the force for the same acceleration.",
        formula: "F = ma",
        estimatedMinutes: 15,
      },
      {
        title: "Newton's Third Law",
        summary: "For every action, there is an equal and opposite reaction.",
        content:
          "Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force back on the first. These two forces act on different objects, so they never cancel each other out — they're the reason a rocket can push itself forward by pushing exhaust backward.",
        analogy: "When you jump off a small boat, you push the boat backward as it pushes you forward.",
        estimatedMinutes: 13,
      },
    ],
    quizTitle: "Laws of Motion Quiz",
    questions: [
      {
        prompt:
          "A block of mass m = 5kg is resting on a rough horizontal surface. What force is required to keep it moving at constant velocity against friction?",
        explanation: "Resolve the vertical component first, then apply F = μN to find the friction force.",
        aiHint: "Resolve the vertical component before calculating friction.",
        marks: 4,
        timeLimitSeconds: 120,
        options: [
          { text: "18.52 N", isCorrect: false },
          { text: "19.24 N", isCorrect: true },
          { text: "22.10 N", isCorrect: false },
          { text: "15.45 N", isCorrect: false },
        ],
      },
      {
        prompt: "A net force of 20 N acts on a 4 kg object. What is its acceleration?",
        explanation: "Using F = ma, a = F/m = 20/4 = 5 m/s².",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "5 m/s²", isCorrect: true },
          { text: "80 m/s²", isCorrect: false },
          { text: "0.2 m/s²", isCorrect: false },
          { text: "16 m/s²", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      { front: "State Newton's Third Law.", back: "For every action, there is an equal and opposite reaction." },
      { front: "What is the formula for Newton's Second Law?", back: "F = ma — net force equals mass times acceleration." },
    ],
  },
];

const cbseChemistry: ChapterSeed[] = [
  {
    title: "Some Basic Concepts of Chemistry",
    description: "The mole concept and the fundamental laws that govern how substances combine.",
    lessons: [
      {
        title: "Mole Concept",
        summary: "The mole is the chemist's counting unit — a fixed number of particles, just like a dozen is 12 of anything.",
        content:
          "One mole of any substance contains exactly 6.022 × 10²³ elementary particles — Avogadro's number. This lets chemists convert between the mass of a sample and the actual number of atoms or molecules it contains, using the substance's molar mass as the conversion factor.",
        formula: "n = mass / molar mass",
        estimatedMinutes: 14,
      },
      {
        title: "Laws of Chemical Combination",
        summary: "Matter combines in fixed, predictable proportions — these laws describe exactly how.",
        content:
          "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction. The law of definite proportions states that a given compound always contains its component elements in a fixed ratio by mass, regardless of the source of the compound.",
        estimatedMinutes: 12,
      },
      {
        title: "Stoichiometry",
        summary: "Stoichiometry uses balanced equations to predict exactly how much product a reaction will yield.",
        content:
          "A balanced chemical equation shows the mole ratio in which reactants combine and products form. Stoichiometry uses that ratio, together with molar masses, to calculate how much of a product will form from a given amount of reactant, or how much reactant is needed.",
        estimatedMinutes: 16,
      },
    ],
    quizTitle: "Some Basic Concepts of Chemistry Quiz",
    questions: [
      {
        prompt: "How many particles are in 1 mole of any substance?",
        explanation: "This is Avogadro's number, the defining constant of the mole.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "6.022 × 10²³", isCorrect: true },
          { text: "1000", isCorrect: false },
          { text: "22.4", isCorrect: false },
          { text: "6.022 × 10⁻²³", isCorrect: false },
        ],
      },
      {
        prompt:
          "According to the law of definite proportions, water (H₂O) formed in a lab and water found in nature will have...",
        explanation: "The law of definite proportions guarantees a fixed mass ratio for a given compound regardless of its source.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "The same ratio of hydrogen to oxygen by mass", isCorrect: true },
          { text: "Different ratios depending on the source", isCorrect: false },
          { text: "The same volume but different mass", isCorrect: false },
          { text: "No fixed relationship", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      { front: "What is Avogadro's number?", back: "6.022 × 10²³ — the number of particles in one mole of any substance." },
      { front: "State the law of conservation of mass.", back: "Mass is neither created nor destroyed in a chemical reaction." },
    ],
  },
  {
    title: "Structure of Atom",
    description: "How the atom's internal structure was discovered and modeled.",
    lessons: [
      {
        title: "Discovery of Subatomic Particles",
        summary: "Electrons, protons, and neutrons were discovered through a series of landmark experiments.",
        content:
          "J.J. Thomson's cathode ray experiments discovered the electron, a negatively charged particle far lighter than any atom. Rutherford's gold foil experiment later revealed a dense, positively charged nucleus at the atom's centre, leading to the discovery of the proton. The neutron, a neutral particle in the nucleus, was discovered by Chadwick.",
        estimatedMinutes: 15,
      },
      {
        title: "Bohr's Model of the Atom",
        summary: "Bohr proposed that electrons orbit the nucleus only at specific, fixed energy levels.",
        content:
          "Niels Bohr proposed that electrons move around the nucleus in fixed circular orbits, each with a specific energy level, without radiating energy while in these orbits. An electron can jump between orbits by absorbing or emitting a photon whose energy exactly matches the gap between the two levels.",
        analogy: "Think of the orbits like rungs on a ladder — an electron can stand on a rung, but never hover between them.",
        estimatedMinutes: 14,
      },
      {
        title: "Quantum Numbers",
        summary: "Four quantum numbers together describe the unique address of every electron in an atom.",
        content:
          "The principal quantum number (n) describes an electron's energy level and distance from the nucleus. The azimuthal (l), magnetic (m), and spin (s) quantum numbers describe the shape of its orbital, its orientation in space, and its spin direction. No two electrons in the same atom can share all four.",
        estimatedMinutes: 17,
      },
    ],
    quizTitle: "Structure of Atom Quiz",
    questions: [
      {
        prompt: "Which scientist's experiment led to the discovery of the atomic nucleus?",
        explanation: "Rutherford's gold foil experiment showed that atoms have a small, dense, positively charged nucleus.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "Rutherford", isCorrect: true },
          { text: "Thomson", isCorrect: false },
          { text: "Bohr", isCorrect: false },
          { text: "Chadwick", isCorrect: false },
        ],
      },
      {
        prompt: "In Bohr's model, how does an electron move to a higher energy level?",
        explanation:
          "Electrons jump orbits only by absorbing or emitting a photon whose energy exactly equals the gap between energy levels.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "By absorbing a photon of exactly matching energy", isCorrect: true },
          { text: "By colliding with the nucleus", isCorrect: false },
          { text: "By losing mass", isCorrect: false },
          { text: "It cannot move between levels", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      { front: "Who discovered the electron?", back: "J.J. Thomson, through his cathode ray tube experiments." },
      {
        front: "What does the principal quantum number (n) describe?",
        back: "An electron's energy level and average distance from the nucleus.",
      },
    ],
  },
  {
    title: "Chemical Bonding and Molecular Structure",
    description: "How atoms combine into molecules, and what determines their shape.",
    lessons: [
      {
        title: "Ionic and Covalent Bonds",
        summary: "Atoms bond either by transferring electrons or by sharing them.",
        content:
          "An ionic bond forms when one atom transfers electrons to another, creating oppositely charged ions that attract each other — typical between metals and non-metals. A covalent bond forms when two atoms share a pair of electrons, typically between two non-metals.",
        estimatedMinutes: 13,
      },
      {
        title: "VSEPR Theory",
        summary: "Electron pairs around a central atom arrange themselves to be as far apart as possible, which determines a molecule's shape.",
        content:
          "Valence Shell Electron Pair Repulsion (VSEPR) theory predicts molecular geometry by assuming that electron pairs around a central atom repel each other and arrange themselves to minimize that repulsion. This explains why water is bent and methane is tetrahedral.",
        estimatedMinutes: 16,
      },
      {
        title: "Hybridization",
        summary: "Atomic orbitals mix together to form new hybrid orbitals better suited for bonding.",
        content:
          "Hybridization is the mixing of atomic orbitals, like s and p, within an atom to form new hybrid orbitals of equal energy, oriented to match a molecule's actual geometry. Carbon's sp3 hybridization, for example, produces four equivalent orbitals pointed toward the corners of a tetrahedron.",
        estimatedMinutes: 18,
      },
    ],
    quizTitle: "Chemical Bonding and Molecular Structure Quiz",
    questions: [
      {
        prompt: "Which type of bond forms when electrons are shared between two atoms?",
        explanation: "A covalent bond is formed by the sharing of electron pairs between atoms, typically between two non-metals.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "Covalent bond", isCorrect: true },
          { text: "Ionic bond", isCorrect: false },
          { text: "Metallic bond", isCorrect: false },
          { text: "Hydrogen bond", isCorrect: false },
        ],
      },
      {
        prompt: "Why is a water molecule bent rather than linear?",
        explanation:
          "VSEPR theory explains that the two lone pairs on oxygen push the two O–H bonds together, producing a bent shape.",
        marks: 2,
        timeLimitSeconds: 60,
        options: [
          { text: "Lone pairs on oxygen repel the bonding pairs, per VSEPR theory", isCorrect: true },
          { text: "Hydrogen atoms repel each other directly", isCorrect: false },
          { text: "Oxygen is too small to be linear", isCorrect: false },
          { text: "Water has no defined shape", isCorrect: false },
        ],
      },
    ],
    flashcards: [
      {
        front: "What does VSEPR theory predict?",
        back: "The 3D shape of a molecule, based on electron pairs around the central atom repelling each other.",
      },
      {
        front: "What is hybridization?",
        back: "The mixing of atomic orbitals to form new hybrid orbitals suited for bonding, e.g. carbon's sp3 hybridization.",
      },
    ],
  },
];

/** BSEB's demo slice reuses the same real first-chapter topic as CBSE — no quiz/flashcard, proving board scoping only. */
const bsebPhysicsDemo: ChapterSeed[] = [cbsePhysics[0]].map((chapter) => ({
  title: chapter.title,
  description: chapter.description,
  lessons: chapter.lessons,
}));

const bsebChemistryDemo: ChapterSeed[] = [cbseChemistry[0]].map((chapter) => ({
  title: chapter.title,
  description: chapter.description,
  lessons: chapter.lessons,
}));

const SUBJECTS: SubjectContentSeed[] = [
  { subjectId: 1, boardId: "cbse", slug: "physics", chapters: cbsePhysics },
  { subjectId: 2, boardId: "cbse", slug: "chemistry", chapters: cbseChemistry },
  { subjectId: 1, boardId: "bseb", slug: "physics", chapters: bsebPhysicsDemo },
  { subjectId: 2, boardId: "bseb", slug: "chemistry", chapters: bsebChemistryDemo },
  // subjectId 3 (Biology) and 4 (Mathematics) intentionally have no entries — zero chapters, both boards.
];

async function seedChapter(
  prisma: PrismaClient,
  subjectId: number,
  boardId: string,
  chapterId: string,
  order: number,
  seed: ChapterSeed,
) {
  const chapterFields = {
    subjectId,
    boardId,
    title: seed.title,
    description: seed.description,
    order,
    status: "PUBLISHED" as const,
  };
  const chapter = await prisma.chapter.upsert({
    where: { id: chapterId },
    create: { id: chapterId, ...chapterFields },
    update: chapterFields,
  });

  const lessons = [];
  for (const [index, lessonSeed] of seed.lessons.entries()) {
    const lessonOrder = index + 1;
    const lessonId = `${chapterId}-l${lessonOrder}`;
    const lessonFields = {
      chapterId: chapter.id,
      order: lessonOrder,
      title: lessonSeed.title,
      summary: lessonSeed.summary,
      content: lessonSeed.content,
      analogy: lessonSeed.analogy ?? null,
      formula: lessonSeed.formula ?? null,
      aiTeacherIntro: lessonSeed.aiTeacherIntro ?? null,
      estimatedMinutes: lessonSeed.estimatedMinutes ?? null,
      status: "PUBLISHED" as const,
    };
    lessons.push(
      await prisma.lesson.upsert({
        where: { id: lessonId },
        create: { id: lessonId, ...lessonFields },
        update: lessonFields,
      }),
    );
  }

  const firstLesson = lessons[0];
  if (!firstLesson) return { chapter, lessons };

  if (seed.questions && seed.questions.length > 0) {
    const quizId = `${chapterId}-quiz`;
    const quizFields = { lessonId: firstLesson.id, title: seed.quizTitle ?? `${seed.title} Quiz` };
    const quiz = await prisma.quiz.upsert({
      where: { id: quizId },
      create: { id: quizId, ...quizFields },
      update: quizFields,
    });

    for (const [qIndex, questionSeed] of seed.questions.entries()) {
      const qOrder = qIndex + 1;
      const questionId = `${quizId}-q${qOrder}`;
      const questionFields = {
        quizId: quiz.id,
        order: qOrder,
        prompt: questionSeed.prompt,
        explanation: questionSeed.explanation,
        aiHint: questionSeed.aiHint ?? null,
        marks: questionSeed.marks ?? 1,
        timeLimitSeconds: questionSeed.timeLimitSeconds ?? null,
      };
      const question = await prisma.question.upsert({
        where: { id: questionId },
        create: { id: questionId, ...questionFields },
        update: questionFields,
      });

      for (const [oIndex, optionSeed] of questionSeed.options.entries()) {
        const oOrder = oIndex + 1;
        const optionId = `${questionId}-o${oOrder}`;
        const optionFields = {
          questionId: question.id,
          order: oOrder,
          text: optionSeed.text,
          isCorrect: optionSeed.isCorrect,
        };
        await prisma.questionOption.upsert({
          where: { id: optionId },
          create: { id: optionId, ...optionFields },
          update: optionFields,
        });
      }
    }
  }

  if (seed.flashcards && seed.flashcards.length > 0) {
    for (const [fIndex, flashcardSeed] of seed.flashcards.entries()) {
      const fOrder = fIndex + 1;
      const flashcardId = `${chapterId}-fc${fOrder}`;
      const flashcardFields = {
        lessonId: firstLesson.id,
        order: fOrder,
        front: flashcardSeed.front,
        back: flashcardSeed.back,
      };
      await prisma.flashcard.upsert({
        where: { id: flashcardId },
        create: { id: flashcardId, ...flashcardFields },
        update: flashcardFields,
      });
    }
  }

  return { chapter, lessons };
}

export async function seedLearningContent(prisma: PrismaClient) {
  // Clean slate: the previous placeholder scaffold (69 chapters/276 lessons
  // of "Chapter N"/"Lesson N") contradicts "no fake curriculum" and the
  // empty-subject requirements below. Cascades through Lesson/Quiz/
  // Question/QuestionOption/Flashcard/Note/LessonCompletion. No real user
  // data exists yet to lose.
  await prisma.chapter.deleteMany({});

  for (const subject of SUBJECTS) {
    for (const [index, chapterSeed] of subject.chapters.entries()) {
      const order = index + 1;
      const chapterId = `${subject.boardId}-${subject.slug}-ch${order}`;
      await seedChapter(prisma, subject.subjectId, subject.boardId, chapterId, order, chapterSeed);
    }
  }
}
