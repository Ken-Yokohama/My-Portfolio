# My-Portfolio
Static Landing Page for My Personal Portfolio Website

![Ken Yokohama Portfolio Logo](https://github.com/Ken-Yokohama/My-Portfolio/blob/master/cover.JPG?raw=true)

### Brief Summary
My-Portfolio is a static landing page used to showcase all of my projects, technologies, experiences and achievements throughout my career as a developer. This project was built using React and uses Framer-Motion to handle all CSS animation. Additionally My-Portfolio uses several 3rd party API's to track and display the amount of times each user visited the site as well as handle email requests from the contact me page.

### Links:
- [Live Preview](https://KenYokohama.com/)

### Features:
- Personalized User View Count using the IP Adress API and Count API
- Email Verification and Forwarding using Formspree
- Intersection Observer Animation Triggers
- Route Animation Triggers
- Copy to Clipboard Animation Triggers
- Fully Responsive Grid and Flexbox Layout

### Technologies & Templates Used
| Technologies | Usage                                      |
| ----------------- | ------------------------------------------------ |
| React Router Dom | Navigation & Routing |
| Material UI | CSS Components, Styles & Icons       |
| Framer Motion| CSS Animations|
| Axios| API Pull Requests|
| IP Address API| Handling Personalized Unique User ID's|
| Count API| Handling Page View Count|
| Formspree| Email Handling|
| React Intersection Observer| Intersection Observer|
| React Copy-To-Clipboard | onClick Copy Paste |
| React Elastic Carousel| Carousel Menu|
| Npm GH-Pages | Web Hosting |

### Version Logs
V1.0 15 Mar '22 - Original Release

- Created React App
- Installed Npm Packages (MUI, Axios, Framer-Motion & React-Router-Dom)
- Organized Files following Best Practices for Components, Containers & Pages
- Added Routes for Home, About & Contact Page
- Added Navbar
- Added Styles for Typography
- Added Styles for Quick Links
- Added Responsiveness to Menu
- Added Animations for Menu Containers
- Added Responsive Styles to Navbar for better UX of mobile devices
- Added Responsive Styles and Active Styles for Nav Menu Items
- Added Animations for Menu Items using Framer-Motion
- Added Animations, Styles, ToolTips to quick links
- Added Ability to copy to clipboard when clicking on the quick links

V1.1 16 Mar '22 - Responsive Layout, Design and Typography

- Converted Typography to be Fully Responsive and Scale with a clamped Viewport Width
- Converted Profile Image to be Responsive and Scale based on Device Size
- Added Project Cards w/ Animations using Framer-Motion
- Added Hover Animations to Cards and Buttons


V1.2 17 Mar '22 - Contact Page

- Designed Home Title Image using Clip2Comic Image Filter
- Added Contact Page Styles, Socials & Contact Form
- Converted Contact Page to be Fully Responsive
- Added Temp Content for About Me Section

V1.3 19 Mar '22 - About Me Page part 1

- Added Fluent Technologies Images and Grid Layout
- Removed unused images
- Fixed Aspect Ratio of Fluent Technologies
- Converted Fluent Technologies to be Responsive
- Added Placeholders for Education, Awards and Certifications


V1.4 20 Mar '22 - About Me Page part 2, Call-To-Action and Footer

- Fixed a Bug where routing to a new page keeps the same page position without scrolling to the top
- Added Button to navigate the users into the View Projects Section from the Home Page
- Created a Call to Action Section which routes to the Contact Me Page
- Create a Footer to display a minamalist version of key information
- Added Responsive layout and Responsive fontsize for the call to action
- Refactored code to include CallToAction, Project and Footer Section into the barrel file
- Added Responsiveness to Footer
- Converted Card Projects to be responsive and used an array to map data to the cards
- Added Social Links to Footer w/ Routing
- Added Styles to Navbar to fill Background on Scroll


V1.5 21 Mar '22 - About Me Page part 3

- Added Engineering and Design Tools i use to the About Me Page
- Added React Elastic Carousel NPM Package to display my Education Section in About Me Page
- Added Images and Responsiveness to the Education Carousel
- Adjusted Carousel Container to have arrows for easier navigation
- Edited Images to isolate myself in group pictures
- Adjusted max container width from 1600px to 1500px
- Added Buttons for Awards and Certifications
- Added Responsiveness to About Title 

V1.6 22 Mar '22 - Contact Me Page

 - Adjusted Max Container width from 1600px to 1500px
 - Adjusted Buttons for Awards and Certifications
 - Added Responsiveness to About Title Section
 - Added Responsive Modals for Awards & Certifications
 - Added Responsiveness to the text of Awards & Certifications
 - Added get in touch links and css
 - Added Responsive Background to Contact Me Page
 - Added Responsive Fonts for Contact Me Page
 - Added Contact Form CSS and Responsiveness
 - Added Icons for Awards and Certifications and adjusted width of buttons 

V1.7 23 Mar '22 - IP Address API and Count API 

 - Refactored responsiveness to contact me image for extra large screen sizes
 - Fixed the positioning of the background in project cards
 - Added Responsiveness to the technologies section of project list
 - Added Axios and call API address API & Count API to display how many times the user has viewed my website
 - Added routing to about me page from home title

V1.8 27 Mar '22 - Pre Deployment 

 - Corrected Project Technologies Used for Kenterest 
 - Added Resume in Menu section
 - Added github pages npm package and replaced browser router with hash router
 - Fixed route path of images from changing path of browser router to hash router
 - Deployed Website to Github Pages

V1.9 28 Mar '22 - Deployment Fixes

 - Refactored img source names due to github pages being case sensitive 
 - Refactored About Me Technologies CSS due to safari 14.8 and below not supporting the css aspect-ration property 
 - Added Responsiveness to the menu for dynamic viewport heights
 - Fixed Viewport to fit the whole width of devices with notches & Changes Webpage Title to Ken Yokohama Portfolio
 - Added Routing to Home Page when clicking on Logo  
 - Fixed an issue When routing to the home page from logo, scroll would remain in place instead of being at 0,0

V1.10 29 Mar '22 - React Copy-To-Clipboard Bug Fixes

 - Fixed a bug in the contact me page where the email and contact number would not copy to the clipboard due to state changes 

V1.11 31 Mar '22 - Favicon and Meta Tags

 - Added favicon and Additional meta tags
 - Added Ka-Chat to Projects 
 - Added a Custom Domain Name to Website 

V1.12 1 Apr '22 - Animations

 - Fixed Routing of Images for new custon domain name
 - Added Animation, transitions on all pages and included intersection observers for projects 
 - Adjusted Intersection Oberver to Fit ios devices better
 - Removed animation for images in about me page to be compatible for Safari browser 
 - Fixed animation timings for displaying project cards
 - Added apple-touch-icons 
 - Added Cover Photo Image File 
