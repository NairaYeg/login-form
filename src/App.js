import { useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName,
      password,
    };

    setUser(user);

    alert(JSON.stringify(user));
  };

  const handleSetUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const handleSetPass = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  useEffect(() => {
    if (user) {
      document.title = user.userName;
    }
  }, [user]);

  return (
    <>
      <h1>Login Form</h1>
      <div class="container">
        <Form
          handleSubmit={handleSubmit}
          handleSetUserName={handleSetUserName}
          handleSetPass={handleSetPass}
        />
      </div>
    </>
  );
}

export default App;
