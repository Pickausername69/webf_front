import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.components'
import {FetchUrl} from './components/fetchdata.components'
import {CreateNewRow} from './components/creator.components'
import {UpdateRow} from './components/updater.components'
import {DeleteRow} from './components/deleter.components'

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNewRow />
      <FetchUrl />
      <UpdateRow />
      <DeleteRow />
    </div>
  );
}

export default App;
