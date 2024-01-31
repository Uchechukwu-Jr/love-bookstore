export async function getBlog(id) {
  // Replace this URL with your actual API endpoint
  const url = `http://localhost:3000/blogs/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error fetching blog: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
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

export async function getEmails() {
  const url = `http://localhost:3000/api/emails`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(`Error fetching blog: ${data.message}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
