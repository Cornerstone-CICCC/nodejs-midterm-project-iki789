import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { getUser, removeUser } from '../../utils/userStorage';
import Loading from '../Loading';
import ButtonIcon from '../ButtonIcon';
import { logout } from '../../store/userSlice';

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const fetchUserDetails = async () => {
    const user = getUser();
    if (!user) return;

    const url = `http://localhost:3001/users/${user.email}`;
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const res = (await req.json()) as User;

    setUserDetails(res);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleFormRequest = async (formData: Omit<User, 'id'>) => {
    const url = `http://localhost:3001/users/update`;
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ ...formData, id: userDetails?.id }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const res = await req.json();

    if (res.error) {
      setError(res.error);
      return;
    }
    // eslint-disable-next-line no-alert
    alert('Successfully updated your details ✅');
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    await handleFormRequest(Object.fromEntries(formData) as Omit<User, 'id'>);

    setIsLoading(false);
  };

  const logoutUser = () => {
    fetch('http://localhost:3001/users/logout', {
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
    });
    dispatch(logout());
    removeUser();
  };

  return (
    <div className="absolute top-0 left-0 p-2 bg-slate-100 dark:bg-gray-800 w-svw h-svh z-10">
      <div className="flex justify-between">
        <ButtonIcon onClick={() => navigate('/')}>
          <FiArrowLeft />
        </ButtonIcon>
        <ButtonIcon onClick={logoutUser}>
          <span className="text-xs text-slate-800 dark:text-slate-400">
            Logout
          </span>
        </ButtonIcon>
      </div>
      <div className="grid h-full">
        <div className="place-self-center">
          <form className="w-[260px]" onSubmit={handleSubmit} ref={formRef}>
            <div className="w-full text-center">
              <img
                className="w-20 mb-5 rounded-full select-none inline border-gray-200 border-2"
                style={{ MozWindowDragging: 'no-drag' }}
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="profile"
              />
            </div>
            <div className="mb-2">
              <input
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:outline-0"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  // @ts-ignore
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
                value={userDetails?.name}
              />
            </div>
            <div className="mb-2">
              <input
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:outline-0"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  // @ts-ignore
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
                value={userDetails?.email}
              />
            </div>
            <div className="mb-2">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-0"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-2">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-0"
                type="password"
                name="password2"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mb-2">
              {error && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-500">
                  {error}
                </p>
              )}
            </div>
            <div className="mb-2">
              <button
                disabled={isLoading}
                type="submit"
                className=" w-full py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:cursor-pointer hover:bg-slate-300 hover:text-black focus:z-10 focus:ring-0 focus:outline-none focus:ring-white focus:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400 inline-flex items-center justify-center"
              >
                {isLoading && <Loading />}
                {!isLoading && 'Update account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
