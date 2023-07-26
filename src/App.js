import { useState } from "react";
import ChatAi from "./components/chatAi";

function App() {
  const [isChatMode,setIsChatMode] = useState(true);
  
  const handleClick = ()=>{
    setIsChatMode(!isChatMode);
  }
  
  return (
    <div className="chat-bot">
      <h1>Nasıl yardımcı olabilirim ?</h1>
      <ChatAi/>
    </div>
  );
}

export default App;
