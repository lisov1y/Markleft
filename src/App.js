import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App( {initialText} ) {
  const [input, setInput] = useState(initialText);
  const [expandedEditor, setExpandEditor] = useState(false);
  const [expandedPreview, setExpandPreview] = useState(false);
  const [isArrowClicked, setArrowClick] = useState(false);
  const handleInput = (e) => setInput(e.target.value);
  const handleEditorClick = () => setExpandEditor(!expandedEditor);
  const handlePreviewClick = () => setExpandPreview(!expandedPreview);
  const handleArrowClick = () => setArrowClick(!isArrowClicked);

  return (
    <div className='container min-vh-100'>
      <div className='text-center'>
          <h1 className='mb-0'>Markleft <span id='arrow-click' onClick={handleArrowClick}>
            {isArrowClicked ? <FontAwesomeIcon icon={faArrowLeft} spin /> : <FontAwesomeIcon icon={faArrowLeft} />}
            </span></h1>
          <p className='mb-0 text-secondary'>A simple markdown editor</p>
      </div>
      <Editor input={input} onChange={handleInput} onClick={handleEditorClick} isEditorExpanded={expandedEditor} isPreviewExpanded={expandedPreview} />
      <Preview input={input} onClick={handlePreviewClick} isPreviewExpanded={expandedPreview} isEditorExpanded={expandedEditor} />
    </div>
  );
}

export default App;
