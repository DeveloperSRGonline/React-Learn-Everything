import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({users}) => {
  return (
    <div className='pb-10 flex gap-10 items-center px-18 h-[90vh] '>
        <LeftContent />
        <RightContent users={users}/>
    </div>
  )
}

export default Page1Content