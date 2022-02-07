import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

export const CardsItem = ({path, label, src, text}) => {
  return (
      <>
          <li className='cards__item'>
              <Link className='cards__item__link' to={path}>
                  <figure data-category={label} className="cards__item__pic-wrap">
                      <img src={src} alt="travel image" className="cards__item__img" />
                  </figure>
                  <div className="cards__item__info">
                      <h5  className="cards__item__text">
                        {text}
                      </h5>
                  </div>

              </Link>
          </li>
      </>
  )
};
