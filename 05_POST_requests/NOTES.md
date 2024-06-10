
# POST REQUESTS

1. POST requests involve SENDING data to the server -> we are CREATING something.
    A. That means that we are sending some data in the ideal format -> JSON
2. How do we fire the fetch() call?
    A. fetch("where", {method, headers, body}) => [MDN Fetch POST](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)
3. How do I handle the newly created resource?
    A. The server will send back a response with the newly created resource.
    B. We can handle the response in the .then() block of the fetch() call.
    C. We can display the resource in the DOM pessimistically or optimistically.