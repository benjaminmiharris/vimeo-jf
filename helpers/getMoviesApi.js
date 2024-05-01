export const getMoviesAPITester = async (page, searchItem) => {
  const token = process.env.NEXT_PUBLIC_VIMEO_TOKEN;

  if (searchItem == null) {
    try {
      const response = await fetch(
        `https://api.vimeo.com/me/albums/4868372/videos?page=${page}&password=jft123`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = await response.json();
      console.log("results", results);
      return results;
    } catch (e) {
      console.log("Error fetching data", e);
    }
  } else {
    try {
      const response = await fetch(
        `https://api.vimeo.com/me/albums/7372201/videos?page=${page}&query=${searchItem}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const results = await response.json();
      console.log("search results", results);
      return results;
    } catch (e) {
      console.log("Error fetching data", e);
    }
  }
};
