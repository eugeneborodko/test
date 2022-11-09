import Post from './components/Post'

const App = () => {
  return (
    <div>
      <Post title="VITALYA LOH" text="MY TEXT" zhopa={5} />
      <Post title="vlad" text="another text" />
      <Post title="artem" text="prodaet zhizki" myFn={() => console.log('1')} />
    </div>
  )
}

export default App
