import type { ComponentProps } from 'react'

interface IButton extends ComponentProps<'button'> {}

export function Button({ ...props }: IButton) {
  return (
    <button
      className="w-full flex justify-between items-center bg-gray-500 text-blue font-semibold antialiased px-5 h-12 rounded-xl cursor-pointer hover:bg-blue transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  )
}
