var React = require('react')
  , widgets = require('react-widgets');

function wrapWithDefaults(Component, defaults){
  function WrappedWithDefaults(props) {
    return { 
      props: props,
      render: function(){
        return React.createElement(Component, this.props)
      }
    }
  }

  WrappedWithDefaults.defaultProps = defaults

  return WrappedWithDefaults
}

var types = Object.create(null);


types.combobox       = widgets.Combobox
types.dropdownlist   = widgets.DropdownList
types.calendar       = widgets.Calendar
types.selectlist     = widgets.SelectList

types.date           =
  types.datepicker   = wrapWithDefaults(widgets.DateTimePicker, { time: false })

types.time           =
  types.timepicker   = wrapWithDefaults(widgets.DateTimePicker, { date: false })

types.datetime =
types['datetime-local'] = 
  types.datetimepicker  = widgets.DateTimePicker

types.number         = 
  types.numberpicker = widgets.NumberPicker

types.array          =
  types.multiselect  = widgets.Multiselect

module.exports = types