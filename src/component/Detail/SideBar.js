import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { displayPrice } from '../../utils';

function SideBar ({idPost}) {
    return (
        <div className="border p-3">
            <h3>Thông tin tư vấn</h3>
            <div className="d-flex align-items-center mt-3">
                <AttachMoneyIcon fontSize='large'/>
                <div className="ms-1 fs-3">{displayPrice(4500000)}</div>
            </div>
        </div>
    )
}

export default SideBar;