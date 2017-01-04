//兼容的鼠标滚轮类
!function() {
	Technoscroll = {
	    panelall: null,
	    Panelaryy: [],
	    srcoplya: !0,
	    timese: "undefined",
	    plyendfn: null,
	    Currentpage: 0,
	    Totalpage: 0,
	    dom: function() {
	      var a = this,
	        b = $(".Panel");
	      return b.each(function() {
	        a.Panelaryy.push($(this))
	      }), {
	        d: b,
	        len: b.length
	      }
	    },
	    color: function() {
	      return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
	    },
	    toolts: function() {
	      var a = $(".tooolts"),
	          b = this,
	          c = b.dom(),
	          d = 32 * c.len,
	          e = b.bodyclient(),
	          f = e.bodyh / 2 - d / 2,
	          g = e.bodyw - 40;
	      if (a.length < 1) {
	        for (var h = "<li class='select'>##</li>", i = "", j = 0; j < c.len; j++) j > 0 && (h = h.replace("select", "")), i += h.replace("##", j + 1);
	        $("<div class='tooolts'><ul class='clearfix'>" + i + "</ul></div>").css({
	          top: f + "px",
	          left: g + "px",
	          display: "block"
	        }).appendTo("body");
	        var k = $(".tooolts li");
	        k.click(function() {
	          var a = b.srcoplya;
	          if (a) {
	            var f, c = $(this),
	              d = c.index(),
	              g = b.Panelaryy[0].height();
	            f = g * d, b.panelall.animate({
	              scrollTop: f
	            }, "600"), setTimeout(function() {
	              b.panelall.stop(), b.Currentpage = d, b.srcoplya = !0, b.rettoolsbtn(d)
	            }, 601)
	          }
	        })
	      } else a.css({
	        top: f + "px",
	        left: g + "px",
	        display: "block"
	      })
	    },
	    init: function() {
	      var a = this,
	        b = a.bodyclient(),
	        c = a.dom();
	      a.panelall = $(".panelall"), a.Totalpage = a.Panelaryy.length, a.panelall.height(b.bodyh).width(b.bodyw);
	      var d = c.d;
	      d.height(b.bodyh).width(b.bodyw).css("background-color", a.color), a.toolts(), d.eq(0).height(), a.panelall[0].onmousewheel = a.scrollMove
	    },
	    scrollMove: function(a) {
	      var b = Technoscroll,
	        c = b.srcoplya;
	      if (c) {
	        b.srcoplya = !1;
	        var d = 0,
	          e = 0,
	          f = b.Panelaryy[0].height();
	        a.wheelDelta < 0 ? (b.Currentpage < b.Panelaryy.length && (e = b.Currentpage + 1), d = f * e) : (b.Currentpage > 0 && (e = b.Currentpage - 1), d = f * e), b.panelall.animate({
	          scrollTop: d
	        }, "600");
	        var g = b.timese;
	        "" != g && "undefined" != typeof g && clearTimeout(g), b.timese = setTimeout(function() {
	          b.panelall.stop(), b.Currentpage = e, b.srcoplya = !0, b.rettoolsbtn(e)
	        }, 601)
	      }
	    },
	    rettoolsbtn: function(a) {
	      var b = $(".tooolts li");
	      b.removeClass("select"), b.eq(a).addClass("select")
	    },
	    bodyclient: function() {
	      var a = document.documentElement,
	        b = 0 | (window.innerWidth || a.clientWidth),
	        c = 0 | (window.innerHeight || a.clientHeight);
	      return (0 == b || 0 == c) && (b = document.body.clientWidth, c = document.body.clientHeight), {
	        bodyw: b,
	        bodyh: c
	      }
	    }
	  }, window.Technoscroll = Technoscroll || {}
}();

   $(function(){
   	 Technoscroll.init();
   })