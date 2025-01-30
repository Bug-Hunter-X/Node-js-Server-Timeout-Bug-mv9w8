# Node.js Server Timeout Bug

This repository demonstrates a common issue in Node.js server development:  unhandled timeouts leading to unresponsive servers.

The `bug.js` file shows a server that introduces a 5-second delay before responding. This delay can cause client-side timeouts or other issues if the client's timeout settings are shorter.

The `bugSolution.js` file provides a solution to this problem.