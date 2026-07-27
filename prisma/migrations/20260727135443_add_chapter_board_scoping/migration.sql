-- DropIndex
DROP INDEX "Chapter_subjectId_order_key";

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "boardId" TEXT;

-- CreateIndex
CREATE INDEX "Chapter_boardId_idx" ON "Chapter"("boardId");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_subjectId_boardId_order_key" ON "Chapter"("subjectId", "boardId", "order");

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;

