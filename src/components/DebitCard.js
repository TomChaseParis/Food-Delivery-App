import React from 'react';
import MasterCard from '../assets/img/mastercardnew.png';
import ChipCard from '../assets/img/pucenew.png';

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img className='card_logo' src={MasterCard} alt='card' />
        <img className='card_chip' src={ChipCard} alt='chipcard' />

        <div className='card_number'>1234 567 8920 3200</div>
        <div className='card_name'>TomChaseParis</div>
        <div className='card_from'>12/21</div>
        <div className='card_to'>10/25</div>
        <div className='card_ring'></div>
    </div>
  )
}

export default DebitCard;
