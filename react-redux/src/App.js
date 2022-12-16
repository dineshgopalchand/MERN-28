import './App.css';
import Counter from './Counter';
import Todo from './Todo';

function App() {
  return (
    <>
      <div style={{ 'textAlign': 'center' }}>
        <Counter />

      </div>
      <div style={{ 'textAlign': 'left' }}>

        <Todo />
      </div>
    </>

  );
}

export default App;
