import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { login } from '../../store/userSlice';
import { setUser, getUser } from '../../utils/userStorage';
import Loading from '../Loading';

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState(''); // itachi@uchiha.com
  const [defaultPass, setDefaultPass] = useState(''); // gus
  const [error, setError] = useState('');
  const [authWithTouchId, setAuthWithTouchId] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const hasLocalUser = getUser();

  useEffect(() => {
    setError('');
  }, [isRegister]);

  const handleFormRequest = async (formData: unknown) => {
    const url = `http://localhost:3001/users/${isRegister ? 'register' : 'login'}`;
    const req = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
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

    if (!isRegister && res.success) {
      dispatch(login(res));
      setUser({
        // @ts-ignore
        email: formData.email,
      });
      navigate('/');
    }
    if (isRegister) {
      setIsRegister(!isRegister);
      // eslint-disable-next-line no-alert
      alert('Successfully created your account!✅');
    }
    if (error) setError('');
    formRef.current?.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);

    await handleFormRequest(Object.fromEntries(formData));

    setIsLoading(false);
  };

  const handleTouchId = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['touchid']);
    window.electron.ipcRenderer.on('ipc-example', (arg) => {
      // eslint-disable-next-line no-console
      if (arg === true) {
        dispatch(login(true));
        navigate('/');
      }
      setAuthWithTouchId(arg as boolean);
    });
  };

  return (
    <div className="absolute top-0 left-0 bg-slate-100 dark:bg-gray-800 w-svw h-svh z-10">
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
            {isRegister && (
              <div className="mb-2">
                <input
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:outline-0"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
            )}
            <div className="mb-2">
              <input
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:outline-0"
                type="email"
                name="email"
                placeholder="Email"
                value={defaultEmail}
                onChange={(e) => setDefaultEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-0"
                type="password"
                name="password"
                placeholder="Password"
                value={defaultPass}
                onChange={(e) => setDefaultPass(e.target.value)}
              />
            </div>
            {isRegister && (
              <div className="mb-2">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-0"
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                />
              </div>
            )}
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
                {!isLoading && (!isRegister ? 'Login' : 'Create account')}
              </button>
              <div className="text-center mt-5">
                <button
                  type="button"
                  className="text-xs text-center dark:text-gray-400 dark:hover:text-blue-400"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </button>
              </div>
              {hasLocalUser && (
                <div className="flex justify-center mt-8">
                  <button
                    type="button"
                    className={`w-[32px] h-[32px] flex justify-center items-center rounded-full border-1 transition-all duration-400 ${authWithTouchId && 'text-blue-500 border-blue-500 dark:text-blue-500 dark:border-blue-500'} ${authWithTouchId === null && 'dark:border-slate-500 dark:text-slate-500'} ${authWithTouchId === false && 'border-red-500 text-red-500 dark:border-red-500 dark:text-red-500'}`}
                    onClick={handleTouchId}
                  >
                    <MdFingerprint size={24} className="cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
