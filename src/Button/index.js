import React, {PropTypes} from 'react'

const Button = (props) => {
  const kindClass = props.kind ? `btn-${props.kind}` : ``
  return <button type='button' className={`btn ${kindClass} ${props.responsive ? '' : 'fixedSize'}`} {...props} >{props.children}</button>
}

Button.defaultProps = {
  responsive: true
}

Button.PropTypes = {
  responsive: PropTypes.bool
}

Button.displayName = 'Button'
Button.__meta = require('./package.json')
export default Button
