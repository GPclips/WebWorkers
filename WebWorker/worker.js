//worker.js
self.onmessage = function(event){
    //Berechnung
    var cnt = event.data;
    var start = new Date();
    start = start.getTime();
    for(var i = 0; i < cnt; i++){
            Math.sqrt(Math.random() *1000000);
            if(i%(cnt/100) == 0){
                self.postMessage('');
            }
    }
    var end = new Date();
    end = end.getTime();
    var span = (end - start) / 1000;
    //R�ckmeldung nach Berechnung
    self.postMessage(span);
    
    //Worker schlie�en
    self.close();
};