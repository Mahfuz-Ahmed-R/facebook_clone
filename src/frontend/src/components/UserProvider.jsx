import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a UserContext with an initial value of null
const UserContext = createContext(null);

// Custom hook to access user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  // Initialize user state by checking local storage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null; // Return parsed user data or null
  });

  // Effect to update local storage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Store user data in local storage
    } else {
      localStorage.removeItem('user'); // Remove user data if null
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
