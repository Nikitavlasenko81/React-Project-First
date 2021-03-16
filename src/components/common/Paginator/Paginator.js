import React from "react";
import Pagination from "react-bootstrap/Pagination";

let Paginator = (props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let active = props.currentPage;
    let pages = [];
    for (let number = 1; number <= pagesCount; number++) {
        if (number > 20) {
            pages.push(<Pagination.Ellipsis/>)
            break
        } else {
            pages.push(
                <Pagination.Item key={number} active={number === active} onClick={(e) => {
                    props.onPageChanged(number)
                }}>
                    {number}
                </Pagination.Item>
            );
        }
    }
    return(
        <Pagination>
            {pages}
        </Pagination>
    )

}
export default Paginator;