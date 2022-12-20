import { API_URL } from './config';

const getMealById = async (mealID) => {
   const response = await fetch(API_URL + 'looku.php?i=' + mealID);
   return await response.json();
}

const getAllCategories = async () => {
   const response = await  fetch(API_URL + '/categories.php');
   return await response.json();
}

const getFilteredCategory = async (catName) => {
   const response = fetch(API_URL + 'filter.php?c' + catName);
   return await response.json();
}

export { getMealById, getAllCategories, getFilteredCategory }