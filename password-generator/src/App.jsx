import { useEffect, useState, useCallback, useRef } from 'react';

function App() {

  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [chracters, setChracters] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbers) str += '1234567890'

    if (chracters) str += '!@#$%^&*(){}[]~'

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numbers, chracters, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => { passGen() }, [
    length, numbers, chracters, passGen
  ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md -rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-1 px-3' />
          <button onClick={copyPassword} className='outline-noe bg-orange-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={10} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='text-white flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numbers}
              id='numberInput' onChange={() => { setNumbers((prev) => !prev) }} />
            <label className=''>Numbers</label>
          </div>
          <div className='text-white flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={chracters}
              id='numberInput' onChange={() => { setChracters((prev) => !prev) }} />
            <label className=''>Chracters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
