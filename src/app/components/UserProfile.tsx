import Image from 'next/image'

export default function UserProfile() {
  return (
    <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <Image
            src="/profile.png"
            alt=""
            width={40}
            height={40}
            className='cursor-pointer rounded'
        />
    </div>
  )
}
