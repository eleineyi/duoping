

! function($) {
  Technoscroll = {
    srcoplya: !0,
    timese: "undefined",
    plyendfn: null,
    Currentpage: 0,
    Totalpage: 0,
    color: function() {
      return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
    },
    toolts: function() {
      var a = this,
        b = $(".tooolts"),
        c = 32 * a.subboxlen,
        d = a.bodyclient(),
        e = d.bodyh / 2 - c / 2,
        f = d.bodyw - 40;
      if (b.length < 1) {
        for (var g = "<li class='select'>##</li>", h = "", i = 0; i < a.subboxlen; i++) i > 0 && (g = g.replace("select", "")), h += g.replace("##", i + 1);
        $("<div class='tooolts'><ul class='clearfix'>" + h + "</ul></div>").css({
          top: e + "px",
          left: f + "px",
          display: "block"
        }).appendTo("body");
        var j = $("." + a.tooltsboxclas + " li");
        j.click(function() {
          var b = a.srcoplya;
          if (b) {
            var f, c = $(this),
              d = c.index(),
              g = a.subheigt;
            f = g * d, a.panelall.animate({
              scrollTop: f
            }, "600"), setTimeout(function() {
              a.panelall.stop(), a.Currentpage = d, a.srcoplya = !0, a.rettoolsbtn(d)
            }, 601)
          }
        })
      } else b.css({
        top: e + "px",
        left: f + "px",
        display: "block"
      })
    },
    init: function() {
      var a = this,
        b = a.bodyclient();
      a.panelall.height(b.bodyh).width(b.bodyw), a.subbox.height(b.bodyh).width(b.bodyw).css("background-color", a.color), a.toolts(), a.panelall.bind("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault(), "mousewheel" == b.type ? a.scrollMove(b.originalEvent.wheelDelta) : "DOMMouseScroll" == b.type && a.scrollMove(b.originalEvent.detail)
      })
    },
    scrollMove: function(a) {
      var d, b = Technoscroll,
        c = b.srcoplya;
      if (0 > a) {
        var e = $("li").index($(".select")),
          f = $(".tooolts li");
        d = e < f.length - 1
      } else d = b.Currentpage > 0; if (c && d) {
        b.srcoplya = !1;
        var g = 0,
          h = 0,
          i = b.subheigt;
         0 > a ? (b.Currentpage < b.subboxlen && (h = b.Currentpage + 1), g = i * h) : (b.Currentpage > 0 && (h = b.Currentpage - 1), g = i * h), b.panelall.animate({
          scrollTop: g
        }, "600");
        var j = b.timese;
        "" != j && "undefined" != typeof j && clearTimeout(j), b.timese = setTimeout(function() {
          b.panelall.stop(), b.Currentpage = h, b.srcoplya = !0, b.rettoolsbtn(h)
        }, 601)
      }
    },
    rettoolsbtn: function(a) {
      var c = $(".tooolts li");
      c.removeClass("select"), c.eq(a).addClass("select")
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
  }, Technoscroll.prototype = {
    tooltsbox__: 321,
    plyaendfn: null,
    panelall: null,
    subbox: null,
    subboxlen: null,
    subheigt: null
  }, window.Technoscroll = Technoscroll || {}
}(jQuery);

var scrollply = function(a) {
  var b = Technoscroll;
  b.panelall = $("" + a.panelall), b.subbox = $("" + a.subbox), b.subheigt = b.bodyclient().bodyh, b.subboxlen = b.subbox.length, b.plyaendfn = a.plyaendfn, b.init()
};


   $(function(){
     scrollply({panelall:".panelall",subbox:".Panel"});
   })

	