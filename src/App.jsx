
import Form from './components/Form'

function App() {

  return (
    <div className='w-full min-h-[100vh] bg-[#e0f1e7] flex flex-col justify-center items-center font-body font-normal relative overflow-hidden lg:py-12'>
      <div className='w-[95%] max-w-[600px] my-8 px-8 py-6 lg:py-10 lg:mt-10 bg-white flex flex-col justify-center items-start lg:items-center rounded-xl'>
        <Form />
      </div>
    </div>
  )
}

export default App
