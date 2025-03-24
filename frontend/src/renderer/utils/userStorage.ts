export const getUser = (): { email: string } | null => {
  const user = window.localStorage.getItem('user');
  if (user) {
    return JSON.parse(user) as { email: string };
  }
  return null;
};

export const setUser = (user: { email: string }) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = () => {
  window.localStorage.removeItem('user');
};
