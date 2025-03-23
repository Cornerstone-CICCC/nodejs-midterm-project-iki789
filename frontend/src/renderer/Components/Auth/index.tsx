import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import Loading from '../Loading';

function Auth() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

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
    });
    const res = await req.json();

    if (res.error) {
      setError(res.error);
      return;
    }

    if (!isRegister && res.success) dispatch(login(res));
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

  return (
    <div className="absolute top-0 left-0 bg-gray-800 w-svw h-svh z-10">
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
                className=" w-full py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:cursor-pointer hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-0 focus:outline-none focus:ring-white focus:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400 inline-flex items-center justify-center"
              >
                {isLoading && <Loading />}
                {!isLoading && (!isRegister ? 'Login' : 'Create account')}
              </button>
              <div className="text-center mt-5">
                <button
                  type="button"
                  className="text-xs text-center text-gray-400 hover:text-blue-400"
                  onClick={() => setIsRegister(!isRegister)}
                >
                  {isRegister
                    ? 'Already have an account?'
                    : "Don't have an account?"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
