'use client'
import { InputField } from '../InputField'

export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert('submit from register')
        e.preventDefault()
    }
    return (
        <form
            onSubmit={handleSubmit}
            className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414]
         bg-opacity-90 px-4 py-8 shadow-lg'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-bold'>register</h1>
                <p className='text-sm text-gray-500'>
                    Already have an account? {' '}
                    <a href="#" className='text-red-500 hover:underline'>
                        Login
                    </a>
                </p>
            </div>
            <div className='mt-8 flex flex-col space-y-4'>
                <InputField id='email' type='email' placeholder='Enter you email' label='Email' />
                <InputField id='password' type='password' placeholder='Enter you password' label='Password' />
                <InputField id='confirmPassword' type='password' placeholder='Confirm you password' label='Confirm Password' />
            </div>
            <div className=' flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
                <button
                    className='flex w-full items-center justify-center rounded-lg 
            bg-red-500 px-4 py-2 hover:bg-red-600 text-sm font-semibold text-white sm:w-auto sm:px-8'
                    type='submit'>
                    Register
                </button>
            </div>
        </form>
    )
}