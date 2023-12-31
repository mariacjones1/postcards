# Postcards travel photo sharing platform

Postcards is a photo sharing app that allows users to share photos from their travels with other users around the world. Users can write 'postcard' captions, like posts, leave and like comments and update their own profile with a profile picture, username, bio, their location, favourite country and travel experience.

Final website: [https://postcards-mcj-2cd8ccaae35f.herokuapp.com/](https://postcards-mcj-2cd8ccaae35f.herokuapp.com/)

![Responsive mockup](/documentation/testing/responsiveness/responsive-mockup.png)

## Design and planning

### Site owner goals

As the site owner, I want to provide an app for users to share images from their travels. They can like and comment on each others' posts to share feedback and start conversations, with the potential to connect with many users around the world. The website should be easy to navigate and components should render separately so as to prevent whole pages from reloading unnecessarily. I want users to see the benefits of signing up and engaging as registered users rather than anonymous visitors, so that the app gains many registered users who regularly post and engage with content.

### User stories

#### Navigation and authentication

| Issue # | Title | User story |
| --- | --- | --- |
| [#1](https://github.com/mariacjones1/postcards/issues/1) | Navigation | As a user, I can view the same navbar on each page, so that I can easily navigate between pages. |
| [#2](https://github.com/mariacjones1/postcards/issues/2) | Routing | As a user, I can quickly navigate through different pages, so that I can view content seamlessly without the page needing to refresh. |
| [#3](https://github.com/mariacjones1/postcards/issues/3) | Authentication - Sign up | As a user, I can create my own account, so that I can access all the additional features for registered users. |
| [#4](https://github.com/mariacjones1/postcards/issues/4) | Authentication - Sign in | As a user, I can sign into the app, so that I can access additional functionality for logged-in users. |
| [#5](https://github.com/mariacjones1/postcards/issues/5) | Authentication - Logged in status | As a user, I can easily tell if I'm logged in or not, so that I know if I need to log in again to access additional functionality. |
| [#6](https://github.com/mariacjones1/postcards/issues/6) | Authentication - Refreshing access tokens | As a user, I can maintain my logged-in status, so that my user experience is not compromised. |
| [#7](https://github.com/mariacjones1/postcards/issues/7) | Navigation: Conditional rendering (logged-out users) | As a logged-out user, I can clearly see sign in and sign up options, so that I can sign in/sign up as applicable. |
| [#34](https://github.com/mariacjones1/postcards/issues/34) | Navigation: Conditional rendering (logged-in users) | As a logged-in, I can clearly see the feed, liked and other browsing options, so that I can navigate the site easily. |
| [#35](https://github.com/mariacjones1/postcards/issues/35) | Log out | As a logged-in user, I can log out of the site, so that I can protect my privacy and keep my account secure when I am not using it. |
| [#40](https://github.com/mariacjones1/postcards/issues/40) | User redirects | As a user, I can only access pages relevant to my logged-in/logged-out status, so that my user experience is not compromised by allowing me to access irrelevant pages. |
| [#50](https://github.com/mariacjones1/postcards/issues/50) | Error pages | As a user, I can view custom error pages when there is a page error, so that I can easily tell I am still on the website and can get back to a page I want to be on. |

#### Profile page

| Issue # | Title | User story |
| --- | --- | --- |
| [#8](https://github.com/mariacjones1/postcards/issues/8) | Profile pictures  | As a user, I can view other users' profile pictures, so that I can easily identify them. |
| [#25](https://github.com/mariacjones1/postcards/issues/25) | Profile page | As a user, I can view other users' profiles, so that I can see their posts and any information they have shared about themselves. |
| [#26](https://github.com/mariacjones1/postcards/issues/26) | Most followed profiles | As a user, I can see a list of profiles with the most followers, so that I can see which profiles are popular. |
| [#27](https://github.com/mariacjones1/postcards/issues/27) | Trending profiles | As a user, I can see a list of the profiles which have been followed the most in the last week, so that I can see which profiles are becoming more popular. |
| [#28](https://github.com/mariacjones1/postcards/issues/28) | User stats | As a user, I can view statistics about another user by going on their profile (bio, number of posts, followers and users followed), so that I can learn more about them. |
| [#29](https://github.com/mariacjones1/postcards/issues/29) | Follow/Unfollow a user | As a logged-in user, I can follow and unfollow other users, so that I can curate my feed to contain only posts by users whose content I like. |
| [#30](https://github.com/mariacjones1/postcards/issues/30) | Edit profile | As a logged-in user, I can edit my profile, so that I can change my profile picture and update my bio at any time. |
| [#31](https://github.com/mariacjones1/postcards/issues/31) | Update username and password | As a logged-in user, I can change my username and/or password, so that I can change my display name and keep my profile secure. |
| [#39](https://github.com/mariacjones1/postcards/issues/1) | View posts on profile page | As a user, I can view users' posts on their profile page, so that I can see all the posts by that user. |

#### Posts page

| Issue # | Title | User story |
| --- | --- | --- |
| [#12](https://github.com/mariacjones1/postcards/issues/12) | View recent posts | As a user, I can view the most recent posts by all users, ordered by most recently created first, so that I am up to date with the newest content. |
| [#13](https://github.com/mariacjones1/postcards/issues/13) | Search posts | As a user, I can use keywords to search for posts, so that I can find the posts and user profiles I am most interested in. |
| [#14](https://github.com/mariacjones1/postcards/issues/14) | View liked posts | As a logged-in user, I can view the posts I have previously liked, so that I can easily find posts I have enjoyed the most. |
| [#15](https://github.com/mariacjones1/postcards/issues/15) | Browse posts by continent | As a user, I can browse posts by continent, so that I can find posts relating to a particular continent that I am interested in. |
| [#16](https://github.com/mariacjones1/postcards/issues/16) | View posts of followed users | As a logged-in user, I can view content filtered by only the users I follow, so that I can keep up to date with what they are posting about. |
| [#17](https://github.com/mariacjones1/postcards/issues/17) | Infinite scroll | As a user, I can keep scrolling through the posts as they are automatically loaded on the site, so that I don't have to click on "next page" etc. |

#### Single post page

| Issue # | Title | User story |
| --- | --- | --- |
| [#18](https://github.com/mariacjones1/postcards/issues/18) | Post page | As a user, I can view the page of a selected post, so that I can read the caption and view the comments on it. |
| [#19](https://github.com/mariacjones1/postcards/issues/19) | Edit post | As a post owner, I can edit the title, image and content of any of my posts, so that I can make corrections or update my post after it was created. |
| [#20](https://github.com/mariacjones1/postcards/issues/20) | Create a comment | As a logged-in user, I can add comments to any post, so that I can share my thoughts about it. |
| [#21](https://github.com/mariacjones1/postcards/issues/21) | Comment date | As a user, I can see the date a comment was posted, so that I know how old it is. |
| [#22](https://github.com/mariacjones1/postcards/issues/22) | Delete comments | As an owner of a comment, I can delete my own comment, so that I can control removal of all my own comments from the application. |
| [#23](https://github.com/mariacjones1/postcards/issues/23) | Edit comments | As an owner of a comment, I can edit my own comment, so that I can fix or update it if I want to. |
| [#24](https://github.com/mariacjones1/postcards/issues/24) | Like comments | As a logged-in user, I can like other users' comments, so that I can show my support for comments I agree with. |
| [#33](https://github.com/mariacjones1/postcards/issues/33) | Infinite scroll (comments) | As a user, I can keep scrolling through comments as they are automatically loaded on the post page, so that I don't have to click “next” etc. |
| [#45](https://github.com/mariacjones1/postcards/issues/45) | View comments | As a user, I can view comments under a selected post, so that I can see other people's thoughts and interact with them. |

#### Adding and liking posts

| Issue # | Title | User story |
| --- | --- | --- |
| [#9](https://github.com/mariacjones1/postcards/issues/9) | Create posts | As a logged-in user, I can create my own posts, so that I can share my them with other users. |
| [#10](https://github.com/mariacjones1/postcards/issues/10) | View a post | As a user, I can can view the details of a single post by clicking on it, so that I can learn more about it. |
| [#11](https://github.com/mariacjones1/postcards/issues/11) | Like a post | As a logged-in user, I can like another user's post, so that I can show my support for the posts that interest me. |
| [#44](https://github.com/mariacjones1/postcards/issues/44) | Delete post | As a post owner, I can delete any of my posts, so that I can remove any posts I no longer want people to see. |

#### Contact form

| Issue # | Title | User story |
| --- | --- | --- |
| [#32](https://github.com/mariacjones1/postcards/issues/32) | Contact form | As a user, I can send a message to the site admins, so that I can directly share any feedback I have about the site in general. |
| [#41](https://github.com/mariacjones1/postcards/issues/41) | Form images | As a user, I can see different images on the sign in, sign up and contact forms, so that each form is visually different. |
| [#55](https://github.com/mariacjones1/postcards/issues/55) | Submit contact form | As a user, I can see a message confirming my message has been sent, so that I know it was successful. |

### Models

Created using [dbdiagram.io](https://dbdiagram.io/)

![Models diagram](/documentation/planning/model-diagram.png)

#### Profile

| Name | Field type | Validation |
| --- | --- | --- |
| owner | OneToOneField | User, on_delete=models.CASCADE |
| created_at | DateTimeField | auto_now_add=True |
| updated_at | DateTimeField | auto_now=True |
| name | CharField | max_length=255, blank=True |
| content | TextField | blank=True |
| image | ImageField | upload_to='images/', default='../default_profile_xecywf' |
| location | CountryField | blank=True |
| favourite_country | CountryField | blank=True |
| travel_experience | CharField | max_length=20, choices=TRAVEL_EXPERIENCE_CHOICES, default="newbie" |

#### Post

| Name | Field type | Validation |
| --- | --- | --- |
| owner | ForeignKey | User, on_delete=models.CASCADE |
| created_at | DateTimeField | auto_now_add=True |
| updated_at | DateTimeField | auto_now=True |
| title | CharField | max_length=255 |
| content | TextField | blank=True |
| image | ImageField | blank=True |
| continent | CharField | max_length=2, choices=CONTINENT_CHOICES, default="EU" |
| holiday_type | CharField | max_length=10, choices=HOLIDAY_TYPE_CHOICES, default="solo", blank=True |

#### Like

| Name | Field type | Validation |
| --- | --- | --- |
| owner | ForeignKey | User, on_delete=models.CASCADE |
| post | ForeignKey | Post, on_delete=models.CASCADE, related_name='likes' |
| created_at | DateTimeField | auto_now_add=True |

#### Comment

| Name | Field type | Validation |
| --- | --- | --- |
| owner | ForeignKey | User, on_delete=models.CASCADE |
| post | ForeignKey | Post, on_delete=models.CASCADE |
| created_at | DateTimeField | auto_now_add=True |
| updated_at | DateTimeField | auto_now=True |
| content | TextField | - |

#### CommentLike

| Name | Field type | Validation |
| --- | --- | --- |
| owner | ForeignKey | User, on_delete=models.CASCADE |
| post | ForeignKey | Comment, on_delete=models.CASCADE, related_name='comment_likes' |
| created_at | DateTimeField | auto_now_add=True |

#### Follower

| Name | Field type | Validation |
| --- | --- | --- |
| owner | ForeignKey | User, on_delete=models.CASCADE, related_name='following' |
| followed | ForeignKey | User, on_delete=models.CASCADE, related_name='followed' |
| created_at | DateTimeField | auto_now_add=True |

#### Contact

| Name | Field type | Validation |
| --- | --- | --- |
| name | CharField | max_length=225 |
| email | EmailField | - |
| message | TextField | - |
| created_at | DateTimeField | auto_now_add=True |

### Wireframes

Created using [Balsamiq](https://balsamiq.com/)

#### Home/feed page

![Home page](/documentation/planning/wireframes/home-feed.png)

#### Post page

![Post page](/documentation/planning/wireframes/post.png)

#### Create post page

![Create post](/documentation/planning/wireframes/create-post.png)

#### Sign up page

![Sign up page](/documentation/planning/wireframes/sign-up.png)

#### Sign in page

![Sign in page](/documentation/planning/wireframes/sign-in.png)

#### Contact form

![Contact form](/documentation/planning/wireframes/contact-form.png)

### Design choices

#### Colours

- The main colour used throughout the site is the colour blue, as it is reminiscent of the sea and the sky which both feature heavily in a lot of travel photos. It is also a calming colour.

#### Logo

- The logo was created from a postcard image of palm trees on a beach, with the app name 'Postcards' written across it.

#### Fonts

- Sarabun was used for the majority of the text.
- Kalam was used for the post content to look like handwriting.

### Images

- The sign up, sign in and contact forms each display a different image related to post/postcards (hidden on smaller screens).

## Features

### Responsive layouts

- React Bootstrap has been used to make layouts responsive. Containers, rows and columns keep sections organised and allow for seamless use on different screen sizes.

[See responsiveness testing](#responsiveness)

### Favicon and title

- The favicon and title make the app easy to identify in the browser, especially if a user has multiple tabs open.

![Favicon and title](/documentation/features/favicon.png)

### Navigation

- All users can navigate to the home page by clicking either the logo or the Home link in the navbar.
- Logged-out users can access the sign up and sign in pages by clicking the respective links in the navbar.
- Logged-in users can create new posts by clicking the New postcard link in the navbar.
- Logged-in users can access their feed and liked posts by clicking the respective links in the navbar.
- Logged-in users can filter posts by continent by clicking the Continents link in the navbar and selecting a continent from the dropdown menu.
- Logged-in users can sign out by clikcing the Sign out link in the navbar.
- Logged-in users can access their profile by clicking on their avatar or username in the navbar.
- The available navbar links make it clear to the user if they are logged in or not.
- The navbar collapses into a burger icon on smaller screens so that it takes up less space.
- The use of react components means that the navbar does not reload each time the user navigates to a new page.

![Navbar - logged in](/documentation/features/logged-in.png)

![Navbar - logged out](/documentation/features/logged-out.png)

### Home page

- The home page is accessible to all users - no login required.
- Users can scroll through the latest posts by all registered site users and see the number of likes and comments each one has.
- Users can click on any post to see the full post page.
- Users can click on any other user's avatar to see their profile page.
- Users can see the popular and trending profiles on the right-hand side.

![Home page](/documentation/features/home.png)

### Feed, Liked and Continent filters

- Logged-in users can access feed, liked and continent pages by clicking the respective links in the navbar.
- Feed, liked and continent-filtered pages all use the same posts page with the post preview component. This is the only part of the page that reloads.
- If the user accesses their feed but has not followed any users, they wil see a message letting them know there are no posts to show and to try following some users.
- If the user accesses their liked posts but has not liked any posts, they will see a message letting them know there are no posts to show and to try liking some posts.
- If the user access a continent for which there are no posts, they will see a message letting them know there are no posts to show and to try another continent.

![Feed](/documentation/features/feed.png)

![Liked](/documentation/features/liked.png)

![Continent](/documentation/features/continent.png)

### Search bar

- All users can search posts by title or username using the search bar above the rendered posts.
- Logged-in users can use this feature on top of the feed, liked and continent filters.
- If there are no posts matching the search terms, the users will see a message letting them know and suggesting they try searching for something else.

![Search](/documentation/features/search.png)

### Post preview component

- Larger version of image to catch user's attention and keep the posts page looking tidier.
- Users can see the post title, number of likes and comments below each image, and the post owner and creation date above it.
- Users can view the post by clicking on the image or on the comment icon below it (comments themselves are only visible on the post page).
- Hovering over the comment icon will cause it to become a darker colour so that it is obvious it can be clicked on.

![Post preview](/documentation/features/post-preview.png)

### Post page

- Smaller version of the image next to the post content.
- Post content has a white background and is written in a handwriting font, with a stamp icon in the top right-hand corner to mimic a postcard.
- Users can see the post title, number of likes and comments below each image, and the post owner and creation date above it.
- Logged-in users can like the post by clicking on the heart icon.
- The hover effect has been removed from the comment icon so as not to make the user think clicking on it does anything.
- All users can read the comments below the post and see who posted it, when and how many likes it has.
- Logged-in users will see the comment form and be able to post comments on the post page.
- If there are no comments, logged-in users will see a message saying they can be the first to comment and logged-out users will see a message simply saying there are no comments yet.

![Post page](/documentation/features/post-page.png)

### Create, edit and delete posts

- Logged-in users can create new posts by clicking the New postcard link in the navbar.
- Users can upload an image, write a title and content and select the continent and holiday type for each post.
- Users can edit or delete their own posts by clicking the three-dots dropdown in the top right-hand corner of the post component on the post page.
- The edit post page is the same as the create post page but with the existing data showing.
- Users can update any fields and save their changes, or click cancel and keep their post the way it was.
- Users will see error messages for any fields which contain invalid inputs so they know what issue they need to fix in order to create or edit their post.

![Create post](/documentation/features/create-post.png)

![Edit post](/documentation/features/edit-post-form.png)

![Delete post](/documentation/features/delete-post.png)

### Post, edit and delete comments

- Logged-in users can post comments by typing them in the form below the post on the post page and clicking the post button.
- Users can edit or delete their own comments by clicking the three-dots dropdown in the top right-hand corner of the comment.
- The edit comment form is rendered in place of the comment so that the user can make changes without leaving the page.
- Users can update the comment and save their changes, or click cancel and keep their comment the way it was.

![Post comment](/documentation/features/comment-form.png)

![Edit comment](/documentation/features/comment-edit-form.png)

![Delete comments](/documentation/features/comment-edit-delete.png)

### Like posts and comments

- Logged-in users can like or unlike a post by clicking on the heart icon on either the post preview component on the posts page, or on the post component on the post page.
- The heart icon below a post the user has liked will be solid pink.
- Logged-in users will see a tooltip saying they cannot like their own post if they hover over the heart icon.
- Logged-out users will see a tooltip saying they must log in to like a post if they hover over the heart icon.
- Logged-in users can like or unlike a comment by clicking on the heart icon to the right of the comment on the post page.
- The heart icon next to a comment the user has liked will be solid pink.
- Logged-in users will see a tooltip saying they cannot like their own comment if they hover over the heart icon.
- Logged-out users will see a tooltip saying they must log in to like a comment if they hover over the heart icon.
- The number of likes on both posts and comments updates immediately as soon as a user likes/unlikes a post/comment.

![Liked post](/documentation/features/like-post.png)

![Liked comment](/documentation/features/comment-like.png)

### Profile page

- Users can view the profile page of any user by clicking on their avatar in any of the page components (from one of that user's posts, from popular or trending profiles if the user is popular or trending, from a comment they have posted or from the last link in the navbar if they wish to view their own profile).
- Profiles show the avatar and username of the user, their stats (number of posts, number of followers, number of users they follow), their location, favourite country and travel experience, any bio they have written. and all of that user's posts starting from the most recent.
- Users can edit their own profile by clicking the three-dots dropdown in the top right-hand corner of the profile component and clicking the Edit profile button. They can change any field excluding their stats, which are automatically calculated, and their username, which is handled on another form.
- Users can update their username or password by clicking the three-dots dropdown in the top right-hand corner of the profile component and clicking the respective button.
- Users will see error messages for any fields which contain invalid inputs so they know what issue they need to fix in order to update their profile, username or password.

![Profile page](/documentation/features/profile-page.png)

![Edit user options](/documentation/features/edit-profile-button.png)

![Edit profile](/documentation/features/edit-profile-form.png)

![Change username](/documentation/features/change-username-form.png)

![Change password](/documentation/features/change-password-form.png)

### Popular and trending profiles

- Popular and trending profiles are shown on the right-hand side of any posts page, single post page and profile page. They do not reload when the user navigates between these pages as they are separate components.
- Popular profiles shows the users with the most total followers.
- Trending profiles shows the users with the most followers gained in the last week.
- All users will see the avatars and usernames of each popular and trending profile, and clicking on the avatar will take them to that user's profile page.
- Logged-in users will see follow/unfollow buttons next to each popular and trending profile (excluding their own).

![Popular profiles](/documentation/features/popular-profiles.png)

![Trending profiles](/documentation/features/trending-profiles.png)

### Follow/unfollow users

- Logged-in users can follow or unfollow any other user by clicking the follow/unfollow button on their profile page or next to their username if they appear in popular or trending profiles.
- The follow/unfollow button will say 'follow' and appear navy blue for users the user doesn't follow, and it will say 'unfollow' and appear white for users they do follow.
- Clicking on the button will change it immediately, as well as update the follower count of the followed user and the following count of the following user.

![Follow/unfollow button](/documentation/features/follow-unfollow.png)

### Contact form

- Users can send feedback to the site owner(s) by filling in the contact form.
- All users can access the contact form to send a message; being logged in is not required.
- Users will see a success message when they send it, so they know it has been successful and do not unnecessarily send duplicated messages.
- Users will see error messages for any fields which contain invalid inputs so they know what issue they need to fix in order to send their message.

![Contact form](/documentation/features/contact-form.png)

### Custom error page (Page not found)

- Users who try to access an invalid URL will see an image and a message letting them know that the page they are looking for doesn't exist.
- The error component renders separately so the user is not navigated away from the site and can still access any link in the navbar.

![Page not found](/documentation/features/not-found.png)

### Infinite scroll

- The posts page component and comments beneath posts use an infinite scroll so that new posts/comments are loaded without the user having to click next page each time.

## React components

Using reusable React components means individual components can be used on different pages, meaning code does not need to be repeated (DRY principle) and components can render individually, rather than whole pages needing to reload each time the user takes an action.

Reusable components used in this project:

- Asset, Avatar, Footer, MoreDropdown, NavBar, NotFound - these small components are rendered on many, if not all, pages
- Comment - this component is rendered multiple times on the PostPage (once per comment for the post)
- Post - this component is currently only rendered on the PostPage, but having it as a separate component means it can be reused elsewhere in the future
- PostPreview - this component is rendered multiple times on the PostsPage (once per post in the view)
- Profile - this component is rendered multiple times within PopularProfiles and TrendingProfiles (once per profile)

## Agile methodology

### GitHub project

All user stories were documented in a [Github project](https://github.com/users/mariacjones1/projects/3).

Each user story was given labels based on the story type and prioritisation, and added to a sprint (milestone). The board view was used to keep track of which stories were yet to be started, which were being worked on and which had been completed. Issues were also created for any bugs found or potential enhancements to be made so as to easily keep track of all tasks to be done.

Project board:

![Project board](/documentation/planning/user_stories/project-board.png)

User story example:

![User story example](/documentation/planning/user_stories/user-story.png)

## Technology

### Languages used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/css)
- [JavaScript](https://www.javascript.com/)
- [Python](https://www.python.org/downloads/release/python-385/)

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
- [django-countries](https://github.com/SmileyChris/django-countries)
  - To provide country choices for models
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

### User story testing

#### Navigation and authentication

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a user, I can view the same navbar on each page, so that I can easily navigate between pages. | Y | ![Navbar - homepage](/documentation/testing/user_story/navigation/navigation-1.png) ![Navbar - liked](/documentation/testing/user_story/navigation/navigation-2.png) ![Navbar - create post](/documentation/testing/user_story/navigation/navigation-3.png) |
| As a user, I can quickly navigate through different pages, so that I can view content seamlessly without the page needing to refresh. | Y | N/A |
| As a user, I can create my own account, so that I can access all the additional features for registered users. | Y | ![Sign up page](/documentation/testing/user_story/navigation/signup.png) |
| As a user, I can sign into the app, so that I can access additional functionality for logged-in users. | Y | ![Sign in page](/documentation/testing/user_story/navigation/signin.png) |
| As a user, I can easily tell if I'm logged in or not, so that I know if I need to log in again to access additional functionality. | Y | ![Navbar logged in](/documentation/testing/user_story/navigation/logged-in.png) ![Navbar logged out](/documentation/testing/user_story/navigation/logged-out.png) |
| As a user, I can maintain my logged-in status, so that my user experience is not compromised. | Y | N/A |
| As a logged-out user, I can clearly see sign in and sign up options, so that I can sign in/sign up as applicable. | Y | ![Sign in and sign up links](/documentation/testing/user_story/navigation/sign-in-up.png) |
| As a logged-in, I can clearly see the feed, liked and other browsing options, so that I can navigate the site easily. | Y | ![Navbar](/documentation/testing/user_story/navigation/logged-in.png) |
| As a logged-in user, I can log out of the site, so that I can protect my privacy and keep my account secure when I am not using it. | Y | ![Sign out link](/documentation/testing/user_story/navigation/sign-out.png) |
| As a user, I can only access pages relevant to my logged-in/logged-out status, so that my user experience is not compromised by allowing me to access irrelevant pages. | Y | N/A |
| As a user, I can view custom error pages when there is a page error, so that I can easily tell I am still on the website and can get back to a page I want to be on. | Y | ![Not found](/documentation/testing/user_story/navigation/not-found.png) |

#### Profile page

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a user, I can view other users' profile pictures, so that I can easily identify them. | Y | ![Profiles](/documentation/testing/user_story/profile/profile-pictures.png) |
| As a user, I can view other users' profiles, so that I can see their posts and any information they have shared about themselves. | Y | ![Profile page](/documentation/testing/user_story/profile/profile-page.png) |
| As a user, I can see a list of profiles with the most followers, so that I can see which profiles are popular. | Y | ![Popular profiles](/documentation/testing/user_story/profile/popular-profiles.png) |
| As a user, I can see a list of the profiles which have been followed the most in the last week, so that I can see which profiles are becoming more popular. | Y | ![Trending profiles](/documentation/testing/user_story/profile/trending-profiles.png) |
| As a user, I can view statistics about another user by going on their profile (bio, number of posts, followers and users followed), so that I can learn more about them. | Y | ![User stats](/documentation/testing/user_story/profile/user-stats.png) |
| As a logged-in user, I can follow and unfollow other users, so that I can curate my feed to contain only posts by users whose content I like. | Y | ![Follow unfollw button](/documentation/testing/user_story/profile/follow-unfollow.png) |
| As a logged-in user, I can edit my profile, so that I can change my profile picture and update my bio at any time. | Y | ![Edit profile button](/documentation/testing/user_story/profile/edit-profile-button.png) ![Edit profile form](/documentation/testing/user_story/profile/edit-profile-form.png) |
| As a logged-in user, I can change my username and/or password, so that I can change my display name and keep my profile secure. | Y | ![Change username button](/documentation/testing/user_story/profile/change-username-button.png) ![Change username form](/documentation/testing/user_story/profile/change-username-form.png) |
| As a user, I can view users' posts on their profile page, so that I can see all the posts by that user. | Y | ![Change password button](/documentation/testing/user_story/profile/change-password-button.png) ![Change password form](/documentation/testing/user_story/profile/change-password-form.png) |

#### Posts page

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a user, I can view the most recent posts by all users, ordered by most recently created first, so that I am up to date with the newest content. | Y | ![Home page](/documentation/testing/user_story/posts/recent-posts.png) |
| As a user, I can use keywords to search for posts, so that I can find the posts and user profiles I am most interested in. | Y | ![Search posts](/documentation/testing/user_story/posts/search-posts.png) |
| View liked posts | As a logged-in user, I can view the posts I have previously liked, so that I can easily find posts I have enjoyed the most. | Y | ![Liked posts](/documentation/testing/user_story/posts/liked-posts.png) |
| Browse posts by continent | As a user, I can browse posts by continent, so that I can find posts relating to a particular continent that I am interested in. | Y | ![Browse by continent](/documentation/testing/user_story/posts/browse-by-continent.png) |
| View posts of followed users | As a logged-in user, I can view content filtered by only the users I follow, so that I can keep up to date with what they are posting about. | Y | ![Feed posts](/documentation/testing/user_story/posts/feed-posts.png) |
| Infinite scroll | As a user, I can keep scrolling through the posts as they are automatically loaded on the site, so that I don't have to click on "next page" etc. | Y | N/A |

#### Single post page

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a user, I can view the page of a selected post, so that I can read the caption and view the comments on it. | Y | ![Post page](/documentation/testing/user_story/posts/post-page.png) |
| As a post owner, I can edit the title, image and content of any of my posts, so that I can make corrections or update my post after it was created. | Y | ![Edit post button](/documentation/testing/user_story/posts/edit-post-button.png) ![Edit post form](/documentation/testing/user_story/posts/edit-post-form.png) |
| As a logged-in user, I can add comments to any post, so that I can share my thoughts about it. | Y | ![Comment form](/documentation/testing/user_story/posts/comment-form.png) |
| As a user, I can see the date a comment was posted, so that I know how old it is. | Y | ![Comment view](/documentation/testing/user_story/posts/comment-view.png) |
| As an owner of a comment, I can delete my own comment, so that I can control removal of all my own comments from the application. | Y | ![Comment delete button](/documentation/testing/user_story/posts/comment-edit-delete.png) |
| As an owner of a comment, I can edit my own comment, so that I can fix or update it if I want to. | Y | ![Comment edit button](/documentation/testing/user_story/posts/comment-edit-delete.png) ![Comment edit form](/documentation/testing/user_story/posts/comment-edit-form.png) |
| As a logged-in user, I can like other users' comments, so that I can show my support for comments I agree with. | Y | ![Comment like](/documentation/testing/user_story/posts/comment-like.png) |
| As a user, I can keep scrolling through comments as they are automatically loaded on the post page, so that I don't have to click “next” etc. | Y | N/A |
| As a user, I can view comments under a selected post, so that I can see other people's thoughts and interact with them. | Y | ![Comment view](/documentation/testing/user_story/posts/comment-view.png) |

#### Adding and liking posts

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a logged-in user, I can create my own posts, so that I can share my them with other users. | Y | ![Create post](/documentation/testing/user_story/posts/create-post.png) |
| View a post | As a user, I can can view the details of a single post by clicking on it, so that I can learn more about it. | Y | ![Post page](/documentation/testing/user_story/posts/post-page.png) |
| Like a post | As a logged-in user, I can like another user's post, so that I can show my support for the posts that interest me. | Y | ![Like post](/documentation/testing/user_story/posts/like-post.png) |
| Delete post | As a post owner, I can delete any of my posts, so that I can remove any posts I no longer want people to see. | Y | ![Delete post button](/documentation/testing/user_story/posts/delete-post.png) |

#### Contact form

| User story | Requirement met? | Screenshot |
| --- | --- | --- |
| As a user, I can send a message to the site admins, so that I can directly share any feedback I have about the site in general. | Y | ![Contact form](/documentation/testing/user_story/contact/contact-form.png) |
| As a user, I can see different images on the sign in, sign up and contact forms, so that each form is visually different. | Y | ![Sign up form](/documentation/testing/user_story/navigation/signup.png) ![Sign in form](/documentation/testing/user_story/navigation/signin.png) ![Contact form](/documentation/testing/user_story/contact/contact-form.png) |
| Submit contact form | As a user, I can see a message confirming my message has been sent, so that I know it was successful. | Y | ![Contact form success](/documentation/testing/user_story/contact/contact-form-success.png) |

### Manual testing - frontend

| Page | User Actions | Expected Results | Y/N | Comments |
|---|---|---|---|---|
| **Navigation** | | | | |
| 1 | Click on the logo | Home page is displayed | Y | |
| 2 | Click New postcard | Create post form is displayed | Y | |
| 3 | Click Home | Home page is displayed | Y | |
| 4 | Click Feed | Only posts by users user is following are displayed | Y | |
| 5 | Click Feed but no users followed | Image and message appear saying no posts found | Y | |
| 6 | Click Liked | Only posts user has liked are displayed | Y | |
| 7 | Click Like but no posts liked| Image and message appear saying no posts found | Y | |
| 8 | Click Continents | Dropdown list of continents is displayed | Y | |
| 9 | Click Continents but no available posts | Image and message appear saying no posts found | Y | |
| 10 | Click a specific continent from dropdown | Posts filtered by that continent are displayed | Y | |
| 11 | Click Sign out | User is signed out and redirected to home page | Y | |
| **Search bar** | | | | |
| 1 | Enter search term | Posts filtered by search term are displayed | Y | |
| 2 | Enter search term for which there are no results | Image and message appear saying no posts found | Y | |
| **Sign Up** | | | | |
| 1 | Enter username | Username is set | Y | |
| 2 | Enter password | Password is set | Y | |
| 3 | Enter confirm password | Confirm password is set | Y | |
| 4 | Click sign up with all valid inputs | User account is created and user is redirected to sign in page | Y | |
| 5 | Click sign up with invalid inputs | User account is not created and error messages are displayed telling user what the issue is | Y | |
| 6 | Click sign in link | User is redirected to sign in page | Y | |
| **Sign In** | | | | |
| 1 | Enter username | Username is set | Y | |
| 2 | Enter password | Password is set | Y | |
| 4 | Click sign in with existing data | User is signed in and directed to either the last page they were on or the home page | Y | |
| 5 | Click sign in with non-existant user data | Error message is displayed telling the user they are unable to log in with provided credentials | Y | |
| 6 | Click sign up link | User is redirected to sign up page | Y | |
| **Create post** | | | | |
| 1 | Upload image | Image is set | Y | |
| 2 | Type in title | Title is set | Y | |
| 3 | Type in content | Content is set | Y | |
| 4 | Select continent | Continent is set | Y | |
| 5 | Select holiday type | Holiday type is set | Y | |
| 7 | Click create button | User is redirected to post page with updated post | Y | |
| 8 | Click cancel button | User is redirected to the last page they were on | Y | |
| **Post** | | | | |
| 1 | Click on the Edit button | Edit post form is displayed | Y | |
| 2 | Click on the Delete button | Post is deleted | Y | |
| 3 | Click the heart icon as a logged-in user | Like is added to the post and the heart turns solid pink | Y | |
| 4 | Click the heart icon as a logged-out user | Message displays saying you must log in to like posts | Y | |
| 5 | Click the heart icon as the post owner | Message displays saying you can't like your own post | Y | |
| 6 | Type a new comment and click post | New comment appears below post and comment count increases by one | Y | |
| **Edit post** | | | | |
| 1 | Upload a new image | Image is updated | Y | |
| 2 | Type in new title | Title is updated | Y | |
| 3 | Type in new content | Content is updated | Y | |
| 4 | Select continent | Continent is updated | Y | |
| 5 | Select holiday type | Holiday type is updated | Y | |
| 6 | Only update certain fields | Form is submitted with only certain fields updated | Y | Continent and holiday type are set to sefault values unless otherwise selected. |
| 7 | Click save button | User is redirected to post page with updated post | Y | |
| 8 | Click cancel button | User is redirected to post page with unchanged post | Y | |
| **Delete post** | | | | |
| 1 | Click delete button | Post is deleted and user is redirected to the home page | Y | |
| **Comment** | | | | |
| 1 | Click on the Edit button | Edit comment form is displayed | Y | |
| 2 | Click on the Delete button | Comment is deleted and comment count decreases by one | Y | |
| 3 | Click the heart icon as a logged-in user | Like is added to the comment and the heart turns solid pink | Y | |
| 4 | Click the heart icon as a logged-out user | Message displays saying you must log in to like comments | Y | |
| 5 | Click the heart icon as the comment owner | Message displays saying you can't like your own comment | Y | |
| **Follow and unfollow** | | | | |
| 1 | Click on the follow button | Button displays unfollow and following count increases by 1 | Y | |
| 2 | Click on the unfollow button | Button displays follow and following count decreases by 1 | Y | |
| **Profile** | | | | |
| 1 | Click on the Edit profile button | Edit profile form is displayed | Y | |
| 2 | Click on the Change username button | New username form is displayed | Y | |
| 3 | Click on the Change password button | New password form is displayed | Y | |
| **Edit profile** | | | | |
| 1 | Upload a new image | Profile image is updated | Y | |
| 2 | Type in new bio | Bio is updated | Y | |
| 3 | Select location | Location is updated | Y | |
| 4 | Select favourite country | Favourite country is updated | Y | |
| 5 | Select travel experience | Travel eperience is updated | Y | |
| 6 | Only update certain fields | Form is submitted with only certain fields updated | Y | For location and favourite country, the dropdown will show 'Afghanistan' by default but this value will not be saved unless it is selected by the user. Travel experience is set to a default value if not otherwise selected. |
| 7 | Click save button | User is redirected to profile page with updated profile | Y | |
| 8 | Click cancel button | User is redirected to profile page with unchanged profile | Y | |
| **Edit username** | | | | |
| 1 | Type in new username | Username is updated | Y | |
| 2 | Click save button | User is redirected to profile page with updated username | Y | |
| 3 | Click cancel button | User is redirected to profile page with unchanged username | Y | |
| **Edit user password** | | | | |
| 1 | Type in valid password twice and click Save | Password is updated | Y | |
| 2 | Type in an invalid or non-matching passwords | Error messages are displayed telling user what the issue is | Y | |
| 3 | Click save button | User is redirected to profile page with updated password | Y | |
| 4 | Click cancel button | User is redirected to profile page with unchanged password | Y | |
| **Footer** | | | | |
| 1 | Click on the Contact us link | Contact form is displayed | Y | |
| 2 | Click on the GitHub link | Developer's GitHub page will open in a new tab | Y | |
| **Contact form** | | | | |
| 1 | Type in name | Name is set | Y | |
| 2 | Type in email address | Email is set | Y | |
| 3 | Type in message | Message is set | Y | |
| 4 | Click send with valid inputs | Message is sent and success message shows | Y | |
| 5 | Click send with invalid inputs | Message is not sent and error messages show | Y | |
| 6 | Click send with corrected inputs | Message is sent, success message shows and error messages are cleared | Y | |

### Manual testing - backend

| App | Test | Y/N |
|---|---|---|
| **comment_likes** | | |
| 1 | Comment likes are ordered in reverse order of creation date | Y |
| 2 | User cannot create duplicate comment likes | Y |
| 3 | User can create new comment likes if they are signed in | Y |
| 4 | User can delete a comment like only if they are its owner | Y |
| **comments** | | |
| 1 | Comments are ordered in reverse order of creation date | Y |
| 2 | Retrieved comments show number of likes and owner data, as well as comment content and creation time | Y |
| 3 | Comments created_at and updated_at are written as e.g., "2 days, 7 hours ago" | Y |
| 4 | User can create a new comment only if they are signed in | Y |
| 5 | User can update a comment only if they are its owner | Y |
| 6 | User can delete a comment only if they are its owner | Y |
| **contact** | | |
| 1 | User can submit a new contact message regardless of signed-in status | Y |
| **followers** | | |
| 1 | User can follow another user only if they are signed in | Y |
| 2 | User cannot follow the same user twice | Y |
| 3 | User can delete their own follow | Y |
| **likes** | | |
| 1 | Likes are ordered in reverse order of creation date | Y |
| 2 | User cannot create duplicate likes | Y |
| 3 | User can create new likes if they are signed in | Y |
| 4 | User can delete a like only if they are its owner | Y |
| **posts** | | |
| 1 | User can only create a new post if they are signed in | Y |
| 2 | Post will not be created without a title | Y |
| 3 | Post can be created without content | Y |
| 4 | Post image, continent and holiday_type will be set to default values if not otherwise set | Y |
| 5 | Post image, continent and holiday_type will be set to new values if set | Y |
| 6 | continent and holiday_type will provide dropdown options | Y |
| 7 | Posts are ordered in reverse order of creation date | Y |
| 8 | Each post displays like and comment count | Y |
| 9 | continent_display and holiday_type_display are set to relevant display values based on selected continent and holiday_type values respectively | Y |
| 10 | User will see and error message if they upload an image that is too large | Y |
| 11 | Posts can be filtered by owner, liked and continent | Y |
| 12 | Posts can be filtered by search terms | Y |
| 13 | User can update a post only if they are its owner | Y |
| 14 | User can delete a post only if they are its owner | Y |
| **profiles** | | |
| 1 | User profile image is set to default image upon creation | Y |
| 2 | travel_experience will be set to newbie upon creation | Y |
| 3 | User can update a profile only if they are its owner | Y |
| 4 | location and favourite_country will provide a dropdown list of all countries to select from | Y |
| 5 | name, content, location and favourite_country will be empty strings unless otherwise set | Y |
| 6 | Profiles are ordered in reverse order of creation date | Y |
| 7 | Each profile is connected to a unique User model instance | Y |
| 8 | Each profile displays the following_count, followers_count and recent_followers_count | Y |
| 9 | travel_experience_display is set to relevant display value based on the selected travel_experience_value | Y |
| 10 | recent_followers_count increases by one each time a new user follows the profile, but reduces by one a week after each follow | Y |
| 11 | followers_count increases by one each time a new user follows the profile | Y |
| 12 | following_count increases by one each time the user follows a new profile | Y |
| 13 | location and favourite_country display the country name rather than the country code | Y |

### Automated testing

#### JavaScript

Automated tests were run to check the rendering of the navbar and footer:
[NavBar](/frontend/src/components/__tests__/NavBar.test.js)
[Footer](/frontend/src/components/__tests__/Footer.test.js)

More automated JavaScript tests should be added in future to improve testing process and help with regression testing.

#### Python

No automated tests have been run in Python; however, these should be added in the future to improve testing process and help with regression testing.

### Bugs

| Issue # | Title | Description | Outcome |
| --- | --- | --- | --- |
| [#36](https://github.com/mariacjones1/postcards/issues/36) | Navbar toggle | On smaller screens, navbar collapses when clicking on either the icon or the dropdown arrow for continents. Only clicking on the word 'Continents' itself shows the expanded list. | Dropdown is set to be permanently expanded if the navbar is open on smaller screens, rather than a second dropdown. |
| [#38](https://github.com/mariacjones1/postcards/issues/38) | Compress logo | Site load is slow due to logo. Replace logo with compressed version to increase site load speed. | Logo replaced with compressed version. Site load is quicker. |
| [#42](https://github.com/mariacjones1/postcards/issues/42) | Navbar dropdown toggle | Navbar does not close when selecting a continent from Continents dropdown. | Each dropdown NavLink is nested within a Dropdown.Item, fixing the issue. |
| [#43](https://github.com/mariacjones1/postcards/issues/43) | Footer | The footer should be at the bottom of the screen and not overlap any content. | Background colour set on footer so there is no overlap with content behind. Height also reduced so it takes up less space on the screen. |
| [#46](https://github.com/mariacjones1/postcards/issues/46) | Comment like count | Comment like count does not immediately appear when posting a new comment. | Comment like count set to show as 0 if there is no value received from the API. As soon as the page relaods, the API value is retrieved and updates as expected. |
| [#48](https://github.com/mariacjones1/postcards/issues/48) | Filtered view refresh | When the user is on a filtered view and refreshes the page, the url stays the same but the non-filtered home page view renders. UPDATE: This only happens with the continent filter. | Selected continent is stored in local storage. |
| [#52](https://github.com/mariacjones1/postcards/issues/52) | Edit profile | Users cannot update profile without adding both location and favourite country. | allow_blank=True and required=False added to profiles serializer for both location and favourite_country. |
| [#53](https://github.com/mariacjones1/postcards/issues/53) | New user login redirect | First-time users are briefly navigated back to the sign-up page before being redirected to the home page upon logging in. | if statement added to login redirect to send users to the homepage if their previous location was /signup. |
| [#54](https://github.com/mariacjones1/postcards/issues/54) | User sign out | User is automatically signed back in upon page refresh after signing out | Does not appear to be an issue in the deployed version, only development. No fix needed. |

#### Other known bugs

Infinite scroll does not work in the development environment and perpetually shows the loading icon; however, it works fine on the deployed site so no fix needed.

All console.log() statements left in the files are in try catch blocks and have been commented out but left in for future debugging ([as recommended in the Moments walkthrough project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/f50e8ca2d7f6497c9d9857048d973ae4/)).

### Validation

#### HTML validation

[W3C](https://validator.w3.org/)

index.html run through validator using direct input with no warnings:

![index](/documentation/testing/validation/html/index.png)

Error can be safely ignored.

Other pages validated by URL as remaining HTML content is written in React files:

![URL validation](/documentation/testing/validation/html/url-validation.png)

#### CSS validation

[W3C Jigsaw](https://jigsaw.w3.org/css-validator/)

All files passed with no warnings.

Errors found:

- webkit-scrollbar: this flags as an error because it is [only available in Blink- and WebKit-based browsers](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar). The app has been tested in the below browsers with no issues.
- Same color for background-color and border-color: app has been thoroughly tested and this poses no issues. Keeping the CSS as-is allows for easier future mainenance of the affected elements.

App.module.css
![App.module.css](/documentation/testing/validation/css/App.png)

Asset.module.css
![Asset.module.css](/documentation/testing/validation/css/Asset.png)

Avatar.module.css
![Avatar.module.css](/documentation/testing/validation/css/Avatar.png)

Button.module.css
![Button.module.css](/documentation/testing/validation/css/Button.png)

Comment.module.css
![Comment.module.css](/documentation/testing/validation/css/Comment.png)

CommentCreateEditForm.module.css
![CommentCreateEditForm.module.css](/documentation/testing/validation/css/CommentEditCreateForm.png)

Footer.module.css
![Footer.module.css](/documentation/testing/validation/css/Footer.png)

MoreDropdown.module.css
![MoreDropdown.module.css](/documentation/testing/validation/css/MoreDropdown.png)

NavBar.module.css
![NavBar.module.css](/documentation/testing/validation/css/NavBar.png)

NotFound.module.css
![NotFound.module.css](/documentation/testing/validation/css/NotFound.png)

Post.module.css
![Post.module.css](/documentation/testing/validation/css/Post.png)

PostCreateEditForm.module.css
![PostCreateEditForm.module.css](/documentation/testing/validation/css/PostEditCreateForm.png)

PostsPage.module.css
![PostsPage.module.css](/documentation/testing/validation/css/PostsPage.png)

Profile.module.css
![Profile.module.css](/documentation/testing/validation/css/Profile.png)

ProfileEditForm.module.css
![ProfileEditForm.module.css](/documentation/testing/validation/css/ProfileEditForm.png)

ProfilePage.module.css
![ProfilePage.module.css](/documentation/testing/validation/css/ProfilePage.png)

SignInUpForm.module.css
![SignInUpForm.module.css](/documentation/testing/validation/css/SignInUpForm.png)

#### JavaScript validation

[ESLint](https://eslint.org/)

ESLint was installed using the following command:
npm init @eslint/config

No warnings were returned. Errors were found in some files as per the screenshots below. All other files returned with no errors.
The following rules were ignored:

![ignored](/documentation/testing/validation/js/ignored.png)

##### App.js
![App.js validation](/documentation/testing/validation/js/app.png)

##### index.js
![index.js validation](/documentation/testing/validation/js/index.png)

##### components

![components folder validation](/documentation/testing/validation/js/components-1.png)
![components folder validation](/documentation/testing/validation/js/components-2.png)

##### contexts

![contexts folder validation](/documentation/testing/validation/js/contexts.png)

##### pages

###### auth

![auth folder validation](/documentation/testing/validation/js/pages-auth.png)

###### comments

![comments folder validation](/documentation/testing/validation/js/pages-comments.png)

###### posts

![posts folder validation](/documentation/testing/validation/js/pages-posts-1.png)
![posts folder validation](/documentation/testing/validation/js/pages-posts-2.png)

###### profiles

![profiles folder validation](/documentation/testing/validation/js/pages-profiles.png)

#### Python validation

[PEP8](https://pep8ci.herokuapp.com/)

##### drf_postcards

[drf_postcards validation](/documentation/testing/validation/python/drf_postcards.pdf)

##### comment_likes

[comment_likes validation](/documentation/testing/validation/python/comment_likes.pdf)

##### comments

[comments validation](/documentation/testing/validation/python/comments.pdf)

##### contact

[contact validation](/documentation/testing/validation/python/contact.pdf)

##### followers

[followers validation](/documentation/testing/validation/python/followers.pdf)

##### likes

[likes validation](/documentation/testing/validation/python/likes.pdf)

##### posts

[posts validation](/documentation/testing/validation/python/posts.pdf)

##### profiles

[profiles validation](/documentation/testing/validation/python/profiles.pdf)

### Browser tests

| Browser | Layout | Features |
| --- | --- | --- |
| Chrome | Y | Y |
| Firefox | Y | Y |
| Edge | Y | Y |
| Safari* | Y | Y |

*Tested on mobile

### Responsiveness

Tested using Responsive Viewer extension in Chrome dev tools.

#### Home page

![Home page responsiveness](/documentation/testing/responsiveness/home.png)

#### Post page

![Post page responsiveness](/documentation/testing/responsiveness/post.png)

#### Edit post page

![Edit post page responsiveness](/documentation/testing/responsiveness/edit-post.png)

#### Profile page

![Profile page responsiveness](/documentation/testing/responsiveness/profile.png)

#### Edit profile page

![Edit profile page responsiveness](/documentation/testing/responsiveness/edit-profile.png)

#### Sign up page

![Sign up page responsiveness](/documentation/testing/responsiveness/sign-up.png)

#### Sign in page

![sign in page responsiveness](/documentation/testing/responsiveness/sign-in.png)

#### Contact page

![Contact page responsiveness](/documentation/testing/responsiveness/contact-form.png)

### Dev Tools Lighthouse tests

#### "/"

![Home page lighthouse test](/documentation/testing/lighthouse/home.png)

#### "/feed"

![Feed page lighthouse test](/documentation/testing/lighthouse/feed.png)

#### "/liked"

![Liked page lighthouse test](/documentation/testing/lighthouse/liked.png)

#### "/posts/continent/:continent"

![Continent page lighthouse test](/documentation/testing/lighthouse/continent.png)

#### "/posts/:id"

![Post page lighthouse test](/documentation/testing/lighthouse/post.png)

#### "/profiles/:id"

![Profile page lighthouse test](/documentation/testing/lighthouse/profile.png)

#### "/signup"

![Sign up page lighthouse test](/documentation/testing/lighthouse/sign-up.png)

#### "/signin"

![Sign in page lighthouse test](/documentation/testing/lighthouse/sign-in.png)

#### "/contact"

![Contact page lighthouse test](/documentation/testing/lighthouse/contact.png)

## Deployment

### Backend

Backend deployment completed before creating frontend.

1. Create a new app on [Heroku](https://id.heroku.com/). Make sure to give it a unique name
2. In the settings tab, add the required Config Vars:
   - ALLOWED_HOST (set to deployed app URL, removing 'https://' and the trailing slash)
   - CLIENT_ORIGIN (set to deployed app URL, removing the trailing slash)
   - CLOUDINARY_URL (taken from Cloudinary API environment variable in Product Environment Credentials)
   - DATABASE_URL (taken from ElephantSQL database)
   - SECRET_KEY (generate a new one, do not use any key that has been saved in stttings.py)
3. Install gunicorn in workspace terminal
4. Create a Procfile
5. Add corsheaders to INSTALLED_APPS in settings.py and corsheaders middleware to MIDDLEWARE (at the top), and set CORS_ALLOWED_ORIGINS to True
6. Add JWT attributes to settings.py
7. Make sure DEBUG is either set to False, or to only be True if the DEV environment variable exists
8. Make sure requirements.txt is up-to-date and all code has been added, committed and pushed to GitHub
9. Back on Heroku, open the deply tab and connect to your GitHub repository
10. Click Deploy Branch and then either View or Open app to view the deployed app

### Combining with the frontend

1. Set up WhiteNoise for static files by installing it in the root directory and adding it to requirements.txt
2. Create an empty staticfiles folder in the root directory
3. Make sure cloudinary_storage is below django.contrib.staticfiles in settings.py
4. Add WhiteNoise between SecurityMiddleware and SessionMiddleware
5. Add code to the TEMPLATES DIRS key to tell Django and WhiteNoise where to look for React's index.html file
6. Add STATIC_ROOT and WHITENOISE_ROOT variables to the static files section
7. Remove root_route from drf_postcards urls.py and import TemplateView
8. Replace root_route with TemplateView in urlpatterns
9. Add the 404 handler
10. Add 'api/' to the beginning of all API URLs, with the exception of the home page and the admin panel
11. Set the baseURL in axiosDefaults.js in the frontend src folder to '/api'
12. Collect admin and DRF staticfiles to the newly created staticfiles directory
13. In the frontend directory, compile and move the React staticfiles (this needs to be redone before deplying any changes to the React code)
14. Add a runtime.txt file to the root directory to set the Python version for Heroku to use
15. Deploy the combined application from the Heroku dashboard

## Credits

### Media

- The original logo image was found on [rawpixel.com](rawpixel.com) and edited using [GIMP](https://www.gimp.org/)
- The favicon was created from the logo using [favicon.io](favicon.io)
- Font icons were sourced on [Font Awesome](https://fontawesome.com/)
- Other icons were sourced on [flaticon](https://www.flaticon.com)
- Fonts were sourced on [Google Fonts](https://fonts.google.com/)
- Post and form images were sourced on [Pexels](https://www.pexels.com/)
- Profile images were sourcd on [Google Images](https://images.google.co.uk/)

### Coding resources

- [Django REST framework documentation](https://www.django-rest-framework.org/)
- [React Bootstrap documentation](https://react-bootstrap-v4.netlify.app/)
- [Django countries documentation](https://github.com/SmileyChris/django-countries)
- [CI Tutor support](https://learn.codeinstitute.net/ci_support/diplomainsoftwaredevelopmentadvancedfrontend/support)
- [CI Django REST Framework walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+DRF+2021_T1/courseware/f775d54df4da44d18309888b3fe884f7/bc5fbada70104d489aa0363a03d8bda8/)
- [CI Moments walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/)
- [Stack overflow](https://stackoverflow.com/)

#### Mentors

- [Aleksei Konovalov](https://github.com/lexach91) for mentoring me at the start of the project and supporting me primarily with the backend development
- [Iuliia Konovalova](https://github.com/IuliiaKonovalova/) for taking me on as a mentee at the 11th hour and supporting me primarily with frontend development, testing and documentation
  