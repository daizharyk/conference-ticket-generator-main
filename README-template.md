# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://github.com/daizharyk/conference-ticket-generator-main)
- Live Site URL: [Add live site URL here](https://daizharyk.github.io/conference-ticket-generator-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (чистый JS)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div>
  <label for="email">Email Address</label>
  <div class="input-wrapper">
    <input
      type="email"
      id="email"
      name="email"
      placeholder="example@email.com"
    />
  </div>
  <small class="email-valid-message"> </small>
</div>
```

```css

```

```js
const file = imageInput.files[0];
if (file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    userImg.src = e.target.result;
    userImg.alt = "User Avatar";
  };
  reader.readAsDataURL(file);
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

In the future, I want to improve my skills in working with SVG:
I haven’t fully mastered working with and positioning elements in SVG yet, so I want to keep improving this skill to better handle SVG layouts and create more precise designs.

🎨 Manipulating SVG with CSS and JavaScript: Learn to dynamically change sizes, colors, and positioning of elements.
📏 Responsive SVG design: Understand how to make SVG elements fully responsive for different screen sizes.
🔧 SVG animations: Master animations with CSS and GSAP to create more dynamic and engaging interfaces.
📂 SVG optimization: Learn how to compress and simplify SVG files to improve loading speed.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Didar](https://www.your-site.com)
- Frontend Mentor - [@daizharyk](https://www.frontendmentor.io/profile/daizharyk)





