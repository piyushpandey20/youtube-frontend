import React from 'react'
import Button from './Button'

//create a list and put all the names their and try to do map on it and pass it to button and try to build that thing scrollable


const ButtonList = () => {
  return (
    <div className='flex fixed bg-white w-full mt-[-10px] '>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="News"/>
      <Button name="Cooking"/>
    </div>
  )
}

export default ButtonList
