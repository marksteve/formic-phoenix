import 'phoenix_html'
import 'blissfuljs'
import onmount from 'onmount'

function createField() {
  return {tag: 'p', className: 'flex', contents: [
    {tag: 'label', className: 'flex-auto mr2', contents: [
      {tag: 'span', textContent: 'Field name'},
      {tag: 'input', name: 'field_name[]', placeholder: 'Meal'},
    ]},
    {tag: 'label', className: 'flex-auto', contents: [
      {tag: 'span', textContent: 'Field type'},
      {tag: 'select', name: 'field_type[]', contents: [
        {tag: 'option', value: 'input', textContent: 'Input'},
        {tag: 'option', value: 'textarea', textContent: 'Textarea'},
        {tag: 'option', value: 'radio', textContent: 'Radio'},
        {tag: 'option', value: 'select', textContent: 'Select'},
        {tag: 'option', value: 'checkbox', textContent: 'Checkbox'},
      ]},
    ]},
  ]}
}

document.addEventListener('DOMContentLoaded', function () {
  onmount('[role=create-form]', function () {
    const formFields = $('[role=form-fields]', this)
    const addField = (e) => {
      e && e.preventDefault()
      formFields._.contents([createField()])
    }
    $('[role=add-field]', this)._.events({click: addField})
    addField()
  })
  onmount()
})
