import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Filter () {
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="border py-3 px-2 bg-light">
      <h4>FIND CITY</h4>
      <select>
        <option value=''>Select Location</option>
        <option value='HN'>Hà Nội</option>
        <option value='TPHCM'>Hà Nội</option>
        <option value='DN'>Đà Nẵng</option>
      </select>
      <MobileDatePicker
          label="Date from"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
      />
      <MobileDatePicker
          label="Date to"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      <div>
        <Button variant="contained" fontSize="large" className="w-100 text-white" sx={{backgroundColor:'#f85a59'}}>Search</Button>
      </div>
    </div>
  )
}

export default Filter;