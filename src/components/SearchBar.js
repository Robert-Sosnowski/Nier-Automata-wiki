import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
const AllData='http://localhost:3001/';
const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData]=useState([])
    const handleFilter=(event)=>{
      const searchWord =  event.target.value
        const newFilter= data.filter((value)=>{
            return value.titre.toLowerCase().includes(searchWord.toLowerCase())
        });
      if (searchWord===""){
          setFilteredData([])
      }else{setFilteredData(newFilter)}

    }
    return (
        <div >
            <div >
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div style={{color:"black"}}><SearchIcon/></div>

            </div>
            {/*{filteredData.length !==0}&&(*/}
            {/*<div>*/}
            {/*    /!*{filteredData.map((value, key)=>{*!/*/}
            {/*    /!*    return*!/*/}
            {/*    /!*    <div>{value.id}</div>*!/*/}
            {/*    /!*})}*!/*/}
            {/*</div>)*/}
        </div>
    );
};

export default SearchBar;