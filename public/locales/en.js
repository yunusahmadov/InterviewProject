const enQuest={
    
    "quest1": "What is HTML",
    "answer1": "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.",
    "quest2": "What are the basic HTML tags?",
    "answer2": "div , header , main , section , and footer are the main HTML5 tags for creating the semantic structure of a web page. You can also mention tags such as p, h1-h6, ul, ol, li, a, img, etc., which are used to create the content of a web page.",
    "cssq1": "What is a CSS selector?",
    "cssq1answer":"A CSS (Cascading Style Sheets) selector is part of a CSS rule that determines which HTML elements on the page will be styled by that rule. Selectors select elements based on their tag name, attributes, classes, or IDs.",
    "jsq1":"What data types exist in JavaScript?",
    "jsq1answer":"Primitive data types:\nNumbers: represents both whole and fractional, numbers;\nStrings: represents text data;\nBooleans: represents true (true) or false (false);\nNull: represents absence values;\nUndefined: represents the absence of a value definition;\nSymbol (introduced in ECMAScript 6): represents a unique and immutable identifier. values;\nFunctions: used to perform specific tasks;\nDates: represent dates and times;\nRegular expressions: used to work with text, perform search and replace.",
    "jsq2":"Get even numbers from array",
    "jsq3":"Convert array of strings to array of numbers",
    "jsq3desc":" Variant with map",
    "jsq3desc2":"Variant with 'for' ",
    "jsq4":"Convert array of numbers to array of strings",
    "jsq4desc":"Variant with toString()",
    "jsq4desc2":" Variant with '+' operator ",
    "jsq5":"What is currying?",
    "jsq5answer":"Currying in JavaScript is the process of converting a function with multiple arguments into a sequence of functions that each take only one argument. Each function returns a new function that waits for the next argument until all required arguments have been passed. When a function is curried, it becomes more flexible and can be used to create new functions with fixed arguments. This is useful when you want to create a function that will be used repeatedly with some fixed values.",
    "jsq6":"What is closure?",
    "jsq6answer":"A closure in JavaScript is a combination of a function and the lexical environment in which that function was declared. A closure allows a function to retain access to variables from its outer lexical environment, even after that environment has finished executing. This means that a function can remember and use variables from the environment in which it was created, even when it is called in a different place or time.",
    "jsq6desc":"In this example, innerFunction is a closure because it retains access to the outerVariable variable from its outerFunction. After calling outerFunction, we store the returned innerFunction in the variable myFunction and then call myFunction() which prints out 'Hello'. innerFunction still has access to outerVariable even though outerFunction has already completed its execution.",
    "jsq6desc2":" Closure and private variables\nIn this example, the counter function returns an object with two methods increment and decrement. Both methods have access to the count variable declared inside the counter function, thanks to the closure. Thus, the count variable is private and not accessible directly from outside We can call methods on the myCounter object to increment and decrement the value of count and output it at each step.",
    
}
export default enQuest