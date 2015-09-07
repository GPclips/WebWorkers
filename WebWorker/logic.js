//********************************************************************Variablen
var worker;
var cntPerc = 0;
var cnt = 500000000;
var span;

//********************************************************************Functions
function change(){
    document.getElementById("idContent").data = "hallohallo";
}

function manual(){
    var manual = document.getElementById("manual");
    manual.onclick = function(){
        var start = new Date();
        start = start.getTime();
        //Berechnung
        for(var i = 0; i < cnt; i++){
            if(i%(cnt/100) == 0){
            document.getElementById("pbm").value += 1;
            }
            Math.sqrt(Math.random() *1000000);
        }
        var end = new Date();
        end = end.getTime();
        span = (end - start) / 1000;
        alert("Fertig Manuall Processing" + "\nDauer: " + span + " Sek.");
    };
}

function get(worker){
    worker.onmessage = function(event){
        if(cntPerc < 100){
            document.getElementById("pbw").value += 1;
            cntPerc += 1;
        }else{
            span = event.data;
            alert("Fertig Web Workers Processing" + "\nDauer: " + span + " Sek.");
        }
    }
}

function send(){
    if(typeof(worker) == "undefined"){
        worker = new Worker("worker.js");
    }
    var start = document.getElementById("start");
    start.onclick = function(){
        worker.postMessage(cnt);
    }
}

function errorHandling(){
    worker.onerror = function(event){
        alert('Fehlermeldung: ' + event.message + "\n\nURL: " + event.filename + "\n\nLine: " + event.lineno);
        event.preventDefault();
    }
}