-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "totalStaked" INTEGER NOT NULL,
    "isProfit" BOOLEAN NOT NULL,
    "PL" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventCandidates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventCandidates_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventCandidates_B_index" ON "_EventCandidates"("B");

-- AddForeignKey
ALTER TABLE "_EventCandidates" ADD CONSTRAINT "_EventCandidates_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventCandidates" ADD CONSTRAINT "_EventCandidates_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
