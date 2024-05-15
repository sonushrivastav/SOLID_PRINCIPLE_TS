import './App.css'
import DIP from './principles/DependencyInversion'
import ISP from './principles/InterfaceSegregation'
import LSP from './principles/LiskovSubstitute'
import OCP from './principles/OpenClose'
import SRP from './principles/SingleResponsibility'

function App() {

  return (
    <>
      <div className="flex min-w-full h-full justify-center items-center p-8">
      {/* <SRP/> */}
      {/* <OCP/> */}
      {/* <LSP/> */}
      {/* <ISP/> */}
      <DIP/>
      </div>
       
    </>
  )
}

export default App
