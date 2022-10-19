import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/DetailBlogSkeleton";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { convertDateForm } from "../../utils";
import Slider from "react-slick";

function DetailContent ({ detailType, idPost }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: () => (<span>...</span>),
        prevArrow: () => (<span>...</span>),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);

        request.get(
            `/${detailType}/${idPost}`
        )
        .then((res) => {
            if (res.status === 200) {
                setLoading(true);
                res.data.album = [res.data.avatar, ...res.data.album];
                console.log(res.data.album);
                setContent(res.data);
            } else {
                
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, [detailType,idPost])

    return (
        <div>
            {
                !loading
                    ?
                        <Skeleton/>
                    :
                        content 
                        &&
                        <>
                            <h2>{content.title}</h2>
                            <div className="d-flex align-items-center mb-4 text-secondary">
                                <AccessTimeIcon fontSize="small"/>
                                <div className="ms-2">{convertDateForm(content.updatedAt)}</div>
                            </div>
                            <div className="mb-4 mt-2">
                                {
                                    content.album
                                        ?
                                            <Slider {...settings}>
                                                {
                                                    content.album.map((item, index) => {
                                                        return <div className="ratio ratio-16x9" key={index}>
                                                            <div className="bg-cover bg-center bg-norepeat" style={{backgroundImage:`url(${item.src})`}}></div>
                                                        </div>
                                                    })
                                                }
                                            </Slider>
                                        :
                                            <div className="ratio ratio-16x9">
                                                <div className="bg-cover bg-center bg-norepeat" style={{backgroundImage:`url(${content.avatar})`}}></div>
                                            </div>
                                }
                            </div>
                            <div className="mt-5">{content.description}</div>
                            <div className="product-content mt-3" dangerouslySetInnerHTML={{__html: content.content}}></div>
                        </>
            }
        </div>
    )
}

export default DetailContent;