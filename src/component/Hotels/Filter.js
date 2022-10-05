import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { Button, Checkbox } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { citiesList } from "../../utils";

function Filter () {

  const [starRating, setStarRating] = useState(5);
  const [checked, setChecked] = useState([true, false, false, false, false]);
  const [city, setCity] = useState('');
  const [alertError, setAlertError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    const low = starRating - 0.5;
    const high = starRating === 5 ? starRating : starRating + 0.5;

    setSearchParams({ 
      range:`evaluate-${low}-${high}`,
      filter:`city-${city}`,
    });
  }

  const handleCheckBox = (value,position,e) => {
    const updateChecked = checked.map((item, index) => 
      index === position ? !item : false
    );
    setChecked(updateChecked);
    setStarRating(value);
  }

  const handleSelectChange = (selectedOption) => {
    setCity(selectedOption.value);
  }

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="border p-3 bg-light">
        <h5>FIND CITY</h5>
        <Select
          options={citiesList}
          onChange={handleSelectChange}
        />
        <div>{alertError}</div>
        <h5 className="mt-4">STAR RATING</h5>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[0]} onChange={e => handleCheckBox(5,0,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[1]} onChange={e => handleCheckBox(4,1,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[2]} onChange={e => handleCheckBox(3,2,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[3]} onChange={e => handleCheckBox(2,3,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[4]} onChange={e => handleCheckBox(1,4,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div>
          <Button variant="contained" fontSize="large" className="w-100 text-white mt-4 py-2" sx={{backgroundColor:'#f85a59'}} onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </>
    
  )
}

export default Filter;