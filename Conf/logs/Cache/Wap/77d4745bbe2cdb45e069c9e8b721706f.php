<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>首页</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <link rel="shortcut icon" href="/favicon.ico">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="common/original/css/sm.min.css">
  <link rel="stylesheet" href="common/original/css/sm-extend.css">
  <link rel="stylesheet" href="common/original/css/style.css">
  <link rel="stylesheet" href="common/original/css/position.css"></head>
</head>
<body>
  <style>
  .swiper-container{
    padding-bottom: 0;
  }
  .swiper-slide img{
    width: 100%;
  }
</style>
  <div class="page-group">
    <div class="page page-current" id="index-page">
      <div class="content">
        <!-- BNNER -->
        <div id="slider-index"></div>
        <!-- 定位 -->
        <div class="index-position">
          <span class="index-positionIcon"></span> <em>获取位置中</em>
          <span class="icon icon-right"></span>
        </div>
        <div class="buttons-tab">
          <a href="#tab1" class="tab-link active button">全部</a>
          <a href="#tab2" class="tab-link button">待付款</a>
        </div>
        <div class="content-block">
          <div class="tabs">
            <div id="tab1" class="tab active">
              <div class="content-block">
                <p>This is tab 1 content</p>
              </div>
            </div>
            <div id="tab2" class="tab">
              <div class="content-block">
                <p>This is tab 2 content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  </div>
</body>
</html>
<script src="common/original/js/zepto.min.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/sm.min.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/sm-extend.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/common.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/cookie.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/public_parameters.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/citylist.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/slider.js" type="text/javascript" charset="utf-8"></script>
<script src="common/original/js/chooseposition.js" type="text/javascript" charset="utf-8"></script>