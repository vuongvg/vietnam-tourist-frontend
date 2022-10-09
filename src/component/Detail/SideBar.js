import { AttachMoney, AccessTime } from '@mui/icons-material';
import { Button } from '@mui/material';
import { displayPrice } from '../../utils';

function SideBar ({idPost}) {
    return (
        <div className="border p-3">
            <h4>Consulting information</h4>
            <div className="d-flex align-items-center mt-3">
                <div className='fw-bold'>Price</div>
                <div className="ms-3 fs-3 color-f85a59">{displayPrice(4500000)}</div>
            </div>
            <div className="d-flex align-items-center mt-3">
                <div className='fw-bold'>Regular price</div>
                <div className="ms-3 fs-5 text-line-through">{displayPrice(5000000)}</div>
            </div>
            <div className="d-flex align-items-center mt-3">
                <AccessTime fontSize='small'/>
                <div className="ms-3 fs-5">4 days, 3 nights</div>
            </div>
            <div className="mt-4">
                <Button fullWidth variant="outlined">Register</Button>
            </div>
        </div>
    )
}

export default SideBar;