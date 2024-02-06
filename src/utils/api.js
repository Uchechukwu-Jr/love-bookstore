// Get all books with limit as an option
export async function getBooks(limit) {
  const apiUrl = limit
    ? `https://bookstore-o32m.onrender.com/api/books?limit=${limit}`
    : "https://bookstore-o32m.onrender.com/api/books";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error fetching books: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
// get list of Genres
export async function getGenres() {
  const apiUrl = "https://bookstore-o32m.onrender.com/api/genres";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error fetching books: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
// get list of Authors
export async function getAuthors() {
  const apiUrl = "https://bookstore-o32m.onrender.com/api/authors";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error fetching books: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
