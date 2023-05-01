export const getMoviesAPITester = async (page) => {
  const token = process.env.VIMEO_TOKEN;

  try {
    const response = await fetch(
      `https://api.vimeo.com/me/albums/7372201/videos?page=${page}`,
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
    return results;
  } catch (e) {
    console.log("Error fetching data", e);
  }
};
