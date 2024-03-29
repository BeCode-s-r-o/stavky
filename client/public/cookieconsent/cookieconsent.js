/*
 CookieConsent v3.0.0-beta.1
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function () {
  var hb = function (ab) {
    var f = {
        mode: "opt-in",
        current_lang: "en",
        auto_language: null,
        autorun: !0,
        page_scripts: !0,
        hide_from_bots: !0,
        cookie_name: "cc_cookie",
        cookie_expiration: 182,
        cookie_domain: window.location.hostname,
        cookie_path: "/",
        cookie_same_site: "Lax",
        use_rfc_cookie: !1,
        autoclear_cookies: !0,
        revision: 0,
        script_selector: "data-cookiecategory",
      },
      n = {},
      g,
      u = {},
      B = null,
      J = !1,
      O = !1,
      ma = !1,
      Ba = !1,
      na = !1,
      v,
      X,
      T,
      oa,
      Ca,
      Da,
      Qa = !1,
      ha = !0,
      U = [],
      wa = !1,
      Ea,
      Fa = [],
      Ra = [],
      Ga = [],
      Sa = !1,
      pa,
      Ha,
      Ia = [],
      ia = [],
      P = [],
      G = [],
      xa = [],
      qa = document.documentElement,
      Q,
      ra,
      x,
      Y,
      sa,
      V,
      R,
      S,
      Z,
      E,
      K,
      ta,
      ja,
      ka,
      y,
      aa,
      ba,
      ca,
      da,
      Ta = function (a) {
        function b(l) {
          return (a || document).querySelectorAll(
            'a[data-cc="' + l + '"], button[data-cc="' + l + '"]'
          );
        }
        function c(l, q) {
          l.preventDefault ? l.preventDefault() : (l.returnValue = !1);
          n.accept(q);
          n.hideSettings();
          n.hide();
        }
        for (
          var d = b("c-settings"),
            e = b("accept-all"),
            m = b("accept-necessary"),
            p = b("accept-custom"),
            k = 0;
          k < d.length;
          k++
        )
          d[k].setAttribute("aria-haspopup", "dialog"),
            z(d[k], "click", function (l) {
              l.preventDefault ? l.preventDefault() : (l.returnValue = !1);
              n.showSettings(0);
            });
        for (k = 0; k < e.length; k++)
          z(e[k], "click", function (l) {
            c(l, "all");
          });
        for (k = 0; k < p.length; k++)
          z(p[k], "click", function (l) {
            c(l);
          });
        for (k = 0; k < m.length; k++)
          z(m[k], "click", function (l) {
            c(l, []);
          });
      },
      ya = function (a, b) {
        if (Object.prototype.hasOwnProperty.call(b, a)) return a;
        if (0 < ua(b).length)
          return Object.prototype.hasOwnProperty.call(b, f.current_lang)
            ? f.current_lang
            : ua(b)[0];
      },
      bb = function () {
        function a(c, d) {
          var e = !1,
            m = !1;
          try {
            for (
              var p = c.querySelectorAll(b.join(':not([tabindex="-1"]), ')),
                k,
                l = p.length,
                q = 0;
              q < l;

            )
              (k = p[q].getAttribute("data-focus")),
                m || "1" !== k
                  ? "0" === k &&
                    ((e = p[q]),
                    m ||
                      "0" === p[q + 1].getAttribute("data-focus") ||
                      (m = p[q + 1]))
                  : (m = p[q]),
                q++;
          } catch (A) {
            return c.querySelectorAll(b.join(", "));
          }
          d[0] = p[0];
          d[1] = p[p.length - 1];
          d[2] = e;
          d[3] = m;
        }
        var b = ["[href]", "button", "input", "details", '[tabindex="0"]'];
        a(K, ia);
        O && a(x, Ia);
      },
      Ja = function (a) {
        !0 === g.force_consent && H(qa, "force--consent");
        if (!x) {
          x = h("div");
          var b = h("div"),
            c = h("div");
          x.id = "cm";
          b.id = "c-inr-i";
          c.id = "cm-ov";
          x.setAttribute("role", "dialog");
          x.setAttribute("aria-modal", "true");
          x.setAttribute("aria-hidden", "false");
          x.setAttribute("aria-labelledby", "c-ttl");
          x.setAttribute("aria-describedby", "c-txt");
          ra.appendChild(x);
          ra.appendChild(c);
          x.style.visibility = c.style.visibility = "hidden";
          c.style.opacity = 0;
        }
        if ((c = g.languages[a].consent_modal.title))
          Y ||
            ((Y = h("div")),
            (Y.id = "c-ttl"),
            Y.setAttribute("role", "heading"),
            Y.setAttribute("aria-level", "2"),
            b.appendChild(Y)),
            (Y.innerHTML = c);
        c = g.languages[a].consent_modal.description;
        Qa &&
          (c = ha
            ? c.replace("{{revision_message}}", "")
            : c.replace(
                "{{revision_message}}",
                g.languages[a].consent_modal.revision_message || ""
              ));
        sa || ((sa = h("div")), (sa.id = "c-txt"), b.appendChild(sa));
        sa.innerHTML = c;
        c = g.languages[a].consent_modal.primary_btn;
        var d = g.languages[a].consent_modal.secondary_btn;
        if (c) {
          if (!V) {
            V = h("button");
            V.id = "c-p-bn";
            V.className = "c-bn";
            var e;
            "accept_all" === c.role && (e = "all");
            z(V, "click", function () {
              n.hide();
              n.accept(e);
            });
          }
          V.innerHTML = g.languages[a].consent_modal.primary_btn.text;
        }
        d &&
          (R ||
            ((R = h("button")),
            (R.id = "c-s-bn"),
            (R.className = "c-bn c_link"),
            "accept_necessary" === d.role
              ? z(R, "click", function () {
                  n.hide();
                  n.accept([]);
                })
              : z(R, "click", function () {
                  n.showSettings(0);
                })),
          (R.innerHTML = g.languages[a].consent_modal.secondary_btn.text));
        a = g.gui_options;
        Z || ((Z = h("div")), (Z.id = "c-inr"), Z.appendChild(b));
        S ||
          ((S = h("div")),
          (S.id = "c-bns"),
          a && a.consent_modal && !0 === a.consent_modal.swap_buttons
            ? (d && S.appendChild(R),
              c && S.appendChild(V),
              (S.className = "swap"))
            : (c && S.appendChild(V), d && S.appendChild(R)),
          (c || d) && Z.appendChild(S),
          x.appendChild(Z));
        O = !0;
      },
      Ya = function (a) {
        if (E) (y = h("div")), (y.id = "s-bl");
        else {
          E = h("div");
          var b = h("div"),
            c = h("div"),
            d = h("div");
          K = h("div");
          ta = h("div");
          var e = h("div");
          ja = h("button");
          var m = h("div");
          ka = h("div");
          var p = h("div");
          E.id = "s-cnt";
          b.id = "c-vln";
          d.id = "c-s-in";
          c.id = "cs";
          ta.id = "s-ttl";
          K.id = "s-inr";
          e.id = "s-hdr";
          ka.id = "s-bl";
          ja.id = "s-c-bn";
          p.id = "cs-ov";
          m.id = "s-c-bnc";
          ja.className = "c-bn";
          E.setAttribute("role", "dialog");
          E.setAttribute("aria-modal", "true");
          E.setAttribute("aria-hidden", "true");
          E.setAttribute("aria-labelledby", "s-ttl");
          ta.setAttribute("role", "heading");
          E.style.visibility = p.style.visibility = "hidden";
          p.style.opacity = 0;
          m.appendChild(ja);
          z(
            b,
            "keydown",
            function (la) {
              la = la || window.event;
              27 === la.keyCode && n.hideSettings(0);
            },
            !0
          );
          z(ja, "click", function () {
            n.hideSettings(0);
          });
        }
        ja.setAttribute(
          "aria-label",
          g.languages[a].settings_modal.close_btn_label || "Close"
        );
        T = g.languages[a].settings_modal.blocks;
        X = g.languages[a].settings_modal.cookie_table_headers;
        var k = T.length;
        ta.innerHTML = g.languages[a].settings_modal.title;
        for (var l = 0; l < k; ++l) {
          var q = T[l].title,
            A = T[l].description,
            w = T[l].toggle,
            C = T[l].cookie_table,
            t = !0 === g.remove_cookie_tables,
            r = (A && "truthy") || (!t && C && "truthy"),
            I = h("div"),
            W = h("div");
          if (A) {
            var Ka = h("div");
            Ka.className = "p";
            Ka.insertAdjacentHTML("beforeend", A);
          }
          var D = h("div");
          D.className = "title";
          I.className = "c-bl";
          W.className = "desc";
          if ("undefined" !== typeof w) {
            var L = "c-ac-" + l,
              ea = r ? h("button") : h("div"),
              F = h("label"),
              M = h("input"),
              N = h("span"),
              fa = h("span"),
              Ua = h("span"),
              Va = h("span");
            ea.className = r ? "b-tl exp" : "b-tl";
            F.className = "b-tg";
            M.className = "c-tgl";
            Ua.className = "on-i";
            Va.className = "off-i";
            N.className = "c-tg";
            fa.className = "t-lb";
            r &&
              (ea.setAttribute("aria-expanded", "false"),
              ea.setAttribute("aria-controls", L));
            M.type = "checkbox";
            N.setAttribute("aria-hidden", "true");
            var za = w.value;
            M.value = za;
            fa.textContent = q;
            ea.insertAdjacentHTML("beforeend", q);
            D.appendChild(ea);
            N.appendChild(Ua);
            N.appendChild(Va);
            J
              ? -1 < u.categories.indexOf(za)
                ? ((M.checked = !0), !y && P.push(!0))
                : !y && P.push(!1)
              : w.enabled
              ? ((M.checked = !0),
                !y && P.push(!0),
                w.enabled && !y && Ga.push(za))
              : !y && P.push(!1);
            !y && G.push(za);
            w.readonly
              ? ((M.disabled = !0), H(N, "c-ro"), !y && xa.push(!0))
              : !y && xa.push(!1);
            H(W, "b-acc");
            H(D, "b-bn");
            H(I, "b-ex");
            W.id = L;
            W.setAttribute("aria-hidden", "true");
            F.appendChild(M);
            F.appendChild(N);
            F.appendChild(fa);
            D.appendChild(F);
            r &&
              (function (la, La, Wa) {
                z(
                  ea,
                  "click",
                  function () {
                    Xa(La, "act")
                      ? (Ma(La, "act"),
                        Wa.setAttribute("aria-expanded", "false"),
                        la.setAttribute("aria-hidden", "true"))
                      : (H(La, "act"),
                        Wa.setAttribute("aria-expanded", "true"),
                        la.setAttribute("aria-hidden", "false"));
                  },
                  !1
                );
              })(W, I, ea);
          } else
            q &&
              ((r = h("div")),
              (r.className = "b-tl"),
              r.setAttribute("role", "heading"),
              r.setAttribute("aria-level", "3"),
              r.insertAdjacentHTML("beforeend", q),
              D.appendChild(r));
          q && I.appendChild(D);
          A && W.appendChild(Ka);
          if (!t && "undefined" !== typeof C) {
            r = document.createDocumentFragment();
            for (L = 0; L < X.length; ++L)
              (F = h("th")),
                (t = X[L]),
                F.setAttribute("scope", "col"),
                t &&
                  ((D = t && ua(t)[0]),
                  (F.textContent = X[L][D]),
                  r.appendChild(F));
            t = h("tr");
            t.appendChild(r);
            D = h("thead");
            D.appendChild(t);
            r = h("table");
            r.appendChild(D);
            L = document.createDocumentFragment();
            for (F = 0; F < C.length; F++) {
              M = h("tr");
              for (N = 0; N < X.length; ++N)
                if ((t = X[N]))
                  (D = ua(t)[0]),
                    (fa = h("td")),
                    fa.insertAdjacentHTML("beforeend", C[F][D]),
                    fa.setAttribute("data-column", t[D]),
                    M.appendChild(fa);
              L.appendChild(M);
            }
            C = h("tbody");
            C.appendChild(L);
            r.appendChild(C);
            W.appendChild(r);
          }
          if ((w && q) || (!w && (q || A)))
            I.appendChild(W), y ? y.appendChild(I) : ka.appendChild(I);
        }
        aa || ((aa = h("div")), (aa.id = "s-bns"));
        ca ||
          ((ca = h("button")),
          (ca.id = "s-all-bn"),
          (ca.className = "c-bn"),
          aa.appendChild(ca),
          z(ca, "click", function () {
            n.hideSettings();
            n.hide();
            n.accept("all");
          }));
        ca.innerHTML = g.languages[a].settings_modal.accept_all_btn;
        if ((k = g.languages[a].settings_modal.reject_all_btn))
          da ||
            ((da = h("button")),
            (da.id = "s-rall-bn"),
            (da.className = "c-bn"),
            z(da, "click", function () {
              n.hideSettings();
              n.hide();
              n.accept([]);
            }),
            (K.className = "bns-t"),
            aa.appendChild(da)),
            (da.innerHTML = k);
        ba ||
          ((ba = h("button")),
          (ba.id = "s-sv-bn"),
          (ba.className = "c-bn"),
          aa.appendChild(ba),
          z(ba, "click", function () {
            n.hideSettings();
            n.hide();
            n.accept();
          }));
        ba.innerHTML = g.languages[a].settings_modal.save_settings_btn;
        y
          ? (K.replaceChild(y, ka), (ka = y))
          : (e.appendChild(ta),
            e.appendChild(m),
            K.appendChild(e),
            K.appendChild(ka),
            K.appendChild(aa),
            d.appendChild(K),
            c.appendChild(d),
            b.appendChild(c),
            E.appendChild(b),
            ra.appendChild(E),
            ra.appendChild(p));
      },
      cb = function () {
        Q = h("div");
        Q.id = "cc--main";
        Q.style.position = "fixed";
        Q.style.zIndex = "1000000";
        Q.innerHTML =
          '\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';
        ra = Q.children[0];
        var a = f.current_lang;
        O && Ja(a);
        Ya(a);
        (ab || document.body).appendChild(Q);
      };
    n.updateLanguage = function (a, b) {
      if ("string" === typeof a)
        return (
          (a = ya(a, g.languages)),
          a !== f.current_lang || !0 === b
            ? ((f.current_lang = a), O && (Ja(a), Ta(Z)), Ya(a), !0)
            : !1
        );
    };
    var $a = function (a) {
        var b = T.length,
          c = -1;
        wa = !1;
        var d = va("", "all"),
          e = [f.cookie_domain, "." + f.cookie_domain];
        if ("www." === f.cookie_domain.slice(0, 4)) {
          var m = f.cookie_domain.substr(4);
          e.push(m);
          e.push("." + m);
        }
        for (m = 0; m < b; m++) {
          var p = T[m];
          if (Object.prototype.hasOwnProperty.call(p, "toggle")) {
            var k = -1 < U.indexOf(p.toggle.value);
            if (
              !P[++c] &&
              Object.prototype.hasOwnProperty.call(p, "cookie_table") &&
              (a || k)
            ) {
              var l = p.cookie_table,
                q = ua(X[0])[0],
                A = l.length;
              "on_disable" === p.toggle.reload && k && (wa = !0);
              for (k = 0; k < A; k++) {
                var w = l[k],
                  C = [],
                  t = w[q],
                  r = w.is_regex || !1,
                  I = w.domain || null;
                w = w.path || !1;
                I && (e = [I, "." + I]);
                if (r)
                  for (r = 0; r < d.length; r++) d[r].match(t) && C.push(d[r]);
                else (t = d.indexOf(t)), -1 < t && C.push(d[t]);
                0 < C.length &&
                  (Za(C, w, e), "on_clear" === p.toggle.reload && (wa = !0));
              }
            }
          }
        }
      },
      db = function (a) {
        U = [];
        var b = document.querySelectorAll(".c-tgl") || [];
        if (0 < b.length)
          for (var c = 0; c < b.length; c++)
            -1 !== a.indexOf(G[c])
              ? ((b[c].checked = !0), P[c] || (U.push(G[c]), (P[c] = !0)))
              : ((b[c].checked = !1), P[c] && (U.push(G[c]), (P[c] = !1)));
        J && f.autoclear_cookies && 0 < U.length && $a();
        u = {
          categories: a,
          revision: f.revision,
          data: B,
          rfc_cookie: f.use_rfc_cookie,
        };
        if (!J || 0 < U.length || !ha)
          (ha = !0),
            (Ea = Na(Oa())),
            Pa(f.cookie_name, JSON.stringify(u)),
            Aa();
        if (
          !J &&
          (f.autoclear_cookies && $a(!0),
          "function" === typeof Da && Da(n.getUserPreferences(), u),
          "function" === typeof oa && oa(u),
          (J = !0),
          "opt-in" === f.mode)
        )
          return;
        "function" === typeof Ca && 0 < U.length && Ca(u, U);
        wa && window.location.reload();
      },
      h = function (a) {
        var b = document.createElement(a);
        "button" === a && b.setAttribute("type", a);
        return b;
      },
      eb = function (a, b) {
        return "browser" === f.auto_language
          ? ((b = navigator.language || navigator.browserLanguage),
            2 < b.length && (b = b[0] + b[1]),
            (b = b.toLowerCase()),
            ya(b, a))
          : "document" === f.auto_language
          ? ya(document.documentElement.lang, a)
          : "string" === typeof b
          ? (f.current_lang = ya(b, a))
          : f.current_lang;
      },
      fb = function () {
        var a = !1,
          b = !1;
        z(document, "keydown", function (c) {
          c = c || window.event;
          "Tab" === c.key &&
            (v &&
              (c.shiftKey
                ? document.activeElement === v[0] &&
                  (v[1].focus(), c.preventDefault())
                : document.activeElement === v[1] &&
                  (v[0].focus(), c.preventDefault()),
              b ||
                na ||
                ((b = !0),
                !a && c.preventDefault(),
                c.shiftKey
                  ? v[3]
                    ? v[2]
                      ? v[2].focus()
                      : v[0].focus()
                    : v[1].focus()
                  : v[3]
                  ? v[3].focus()
                  : v[0].focus())),
            !b && (a = !0));
        });
        document.contains &&
          z(
            Q,
            "click",
            function (c) {
              c = c || window.event;
              Ba
                ? K.contains(c.target)
                  ? (na = !0)
                  : (n.hideSettings(0), (na = !1))
                : ma && x.contains(c.target) && (na = !0);
            },
            !0
          );
      },
      gb = function (a, b) {
        function c(e, m, p, k, l, q, A) {
          q = (q && q.split(" ")) || [];
          if (
            -1 < m.indexOf(l) &&
            (H(e, l),
            ("bar" !== l || "middle" !== q[0]) && -1 < p.indexOf(q[0]))
          )
            for (m = 0; m < q.length; m++) H(e, q[m]);
          -1 < k.indexOf(A) && H(e, A);
        }
        if ("object" === typeof a) {
          var d = a.consent_modal;
          a = a.settings_modal;
          O &&
            d &&
            c(
              x,
              ["box", "bar", "cloud"],
              ["top", "middle", "bottom"],
              ["zoom", "slide"],
              d.layout,
              d.position,
              d.transition
            );
          !b &&
            a &&
            c(
              E,
              ["bar"],
              ["left", "right"],
              ["zoom", "slide"],
              a.layout,
              a.position,
              a.transition
            );
        }
      };
    n.allowedCategory = function (a) {
      return (
        -1 <
        (J || "opt-in" === f.mode
          ? JSON.parse(va(f.cookie_name, "one", !0) || "{}").categories || []
          : Ga
        ).indexOf(a)
      );
    };
    n.run = function (a) {
      if (
        !document.getElementById("cc_div") &&
        ((g = a),
        "number" === typeof g.cookie_expiration &&
          (f.cookie_expiration = g.cookie_expiration),
        "number" === typeof g.cookie_necessary_only_expiration &&
          (f.cookie_necessary_only_expiration =
            g.cookie_necessary_only_expiration),
        "boolean" === typeof g.autorun && (f.autorun = g.autorun),
        "string" === typeof g.cookie_domain &&
          (f.cookie_domain = g.cookie_domain),
        "string" === typeof g.cookie_same_site &&
          (f.cookie_same_site = g.cookie_same_site),
        "string" === typeof g.cookie_path && (f.cookie_path = g.cookie_path),
        "string" === typeof g.cookie_name && (f.cookie_name = g.cookie_name),
        "function" === typeof g.onAccept && (oa = g.onAccept),
        "function" === typeof g.onFirstAction && (Da = g.onFirstAction),
        "function" === typeof g.onChange && (Ca = g.onChange),
        "opt-out" === g.mode && (f.mode = "opt-out"),
        "number" === typeof g.revision &&
          (-1 < g.revision && (f.revision = g.revision), (Qa = !0)),
        "boolean" === typeof g.autoclear_cookies &&
          (f.autoclear_cookies = g.autoclear_cookies),
        !0 === g.use_rfc_cookie && (f.use_rfc_cookie = !0),
        !0 === g.hide_from_bots &&
          (Sa =
            navigator &&
            ((navigator.userAgent &&
              /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)) ||
              navigator.webdriver)),
        (f.page_scripts = !0 === g.page_scripts),
        "browser" === g.auto_language || !0 === g.auto_language
          ? (f.auto_language = "browser")
          : "document" === g.auto_language && (f.auto_language = "document"),
        (f.current_lang = eb(g.languages, g.current_lang)),
        !Sa)
      )
        if (
          ((u = JSON.parse(va(f.cookie_name, "one", !0) || "{}")),
          (J = void 0 !== u.categories),
          (B = void 0 !== u.data ? u.data : null),
          (ha =
            "number" === typeof a.revision
              ? J
                ? -1 < a.revision
                  ? u.revision === f.revision
                  : !0
                : !0
              : !0),
          (O = !J || !ha),
          cb(),
          bb(),
          gb(a.gui_options),
          Ta(),
          f.autorun && O && n.show(a.delay || 0),
          setTimeout(function () {
            H(Q, "c--anim");
          }, 30),
          setTimeout(function () {
            fb();
          }, 100),
          J && ha)
        ) {
          a = "boolean" === typeof u.rfc_cookie;
          if (!a || (a && u.rfc_cookie !== f.use_rfc_cookie))
            (u.rfc_cookie = f.use_rfc_cookie),
              Pa(f.cookie_name, JSON.stringify(u));
          Ea = Na(Oa());
          Aa();
          "function" === typeof oa && oa(u);
        } else "opt-out" === f.mode && Aa(Ga);
    };
    n.showSettings = function (a) {
      setTimeout(
        function () {
          H(qa, "show--settings");
          E.setAttribute("aria-hidden", "false");
          Ba = !0;
          setTimeout(function () {
            ma ? (Ha = document.activeElement) : (pa = document.activeElement);
            0 !== ia.length &&
              (ia[3] ? ia[3].focus() : ia[0].focus(), (v = ia));
          }, 200);
        },
        0 < a ? a : 0
      );
    };
    var Aa = function (a) {
      if (f.page_scripts) {
        var b = document.querySelectorAll("script[" + f.script_selector + "]"),
          c = a || u.categories || [],
          d = function (e, m) {
            if (m < e.length) {
              var p = e[m],
                k = p.getAttribute(f.script_selector);
              if (-1 < c.indexOf(k)) {
                p.type = "text/javascript";
                p.removeAttribute(f.script_selector);
                (k = p.getAttribute("data-src")) &&
                  p.removeAttribute("data-src");
                var l = h("script");
                l.textContent = p.innerHTML;
                (function (q, A) {
                  for (var w = A.attributes, C = w.length, t = 0; t < C; t++) {
                    var r = w[t].nodeName;
                    q.setAttribute(r, A[r] || A.getAttribute(r));
                  }
                })(l, p);
                k ? (l.src = k) : (k = p.src);
                k &&
                  (l.readyState
                    ? (l.onreadystatechange = function () {
                        if (
                          "loaded" === l.readyState ||
                          "complete" === l.readyState
                        )
                          (l.onreadystatechange = null), d(e, ++m);
                      })
                    : (l.onload = function () {
                        l.onload = null;
                        d(e, ++m);
                      }));
                p.parentNode.replaceChild(l, p);
                if (k) return;
              }
              d(e, ++m);
            }
          };
        d(b, 0);
      }
    };
    n.set = function (a, b) {
      switch (a) {
        case "data":
          a = b.value;
          var c = !1;
          if ("update" === b.mode)
            if (
              ((B = n.get("data")),
              (b = typeof B === typeof a) && "object" === typeof B)
            ) {
              !B && (B = {});
              for (var d in a) B[d] !== a[d] && ((B[d] = a[d]), (c = !0));
            } else (!b && B) || B === a || ((B = a), (c = !0));
          else (B = a), (c = !0);
          c && ((u.data = B), Pa(f.cookie_name, JSON.stringify(u)));
          return c;
        default:
          return !1;
      }
    };
    n.get = function (a, b) {
      return JSON.parse(va(b || f.cookie_name, "one", !0) || "{}")[a];
    };
    n.getConfig = function (a) {
      return f[a] || g[a];
    };
    var Oa = function () {
        Fa = u.categories || [];
        Ra = G.filter(function (a) {
          return -1 === Fa.indexOf(a);
        });
        return { accepted: Fa, rejected: Ra };
      },
      Na = function (a) {
        var b = "custom",
          c = xa.filter(function (d) {
            return !0 === d;
          }).length;
        a.accepted.length === G.length
          ? (b = "all")
          : a.accepted.length === c && (b = "necessary");
        return b;
      };
    n.getUserPreferences = function () {
      var a = Oa();
      return {
        accept_type: Na(a),
        accepted_categories: a.accepted,
        rejected_categories: a.rejected,
      };
    };
    n.loadScript = function (a, b, c) {
      var d = "function" === typeof b;
      if (document.querySelector('script[src="' + a + '"]')) d && b();
      else {
        var e = h("script");
        if (c && 0 < c.length)
          for (var m = 0; m < c.length; ++m)
            c[m] && e.setAttribute(c[m].name, c[m].value);
        d &&
          (e.readyState
            ? (e.onreadystatechange = function () {
                if ("loaded" === e.readyState || "complete" === e.readyState)
                  (e.onreadystatechange = null), b();
              })
            : (e.onload = b));
        e.src = a;
        (document.head
          ? document.head
          : document.getElementsByTagName("head")[0]
        ).appendChild(e);
      }
    };
    n.updateScripts = function () {
      Aa();
    };
    n.show = function (a, b) {
      !0 === b && Ja(f.current_lang);
      O &&
        setTimeout(
          function () {
            H(qa, "show--consent");
            x.setAttribute("aria-hidden", "false");
            ma = !0;
            setTimeout(function () {
              pa = document.activeElement;
              v = Ia;
            }, 200);
          },
          0 < a ? a : b ? 30 : 0
        );
    };
    n.hide = function () {
      O &&
        (Ma(qa, "show--consent"),
        x.setAttribute("aria-hidden", "true"),
        (ma = !1),
        setTimeout(function () {
          pa.focus();
          v = null;
        }, 200));
    };
    n.hideSettings = function () {
      Ma(qa, "show--settings");
      Ba = !1;
      E.setAttribute("aria-hidden", "true");
      setTimeout(function () {
        ma ? (Ha && Ha.focus(), (v = Ia)) : (pa && pa.focus(), (v = null));
        na = !1;
      }, 200);
    };
    n.accept = function (a, b) {
      a = a || void 0;
      var c = b || [];
      b = [];
      var d = function () {
        for (
          var m = document.querySelectorAll(".c-tgl") || [], p = [], k = 0;
          k < m.length;
          k++
        )
          m[k].checked && p.push(m[k].value);
        return p;
      };
      if (a)
        if ("object" === typeof a && "number" === typeof a.length)
          for (var e = 0; e < a.length; e++)
            -1 !== G.indexOf(a[e]) && b.push(a[e]);
        else
          "string" === typeof a &&
            ("all" === a ? (b = G.slice()) : -1 !== G.indexOf(a) && b.push(a));
      else b = d();
      if (1 <= c.length)
        for (e = 0; e < c.length; e++)
          b = b.filter(function (m) {
            return m !== c[e];
          });
      for (e = 0; e < G.length; e++)
        !0 === xa[e] && -1 === b.indexOf(G[e]) && b.push(G[e]);
      db(b);
    };
    n.eraseCookies = function (a, b, c) {
      var d = [];
      c = c ? [c, "." + c] : [f.cookie_domain, "." + f.cookie_domain];
      if ("object" === typeof a && 0 < a.length)
        for (var e = 0; e < a.length; e++)
          this.validCookie(a[e]) && d.push(a[e]);
      else this.validCookie(a) && d.push(a);
      Za(d, b, c);
    };
    var Pa = function (a, b) {
        var c = f.cookie_expiration;
        "number" === typeof f.cookie_necessary_only_expiration &&
          "necessary" === Ea &&
          (c = f.cookie_necessary_only_expiration);
        b = f.use_rfc_cookie ? encodeURIComponent(b) : b;
        var d = new Date();
        d.setTime(d.getTime() + 864e5 * c);
        c = "; expires=" + d.toUTCString();
        a = a + "=" + (b || "") + c + "; Path=" + f.cookie_path + ";";
        a += " SameSite=" + f.cookie_same_site + ";";
        -1 < window.location.hostname.indexOf(".") &&
          (a += " Domain=" + f.cookie_domain + ";");
        "https:" === window.location.protocol && (a += " Secure;");
        document.cookie = a;
      },
      va = function (a, b, c) {
        var d;
        if ("one" === b) {
          if (
            (d = (d = document.cookie.match(
              "(^|;)\\s*" + a + "\\s*=\\s*([^;]+)"
            ))
              ? c
                ? d.pop()
                : a
              : "") &&
            a === f.cookie_name
          ) {
            try {
              d = JSON.parse(d);
            } catch (e) {
              try {
                d = JSON.parse(decodeURIComponent(d));
              } catch (m) {
                d = {};
              }
            }
            d = JSON.stringify(d);
          }
        } else if ("all" === b)
          for (
            a = document.cookie.split(/;\s*/), d = [], b = 0;
            b < a.length;
            b++
          )
            d.push(a[b].split("=")[0]);
        return d;
      },
      Za = function (a, b, c) {
        b = b ? b : "/";
        for (var d = 0; d < a.length; d++)
          for (var e = 0; e < c.length; e++)
            document.cookie =
              a[d] +
              "=; path=" +
              b +
              (-1 < c[e].indexOf(".") ? "; domain=" + c[e] : "") +
              "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      };
    n.validCookie = function (a) {
      return "" !== va(a, "one", !0);
    };
    var z = function (a, b, c, d) {
        a.addEventListener
          ? !0 === d
            ? a.addEventListener(b, c, { passive: !0 })
            : a.addEventListener(b, c, !1)
          : a.attachEvent("on" + b, c);
      },
      ua = function (a) {
        if ("object" === typeof a) {
          var b = [],
            c = 0,
            d;
          for (d in a) b[c++] = d;
          return b;
        }
      },
      H = function (a, b) {
        a.classList ? a.classList.add(b) : Xa(a, b) || (a.className += " " + b);
      },
      Ma = function (a, b) {
        a.classList
          ? a.classList.remove(b)
          : (a.className = a.className.replace(
              new RegExp("(\\s|^)" + b + "(\\s|$)"),
              " "
            ));
      },
      Xa = function (a, b) {
        return a.classList
          ? a.classList.contains(b)
          : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
      };
    return n;
  };
  "function" !== typeof window.initCookieConsent &&
    (window.initCookieConsent = hb);
})();
