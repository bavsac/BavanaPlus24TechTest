import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Options from './components/Options'
import SelectedOptions from './components/SelectedOptions'
import Coffee from './components/Coffee'

function App() {
  const [optionsList, setOptionsList] = useState([
    { name: 'milk', selected: true },
    { name: 'sugar', selected: false },
    { name: 'sprinkles', selected: true },
    { name: 'coco powder', selected: true },
    { name: 'cinnamon', selected: true },
    { name: 'make it Irish', selected: true },
    { name: 'add another shot', selected: true },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSelection, setShowSelection] = useState(false);
  return (
    <div className='App'>
      <Heading />
      
      <Options  optionsList={optionsList} setSelectedOptions={setSelectedOptions} setShowSelection={setShowSelection}/>
      <SelectedOptions selectedOptions={selectedOptions}/>
      <Coffee showSelection={showSelection}/>
    </div>
  );
}

export default App;
