var user_list = [{
    username: "john",
    name: "john.doe",
    last_seen: "2mins ago"
  },
  {
    username: "mary",
    name: "Mary marta",
    last_seen: "2hrs ago"
  },
  {
    username: "susan",
    name: "susy457",
    last_seen: "45mins ago"
  },
  {
    username: "moses",
    name: "moe23",
    last_seen: "45mins ago"
  },
];
var password = document.getElementById("passwordtext");
password.addEventListener('click', checkPassword);
//Custom event to grab username field when the user is about to type the         password
var users = document.getElementById('usertext');
users.addEventListener('trigger', function(e) {
  var display = e.target.value; //e.target.value
  if (display === "") {
    //console.log('empty string..');
  } else {
    var userFound = false;
    for (var i = 0; i < user_list.length; i++) {
      if (user_list[i].username === display) {
        userFound = true;
      }
    };
    if (userFound) {
      console.log('user found!');
    } else {
      console.log('user not found!');
    }
  };
  event.preventDefault();
});

function checkUser() {
  var event = new CustomEvent('trigger');
  users.dispatchEvent(event);
};

function checkPassword(e) {
  checkUser()
  passcode = e.target.value;
  //console.log(e.target.value);
  event.preventDefault();
};