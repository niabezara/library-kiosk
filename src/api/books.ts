import axios from "axios";
import { BookData, BookCategory } from "../interfaces/booksTypes";
const key = import.meta.env.VITE_KEY;
const BOOKS_API = import.meta.env.VITE_WEB;
// *******************************************************************************
export const getCategories = async (page: number, maxResults: number) => {
  const startIndex = page * maxResults;
  const { data } = await axios.get<BookData>(
    `${BOOKS_API}/volumes?q=all&startIndex=${startIndex}&maxResults=${maxResults}&key=${key}`
  );

  const uniqueCategories = new Set<string>();
  console.log("rame", data);
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
    `${BOOKS_API}/volumes?q=subject:${category}&startIndex=${startIndex}&maxResults=${maxResults}&key=${key}`
  );

  return data.items;
};

// *********************************
// export const fetchAllBooks = async () => {
//   let booksAr = [];
//   const { data } = await axios.get<BookData>(
//     `${BOOKS_API}/volumes?q=react&key=AIzaSyDoQBMMLlEH4vWD7_uqksULHH-6r7WC7EA`
//   );

//   for (const cat of data.items) {
//     const res = await axios(cat.selfLink);
//     booksAr.push(res.data);
//   }

//   return data.items;
// };
