import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SidePanel from './Components/SidePanel';
import Editor from './Components/Editor';

function Main() {
  return (
    <div>
      <div
        /* @ts-ignore */
        style={{ appRegion: 'drag' }}
        className="bg-slate-700 text-center text-sm h-8 flex items-center justify-center font-bold rounded-tl-xl rounded-tr-xl"
      >
        Electro Notes
      </div>
      <div className="flex gap-2">
        <SidePanel />
        <Editor />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
