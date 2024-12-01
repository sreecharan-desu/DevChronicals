import './App.css';
import { Conv } from './components/Conversation';
import { Navbar } from './components/Navbar';
import { Prompt } from './components/Prompt';

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#202124] text-white">
      <Navbar />
      <div className="flex-grow flex flex-col justify-between">
        <Conv />
        <Prompt />
      </div>
    </div>
  );
}

export default App;
