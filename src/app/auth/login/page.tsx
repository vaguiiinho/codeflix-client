import React from 'react'

export default function Login() {
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80'>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-sm text-gray-500'>
              New to the app? {' '}
              <a href="#" className='text-red-500 hover:underline'>
                Register
              </a>
            </p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-red-500'
              name='email'
            />
          </div>
        </form>
      </div>
    </div>
  )
}
