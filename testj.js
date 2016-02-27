var data = [{"id":1,"address":"1721 Martin Luther King Jr Way S, Seattle, WA","lat":47.587682,"long":-122.298429,"description":"shitbarf tag on bus stop","artist":"shitbarf","photographer":"Anon","type":"tag","image":"http://i.stack.imgur.com/ijSS5.png","createdAt":"2016-02-27T04:51:31.535Z","updatedAt":"2016-02-27T04:51:31.535Z"},{"id":2,"address":"520 pike st seattle wa","lat":47.6112805,"long":-122.33503259999998,"description":"pablo testing","artist":"anonymous","photographer":"anonymous","type":"Installation","image":"data:image/png;base64,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f/PS0pKwc9Kzvr4+2qH29PS0cIcyj5uYHM/udfvq1auRx1dN09za2hpmhsAzrYXmyfr19fXR9ktXV1c3NjaGWXJqaiqZTMq7Mf1CoVAqlRpy5oQHTUzOOF9j9FCJROLt27cP3d/rzQoaZuFnWgv9r8uuVCqHh4dDfiuVcxPbh97yyDCMs7Ozw8PDe7+8zufzxePxeDw+wrGBB008uj/++GPIqzeHdO+X6TYaja9fv15cXNw7GmSa5qtXr1ZXV0eYo/O8aqEfQkez2by6uiqVSs6FZ+122znBapqm3+8PhUKzs7OxWGzMWYvFYtG5uWWtVut0Ok4TlmUFg8GZmRnnRpdj7pN40MT/A+122/mGyUql4sye6XQ6pmlalhUIBEKh0Pz8/Pz8/JhT5J5LLZ5KCIH/LP09IuA/jhACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGgjBACygghoIwQAsoIIaCMEALKCCGg7H8anG8uP42yfAAAAABJRU5ErkJggg==","createdAt":"2016-02-27T04:52:01.125Z","updatedAt":"2016-02-27T04:52:01.125Z"}]
