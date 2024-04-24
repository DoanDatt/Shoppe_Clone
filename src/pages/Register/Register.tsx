import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from '~/utils/rules'

interface FormType {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormType>()
  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log('password', password)
    }
  )

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white p-10 rounded' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-4 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='text-sm text-red-500 mt-1 min-h-[1rem]'>{errors.email?.message}</div>
                <div className='mt-3'>
                  <input
                    type='password'
                    className='p-4 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    placeholder='PassWord'
                    {...register('password', rules.password)}
                  />
                  <div className='text-sm text-red-500 mt-1 min-h-[1rem]'>{errors.password?.message}</div>
                </div>
                <div className='mt-8'>
                  <input
                    type='password'
                    className='p-4 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    placeholder='Confirm PassWord'
                    {...register('confirm_password', {
                      ...rules.confirm_password,
                      validate: (value) => value === getValues('password') || 'Nhap lai mat khau khong trung khop'
                    })}
                  />
                  <div className='text-sm text-red-500 mt-1 min-h-[1rem]'>{errors.confirm_password?.message}</div>
                </div>
                <div className='mt-8'>
                  <button className='px-4 py-3 rounded bg-red-500 w-full text-white uppercase hover:bg-red-600'>
                    Đăng Ký
                  </button>
                </div>
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
