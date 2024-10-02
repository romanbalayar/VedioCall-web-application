import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // If you're using axios for HTTP requests

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: 'http://localhost:8000/api/v1/users',
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const response = await client.post('/register', {
        name,
        username,
        password,
      });
      if (response.status === 201) {
        return response.data.message;
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await client.post('/login', {
        username,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (err) {
      throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      let request = await client.get("/get_all_activity", {
        params: {
          token: localStorage.getItem("token")
        }
      }); 
      return request.data
    } catch (e){
      throw e
    }
  }

  const addToUserHistory = async(meetingCode) => {
    try {
      let request = await client.post("/add_to_activity",{
        token: localStorage.getItem("token"),
        meeting_code: meetingCode
      });
      return request
    } catch (e){
      throw e;
    }
  }

  const data = {
    userData,
    setUserData,
    addToUserHistory,
    getHistoryOfUser,
    handleRegister,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};
