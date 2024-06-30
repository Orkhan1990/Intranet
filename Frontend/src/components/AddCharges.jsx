import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

const AddCharges = () => {
    const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
   <div className="border p-5 rounded-md">
    <h2 className='font-semibold'>Xərclər</h2>
    {[...Array(count)].map((_, index) => (
      <div className="flex items-center gap-5 mt-2" key={index}>
        <TextInput type="text" className="w-[500px] flex-1" />
        <div className='flex gap-2 items-end'>
        <TextInput/>
        <span>AZN</span>
        </div>
        
      </div>
    ))}
    <div className='flex gap-2 items-center font-semibold justify-end mt-5'>
        <span>Cəmi:</span>
        <span>0 AZN</span>
    </div>
    <div className="flex gap-5">
      <Button color="blue" className="mt-5" onClick={incrementCount}>
        Əlavə et <span className="ml-2 ">+</span>
      </Button>

      <Button color="blue" className="mt-5" onClick={decrementCount}>
        Azalt <span className="ml-2 ">-</span>
      </Button>
    </div>
  </div>
  )
}

export default AddCharges