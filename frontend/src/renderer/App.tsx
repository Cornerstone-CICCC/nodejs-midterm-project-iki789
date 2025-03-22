import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import SidePanel from './Components/SidePanel';
import Editor from './Components/Editor';
import TitleBar from './Components/TitleBar';
import Auth from './Components/Auth';
import store from './store';

function Main() {
  return (
    <Provider store={store}>
      <div>
        <TitleBar />
        <div className="relative">
          <Auth />
          <div className="flex gap-2 relative z-0">
            <SidePanel />
            <Editor initialData={{ blocks: [] }} />
          </div>
        </div>
      </div>
    </Provider>
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
