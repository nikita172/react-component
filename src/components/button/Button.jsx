import React from 'react'
import "./button.css"
const Button = (props) => {
  return (
    <div className="buttonOuter"
      style={{
        justifyContent: props.styles.align == "left" ?
          "flex-start" : props.styles.align == "center" ?
            "center" : props.styles.align == "right" ? "flex-end" : ""
      }}>
      <div className="buttonInner"
        style={{
          background: props.styles.background,
          color: props.styles.color,
          fontFamily: props.styles.fontFamily,
          fontWeight: props.styles.fontWeight,
          fontSize: props.styles.fontSize,
        }}
      >
        {props.styles.text}
      </div>
    </div>

  )
}

export default Button