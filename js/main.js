let footer = document.querySelector("footer p ");
(footer.innerHTML = `جميع الحقوق محفوظة<span id="4">أحمد حاتم</span>${new Date().getFullYear()} \xa9`),
  (onload = function () {
    let e = document.querySelector(".view .welcome .text h1"),
      t = document.querySelector(".view .spred"),
      a = document.querySelector(".view .welcome .text p span");
    setTimeout(function () {
      document.querySelector(".lode").style.cssText = `
    display:none
    `;
    }, 1e3),
      setTimeout(function () {
        let e = document.querySelectorAll("section ,header , footer");
        for (i = 0; i < e.length; ++i)
          e[i].style.cssText = " filter: blur(0px)";
        document.body.style.overflow = "auto";
      }, 1300),
      (e.style.cssText = `
    transform: translate(0 , 0) !important ;
    opacity: 1;
`),
      (a.parentElement.style.cssText = `
transform: translate(0 , 0) !important ;
opacity: 1;
`),
      this.setTimeout((e) => {
        i = 0;
        let t = "إسمي أحمد حاتم وأنا سعيد بزيارتك لموقعي",
          s = this.setInterval((e) => {
            "use strict";
            (a.textContent += t[i]),
              a.textContent.length == t.length && this.clearInterval(s),
              (i += 1);
          }, 100);
      }, 3200),
      (t.style.cssText = " animation: spred 2s 2s  1 alternate forwards ;");
  }),
  (onscroll = function () {
    (document.querySelector("header").style.cssText = `
    position:fixed !important ;
    `),
      scrollY >= 950
        ? (this.document.querySelector("header").style.cssText = `
    filter: blur(0px);
    position:fixed !important ;
    background: rgba( 255, 255, 255, 0.15 ) !important;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important;
    backdrop-filter: blur( 20px ) !important;
    -webkit-backdrop-filter: blur( 20px ) !important;
    `)
        : (this.document.querySelector("header").style.cssText = `
    position:absolute !important ;
    filter: blur(0px);
    background: rgba( 255, 255, 255, 0.9 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    `);
    let e = document.querySelector(".my-img "),
      t = this.document.querySelector(".welcome .text");
    this.window.screen.width >= 1450 &&
      (this.scrollY < 102 &&
        ((e.style.width = `${700 - 2 * scrollY}px`), (e.style.left = "0px")),
      scrollY >= 102 &&
        ((e.style.width = `${e.style.width}`)),
      (e.style.left = `${scrollY}px`),
      (t.style.right = `${scrollY}px`),
      scrollY >= 204 && ((e.style.left = "204px"), (t.style.right = "204px")),
      this.window.screen.width >= 1650 &&
        ((e.style.left = `${scrollY}px`),
        (t.style.right = `${scrollY}px`),
        scrollY >= 304 &&
          ((e.style.left = "304px"), (t.style.right = "304px"))));
  }),
  addEventListener("load", (e) => {
    function t(e) {
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, s) {
        return t + t + a + a + s + s;
      });
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t
        ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16),
          }
        : null;
    }
    function a(e, t, a) {
      return Math.min(Math.max(e, t), a);
    }
    function s(e, t) {
      return t.indexOf(e) > -1;
    }
    var r,
      n,
      c,
      o = function (e, r) {
        var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
          canvas: { el: n, w: n.offsetWidth, h: n.offsetHeight },
          particles: {
            number: { value: 400, density: { enable: !0, value_area: 800 } },
            color: { value: "#fff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#ff0000" },
              polygon: { nb_sides: 5 },
              image: { src: "", width: 100, height: 100 },
            },
            opacity: {
              value: 1,
              random: !1,
              anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
            },
            size: {
              value: 20,
              random: !1,
              anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
            },
            line_linked: {
              enable: !0,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 2,
              direction: "none",
              random: !1,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: !0, mode: "grab" },
              onclick: { enable: !0, mode: "push" },
              resize: !0,
            },
            modes: {
              grab: { distance: 100, line_linked: { opacity: 1 } },
              bubble: { distance: 200, size: 80, duration: 0.4 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
            mouse: {},
          },
          retina_detect: !1,
          fn: { interact: {}, modes: {}, vendors: {} },
          tmp: {},
        };
        var c = this.pJS;
        r && Object.deepExtend(c, r),
          (c.tmp.obj = {
            size_value: c.particles.size.value,
            size_anim_speed: c.particles.size.anim.speed,
            move_speed: c.particles.move.speed,
            line_linked_distance: c.particles.line_linked.distance,
            line_linked_width: c.particles.line_linked.width,
            mode_grab_distance: c.interactivity.modes.grab.distance,
            mode_bubble_distance: c.interactivity.modes.bubble.distance,
            mode_bubble_size: c.interactivity.modes.bubble.size,
            mode_repulse_distance: c.interactivity.modes.repulse.distance,
          }),
          (c.fn.retinaInit = function () {
            c.retina_detect && window.devicePixelRatio > 1
              ? ((c.canvas.pxratio = window.devicePixelRatio),
                (c.tmp.retina = !0))
              : ((c.canvas.pxratio = 1), (c.tmp.retina = !1)),
              (c.canvas.w = c.canvas.el.offsetWidth * c.canvas.pxratio),
              (c.canvas.h = c.canvas.el.offsetHeight * c.canvas.pxratio),
              (c.particles.size.value =
                c.tmp.obj.size_value * c.canvas.pxratio),
              (c.particles.size.anim.speed =
                c.tmp.obj.size_anim_speed * c.canvas.pxratio),
              (c.particles.move.speed =
                c.tmp.obj.move_speed * c.canvas.pxratio),
              (c.particles.line_linked.distance =
                c.tmp.obj.line_linked_distance * c.canvas.pxratio),
              (c.interactivity.modes.grab.distance =
                c.tmp.obj.mode_grab_distance * c.canvas.pxratio),
              (c.interactivity.modes.bubble.distance =
                c.tmp.obj.mode_bubble_distance * c.canvas.pxratio),
              (c.particles.line_linked.width =
                c.tmp.obj.line_linked_width * c.canvas.pxratio),
              (c.interactivity.modes.bubble.size =
                c.tmp.obj.mode_bubble_size * c.canvas.pxratio),
              (c.interactivity.modes.repulse.distance =
                c.tmp.obj.mode_repulse_distance * c.canvas.pxratio);
          }),
          (c.fn.canvasInit = function () {
            c.canvas.ctx = c.canvas.el.getContext("2d");
          }),
          (c.fn.canvasSize = function () {
            (c.canvas.el.width = c.canvas.w),
              (c.canvas.el.height = c.canvas.h),
              c &&
                c.interactivity.events.resize &&
                window.addEventListener("resize", function () {
                  (c.canvas.w = c.canvas.el.offsetWidth),
                    (c.canvas.h = c.canvas.el.offsetHeight),
                    c.tmp.retina &&
                      ((c.canvas.w *= c.canvas.pxratio),
                      (c.canvas.h *= c.canvas.pxratio)),
                    (c.canvas.el.width = c.canvas.w),
                    (c.canvas.el.height = c.canvas.h),
                    c.particles.move.enable ||
                      (c.fn.particlesEmpty(),
                      c.fn.particlesCreate(),
                      c.fn.particlesDraw(),
                      c.fn.vendors.densityAutoParticles()),
                    c.fn.vendors.densityAutoParticles();
                });
          }),
          (c.fn.canvasPaint = function () {
            c.canvas.ctx.fillRect(0, 0, c.canvas.w, c.canvas.h);
          }),
          (c.fn.canvasClear = function () {
            c.canvas.ctx.clearRect(0, 0, c.canvas.w, c.canvas.h);
          }),
          (c.fn.particle = function (e, a, s) {
            if (
              ((this.radius =
                (c.particles.size.random ? Math.random() : 1) *
                c.particles.size.value),
              c.particles.size.anim.enable &&
                ((this.size_status = !1),
                (this.vs = c.particles.size.anim.speed / 100),
                c.particles.size.anim.sync ||
                  (this.vs = this.vs * Math.random())),
              (this.x = s ? s.x : Math.random() * c.canvas.w),
              (this.y = s ? s.y : Math.random() * c.canvas.h),
              this.x > c.canvas.w - 2 * this.radius
                ? (this.x = this.x - this.radius)
                : this.x < 2 * this.radius && (this.x = this.x + this.radius),
              this.y > c.canvas.h - 2 * this.radius
                ? (this.y = this.y - this.radius)
                : this.y < 2 * this.radius && (this.y = this.y + this.radius),
              c.particles.move.bounce && c.fn.vendors.checkOverlap(this, s),
              (this.color = {}),
              "object" == typeof e.value)
            ) {
              if (e.value instanceof Array) {
                var r =
                  e.value[
                    Math.floor(Math.random() * c.particles.color.value.length)
                  ];
                this.color.rgb = t(r);
              } else
                void 0 != e.value.r &&
                  void 0 != e.value.g &&
                  void 0 != e.value.b &&
                  (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b,
                  }),
                  void 0 != e.value.h &&
                    void 0 != e.value.s &&
                    void 0 != e.value.l &&
                    (this.color.hsl = {
                      h: e.value.h,
                      s: e.value.s,
                      l: e.value.l,
                    });
            } else
              "random" == e.value
                ? (this.color.rgb = {
                    r: Math.floor(256 * Math.random()) + 0,
                    g: Math.floor(256 * Math.random()) + 0,
                    b: Math.floor(256 * Math.random()) + 0,
                  })
                : "string" == typeof e.value &&
                  ((this.color = e), (this.color.rgb = t(this.color.value)));
            (this.opacity =
              (c.particles.opacity.random ? Math.random() : 1) *
              c.particles.opacity.value),
              c.particles.opacity.anim.enable &&
                ((this.opacity_status = !1),
                (this.vo = c.particles.opacity.anim.speed / 100),
                c.particles.opacity.anim.sync ||
                  (this.vo = this.vo * Math.random()));
            var n = {};
            switch (c.particles.move.direction) {
              case "top":
                n = { x: 0, y: -1 };
                break;
              case "top-right":
                n = { x: 0.5, y: -0.5 };
                break;
              case "right":
                n = { x: 1, y: -0 };
                break;
              case "bottom-right":
                n = { x: 0.5, y: 0.5 };
                break;
              case "bottom":
                n = { x: 0, y: 1 };
                break;
              case "bottom-left":
                n = { x: -0.5, y: 1 };
                break;
              case "left":
                n = { x: -1, y: 0 };
                break;
              case "top-left":
                n = { x: -0.5, y: -0.5 };
                break;
              default:
                n = { x: 0, y: 0 };
            }
            c.particles.move.straight
              ? ((this.vx = n.x),
                (this.vy = n.y),
                c.particles.move.random &&
                  ((this.vx = this.vx * Math.random()),
                  (this.vy = this.vy * Math.random())))
              : ((this.vx = n.x + Math.random() - 0.5),
                (this.vy = n.y + Math.random() - 0.5)),
              (this.vx_i = this.vx),
              (this.vy_i = this.vy);
            var o = c.particles.shape.type;
            if ("object" == typeof o) {
              if (o instanceof Array) {
                var l = o[Math.floor(Math.random() * o.length)];
                this.shape = l;
              }
            } else this.shape = o;
            if ("image" == this.shape) {
              var v = c.particles.shape;
              (this.img = {
                src: v.image.src,
                ratio: v.image.width / v.image.height,
              }),
                this.img.ratio || (this.img.ratio = 1),
                "svg" == c.tmp.img_type &&
                  void 0 != c.tmp.source_svg &&
                  (c.fn.vendors.createSvgImg(this),
                  c.tmp.pushing && (this.img.loaded = !1));
            }
          }),
          (c.fn.particle.prototype.draw = function () {
            if (void 0 != this.radius_bubble) var e = this.radius_bubble;
            else var e = this.radius;
            if (void 0 != this.opacity_bubble) var t = this.opacity_bubble;
            else var t = this.opacity;
            if (this.color.rgb)
              var a =
                "rgba(" +
                this.color.rgb.r +
                "," +
                this.color.rgb.g +
                "," +
                this.color.rgb.b +
                "," +
                t +
                ")";
            else
              var a =
                "hsla(" +
                this.color.hsl.h +
                "," +
                this.color.hsl.s +
                "%," +
                this.color.hsl.l +
                "%," +
                t +
                ")";
            switch (
              ((c.canvas.ctx.fillStyle = a),
              c.canvas.ctx.beginPath(),
              this.shape)
            ) {
              case "circle":
                c.canvas.ctx.arc(this.x, this.y, e, 0, 2 * Math.PI, !1);
                break;
              case "edge":
                c.canvas.ctx.rect(this.x - e, this.y - e, 2 * e, 2 * e);
                break;
              case "triangle":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  this.x - e,
                  this.y + e / 1.66,
                  2 * e,
                  3,
                  2
                );
                break;
              case "polygon":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  this.x - e / (c.particles.shape.polygon.nb_sides / 3.5),
                  this.y - e / 0.76,
                  (2.66 * e) / (c.particles.shape.polygon.nb_sides / 3),
                  c.particles.shape.polygon.nb_sides,
                  1
                );
                break;
              case "star":
                c.fn.vendors.drawShape(
                  c.canvas.ctx,
                  this.x - (2 * e) / (c.particles.shape.polygon.nb_sides / 4),
                  this.y - e / 1.52,
                  (2 * e * 2.66) / (c.particles.shape.polygon.nb_sides / 3),
                  c.particles.shape.polygon.nb_sides,
                  2
                );
                break;
              case "image":
                if ("svg" == c.tmp.img_type) var s = this.img.obj;
                else var s = c.tmp.img_obj;
                s &&
                  c.canvas.ctx.drawImage(
                    s,
                    this.x - e,
                    this.y - e,
                    2 * e,
                    (2 * e) / this.img.ratio
                  );
            }
            c.canvas.ctx.closePath(),
              c.particles.shape.stroke.width > 0 &&
                ((c.canvas.ctx.strokeStyle = c.particles.shape.stroke.color),
                (c.canvas.ctx.lineWidth = c.particles.shape.stroke.width),
                c.canvas.ctx.stroke()),
              c.canvas.ctx.fill();
          }),
          (c.fn.particlesCreate = function () {
            for (var e = 0; e < c.particles.number.value; e++)
              c.particles.array.push(
                new c.fn.particle(c.particles.color, c.particles.opacity.value)
              );
          }),
          (c.fn.particlesUpdate = function () {
            for (var e = 0; e < c.particles.array.length; e++) {
              var t = c.particles.array[e];
              if (c.particles.move.enable) {
                var a = c.particles.move.speed / 2;
                (t.x += t.vx * a), (t.y += t.vy * a);
              }
              if (
                (c.particles.opacity.anim.enable &&
                  (1 == t.opacity_status
                    ? (t.opacity >= c.particles.opacity.value &&
                        (t.opacity_status = !1),
                      (t.opacity += t.vo))
                    : (t.opacity <= c.particles.opacity.anim.opacity_min &&
                        (t.opacity_status = !0),
                      (t.opacity -= t.vo)),
                  t.opacity < 0 && (t.opacity = 0)),
                c.particles.size.anim.enable &&
                  (1 == t.size_status
                    ? (t.radius >= c.particles.size.value &&
                        (t.size_status = !1),
                      (t.radius += t.vs))
                    : (t.radius <= c.particles.size.anim.size_min &&
                        (t.size_status = !0),
                      (t.radius -= t.vs)),
                  t.radius < 0 && (t.radius = 0)),
                "bounce" == c.particles.move.out_mode)
              )
                var r = {
                  x_left: t.radius,
                  x_right: c.canvas.w,
                  y_top: t.radius,
                  y_bottom: c.canvas.h,
                };
              else
                var r = {
                  x_left: -t.radius,
                  x_right: c.canvas.w + t.radius,
                  y_top: -t.radius,
                  y_bottom: c.canvas.h + t.radius,
                };
              if (
                (t.x - t.radius > c.canvas.w
                  ? ((t.x = r.x_left), (t.y = Math.random() * c.canvas.h))
                  : t.x + t.radius < 0 &&
                    ((t.x = r.x_right), (t.y = Math.random() * c.canvas.h)),
                t.y - t.radius > c.canvas.h
                  ? ((t.y = r.y_top), (t.x = Math.random() * c.canvas.w))
                  : t.y + t.radius < 0 &&
                    ((t.y = r.y_bottom), (t.x = Math.random() * c.canvas.w)),
                "bounce" === c.particles.move.out_mode &&
                  (t.x + t.radius > c.canvas.w
                    ? (t.vx = -t.vx)
                    : t.x - t.radius < 0 && (t.vx = -t.vx),
                  t.y + t.radius > c.canvas.h
                    ? (t.vy = -t.vy)
                    : t.y - t.radius < 0 && (t.vy = -t.vy)),
                s("grab", c.interactivity.events.onhover.mode) &&
                  c.fn.modes.grabParticle(t),
                (s("bubble", c.interactivity.events.onhover.mode) ||
                  s("bubble", c.interactivity.events.onclick.mode)) &&
                  c.fn.modes.bubbleParticle(t),
                (s("repulse", c.interactivity.events.onhover.mode) ||
                  s("repulse", c.interactivity.events.onclick.mode)) &&
                  c.fn.modes.repulseParticle(t),
                c.particles.line_linked.enable ||
                  c.particles.move.attract.enable)
              )
                for (var n = e + 1; n < c.particles.array.length; n++) {
                  var o = c.particles.array[n];
                  c.particles.line_linked.enable &&
                    c.fn.interact.linkParticles(t, o),
                    c.particles.move.attract.enable &&
                      c.fn.interact.attractParticles(t, o),
                    c.particles.move.bounce &&
                      c.fn.interact.bounceParticles(t, o);
                }
            }
          }),
          (c.fn.particlesDraw = function () {
            c.canvas.ctx.clearRect(0, 0, c.canvas.w, c.canvas.h),
              c.fn.particlesUpdate();
            for (var e = 0; e < c.particles.array.length; e++)
              c.particles.array[e].draw();
          }),
          (c.fn.particlesEmpty = function () {
            c.particles.array = [];
          }),
          (c.fn.particlesRefresh = function () {
            cancelRequestAnimFrame(c.fn.checkAnimFrame),
              cancelRequestAnimFrame(c.fn.drawAnimFrame),
              (c.tmp.source_svg = void 0),
              (c.tmp.img_obj = void 0),
              (c.tmp.count_svg = 0),
              c.fn.particlesEmpty(),
              c.fn.canvasClear(),
              c.fn.vendors.start();
          }),
          (c.fn.interact.linkParticles = function (e, t) {
            var a = e.x - t.x,
              s = e.y - t.y,
              r = Math.sqrt(a * a + s * s);
            if (r <= c.particles.line_linked.distance) {
              var n =
                c.particles.line_linked.opacity -
                r /
                  (1 / c.particles.line_linked.opacity) /
                  c.particles.line_linked.distance;
              if (n > 0) {
                var o = c.particles.line_linked.color_rgb_line;
                (c.canvas.ctx.strokeStyle =
                  "rgba(" + o.r + "," + o.g + "," + o.b + "," + n + ")"),
                  (c.canvas.ctx.lineWidth = c.particles.line_linked.width),
                  c.canvas.ctx.beginPath(),
                  c.canvas.ctx.moveTo(e.x, e.y),
                  c.canvas.ctx.lineTo(t.x, t.y),
                  c.canvas.ctx.stroke(),
                  c.canvas.ctx.closePath();
              }
            }
          }),
          (c.fn.interact.attractParticles = function (e, t) {
            var a = e.x - t.x,
              s = e.y - t.y;
            if (Math.sqrt(a * a + s * s) <= c.particles.line_linked.distance) {
              var r = a / (1e3 * c.particles.move.attract.rotateX),
                n = s / (1e3 * c.particles.move.attract.rotateY);
              (e.vx -= r), (e.vy -= n), (t.vx += r), (t.vy += n);
            }
          }),
          (c.fn.interact.bounceParticles = function (e, t) {
            var a = e.x - t.x,
              s = e.y - t.y;
            e.radius + t.radius >= Math.sqrt(a * a + s * s) &&
              ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
          }),
          (c.fn.modes.pushParticles = function (e, t) {
            c.tmp.pushing = !0;
            for (var a = 0; e > a; a++)
              c.particles.array.push(
                new c.fn.particle(
                  c.particles.color,
                  c.particles.opacity.value,
                  {
                    x: t ? t.pos_x : Math.random() * c.canvas.w,
                    y: t ? t.pos_y : Math.random() * c.canvas.h,
                  }
                )
              ),
                a == e - 1 &&
                  (c.particles.move.enable || c.fn.particlesDraw(),
                  (c.tmp.pushing = !1));
          }),
          (c.fn.modes.removeParticles = function (e) {
            c.particles.array.splice(0, e),
              c.particles.move.enable || c.fn.particlesDraw();
          }),
          (c.fn.modes.bubbleParticle = function (e) {
            function t() {
              (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
            }
            function a(t, a, s, r, n) {
              if (t != a) {
                if (c.tmp.bubble_duration_end) {
                  if (void 0 != s) {
                    var l =
                      r - (m * (r - t)) / c.interactivity.modes.bubble.duration;
                    (p = t + (t - l)),
                      "size" == n && (e.radius_bubble = p),
                      "opacity" == n && (e.opacity_bubble = p);
                  }
                } else if (o <= c.interactivity.modes.bubble.distance) {
                  if (void 0 != s) var v = s;
                  else var v = r;
                  if (v != t) {
                    var p =
                      r - (m * (r - t)) / c.interactivity.modes.bubble.duration;
                    "size" == n && (e.radius_bubble = p),
                      "opacity" == n && (e.opacity_bubble = p);
                  }
                } else
                  "size" == n && (e.radius_bubble = void 0),
                    "opacity" == n && (e.opacity_bubble = void 0);
              }
            }
            if (
              c.interactivity.events.onhover.enable &&
              s("bubble", c.interactivity.events.onhover.mode)
            ) {
              var r = e.x - c.interactivity.mouse.pos_x,
                n = e.y - c.interactivity.mouse.pos_y,
                o = Math.sqrt(r * r + n * n),
                l = 1 - o / c.interactivity.modes.bubble.distance;
              if (o <= c.interactivity.modes.bubble.distance) {
                if (l >= 0 && "mousemove" == c.interactivity.status) {
                  if (
                    c.interactivity.modes.bubble.size != c.particles.size.value
                  ) {
                    if (
                      c.interactivity.modes.bubble.size > c.particles.size.value
                    ) {
                      var v = e.radius + c.interactivity.modes.bubble.size * l;
                      v >= 0 && (e.radius_bubble = v);
                    } else {
                      var p = e.radius - c.interactivity.modes.bubble.size,
                        v = e.radius - p * l;
                      v > 0 ? (e.radius_bubble = v) : (e.radius_bubble = 0);
                    }
                  }
                  if (
                    c.interactivity.modes.bubble.opacity !=
                    c.particles.opacity.value
                  ) {
                    if (
                      c.interactivity.modes.bubble.opacity >
                      c.particles.opacity.value
                    ) {
                      var d = c.interactivity.modes.bubble.opacity * l;
                      d > e.opacity &&
                        d <= c.interactivity.modes.bubble.opacity &&
                        (e.opacity_bubble = d);
                    } else {
                      var d =
                        e.opacity -
                        (c.particles.opacity.value -
                          c.interactivity.modes.bubble.opacity) *
                          l;
                      d < e.opacity &&
                        d >= c.interactivity.modes.bubble.opacity &&
                        (e.opacity_bubble = d);
                    }
                  }
                }
              } else t();
              "mouseleave" == c.interactivity.status && t();
            } else if (
              c.interactivity.events.onclick.enable &&
              s("bubble", c.interactivity.events.onclick.mode)
            ) {
              if (c.tmp.bubble_clicking) {
                var r = e.x - c.interactivity.mouse.click_pos_x,
                  n = e.y - c.interactivity.mouse.click_pos_y,
                  o = Math.sqrt(r * r + n * n),
                  m =
                    (new Date().getTime() - c.interactivity.mouse.click_time) /
                    1e3;
                m > c.interactivity.modes.bubble.duration &&
                  (c.tmp.bubble_duration_end = !0),
                  m > 2 * c.interactivity.modes.bubble.duration &&
                    ((c.tmp.bubble_clicking = !1),
                    (c.tmp.bubble_duration_end = !1));
              }
              c.tmp.bubble_clicking &&
                (a(
                  c.interactivity.modes.bubble.size,
                  c.particles.size.value,
                  e.radius_bubble,
                  e.radius,
                  "size"
                ),
                a(
                  c.interactivity.modes.bubble.opacity,
                  c.particles.opacity.value,
                  e.opacity_bubble,
                  e.opacity,
                  "opacity"
                ));
            }
          }),
          (c.fn.modes.repulseParticle = function (e) {
            if (
              c.interactivity.events.onhover.enable &&
              s("repulse", c.interactivity.events.onhover.mode) &&
              "mousemove" == c.interactivity.status
            ) {
              var t = e.x - c.interactivity.mouse.pos_x,
                r = e.y - c.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + r * r),
                o = { x: t / n, y: r / n },
                l = c.interactivity.modes.repulse.distance,
                v = a((1 / l) * (-1 * Math.pow(n / l, 2) + 1) * l * 100, 0, 50),
                p = { x: e.x + o.x * v, y: e.y + o.y * v };
              "bounce" == c.particles.move.out_mode
                ? (p.x - e.radius > 0 &&
                    p.x + e.radius < c.canvas.w &&
                    (e.x = p.x),
                  p.y - e.radius > 0 &&
                    p.y + e.radius < c.canvas.h &&
                    (e.y = p.y))
                : ((e.x = p.x), (e.y = p.y));
            } else if (
              c.interactivity.events.onclick.enable &&
              s("repulse", c.interactivity.events.onclick.mode)
            ) {
              if (
                (c.tmp.repulse_finish ||
                  (c.tmp.repulse_count++,
                  c.tmp.repulse_count == c.particles.array.length &&
                    (c.tmp.repulse_finish = !0)),
                c.tmp.repulse_clicking)
              ) {
                var l = Math.pow(c.interactivity.modes.repulse.distance / 6, 3),
                  d = c.interactivity.mouse.click_pos_x - e.x,
                  m = c.interactivity.mouse.click_pos_y - e.y,
                  u = d * d + m * m,
                  y = (-l / u) * 1;
                l >= u &&
                  (function t() {
                    var a = Math.atan2(m, d);
                    if (
                      ((e.vx = y * Math.cos(a)),
                      (e.vy = y * Math.sin(a)),
                      "bounce" == c.particles.move.out_mode)
                    ) {
                      var s = { x: e.x + e.vx, y: e.y + e.vy };
                      s.x + e.radius > c.canvas.w
                        ? (e.vx = -e.vx)
                        : s.x - e.radius < 0 && (e.vx = -e.vx),
                        s.y + e.radius > c.canvas.h
                          ? (e.vy = -e.vy)
                          : s.y - e.radius < 0 && (e.vy = -e.vy);
                    }
                  })();
              } else
                0 == c.tmp.repulse_clicking &&
                  ((e.vx = e.vx_i), (e.vy = e.vy_i));
            }
          }),
          (c.fn.modes.grabParticle = function (e) {
            if (
              c.interactivity.events.onhover.enable &&
              "mousemove" == c.interactivity.status
            ) {
              var t = e.x - c.interactivity.mouse.pos_x,
                a = e.y - c.interactivity.mouse.pos_y,
                s = Math.sqrt(t * t + a * a);
              if (s <= c.interactivity.modes.grab.distance) {
                var r =
                  c.interactivity.modes.grab.line_linked.opacity -
                  s /
                    (1 / c.interactivity.modes.grab.line_linked.opacity) /
                    c.interactivity.modes.grab.distance;
                if (r > 0) {
                  var n = c.particles.line_linked.color_rgb_line;
                  (c.canvas.ctx.strokeStyle =
                    "rgba(" + n.r + "," + n.g + "," + n.b + "," + r + ")"),
                    (c.canvas.ctx.lineWidth = c.particles.line_linked.width),
                    c.canvas.ctx.beginPath(),
                    c.canvas.ctx.moveTo(e.x, e.y),
                    c.canvas.ctx.lineTo(
                      c.interactivity.mouse.pos_x,
                      c.interactivity.mouse.pos_y
                    ),
                    c.canvas.ctx.stroke(),
                    c.canvas.ctx.closePath();
                }
              }
            }
          }),
          (c.fn.vendors.eventsListeners = function () {
            "window" == c.interactivity.detect_on
              ? (c.interactivity.el = window)
              : (c.interactivity.el = c.canvas.el),
              (c.interactivity.events.onhover.enable ||
                c.interactivity.events.onclick.enable) &&
                (c.interactivity.el.addEventListener("mousemove", function (e) {
                  if (c.interactivity.el == window)
                    var t = e.clientX,
                      a = e.clientY;
                  else
                    var t = e.offsetX || e.clientX,
                      a = e.offsetY || e.clientY;
                  (c.interactivity.mouse.pos_x = t),
                    (c.interactivity.mouse.pos_y = a),
                    c.tmp.retina &&
                      ((c.interactivity.mouse.pos_x *= c.canvas.pxratio),
                      (c.interactivity.mouse.pos_y *= c.canvas.pxratio)),
                    (c.interactivity.status = "mousemove");
                }),
                c.interactivity.el.addEventListener("mouseleave", function (e) {
                  (c.interactivity.mouse.pos_x = null),
                    (c.interactivity.mouse.pos_y = null),
                    (c.interactivity.status = "mouseleave");
                })),
              c.interactivity.events.onclick.enable &&
                c.interactivity.el.addEventListener("click", function () {
                  if (
                    ((c.interactivity.mouse.click_pos_x =
                      c.interactivity.mouse.pos_x),
                    (c.interactivity.mouse.click_pos_y =
                      c.interactivity.mouse.pos_y),
                    (c.interactivity.mouse.click_time = new Date().getTime()),
                    c.interactivity.events.onclick.enable)
                  )
                    switch (c.interactivity.events.onclick.mode) {
                      case "push":
                        c.particles.move.enable
                          ? c.fn.modes.pushParticles(
                              c.interactivity.modes.push.particles_nb,
                              c.interactivity.mouse
                            )
                          : 1 == c.interactivity.modes.push.particles_nb
                          ? c.fn.modes.pushParticles(
                              c.interactivity.modes.push.particles_nb,
                              c.interactivity.mouse
                            )
                          : c.interactivity.modes.push.particles_nb > 1 &&
                            c.fn.modes.pushParticles(
                              c.interactivity.modes.push.particles_nb
                            );
                        break;
                      case "remove":
                        c.fn.modes.removeParticles(
                          c.interactivity.modes.remove.particles_nb
                        );
                        break;
                      case "bubble":
                        c.tmp.bubble_clicking = !0;
                        break;
                      case "repulse":
                        (c.tmp.repulse_clicking = !0),
                          (c.tmp.repulse_count = 0),
                          (c.tmp.repulse_finish = !1),
                          setTimeout(function () {
                            c.tmp.repulse_clicking = !1;
                          }, 1e3 * c.interactivity.modes.repulse.duration);
                    }
                });
          }),
          (c.fn.vendors.densityAutoParticles = function () {
            if (c.particles.number.density.enable) {
              var e = (c.canvas.el.width * c.canvas.el.height) / 1e3;
              c.tmp.retina && (e /= 2 * c.canvas.pxratio);
              var t =
                  (e * c.particles.number.value) /
                  c.particles.number.density.value_area,
                a = c.particles.array.length - t;
              0 > a
                ? c.fn.modes.pushParticles(Math.abs(a))
                : c.fn.modes.removeParticles(a);
            }
          }),
          (c.fn.vendors.checkOverlap = function (e, t) {
            for (var a = 0; a < c.particles.array.length; a++) {
              var s = c.particles.array[a],
                r = e.x - s.x,
                n = e.y - s.y;
              Math.sqrt(r * r + n * n) <= e.radius + s.radius &&
                ((e.x = t ? t.x : Math.random() * c.canvas.w),
                (e.y = t ? t.y : Math.random() * c.canvas.h),
                c.fn.vendors.checkOverlap(e));
            }
          }),
          (c.fn.vendors.createSvgImg = function (e) {
            var t = c.tmp.source_svg.replace(
                /#([0-9A-F]{3,6})/gi,
                function (t, a, s, r) {
                  if (e.color.rgb)
                    var n =
                      "rgba(" +
                      e.color.rgb.r +
                      "," +
                      e.color.rgb.g +
                      "," +
                      e.color.rgb.b +
                      "," +
                      e.opacity +
                      ")";
                  else
                    var n =
                      "hsla(" +
                      e.color.hsl.h +
                      "," +
                      e.color.hsl.s +
                      "%," +
                      e.color.hsl.l +
                      "%," +
                      e.opacity +
                      ")";
                  return n;
                }
              ),
              a = new Blob([t], { type: "image/svg+xml;charset=utf-8" }),
              s = window.URL || window.webkitURL || window,
              r = s.createObjectURL(a),
              n = new Image();
            n.addEventListener("load", function () {
              (e.img.obj = n),
                (e.img.loaded = !0),
                s.revokeObjectURL(r),
                c.tmp.count_svg++;
            }),
              (n.src = r);
          }),
          (c.fn.vendors.destroypJS = function () {
            cancelAnimationFrame(c.fn.drawAnimFrame),
              n.remove(),
              (pJSDom = null);
          }),
          (c.fn.vendors.drawShape = function (e, t, a, s, r, n) {
            var c = r * n,
              o = r / n,
              l = Math.PI - (Math.PI * ((180 * (o - 2)) / o)) / 180;
            e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
            for (var v = 0; c > v; v++)
              e.lineTo(s, 0), e.translate(s, 0), e.rotate(l);
            e.fill(), e.restore();
          }),
          (c.fn.vendors.exportImg = function () {
            window.open(c.canvas.el.toDataURL("image/png"), "_blank");
          }),
          (c.fn.vendors.loadImg = function (e) {
            if (
              ((c.tmp.img_error = void 0), "" != c.particles.shape.image.src)
            ) {
              if ("svg" == e) {
                var t = new XMLHttpRequest();
                t.open("GET", c.particles.shape.image.src),
                  (t.onreadystatechange = function (e) {
                    4 == t.readyState &&
                      (200 == t.status
                        ? ((c.tmp.source_svg = e.currentTarget.response),
                          c.fn.vendors.checkBeforeDraw())
                        : (console.log("Error pJS - Image not found"),
                          (c.tmp.img_error = !0)));
                  }),
                  t.send();
              } else {
                var a = new Image();
                a.addEventListener("load", function () {
                  (c.tmp.img_obj = a), c.fn.vendors.checkBeforeDraw();
                }),
                  (a.src = c.particles.shape.image.src);
              }
            } else
              console.log("Error pJS - No image.src"), (c.tmp.img_error = !0);
          }),
          (c.fn.vendors.draw = function () {
            "image" == c.particles.shape.type
              ? "svg" == c.tmp.img_type
                ? c.tmp.count_svg >= c.particles.number.value
                  ? (c.fn.particlesDraw(),
                    c.particles.move.enable
                      ? (c.fn.drawAnimFrame = requestAnimFrame(
                          c.fn.vendors.draw
                        ))
                      : cancelRequestAnimFrame(c.fn.drawAnimFrame))
                  : c.tmp.img_error ||
                    (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                : void 0 != c.tmp.img_obj
                ? (c.fn.particlesDraw(),
                  c.particles.move.enable
                    ? (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                    : cancelRequestAnimFrame(c.fn.drawAnimFrame))
                : c.tmp.img_error ||
                  (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
              : (c.fn.particlesDraw(),
                c.particles.move.enable
                  ? (c.fn.drawAnimFrame = requestAnimFrame(c.fn.vendors.draw))
                  : cancelRequestAnimFrame(c.fn.drawAnimFrame));
          }),
          (c.fn.vendors.checkBeforeDraw = function () {
            "image" == c.particles.shape.type
              ? "svg" == c.tmp.img_type && void 0 == c.tmp.source_svg
                ? (c.tmp.checkAnimFrame = requestAnimFrame(check))
                : (cancelRequestAnimFrame(c.tmp.checkAnimFrame),
                  c.tmp.img_error || (c.fn.vendors.init(), c.fn.vendors.draw()))
              : (c.fn.vendors.init(), c.fn.vendors.draw());
          }),
          (c.fn.vendors.init = function () {
            c.fn.retinaInit(),
              c.fn.canvasInit(),
              c.fn.canvasSize(),
              c.fn.canvasPaint(),
              c.fn.particlesCreate(),
              c.fn.vendors.densityAutoParticles(),
              (c.particles.line_linked.color_rgb_line = t(
                c.particles.line_linked.color
              ));
          }),
          (c.fn.vendors.start = function () {
            s("image", c.particles.shape.type)
              ? ((c.tmp.img_type = c.particles.shape.image.src.substr(
                  c.particles.shape.image.src.length - 3
                )),
                c.fn.vendors.loadImg(c.tmp.img_type))
              : c.fn.vendors.checkBeforeDraw();
          }),
          c.fn.vendors.eventsListeners(),
          c.fn.vendors.start();
      };
    (Object.deepExtend = function (e, t) {
      for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object
          ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
          : (e[a] = t[a]);
      return e;
    }),
      (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
          window.setTimeout(e, 1e3 / 60);
        }),
      (window.cancelRequestAnimFrame =
        window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout),
      (window.pJSDom = []),
      (window.particlesJS = function (e, t) {
        "string" != typeof e && ((t = e), (e = "particles-js")),
          e || (e = "particles-js");
        var a = document.getElementById(e),
          s = "particles-js-canvas-el",
          r = a.getElementsByClassName(s);
        if (r.length) for (; r.length > 0; ) a.removeChild(r[0]);
        var n = document.createElement("canvas");
        (n.className = s),
          (n.style.width = "100%"),
          (n.style.height = "100%"),
          null != document.getElementById(e).appendChild(n) &&
            pJSDom.push(new o(e, t));
      }),
      (window.particlesJS.load = function (e, t, a) {
        var s = new XMLHttpRequest();
        s.open("GET", t),
          (s.onreadystatechange = function (t) {
            if (4 == s.readyState) {
              if (200 == s.status) {
                var r = JSON.parse(t.currentTarget.response);
                window.particlesJS(e, r), a && a();
              } else
                console.log("Error pJS - XMLHttpRequest status: " + s.status),
                  console.log("Error pJS - File config not found");
            }
          }),
          s.send();
      }),
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: !0, value_area: 800 } },
          color: { value: "#867569" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 3,
            random: !0,
            anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "repulse" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      }),
      (n = new Stats()).setMode(0),
      (n.domElement.style.position = "absolute"),
      (n.domElement.style.left = "0px"),
      (n.domElement.style.top = "0px"),
      document.body.appendChild(n.domElement),
      (r = document.querySelector(".js-count-particles")),
      (c = function () {
        n.begin(),
          n.end(),
          window.pJSDom[0].pJS.particles &&
            window.pJSDom[0].pJS.particles.array &&
            (r.innerText = window.pJSDom[0].pJS.particles.array.length),
          requestAnimationFrame(c);
      }),
      requestAnimationFrame(c);
  });