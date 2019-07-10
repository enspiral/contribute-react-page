import React from 'react'

function Step (props) {
  const {linkTo, text, boldStep} = props
  const style = linkTo ? {cursor: "pointer"} : {}
  return(
    <a onClick={linkTo} style={style}><p className={boldStep} >{text}</p></a>
  )
}

export default Step