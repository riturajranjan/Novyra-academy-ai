-- CreateTable
CREATE TABLE "BoardClass" (
    "boardId" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "BoardClass_pkey" PRIMARY KEY ("boardId","classId")
);

-- CreateTable
CREATE TABLE "BoardClassSubject" (
    "boardId" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "BoardClassSubject_pkey" PRIMARY KEY ("boardId","classId","subjectId")
);

-- AddForeignKey
ALTER TABLE "BoardClass" ADD CONSTRAINT "BoardClass_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardClass" ADD CONSTRAINT "BoardClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "SchoolClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardClassSubject" ADD CONSTRAINT "BoardClassSubject_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardClassSubject" ADD CONSTRAINT "BoardClassSubject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "SchoolClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardClassSubject" ADD CONSTRAINT "BoardClassSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
