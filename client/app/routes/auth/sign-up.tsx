import { signUpSchema } from '@/lib/schema'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'


export type SignupFormData=z.infer<typeof signUpSchema>


const SignUp = () => {
    const form=useForm<SignupFormData>({
        resolver:zodResolver(signUpSchema),
        defaultValues:{
            email:"",
            password:"",
            name:"",
            confirmPassword:"",
        }
    })
    const handleOnSubmit=(values:SignupFormData)=>{
        console.log(values)
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>
            <Card className='max-w-md w-full shadow-xl'>
                <CardHeader className='mb-5 text-center'>
                    <CardTitle className='text-2xl font-bold'>Create an account</CardTitle>
                    <CardDescription className='text-sm text-muted-foreground'>Create an account to continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-6'>
                            <FormField control={form.control} name='email' render={({field})=>(
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder='email@example.com' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}/>
                             <FormField control={form.control} name='email' render={({field})=>(
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input type='text' placeholder='John Doe' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}/>

                            <FormField control={form.control} name='password' render={({field})=>(
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='********' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}/>

                            <FormField control={form.control} name='confirmPassword' render={({field})=>(
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='********' {...field}/>
                                    </FormControl>
                                </FormItem>
                            )}/>

                            <Button type='submit' className='w-full'>
                                Sign up
                            </Button>

                        </form>
                    </Form>
                    <CardFooter className='flex items-center justify-center mt-5'>
                        <div className='flex items-center justify-center '>
                            <p className='text-sm text-muted-foreground'>
                                Don't have an account?{" "}
                                <Link to={"/sign-in"} className='underline'>
                                Sign in
                                </Link>
                            </p>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUp
