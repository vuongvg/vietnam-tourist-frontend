import { Typography } from "@mui/material";
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { useState, useEffect } from "react";

function FAQS () {

    const [showHide, setShowHide] = useState({
        sh1:false,
        sh2:false,
        sh3:false,
        sh4:false,
        sh5:false,
        sh6:false,
    });

    const handleToggle = (e) => {
        const number = e.currentTarget.className;
        const value = !showHide[number];
        showHide[number] = value;
        setShowHide({
            [number]: value,
            ...showHide
        });
    }

    return (
        <div style={{ padding:'5rem', backgroundColor:'#f9faff' }}>
            <div className="container">
                <div className="col-10 m-auto">
                    <Typography variant="h6" component="h1" className="opacity-0d5">
                        FAQS
                    </Typography>
                    <Typography variant="h4" component="h1">
                        Frequently Ask Question
                    </Typography>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh1" onClick={handleToggle} hidden={showHide['sh1']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh1" onClick={handleToggle} hidden={!showHide['sh1']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh1'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh2" onClick={handleToggle} hidden={showHide['sh2']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh2" onClick={handleToggle} hidden={!showHide['sh2']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh2'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh3" onClick={handleToggle} hidden={showHide['sh3']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh3" onClick={handleToggle} hidden={!showHide['sh3']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh3'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh4" onClick={handleToggle} hidden={showHide['sh4']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh4" onClick={handleToggle} hidden={!showHide['sh4']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh4'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh5" onClick={handleToggle} hidden={showHide['sh5']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh5" onClick={handleToggle} hidden={!showHide['sh5']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh5'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                <div className="sh6" onClick={handleToggle} hidden={showHide['sh6']}>
                                    <AddCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                                <div className="sh6" onClick={handleToggle} hidden={!showHide['sh6']}>
                                    <RemoveCircle className="cursor-pointer" sx={{color:'#84b55f'}}/>
                                </div>
                            </div>
                            <div className={"px-3 border-start border-end overflow-hidden border-bottom" + ( showHide['sh6'] ? " a-o" : " a-c" ) }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQS;