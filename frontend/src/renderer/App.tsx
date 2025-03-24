import {
  MemoryRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SidePanel from './Components/SidePanel';
import Editor from './Components/Editor';
import TitleBar from './Components/TitleBar';
import Auth from './Components/Auth';
import { AppState } from './store';
import Settings from './Components/Settings';
import { logout } from './store/userSlice';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setInterval(async () => {
        const req = await fetch('http://localhost:3001/users/check-auth', {
          headers: {
            'content-type': 'application/json',
          },
          credentials: 'include',
        });
        const authRes = await req.json();
        if (!authRes.userId) {
          dispatch(logout());
        }
      }, 5000);
    })();
  }, [dispatch]);

  const auth = useSelector((state: AppState) => state.user.auth);

  return (
    <div>
      <TitleBar />
      <div className="relative bg-slate-200 text-slate-900 dark:text-white dark:bg-slate-800">
        {!auth ? <Auth /> : <Outlet />}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="flex gap-1 relative z-0">
      <SidePanel />
      <Editor />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
