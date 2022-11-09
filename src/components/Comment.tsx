import { FC } from 'react'
import Button from './Button'

interface CommentsProps {
  name: string
  text?: string
  likes: number | string | boolean
}

const Comments: FC<CommentsProps> = ({ name, text, likes }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
      <div>likes: {likes}</div>
      <Button message="456" buttonText="11111" />
        <h1>000</h1>
        <h1>9999</h1>
        <button>777</button>
      </Button>
    </div>
  )
}

export default Comments
