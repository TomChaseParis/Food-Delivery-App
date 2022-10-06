import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React from 'react';
import { useState } from 'react';

function ItemCard({ imgSrc, name, ratings, price }) {

    const [isFavourite, setFavourite] = useState(false);

  return (
    <div className='itemCard'>
        <div className={`isFavourite ${isFavourite ? 'active' : ""}`}
            onClick={() => setFavourite(!isFavourite)}
        >
            <Favorite />
        </div>
            <div className='imgBox'>
                <img className='itemImg' src={imgSrc} alt='' />
            </div>
            <div className='itemContent'>
                <h3 className='itemName'>{name}</h3>
                <div className='bottom'>
                    <div className='ratings'>
                        {Array.apply(null, {length : 5}).map((e, i) => (
                            <i key={i} className='rating'>
                                <StarRounded />
                            </i> 
                        ))}
                        <h4 className='price'><span>$ </span>{price}</h4>
                    </div>
                        <i className='addtoCart'>
                            <AddRounded />
                        </i>
                </div>
            </div>
    </div>
  )
}

export default ItemCard
