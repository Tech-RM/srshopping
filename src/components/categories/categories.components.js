import DirectoryItem from "../directory-item/directory-item.component";
import "./categories.components.scss";

const AllContainers=({categories})=>{
    return(
    <div className="categories-container">
      {categories.map((category)=>(
        <DirectoryItem key={category.id} category={category}/>
      ))}
      
    </div>
    )
}

export default AllContainers;