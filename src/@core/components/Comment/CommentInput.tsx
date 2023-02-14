import { Avatar, Box, TextareaAutosize, styled, TextareaAutosizeProps } from '@mui/material'
import React, { forwardRef, useRef, useState } from 'react'

const Textarea = styled(TextareaAutosize)<TextareaAutosizeProps>(({ theme }) => ({
  width: '100%',
  paddingBlock: theme.spacing(3),
  paddingInline: theme.spacing(4),
  borderRadius: theme.spacing(2)
}))

interface ICommentInputProps {
  onSubmit: (value: any) => void
}

const CommentInput = forwardRef<HTMLTextAreaElement, ICommentInputProps>((props, ref) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formValue, setFormValue] = useState<Record<string, string>>({
    comment: ''
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormValue({ [name]: value })
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      formRef.current.requestSubmit()
    }
  }
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(formValue)
    setFormValue({ comment: '' })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexShrink: 0, mt: 1 }}>
        <Avatar sx={{ width: 32, height: 32 }} aria-label='recipe'>
          R
        </Avatar>
      </Box>
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <form ref={formRef} onSubmit={handleSubmitForm}>
          <Textarea
            ref={ref}
            placeholder='Viết bình luận...'
            style={{ resize: 'none' }}
            value={formValue.comment}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
          />
        </form>
      </Box>
    </Box>
  )
})

export default CommentInput
