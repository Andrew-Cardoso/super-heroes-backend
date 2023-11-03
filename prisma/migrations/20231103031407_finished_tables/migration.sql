-- CreateTable
CREATE TABLE "heroes" (
    "id" TEXT NOT NULL,
    "hero_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "modified" TIMESTAMP(3),
    "resource_uri" TEXT NOT NULL,

    CONSTRAINT "heroes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comic_content" (
    "hero_id" TEXT NOT NULL,
    "content_item_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "story_content" (
    "hero_id" TEXT NOT NULL,
    "content_item_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "event_content" (
    "hero_id" TEXT NOT NULL,
    "content_item_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "serie_content" (
    "hero_id" TEXT NOT NULL,
    "content_item_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "content_items" (
    "id" TEXT NOT NULL,
    "available" INTEGER NOT NULL,
    "collection_uri" TEXT NOT NULL,
    "returned" INTEGER NOT NULL,

    CONSTRAINT "content_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "resource_uri" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "content_id" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thumbnails" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "hero_id" TEXT NOT NULL,

    CONSTRAINT "thumbnails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "urls" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "hero_id" TEXT NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "heroes_hero_id_key" ON "heroes"("hero_id");

-- CreateIndex
CREATE UNIQUE INDEX "comic_content_hero_id_key" ON "comic_content"("hero_id");

-- CreateIndex
CREATE UNIQUE INDEX "comic_content_content_item_id_key" ON "comic_content"("content_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "story_content_hero_id_key" ON "story_content"("hero_id");

-- CreateIndex
CREATE UNIQUE INDEX "story_content_content_item_id_key" ON "story_content"("content_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_content_hero_id_key" ON "event_content"("hero_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_content_content_item_id_key" ON "event_content"("content_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "serie_content_hero_id_key" ON "serie_content"("hero_id");

-- CreateIndex
CREATE UNIQUE INDEX "serie_content_content_item_id_key" ON "serie_content"("content_item_id");

-- CreateIndex
CREATE UNIQUE INDEX "thumbnails_hero_id_key" ON "thumbnails"("hero_id");

-- AddForeignKey
ALTER TABLE "comic_content" ADD CONSTRAINT "comic_content_content_item_id_fkey" FOREIGN KEY ("content_item_id") REFERENCES "content_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comic_content" ADD CONSTRAINT "comic_content_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_content" ADD CONSTRAINT "story_content_content_item_id_fkey" FOREIGN KEY ("content_item_id") REFERENCES "content_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "story_content" ADD CONSTRAINT "story_content_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_content" ADD CONSTRAINT "event_content_content_item_id_fkey" FOREIGN KEY ("content_item_id") REFERENCES "content_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_content" ADD CONSTRAINT "event_content_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serie_content" ADD CONSTRAINT "serie_content_content_item_id_fkey" FOREIGN KEY ("content_item_id") REFERENCES "content_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serie_content" ADD CONSTRAINT "serie_content_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "content_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thumbnails" ADD CONSTRAINT "thumbnails_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urls" ADD CONSTRAINT "urls_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "heroes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
