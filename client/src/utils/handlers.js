import { useCallback, useState } from 'react'

export const FileHandler = () => {
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const handleFileChange = useCallback((e) => {
    setFile(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }, [])

  const handleCancel = useCallback(() => {
    setFile('')
    setPreview(null)
  }, [])

  return { file, preview, handleFileChange, handleCancel }
}
