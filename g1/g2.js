///<reference path="http://code.jquery.com/jquery-latest.js" />
//http://www.cnblogs.com/leestar54/p/6411495.html
; (function (window, jQuery, undefined) {
    var config = {};
    
    var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
	var phoneWidth =  parseInt(window.screen.width);
    var phoneScale =  phoneWidth/612;
    var ua = navigator.userAgent;
    if (/Android (\d+\.\d+)/.test(ua)){
        var version = parseFloat(RegExp.$1);
        if(version>2.3){
            document.write('<meta name="viewport" content="width=612, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
        }else{
            document.write('<meta name="viewport" content="width=612, target-densitydpi=device-dpi">');
        }
    } else {
        document.write('<meta name="viewport" content="width=612, user-scalable=no, target-densitydpi=device-dpi">');
    }

    //键盘按键
    var keysDown = {};

    //var canvas = document.createElement("canvas");
    var canvas = $("#canvas1")[0];
    var ctx = canvas.getContext("2d");
    canvas.width = 512;
    canvas.height = 480;
    document.body.appendChild(canvas);

    var heroImage = new Image();
    heroImage.src = "p1.png";

    //人物1坐标
    var person1Info = {
        left: 80,
        top: 60,
        picleft: 0,
        pictop: 0,
        picIndex: 1,
        face: 'r'
    };

    var page = {
        //初始化
        Init: function (inConfig) {
            config = inConfig;
            page.InitEvents();
        },
        //初始化事件
        InitEvents: function () {
            requestAnimationFrame(events.ShowMove);
           
        },
        
    };

    //事件类
    var events = {
        ShowMove: function() {
            //ctx.drawImage(heroImage, 0, 0);
            //ctx.drawImage(heroImage, 0, 0, 40 , 40 , 0, 0, 40, 40);
            ctx.drawImage(heroImage, 40, 0, 40 , 40 , 0, 0, 40, 40);
            ctx.drawImage(heroImage, 80, 0, 40 , 40 , 100, 100, 40, 40);
        },
    };
    //全局变量，请勿重新定义（多个JS文件需要区分）
    window.g2PageInit = page.Init;
})(window, jQuery)