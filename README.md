# Jeopardy-
This game was originally sourced from: https://github.com/airbr/webdev-jeopardy. 

This repository holds the source code for an updated version of Jeopardy. The repository is published for group Project 1 in Software Engineering. 
The final report is located here: https://github.com/alanyoung7/Jeopardy-/blob/main/Software_Engineering___Report_Assignment_1.pdf 

To play the game, go to: https://alanyoung7.github.io/Jeopardy-/public/index.html. 
This game is meant to be controled by a single person (the host) who enters the answers provided by the contestants. The gameplay can be shared over applications such as Zoom or Micorsoft Teams. 
When the game initially loads you will notice a 5X5 marix of blue boxes; each marked with a dollar amaount. These are the dollars awarded to the player that correctly answers that question. Also, there are 5 categories above each column of questions. These are the categories of the questions located in that column. 

To get started, the host should click on the select players dropdown menu located in the upper left hand corner of the screen. 

<img width="215" alt="Screenshot 2023-10-23 at 8 31 35 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/c3bc958e-a605-4147-a733-07b3e42d5246">

Select 2 - 4 players and fill out each players name. When complete select save. 

<img width="512" alt="Screenshot 2023-10-23 at 8 32 19 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/9aa21d0d-c8d6-46f6-883e-b169b8af8965">

The names should appear on the bottom left hand corner of the screen next to a dollar amount of $0. 

<img width="359" alt="Screenshot 2023-10-23 at 8 32 30 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/d38a60dc-3c4a-4f96-b5b3-f55ad1bf6160">

At this point, the game is ready to play. The host can select anyone of the blue boxes marked with a dollar amaount. It is up to each of the contestants as to which question they wish to attempt.  

<img width="1440" alt="Screenshot 2023-10-23 at 8 31 08 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/280f12b0-0179-4eb3-97cd-1493d5c078cc">

For each box chosen, a different question of varying difficulty will pop up with 4 choices as the answers.

<img width="515" alt="Screenshot 2023-10-23 at 8 33 24 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/f424bb36-d09e-40d5-904f-247da5dd77aa">

The host will select the answer provided by the cooresponding player. The game plays in order from player 1 to 2 to 3 to 4 and back to 1 and so on. For each question correctly answered, the cooresponding score will increase by the dollar amount of the question. For each wrong answer given the cooresponding score will decrease by the dollar amount of the question. The game ends when all questions have been answered. 

Music is included with this game. It may or may not play automatically depending on your browser. If you wish to cut it off, select the "Music Control" on the upper right hand corner of the screen 

<img width="205" alt="Screenshot 2023-10-23 at 8 31 17 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/1a0615ab-9737-411a-8403-db09097dac06">

A menu will pop up over the "Select Players" drop down menu. Just select pause or mute to cut it off. 

<img width="275" alt="Screenshot 2023-10-23 at 8 31 25 PM" src="https://github.com/alanyoung7/Jeopardy-/assets/13920198/b1c6e1d2-3d18-4098-aa90-fc77a6cdb4fb">

Have fun!!!!

For developers interested in the source code. The game is written in, HTML5, CSS3, Bootstrap Upgraded to 5.0.2, jQuery Upgraded to 3.6.3.

Changelog: 
1. added more than one player.
2. Added player names.
3. Made game show the correct answer.
4. Changed the questions to be dynamic.
5. Allowed for the categories to change for each game.
6. Added 25000 questions.
7. Created a Python script to randomly change the questions.

Using git from the command line:

 1. Clone Repository
 2. Turn on your audio (Optional... but highly reccomended!)
 3. Open public/index.html with a server of your choice in your web browser `http-server public/`
 4. Enjoy

 To create your own server in Python:
 1. python3 -m http.server
 2. Go to localhost:8000 in your browser and follow the file structure to the index.html file. 
 
 Running make_questions.py using command line:
 1. Navigate to the directory in which the file is saved.
 2. Enter "python make_questions.py" (for Python 3 enter "python3 make_questions.py")
 3. The questions.js file will be automatically generated with 25000 newly randomized questions.

