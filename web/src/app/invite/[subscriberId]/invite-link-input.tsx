'use client'

import { Copy, Link } from 'lucide-react'
import { IconButton } from '../../../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../../../components/input'

interface IInviteLinkInput {
  link: string
}

export function InviteLinkInput({ link }: IInviteLinkInput) {
  function copyInviteClick() {
    navigator.clipboard.writeText(link)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={link} />

      <IconButton className="-m-2" onClick={copyInviteClick}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
