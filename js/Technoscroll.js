//兼容的鼠标滚轮类
!function($) {
	Technoscroll = {
		panelClassName: 'panel',
	    panelall: null,
	    Panelaryy: [],
	    tooltsClassName: 'tooolts',
	    srcoplya: !0,
	    timese: "undefined",
	    plyendfn: null,
	    Currentpage: 0,
	    Totalpage: 0,
	    getPanel: function() {
	      var _this = this,
	          $panel = $("."+_this.panelClassName);
		  return $panel.each(function() {
	          _this.Panelaryy.push($(this))
	      }),
	      {
	          panelA: $panel,
	          len: $panel.length
	      }
	    },
	   getColor: function() {
	      return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
	    },
	    initToolts: function() {
	      var _this = this,
	          $toolts = $("."+_this.tooltsClassName),
	          panel = _this.getPanel(),
	          $panelLen = 32 * panel.len,
	          bodyClient = _this.getBodyClient(),
	          top = bodyClient.bodyh / 2 - $panelLen / 2,
	          left = bodyClient.bodyw - 40;
	      if ($toolts.length < 1) {
	        for (var li = "<li class='select'>##</li>", i = "", j = 0; j < panel.len; j++) {
	        	j > 0 && (li = li.replace("select", "")), i += li.replace("##", j + 1);
	        }

	        $("<div class='" +_this.tooltsClassName+ "'><ul class='clearfix'>" + i + "</ul></div>").css({
	          top: top + "px",
	          left: left + "px",
	          display: "block"
	        }).appendTo("body");

	        var liDom = $("." +_this.tooltsClassName+ " li");
	        liDom.click(function() {
	          var flag = _this.srcoplya;
	          if (flag) {
	            var scrollTopLen, $this = $(this),
	              liIndex = $this.index(),
	              panelFirstHeight = _this.Panelaryy[0].height();
	            scrollTopLen = panelFirstHeight * liIndex, _this.panelall.animate({
	              scrollTop: scrollTopLen
	            }, "600"), setTimeout(function() {
	              _this.panelall.stop(), _this.Currentpage = liIndex, _this.srcoplya = !0, _this.rettoolsbtn(liIndex)
	            }, 601)
	          }
	        })
	      } else $toolts.css({
	        top: top + "px",
	        left: left + "px",
	        display: "block"
	      })
	    },
	    initScrollPanel: function() {
	      var _this = this,
	          bodyClient = _this.getBodyClient(),
	          c = _this.getPanel();
	      _this.panelall = $(".panelall"), _this.Totalpage = _this.Panelaryy.length, _this.panelall.height(bodyClient.bodyh).width(bodyClient.bodyw);
	      var d = c.panelA;
	      d.height(bodyClient.bodyh).width(bodyClient.bodyw).css("background-color", _this.getColor), _this.initToolts(), d.eq(0).height(), _this.panelall[0].onmousewheel = _this.scrollMove
	    },
	    scrollMove: function(event) {
	      var _this = Technoscroll,
	        flag = _this.srcoplya;
	      if (flag) {
	        _this.srcoplya = !1;
	        var d = 0,
	            e = 0,
	            f = _this.Panelaryy[0].height();
	        event.wheelDelta < 0 ? (_this.Currentpage < _this.Panelaryy.length && (e = _this.Currentpage + 1), d = f * e) : (_this.Currentpage > 0 && (e = _this.Currentpage - 1), d = f * e), _this.panelall.animate({
	          scrollTop: d
	        }, "600");//console.log(d);
	        var g = _this.timese;
	        "" != g && "undefined" != typeof g && clearTimeout(g), _this.timese = setTimeout(function() {
	          _this.panelall.stop(), _this.Currentpage = e, _this.srcoplya = !0, _this.rettoolsbtn(e)
	        }, 601)
	      }
	    },
	    rettoolsbtn: function(a) {
	      var b = $("." +this.tooltsClassName+ " li");
	      b.removeClass("select"), b.eq(a).addClass("select")
	    },
	    getBodyClient: function() {
	      var documentEle = document.documentElement,
	        bodyWidth = 0 | (window.innerWidth || documentEle.clientWidth),
	        bodyHeight = 0 | (window.innerHeight || documentEle.clientHeight);
	      return (0 == bodyWidth || 0 == bodyHeight) && (bodyWidth = document.body.clientWidth, bodyHeight = document.body.clientHeight), {
	        bodyw: bodyWidth,
	        bodyh: bodyHeight
	      }
	    }
	}, window.Technoscroll = Technoscroll || {}
}(jQuery);

   $(function(){
   	 Technoscroll.initScrollPanel();
   })