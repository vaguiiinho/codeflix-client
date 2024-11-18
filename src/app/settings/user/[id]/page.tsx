import { getUserById } from "@/app/lib/settings"
import { notFound } from "next/navigation"

export default async function User({ params }: { params: { id: string } }) {
    const { name, id, username, website } = await getUserById(params.id)

    if (!name) {
        notFound()
    }
    return (
        <div>
            <h1 className='text-2xl font-bold'>User {params.id}</h1>
            <div className='border border-dashed border-red-500 p-4'>
                <p>Name: {id}</p>
                <p>Email: {name}</p>
                <p>Age: {username}</p>
                <p>Age: {website}</p>
            </div>
            <div className='mt-4'>

            </div>
        </div>
    )
}

