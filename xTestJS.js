function processForm() {
    /*var qObj = {};
    qObj["Question"] = document.getElementById("question").value;
    qObj["Answer"] = document.getElementById("answer").value;
    */
    var xhr = new XMLHttpRequest();
    console.log("Test 1: " + xhr.readyState);
    xhr.onreadystatechange = function (){
      if (xhr.readyState === 4){
        console.log("Test 2: " + xhr.readyState);
        document.getElementById('response').innerHTML = xhr.responseText;
      }
    };
    console.log("Test 3: " + xhr.readyState);
    xhr.open('GET', 'xTestPHP.php');
    console.log("Test 4: " + xhr.readyState);
    xhr.send();
    console.log("Test 5: " + xhr.readyState);

}
