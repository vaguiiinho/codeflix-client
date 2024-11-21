'use client'
import { AuthForm } from '@/app/components/AuthForm'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

type ServerError = {
    message: string
}
export default function LoginForm() {
    const router = useRouter()
    const [errors, setErrors] = useState<string[]>([])

    console.log(errors)
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const response = await fetch('/auth/login/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            if (response.ok) {
                // Redirect to home page
                router.push('/');
                return
            }
            const payload: ServerError[] = await response.json()

            setErrors(payload.map((err) => err.message))

        } catch (error) {
            console.error(error)
            setErrors(['An unknown error occurred'])
        }
    }
    return (
        <AuthForm formType='login' onSubmit={handleSubmit} />
    )
}