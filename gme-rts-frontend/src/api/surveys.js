import axios from 'axios';

const S_API = process.env.REACT_APP_GE_S_API;

export const createSurvey = async ({ data }) => {
  try {
    const res = await axios.post(
      `http://localhost:8000/api/testimonials/create`,
      data,
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export default {
  createSurvey
}
