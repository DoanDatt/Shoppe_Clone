// import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

// interface Props {
//   type: React.HTMLInputTypeAttribute
//   className: string
//   placeholder?: string
//   errorMessage?: string
//   name: string
//   register: UseFormRegister<any>
//   rules?: RegisterOptions
// }

// export default function Input({ type, className, placeholder, errorMessage, name, register, rules }: Props) {
//   return (
//     <div className={className}>
//       <input
//         type={type}
//         className='p-4 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
//         placeholder={placeholder}
//         {...register(name, rules)}
//       />
//       <div className='text-sm text-red-500 mt-1 min-h-[1rem]'>{errorMessage}</div>
//     </div>
//   )
// }
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  classname: string
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  register: UseFormRegister<any>
  name: string
  rules?: RegisterOptions
  errorMessage?: string
}

export default function Input({ classname, type, placeholder, register, name, rules, errorMessage }: Props) {
  return (
    <div className={classname}>
      <input
        type={type}
        className='p-4 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='text-sm text-red-500 mt-1 min-h-[1rem]'>{errorMessage}</div>
    </div>
  )
}
