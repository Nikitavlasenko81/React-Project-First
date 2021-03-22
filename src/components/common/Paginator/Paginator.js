import React, {useState} from "react";
import Pagination from "react-bootstrap/Pagination";

let Paginator = (props)=>{
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let active = props.currentPage;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/ props.portionSize);
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1)* props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return(
        <Pagination>
            {portionNumber > 1 && <Pagination.Prev onClick={()=>setPortionNumber(portionNumber - 1)}/>}
            {pages
                .filter((p)=> p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p)=>{
                    return <Pagination.Item onClick={(e)=>{props.onPageChanged(p)}} active={p=== active}>{p}</Pagination.Item>
                })
            }
            {portionCount > portionNumber && <Pagination.Next onClick={()=>setPortionNumber(portionNumber + 1)} /> }
        </Pagination>
    )
}
export default Paginator;