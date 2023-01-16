import React from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqueList = [... new Set(Menu.map((curElem) => {  // Ecmascript-2019  => Datastruture =>  The Set object lets you store unique values of any type.
  return curElem.category;
}))];
console.log(uniqueList);
// output :  ['Breakfast', 'Lunch', 'Evening', 'Dinner']

// const uniqueList = Menu.map((curElem) => {  // Ecmascript-2019  => Datastruture =>  The Set object lets you store unique values of any type.
//   return curElem.category;
// })
//console.log(uniqueList)
// Output: It is an Object inside Array
// 0: Breakfast"
// 1:"Lunch"
// 2: "Evening"
// 3: "Dinner"


const Resturant = () => {
  const [menuData, setMenuData] = React.useState(Menu); // We can also write => import React, {useState} from "react";
  //console.log(menuData);
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    })
    setMenuData(updatedList);
  };

  return  (
  <>
    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={ menuData } /> 
    {/* Here we are sending the prox. */}
  </>
  );
};

export default Resturant


   
/*  ***************** REACT HOOKS ******************
 React Hooks are simple JavaScript functions that we can use to isolate the reusable part 
 from a functional component. Hooks can be stateful and can manage side-effects. React 
 provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful
 value and an updater function to update it.  
 */

 // useState hook : kisi bhi data ko apne andar get karke rakhega.
  // define useState:
  // 1) React.useState(initialData)
  // 2) import React, { useState } from 'react'