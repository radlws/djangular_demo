from djangular.forms import NgFormValidationMixin, NgForm
from django import forms


class MyValidatedForm(NgFormValidationMixin, NgForm):

    form_name = 'my_valid_form'
    surname = forms.CharField(label='Surname', min_length=3, max_length=20)
    age = forms.DecimalField(min_value=18, max_value=99)