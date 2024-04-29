import React from 'react'
import Home from '../components/Home';
import { useSelector } from 'react-redux';

const Hom = () => {    
const item=useSelector((store)=>store.items);
  return (
    <main>
        <div className="items-container">
          {item.map((item)=>
  <Home key={item.id} item={item} />
          )}
        
        </div>
      </main>
  )
}

export default Hom