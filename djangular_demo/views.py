
from django.views.generic import TemplateView

from forms import MyValidatedForm


class MyRenderingView(TemplateView):

    template_name = "default/test.html"

    def get_context_data(self, **kwargs):
        context = super(MyRenderingView, self).get_context_data(**kwargs)
        context.update(form=MyValidatedForm())
        return context

my_rendering = MyRenderingView.as_view()