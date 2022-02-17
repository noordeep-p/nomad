/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';

const userContext = React.createContext();
const userUpdateContext = React.createContext();

export function currentUser() {
  return useContext(userContext);
}

export function userUpdate() {
  return useContext(userUpdateContext);
}

export function UserContext({ children }) {
  const [user, setUser] = useState();

  function updateUser(data) {
    if (data) {
      setUser(data.username);
      localStorage.setItem('username', data.username);
      localStorage.setItem('userId', data._id);
    }
  }

  return (
    <userContext.Provider value={user}>
      <userUpdateContext.Provider value={updateUser}>
        {children}
      </userUpdateContext.Provider>
    </userContext.Provider>
  );
}
