import type { ComponentProps, ReactNode } from 'react'

interface IInputRoot extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: IInputRoot) {
  return (
    <div
      data-error={error}
      className="group flex items-center gap-2 px-4 h-12 border-2 border-gray-400 text-gray-100 rounded-xl bg-gray-600 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface IInputIcon extends ComponentProps<'div'> {}

export function InputIcon({ ...props }: IInputIcon) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface IInputField extends ComponentProps<'input'> {}

export function InputField({ ...props }: IInputField) {
  return (
    <input className="flex-1 outline-none placeholder-gray-400" {...props} />
  )
}
