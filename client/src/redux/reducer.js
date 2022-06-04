import { data } from "../data/data.js";

export const initialState = {
  dishes: data.dishes,
  comments: data.testimonials,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
