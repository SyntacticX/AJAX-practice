function processForm() {
    var qObj = {};
    qObj["Question"] = document.getElementById("question").value;
    qObj["Answer"] = document.getElementById("answer").value;

    var str = JSON.stringify(qObj);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if (xhr.readyState === 4){
        document.getElementById('response').innerHTML = xhr.responseText;
      }
    };

    xhr.open("GET", "xTestPHP.php?q=" + str, true);
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
}
