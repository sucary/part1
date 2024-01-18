const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
        <Content part1 = {part1}
        part2 = {part2}
        part3 = {part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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
      <p>{props.part} {props.exercises}</p>
    </div>
  )

}

const Content = (props) => {
  return(
    // To render the "Part" component
    // Data to be passed to the "Part" component: part, name/exercises
    <div>
      <Part part = {props.part1.name} exercises = {props.part1.exercises} />
      <Part part = {props.part2.name} exercises = {props.part2.exercises} />
      <Part part = {props.part3.name} exercises = {props.part3.exercises} />
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
