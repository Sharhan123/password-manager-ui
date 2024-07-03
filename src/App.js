import logo from './logo.svg';
import './App.css';
import UserRouter from './routes/userRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

  <UserRouter/>
  </Provider>
  );
}

export default App;
