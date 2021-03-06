function banTouchmove(t) {
	$(t).on("touchmove", function(t) {
		t.preventDefault()
	})
}

function inputStyleShow() {
	$("input").on("focus", function() {
		$(this).parent().addClass("active")
	}), $("input").on("blur", function() {
		$(this).val() || $(this).parent().removeClass("active")
	})
}

function showSuccess(t, e) {
	var n = $(SUCCESS_HTML);
	n.find("#success-info").html(t), $("#insert-info").append(n), setTimeout(function() {
		$(".weui_success").remove(), e && e()
	}, 2e3)
}

function getCityName(t) {
	var e, n = [],
		o = [];
	for (var i in cityCodeList) n.push(cityCodeList[i].citycode), o.push(cityCodeList[i].cityname);
	return e = $.inArray(t, n), citysName = o[e], citysName
}

function isSupercity(t) {
	t = parseInt(t);
	var e = [131, 257, 289, 340];
	return -1 !== $.inArray(t, e)
}

function datePlaceHold(t) {
	for (var e = t(), n = 0, o = 0; o < e.length; o++) ! function(t) {
		n += 3 === t || 27 === t || 28 === t || 12 === t || 10 === t ? 10 === t ? Number($(".select-mealInfo-num").html()) : 2 : 15 === t ? 3 : 1
	}(e[o]);
	return n >= 3 ? 3 : n
}

function timePlaceHold(t) {
	var e = t;
	$.each($(".reservation-timeList a"), function(t, n) {
		for (var o = $(n), i = o, r = 0; e - 1 > r; r++) i = $(i).next(), i.attr("data-count") && 0 != i.attr("data-count") || $(o).addClass("off")
	})
}

function getFormatTime(t) {
	var e = new Date(t),
		n = e.getHours() + ":",
		o = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
		i = getFormatDate(t) + " " + n + o;
	return i
}

function getFormatDate(t) {
	var e = new Date(t),
		n = e.getMonth(),
		o = e.getDate();
	return e.getFullYear() + "-" + (10 > n + 1 ? "0" + (n + 1) : +(n + 1)) + "-" + (10 > o ? "0" + o : o)
}
// document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
var cookie = {
	set: function(t, e, n, o, i) {
		var r = new Date;
		r.setDate(r.getDate() + n), document.cookie = t + "=" + encodeURIComponent(void 0 === e ? "" : e) + "; expires=" + r + "; domain=" + (o ? o : document.domain) + "; path=" + (i ? i : "/")
	},
	get: function(t) {
		for (var e = document.cookie.split("; "), n = e.length - 1; n >= 0; n--) {
			var o = e[n].split("=");
			if (o[0] === t) return decodeURIComponent(o[1])
		}
		return ""
	},
	remove: function(t) {
		cookie.set(t, null, -1)
	}
};
inputStyleShow();
var ruleMethod = {
		isEmpty: function(t, e) {
			return t ? void 0 : e
		},
		minLength: function(t, e, n) {
			return t.length < e ? n : void 0
		},
		isPhone: function(t, e) {
			return /(^1[3|5|8|9][0-9]{9}$)/.test(t) ? void 0 : e
		},
		hasEmpty: function(t, e) {
			return t ? e : void 0
		}
	},
	Validator = function() {
		this.cache = []
	};
Validator.prototype.add = function(t, e) {
	for (var n = this, o = 0; o < e.length; o++) {
		var i = e[o];
		! function(e) {
			var o = e.method.split(":"),
				i = e.errorMsg;
			n.cache.push(function() {
				var e = o.shift();
				return o.unshift(t.val()), o.push(i), ruleMethod[e].apply(t, o)
			})
		}(i)
	}
}, Validator.prototype.start = function() {
	for (var t = 0, e = this.cache.length; e > t; t++) {
		var n = this.cache[t]();
		if (n) return n
	}
};