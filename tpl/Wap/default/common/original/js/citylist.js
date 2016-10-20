var SUCCESS_HTML = '<div class="weui_success" ><div class="weui_mask_transparent"></div><div class="weui_toast"><span class="weui_radio"></span><i class="weui_icon_toast"></i><p class="weui_toast_content" id="success-info"></p></div></div>',
	cityCodeList = [{
		citycode: "100",
		cityname: "拉萨市"
	}, {
		citycode: "101",
		cityname: "那曲地区"
	}, {
		citycode: "102",
		cityname: "日喀则地区"
	}, {
		citycode: "103",
		cityname: "阿里地区"
	}, {
		citycode: "104",
		cityname: "昆明市"
	}, {
		citycode: "105",
		cityname: "楚雄彝族自治州"
	}, {
		citycode: "106",
		cityname: "玉溪市"
	}, {
		citycode: "107",
		cityname: "红河哈尼族彝族自治州"
	}, {
		citycode: "108",
		cityname: "普洱市"
	}, {
		citycode: "109",
		cityname: "西双版纳傣族自治州"
	}, {
		citycode: "110",
		cityname: "临沧市"
	}, {
		citycode: "111",
		cityname: "大理白族自治州"
	}, {
		citycode: "112",
		cityname: "保山市"
	}, {
		citycode: "113",
		cityname: "怒江傈僳族自治州"
	}, {
		citycode: "114",
		cityname: "丽江市"
	}, {
		citycode: "115",
		cityname: "迪庆藏族自治州"
	}, {
		citycode: "116",
		cityname: "德宏傣族景颇族自治州"
	}, {
		citycode: "117",
		cityname: "张掖市"
	}, {
		citycode: "118",
		cityname: "武威市"
	}, {
		citycode: "119",
		cityname: "东莞市"
	}, {
		citycode: "120",
		cityname: "东沙群岛"
	}, {
		citycode: "121",
		cityname: "三亚市"
	}, {
		citycode: "122",
		cityname: "鄂州市"
	}, {
		citycode: "123",
		cityname: "乌海市"
	}, {
		citycode: "124",
		cityname: "莱芜市"
	}, {
		citycode: "125",
		cityname: "海口市"
	}, {
		citycode: "126",
		cityname: "蚌埠市"
	}, {
		citycode: "1277",
		cityname: "济源市"
	}, {
		citycode: "127",
		cityname: "合肥市"
	}, {
		citycode: "128",
		cityname: "阜阳市"
	}, {
		citycode: "129",
		cityname: "芜湖市"
	}, {
		citycode: "130",
		cityname: "安庆市"
	}, {
		citycode: "131",
		cityname: "北京市"
	}, {
		citycode: "132",
		cityname: "重庆市"
	}, {
		citycode: "133",
		cityname: "南平市"
	}, {
		citycode: "134",
		cityname: "泉州市"
	}, {
		citycode: "135",
		cityname: "庆阳市"
	}, {
		citycode: "136",
		cityname: "定西市"
	}, {
		citycode: "137",
		cityname: "韶关市"
	}, {
		citycode: "138",
		cityname: "佛山市"
	}, {
		citycode: "139",
		cityname: "茂名市"
	}, {
		citycode: "140",
		cityname: "珠海市"
	}, {
		citycode: "141",
		cityname: "梅州市"
	}, {
		citycode: "142",
		cityname: "桂林市"
	}, {
		citycode: "143",
		cityname: "河池市"
	}, {
		citycode: "144",
		cityname: "崇左市"
	}, {
		citycode: "145",
		cityname: "钦州市"
	}, {
		citycode: "146",
		cityname: "贵阳市"
	}, {
		citycode: "147",
		cityname: "六盘水市"
	}, {
		citycode: "148",
		cityname: "秦皇岛市"
	}, {
		citycode: "149",
		cityname: "沧州市"
	}, {
		citycode: "150",
		cityname: "石家庄市"
	}, {
		citycode: "151",
		cityname: "邯郸市"
	}, {
		citycode: "152",
		cityname: "新乡市"
	}, {
		citycode: "153",
		cityname: "洛阳市"
	}, {
		citycode: "154",
		cityname: "商丘市"
	}, {
		citycode: "155",
		cityname: "许昌市"
	}, {
		citycode: "156",
		cityname: "襄樊市"
	}, {
		citycode: "157",
		cityname: "荆州市"
	}, {
		citycode: "158",
		cityname: "长沙市"
	}, {
		citycode: "159",
		cityname: "衡阳市"
	}, {
		citycode: "160",
		cityname: "镇江市"
	}, {
		citycode: "161",
		cityname: "南通市"
	}, {
		citycode: "162",
		cityname: "淮安市"
	}, {
		citycode: "163",
		cityname: "南昌市"
	}, {
		citycode: "164",
		cityname: "新余市"
	}, {
		citycode: "165",
		cityname: "通化市"
	}, {
		citycode: "166",
		cityname: "锦州市"
	}, {
		citycode: "167",
		cityname: "大连市"
	}, {
		citycode: "168",
		cityname: "乌兰察布市"
	}, {
		citycode: "169",
		cityname: "巴彦淖尔市"
	}, {
		citycode: "170",
		cityname: "渭南市"
	}, {
		citycode: "171",
		cityname: "宝鸡市"
	}, {
		citycode: "172",
		cityname: "枣庄市"
	}, {
		citycode: "173",
		cityname: "日照市"
	}, {
		citycode: "174",
		cityname: "东营市"
	}, {
		citycode: "175",
		cityname: "威海市"
	}, {
		citycode: "176",
		cityname: "太原市"
	}, {
		citycode: "177",
		cityname: "文山壮族苗族自治州"
	}, {
		citycode: "178",
		cityname: "温州市"
	}, {
		citycode: "179",
		cityname: "杭州市"
	}, {
		citycode: "180",
		cityname: "宁波市"
	}, {
		citycode: "181",
		cityname: "中卫市"
	}, {
		citycode: "182",
		cityname: "临夏回族自治州"
	}, {
		citycode: "183",
		cityname: "辽源市"
	}, {
		citycode: "184",
		cityname: "抚顺市"
	}, {
		citycode: "185",
		cityname: "阿坝藏族羌族自治州"
	}, {
		citycode: "186",
		cityname: "宜宾市"
	}, {
		citycode: "187",
		cityname: "中山市"
	}, {
		citycode: "188",
		cityname: "亳州市"
	}, {
		citycode: "189",
		cityname: "滁州市"
	}, {
		citycode: "190",
		cityname: "宣城市"
	}, {
		citycode: "191",
		cityname: "廊坊市"
	}, {
		citycode: "192",
		cityname: "宁德市"
	}, {
		citycode: "193",
		cityname: "龙岩市"
	}, {
		citycode: "194",
		cityname: "厦门市"
	}, {
		citycode: "195",
		cityname: "莆田市"
	}, {
		citycode: "196",
		cityname: "天水市"
	}, {
		citycode: "197",
		cityname: "清远市"
	}, {
		citycode: "198",
		cityname: "湛江市"
	}, {
		citycode: "199",
		cityname: "阳江市"
	}, {
		citycode: "200",
		cityname: "河源市"
	}, {
		citycode: "201",
		cityname: "潮州市"
	}, {
		citycode: "202",
		cityname: "来宾市"
	}, {
		citycode: "203",
		cityname: "百色市"
	}, {
		citycode: "204",
		cityname: "防城港市"
	}, {
		citycode: "205",
		cityname: "铜仁地区"
	}, {
		citycode: "206",
		cityname: "毕节地区"
	}, {
		citycode: "207",
		cityname: "承德市"
	}, {
		citycode: "208",
		cityname: "衡水市"
	}, {
		citycode: "209",
		cityname: "濮阳市"
	}, {
		citycode: "210",
		cityname: "开封市"
	}, {
		citycode: "211",
		cityname: "焦作市"
	}, {
		citycode: "212",
		cityname: "三门峡市"
	}, {
		citycode: "213",
		cityname: "平顶山市"
	}, {
		citycode: "214",
		cityname: "信阳市"
	}, {
		citycode: "215",
		cityname: "鹤壁市"
	}, {
		citycode: "216",
		cityname: "十堰市"
	}, {
		citycode: "217",
		cityname: "荆门市"
	}, {
		citycode: "218",
		cityname: "武汉市"
	}, {
		citycode: "219",
		cityname: "常德市"
	}, {
		citycode: "220",
		cityname: "岳阳市"
	}, {
		citycode: "221",
		cityname: "娄底市"
	}, {
		citycode: "222",
		cityname: "株洲市"
	}, {
		citycode: "223",
		cityname: "盐城市"
	}, {
		citycode: "224",
		cityname: "苏州市"
	}, {
		citycode: "225",
		cityname: "景德镇市"
	}, {
		citycode: "226",
		cityname: "抚州市"
	}, {
		citycode: "227",
		cityname: "本溪市"
	}, {
		citycode: "228",
		cityname: "盘锦市"
	}, {
		citycode: "229",
		cityname: "包头市"
	}, {
		citycode: "230",
		cityname: "阿拉善盟"
	}, {
		citycode: "231",
		cityname: "榆林市"
	}, {
		citycode: "232",
		cityname: "铜川市"
	}, {
		citycode: "233",
		cityname: "西安市"
	}, {
		citycode: "234",
		cityname: "临沂市"
	}, {
		citycode: "235",
		cityname: "滨州市"
	}, {
		citycode: "236",
		cityname: "青岛市"
	}, {
		citycode: "237",
		cityname: "朔州市"
	}, {
		citycode: "238",
		cityname: "晋中市"
	}, {
		citycode: "239",
		cityname: "巴中市"
	}, {
		citycode: "240",
		cityname: "绵阳市"
	}, {
		citycode: "241",
		cityname: "广安市"
	}, {
		citycode: "242",
		cityname: "资阳市"
	}, {
		citycode: "243",
		cityname: "衢州市"
	}, {
		citycode: "244",
		cityname: "台州市"
	}, {
		citycode: "245",
		cityname: "舟山市"
	}, {
		citycode: "246",
		cityname: "固原市"
	}, {
		citycode: "247",
		cityname: "甘南藏族自治州"
	}, {
		citycode: "248",
		cityname: "内江市"
	}, {
		citycode: "249",
		cityname: "曲靖市"
	}, {
		citycode: "250",
		cityname: "淮南市"
	}, {
		citycode: "251",
		cityname: "巢湖市"
	}, {
		citycode: "252",
		cityname: "黄山市"
	}, {
		citycode: "253",
		cityname: "淮北市"
	}, {
		citycode: "254",
		cityname: "三明市"
	}, {
		citycode: "255",
		cityname: "漳州市"
	}, {
		citycode: "256",
		cityname: "陇南市"
	}, {
		citycode: "257",
		cityname: "广州市"
	}, {
		citycode: "258",
		cityname: "云浮市"
	}, {
		citycode: "259",
		cityname: "揭阳市"
	}, {
		citycode: "260",
		cityname: "贺州市"
	}, {
		citycode: "261",
		cityname: "南宁市"
	}, {
		citycode: "262",
		cityname: "遵义市"
	}, {
		citycode: "263",
		cityname: "安顺市"
	}, {
		citycode: "264",
		cityname: "张家口市"
	}, {
		citycode: "265",
		cityname: "唐山市"
	}, {
		citycode: "266",
		cityname: "邢台市"
	}, {
		citycode: "267",
		cityname: "安阳市"
	}, {
		citycode: "268",
		cityname: "郑州市"
	}, {
		citycode: "269",
		cityname: "驻马店市"
	}, {
		citycode: "270",
		cityname: "宜昌市"
	}, {
		citycode: "271",
		cityname: "黄冈市"
	}, {
		citycode: "272",
		cityname: "益阳市"
	}, {
		citycode: "273",
		cityname: "邵阳市"
	}, {
		citycode: "274",
		cityname: "湘西土家族苗族自治州"
	}, {
		citycode: "275",
		cityname: "郴州市"
	}, {
		citycode: "276",
		cityname: "泰州市"
	}, {
		citycode: "277",
		cityname: "宿迁市"
	}, {
		citycode: "278",
		cityname: "宜春市"
	}, {
		citycode: "279",
		cityname: "鹰潭市"
	}, {
		citycode: "280",
		cityname: "朝阳市"
	}, {
		citycode: "281",
		cityname: "营口市"
	}, {
		citycode: "282",
		cityname: "丹东市"
	}, {
		citycode: "283",
		cityname: "鄂尔多斯市"
	}, {
		citycode: "284",
		cityname: "延安市"
	}, {
		citycode: "285",
		cityname: "商洛市"
	}, {
		citycode: "286",
		cityname: "济宁市"
	}, {
		citycode: "287",
		cityname: "潍坊市"
	}, {
		citycode: "288",
		cityname: "济南市"
	}, {
		citycode: "289",
		cityname: "上海市"
	}, {
		citycode: "290",
		cityname: "晋城市"
	}, {
		citycode: "2911",
		cityname: "澳门特别行政区"
	}, {
		citycode: "2912",
		cityname: "香港特别行政区"
	}, {
		citycode: "291",
		cityname: "南充市"
	}, {
		citycode: "292",
		cityname: "丽水市"
	}, {
		citycode: "293",
		cityname: "绍兴市"
	}, {
		citycode: "294",
		cityname: "湖州市"
	}, {
		citycode: "295",
		cityname: "北海市"
	}, {
		citycode: "296",
		cityname: "海南省直辖县级行政单位"
	}, {
		citycode: "297",
		cityname: "赤峰市"
	}, {
		citycode: "298",
		cityname: "六安市"
	}, {
		citycode: "299",
		cityname: "池州市"
	}, {
		citycode: "300",
		cityname: "福州市"
	}, {
		citycode: "301",
		cityname: "惠州市"
	}, {
		citycode: "302",
		cityname: "江门市"
	}, {
		citycode: "303",
		cityname: "汕头市"
	}, {
		citycode: "304",
		cityname: "梧州市"
	}, {
		citycode: "305",
		cityname: "柳州市"
	}, {
		citycode: "306",
		cityname: "黔南布依族苗族自治州"
	}, {
		citycode: "307",
		cityname: "保定市"
	}, {
		citycode: "308",
		cityname: "周口市"
	}, {
		citycode: "309",
		cityname: "南阳市"
	}, {
		citycode: "310",
		cityname: "孝感市"
	}, {
		citycode: "311",
		cityname: "黄石市"
	}, {
		citycode: "312",
		cityname: "张家界市"
	}, {
		citycode: "313",
		cityname: "湘潭市"
	}, {
		citycode: "314",
		cityname: "永州市"
	}, {
		citycode: "315",
		cityname: "南京市"
	}, {
		citycode: "316",
		cityname: "徐州市"
	}, {
		citycode: "317",
		cityname: "无锡市"
	}, {
		citycode: "318",
		cityname: "吉安市"
	}, {
		citycode: "319",
		cityname: "葫芦岛市"
	}, {
		citycode: "320",
		cityname: "鞍山市"
	}, {
		citycode: "321",
		cityname: "呼和浩特市"
	}, {
		citycode: "322",
		cityname: "吴忠市"
	}, {
		citycode: "323",
		cityname: "咸阳市"
	}, {
		citycode: "324",
		cityname: "安康市"
	}, {
		citycode: "325",
		cityname: "泰安市"
	}, {
		citycode: "326",
		cityname: "烟台市"
	}, {
		citycode: "327",
		cityname: "吕梁市"
	}, {
		citycode: "328",
		cityname: "运城市"
	}, {
		citycode: "329",
		cityname: "广元市"
	}, {
		citycode: "330",
		cityname: "遂宁市"
	}, {
		citycode: "331",
		cityname: "泸州市"
	}, {
		citycode: "332",
		cityname: "天津市"
	}, {
		citycode: "333",
		cityname: "金华市"
	}, {
		citycode: "334",
		cityname: "嘉兴市"
	}, {
		citycode: "335",
		cityname: "石嘴山市"
	}, {
		citycode: "336",
		cityname: "昭通市"
	}, {
		citycode: "337",
		cityname: "铜陵市"
	}, {
		citycode: "338",
		cityname: "肇庆市"
	}, {
		citycode: "339",
		cityname: "汕尾市"
	}, {
		citycode: "33",
		cityname: "嘉峪关市"
	}, {
		citycode: "340",
		cityname: "深圳市"
	}, {
		citycode: "341",
		cityname: "贵港市"
	}, {
		citycode: "342",
		cityname: "黔东南苗族侗族自治州"
	}, {
		citycode: "343",
		cityname: "黔西南布依族苗族自治州"
	}, {
		citycode: "344",
		cityname: "漯河市"
	}, {
		citycode: "345",
		cityname: "湖北省直辖县级行政单位"
	}, {
		citycode: "346",
		cityname: "扬州市"
	}, {
		citycode: "347",
		cityname: "连云港市"
	}, {
		citycode: "348",
		cityname: "常州市"
	}, {
		citycode: "349",
		cityname: "九江市"
	}, {
		citycode: "34",
		cityname: "金昌市"
	}, {
		citycode: "350",
		cityname: "萍乡市"
	}, {
		citycode: "351",
		cityname: "辽阳市"
	}, {
		citycode: "352",
		cityname: "汉中市"
	}, {
		citycode: "353",
		cityname: "菏泽市"
	}, {
		citycode: "354",
		cityname: "淄博市"
	}, {
		citycode: "355",
		cityname: "大同市"
	}, {
		citycode: "356",
		cityname: "长治市"
	}, {
		citycode: "357",
		cityname: "阳泉市"
	}, {
		citycode: "358",
		cityname: "马鞍山市"
	}, {
		citycode: "359",
		cityname: "平凉市"
	}, {
		citycode: "35",
		cityname: "白银市"
	}, {
		citycode: "360",
		cityname: "银川市"
	}, {
		citycode: "361",
		cityname: "玉林市"
	}, {
		citycode: "362",
		cityname: "咸宁市"
	}, {
		citycode: "363",
		cityname: "怀化市"
	}, {
		citycode: "364",
		cityname: "上饶市"
	}, {
		citycode: "365",
		cityname: "赣州市"
	}, {
		citycode: "366",
		cityname: "聊城市"
	}, {
		citycode: "367",
		cityname: "忻州市"
	}, {
		citycode: "368",
		cityname: "临汾市"
	}, {
		citycode: "369",
		cityname: "达州市"
	}, {
		citycode: "36",
		cityname: "兰州市"
	}, {
		citycode: "370",
		cityname: "宿州市"
	}, {
		citycode: "371",
		cityname: "随州市"
	}, {
		citycode: "372",
		cityname: "德州市"
	}, {
		citycode: "373",
		cityname: "恩施土家族苗族自治州"
	}, {
		citycode: "37",
		cityname: "酒泉市"
	}, {
		citycode: "38",
		cityname: "大兴安岭地区"
	}, {
		citycode: "39",
		cityname: "黑河市"
	}, {
		citycode: "40",
		cityname: "伊春市"
	}, {
		citycode: "41",
		cityname: "齐齐哈尔市"
	}, {
		citycode: "42",
		cityname: "佳木斯市"
	}, {
		citycode: "43",
		cityname: "鹤岗市"
	}, {
		citycode: "44",
		cityname: "绥化市"
	}, {
		citycode: "45",
		cityname: "双鸭山市"
	}, {
		citycode: "46",
		cityname: "鸡西市"
	}, {
		citycode: "47",
		cityname: "七台河市"
	}, {
		citycode: "48",
		cityname: "哈尔滨市"
	}, {
		citycode: "49",
		cityname: "牡丹江市"
	}, {
		citycode: "50",
		cityname: "大庆市"
	}, {
		citycode: "51",
		cityname: "白城市"
	}, {
		citycode: "52",
		cityname: "松原市"
	}, {
		citycode: "53",
		cityname: "长春市"
	}, {
		citycode: "54",
		cityname: "延边朝鲜族自治州"
	}, {
		citycode: "55",
		cityname: "吉林市"
	}, {
		citycode: "56",
		cityname: "四平市"
	}, {
		citycode: "57",
		cityname: "白山市"
	}, {
		citycode: "58",
		cityname: "沈阳市"
	}, {
		citycode: "59",
		cityname: "阜新市"
	}, {
		citycode: "60",
		cityname: "铁岭市"
	}, {
		citycode: "61",
		cityname: "呼伦贝尔市"
	}, {
		citycode: "62",
		cityname: "兴安盟"
	}, {
		citycode: "63",
		cityname: "锡林郭勒盟"
	}, {
		citycode: "64",
		cityname: "通辽市"
	}, {
		citycode: "65",
		cityname: "海西蒙古族藏族自治州"
	}, {
		citycode: "66",
		cityname: "西宁市"
	}, {
		citycode: "67",
		cityname: "海北藏族自治州"
	}, {
		citycode: "68",
		cityname: "海南藏族自治州"
	}, {
		citycode: "69",
		cityname: "海东地区"
	}, {
		citycode: "70",
		cityname: "黄南藏族自治州"
	}, {
		citycode: "71",
		cityname: "玉树藏族自治州"
	}, {
		citycode: "72",
		cityname: "果洛藏族自治州"
	}, {
		citycode: "73",
		cityname: "甘孜藏族自治州"
	}, {
		citycode: "74",
		cityname: "德阳市"
	}, {
		citycode: "75",
		cityname: "成都市"
	}, {
		citycode: "76",
		cityname: "雅安市"
	}, {
		citycode: "77",
		cityname: "眉山市"
	}, {
		citycode: "78",
		cityname: "自贡市"
	}, {
		citycode: "79",
		cityname: "乐山市"
	}, {
		citycode: "80",
		cityname: "凉山彝族自治州"
	}, {
		citycode: "81",
		cityname: "攀枝花市"
	}, {
		citycode: "82",
		cityname: "和田地区"
	}, {
		citycode: "83",
		cityname: "喀什地区"
	}, {
		citycode: "84",
		cityname: "克孜勒苏柯尔克孜自治州"
	}, {
		citycode: "85",
		cityname: "阿克苏地区"
	}, {
		citycode: "86",
		cityname: "巴音郭楞蒙古自治州"
	}, {
		citycode: "87",
		cityname: "新疆直辖县级行政单位"
	}, {
		citycode: "87",
		cityname: "新疆维吾尔自治区直辖县级行政单位"
	}, {
		citycode: "88",
		cityname: "博尔塔拉蒙古自治州"
	}, {
		citycode: "89",
		cityname: "吐鲁番地区"
	}, {
		citycode: "90",
		cityname: "伊犁哈萨克自治州"
	}, {
		citycode: "91",
		cityname: "哈密地区"
	}, {
		citycode: "92",
		cityname: "乌鲁木齐市"
	}, {
		citycode: "93",
		cityname: "昌吉回族自治州"
	}, {
		citycode: "94",
		cityname: "塔城地区"
	}, {
		citycode: "95",
		cityname: "克拉玛依市"
	}, {
		citycode: "96",
		cityname: "阿勒泰地区"
	}, {
		citycode: "97",
		cityname: "山南地区"
	}, {
		citycode: "98",
		cityname: "林芝地区"
	}, {
		citycode: "99",
		cityname: "昌都地区"
	}];