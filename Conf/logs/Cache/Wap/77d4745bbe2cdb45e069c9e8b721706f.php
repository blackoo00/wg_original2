<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>北溟鱼照相馆</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <link rel="shortcut icon" href="/favicon.ico">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="common/original/css/sm.min.css">
  <link rel="stylesheet" href="common/original/css/sm-extend.css">
  <link rel="stylesheet" href="common/original/css/style.css">
  <!-- <link rel="stylesheet" href="common/original/css/position.css">-->
</head>
<body>
  <div class="page-group">
    <div class="page page-current" id="index-page">
      <style>
  .swiper-container{
    padding-bottom: 0;
  }
  .swiper-slide img{
    width: 100%;
  }
</style>
      <div class="content">
        <!-- BNNER -->
        <div id="slider-index"></div>
        <div id="home-content"></div>
        <div style="height: 4rem;"></div>
        <!-- 定位 -->
        <div class="index-position">
          <span class="index-positionIcon"></span> <em>获取位置中</em>
          <span class="icon icon-right"></span>
        </div>
      </div>
    </div>
  </div>
  <script src="common/original/js/zepto.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/sm.min.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/sm-extend.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/common.js?test=411" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/cookie.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/public_parameters.js?test=2" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/citylist.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/bMap.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/slider.js" type="text/javascript" charset="utf-8"></script>
  <script src="common/original/js/chooseposition.js" type="text/javascript" charset="utf-8"></script>
  <script>
    function onBridgeReady(){
     WeixinJSBridge.call('showOptionMenu');
    }

    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else{
        onBridgeReady();
    }
  </script>
</body>
</html>