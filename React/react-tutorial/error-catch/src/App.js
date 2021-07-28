import './App.css';
import User from './User'

function App() {
  const user = {
    id: 1,
    username: 'lin'
  };
  return (
    <ErrorBoundary>
      <User />
  </ErrorBoundary>
);
}

export default App;
