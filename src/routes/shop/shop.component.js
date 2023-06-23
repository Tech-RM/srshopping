import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../category/category.component';
import {setCategories} from '../../store/categories/categories.action';
import { getCollectionAndDocuments } from '../../utility/firebase/firebase.utility';

const Shop=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getCategories=async()=>{
            const categoriesArray=await getCollectionAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategories();
      },[dispatch]);
    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;