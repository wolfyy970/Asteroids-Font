from http.server import HTTPServer, SimpleHTTPRequestHandler
import mimetypes

class CustomHandler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.endswith('.js'):
            return 'application/javascript'
        return super().guess_type(path)

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CustomHandler)
    print('Server running at http://localhost:8000')
    httpd.serve_forever()
