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
    last_seen: "A month ago"
  },
];
var password = document.getElementById("passwordtext");
password.addEventListener('click', checkPassword);
//Custom event to grab username field when the user is about to type the         password
var users = document.getElementById('usertext');
users.addEventListener('trigger', function(e) {
  var display = e.target.value; //e.target.value
  data = document.getElementById('found-user');
  if (display === "") {
    //console.log('empty string..');
  } else {
    var userFound = false;
    for (var i = 0; i < user_list.length; i++) {
      if (user_list[i].username === display) {
        var time_since = user_list[i].last_seen;
        userFound = true;
      }
    };
    if (userFound) {
        //build innerHtml (user details)
        data.innerHTML = '<div class="media">'+'<img class="mr-3"'+'src="img/profile.png"'+
                        'alt="Generic placeholder image"'+'style="height:3rem">'+
                        '<div class="media-body">'+
                        '<h5 class="mt-0">@'+display+'</h5>'+
                        '<h6><small><i>active, '+time_since+'</i></small></h6>'+
                        '</div>'+'</div>';
      //console.log('user found!');
    } else {
        if (display === "") {
            //if user field is empty, do nothing...
        }else{
            data.innerHTML = '<h5 class="mt-0">The username '+display+' does not exists</h5>'
            console.log('user not found!');
        }

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