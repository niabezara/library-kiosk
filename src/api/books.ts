import axios from "axios";
import { BookData, BookCategory } from "../interfaces/booksTypes";

// *******************************************************************************
export const getCategories = async (page: number, maxResults: number) => {
  const startIndex = page * maxResults;
  const { data } = await axios.get<BookData>(
    `https://www.googleapis.com/books/v1/volumes?q=all&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyDoQBMMLlEH4vWD7_uqksULHH-6r7WC7EA`
  );

  const uniqueCategories = new Set<string>();

  const categories: BookCategory[] = data.items.reduce(
    (acc: BookCategory[], item) => {
      const category = item.volumeInfo.categories?.[0];

      // Check if the category is not a duplicate
      if (category && !uniqueCategories.has(category)) {
        uniqueCategories.add(category);

        acc.push({
          id: item.id,
          title: category,
        });
      }

      return acc;
    },
    []
  );

  return categories;
};

// *********************************************************************
// get book from selected category

export const selectedCategory = async (
  page: number,
  maxResults: number,
  category: string | null
) => {
  const startIndex = page * maxResults;

  const { data } = await axios.get<BookData>(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyDoQBMMLlEH4vWD7_uqksULHH-6r7WC7EA`
  );
  return data.items;
};
