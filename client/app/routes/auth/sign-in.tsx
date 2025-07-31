import { signInSchema } from '@/lib/schema'
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


type SigninFormData=z.infer<typeof signInSchema>


const SignIn = () => {
    const form=useForm<SigninFormData>({
        resolver:zodResolver(signInSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })
    const handleOnSubmit=(values:SigninFormData)=>{
        console.log(values)
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>SignIn

        </div>
    )
}

export default SignIn
