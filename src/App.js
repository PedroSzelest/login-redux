import React, { useState, useEffect } from "react";
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import AppRouter from './router/AppRouter';
import { Container } from "react-bootstrap";
import Loading from "./components/loading/Loading"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [])

  if(loading) {
    return (
      <Loading />
    )
  } else {
    return (
        <Provider store={store}>
          <Router>
            <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh"}}
            >
                <AppRouter />
            </Container>
          </Router>
        </Provider>
    );
  }

}

export default App;
