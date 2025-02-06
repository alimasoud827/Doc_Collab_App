import React from 'react'
import Toolbar from '../toolbar/toolbar'

const Body = () => {
  return (
    <div class="body">
        <Toolbar typePage={
            <>
                <div class="editor-container" contenteditable="true" plac>
                    <p>Write something here...</p>
                </div>
            </>
        }  />
        <div class="editor-container" contenteditable="true" plac>
            <p>Write something here...</p>
        </div>
    </div>
  )
}

export default Body
