import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Vui lòng nhập email đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài email phải từ 6 - 160 kí tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài email phải từ 6 - 160 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Length of password is 5 - 160 letters'
    },
    minLength: {
      value: 6,
      message: 'Length of password is 5 - 160 letters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm_password is required'
    },
    maxLength: {
      value: 160,
      message: 'Length of password is 6 - 100 letters'
    },
    minLength: {
      value: 6,
      message: 'Length of password is 6 - 100 letters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhap lai mat khau khong trung khop'
        : undefined
  }
})
