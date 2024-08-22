import React from 'react'
import FreindRequsets from './FreindRequsets'
import Birthdays from './Birthdays'
import Ad from './Ad'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FreindRequsets />
      <Birthdays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu