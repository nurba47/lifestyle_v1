import React from 'react';
import Header from './components/header';
import DefaultRoutes from './routes';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
          <div>
            <Header />
            <DefaultRoutes />
            <Footer />
          </div>
    );
  }
}


export default App;