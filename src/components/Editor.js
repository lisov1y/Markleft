import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';

export default function Editor({ input, onChange, onClick, isEditorExpanded, isPreviewExpanded }) {
    if (isEditorExpanded) {
        autosize(document.getElementById('editor'));
    } else {
        autosize.destroy(document.getElementById('editor'));
    }
    if (!isPreviewExpanded) {
        return (
            <div className='row justify-content-center my-4'>
                <div className='col-md-6 col-sm-10 col-12'>
                    <div className='d-flex justify-content-between header'>
                        <span className='ms-2'>Editor</span>
                        <a href='!#' onClick={onClick}>
                            {isEditorExpanded ? <FontAwesomeIcon icon={faCompressAlt} className='align-self-center me-2' /> : <FontAwesomeIcon icon={faExpandAlt} className='align-self-center me-2' /> }
                        </a>
                    </div>
                    <textarea id='editor' className='w-100' value={input} onChange={onChange} ></textarea>
                </div>
            </div>
        );
    }
}

