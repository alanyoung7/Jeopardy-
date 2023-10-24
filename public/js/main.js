import {getQuestions, getCat} from './questions.js';
var n = Math.floor(Math.random() * (999 - 0) + 0);
var questions = getQuestions(n); 
var cat = getCat(n);

document.getElementById('A').innerHTML = cat[0]
document.getElementById('B').innerHTML = cat[1]
document.getElementById('C').innerHTML = cat[2]
document.getElementById('D').innerHTML = cat[3]
document.getElementById('E').innerHTML = cat[4]

var numPlayers;
// Buzzer & Chaching sounds
var buzzer = document.getElementById("buzzer");
buzzer = window.buzzer;

function playbuzzer() {
  buzzer.play();
}

function pausebuzzer() {
  buzzer.pause();
}
var chaching = document.getElementById("chaching");
chaching = window.chaching;

function playchaching() {
  chaching.play();
}

function pausechaching() {
  chaching.pause();
}

//
$(function () {
  // Remove Element after click
  $(".gridbtn").on("click", function () {
    $(this).addClass("disabled");
    $(this).remove();
  });
});

//submit answer and evaluate
$("#closesubmit").on("click", function () {
  $('#myModal').modal('toggle');
  //bit signifies rather the question was answered correctly
  var bit = submit();
  //if the questions were not answered correctly send a message with the correct answer
  if(bit == 1){
    alert(questions[window.currentQuestion].correctAnswer + " is the correct answer.");
  } else {
    alert("Great Job!\n You are correct.\n");
  }
  buzzer.pause();
});


// Trial
$(document).ready(function () {
  $('#myDropdown .dropdown-item').on('click', function () {
      numPlayers = parseInt($(this).attr('value'));
      console.log(numPlayers);

      $(".player-panel").each(function (index) {
          if (index >= numPlayers) {
              $(this).hide();
          } else {
              $(this).show();
          }
      });
  });
});


$('#savePlayerNames1').on('click', function () {
   for (var i = 1; i <= 2; i++) {
       var playerName = $('#playerName' + i).val();
       $('#play' + i).text(playerName);
   }
   $('#playerModal1').modal('hide');
});

$('#savePlayerNames2').on('click', function () {
   for (var i = 1; i <= 3; i++) {
       var playerName = $('#playerNameE' + i).val();
       $('#play' + i).text(playerName);
   }  
   $('#playerModal2').modal('hide');
});

$('#savePlayerNames3').on('click', function () {
   for (var i = 1; i <= 4; i++) {
       var playerName = $('#playerNameEN' + i).val();
       $('#play' + i).text(playerName);
   } 
   $('#playerModal3').modal('hide');
});

var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;
var currentPlayer = 1;

// Submit Question Answer
function submit() {
  
  var selected = $(".modal-body input:checked").val();
  var bit = 0;
  if (selected === questions[window.currentQuestion].correctAnswer) {
      chaching.play();
      window.addprize = questions[window.currentQuestion].cashPrize;
      console.log(window.addprize);
      
        if (currentPlayer === 1) {
          player1Score += window.addprize;
          $('#score1').html("  $" + player1Score);
          $('#score1').toggleClass("negative", Math.sign(player1Score) < 0);
        } 
        else if (currentPlayer === 2) {
          player2Score += window.addprize;
          $('#score2').html("  $" + player2Score);
          $('#score2').toggleClass("negative", Math.sign(player2Score) < 0);
        } 
        else if (currentPlayer === 3) {
          player3Score += window.addprize;
          $('#score3').html("  $" + player3Score);
          $('#score3').toggleClass("negative", Math.sign(player3Score) < 0);
        }
        else if (currentPlayer === 4) {
          player4Score += window.addprize;
          $('#score4').html("  $" + player4Score);
          $('#score4').toggleClass("negative", Math.sign(player4Score) < 0);
        }
      
  } else {
      buzzer.play();
      bit = 1;
      window.subprize = questions[window.currentQuestion].cashPrize;
      if (currentPlayer === 1) {
        player1Score -= window.subprize;
        $('#score1').html("  $" + player1Score);
        $('#score1').toggleClass("negative", Math.sign(player1Score) < 0);
       } 
       else if (currentPlayer === 2) {
        player2Score -= window.subprize;
        $('#score2').html("  $" + player2Score);
        $('#score2').toggleClass("negative", Math.sign(player2Score) < 0);
       } 
       else if (currentPlayer === 3) {
        player3Score -= window.subprize;
        $('#score3').html("  $" + player3Score);
        $('#score3').toggleClass("negative", Math.sign(player3Score) < 0);
      }
      else if (currentPlayer === 4) {
        player4Score -= window.subprize;
        $('#score4').html("  $" + player4Score);
        $('#score4').toggleClass("negative", Math.sign(player4Score) < 0);
    }
  }

  currentPlayer = (currentPlayer % numPlayers) + 1;
  console.log(currentPlayer)
  
  return bit;
}

// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disabled" class="btn-group" data-bs-toggle="buttons"></div><br>');
  question.options.forEach(function (opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}
// Populate modal window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}
// Modal show/close functions
$(function () {
  $("#myModal").on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });
});
$("#myModal").on('hidden.bs.modal', function () {
  console.log('The modal is now hidden.');
});
// $('.modal-body input:checked').on(function () {
//   $('#myModal').modal('toggle');
//   return false;
// });