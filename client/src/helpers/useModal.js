import { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(false)

  const handleShow = () => {
    setModal(true)
  }

  const handleCancel = () => {
    setModal(false)
  }

  return { modal, handleShow, handleCancel }
}
