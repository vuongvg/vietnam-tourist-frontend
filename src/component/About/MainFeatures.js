import AboutTeam from '../../images/aboutteam.jpg';
import { useState } from 'react';

function MainFeatures () {
    const [showHideItems, setshowHideItems] = useState({
        item1: false,
        item2: true,
        item3: true,
    });

    const handleShowHide = (e) => {
        const item = e.currentTarget.id;

        const obj = { item1: true, item2: true, item3: true };

        obj[item] = false;

        setshowHideItems(obj);
    }

    return (
        <div className='container' style={{padding:'5rem 0'}}>
            <div className='col-10 m-auto'>
                <div className="row mt-4">
                    <div className="col-12 col-lg-6">
                        <div className="ratio ratio-4x3">
                            <div className="bg-cover bg-norepeat bg-center" style={{backgroundImage:`url(${AboutTeam})`}}></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4">
                        <div className="d-flex justify-content-center">
                            <div id="item1" onClick={handleShowHide} className={"cursor-pointer rounded-pill px-4 py-2 me-4" + (showHideItems['item1'] ? '' : ' bg-78d5ef text-white')}>What we do</div>
                            <div id="item2" onClick={handleShowHide} className={"cursor-pointer rounded-pill px-4 py-2 me-4" + (showHideItems['item2'] ? '' : ' bg-78d5ef text-white')}>Our mission</div>
                            <div id="item3" onClick={handleShowHide} className={"cursor-pointer rounded-pill px-4 py-2 me-4" + (showHideItems['item3'] ? '' : ' bg-78d5ef text-white')}>Our goal</div>
                        </div>
                        <div className='mt-5' hidden={showHideItems['item1']}>
                            <h3>Offering Reliable Hosting</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                        </div>
                        <div className='mt-5' hidden={showHideItems['item2']}>
                            <h3>Exceptional Web Solutions</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                        </div>
                        <div className='mt-5' hidden={showHideItems['item3']}>
                            <h3>Help Our Customer</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFeatures;