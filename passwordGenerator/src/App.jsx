import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 1; i < length; i++) {
      pass += str[Math.floor(Math.random() * Math.floor(str.length))];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //setPassword is used just for optimization!

  const copyPasswordToClipboard = useCallback(() => {
    setCopy((prevValue) => !prevValue);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 19);
    window.navigator.clipboard?.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="container max-w-md mx-auto my-8 shadow-md rounded-xl px-4 py-3 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center mb-2">Password Generator</h1>
        <div className="flex shadow-lg rounded-xl overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-sky-600 px-3 py-1shrink-0 text-white hover:bg-sky-400"
            onClick={copyPasswordToClipboard}
          >
            {copy? "Copied" : "Copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={18}
              className="cursor-pointer"
              value={length}
              onChange={(event) => setLength(event.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => setNumberAllowed((prevValue) => !prevValue)}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className="cursor-pointer"
              onChange={() => setCharAllowed((prevValue) => !prevValue)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
