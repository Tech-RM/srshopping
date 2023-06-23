import { createAction } from "../../utility/reducer/reducer.utility";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories=(categoriesArray)=>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray);