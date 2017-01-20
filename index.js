'use strict';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    widgets = require('react-widgets');

function createInput(Component, defaults) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(FormInput, _React$Component);

    function FormInput() {
      _classCallCheck(this, FormInput);

      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    FormInput.prototype.render = function render() {
      var _props = this.props,
          meta = _props.meta,
          props = _objectWithoutProperties(_props, ['meta']);

      return React.createElement(Component, props);
    };

    return FormInput;
  }(React.Component), _class.defaultProps = defaults || {}, _temp;
}

var types = Object.create(null);

types.combobox = createInput(widgets.Combobox);
types.dropdownlist = createInput(widgets.DropdownList);
types.calendar = createInput(widgets.Calendar);
types.selectlist = createInput(widgets.SelectList);

types.date = types.datepicker = createInput(widgets.DateTimePicker, { time: false });

types.time = types.timepicker = createInput(widgets.DateTimePicker, { calendar: false, date: false });

types.datetime = types['datetime-local'] = types.datetimepicker = createInput(widgets.DateTimePicker);

types.number = types.numberpicker = createInput(widgets.NumberPicker);

types.array = types.multiselect = createInput(widgets.Multiselect);

module.exports = types;
