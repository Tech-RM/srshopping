import { createSelector } from "reselect";

const selectCategoriesReducer=(state)=>state.categories;

const selectCategories=createSelector(
    [selectCategoriesReducer],
    (categoriesSlice)=> {return categoriesSlice.categories;}
)

export const selectCategoriesMap=createSelector(
    [selectCategories],
    (categories)=>{
        return categories.reduce((acc,category)=>{
            const {title,items}=category;
            return{...acc, [title.toLowerCase()]:items};
        },{});
    }
)