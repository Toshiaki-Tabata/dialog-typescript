import {useState} from 'react';
import Dialog from './component/Dialog';
import "./styles.css";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () : void => {
    setIsDialogOpen(true);
  }
  return (
    <div className="App">
      <h1>Dialog Test</h1>
      <h2>最適な動作をやってみましょう！</h2>
      <button onClick={openDialog} type="button">Open Dialog</button>
      <Dialog isOpen={isDialogOpen} onClose={() => {setIsDialogOpen(false)}}/>        
    </div>
  );
}
