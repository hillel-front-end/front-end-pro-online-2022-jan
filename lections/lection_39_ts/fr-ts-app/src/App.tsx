import React from 'react';
import './App.css';
import Button, { ButtonProps } from './components/Button';
import Table from './components/Table';

function App() {

  const buttonConfigs: ButtonProps = {
    title: 'Title',
  };

  return (
    <div className="App">
      <Button {...buttonConfigs} />
      <Table title="table test"/>
    </div>
  );
}

export default App;
