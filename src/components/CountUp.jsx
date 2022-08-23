import React from 'react'

const CountUp = () => {
  return (
<div name='about' className='w-full my-32 '>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Real People,Real Relationships.</h2>
                <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Aperiam dicta possimus esse fugiat libero quos doloremque natus quas deleniti quae.</p>
            </div>
            <div className='grid md:grid-cols-4 gap-1 text-center px-2'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>

            </div>
        </div>
    </div>  )
}

export default CountUp