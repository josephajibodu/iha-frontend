import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// Spec H1 — fixed set of four allowed categories. The legacy 'Uncategorized'
// option must not be selectable; constrain to this list at the schema layer.
export const NEWS_CATEGORIES = [
  "Latest Announcements",
  "Programs & Fellowships",
  "Research & Innovation",
  "Partnerships & Events",
] as const;

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: NEWS_CATEGORIES.map((title) => ({ title, value: title })),
      },
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
