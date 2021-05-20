import React, {useEffect, useState} from 'react';

const Pagination = (props) => {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const arr = [];
        for(let i=1; i<=props.pageAmount; i++){
            arr.push(i);
        }

        setPages(arr);
    },[props.pageAmount])
    
    return(
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <button className="page-link" aria-label="Previous"
                    onClick={(e) => {
                        props.selectedPage===1?props.setSelectedPage(1):props.setSelectedPage(props.selectedPage-1);
                    }}
                >
                    <span aria-hidden="true">&laquo;</span>
                </button>
                </li>
                {pages.map((item) => {
                    return <li className={`page-item ${props.selectedPage===item?"active":null}`}><button class="page-link" onClick={(e) => props.setSelectedPage(item)}>{item}</button></li>
                })}
                
                <li class="page-item">
                <button class="page-link" aria-label="Next"
                    onClick={(e) => {
                        props.selectedPage===props.pageAmount?props.setSelectedPage(props.pageAmount):props.setSelectedPage(props.selectedPage+1);
                    }}
                >
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
            </ul>
        </nav>

    )
}
export default Pagination;