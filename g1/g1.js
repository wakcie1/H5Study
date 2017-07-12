///<reference path="http://code.jquery.com/jquery-latest.js" />
//http://www.cnblogs.com/leestar54/p/6411495.html
; (function (window, jQuery, undefined) {
    var config = {};
    
    var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
	
    //页面参数
    var pageInfo = {
        topMenuIndex: "",
        leftMenuIndex: "",
        minMenuIndex: "",
        pageType: false,
    };

   

    var page = {
        //初始化
        Init: function (inConfig) {
            config = inConfig;
            basePath = config.basePath;
            page.InitData();
            page.InitEvents();
        },
        //初始化事件
        InitEvents: function () {
           
        },
        //初始化数据
        InitData: function () {
           
        }
    };

    //事件类
    var events = {
       
    }

    //全局变量，请勿重新定义（多个JS文件需要区分）
    window.g1PageInit = page.Init;
})(window, jQuery)