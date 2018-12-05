
$("#id-login").on("click",function(e){
    //if user is autenticated, run success() method else, error()
    success();
    //error();
    e.preventDefault();
});

function success(){
    $('.block').toggleClass('foward-state');    
    progressBar()
};
function error(class_name){
    $('.block').toggleClass('reverse-state');
}

function progressBar(){
    //document.getElementById("progress-bar").style.visibility = "visible";
    data = document.getElementById('loading-block');
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
        data.innerHTML = '<div class="progress" id="loading-bar">'+ 
                    '<div class="progress-bar"'+
                    'role="progressbar"'+
                    'style="width: '+width+'%"'+
                    'aria-valuenow="50"'+
                    'aria-valuemin="0"'+
                    'aria-valuemax="100"></div>'+
                    '</div>';

        if (width >= 100) {
            clearInterval(id);
            clearProgress();
            window.location.href = "../index.html"//redirect user if login is successful.
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    
}
function clearProgress(){
    data = document.getElementById('loading-block');
    data.innerHTML = ' ';
}


