import { BackgroundImage, DirectoryBodyContainer, DirectoryContainer } from './directory-item.styles';
// import {useNavigate} from 'react-router-dom';


const DirectoryItem=({category})=>{    
  const {title,imageUrl,route}= category;
  // const navigate= useNavigate();
  // const onNavigateHandler=()=>navigate(route);
    return(
        <DirectoryContainer>
          <BackgroundImage imageurl={imageUrl} />
          {/* <DirectoryBodyContainer to={`shop/${title.toLowerCase()}`}> */}
          {/* <DirectoryBodyContainer onClick={onNavigateHandler}> -- this is not working..need to check*/}
          <DirectoryBodyContainer to={route}>
            <h2>{title}</h2>
            <p >Shop Now!</p>
          </DirectoryBodyContainer>
      </DirectoryContainer>
    )
}

export default DirectoryItem;