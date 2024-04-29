import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagStatusActions } from '../store/bagSlice';

const Home = ({item}) => {
const bagItems=useSelector(store=>store.bag)
const element=bagItems.indexOf(item.id)>=0;


   const dispatch=useDispatch();

   const handleRemoveBag=(item)=>
   {
   dispatch(bagStatusActions.removeFromBag(item));
   }
  const handleAddToBag=(item)=>{
    dispatch(bagStatusActions.addToBag(item));
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    {element? (<button type='button' className='btn btn-danger btn-add-bag' onClick={()=>handleRemoveBag(item.id)}>Remove</button>): <button type='button' className='btn btn-success btn-add-bag' onClick={()=>handleAddToBag(item.id)}>Add to Bag</button>}


    </div>
  )
}

export default Home;