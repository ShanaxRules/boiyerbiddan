import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData=pgTable('storyData' , {
    id:serial('id').primaryKey(),
    storyId:varchar('storyId'),
    storySubject:text('storySubject').notNull(),
    storyType:varchar('storyType').notNull(),
    ageGroup:varchar('ageGroup').notNull(),
    imageStyle:varchar('imageStyle').notNull(),
    output:json('output'),
    coverImage:varchar('coverImage'),
    userEmail:varchar('userEmail'),
    userName:varchar('userName'),
    userImage:varchar('userImage')

})