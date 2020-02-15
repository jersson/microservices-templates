#based on: http://shzhangji.com/blog/2018/04/07/error-handling-in-restful-api/
class InternalError(Exception):
    """Custom exception class to be thrown when local error occurs."""
    def __init__(self, message, status=400, stacktrace=None):
        self.message = message
        self.status = status
        self.stacktrace = stacktrace