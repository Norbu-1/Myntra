import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {
const item = useSelector((store)=>store.items)
const bagitems=useSelector(store=>store.bag);

const finalItems=item.filter(item=>{
  const itemIndex=bagitems.indexOf(item.id);
  return itemIndex>=0;
})

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=>
  <BagItem key={item.id} item={item}/>
          )}
        
        </div>
  <div className="bag-summary">
  <BagSummary/>
  </div>
         
       
      </div>
    </main>
  );
};

export default Bag;
