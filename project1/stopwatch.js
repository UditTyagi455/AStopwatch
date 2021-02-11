var time =document.getElementById('time');
var s =document.getElementById('s');
var r =document.getElementById('r');
var rt =document.getElementById('rt');
var list =document.getElementById('list');
var first =document.getElementById('first');
var second =document.getElementById('second');
var third =document.getElementById('third');
var timing =false;
var interval;
var count =0;
var sec=0;
var min=0;
document.getElementById("rt").disabled = true;


 function startStop(){
  
         if(!timing){
             interval= setInterval(() =>{    
                            
                 count+=1;

                 if(count<10){
                 third.innerHTML ='0'+count;
                 third.style.color ='blue';
                 } else{ 
                    third.innerHTML =count;
                    third.style.color='blue';
                 }

                 if (count%99==0) {
                     sec+=1;
                     if(sec<10){
                    second.innerHTML ='0'+sec;
                    second.style.color ='blue';
                }
                    else{
                        second.innerHTML =sec;
                        second.style.color ='blue';
                    }
                 if(sec%59==0){
                        min+=1;
                        if (min<10) {
                        first.innerH='0'+min ; 
                        first.style.color ='blue';                          
                        }else{
                            first.innerHTML=min;
                            
                        }
                        sec=0;
                 }
                     count=0;
                 }  
                
             },1);
            s.innerHTML ="Stop";
            document.getElementById("r").disabled = true;
            document.getElementById("rt").disabled = false;
             timing =true;
            }else{
                 clearInterval(interval);
                 s.innerHTML ="Start";
                 timing=false;
                 document.getElementById("r").disabled = false;
             }
                    
 }

  function reset(){
      clearInterval(interval);
      first.innerHTML ="00";
      second.innerHTML ="00";
      third.innerHTML ="00";
      second.style.color ='black';
      third.style.color ='black';
    count=0;
    sec=0;
    min=0;
    document.getElementById("rt").disabled = true;
    list.innerHTML ="";
      timing=false;
  }

  function myList() {
      var li =document.createElement('li');
      var aa =time.firstElementChild.textContent;
      var bb =time.firstElementChild.nextElementSibling.textContent;
      var cc =time.lastElementChild.textContent;
      var tn =document.createTextNode(aa+':'+bb+':'+cc);
      li.appendChild(tn);
      list.appendChild(li);
  }

s.addEventListener('click',startStop);
 r.addEventListener('click',reset);
 rt.addEventListener('click',myList);

 document.addEventListener('keydown', (event) =>{
     var press =event.key;
     switch (press) {
         case "s":
             startStop();
             break;
         case "r":
             reset();
             break;
         case "t":
             myList();
             break;
     
         default:
             break;
     }
 });
