import Counter from './components/Counter'
import Prop from './components/Prop'
import Name from './components/Name'

const App = () => {
  return (
  <>
  <Counter/>
  <Prop name="Misba" age={21}/>
  <Prop name="Amit" age={22}/>
  <Name/>
  </>
  )
}

export default App