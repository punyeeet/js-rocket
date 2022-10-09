var timer;
var changestate = function(state){
    document.body.className='body-state'+state;
    clearInterval(timer);

if(state==2){
    let counter =10;
    document.getElementById('countdown').innerHTML=counter;
    function updatecountdown(){
        counter--;
        if(counter<=0){
            changestate(3);
            
            
        }
        
        document.getElementById('countdown').innerHTML=counter;
    }
    timer =setInterval(updatecountdown,700);
    
}else if(state ==3){
    var success = setTimeout(function() {
        Math.floor(Math.random() * 10) < 5 ? changestate(4):changestate(5);
    }, 2000);
}


}