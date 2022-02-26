var row = document.getElementById('row'),
    col = document.getElementById('col'),
    start = document.getElementById('start'),
    container = document.getElementById('container'),oldRowValue=0,oldColValue=0,test=0,i,randomUrl,answersX=[],randomUrl2,score=0;
    var imgnbr = container.children;
start.onclick = function(){
    if((row.value*col.value)%2!=0) container.innerHTML = ' please would you change values!!! ';
    else {
    removeAll();
    for(i =0;i<col.value;i++){
            for(var j=0;j<row.value;j++){
              var newDiv =   document.createElement('div');
                newDiv.style.backgroundSize = 'cover';
              container.appendChild(newDiv);
                newDiv.style.height = '100%';
                newDiv.style.width = '100%';
                newDiv.style.border = '2px white solid';
            container.style.gridTemplateColumns= "repeat("+Math.max(row.value,col.value)+",1fr)";
        }
    start.value = 'Replay';
    oldColValue = col.value;
    oldRowValue = row.value;
    test=1;
        score=0;
}
    ImageRandom();
}}
function removeAll(){
    while(container.firstChild) container.removeChild(container.lastChild);
    answersX=[];
}
function ImageRandom(){
    setTimeout(qst,2000);
    answers();
}
function answers(){
    var tot = oldColValue*oldRowValue;
    i=0;
      while(i<tot/2){
          randomUrl = Math.floor(Math.random() * tot) ;
          randomUrl2 = Math.floor(Math.random() * tot) ;
          while(randomUrl == randomUrl2 || answersX[randomUrl]>=0 || answersX[randomUrl2]>=0 ){
               randomUrl = Math.floor(Math.random() * tot) ;
               randomUrl2 = Math.floor(Math.random() * tot) ;
          }
          answersX[randomUrl] = i;
          answersX[randomUrl2] = i;
          imgnbr[randomUrl].style.backgroundImage = "url('img" +i+ ".jpg')";
          imgnbr[randomUrl2].style.backgroundImage = "url('img" +i +".jpg')";
          i++;
      }
}
    

function qst(){
     for(i=0;i<oldColValue*oldRowValue;i++){
        imgnbr[i].style.backgroundImage = "url('qst.jpg')";
    }
}

container.onclick = function(e){
    var value = e.target;
    i=0;
    var c=0;
    while(value!=imgnbr[i]) i++;
    while(c<oldColValue*oldRowValue && imgnbr[c].classList.contains("visited")==false) c++;
    if(c==oldColValue*oldRowValue){
        imgnbr[i].style.transform = "rotateY(90deg)";
       setTimeout(function(){
            value.style.backgroundImage ="url('img" +answersX[i] +".jpg')";
       },500);
        imgnbr[i].classList.add("visited");  
        imgnbr[i].style.transition = " transform 2s";
           imgnbr[i].style.transform = "rotateY(180deg)";
    }
    else{
        if(c!=i){
             imgnbr[i].style.transform = "rotateY(90deg)";
       setTimeout(function(){
            value.style.backgroundImage ="url('img" +answersX[i] +".jpg')";
       },500);
        imgnbr[i].classList.add("visited");  
        imgnbr[i].style.transition = " transform 2s";
           imgnbr[i].style.transform = "rotateY(180deg)";
            if(answersX[i]!=answersX[c]){
                setTimeout(function(){
                    imgnbr[i].style.backgroundImage = "url('qst.jpg')";
                    imgnbr[c].style.backgroundImage = "url('qst.jpg')";
                },1000);
                imgnbr[c].classList.remove("visited");
                imgnbr[i].classList.remove("visited");
                if(score!=0) score--;
            }
            else{
                imgnbr[c].classList.remove("visited");
                imgnbr[i].classList.remove("visited");
                score++;
            }
        }
    }
   
}


