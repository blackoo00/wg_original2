	vendor("phpqrcode.phpqrcode");
		$data = 'http://www.baidu.com';
		// 纠错级别：L、M、Q、H
		$level = 'L';
		// 点的大小：1到10,用于手机端4就可以了
		$size = 4;
		// 下面注释了把二维码图片保存到本地的代码,如果要保存图片,用$fileName替换第二个参数false
		//$path = "images/";
		// 生成的文件名
		//$fileName = $path.$size.'.png';
		echo 	QRcode::png($data, false, $level, $size);