import Hello from './components/hello'
import Test from './components/test'
const users = [{
  name: "shimon",
  age: 30
},
{
  name: "martin",
  age: 25
},
{
  name: "chaim",
  age: 20
},
{
  name: "david",
  age: 15
},
{
  name: "moshe",
  age: 10
}]

function App3() {
  return (
    <>
      {
        users.map((user, indx) =>
          <Hello /* לא הבנתי */ key={indx}  name={user.name} age={user.age} />
          
        )
      }
      <Test />
    </>
  )

  /*
  return (
    <>
      <Hello name="shimon" age="30" />
      <Hello name="martin" age="25" />
      <Hello name="chaim" age="20" />
      <Hello name="david" age={15} />
      <Hello name="moshe" age="10" />


      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </>
  )
*/}

export default App3



