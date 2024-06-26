import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '~/Components/Input'
import { registerAccount } from '~/apis/auth.apis'
import { Schema, schema } from '~/utils/rules'

type FormType = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormType, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white p-10 rounded' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                classname='mt-8'
                type='email'
                placeholder='Email'
                register={register}
                name='email'
                errorMessage={errors.email?.message}
              />
              <Input
                classname='mt-3'
                type='password'
                placeholder='Password'
                register={register}
                name='password'
                errorMessage={errors.password?.message}
              />
              <Input
                classname='mt-3'
                type='password'
                placeholder='Confirm Password'
                register={register}
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-8'>
                <button className='px-4 py-3 rounded bg-red-500 w-full text-white uppercase hover:bg-red-600'>
                  Đăng Ký
                </button>
              </div>
              <div className='mt-4 text-center'>
                <div className='flex items-center justify-center text-slate-400'>
                  Bạn đã có tài khoản?{' '}
                  <span className='text-orange ml-1'>
                    <Link to='/login'> Đăng Nhập</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
