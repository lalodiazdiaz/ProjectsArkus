import axios from "axios";

const searchImage =async (term) => {
 const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9rUVhOtLFvA5qzeXwai6MWW_gcotegAMJ7xfNjwVZZY ",
    },
    params: {
        query: term
    },
  });
  return response.data.results
};


export default searchImage