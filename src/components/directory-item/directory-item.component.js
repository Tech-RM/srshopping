import { BackgroundImage, DirectoryBodyContainer, DirectoryContainer } from './directory-item.styles';

const DirectoryItem=({category})=>{
    
  const {title,imageUrl}= category;
    return(
        <DirectoryContainer>
          <BackgroundImage imageUrl={imageUrl}/>
          <DirectoryBodyContainer to={`shop/${title.toLowerCase()}`}>
            <h2>{title}</h2>
            <p>Shop Now!</p>
          </DirectoryBodyContainer>
      </DirectoryContainer>
    )
}

export default DirectoryItem;