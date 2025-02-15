# Express.js Request Timeout Bug

This repository demonstrates a common, yet often overlooked, issue in Express.js applications: request timeouts.  Long-running requests can exceed default server timeout limits, resulting in unexpected errors for both the client and server.

The `bug.js` file showcases the problem.  The `bugSolution.js` file presents a solution to avoid unexpected timeouts.  This is a critical aspect of building robust and reliable server-side applications.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.  You can see the 'Request timed out' message in console. 
4. Run `node bugSolution.js` to see the solution.

## Key Concepts

* **Request Timeouts:**  Understanding default timeout limits in Express.js and how they affect long-running requests.
* **Error Handling:** Implementing robust error handling to gracefully manage timeouts and other potential issues.
* **Asynchronous Operations:**  Properly handling asynchronous operations to prevent blocking the main thread.
* **Setting Timeouts:**  Understanding how to set custom timeouts using `setTimeout` and `clearTimeout`.