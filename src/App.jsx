const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <p>
        <Content part1 = {part1} exercises1 = {exercises1} />
        <Content part2 = {part2} exercises2 = {exercises2} />
        <Content part3 = {part3} exercises3 = {exercises3} />
      </p>
      <p><Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /></p>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )

}

const Content = (props) => {
  return(
    // To render the "Part" component
    // Data to be passed to the "Part" component: part, exercises
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3
  return(
    <div>
      Number of exercises {total}
    </div>
  )
}

export default App
