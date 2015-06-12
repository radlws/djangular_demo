from djangular.forms import NgFormValidationMixin, NgForm
from django import forms
from django.utils.translation import ugettext_lazy as _


class MyValidatedForm(NgFormValidationMixin, NgForm):

    form_name = 'my_valid_form'
    surname = forms.CharField(label='Surname', min_length=3, max_length=20)
    age = forms.DecimalField(min_value=18, max_value=99)

    def clean_surname(self):
        surname = self.cleaned_data.get('surname')
        if not surname:
            raise forms.ValidationError(_(u'You must enter a surname.'))
        return surname

    def clean_age(self):
        age = self.cleaned_data.get('age')
        if age == 19:
            raise forms.ValidationError(_(u'You must not be 19'))
        return age