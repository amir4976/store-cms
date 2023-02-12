import React from 'react'
import './errorBox.css'
function ErrorBox({title,isEmpty}) {
  return (
    <div className='cmd-error-box'>
        <h1  >هیچ {title} یافت نشد</h1>
    </div>
  )
}

export default ErrorBox