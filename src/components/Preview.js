import React from 'react';
import { marked } from 'marked';
import Prism from "prismjs";
import '../styles/prism.css';
import '../styles/markdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';

marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});

export default function Preview({ input, isEditorExpanded, isPreviewExpanded, onClick }) {
    if (!isEditorExpanded) {
        return (
            <div className='row justify-content-center my-4'>
                <div className='col-md-8 col-12 px-0'>
                    <div className='d-flex justify-content-between header'>
                        <span className='ms-2'>Preview</span>
                        <a href='!#' onClick={onClick}>
                            {isPreviewExpanded ? <FontAwesomeIcon icon={faCompressAlt} className='align-self-center me-2' /> : <FontAwesomeIcon icon={faExpandAlt} className='align-self-center me-2' /> }
                        </a>
                    </div>
                    <div id='preview' className='w-100' dangerouslySetInnerHTML={{ __html: parsedText(input) }}></div>
                </div>
            </div>
        );  
    }
}

const parsedText = text => marked.parse(text);
