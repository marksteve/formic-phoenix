import 'phoenix_html'
import 'blissfuljs'
import onmount from 'onmount'

function createField(i) {
  return {tag: 'p', className: 'flex', contents: [
    {tag: 'label', className: 'flex-auto mr2', contents: [
      {tag: 'span', textContent: 'Field name'},
      {tag: 'input', name: `form[fields][${i}][name]`, placeholder: 'e.g. Name, Email, Mobile'},
    ]},
    {tag: 'label', className: 'col-4', contents: [
      {tag: 'span', textContent: 'Field type'},
      {tag: 'select', name: `form[fields][${i}][type]`, contents: [
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
      formFields._.contents([createField(formFields.children.length)])
    }
    $('[role=add-field]', this)._.events({click: addField})
    if (!formFields.children.length) {
      addField()
    }
  })
  onmount()
})
