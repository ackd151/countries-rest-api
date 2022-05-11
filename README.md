# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#lessons-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Live Site URL: [Add live site URL here](https://ackd151.github.io/countries-rest-api/countries)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### Lessons learned

- Got quite a bit of enjoyment out of creating custom hooks with this project. Still considering implementing pagination with a custom hook but I want to move on to the next challenge more.
- Struggled for a bit with what should have been immediately obvious. Using the custom useFecth hook changed my conditional rendering logic in the relevant components and I tried to fix it with guesses before taking a moment to actually analyze the situation appropriately, which took all of 5 minutes ultimately.
- Another embarrassing issue arose when copy/pasting the api endpoints from the rest-countries-api documentation and not realizing that I was mix-and-matching routes from different versions that structure the responses differently. I believe I am still using endpoints from both versions, but now it's intentional and not blowing up the app.
- Needed to include a utility to find the best match from the search functionality, as the api returns multiple results in no discernable order. For example, when searching for "China", the api would return Taiwan in the first position. I found a [tutorialspoint](https://www.tutorialspoint.com/index.htm) blog(?) implementation of a Levenshtein Distance algorithm by [AmitDawan](https://www.tutorialspoint.com/answers/amitdiwan), so thank you Amit.
- Built a custom select element for the filtering mechanism and needed to read up on the accessibility concerns of doing so. This was a pretty good learning experience as I had not put much consideration into accessibility up to this point. I'm sure there are still glaring issues, considering even the best implementations I found in various blogs immediately had nay-sayers in the comments. Regardless, the element allows for keyboard navigation and includes aria attributes to relay the necessary information to users.

## Author

- Website - [Dan Ackerman](https://ackd151.github.io/portfolio/)
