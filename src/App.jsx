
import Form from './components/Form'

function App() {

  return (
    <div className='w-full min-h-[100vh] bg-[#e0f1e7] flex flex-col justify-center items-center font-body font-normal relative overflow-hidden'>
      <div className='w-[95%] max-w-[600px] my-8 px-8 py-6 bg-white flex flex-col justify-center items-start rounded-xl'>
        <Form />
      </div>
    </div>
  )
}

export default App
