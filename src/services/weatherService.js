const API_KEY = "d8256c892f0343e2a1665718260309";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  const queryStringURL = `${BASE_URL}&q=${city}`;
  try {
    const jsonRes = await fetch(queryStringURL);
    const data = await jsonRes.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { show };
