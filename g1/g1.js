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

    //人物1坐标
    var person1Info = {
        left: 80,
        top: 60,
        picleft: 0,
        pictop: 0,
        picIndex: 1,
        face: 'r'
    };
    //人物2坐标
    var person2Info = {
        left: 200,
        top: 200,
        picIndex: 1,
        face: 'd'
    };
    var person1 = $("#person1");
    var person2 = $("#person2");

    //动画帧3帧/秒
    var interval1 = 1000/3;
    var then1 = Date.now();

    var page = {
        //初始化
        Init: function (inConfig) {
            config = inConfig;
            page.InitData();
            page.InitEvents();
        },
        //初始化事件
        InitEvents: function () {
            requestAnimationFrame(events.ShowMove);
            addEventListener("keydown", function (e) {
                    keysDown[e.keyCode] = true;
                }, false);
            addEventListener("keyup", function (e) {
                delete keysDown[e.keyCode];
            }, false);
        },
        //初始化数据
        InitData: function () {
           
        }
    };

    //事件类
    var events = {
        ShowMove: function() {
            var now = Date.now();
            var delta1 = now - then1;
            if (delta1 > interval1) {
                then1 = now - (delta1 % interval1);
                personOneAction.MoveAnimation();
            }
            var left = person1Info.left + person1Info.picleft;
            var top = person1Info.top + person1Info.pictop;
            person1.css("left", left + 'px');
            person1.css("top", top + 'px');
            requestAnimationFrame(personOneAction.ProxyMove);
            requestAnimationFrame(personOneAction.ChangeFace);
        },
    };

    var personOneAction = {
        MoveAnimation: function() {
            person1.removeAttr("class");
            person1.addClass("person1");
            switch(person1Info.picIndex)
            {
                case 1:
                  person1.addClass(person1Info.face + '1');
                  person1Info.picIndex += 1;
                  person1Info.picleft = 0;
                  break;
                case 2:
                  person1.addClass(person1Info.face + '2');
                  person1Info.picIndex += 1;
                  person1Info.picleft = -40;
                  break;
                case 3:
                  person1.addClass(person1Info.face + '3');
                  person1Info.picIndex = 1;
                  person1Info.picleft = -80;
                  break;
            }
            switch(person1Info.face)
            {
                case 'd':
                    person1Info.pictop = 0;
                    break;
                case 'l': 
                    person1Info.pictop = -40; 
                    break;
                case 'r':
                    person1Info.pictop = -80;    
                    break;
                case 'u':
                    person1Info.pictop = -120; 
                    break;
            }
           
            
        },
        ChangeFace: function() {
            //right
            if (39 in keysDown) { 
                person1Info.face = 'r';
                if(person1Info.left < 418)
                {
                    person1Info.left += 2;
                }
            }   
            //left
            if (37 in keysDown) { 
                person1Info.face = 'l';
                if(person1Info.left > 0)
                {
                    person1Info.left -= 2;
                }
            }
            //up
            if (38 in keysDown) { 
                person1Info.face = 'u';
                if(person1Info.top > 0)
                {
                    person1Info.top -= 2;
                }
            }
            //down
            if (40 in keysDown) { 
                person1Info.face = 'd';
                if(person1Info.top < 380)
                {
                    person1Info.top += 2;
                }
            }
        },
        ProxyMove: function() {
            events.ShowMove();
        },
       
    };

    //全局变量，请勿重新定义（多个JS文件需要区分）
    window.g1PageInit = page.Init;
})(window, jQuery)