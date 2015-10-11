var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
        
        var count = 0;
        var startX = 0;
        var endX = 0;
        
        $(function(){
            var box = $("#touchBox")[0];
            box.addEventListener("touchstart", touchHandler, false);
            box.addEventListener("touchmove", touchHandler, false);
            box.addEventListener("touchend", touchHandler, false);
        });
        
        function func1(){
            if(startX < endX){
                $("#txt").text(startX+","+endX+"  =>");
            }else if(startX > endX){
                $("#txt").text(startX+","+endX+"  <=");
            }
        }
        
        function touchHandler(e){
            e.preventDefault();
            var touch = e.touches[0];
            if(e.type == "touchstart"){
                startX = touch.pageX;
            }
            if(e.type == "touchmove"){
                endX = touch.pageX;
                func1();
            }
            if(e.type == "touchend"){
            }
            
            var canvas = document.getElementById("touchBox");
            if(canvas.getContext){
                var clear = canvas.getContext('2d');
                clear.clearRect();
                clear.fill();
                var context = canvas.getContext('2d');
                context.arc(touch.pageX,100,50,0*Math.PI,2*Math.PI,true);
                context.fillStyle = "rgb(200,50,50)"
                context.fill();
            }
        }
        
    }
};
app.initialize();