
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataStart, getAnswer } from '../app/actions/chatActions';

const ChatAi = () => {
  const state = useSelector(state => state.chatState);
  const [prompt, setPrompt] = useState("");
  const dispatch = useDispatch();

  //veri alma
  const handleSubmit = () => {

    //loading
    dispatch(GetDataStart());
    
    //asenkron veri çekme
    dispatch(getAnswer(prompt));

    //input temizleme
    setPrompt("");


  }

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  console.log(state);


  return (
    <div className='chat'>
      <div className="list">
        {
          state.data.map((message) => (
            <>
              <p className='prompt'>{message.prompt}</p>
              <p className='answer'>{message.answer}</p>
            </>
          ))
        }
        {state.isLoading && "Mesaj yükleniyor..."}
      </div>
      <div className="form">
        <input value={prompt} onChange={handleChange} type="text" placeholder='Yapay zekadan bir şey isteyin...' />
        <button onClick={handleSubmit}>Gönder</button>
      </div>
    </div>
  )
}

export default ChatAi;