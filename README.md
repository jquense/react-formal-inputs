a react-widgets adapter for react-formal

```
  var Form = require('react-formal')
    , types = require('react-formal-inputs')

  Form.addInputTypes(types)
```

Sets the default component to a react-widget for the relevant builtin input and schema types: `'date'`, `'time'`, `'array'`, in addition it defines the following extra types you can use in `<Form.Field type`, 
each corresponds a specific `react-widget` you wish to use

- 'combobox'
- 'dropdownlist'
- 'multiselect'
- 'selectlist'
- 'datepicker'
- 'timepicker'
- 'datetimepicker'
- 'calendar'

Just specify the string type of the widget you want for your field and pass in any additional parameters

```jsx
<Form.Field 
  name='contact' 
  type='dropdownlist' 
  data={list} 
  valueField='id' 
  textField='name'
/>
```
