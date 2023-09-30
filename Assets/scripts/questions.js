const javascriptQuestions = [
  {
    Question: "What is the output of typeof null in JavaScript?",
    correctAnswer: "object",
    allAnswers: ["number", "string", "boolean", "object"],
  },
  {
    Question: "What does JSON stand for?",
    correctAnswer: "JavaScript Object Notation",
    allAnswers: [
      "JavaScript Object Notation",
      "JavaScript Output Network",
      "JavaScript On-Demand Navigator",
      "JavaScript Object Naming",
    ],
  },
  {
    Question: "What is the purpose of the 'if' statement in JavaScript?",
    correctAnswer: "Conditional execution of code",
    allAnswers: [
      "Defining a function",
      "Looping through an array",
      "Conditional execution of code",
      "Declaring a class",
    ],
  },
  {
    Question: "What does 'NaN' stand for in JavaScript?",
    correctAnswer: "Not-a-Number",
    allAnswers: [
      "No-access-Node",
      "Not-a-Number",
      "Non-alphabet",
      "Null-and-None",
    ],
  },
  {
    Question: "How can you comment a single line of code in JavaScript?",
    correctAnswer: "//",
    allAnswers: ["/*", "//", "--", "<--"],
  },
  {
    Question: "What is the 'this' keyword used for in JavaScript?",
    correctAnswer: "Refers to the current object",
    allAnswers: [
      "Declaring a function",
      "Creating a new variable",
      "Refers to the current object",
      "Accessing the DOM",
    ],
  },
  {
    Question: "How do you comment out multiple lines of code in JavaScript?",
    correctAnswer: "/* */",
    allAnswers: ["//", "/* */", "<!-- -->", "##"],
  },
  {
    Question: "Which method is used to add an element to the end of an array?",
    correctAnswer: "push()",
    allAnswers: ["add()", "append()", "push()", "insert()"],
  },
  {
    Question: "What is the purpose of the 'for' loop in JavaScript?",
    correctAnswer: "Iterating over a block of code",
    allAnswers: [
      "Declaring a function",
      "Conditional execution of code",
      "Iterating over a block of code",
      "Creating a class",
    ],
  },
  {
    Question: "What does the '!==' operator do in JavaScript?",
    correctAnswer: "Checks if two values are not equal in value and type",
    allAnswers: [
      "Checks if two values are equal in value but not in type",
      "Checks if two values are not equal in value and type",
      "Assigns a value to a variable",
      "Checks if two values are strictly equal",
    ],
  },
  {
    Question:
      "What is the difference between '==' and '===' operators in JavaScript?",
    correctAnswer:
      "'==' checks for equality in value, while '===' checks for equality in value and type.",
    allAnswers: [
      "'==' checks for equality in value, while '===' checks for equality in value and type.",
      "'==' is used for assignment, while '===' is used for comparison.",
      "'==' is the same as '!=' in reverse, while '===' is the same as '!=='.",
      "'==' performs a strict comparison, while '===' performs a loose comparison.",
    ],
  },
  {
    Question: "What is a closure in JavaScript?",
    correctAnswer:
      "A function that has access to its outer function's variables.",
    allAnswers: [
      "A function that has access to global variables.",
      "A function that has no access to any variables.",
      "A function that can only be called once.",
      "A function that returns an object.",
    ],
  },
  {
    Question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    correctAnswer: "To attach an event handler to an element.",
    allAnswers: [
      "To create a new element in the DOM.",
      "To add a CSS class to an element.",
      "To attach an event handler to an element.",
      "To remove an element from the DOM.",
    ],
  },
  {
    Question: "What is the 'prototype' property in JavaScript used for?",
    correctAnswer: "To add methods and properties to objects.",
    allAnswers: [
      "To set the background color of an element.",
      "To define a constant value.",
      "To add methods and properties to objects.",
      "To store the current date and time.",
    ],
  },
  {
    Question:
      "What is the purpose of the 'querySelector' method in JavaScript?",
    correctAnswer: "To select the first element that matches a CSS selector.",
    allAnswers: [
      "To select all elements with a specific class name.",
      "To select the last element that matches a CSS selector.",
      "To select an element by its ID.",
      "To select the parent element of a given element.",
    ],
  },
  {
    Question: "What is the result of '5' + 3 in JavaScript?",
    correctAnswer: "53",
    allAnswers: ["8", "53", "35", "NaN"],
  },
  {
    Question: "What is the purpose of the 'map' function in JavaScript?",
    correctAnswer:
      "To apply a function to each element of an array and create a new array with the results.",
    allAnswers: [
      "To remove an element from an array.",
      "To add an element to the beginning of an array.",
      "To reverse the order of elements in an array.",
      "To find the maximum value in an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'NaN' property in JavaScript?",
    correctAnswer: "To represent a value that is not a number.",
    allAnswers: [
      "To represent the number zero.",
      "To represent the value 'undefined'.",
      "To represent a value that is not a number.",
      "To represent a negative number.",
    ],
  },
  {
    Question: "What is the purpose of the 'split' method in JavaScript?",
    correctAnswer:
      "To split a string into an array of substrings based on a delimiter.",
    allAnswers: [
      "To join two strings together.",
      "To remove spaces from a string.",
      "To convert a string to uppercase.",
      "To split a string into an array of substrings based on a delimiter.",
    ],
  },
  {
    Question: "What is the purpose of the 'parseInt' function in JavaScript?",
    correctAnswer: "To parse a string and convert it to an integer.",
    allAnswers: [
      "To round a number to the nearest integer.",
      "To remove decimal places from a number.",
      "To convert a string to uppercase.",
      "To parse a string and convert it to an integer.",
    ],
  },
  {
    Question: "What is the purpose of the 'filter' method in JavaScript?",
    correctAnswer: "To create a new array with all elements that pass a test.",
    allAnswers: [
      "To remove elements from an array.",
      "To sort the elements of an array.",
      "To create a new array with all elements that pass a test.",
      "To add elements to an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'push' method in JavaScript?",
    correctAnswer: "To add one or more elements to the end of an array.",
    allAnswers: [
      "To remove the last element from an array.",
      "To add one or more elements to the beginning of an array.",
      "To reverse the order of elements in an array.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'pop' method in JavaScript?",
    correctAnswer: "To remove and return the last element from an array.",
    allAnswers: [
      "To add an element to the end of an array.",
      "To add an element to the beginning of an array.",
      "To remove and return the last element from an array.",
      "To remove the first element from an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'shift' method in JavaScript?",
    correctAnswer: "To remove and return the first element from an array.",
    allAnswers: [
      "To add an element to the end of an array.",
      "To add an element to the beginning of an array.",
      "To remove and return the first element from an array.",
      "To remove the last element from an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'unshift' method in JavaScript?",
    correctAnswer: "To add one or more elements to the beginning of an array.",
    allAnswers: [
      "To remove the first element from an array.",
      "To remove the last element from an array.",
      "To add one or more elements to the end of an array.",
      "To add one or more elements to the beginning of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'splice' method in JavaScript?",
    correctAnswer:
      "To add or remove elements from an array at a specified index.",
    allAnswers: [
      "To reverse the order of elements in an array.",
      "To create a new array with selected elements from another array.",
      "To add or remove elements from an array at a specified index.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'concat' method in JavaScript?",
    correctAnswer: "To merge two or more arrays and create a new array.",
    allAnswers: [
      "To split a string into an array of substrings.",
      "To add an element to the end of an array.",
      "To merge two or more arrays and create a new array.",
      "To create a new array with selected elements from another array.",
    ],
  },
  {
    Question: "What is the purpose of the 'join' method in JavaScript?",
    correctAnswer: "To join all elements of an array into a single string.",
    allAnswers: [
      "To split a string into an array of substrings.",
      "To add an element to the end of an array.",
      "To join all elements of an array into a single string.",
      "To create a new array with selected elements from another array.",
    ],
  },
  {
    Question: "What is the purpose of the 'reduce' method in JavaScript?",
    correctAnswer:
      "To apply a function to an accumulator and each element in an array, reducing it to a single value.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To sort the elements of an array.",
      "To apply a function to an accumulator and each element in an array, reducing it to a single value.",
    ],
  },
  {
    Question: "What is the purpose of the 'forEach' method in JavaScript?",
    correctAnswer:
      "To iterate over each element in an array and apply a function to it.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To sort the elements of an array.",
      "To iterate over each element in an array and apply a function to it.",
    ],
  },
  {
    Question: "What is the purpose of the 'indexOf' method in JavaScript?",
    correctAnswer:
      "To find the index of the first occurrence of a specified element in an array.",
    allAnswers: [
      "To add elements to an array.",
      "To remove elements from an array.",
      "To find the index of the first occurrence of a specified element in an array.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'lastIndexOf' method in JavaScript?",
    correctAnswer:
      "To find the index of the last occurrence of a specified element in an array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To find the index of the last occurrence of a specified element in an array.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'slice' method in JavaScript?",
    correctAnswer:
      "To create a new array containing a portion of the original array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'reverse' method in JavaScript?",
    correctAnswer: "To reverse the order of elements in an array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To reverse the order of elements in an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'sort' method in JavaScript?",
    correctAnswer: "To sort the elements of an array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To sort the elements of an array.",
    ],
  },
  {
    Question: "What is the purpose of the 'every' method in JavaScript?",
    correctAnswer: "To check if all elements in an array pass a test.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To check if all elements in an array pass a test.",
    ],
  },
  {
    Question: "What is the purpose of the 'some' method in JavaScript?",
    correctAnswer:
      "To check if at least one element in an array passes a test.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To check if at least one element in an array passes a test.",
    ],
  },
  {
    Question: "What is the purpose of the 'find' method in JavaScript?",
    correctAnswer: "To find the first element in an array that passes a test.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To find the first element in an array that passes a test.",
    ],
  },
  {
    Question: "What is the purpose of the 'findIndex' method in JavaScript?",
    correctAnswer:
      "To find the index of the first element in an array that passes a test.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To find the index of the first element in an array that passes a test.",
    ],
  },
  {
    Question: "What is the purpose of the 'includes' method in JavaScript?",
    correctAnswer: "To check if an array contains a specific element.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To check if an array contains a specific element.",
    ],
  },
  {
    Question: "What is the purpose of the 'isArray' method in JavaScript?",
    correctAnswer: "To check if a value is an array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To check if a value is an array.",
    ],
  },
  {
    Question:
      "What is the purpose of the 'toLocaleString' method in JavaScript?",
    correctAnswer: "To convert an array to a localized string representation.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To convert an array to a localized string representation.",
    ],
  },
  {
    Question: "What is the purpose of the 'toString' method in JavaScript?",
    correctAnswer: "To convert an array to a string representation.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To convert an array to a string representation.",
    ],
  },
  {
    Question: "What is the purpose of the 'valueOf' method in JavaScript?",
    correctAnswer: "To return the primitive value of an array.",
    allAnswers: [
      "To remove elements from an array.",
      "To add elements to an array.",
      "To create a new array containing a portion of the original array.",
      "To return the primitive value of an array.",
    ],
  },
];

// You now have 50 JavaScript questions in the `javascriptQuestions` array.
