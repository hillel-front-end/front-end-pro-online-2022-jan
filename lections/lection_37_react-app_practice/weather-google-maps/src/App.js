import logo from './logo.svg';
import './App.css';
import GoogleMapRoot from './components/GoogleMapRoot';
import WeatherContainer from './components/WeatherContainer';
import WeatherTransportWrapper from './components/WeatherTransportWrapper';
import Button from '@mui/material/Button';
import ModalCommon from './components/ModalCommon/ModalCommon';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';


export const ModalContext = createContext();

function App() {
  // Ref - Reference
  const textAreaRef = useRef(null);

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalConfigs, setModalConfigs] = useState({});

  const modalContextValue = {
    isModalVisible, 
    modalConfigs,
    showModal(props = {}) {
      setModalConfigs({...modalConfigs, ...props});
      setModalVisible(true);
    },
    closeModal() {
      setModalVisible(false);
    }
  }

  const onShowModal = useCallback(() => {
    modalContextValue.showModal({
      title: 'Big title'
    });
  }, [modalContextValue]);

  return (
    <div className="App">
      <ModalContext.Provider value={modalContextValue}>
        <WeatherTransportWrapper />
        <div className="Modal-Control">
          <Button
            onClick={onShowModal}
          >
            {isModalVisible ? 'Hide' : 'Show'}
            </Button>
        </div>

        <ModalCommon />
      </ModalContext.Provider>

      {/* Modal Window */}
      {/* React Context */}

      {/* Refs */}
      {/* PropTypes */}
      {/* ------- */}
      {/* Typescript Intro */}
      <textarea 
        ref={textAreaRef}
        id="test-area" 
        onChange={() => {}} 
        value="Some example text">
      </textarea>
    </div>
  );
}

export default App;
