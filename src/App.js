import './App.css';
import ColorPicker from './components/Task3';

function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  return (
    <>
    
  <div className='center'>
      <ColorPicker colors={colors} />
</div>

    </>
    
  );
}

export default App;
