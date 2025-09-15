import axios from "axios";
const api = process.env.NEXT_PUBLIC_BASE_FILTER_AREA_URL;
export const searchMeals = async (query: string) => {
  try {
    const res = await axios.get(`${api}i=${query}`);
    return res.data.meals ? res.data.meals : [];
  } catch (e) {
    console.log(e);
  }
};

export const getMealById = async (id: string) => {
  try {
    const api1 = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await axios.get(`${api1}i=${id}`);
    console.log(res.data);
    return res.data.meals ? res.data.meals[0] : [];
  } catch (e) {
    console.log(`Fetch Error ${e}`);
  }
};
