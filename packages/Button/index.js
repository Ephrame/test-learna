'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var kindClass = props.kind ? 'btn-' + props.kind : '';
  return _react2.default.createElement(
    'button',
    Object.assign({ type: 'button', className: 'btn ' + kindClass + ' ' + (props.responsive ? '' : 'fixedSize') }, props),
    props.children
  );
};

Button.defaultProps = {
  responsive: true
};

Button.PropTypes = {
  responsive: _react.PropTypes.bool
};

Button.displayName = 'Button';
Button.__meta = require('./package.json');
exports.default = Button;
