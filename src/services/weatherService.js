const BASE_URL = `http://localhost:3000/weather/`;

const show = async (city) => {
  try {
    const res = await fetch(BASE_URL + city);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { show };
