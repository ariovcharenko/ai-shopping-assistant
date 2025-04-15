import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse, unquote

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Parse the URL path
        parsed_path = urlparse(path)
        path = unquote(parsed_path.path)
        
        # Get the current working directory
        cwd = os.getcwd()
        
        # If the path starts with /server or /ResearchEvaluation, 
        # make it relative to the project root
        if path.startswith('/server/') or path.startswith('/ResearchEvaluation/'):
            return os.path.join(cwd, path[1:])
        
        # Otherwise, make it relative to the ResearchEvaluation/visualization directory
        return os.path.join(cwd, 'ResearchEvaluation', 'visualization', path[1:])
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def run_server():
    # Change to the project root directory
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    # Create the server
    handler = CustomHTTPRequestHandler
    httpd = socketserver.TCPServer(("", PORT), handler)
    
    print(f"Serving visualization at http://localhost:{PORT}/index.html")
    print("Press Ctrl+C to stop the server")
    
    # Open the browser
    webbrowser.open(f"http://localhost:{PORT}/index.html")
    
    # Start the server
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()

if __name__ == "__main__":
    run_server()
