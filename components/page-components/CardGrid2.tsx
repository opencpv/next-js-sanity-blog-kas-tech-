import {Post} from "../../typings"

interface Prop {
    data: Array<Post>;
  }
const CardGrid2 = ({data}:Prop) => {
    return ( <div className="flex flex-col">
        {data.map((post,index)=>{
            return (<></>)
        })}
    </div> );
}
 
export default CardGrid2;