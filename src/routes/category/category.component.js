import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { CategortTitle, CategoryContainer } from './category.styles';

const Category=()=>{
   const {category}=useParams();
   const {categoriesMap}=useContext(CategoriesContext);
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