// import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

// type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Vui lòng nhập email'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Vui lòng nhập email đúng định dạng'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài email phải từ 6 - 160 kí tự'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài email phải từ 6 - 160 kí tự'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Password is required'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Length of password is 5 - 160 letters'
//     },
//     minLength: {
//       value: 6,
//       message: 'Length of password is 5 - 160 letters'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Confirm_password is required'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Length of password is 6 - 100 letters'
//     },
//     minLength: {
//       value: 6,
//       message: 'Length of password is 6 - 100 letters'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Nhap lai mat khau khong trung khop'
//         : undefined
//   }
// })

export const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Vui lòng nhập email đúng định dạng')
    .min(5, 'Độ dài email phải từ 6 - 160 kí tự')
    .max(160, 'Độ dài email phải từ 6 - 160 kí tự'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(6, 'Độ dài mật khẩu phải từ 5 - 160 kí tự')
    .max(160, 'Độ dài mật khẩu phải từ 5 - 160 kí tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại mật khẩu là bắt buộc')
    .min(5, 'Độ dài mật khẩu phải từ 5 - 160 kí tự')
    .max(160, 'Độ dài mật khẩu phải từ 5 - 160 kí tự')
    .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không trùng khớp')
})

// const loginSchema = schema.omit(['confirm_password'])

// type LoginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
