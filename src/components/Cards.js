import React from 'react';
import { CardsItem } from './CardsItem';
import './Cards.css'
import img9 from '../img/img-9.jpg'
import img3 from '../img/img-3.jpg'
import img4 from '../img/img-4.jpg'
import img2 from '../img/img-2.jpeg'
import img8 from '../img/img-8.jpg'
export const Cards = () => {
  return (
     <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardsItem
                        src={img9}
                        label="adventure"
                        text="Explore the hidden waterfall deep inside the amazon jungle"
                        path="/services"
                    />
                     <CardsItem
                        src={img3}
                        label="Mystery"
                        text="set Sail in the Atlantic ocean, visiting uncharted waters"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardsItem
                        src={img4}
                        label="adventure"
                        text="Experience football on top of the Hymilian mountains"
                        path="/services"
                    />
                     <CardsItem
                        src={img2}
                        label="Luxury"
                        text="Take your luxury vacation on Hawaii"
                        path="/services"
                    />
                     <CardsItem
                        src={img8}
                        label="adventure"
                        text="Ride through Saraha desert on a guided camel tour"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
     </div>
  )
};
