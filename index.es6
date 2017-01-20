let React = require('react')
  , widgets = require('react-widgets');

function createInput(Component, defaults){
  return class FormInput extends React.Component {
    static defaultProps = defaults || {}
    render() {
      const { meta, ...props } = this.props;
      return <Component {...props} />
    }
  }
}

let types = Object.create(null);

types.combobox = createInput(widgets.Combobox)
types.dropdownlist = createInput(widgets.DropdownList)
types.calendar = createInput(widgets.Calendar)
types.selectlist = createInput(widgets.SelectList)

types.date =
  types.datepicker = createInput(widgets.DateTimePicker, { time: false })

types.time =
  types.timepicker = createInput(widgets.DateTimePicker, { calendar: false, date: false })

types.datetime =
  types['datetime-local'] =
     types.datetimepicker = createInput(widgets.DateTimePicker)

types.number =
  types.numberpicker = createInput(widgets.NumberPicker)

types.array =
  types.multiselect = createInput(widgets.Multiselect)

module.exports = types
