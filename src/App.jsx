
import Form from './components/Form'

function App() {

  return (
    <div className='w-[100vw] min-h-[100vh] bg-[#e0f1e7] flex flex-col justify-center items-center'>
      <div className='w-[95%] max-w-[600px] my-8 px-8 py-10 bg-white flex flex-col justify-center items-start rounded-xl'>
        <Form />
      </div>
    </div>
  )
}

export default App
