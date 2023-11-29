# Postcards travel photo sharing platform

Final website:

## Table of contents

- [Postcards travel photo sharing platform](#postcards-travel-photo-sharing-platform)
  - [Table of contents](#table-of-contents)
  - [Design and planning](#design-and-planning)
    - [Site owner goals](#site-owner-goals)
    - [User stories](#user-stories)
    - [Models diagram](#models-diagram)
    - [Wireframes](#wireframes)
    - [Design choices](#design-choices)
  - [Features](#features)
    - [Responsive layouts](#responsive-layouts)
    - [Favicon and title](#favicon-and-title)
    - [Navigation](#navigation)
    - [Custom error pages](#custom-error-pages)
  - [Technology](#technology)
    - [Languages used](#languages-used)
    - [Frameworks, libraries and programs used](#frameworks-libraries-and-programs-used)
  - [Testing](#testing)
    - [User story and feature testing](#user-story-and-feature-testing)
    - [Bug fixes](#bug-fixes)
    - [Validator testing](#validator-testing)
      - [HTML validator](#html-validator)
      - [CSS validator](#css-validator)
      - [JavaScript validator](#javascript-validator)
      - [Python validator](#python-validator)
    - [Browser tests](#browser-tests)
    - [Device/screen size tests](#devicescreen-size-tests)
    - [Dev Tools Lighthouse tests](#dev-tools-lighthouse-tests)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Media](#media)
    - [Coding resources](#coding-resources)
      - [General](#general)
      - [Specific queries](#specific-queries)
      - [Mentor](#mentor)

## Design and planning

### Site owner goals

### User stories

**Navigation and authentication**
| [#1](https://github.com/mariacjones1/postcards/issues/1) | Navigation | As a user, I can view the same navbar on each page, so that I can easily navigate between pages. |
| [#2](https://github.com/mariacjones1/postcards/issues/2) | Routing | As a user, I can view the same navbar on each page, so that I can easily navigate between pages. |
| [#3](https://github.com/mariacjones1/postcards/issues/3) | Authentication - Sign up | As a user, I can create my own account, so that I can access all the additional features for registered users. |
| [#4](https://github.com/mariacjones1/postcards/issues/4) | Authentication - Sign in | As a user, I can sign into the app, so that I can access additional functionality for logged-in users. |
| [#5](https://github.com/mariacjones1/postcards/issues/5) | Authentication - Logged in status | As a user, I can easily tell if I'm logged in or not, so that I know if I need to log in again to access additional functionality. |
| [#6](https://github.com/mariacjones1/postcards/issues/6) | Authentication - Refreshing access tokens | As a user, I can maintain my logged-in status, so that my user experience is not compromised. |
| [#7](https://github.com/mariacjones1/postcards/issues/7) | Navigation: Conditional rendering (logged-out users) | As a logged-out user, I can clearly see sign in and sign up options, so that I can sign in/sign up as applicable. |
| [#34](https://github.com/mariacjones1/postcards/issues/34) | Navigation: Conditional rendering (logged-in users) | As a logged-in, I can clearly see the feed, liked and other browsing options, so that I can navigate the site easily. |
| [#35](https://github.com/mariacjones1/postcards/issues/35) | Log out | As a logged-in user, I can log out of the site, so that I can protect my privacy and keep my account secure when I am not using it. |
| [#40](https://github.com/mariacjones1/postcards/issues/40) | User redirects | As a user, I can only access pages relevant to my logged-in/logged-out status, so that my user experience is not compromised by allowing me to access irrelevant pages. |

**Profile page**
| [#8](https://github.com/mariacjones1/postcards/issues/8) | Profile pictures  | As a user, I can view other users’ profile pictures, so that I can easily identify them. |
| [#25](https://github.com/mariacjones1/postcards/issues/25) | Profile page | As a user, I can view other users’ profiles, so that I can see their posts and any information they have shared about themselves. |
| [#26](https://github.com/mariacjones1/postcards/issues/26) | Most followed profiles | As a user, I can see a list of profiles with the most followers, so that I can see which profiles are popular. |
| [#27](https://github.com/mariacjones1/postcards/issues/27) | Trending profiles | As a user, I can see a list of the profiles which have been followed the most in the last week, so that I can see which profiles are becoming more popular. |
| [#28](https://github.com/mariacjones1/postcards/issues/28) | User stats | As a user, I can view statistics about another user by going on their profile (bio, number of posts, followers and users followed), so that I can learn more about them. |
| [#29](https://github.com/mariacjones1/postcards/issues/29) | Follow/Unfollow a user | As a logged-in user, I can follow and unfollow other users, so that I can curate my feed to contain only posts by users whose content I like. |
| [#30](https://github.com/mariacjones1/postcards/issues/30) | Edit profile | As a logged-in user, I can edit my profile, so that I can change my profile picture and update my bio at any time. |
| [#31](https://github.com/mariacjones1/postcards/issues/31) | Update username and password | As a logged-in user, I can change my username and/or password, so that I can change my display name and keep my profile secure. |
| [#39](https://github.com/mariacjones1/postcards/issues/1) | View posts on profile page | As a user, I can view users' posts on their profile page, so that I can see all the posts by that user. |

**Posts page**
| [#12](https://github.com/mariacjones1/postcards/issues/12) | View recent posts | As a user, I can view the most recent posts by all users, ordered by most recently created first, so that I am up to date with the newest content. |
| [#13](https://github.com/mariacjones1/postcards/issues/13) | Search posts | As a user, I can use keywords to search for posts, so that I can find the posts and user profiles I am most interested in. |
| [#14](https://github.com/mariacjones1/postcards/issues/14) | View liked posts | As a logged-in user, I can view the posts I have previously liked, so that I can easily find posts I have enjoyed the most. |
| [#15](https://github.com/mariacjones1/postcards/issues/15) | Browse posts by continent | As a user, I can browse posts by continent, so that I can find posts relating to a particular continent that I am interested in. |
| [#16](https://github.com/mariacjones1/postcards/issues/16) | View posts of followed users | As a logged-in user, I can view content filtered by only the users I follow, so that I can keep up to date with what they are posting about. |
| [#17](https://github.com/mariacjones1/postcards/issues/17) | Infinite scroll | As a user, I can keep scrolling through the posts as they are automatically loaded on the site, so that I don't have to click on "next page" etc. |

**Single post page**
| [#18](https://github.com/mariacjones1/postcards/issues/18) | Post page | As a user, I can view the page of a selected post, so that I can read the caption and view the comments on it. |
| [#19](https://github.com/mariacjones1/postcards/issues/19) | Edit post | As a post owner, I can edit the title, image and content of any of my posts, so that I can make corrections or update my post after it was created. |
| [#20](https://github.com/mariacjones1/postcards/issues/20) | Create a comment | As a logged-in user, I can add comments to any post, so that I can share my thoughts about it. |
| [#21](https://github.com/mariacjones1/postcards/issues/21) | Comment date | As a user, I can see the date a comment was posted, so that I know how old it is. |
| [#22](https://github.com/mariacjones1/postcards/issues/22) | Delete comments | As an owner of a comment, I can delete my own comment, so that I can control removal of all my own comments from the application. |
| [#23](https://github.com/mariacjones1/postcards/issues/23) | Edit comments | As an owner of a comment, I can edit my own comment, so that I can fix or update it if I want to. |
| [#24](https://github.com/mariacjones1/postcards/issues/24) | Like comments | As a logged-in user, I can like other users’ comments, so that I can show my support for comments I agree with. |
| [#33](https://github.com/mariacjones1/postcards/issues/33) | Infinite scroll (comments) | As a user, I can keep scrolling through comments as they are automatically loaded on the post page, so that I don’t have to click “next” etc. |
| [#45](https://github.com/mariacjones1/postcards/issues/45) | View comments | As a user, I can view comments under a selected post, so that I can see other people's thoughts and interact with them. |

**Adding and liking posts**
| [#9](https://github.com/mariacjones1/postcards/issues/9) | Create posts | As a logged-in user, I can create my own posts, so that I can share my them with other users. |
| [#10](https://github.com/mariacjones1/postcards/issues/10) | View a post | As a user, I can can view the details of a single post by clicking on it, so that I can learn more about it. |
| [#11](https://github.com/mariacjones1/postcards/issues/11) | Like a post | As a logged-in user, I can like another user’s post, so that I can show my support for the posts that interest me. |
| [#44](https://github.com/mariacjones1/postcards/issues/44) | Delete post | As a post owner, I can delete any of my posts, so that I can remove any posts I no longer want people to see. |

**Contact form**
| [#32](https://github.com/mariacjones1/postcards/issues/32) | Contact form | As a user, I can send a message to the site admins, so that I can directly share any feedback I have about the site in general. |

### Models diagram

Created using [dbdiagram.io](https://dbdiagram.io/)

### Wireframes

Created using [Balsamiq](https://balsamiq.com/)

### Design choices

## Features

### Responsive layouts

### Favicon and title

### Navigation

### Custom error pages

## Technology

### Languages used

- HTML5
- CSS3
- JavaScript
- Python

### Frameworks, libraries and programs used

- [Django REST Framework](https://www.django-rest-framework.org/)
  - API framework
- [React](https://react.dev/)
  - Javascript library
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/)
  - To assist with styling and responsiveness in React
- [ElephantSQL](https://www.elephantsql.com/)
  - For database storage
- [Cloudinary](https://cloudinary.com/)
  - For media storage
- [Git](https://git-scm.com/)
  - For version control
- [GitHub](https://github.com/)
  - For project storage
- [Codeanywhere](https://app.codeanywhere.com/)
  - IDE
- [Font Awesome](https://fontawesome.com/)
  - For sourcing text icons
- [favicon.io](https://favicon.io/)
  - To generate the favicon
- [GIMP](https://www.gimp.org/)
  - For image editing
- [Balsamiq](https://balsamiq.com/)
  - For creating wireframes
- [dbdiagram.io](https://dbdiagram.io/)
  - For creating the models diagram
- [Pexels](https://www.pexels.com/)
  - For sourcing images
- [Google Images](https://images.google.co.uk/)
  - For sourcing images
- [Flaticon](https://www.flaticon.com/)
  - For sourcing image icons

## Testing

### User story and feature testing

### Bug fixes

| [#42](https://github.com/mariacjones1/postcards/issues/42) | Navbar dropdown toggle | Navbar does not close when selecting a continent from Continents dropdown.<br />Test steps:<br />1. Start app<br />2. Click on Continents dropdown<br />3. Click any continent<br />Expected result: The dropdown should collapse.<br />Actual result: The dropdown stays expanded until the user clicks away. |

### Validator testing

#### HTML validator

[W3C](https://validator.w3.org/)

| File | Results |
| --- | --- |

#### CSS validator

[W3C Jigsaw](https://jigsaw.w3.org/css-validator/validator)

| File | Results |
| --- | --- |

#### JavaScript validator

[JSHint](https://jshint.com/)

| File | Results |
| --- | --- |

#### Python validator

[PEP8](https://pep8ci.herokuapp.com/)

| File | Results |
| --- | --- |

### Browser tests

| Browser | Layout | Features |
| --- | --- | --- |
| Chrome |  |  |
| Firefox |  |  |
| Edge |  |  |
| Safari* |  |  |

### Device/screen size tests

(Tested using Dev Tools, portrait and landscape where applicable)

| Device | Layout |
| --- | --- |
| HP laptop screen (size 1536 x 864) |  |
| iPhone SE |  |
| Pixel 5 |  |
| Samsung Galaxy S20 Ultra |  |
| iPad Air |  |
| Surface Pro 7 |  |
| Nest Hub |  |

### Dev Tools Lighthouse tests

path: "/"

| Category | Score |
| --- | --- |
| Performance |  |
| Accessability |  |
| Best Practices |  |
| SEO |  |

## Deployment

## Credits

### Media

### Coding resources

#### General

#### Specific queries

#### Mentor
