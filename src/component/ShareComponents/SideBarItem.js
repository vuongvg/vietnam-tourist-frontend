import { spliceString } from "../../utils";

function SideBarItem ({ item }) {
    return (
        <div className="row mb-3">
            <div className="col-5">
                <div className="bg-cover bg-center bg-norepeat ratio ratio-4x3" style={{ backgroundImage: `url(${item.avatar.src})` }}></div>
            </div>
            <div className="col-7 ps-0">
                <div className="fw-bold">{spliceString(item.title,30)}</div>
                <div className="mt-1 fs-0d8">{spliceString(item.description,50)}</div>
            </div>
        </div>
    )
}

export default SideBarItem;