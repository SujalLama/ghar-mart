import React, {useState} from 'react'
import './Card.css'
import { Carousel } from 'react-bootstrap';
import { FILE_URL } from '../../utilities/urlConstants';

const defaultCarousel = [
    {
        img : "./images/house.png",
        tag: "First slide"
    },
    {
        img : "./images/house.png",
        tag: "Second slide"
    },
    {
        img : "./images/house.png",
        tag: "Third slide"
    },
]

const Card = ({property}) => {
    const [heart, setHeart] = useState(false);
    return (
        <div className='card--wrapper'>
            <div className='card--image'>
                <Carousel interval={null} nextIcon={null} prevIcon={null} >
                    {(property.attachments !== null && property.attachments.length > 0)  
                        ? property.attachments.map((attachment) => {
                            return  (<Carousel.Item key={attachment}>
                                        <img
                                        className="d-block w-100"
                                        src={ FILE_URL + attachment}
                                        alt={attachment}
                                        />
                                    </Carousel.Item>)
                        })
                        : defaultCarousel.map(item => {
                            return <Carousel.Item key={item.tag}>
                                    <img
                                    className="d-block w-100"
                                    src={item.img}
                                    alt={item.tag}
                                    />
                                </Carousel.Item>
                        })
                    }
                </Carousel>
            </div>
            <div className='card--heading'>
                <div className='card--head-tags'>
                    {property.onSale && <span className='sale'>For Sale</span>}
                    {property.isVerrified && <span className='verified'><img src="./images/tick.png" alt="tick"/> Verified</span>}
                </div>
                <img src="./images/tag.png" alt="tag" />
            </div>
            <div className='card--body'>
                <div className="card--tags">
                    <ul className='tags'>
                        <li>20ft Road</li>
                        <li>South facing</li>
                    </ul>
                    <svg className={`heart-svg ${heart && 'active'}`} onClick={() => setHeart(!heart)} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.043 2.33785L10.0433 2.33762C11.6498 0.758898 14.2294 0.527576 15.9375 1.91363C17.9124 3.51897 18.0149 6.39226 16.2469 8.12986L16.2468 8.12995L9.44429 14.8195C9.19939 15.0602 8.79762 15.0602 8.55271 14.8195L1.75042 8.13017C1.75035 8.1301 1.75028 8.13003 1.7502 8.12995C-0.0143558 6.39236 0.0881432 3.51907 2.06292 1.91374C3.77123 0.527406 6.35412 0.759137 7.95689 2.33728L7.95748 2.33785L8.65004 3.01753L9.00026 3.36123L9.35048 3.01753L10.043 2.33785Z" stroke="#C4C4C4"/>
                    </svg>
                </div>
                <div className='card--description'>
                    <div className='card--description--heading'>
                        <h1>{property.title}</h1>
                        <h3>{property.address}</h3>
                    </div>
                    <ul className='card--description--list'>
                            <li><img src="./images/bed.png" alt="" /><span>{property?.bed} Beds</span></li>
                            <li><img src="./images/bath.png" alt="" /><span>{property?.bath} Baths</span></li>
                            <li><img src="./images/area.png" alt="" /><span>{property?.area} anna</span></li>
                    </ul>
                </div>
            </div>
            <div className='card--footer'>
                <h4>Rs. {property.price}</h4>
                <button className='primary-btn'>View Detail</button>
            </div>
        </div>
    )
}

export default Card
