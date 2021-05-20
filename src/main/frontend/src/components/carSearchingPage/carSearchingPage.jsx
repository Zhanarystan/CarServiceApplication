import React,{useState, useEffect} from 'react';
import FilterBoard from './filterBoard';
import CarList from './carList';
import FilterSidebar from './filterSidebar';
import Pagination from './pagination';


const CarSearchingPage = (props) => {

    const [searchProperties, setSearchProperties] = useState({});
    const [searchProperties1, setSearchProperties1] = useState({});

    const [pageAmount, setPageAmount] = useState(1);
    const [selectedPage, setSelectedPage] = useState(1);
    
    return (
        <div className="container">
            <FilterBoard setSearchProperties={setSearchProperties}
                         service={props.service}
                         setSelectedPage={setSelectedPage}/>
            <div className="row">
                <div className="col-8">
                    <CarList searchProperties={searchProperties}
                             searchProperties1={searchProperties1} 
                             service={props.service}
                             selectedPage={selectedPage}
                             setPageAmount={setPageAmount} />
                    <Pagination pageAmount={pageAmount} 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                </div>
                <div className="col-4">
                <FilterSidebar setSearchProperties1={setSearchProperties1}
                                setSelectedPage={setSelectedPage}/>
                </div>

            </div>
        </div>
        
    )
}

export default CarSearchingPage;