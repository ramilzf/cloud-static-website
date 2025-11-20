// Netlify serverless function: hello
// Path: netlify/functions/hello.js

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Hello from serverless!",
      author: "Ramil",
      student_id: "55394",
      course: "Application and Internet Services"
    })
  };
};
