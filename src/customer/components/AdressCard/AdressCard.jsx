import React from 'react'

const AdressCard = (address) => {
  return (
    <div className='space-y-3'>
        <p className='font-semibold'>ahi{address?.firstName + " " + address?.lastname}</p>
        <p>{address?.provice}, {address?.streetAddress},{address?.zipCode}</p>
        <div className='space-y-1'>
            <p className='font-semibold'>Phone Number</p>
            <p>{address?.mobile}</p>
        </div>
    </div>
  )
}

export default AdressCard