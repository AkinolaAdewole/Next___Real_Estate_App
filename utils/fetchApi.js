import axios from "axios";

export const baseUrl = 'https://ayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '57b0c9d622msh5b18b9a05fdf052p1b63f7jsn1cfeb576c483',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
      
    return data;
  }

