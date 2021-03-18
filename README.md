# EDIT-THIS-README

## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML Setup

0) Go grab your DOM elements
    - Validate: `console.log()` the DOM elements

We will need:
1) An input
    - Why? To get the user's number so we know what to add
    - How? `inputElement.value`
2) Another Input
    - Why? To get the user's OTHER number so we know what to add
    - How? `otherInputElement.value`
3) A button
    - Why? To tell the computer WHEN to run the code
    - How? 
    ```js
    myButton.addEventListener('click', () => {
        // cool zone -- stuff that happens on click
    });
    ```
    - Validate: `console.log('hello world')` or whatever from the event listener
4) A div/span to put our answer into
    - A place to put the answer
5) (We'll also need a plus sign)

## Event handlers/listeners
- What happens when they click the button?
    - We need to get the values from the inputs
        - How? `inputElement.value`
        - Validate: `console.log()` the input values
    - We add these numbers together
        - How? `const sum = Number(inputElement.value) + Number(otherInputElement.value)`
        - Validate: `console.log()` the sum
    - Inject the sum into the div so the user can see it
        - How? `myDiv.textContent = sum`
        - Validate: Go look at the site and do the stuff
