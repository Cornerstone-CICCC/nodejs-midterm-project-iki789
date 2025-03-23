import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import SidePanel from './Components/SidePanel';
import Editor from './Components/Editor';
import TitleBar from './Components/TitleBar';
import Auth from './Components/Auth';
import { AppState } from './store';

function Main() {
  const auth = useSelector((state: AppState) => state.user.auth);

  return (
    <div>
      <TitleBar />
      <div className="relative">
        {!auth ? (
          <Auth />
        ) : (
          <div className="flex gap-2 relative z-0">
            <SidePanel />
            <Editor initialData={{ blocks: [] }} />
          </div>
        )}
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
