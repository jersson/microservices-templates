class ErrorHandler():
    def __init__(self, error):
        super().__init__()
        self.message = error.message
        self.status = error.status
        self.stacktrace = error.stacktrace

    def sendToConsole(self):
        print(" * Message: {0}".format(self.message))
        print(" * StatusCode: {0}".format(self.status))
        print(" * StackTrace: {0}".format(self.stacktrace))

    def httpResponse(self):
        response = dict()
        response['Message'] = self.message
        response['StatusCode'] = self.status
        response['Type'] = 'internal'

        return response