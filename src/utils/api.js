// Get all books with limit as an option
export async function getBooks(limit) {
    const apiUrl = limit
        ? `http://localhost:3000/api/books?limit=${limit}`
        : "http://localhost:3000/api/books";

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
    const apiUrl = "http://localhost:3000/api/genres";

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
    const apiUrl = "http://localhost:3000/api/authors";

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
