const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    // The table has 3 elements (objects), each has 2 properties.
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
        <Content part1 = {parts[0]}
        part2 = {parts[1]}
        part3 = {parts[2]} />
      <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises} />
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
    // Data to be passed to the "Part" component: {object.property}
    // The objects are defined in return block of APP
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
