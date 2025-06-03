import { createContext, useState, useEffect, useCallback } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Carregar usuários do localStorage ao iniciar
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Salvar usuários no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Adicionar novo usuário
  const addUser = useCallback((user) => {
    const newUser = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    return newUser;
  }, []);

  // Remover usuário
  const removeUser = useCallback((userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }, []);

  return (
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
