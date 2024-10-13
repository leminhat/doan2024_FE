import React from 'react'

const HomeSelectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

      <div className='h-[15rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' 
        src="https://i.pinimg.com/564x/61/2c/86/612c862cc3760a64265aaa41cb697c99.jpg" alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>Đồ đẹp</h3>
        <p className='mt-2 text-sm text-gray-500'>Quần áo tổng hợp</p>
      </div>

    </div>
  )
}

export default HomeSelectionCard
