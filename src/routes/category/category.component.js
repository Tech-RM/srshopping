import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategortTitle, CategoryContainer } from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category=()=>{
   const {category}=useParams();
   const categoriesMap=useSelector(selectCategoriesMap);
   const [products, setProducts]=useState(categoriesMap[category]);

   useEffect(()=>{
    setProducts(categoriesMap[category]);
   },[categoriesMap,category]);

   return(
    <Fragment>
        <CategortTitle>
            {category.toUpperCase()}
        </CategortTitle>
        <CategoryContainer>
            {products&& products.map(prodct=>
            <ProductCard key={prodct.id} product={prodct}/>)}
        </CategoryContainer>
    </Fragment>
   )
}

export default Category;