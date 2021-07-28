import './App.css';
import { useDispatch, useSelector } from "react-redux"

import { fetchData } from './store/actionCreators';
import { useEffect, useState } from 'react';


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.data)
  const [authorData, setAuthorData] = useState(null)
  const [inputtext, setInputtext] = useState("")
  console.log("data", data);


  useEffect(() => {
    if (data) {
      setAuthorData(data?.data)
    } else {

      dispatch(fetchData())
    }

  }, [dispatch, data])


  const handleChangeSearch = (e) => {
    setInputtext(e?.target?.value)
    const suggestedData = authorData?.filter((el, idx) => {
      return el?.author?.match(e?.target?.value)
    })
    if (
      suggestedData?.length
    ) {
      setAuthorData(suggestedData)
    }
    if (e?.target?.value?.trim() === "" && data?.data) {
      setAuthorData(data?.data)
    }
  }

  const handleReset = () => {
    setInputtext("")
  }

  return (
    <div className="App">
      <input id="" onChange={handleChangeSearch} value={inputtext} />
      <button onClick={handleReset}>Reset</button>
      {authorData?.map((element,idx) => {
        return (
          <div key={element?.title||idx}>
            <p>{element?.author}</p>
          </div>
        )
      })}
    </div>

  );
}



export default App;
