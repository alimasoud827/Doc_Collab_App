import React from 'react'

const toolbar = (typePage) => {
  const format = (command) => {
    if (command === 'bold') {
      document.execCommand('bold');
    } else if (command === 'italic') {
      document.execCommand('italic');
    } else if (command === 'underline') {
      document.execCommand('underline');
    }
  }
  const addPage = () => {
    document.body.appendChild(typePage);
  }
  return (
    <div class="toolbar">
      <button onClick={format('bold')}>Bold</button>
      <button onclick={format('italic')}>I</button>
      <button onclick={format('underline')}>U</button>
      <button onclick={addPage()}>Add Page</button>
  </div>
  )
}

export default toolbar
