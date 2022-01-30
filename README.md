# LoveQuizz
_________________________________
LoveQuizz is an online quizz game which contains 10 questions. It is a universal quiz for anyone to play. A user will click on the start button on the screen to begin the game. When a user clicks on the correct answer, the screen will turn green, and for every incorrect selection, the screen will turn red. The user's total score is displayed on the screen throughout the game. Once all the questions have been answered, the restart button will appear and the user can restart the quizz.

The goal of the project is to create an online quiz which tests the general knowledge of the contestent. There is also a feedback section which allows the user provide comments on the quiz.
![responsive quiz](https://user-images.githubusercontent.com/93731898/151250892-d330c66d-11ed-47fb-a2c4-2c2111848a2c.PNG)


Click here to visit the [LoveQuizz](https://deepak9912.github.io/LoveQuizz/) webpage.

## Features

The top right hand side navbar has a 'more info' navigation bar, which the user can click to find additional information about the quiz. Once user has read the instructions, the user can click on x to close the window. 

![modal](https://user-images.githubusercontent.com/93731898/151251284-c420bb3e-6cba-4460-abfa-98175468b149.PNG)


There is a feedback section next to user-info, giving the user the opportunity to provide comments.

![feedback](https://user-images.githubusercontent.com/93731898/151251309-5b65e01d-516f-4bf3-85f8-72c24cdd5414.PNG)

As per the introduction, when the user clicks on the correct answer, the screen will turn green and a point will be added to the correct answers score in the score area and for an incorrect answer the screen will become red and the incorrect score will increase.

![incorrect answer](https://user-images.githubusercontent.com/93731898/150696270-4f025ec0-7b33-43b6-8a57-00141dce3d3d.PNG)

![correct answer](https://user-images.githubusercontent.com/93731898/150696271-bea0e06a-9a43-41a2-a346-bf820b1871d8.PNG)


Once the user has answered all the questions, the Restart button will appear allowing the user to retake the quiz.

### Other Features
1. All external links open in a new tab.
2. HTML code is structured with sematic markup.
3. The online quiz is responsive on different screens.

## User Experience
As quiz developer, I would like:
1. Build an online quiz that users would find intersting to play
2. Add navigation options to navigate the quiz easily
3. Offer a quiz that is enjoyable and challenging to the user.

As user, I would like:
1. To be able to understand the main purpose of the game.
2. To be able to easily navigate throughout the game and choose a quiz to play.
3. Be able to see my results after answering the questions.

### Design
Visual Design
1. I have opted for the plain screen design, there is no background image.
2. Used border radius property in CSS to give the square boxes a rounded edge.
3. Used in different sections to define each section precisely.

User Experience Design
1. The quiz uses established conventions for interaction. Users can click on the top right hand side link to read rules, or simply begin by clicking on the Start button.
2. The score is updated after every answer selected and the screen is highlighted in a color, i.e green for a correct answer and red for a wrong answer.

## Testing

### Issues and Bugs found & fixed

1. Creating multiple modals:

While creating two modals on the home screen for additional information and feedback, I was unable to add the second modal window for feedback. I tried to use querySelectorAll to target both tha 'modal' and 'btn' but it did not work. Therefore I created a second page for the feedback section using HTML and CSS and added a form for users to complete.

2. Restart the quiz:

To set the scores for the quiz, I created two functions, one which increases the score for a correct answer and one which increases the score for a incorrect answer. I created a variable 'SCORE' in both the functions and assigned it to correct and incorrect answer from the DOM and added ++score in the innerText. Both the score functions were then added to setQuestion function which assigns the question to the user and this worked. I adopted this idea of setting the score from LoveMath project from the Code Institute.

I wanted to restart the quiz on the home screen so that when the user restarts the quiz, the score will reset to 0. For that i tried to create a global variable and set it to score zero and assinged it to chooseAnswer function so that the score increases with every correct or incorrect, but it didn't seem to work when i restarted the quiz, therefore i added document.body.textContent to the restart function. WHen the user restarts the function, a new window opens up with a text message End of quizz!, please refresh the page to start again.Once user refresh the page, the quiz will start again. But then i found out another way to reset the score, i added a location.reload() to reset the scores, it refreshes the page and the scores are reset to zero.

When restarting the page to retake the quiz, the restarted page was highlighted in red or green depending on the last answer provided (correct green & incorrect red), but the home page screen color is different, therefore i created a dafault class in CSS and assigned home screen color and added document.body.add('default') which changed to the default home screen color when restarting the quiz.

3. Multiple click options:

When I finished the project, my colleague noticed they could click on the option multiple times. To resolve the issue, I defined selctedBtn (event.target) and added hide class to all the buttons when I selectedBtn, this was successful and the other options are hidden.

However, by applying this solution it caused the other answer options to become hidden, therefore this required a fix. I solved this problem by removing the hide class from all the buttons in my quizStart function. Now the user can select only one answer and once an answer is chosen, the other options will be disabled.


## Validation checks
The webiste was tested on W3C to validate HTML AND CSS code structure.

HTML5
![HTML5](https://user-images.githubusercontent.com/93731898/150697642-1e5b0cff-6f0a-4016-b8d9-3823956c3375.PNG)

CSS3
![css](https://user-images.githubusercontent.com/93731898/150697653-a851939c-33b8-4823-a93d-9e472fcfff45.PNG)

LightHouse
![LightHouse](https://user-images.githubusercontent.com/93731898/150697744-1337031b-2417-459c-bbb9-cab7d615e9fd.PNG)

JS Hint
![jshint](https://user-images.githubusercontent.com/93731898/151658768-124f5ae0-f846-45a7-a9e2-8b09f8bfab7d.PNG)


The testing was completed using the Google Chrome Browser. Chrome Developer Tool was applied extensively, particularly to check responsiveness on different screen sizes. Testing was also done using Firefox on desktop, and again on Google Chrome.

1. Responsive on all device sizes between 500px - 1200px wide
2. Quiz tested on the following devices
##### Samsung Galaxy Note 3 (360px x 640px)
##### Samsung Galaxy S8 (360px x 740px)
##### Samsung Galaxy S9+(320px x 658px)
##### Pixel 3 (393px x 786px)
##### Apple iPad Mini (468px x 4024)
##### Apple iPhone X (375px x 812px)

## Future Features
I am planning to add a feedback section using modal, which will alow me to remove the feedback page. I would also like to add categories for different types of quizes, therefore users could have multiple quizes to choose from.

## Accessibility
1. There are no images on the site.
2. Colours have a stark contrast between background and foreground.
3. All the links open on different pages.

## Testing
1. Ran the Wave web assessment tool to fix any structural or contrast errors.
2. Developer tool applied to review website on different screens.
3. The Website was tested on Google Chrome and Mozilla firefox.
4. The website was viewed on a variety of devices such as Desktop, Laptop, iPhone6, Samsung and Huwawei phone.
5. A substantial amount of testing was completed to ensure that all pages were linking correctly.
6. Friends and family members were asked to review the site and content to point out any bugs and/or user experience issues.

## Deployment
The project was deployed through GitHub by following the below steps:
1. Log in to GitHub and locate Your repositories through the dropdown menu at the top right of the main screen.
2. Once on the "Your repositries" page, locate the project name and select.
3. On the project page click "Settings" on the tack bar.
4. Scroll through the Settings page until the "GitHub Pages" section appears.
5. Within the "GitHub Pages" section, click the link to Source
6. Under "Source", click the dropdown menu and choose "None" and then select "Master Branch".
7. The page will automatically refresh and retunrs the user to the "Settings" page.
8. Scroll back down through the "Settings" page to locate the now published site link in the "GitHub Pages" section.

## Technologies Used
1. Javascrip
2. CSS
3. HTML
4. GitHub
5. GitPod
6. GitHub Pages
7. Firefox developer tools
8. Chrome developer tools
9. JSHint
10. W3 HTML Validator
11. W3 CSS Validator

## Credits
1. Used YouTube tutorials for ideas on creating online quiz [here](https://www.youtube.com/watch?v=49pYIMygIcU&t=191s)
2. [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
3. [Coding with Nick](https://www.youtube.com/channel/UCsseF0Swqs5FsXXtEXo1m_A)
4. [MDN Web documents](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
5. Modal content was added using [W3Schools.com](https://www.w3schools.com/w3css/w3css_modal.asp)
6. Script.js, line 43 code to shuffle the questions was adopted from [Stack OverFlow](https://stackoverflow.com/)
7. Script.js, functions on line 69 and 75 were adopted using previous LoveMath project through [Code Institute](https://codeinstitute.net/ie/)

## Special Thanks
Special thanks to my mentor Victor Miclovich, Slack Community, Kasia, Rebecca & Sean from tutor support for their assistance throughout this project.
