import React from 'react';

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1000px',
    backgroundColor: '#6ef309', 
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '350px'
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#0af47f',
    marginBottom: '20px'
  };

  const inputContainerStyle = {
    marginBottom: '15px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box', 
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={headerStyle}>Student Registration Form</h2>

        <div style={inputContainerStyle}>
          <input type="text" placeholder="Student Name" style={inputStyle} />
        </div>

        <div style={inputContainerStyle}>
          <input type="email" placeholder="Email" style={inputStyle} />
        </div>

        <div style={inputContainerStyle}>
          <input type="password" placeholder="Password" style={inputStyle} />
        </div>

        <div style={inputContainerStyle}>
          <input type="text" placeholder="Course" style={inputStyle} />
        </div>

        <div style={inputContainerStyle}>
          <input type="tel" placeholder="Mobile Number" style={inputStyle} />
        </div>

        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
};

export default App;