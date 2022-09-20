import { Typography } from "@mui/material";
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { useState, useEffect } from "react";

function FAQS () {

    // useEffect(() => {
    //     (function ($) {

    //     })(jQuery);
    // },[]);

    const [showHide, setShowHide] = useState(false)

    const handleToggle = () => {
        setShowHide(!showHide);
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
                        <div className="col-12 col-md-6 mb-4 expandable-contain">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}} onClick={handleToggle}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom expandable" hidden={ !showHide }>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom">
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom">
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom">
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom">
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="border d-flex justify-content-between align-items-center px-4 py-3">
                                <h4 className="mb-0">When she reached the first hills</h4>
                                {/* <AddCircle sx={{color:'#84b55f'}}/> */}
                                <RemoveCircle sx={{color:'#84b55f'}}/>
                            </div>
                            <div className="p-3 border-start border-end border-bottom">
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