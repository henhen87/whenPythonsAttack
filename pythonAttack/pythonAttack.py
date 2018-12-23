import os
import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)

class MainPage(webapp2.RequestHandler):
  def get(self):
		print('FILE {}'.format(__file__))
		print('PATH ABS {}'.format(os.path.abspath(__file__)))
		VIEW = os.path.join(os.getcwd(), 'dist', 'index.html')
		print('VIEEWWWWWWW {}'.format(VIEW))
		url = 'python.gif'

		template_values = {
			'url': url
		}

		template = JINJA_ENVIRONMENT.get_template(VIEW)
		self.response.write(template.render(template_values))


app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
