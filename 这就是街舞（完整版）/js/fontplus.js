/*
 * Copyright (c) SOFTBANK TECHNOLOGY CORP. All rights reserved.
 *
 * @project:	FONTPLUS
 * @version:	1.0
 * @see:		allowed to refer
 *					1. openjs(http://www.openjs.com/)
 *						Copyright (c) 2006-2007, Binny V Abraham
 *
 * 					2. vxjs(http://code.google.com/p/vxjs/)
 */
FontPlus_f1616e751829ffb77969a7b87790fd45 = function() {
    var FontPlusTools = (function() {
        var q8 = {
            d: document,
            z: 0,
            o: 10,
            u: false,
            req: null,
            s: null,
            aa: 0,
            ab: null,
            llt: 0,
            t: null,
            pm: null,
            cm: 300,
            X: function(Y, F, q, O) {
                q8.req = new(window.XDomainRequest || window.ActiveXObject || XMLHttpRequest)('Microsoft.XMLHTTP');
                q8.req.open(q ? 'POST': 'GET', Y, 1);
                try {
                    q8.req.designate_id = O;
                    q8.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    q8.req.onreadystatechange = function() {
                        q8.req.readyState > 3 && F && F(q8.req.responseText, q8.req)
                    }
                } catch(e) {
                    q8.req.onerror = function() {};
                    q8.req.onprogress = function() {};
                    q8.req.onload = function() {
                        F && F(q8.req.responseText, q8.req)
                    }
                }
                q8.req.send(q)
            },
            I: function(O, F, q) {
                var Y = O.toLowerCase();
                for (q = F.length; q--&&F[q].toLowerCase() != Y;);
                return q
            },
            E: function(F, Y, q, O) {
                if (F.attachEvent ? (O ? F.detachEvent('on' + Y, F[Y + q]) : 1) : (O ? F.removeEventListener(Y, q, 0) : F.addEventListener(Y, q, 0))) {
                    F['e' + Y + q] = q;
                    F[Y + q] = function() {
                        F['e' + Y + q](window.event)
                    };
                    F.attachEvent('on' + Y, F[Y + q])
                }
            },
            R: function(q, O, Y) {
                if ("\v" != "v" && !window.attachEvent) {
                    if (O.n == 'O') setTimeout(q, Y);
                    else q8.E(q8.d, 'DOMContentLoaded', q)
                } else if (O.n == 'O') {
                    if (O.v < 11.6) window.addEventListener('load', q, false);
                    else setTimeout(q, Y)
                } else if (q8.d.all) q8.E(window, "load", q);
                else setTimeout(q, 1000)
            },
            TM: function(Y) {
                return Y.replace(/^\s+|\s+$/g, '')
            },
            ST: function(O, Y) {
                return O.currentStyle ? O.currentStyle[Y] : (q8.d.defaultView ? q8.d.defaultView.getComputedStyle(O, null).getPropertyValue(Y) : null)
            },
            BR: function() {
                var O = ['Edge', 'MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
                agent = navigator.userAgent,
                name,
                ver,
                mode,
                n,
                q,
                os,
                ext,
                fd = 'fontplus-unused';
                name = ver = mode = n = '';
                ext = 'w';
                for (q in O) {
                    if (!O.hasOwnProperty(q)) continue;
                    if (agent.indexOf(O[q]) != -1) {
                        name = O[q];
                        n = O[q].substr(0, 1);
                        if (name == 'Opera' && agent.match(/; Opera (Mobi|Tablet)\/(.*) Version\/([0-9\.]+)/)) {
                            name += ' Mobile';
                            ver = RegExp.$3;
                            n = 'T'
                        } else if (agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)) {
                            name += ' iOS';
                            ver = RegExp.$3.replace(/_/g, '.');
                            n = 'I';
                            os = 'iOS'
                        } else if (agent.match(/Android ([0-9\.]+)/)) {
                            name = os = 'Android';
                            ver = RegExp.$1;
                            n = 'A';
                            if (agent.match(/Chrome\/([0-9\.]+)/)) {
                                name = 'Chrome';
                                ver = RegExp.$1
                            }
                        } else if (agent.match(/Version\/([0-9\.]+)/)) ver = RegExp.$1;
                        else if (agent.match(RegExp(name + "[\/ ]([0-9\.]+)"))) ver = RegExp.$1;
                        break
                    }
                }
                if (!name) {
                    if (agent.indexOf('Trident') != -1) {
                        if (agent.match(/rv:([\d\.]+)/)) {
                            name = 'MSIE';
                            n = 'M';
                            ver = RegExp.$1
                        }
                    } else if (agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)) {
                        name = 'Safari iOS';
                        ver = RegExp.$3.replace(/_/g, '.');
                        n = 'I';
                        os = 'iOS'
                    } else {
                        name = 'Unknown:' + agent;
                        ver = '99';
                        n = 'U'
                    }
                }
                if (!os) {
                    if (agent.match(/Windows Phone/)) os = 'Windows Phone';
                    else if (agent.match(/Windows/)) {
                        if (agent.match(/NT 5.(1|2; (Win|WOW)64)/)) {
                            os = 'WindowsXP'
                        } else {
                            os = 'Windows'
                        }
                    } else if (agent.match(/Macintosh/)) os = 'Macintosh';
                    else if (agent.match(/Linux/)) os = 'Linux';
                    else os = 'Unknown:' + agent
                }
                if (n == 'M') {
                    mode = q8.d.documentMode ? q8.d.documentMode: 5;
                    if (parseInt(ver) < 9) fd = 'Courier New'
                } else if (n == 'O') fd = 'Courier New';
                else if (n == 'T') fd = 'Droid Sans';
                var Y = ver.split('.');
                for (var q = 0; q < Y.length; q++) {
                    Y[q] = parseInt(Y[q])
                }
                if (name == 'MSIE' || name == 'IEMobile') {
                    if (Y[0] <= 8) {
                        ext = 'e'
                    }
                } else if (name == 'Firefox') {
                    if (Y[0] == 3 && Y[1] == 5) {
                        ext = 'o'
                    }
                } else if (name == 'Opera') {
                    if (Y[0] >= 10) {
                        ext = 'o';
                        if (Y[0] >= 12 || Y[0] == 11 && Y[1] >= 10) {
                            ext = 'w'
                        }
                    }
                } else if (name == 'Opera Mobile') {
                    if (Y[0] > 9 || Y[0] == 9 && Y[1] >= 7) {
                        ext = 'o'
                    }
                } else if (name == 'Safari') {
                    if (Y[0] == 3 && Y[1] >= 1) {
                        ext = 't'
                    } else if (Y[0] >= 9) {
                        ext = 'o'
                    } else if (Y[0] > 5 || (Y[0] == 5 && Y[1] >= 1)) {
                        ext = 'w'
                    } else if (Y[0] >= 4) {
                        ext = 'o'
                    }
                } else if (name == 'Safari iOS') {
                    if (Y[0] < 4 || Y[0] == 4 && Y[1] < 1) {
                        name = 'Unknown:' + agent;
                        ver = '99';
                        n = 'U'
                    } else if (Y[0] < 5) {
                        ext = 't'
                    }
                } else if (name == 'Android') {
                    ext = 'o'
                }
                return {
                    'name': name,
                    'ver': ver,
                    'mode': mode,
                    'os': os,
                    'fd': fd,
                    'n': n,
                    'v': parseFloat(ver),
                    'ext': ext
                }
            },
            CR: function() {
                return (q8.d.characterSet || q8.d.charset).toUpperCase()
            },
            AB: function(q) {
                q8.g = false;
                if (q8.req) q8.req.abort();
                if (q) q();
                else {
                    if (window.console && window.console.log) {
                        console.log('FONTPLUS Timeout abort javascript')
                    } else {
                        var O = q8.TN(q8.d, 'HEAD')[0] || q8.TN(q8.d, 'BODY')[0];
                        var Y = q8.d.createElement("script");
                        Y.src = (q8.d.location.protocol == "https:" ? "https://" + q8.s[0] : "http://" + q8.s[1]) + "/accessor/fpabort?lurl=" + encodeURIComponent(q8.d.location.href) + "&" + (new Date().getTime().toString());
                        Y.type = "text/javascript";
                        O.appendChild(Y)
                    }
                }
            },
            CN: function(O) {
                var Y = [O],
                i,
                c;
                c = O.childNodes;
                for (i = c.length; i--;) {
                    if (c[i].tagName == undefined) continue;
                    Y = Y.concat(q8.CN(c[i]))
                };
                return Y
            },
            TN: function(Y, q) {
                var O = [],
                i = 0,
                a = q === "*",
                n = Y.firstChild,
                o;
                while ((Y = n)) {
                    if (a ? Y.nodeType === 1 : (q8.l ? Y.nodeName: Y.nodeName.toUpperCase()) === q) O[i++] = Y;
                    n = Y.firstChild || Y.nextSibling;
                    while (!n && (Y = Y.parentNode)) n = Y.nextSibling
                }
                return O
            },
            QS: function(q, O, Y) {
                O = O ? O: q8.d;
                if (q == '*' || q.match(/^[a-zA-Z]+$/)) Y = q8.TN(O, q8.l ? q.toUpperCase() : q.toLowerCase());
                else if (q.match(/^#([a-zA-Z0-9_-]+)$/)) Y = [O.getElementById(RegExp.$1)];
                else if (typeof jQuery != 'undefined') {
                    Y = jQuery(q)
                } else if (O.querySelectorAll) Y = O.querySelectorAll(q);
                else Y = q8.CS(q);
                return Y
            },
            CS: function(p) {
                var q6 = new Array();
                if (!document.getElementsByTagName) return q6;
                p = p.replace(/\s*([^\w])\s*/g, "$1");
                var h = p.split(",");
                var C = function(q, F) {
                    if (!F) F = '*';
                    var be = new Array;
                    for (var Y = 0,
                    len = q.length; con = q[Y], Y < len; Y++) {
                        var bh;
                        if (F == '*') bh = con.all ? con.all: con.getElementsByTagName("*");
                        else bh = con.getElementsByTagName(F);
                        for (var O = 0,
                        leng = bh.length; O < leng; O++) be.push(bh[O])
                    }
                    return be
                };
                COMMA: for (var q0 = 0,
                len1 = h.length; selector = h[q0], q0 < len1; q0++) {
                    var B = new Array(document);
                    var M = selector.split(" ");
                    SPACE: for (var O0 = 0,
                    len2 = M.length; element = M[O0], O0 < len2; O0++) {
                        var O4 = element.indexOf("[");
                        var D = element.indexOf("]");
                        var A = element.indexOf("#");
                        if (A + 1 && !(A > O4 && A < D)) {
                            var q5 = element.split("#");
                            var w = q5[0];
                            var g = q5[1];
                            var q1 = document.getElementById(g);
                            if (!q1 || (w && q1.nodeName.toLowerCase() != w)) {
                                continue COMMA
                            }
                            B = new Array(q1);
                            continue SPACE
                        }
                        A = element.indexOf(".");
                        if (A + 1 && !(A > O4 && A < D)) {
                            var q5 = element.split('.');
                            var w = q5[0];
                            var bd = q5[1];
                            var bm = C(B, w);
                            B = new Array;
                            if (bd == "fontplus_target_tags") {
                                for (var q4 = 0,
                                len = bm.length; fnd = bm[q4], q4 < len; q4++) {
                                    if (fnd.className) {
                                        if (fnd.className.match) {
                                            if (fnd.className.match(new RegExp('(^|\s|\x20)' + bd + '(\s|\x20|$)'))) B.push(fnd)
                                        } else if (fnd.className.baseVal.match) {
                                            if (fnd.className.baseVal.match(new RegExp('(^|\s|\x20)' + bd + '(\s|\x20|$)'))) B.push(fnd)
                                        }
                                    }
                                }
                            } else {
                                for (var q4 = 0,
                                len = bm.length; fnd = bm[q4], q4 < len; q4++) {
                                    if (fnd.className) {
                                        if (fnd.className.match) {
                                            if (fnd.className.match(new RegExp('(^|\s)' + bd + '(\s|$)'))) B.push(fnd)
                                        } else if (fnd.className.baseVal.match) {
                                            if (fnd.className.baseVal.match(new RegExp('(^|\s)' + bd + '(\s|$)'))) B.push(fnd)
                                        }
                                    }
                                }
                            }
                            continue SPACE
                        }
                        if (element.indexOf('[') + 1) {
                            if (element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)) {
                                var w = RegExp.$1;
                                var x = RegExp.$2;
                                var I = RegExp.$3;
                                var q2 = RegExp.$4
                            }
                            var bm = C(B, w);
                            B = new Array;
                            for (var q4 = 0,
                            len = bm.length; fnd = bm[q4], q4 < len; q4++) {
                                if (I == '=' && fnd.getAttribute(x) != q2) continue;
                                if (I == '~' && !fnd.getAttribute(x).match(new RegExp('(^|\\s)' + q2 + '(\\s|$)'))) continue;
                                if (I == '|' && !fnd.getAttribute(x).match(new RegExp('^' + q2 + '-?'))) continue;
                                if (I == '^' && fnd.getAttribute(x).indexOf(q2) != 0) continue;
                                if (I == '$' && fnd.getAttribute(x).lastIndexOf(q2) != (fnd.getAttribute(x).length - q2.length)) continue;
                                if (I == '*' && !(fnd.getAttribute(x).indexOf(q2) + 1)) continue;
                                else if (!fnd.getAttribute(x)) continue;
                                B.push(fnd)
                            }
                            continue SPACE
                        }
                        var bm = C(B, element);
                        B = bm
                    }
                    for (var q7 = 0,
                    len = B.length; q7 < len; q7++) q6.push(B[q7])
                }
                return q6
            },
            DF: function() {
                if (q8.b.os == 'Windows' || q8.b.os == 'WindowsXP') return ['MS PGothic', 'Arial'];
                else if (q8.b.os == 'Macintosh') return ['Hiragino Kaku Gothic Pro', 'Helvetica'];
                else if (q8.b.os == 'Linux') return ['IPAPGothic', 'Century'];
                else if (q8.b.os == 'iOS' || q8.b.os.substr(0, 7) == 'Unknown') return ['HiraKakuProN-W3', 'Helvetica'];
                else if (q8.b.os == 'Android') return ['Droid Sans'];
                else if (q8.b.os == 'Windows Phone') return ['Meiryo UI', 'Arial']
            },
            CM: function(q, be, F) {
                var bh = q8.DF(),
                F = '_cmp_elm_' + F + '_',
                j,
                e,
                b = q8.TN(q8.d, 'BODY')[0],
                t = be.replace(/["'&><]/g,
                function(Y) {
                    return '&#' + Y.charCodeAt(0) + ';'
                });
                for (j = 2; j--;) {
                    e = q8.d.createElement('span');
                    e.setAttribute('id', F + j);
                    var O = q8.d.createElement('span');
                    if (O.style.setProperty) {
                        O.style.setProperty('font-family', (j == 0 ? "'" + q + "',": "") + "'fpbf_ac93d8111'", 'important')
                    } else {
                        O.style.cssText = "font-family: " + (j == 0 ? "'" + q + "',": "") + "'fpbf_ac93d8111' !important;"
                    }
                    O.innerHTML = t;
                    e.appendChild(O);
                    for (var bd = 0; bd < bh.length; bd++) {
                        O = q8.d.createElement('span');
                        if (O.style.setProperty) {
                            O.style.setProperty('font-family', (j == 0 ? "'" + q + "',": "") + bh[bd], 'important')
                        } else {
                            O.style.cssText = "font-family: " + (j == 0 ? "'" + q + "',": "") + bh[bd] + " !important;"
                        }
                        O.innerHTML = t;
                        e.appendChild(O)
                    }
                    e.style.fontSize = (q8.cm) + 'px';
                    e.style.visibility = 'hidden';
                    e.style.position = 'absolute';
                    e.style.whiteSpace = 'nowrap';
                    e.style.lineHeight = 'normal';
                    e.style.top = '-500px';
                    b.appendChild(e)
                }
            },
            CD: function(Y) {
                var O, r, e0, e1, t, b = q8.TN(q8.d, 'BODY')[0];
                for (O = Y.length; O--;) {
                    t = typeof Y[O];
                    if (t == 'string' || t == 'number') {
                        r = '_cmp_elm_' + Y[O] + '_';
                        e0 = q8.d.getElementById(r + '0');
                        e1 = q8.d.getElementById(r + '1');
                        if (!e0 || !e1) continue;
                        b.removeChild(e0);
                        b.removeChild(e1)
                    } else {
                        b.removeChild(Y[O])
                    }
                }
            },
            DC: function(Y) {},
            WT: function(be, bd, bh, F) {
                F = F == null ? q8.o * 700 : F;
                bd = typeof bd == 'function' ? bd: q8.DC;
                bh = bh ? [] : bh;
                if (F <= 0) {
                    q8.g = false;
                    bd({
                        'code': be.length,
                        'msg': 'timeout',
                        'time': -1
                    });
                    q8.CD(be);
                    setTimeout(function() {
                        q8.AB()
                    },
                    0);
                    return
                }
                setTimeout(function() {
                    for (var q = be.length,
                    z; q--;) {
                        var Y = '_cmp_elm_' + be[q] + '_',
                        e0 = q8.d.getElementById(Y + '0'),
                        e1 = q8.d.getElementById(Y + '1');
                        if (F == q8.o * 700 && (q8.b.n == 'C' || q8.b.n == 'S')) {
                            continue
                        }
                        if (!e0 || !e1) continue;
                        if (e0.offsetWidth != e1.offsetWidth || e0.offsetHeight != e1.offsetHeight || q8.u) {
                            z = q8.ST(e0, q8.TC('z-index'));
                            if (z != 'auto') {
                                bh[q] = z
                            }
                            be.splice(q, 1);
                            q8.CD([e0, e1])
                        }
                    }
                    if (!be.length) {
                        q8.g = false;
                        var O = ( + new Date()) - q8.m;
                        if (!bh) {
                            bd({
                                'code': 0,
                                'time': O
                            })
                        } else {
                            bd({
                                'code': 0,
                                'size': bh,
                                'time': O
                            })
                        }
                    } else {
                        q8.WT(be, bd, bh, F - 500)
                    }
                },
                q8.u ? 3000 : 500)
            },
            TC: function(Y) {
                if ((q8.b.n == 'M' && (q8.b.v <= 8 || q8.b.mode <= 8)) || q8.b.n == 'O' || q8.b.n == 'T') return Y.replace(/-./g,
                function(m) {
                    return m.charAt(1).toUpperCase()
                });
                return Y
            },
            b: null,
            l: document.createElement('p').tagName == 'P',
            g: false,
            m: null
        };
        return q8
    })();
    var FontPlusAccessor = (function() {
        var Z = FontPlusTools,
        use_fonts = [],
        oth_fonts = [],
        nicknames = [],
        liststyletypes = [],
        liststyletypecnts = [],
        str = [],
        par = Z.TN(Z.d, 'HEAD')[0] || Z.TN(Z.d, 'BODY')[0],
        irregular = null,
        tid = null,
        ifrms = [],
        lclist = [],
        use_rogo = false,
        proxy = false,
        desig = 0,
        selhist = [],
        selidx = 0,
        completefunc = null,
        bgimg = {},
        font_ext = false,
        font_ext_hist = [],
        font_ext_reload = false,
        options = {
            selector: '*',
            complete: false,
            callbacks: {},
            timeoutfunc: false,
            sync: true,
            size: false
        };
        Z.b = Z.BR();
        var f = {
            init: function() {
                if (!q6()) return;
                if (!h()) return;
                l(0);
                F3();
                Z.o = f.timeout;
                Z.u = false;
                Z.s = f.server;
                Z.aa = f.aa;
                Z.ab = f.ab;
                Z.llt = f.llt;
                Z.t = f.t;
                Z.pm = f.pm;
                Z.cm = f.cm;
                if (Z.llt !== 1) {
                    if (Z.b.n == 'F' && Z.b.v <= 12 || Z.b.n == 'O' || Z.b.n == 'T' || Z.b.n == 'U') {
                        Z.llt = 1
                    } else if (Z.b.n == 'M' || Z.b.n == 'I' || Z.b.n == 'A') {
                        var Y;
                        if (Z.b.n == 'M') {
                            if (Z.b.v < 9 || be1()) {
                                Y = 2001
                            } else {
                                Y = 4096
                            }
                        } else {
                            Y = 8207
                        }
                        if (Z.llt < 1 || Y < Z.llt) {
                            Z.llt = Y
                        }
                    }
                }
                Z.R(function() {
                    l(1);
                    if (!options.sync) return;
                    Z.g = true;
                    if (f.nolist == 1 && irregular == 1) {
                        K();
                        setTimeout(function() {
                            f.ready()
                        },
                        2000)
                    } else f.ready()
                },
                Z.b, f.plusf.length)
            },
            ready: function() {
                Z.m = ( + new Date());
                font_ext = (Z.b.n == 'M' && Z.b.v <= 8 && parseInt(Z.b.mode) <= 8 ? true: false);
                tid = setTimeout(function() {
                    Z.AB()
                },
                f.timeout * 1000);
                F2();
                A(Z.d, 1);
                if (d()) {
                    q0(true);
                    F8()
                } else {
                    q0(false);
                    irregular || proxy ? q8() : Q()
                }
                l(2)
            },
            receiveOther: function(O) {
                var bh = Z.d.getElementById('fontplus_jsonp'),
                css;
                if (bh) bh.parentNode.removeChild(bh);
                if (Z.z) return;
                bh = 'fontplus_' + O.tagid;
                css = Z.d.getElementById(bh);
                if (css && Z.b.n == 'M') {
                    css.parentNode.removeChild(css);
                    css = null
                }
                if (!css) {
                    css = Z.d.createElement('style');
                    css.setAttribute('type', 'text/css');
                    css.setAttribute('rel', 'stylesheet');
                    css.setAttribute('id', bh);
                    par.appendChild(css)
                }
                if (irregular == 2 && css.styleSheet) {
                    css.styleSheet.cssText = O.data
                } else if (irregular == 2 && css.sheet) {
                    css.sheet.cssText = O.data
                } else {
                    css.innerHTML = O.data
                }
                for (var bm = ifrms.length; bm--;) {
                    var be = ifrms[bm].contentDocument || ifrms[bm].contentWindow.document;
                    q7(be);
                    B(be, Z.TN(be, 'HEAD')[0] || Z.TN(be, 'BODY')[0], O.data)
                }
                if (f.rl && f.rl === 2) {
                    F0(null)
                }
                clearTimeout(tid);
                U(O.families);
                if (typeof(sessionStorage) != 'undefined' && irregular !== 1 && Z.b.n != 'U') {
                    var x = "";
                    for (var bm = 0; bm < use_fonts.length; bm++) {
                        x += use_fonts[bm] + (nicknames[bm] ? nicknames[bm] : '0') + str[bm]
                    }
                    try {
                        sessionStorage.setItem(x, O.data)
                    } catch(e) {}
                } else if (Z.b.n == 'M' && Z.b.v == 7) {
                    var Y = Z.d.createElement('input');
                    Y.type = 'hidden';
                    Y.style.behavior = "url('#default#userData')";
                    Z.d.body.appendChild(Y);
                    if (typeof(Y.load) != 'undefined') {
                        var F = 'fpNum',
                        charSaveKey = 'fpChar',
                        cssSaveKey = 'fpCss',
                        idxKey = 'fp';
                        var D = "";
                        for (var bm = 0; bm < use_fonts.length; bm++) {
                            D += use_fonts[bm] + (nicknames[bm] ? nicknames[bm] : '0') + str[bm]
                        }
                        Y.load(F);
                        var bd = Y.getAttribute('key');
                        var q = Y.getAttribute('max');
                        if (bd == f.condition) {
                            Y.setAttribute('max', q + 1);
                            Y.save(F);
                            Y.load(charSaveKey);
                            Y.setAttribute(idxKey + q, D);
                            Y.save(charSaveKey);
                            Y.load(cssSaveKey);
                            Y.setAttribute(idxKey + q, O.ie_data);
                            Y.save(cssSaveKey)
                        } else {
                            Y.setAttribute('key', f.condition);
                            Y.setAttribute('max', 1);
                            Y.save(F);
                            Y.load(charSaveKey);
                            if (bd != null) {
                                for (var bm = 0; bm < q; bm++) {
                                    if (Y.getAttribute(idxKey + bm) != null) Y.removeAttribute(idxKey + bm)
                                }
                            }
                            Y.setAttribute(idxKey + '0', D);
                            Y.save(charSaveKey);
                            Y.load(cssSaveKey);
                            if (bd != null) {
                                for (var bm = 0; bm < q; bm++) {
                                    if (Y.getAttribute(idxKey + bm) != null) Y.removeAttribute(idxKey + bm)
                                }
                            }
                            Y.setAttribute(idxKey + '0', O.ie_data);
                            Y.save(cssSaveKey)
                        }
                    }
                    Z.d.body.removeChild(Y)
                }
            },
            setting: function(Y) {
                options = Y
            },
            reload: function(Y) {
                if (Z.g) {
                    setTimeout(f.reload, 500);
                    return
                }
                Z.g = true,
                font_ext_reload = (Z.b.n == 'M' && Z.b.v <= 8 && !Y ? true: false),
                use_fonts = [],
                oth_fonts = [],
                nicknames = [],
                liststyletypes = [],
                liststyletypecnts = [],
                str = [],
                ifrms = [],
                lclist = [];
                if (Y) {
                    var O, elm;
                    for (O = selhist.length; O--;) {
                        elm = Z.d.getElementById(selhist[O].id);
                        if (elm) elm.parentNode.removeChild(elm)
                    }
                    selhist = [],
                    selidx = 0
                }
                options.sync = true;
                if (irregular === 1) {
                    K();
                    setTimeout(function() {
                        f.ready()
                    },
                    1000)
                } else {
                    f.ready()
                }
            },
            designate_load: function(q, O, Y) {
                if (Z.g) {
                    setTimeout(function() {
                        f.designate_load(q, O, Y)
                    },
                    500);
                    return
                }
                Z.g = true;
                Z.m = ( + new Date());
                tid = setTimeout(function() {
                    Z.AB(options.timeoutfunc)
                },
                f.timeout * 1000);
                var F, _id = Y ? Y: q[0].nickname;
                use_fonts = [],
                lclist = [],
                nicknames = [],
                liststyletypes = [],
                liststyletypecnts = [],
                str = [];
                for (var F = q.length; F--;) {
                    use_fonts.push(q[F].fontname);
                    nicknames.push(q[F].nickname);
                    str.push(q[F].text)
                }
                options.callbacks[_id] = {
                    'func': O
                };
                if (irregular === null) if (!q6()) return;
                if (d()) {
                    q0(true);
                    F8(_id)
                } else {
                    q0(false);
                    irregular || proxy ? q8(_id) : Q(_id)
                }
            },
            setFonts: function(Y) {
                f.plusf = Y
            },
            isloading: function() {
                return Z.g
            }
        };
        var d = function() {
            if (Z.llt < 1) {
                return true
            } else if (Z.llt < 2) {
                return false
            } else {
                var q = use_fonts.length,
                paramurl = q4('reqf');
                paramurl += '/con=' + encodeURIComponent(f.condition);
                paramurl += '&cha=' + Z.CR();
                paramurl += '&dmode=' + Z.b.mode;
                if (Z.aa) paramurl += '&aa=1';
                if (Z.ab != null) paramurl += '&ab=' + Z.ab;
                var bh = new RegExp("　| |'|\r|\n|\t", 'g');
                for (var bd = 0; bd < q; bd++) {
                    if (!str[bd].length) continue;
                    var O = str[bd].replace(bh, '');
                    var Y = null,
                    orignalFont = null,
                    modeString = null;
                    try {
                        O = encodeURIComponent(q9(O.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []).sort().join(''))
                    } catch(e) {
                        O = encodeURIComponent(O)
                    }
                    O = E(unescape(O));
                    if (Z.t != null) {
                        Y = '&t=' + Z.t
                    } else if (Z.pm) {
                        Y = '&pm=1'
                    }
                    var F = O4(use_fonts[bd]);
                    if (F) {
                        orignalFont = F['org'];
                        Y = '&' + F['mode'];
                        if (F['value']) {
                            Y = Y + '=' + F['value']
                        } else {
                            Y = Y + '=1'
                        }
                    } else {
                        orignalFont = use_fonts[bd]
                    }
                    var be = paramurl + (Y ? Y: '') + "&fa=" + encodeURIComponent(orignalFont) + "&lst=" + (liststyletypes[bd] ? encodeURIComponent(liststyletypes[bd]) : '0') + "&lsc=" + (liststyletypecnts[bd] ? liststyletypecnts[bd] : '0') + "&s=" + O;
                    if (Z.llt <= be.length) {
                        return false
                    }
                }
            }
            return true
        };
        var F8 = function(bm) {
            if (!str.length) {
                N();
                return
            }
            desig = bm ? bm: 0;
            var q = use_fonts.length,
            logParam = [],
            paramurl = q4('reqf');
            paramurl += '/con=' + encodeURIComponent(f.condition);
            paramurl += '&cha=' + Z.CR();
            paramurl += '&dmode=' + Z.b.mode;
            if (Z.aa) paramurl += '&aa=1';
            if (Z.ab != null) paramurl += '&ab=' + Z.ab;
            var be = "";
            var x = '';
            var bh = "";
            if (f.exttype) {
                switch (f.exttype) {
                case 'woff':
                case 'woff_by_ttf':
                    bh = "') format('woff";
                    break;
                case 'otf':
                    bh = "') format('opentype";
                    break;
                case 'ttf':
                    bh = "') format('truetype";
                    break;
                case 'svg':
                    bh = "#FontPlus') format('svg";
                    break
                }
            }
            for (var O0 = 0; O0 < q; O0++) {
                if (!str[O0].length) continue;
                var Y = E(unescape(encodeURIComponent(str[O0]).replace("*", "%2A").replace("!", "%21").replace("~", "%7E")));
                var O = null,
                orignalFont = null,
                modeString = null;
                if (Z.t != null) {
                    O = '&t=' + Z.t
                } else if (Z.pm) {
                    O = '&pm=1'
                }
                var bd = O4(use_fonts[O0]);
                if (bd) {
                    orignalFont = bd['org'];
                    O = '&' + bd['mode'];
                    if (bd['value']) {
                        O = O + '=' + bd['value']
                    } else {
                        O = O + '=1'
                    }
                } else {
                    orignalFont = use_fonts[O0]
                }
                var D = paramurl + (O ? O: '') + "&fa=" + E(unescape(encodeURIComponent(orignalFont))) + "&lst=" + (liststyletypes[O0] ? encodeURIComponent(liststyletypes[O0]) : '0') + "&lsc=" + (liststyletypecnts[O0] ? liststyletypecnts[O0] : '0') + "&s=" + Y;
                be += "@font-face { font-family: '" + (nicknames[O0] ? nicknames[O0] : use_fonts[O0]) + "'; font-weight: Bold; src: url('" + D + bh + "'); }\n";
                Z.CM(bm || font_ext ? nicknames[O0] : use_fonts[O0], str[O0].substr(0, 2), bm ? bm: O0);
                lclist.push(bm ? bm: O0);
                if (f.rl && f.rl === 1) {
                    logParam['fonts[' + O0 + '][fa]'] = E(unescape(encodeURIComponent(use_fonts[O0])));
                    logParam['fonts[' + O0 + '][nn]'] = (nicknames[O0] ? encodeURIComponent(nicknames[O0]) : '0');
                    logParam['fonts[' + O0 + '][lst]'] = (liststyletypes[O0] ? encodeURIComponent(liststyletypes[O0]) : '0');
                    logParam['fonts[' + O0 + '][lsc]'] = (liststyletypecnts[O0] ? liststyletypecnts[O0] : '0');
                    logParam['fonts[' + O0 + '][s]'] = Y
                }
                if (x != '') {
                    x += ','
                }
                x += use_fonts[O0]
            }
            if (font_ext_reload) {
                S()
            }
            var F = (desig ? desig: selhist[selidx].id),
            css = Z.d.getElementById(F);
            if (css && Z.b.n == 'M') {
                css.parentNode.removeChild(css);
                css = null
            }
            if (!css) {
                css = Z.d.createElement('style');
                css.setAttribute('type', 'text/css');
                css.setAttribute('rel', 'stylesheet');
                css.setAttribute('id', F);
                par.appendChild(css)
            }
            if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && css.styleSheet) css.styleSheet.cssText = be;
            else css.innerHTML = be;
            F0(logParam);
            if (lclist.length) {
                Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
            }
            clearTimeout(tid);
            U(x);
            bh7()
        };
        var y = function(x) {
            var bd = use_fonts.length,
            keyStr = "",
            familiesStr = '';
            var be = null;
            if (typeof(sessionStorage) != 'undefined' && Z.b.n != 'U') {
                var I = sessionStorage.getItem(f.condition);
                if (I) {
                    for (var C = 0; C < bd; C++) {
                        keyStr += use_fonts[C] + (nicknames[C] ? nicknames[C] : '0') + str[C];
                        if (familiesStr != '') {
                            familiesStr += ','
                        }
                        familiesStr += use_fonts[C]
                    }
                    be = sessionStorage.getItem(keyStr)
                } else {
                    try {
                        sessionStorage.setItem(f.condition, "1")
                    } catch(e) {}
                }
            } else if (Z.b.n == 'M' && Z.b.v == 7) {
                var O = Z.d.createElement('input');
                O.type = 'hidden';
                O.style.behavior = "url('#default#userData')";
                Z.d.body.appendChild(O);
                if (typeof(O.load) != 'undefined') {
                    var bh = 'fpNum',
                    charSaveKey = 'fpChar',
                    cssSaveKey = 'fpCss',
                    idxKey = 'fp';
                    O.load(bh);
                    var O0 = O.getAttribute('key');
                    var q = O.getAttribute('max');
                    if (O0 == f.condition && q != null) {
                        for (var C = 0; C < bd; C++) {
                            keyStr += use_fonts[C] + (nicknames[C] ? nicknames[C] : '0') + str[C];
                            if (familiesStr != '') {
                                familiesStr += ','
                            }
                            familiesStr += use_fonts[C]
                        }
                        O.load(charSaveKey);
                        for (var C = 0; C < q; C++) {
                            var F = O.getAttribute(idxKey + C);
                            if (F != null && F == keyStr) {
                                O.load(cssSaveKey);
                                be = O.getAttribute(idxKey + C);
                                break
                            }
                        }
                    }
                }
                Z.d.body.removeChild(O)
            }
            if (be) {
                for (var C = 0; C < bd; C++) {
                    Z.CM(x || font_ext ? nicknames[C] : use_fonts[C], str[C].substr(0, 2), x ? x: C);
                    lclist.push(x ? x: C)
                }
                if (font_ext_reload) {
                    S()
                }
                if (be.length > 4 && be.substring(0, 4) == 'http') {
                    var Y = Z.d.getElementById(x ? x: 'fontplus_link');
                    if (Y) {
                        Y.parentNode.removeChild(Y)
                    }
                    Y = Z.d.createElement('link');
                    Y.setAttribute('type', 'text/css');
                    Y.setAttribute('rel', 'stylesheet');
                    Y.setAttribute('charset', 'utf-8');
                    Y.setAttribute('id', x ? x: 'fontplus_link');
                    Y.setAttribute('href', be);
                    Y.setAttribute('media', 'screen');
                    par.appendChild(Y)
                } else {
                    if (font_ext) {
                        for (var C = 0; C < bd; C++) {
                            be = be.replace(use_fonts[C], nicknames[C])
                        }
                    }
                    var D = (x ? x: selhist[selidx].id),
                    css = Z.d.getElementById(D);
                    if (css && Z.b.n == 'M') {
                        css.parentNode.removeChild(css);
                        css = null
                    }
                    if (!css) {
                        css = Z.d.createElement('style');
                        css.setAttribute('type', 'text/css');
                        css.setAttribute('rel', 'stylesheet');
                        css.setAttribute('id', D);
                        par.appendChild(css)
                    }
                    if (css.styleSheet) {
                        css.styleSheet.cssText = be
                    } else {
                        css.innerHTML = be
                    }
                    for (var C = ifrms.length; C--;) {
                        var bm = ifrms[C].contentDocument || ifrms[C].contentWindow.document;
                        q7(bm);
                        B(bm, Z.TN(bm, 'HEAD')[0] || Z.TN(bm, 'BODY')[0], be)
                    }
                }
                if (lclist.length) {
                    Z.WT(lclist, x ? options.callbacks[x]['func'] : completefunc, options.size, be5())
                }
                clearTimeout(tid);
                U(familiesStr);
                bh7();
                var M = [];
                if (f.rl && f.rl === 1) {
                    for (var C = 0; C < bd; C++) {
                        M['fonts[' + C + '][fa]'] = E(unescape(encodeURIComponent(use_fonts[C])));
                        M['fonts[' + C + '][nn]'] = (nicknames[C] ? encodeURIComponent(nicknames[C]) : '0');
                        M['fonts[' + C + '][lst]'] = (liststyletypes[C] ? encodeURIComponent(liststyletypes[C]) : '0');
                        M['fonts[' + C + '][lsc]'] = (liststyletypecnts[C] ? liststyletypecnts[C] : '0');
                        M['fonts[' + C + '][s]'] = E(unescape(encodeURIComponent(str[C])))
                    }
                }
                F0(M);
                return true
            }
            return false
        };
        var F0 = function(x) {
            if (!f.rl) return;
            if (x) {
                var bd = 0,
                frame, form, specid, onload;
                x['con'] = f.condition;
                x['cha'] = Z.CR();
                x['dmode'] = Z.b.mode;
                x['tm'] = (new Date().getTime().toString());
                x['size'] = (options.size ? 1 : 0);
                if (Z.aa) x['aa'] = 1;
                if (Z.ab != null) x['ab'] = Z.ab;
                if (Z.t != null) {
                    x['t'] = Z.t
                } else if (Z.pm) {
                    x['pm'] = 1
                }
                if (! (Z.b.n == 'F' && Z.b.v >= 51)) {
                    form = Z.d.createElement('form');
                    specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
                    form.action = q4('reql');
                    form.method = 'POST';
                    form.id = 'form_' + specid;
                    Z.d.body.appendChild(form);
                    for (var F in x) {
                        if (!x.hasOwnProperty(F)) continue;
                        var O = Z.d.createElement('input');
                        O.type = 'hidden';
                        O.name = F;
                        O.value = x[F];
                        form.appendChild(O)
                    }
                    frame = Z.d.createElement('iframe');
                    frame.name = form.target = 'fontplus_iframe_' + specid;
                    frame.style.display = 'none';
                    frame.id = 'frame_' + specid;
                    if (be1() && Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7)) frame.src = q4('reload');
                    else frame.src = 'about:blank';
                    onload = frame.onload = function() {
                        if (bd == 0) {
                            form.submit()
                        } else if (bd == 1) {
                            form.parentNode.removeChild(form);
                            setTimeout(function() {
                                frame.parentNode.removeChild(frame)
                            },
                            0)
                        }
                        bd++
                    };
                    if (document.all) {
                        frame.onreadystatechange = function() {
                            if (this.readyState == 'complete') {
                                frame.contentWindow.name = frame.name;
                                onload()
                            }
                        }
                    }
                    Z.d.body.appendChild(frame)
                } else {
                    var q = '';
                    for (var F in x) {
                        if (!x.hasOwnProperty(F)) continue;
                        q = q + '&' + F + '=' + x[F]
                    }
                    frame = Z.d.createElement('iframe');
                    specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
                    frame.id = 'frame_' + specid;
                    onload = frame.onload = function() {
                        var Y = new XMLHttpRequest();
                        Y.open('POST', q4('reql'), true);
                        Y.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                        Y.overrideMimeType('text/plain; charset=UTF-8');
                        Y.send(q);
                        frame.parentNode.removeChild(frame)
                    };
                    Z.d.body.appendChild(frame)
                }
            } else {
                var be = use_fonts.length;
                var bm = "c=" + encodeURIComponent(f.ukey);
                bm += "&ca=0";
                bm += '&dmode=' + (Z.b.mode ? Z.b.mode: '0');
                if (Z.aa) bm += "&aa=1";
                if (Z.ab != null) bm += "&ab=" + Z.ab;
                if (Z.t != null) {
                    bm += "&t=" + Z.t
                } else if (Z.pm) {
                    bm += "&pm=1"
                }
                if (f.exttype) {
                    bm += "&type=" + (f.exttype == 'woff_by_ttf' ? 'woff': f.exttype)
                }
                var D = "";
                for (var O0 = 0; O0 < use_fonts.length; O0++) {
                    if (!str[O0].length) continue;
                    D += "&fn[" + O0 + "]=" + encodeURIComponent(encodeURIComponent(use_fonts[O0]));
                    D += "&nn[" + O0 + "]=" + (nicknames[O0] ? encodeURIComponent(encodeURIComponent(nicknames[O0])) : '0');
                    D += "&gl[" + O0 + "]=" + str[O0].length
                }
                if (D != "") {
                    var bh = document.createElement('img');
                    bh.setAttribute('src', f.lsv + bm + D + "&tm=" + Math.floor(Math.random() * 10000) + (new Date().getTime().toString()));
                    bh.setAttribute('width', 0);
                    bh.setAttribute('height', 0);
                    bh.style.display = 'none';
                    bh.onerror = function() {
                        bh.parentNode.removeChild(bh)
                    };
                    bh.onload = function() {
                        bh.parentNode.removeChild(bh)
                    };
                    Z.d.body.appendChild(bh)
                }
            }
        };
        var F2 = function() {
            var Y;
            selidx = -1;
            for (Y = selhist.length; Y--;) {
                if (selhist[Y].selector == options.selector) {
                    selidx = Y;
                    break
                }
            }
            if (selidx < 0) {
                selidx = selhist.length;
                selhist.push({
                    'selector': options.selector,
                    'id': 'fontplus_css_' + selidx
                })
            }
        };
        var A = function(Y, F) {
            if (!F) {
                var q = Z.TN(Y, 'SCRIPT');
                for (var bh = q.length; bh--;) {
                    if (q[bh].src.match(/\/accessor\/script\/fontplus.js\?/)) {
                        F = 1;
                        break
                    }
                }
                if (!F) return F
            }
            var O = Z.QS(options.selector, Y),
            bh,
            e = [];
            if (options.selector != '*') {
                for (var bh = O.length; bh--;) e = e.concat(Z.CN(O[bh]))
            } else {
                e = O
            }
            q1(e);
            if (options.selector == '*') V(Y);
            return F
        };
        var q1 = function(Y) {
            var O, k;
            for (k = Y.length; k--;) {
                if ((O = g(Y[k])) == null) continue;
                w(Y[k], O)
            }
        };
        var q0 = function(O) {
            var Y;
            if (O) {
                Y = new RegExp("　| |'|\r|\n|\t", 'g')
            } else {
                Y = new RegExp("　|\r|\n|\t", 'g')
            }
            for (var q = use_fonts.length; q--;) {
                var F = str[q].replace(Y, '');
                str[q] = q9(F.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []).sort().join('');
                try {
                    encodeURIComponent(str[q])
                } catch(e) {
                    str[q] = F
                }
                if (Z.b.n == 'M' && str[q].indexOf("'") >= 0) {
                    str[q] = str[q].replace("'", "") + "'"
                }
                if (Z.b.n == 'M' && str[q].indexOf(".") >= 0) {
                    str[q] = str[q].replace(".", "") + "."
                }
            }
        };
        var q9 = function(Y) {
            var q = {};
            var O = [];
            var F, value;
            for (F = 0; F < Y.length; F++) {
                value = Y[F];
                if (! (value in q)) {
                    q[value] = true;
                    O.push(value)
                }
            }
            return O
        };
        var V = function(Y) {
            for (var O = Y.styleSheets.length; O--;) G(Y.styleSheets[O])
        };
        var G = function(O) {
            var Y, sc, st, act, p_cls;
            try {
                Y = O.cssRules ? O.cssRules: O.rules
            } catch(e) {
                Y = null
            }
            if (!Y) return;
            for (var q = Y.length; q--;) {
                try {
                    sc = Y[q].styleSheet
                } catch(e) {
                    sc = null
                }
                if (sc) G(sc);
                if (!Y[q].selectorText) continue;
                var F = Y[q].selectorText.match(/(:link|:visited|:hover|:active)/ig);
                if (F && F.length && Y[q].style.fontFamily.length) {
                    act = Y[q].selectorText.replace(/:link|:visited|:hover|:active/ig, "");
                    p_cls = Z.CS(act);
                    for (var bh = p_cls.length; bh--;) {
                        if ((st = g(p_cls[bh])) == null || Z.TM(st) == Z.TM(Y[q].style.fontFamily)) {
                            continue
                        }
                        w(p_cls[bh], Y[q].style.fontFamily)
                    }
                }
            }
        };
        var g = function(Y) {
            return Z.ST(Y, Z.TC('font-family'))
        };
        var q6 = function() {
            var Y = Z.b.n,
            v = Z.b.v;
            irregular = 0;
            if (Y == 'O' || Y == 'T') irregular = 1;
            else if (Y == 'M' && v < 8) irregular = 2;
            else if (Y == 'S' && v < 5) irregular = 3;
            if (Y == 'M' && v >= 6 || Y == 'F' && v >= 3.5 || Y == 'C' && v >= 2 || Y == 'O' && v >= 10 || Y == 'T' && v >= 9.7 || Y == 'S' && v >= 3.1 || Y == 'A' && v >= 2.2 || Y == 'I' || Y == 'U' || Y == 'E') return true;
            return false
        };
        var w = function(M, O, Y) {
            var q = O.replace(/\\/g, "").replace(/'/g, "").replace(/"/g, "").split(","),
            idx,
            c,
            n,
            nst = false,
            fn,
            orignalFont;
            var O0;
            for (var be = 0; be < q.length; be++) {
                q[be] = Z.TM(q[be]);
                var bh = O4(q[be]);
                if (bh) {
                    orignalFont = bh['org']
                } else {
                    orignalFont = q[be]
                }
                if (Z.I(q[be], oth_fonts) >= 0) {
                    continue
                }
                if ((idx = Z.I(q[be], use_fonts)) < 0) {
                    if ((c = F7(q[be])) >= 0) {
                        if ((idx = Z.I(font_ext_hist[c].org, use_fonts)) < 0) {
                            idx = use_fonts.length;
                            use_fonts.push(font_ext_hist[c].org)
                        }
                    } else if ((c = Z.I(orignalFont, f.plusf)) >= 0) {
                        idx = use_fonts.length;
                        use_fonts.push(q[be])
                    }
                }
                if (idx < 0) {
                    oth_fonts.push(q[be]);
                    continue
                }
                O0 = bc(M);
                if (!O0) {
                    if (str[idx] == null) {
                        use_fonts.splice(idx, 1)
                    }
                    return
                }
                if (str[idx] == null) str[idx] = '';
                str[idx] += O0;
                if (M.nodeName.toLowerCase() == 'ol') {
                    var bm = Z.ST(M, Z.TC('list-style-type')).toLowerCase();
                    if (bm && bm != 'none' && bm != 'disc' && bm != 'circle' && bm != 'square') {
                        var bd = M.getElementsByTagName("li").length;
                        if (!liststyletypes[idx]) {
                            liststyletypes[idx] = bm;
                            liststyletypecnts[idx] = bd
                        } else {
                            var D = liststyletypes[idx].toString().split("_");
                            var F = Z.I(bm, D);
                            if (F < 0) {
                                liststyletypes[idx] += "_" + bm;
                                liststyletypecnts[idx] += "_" + bd
                            } else {
                                var x = liststyletypecnts[idx].toString().split("_");
                                if (x[F] < bd) {
                                    x[F] = bd;
                                    liststyletypecnts[idx] = x.join("_")
                                }
                            }
                        }
                    }
                }
                if (font_ext) {
                    if (!nst) nst = O.replace(/'/g, "").replace(/"/g, "");
                    if (nicknames[idx] == null) nicknames[idx] = 'FP-' + F1(16);
                    ecp_fa = q[be].replace(/\+/g, "\\+").replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\*/g, "\\*").replace(/\?/g, "\\?").replace(/\./g, "\\.");
                    nst = nst.replace(new RegExp(ecp_fa), nicknames[idx])
                }
            }
            if (nst) {
                if (font_ext_reload) M.setAttribute('data-fp-tmp-nst', nst);
                else M.style.fontFamily = nst
            }
        };
        var bc = function(q, Y) {
            var O = Z.l ? q.tagName: q.tagName.toUpperCase(),
            s = '',
            i;
            if (O == 'INPUT' && q.type == 'text' || O == 'TEXTAREA') {
                q.style.fontFamily = Z.b.fd;
                return s
            } else if (O == 'SCRIPT' || O == 'HEAD' || O == 'TITLE' || O == 'STYLE' || O == 'HTML' || O == 'META') {
                return s
            }
            if (q.value && O != 'LI' && O != 'SELECT') {
                s = q.value
            } else if (q.childNodes.length) {
                if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9)) {
                    s += P(q, 1);
                    if (O == 'TR') {
                        for (i = q.cells.length; i--;) s += q.cells[i].innerText
                    }
                } else s += q2(q)
            } else {
                return s
            }
            l(3, q);
            return Z.TM(s)
        };
        var q2 = function(Y, O) {
            if (Y.nodeValue) O = Y.nodeValue;
            else if (Y.textContent) O = Y.textContent;
            else if (Y.innerText && (Z.l ? Y.tagName: Y.tagName.toUpperCase()) == 'A') O = Y.innerText;
            else O = '';
            return O
        };
        var P = function(O, Y) {
            var q, s = '';
            for (q = O.childNodes.length; q--;) {
                if (options.selector != '*' && O.childNodes[q].childNodes.length) s += P(O.childNodes[q], Y + 1);
                s += q2(O.childNodes[q])
            }
            return s
        };
        var be1 = function() {
            return typeof(Z.d.location.protocol) == 'unknown' || Z.d.location.protocol == 'https:' ? 1 : 0
        };
        var q4 = function(Y) {
            return (be1() ? 'https://' + f.server[0] : 'http://' + f.server[1]) + '/accessor' + (Y ? '/' + Y: '/mkfont')
        };
        var Q = function(Y) {
            if (!str.length) {
                N();
                return
            }
            desig = Y ? Y: 0;
            if (y(desig) === true) {
                return
            }
            var O = use_fonts.length;
            var q = 'condition=' + encodeURIComponent(f.condition);
            q += '&charset=' + Z.CR();
            q += '&browser[name]=' + Z.b.name;
            if (Z.b.name.substr(0, 7) == 'Unknown') q += '&browser[ver]=' + Z.b.name;
            else q += '&browser[ver]=' + Z.b.ver;
            q += '&browser[mode]=' + Z.b.mode;
            q += '&browser[os]=' + Z.b.os;
            q += '&location=' + Z.d.location.href;
            q += '&ssl=' + be1();
            q += '&frame=1';
            q += '&tagid=' + (Y ? Y: 'css_' + selidx);
            q += '&tm=' + (new Date().getTime().toString());
            q += '&size=' + (options.size ? 1 : 0);
            if (Z.aa) q += '&aa=1';
            if (Z.ab != null) q += '&ab=' + Z.ab;
            if (Z.t != null) {
                q += '&t=' + Z.t
            } else if (Z.pm) {
                q += '&pm=1'
            }
            for (var F = 0; F < O; F++) {
                if (!str[F].length) continue;
                q += '&fonts[' + F + '][family]=' + E(unescape(encodeURIComponent(use_fonts[F])));
                q += '&fonts[' + F + '][nickname]=' + (nicknames[F] ? nicknames[F] : '0');
                q += '&fonts[' + F + '][lst]=' + (liststyletypes[F] ? liststyletypes[F] : '0');
                q += '&fonts[' + F + '][lsc]=' + (liststyletypecnts[F] ? liststyletypecnts[F] : '0');
                q += '&fonts[' + F + '][str]=' + E(unescape(encodeURIComponent(str[F])));
                Z.CM(Y || font_ext ? nicknames[F] : use_fonts[F], str[F].substr(0, 2), Y ? Y: F);
                lclist.push(Y ? Y: F)
            }
            Z.X(q4(), F4, q, Y)
        };
        var F4 = function(q, Y) {
            if (Z.z) return;
            if (q) {
                if (font_ext_reload) {
                    S()
                }
                var O = q.split('|');
                var F = (desig ? desig: selhist[selidx].id),
                css = Z.d.getElementById(F);
                if (css && Z.b.n == 'M') {
                    css.parentNode.removeChild(css);
                    css = null
                }
                if (!css) {
                    css = Z.d.createElement('style');
                    css.setAttribute('type', 'text/css');
                    css.setAttribute('rel', 'stylesheet');
                    css.setAttribute('id', F);
                    par.appendChild(css)
                }
                if (css.styleSheet) {
                    css.styleSheet.cssText = O[0]
                } else {
                    css.innerHTML = O[0]
                }
                if (lclist.length) {
                    Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
                }
                clearTimeout(tid);
                U(O[1]);
                if (f.rl && f.rl == 2) {
                    F0(null)
                }
                if (typeof(sessionStorage) != 'undefined' && Z.b.n != 'U') {
                    var bh = "";
                    for (var be = 0; be < use_fonts.length; be++) {
                        bh += use_fonts[be] + (nicknames[be] ? nicknames[be] : '0') + str[be]
                    }
                    try {
                        if (font_ext && O[2]) {
                            sessionStorage.setItem(bh, O[2])
                        } else {
                            sessionStorage.setItem(bh, O[0])
                        }
                    } catch(e) {}
                }
                bh7()
            } else if (Y.status != 200 && (Z.b.n == 'F' || Z.b.n == 'S')) {
                proxy = true;
                Z.CD(lclist);
                lclist = [];
                q8(Y.designate_id)
            }
        };
        var q5 = function(q, bh) {
            var Y = Z.d.getElementById(bh ? bh: 'fontplus_link');
            if (Y) {
                Y.parentNode.removeChild(Y)
            }
            Y = Z.d.createElement('link');
            Y.setAttribute('type', 'text/css');
            Y.setAttribute('rel', 'stylesheet');
            Y.setAttribute('charset', 'utf-8');
            Y.setAttribute('id', bh ? bh: 'fontplus_link');
            var O = '&location=' + encodeURIComponent(Z.d.location.href);
            var F = '';
            if (f.box) F = '&box=' + encodeURIComponent(f.box);
            Y.setAttribute('href', q4('stylesheet') + '/' + q + '?' + encodeURIComponent(f.condition) + O + F);
            Y.setAttribute('media', 'screen');
            par.appendChild(Y);
            return Y
        };
        var be6 = function(Y) {
            var O = Z.d.createElement('script');
            O.setAttribute('id', 'fontplus_jsonp');
            O.charset = 'utf-8';
            O.src = q4('jsonp') + '/' + Y + '/receiveOther?' + encodeURIComponent(f.condition);
            par.appendChild(O)
        };
        var N = function() {
            Z.g = false;
            clearTimeout(tid);
            if (completefunc) completefunc({
                'code': 0
            })
        };
        var q8 = function(D) {
            if (Z.z) return;
            if (!str.length) {
                N();
                return
            }
            var be = use_fonts.length,
            param = {},
            cnt = 0,
            frame, form, specid, onload;
            desig = D ? D: 0;
            if (irregular !== 1 && y(desig) === true) {
                return
            }
            param['condition'] = f.condition;
            param['charset'] = Z.CR();
            param['browser[name]'] = Z.b.name;
            if (Z.b.name.substr(0, 7) == 'Unknown') param['browser[ver]'] = Z.b.name;
            else param['browser[ver]'] = Z.b.ver;
            param['browser[mode]'] = Z.b.mode;
            param['browser[os]'] = Z.b.os;
            param['location'] = Z.d.location.href;
            param['ssl'] = be1();
            param['tagid'] = (D ? D: 'css_' + selidx);
            param['frame'] = (Z.b.n == 'M' && Z.b.v == 6 ? ifrms.length + 1 : (Z.b.n == 'S' && Z.b.v < 4 ? 2 : 1));
            param['tm'] = (new Date().getTime().toString());
            param['size'] = (options.size ? 1 : 0);
            if (Z.aa) param['aa'] = 1;
            if (Z.ab != null) param['ab'] = Z.ab;
            if (Z.t != null) {
                param['t'] = Z.t
            } else if (Z.pm) {
                param['pm'] = 1
            }
            var bd = '';
            for (var x = 0; x < be; x++) {
                if (!str[x].length) continue;
                param['fonts[' + x + '][family]'] = E(unescape(encodeURIComponent(use_fonts[x])));
                param['fonts[' + x + '][nickname]'] = (nicknames[x] ? nicknames[x] : '0');
                param['fonts[' + x + '][lst]'] = (liststyletypes[x] ? liststyletypes[x] : '0');
                param['fonts[' + x + '][lsc]'] = (liststyletypecnts[x] ? liststyletypecnts[x] : '0');
                param['fonts[' + x + '][str]'] = E(unescape(encodeURIComponent(str[x])));
                Z.CM(D || font_ext ? nicknames[x] : use_fonts[x], str[x].substr(0, 2), D ? D: x);
                lclist.push(D ? D: x);
                if (bd != '') {
                    bd += ','
                }
                bd += use_fonts[x]
            }
            form = Z.d.createElement('form');
            specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
            form.action = q4() + '/' + specid;
            form.method = 'POST';
            form.id = 'form_' + specid;
            Z.d.body.appendChild(form);
            for (var bh in param) {
                if (!param.hasOwnProperty(bh)) continue;
                var F = Z.d.createElement('input');
                F.type = 'hidden';
                F.name = bh;
                F.value = param[bh];
                form.appendChild(F)
            }
            frame = Z.d.createElement('iframe');
            frame.name = form.target = 'fontplus_iframe_' + specid;
            frame.style.display = 'none';
            frame.id = 'frame_' + specid;
            if (be1() && Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7)) frame.src = q4('reload');
            else frame.src = 'about:blank';
            onload = frame.onload = function() {
                if (cnt == 0) {
                    form.submit()
                } else if (cnt == 1) {
                    form.parentNode.removeChild(form);
                    frame.parentNode.removeChild(frame);
                    q7(Z.d);
                    if (font_ext_reload) {
                        S()
                    }
                    if (Z.b.n == 'F' || Z.b.n == 'S') {
                        var Y = q5(specid + '.css', D ? D: selhist[selidx].id);
                        clearTimeout(tid);
                        if (typeof(sessionStorage) != 'undefined') {
                            var O = "";
                            for (var q = 0; q < use_fonts.length; q++) {
                                O += use_fonts[q] + (nicknames[q] ? nicknames[q] : '0') + str[q]
                            }
                            try {
                                sessionStorage.setItem(O, Y.href)
                            } catch(e) {}
                        }
                    } else {
                        be6(specid)
                    }
                    if (lclist.length) {
                        Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
                    }
                    U(bd);
                    bh7()
                }
                cnt++
            };
            if (document.all) {
                frame.onreadystatechange = function() {
                    if (this.readyState == 'complete') {
                        frame.contentWindow.name = frame.name;
                        onload()
                    }
                }
            }
            Z.d.body.appendChild(frame)
        };
        var h = function() {
            if (irregular === 0) return true;
            if (irregular === 1) {
                if (!f.nolist) q5('allfonts.css')
            }
            B(Z.d, par);
            return true
        };
        var B = function(F, O, q) {
            var Y = F.getElementById('fontplus_style');
            if (!Y) {
                Y = Z.d.createElement('style');
                Y.setAttribute('type', 'text/css');
                Y.setAttribute('id', 'fontplus_style')
            }
            if (q) {
                if (irregular == 2 && Y.styleSheet) {
                    Y.styleSheet.cssText = q
                } else if (irregular == 2 && Y.sheet) {
                    Y.sheet.cssText = q
                } else {
                    Y.innerHTML = q
                }
            }
            O.appendChild(Y)
        };
        var K = function() {
            if (f.nolist) {
                var Y = Z.d.createElement('style'),
                s = '',
                i;
                var O = '&location=' + encodeURIComponent(Z.d.location.href);
                Y.setAttribute('type', 'text/css');
                Y.setAttribute('id', 'fontplus_link');
                s = "@charset 'utf-8';\n";
                for (i = f.plusf.length; i--;) {
                    s += "@font-face { font-family: '" + f.plusf[i] + "'; font-weight: Bold; src: url('" + q4('download') + "/default." + f.condition + ".ttf" + O + "') format('truetype'); }\n"
                }
                s += "@font-face { font-family: 'FONTPLUS_DUMMY'; font-weight: Bold; src: url('" + q4('download') + "/default." + f.condition + ".ttf" + O + "') format('truetype'); }\n";
                if (irregular == 2 && Y.styleSheet) {
                    Y.styleSheet.cssText = s
                } else if (irregular == 2 && Y.sheet) {
                    Y.sheet.cssText = s
                } else {
                    Y.innerHTML = s
                }
                par.appendChild(Y)
            } else q5('allfonts.css')
        };
        var q7 = function(O) {
            var Y = O.getElementById('fontplus_link');
            if (Y) Y.parentNode.removeChild(Y)
        };
        var be5 = function() {
            return f.timeout * 1000 - ( + new Date() - Z.m)
        };
        var l = function(bh, bd) {
            if (bh == 0 && f.delay > 0) {
                var F = Z.d.createElement('style'),
                s,
                i;
                F.setAttribute('type', 'text/css');
                F.setAttribute('id', 'fontplus_delay_css');
                s = '.fontplus_target_tags {visibility:hidden;} body {visibility:hidden}';
                if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && F.styleSheet) {
                    F.styleSheet.cssText = s
                } else if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && F.sheet) {
                    F.sheet.cssText = s
                } else {
                    F.innerHTML = s
                }
                par.appendChild(F)
            } else if (bh == 1) {
                if (f.delay > 0) {
                    bgimg.type = false;
                    bgimg.src = Z.ST(Z.TN(Z.d, "BODY")[0], Z.TC('background-image'));
                    if (!bgimg.type && bgimg.src != 'none') bgimg.type = "BODY";
                    if (bgimg.type) {
                        Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = 'none'
                    }
                    completefunc = function(O) {
                        var Y = Z.QS(".fontplus_target_tags", document);
                        for (var q = Y.length; q--;) {
                            Y[q].style.visibility = '';
                            Y[q].className = Y[q].className.replace(/\s*fontplus_target_tags/, "")
                        }
                        Z.d.body.style.visibility = 'visible';
                        if (f.delay == 2) {
                            if (bgimg.type) Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = bgimg.src
                        }
                        if (options.complete) options.complete(O)
                    }
                } else {
                    completefunc = function(Y) {
                        if (options.complete) options.complete(Y)
                    }
                }
            } else if (bh == 2 && f.delay == 1) {
                Z.d.body.style.visibility = 'visible';
                if (bgimg.type) Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = bgimg.src
            } else if (bh == 3 && f.delay > 0) {
                if (bd.className.match) {
                    if (bd.style.visibility != 'hidden' && !bd.className.match(/\s*fontplus_target_tags/)) {
                        var be = bd.className;
                        be += (be.length > 0 ? ' ': '') + "fontplus_target_tags";
                        bd.className = be
                    }
                } else if (bd.className.baseVal.match) {
                    if (bd.style.visibility != 'hidden' && !bd.className.baseVal.match(/\s*fontplus_target_tags/)) {
                        var be = bd.className;
                        be += (be.length > 0 ? ' ': '') + "fontplus_target_tags";
                        bd.className = be
                    }
                }
            }
        };
        var F3 = function() {
            var O = "http" + (be1() ? "s": "") + f.bfurl;
            var bh = f.bfnms;
            var q = "@font-face { font-family: 'fpbf_ac93d8111'; src: url('" + O;
            if (Z.b.n != 'U') {
                var F = bh['w'] + "') format('woff";
                if (Z.b.ext) {
                    switch (Z.b.ext) {
                    case 'o':
                        F = bh['o'] + "') format('opentype";
                        break;
                    case 't':
                        F = bh['t'] + "') format('truetype";
                        break;
                    case 'e':
                        F = bh['e'];
                        break
                    }
                }
                q += F + "'); }"
            } else {
                q += bh['w'] + "') format('woff'), url('" + O + bh['o'] + "') format('opentype'), url('" + O + bh['t'] + "') format('truetype'); src: url('" + O + bh['e'] + "')\\9; }"
            }
            var Y = Z.d.createElement('style');
            Y.setAttribute('type', 'text/css');
            Y.setAttribute('id', 'fpbf_ac93d8111_css');
            if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && Y.styleSheet) {
                par.appendChild(Y);
                Y.styleSheet.cssText = q
            } else {
                Y.innerHTML = q;
                par.appendChild(Y)
            }
        };
        var F1 = function(Y) {
            var O = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            rand = '',
            i, n = O.length;
            for (i = Y; i--;) rand += O.charAt(Math.floor(Math.random() * n));
            return rand
        };
        var S = function() {
            if (!font_ext_reload) return - 1;
            var Y = Z.QS(options.selector, Z.d);
            for (var O = Y.length; O--;) {
                if (Y[O].getAttribute('data-fp-tmp-nst')) {
                    Y[O].style.fontFamily = Y[O].getAttribute('data-fp-tmp-nst');
                    Y[O].removeAttribute('data-fp-tmp-nst')
                }
            }
            font_ext_reload = false
        };
        var bh7 = function() {
            if (!font_ext) return - 1;
            font_ext_hist = [];
            for (var Y = 0; Y < use_fonts.length; Y++) {
                font_ext_hist.push({
                    'org': use_fonts[Y],
                    'ext': nicknames[Y]
                })
            }
            font_ext = false
        };
        var F7 = function(O, q) {
            if (!font_ext) return - 1;
            var Y = O.toLowerCase();
            for (q = font_ext_hist.length; q--&&Y != font_ext_hist[q].ext.toLowerCase(););
            return q
        };
        var U = function(O) {
            if (!f.trial) return;
            var q = 2,
            rsp = 2,
            img = Z.d.createElement('img'),
            s,
            fs = O.replace(/,/g, "\r\n");
            img.setAttribute('src', 'http' + (be1() ? 's': '') + '://' + f.server[0] + '/img/common/banner.gif');
            img.setAttribute('id', 'fontplus-trial-banner');
            img.setAttribute('class', 'fontplus-trial-banner');
            img.setAttribute('title', fs);
            s = img.style;
            s.position = 'fixed';
            s.bottom = q + 'px';
            s.right = rsp + 'px';
            s.cursor = 'pointer';
            s.zIndex = 2147483647;
            s.textDecoration = 'none';
            s.verticalAlign = 'baseline';
            s.outline = s.padding = s.margin = s.border = 0;
            if (Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7) || Z.b.n == 'I') {
                other_scroll = function() {
                    var Y, cw, st, sl;
                    if (Z.b.n == 'I') {
                        cw = window.innerWidth;
                        Y = window.innerHeight;
                        st = window.scrollY;
                        sl = window.scrollX
                    } else {
                        Y = Z.d.documentElement.clientHeight || Z.d.body.clientHeight || Z.d.clientHeight || 0;
                        cw = Z.d.documentElement.clientWidth || Z.d.body.clientWidth || Z.d.clientWidth || 0;
                        st = Z.d.documentElement.scrollTop || Z.d.body.scrollTop || Z.d.scrollTop || 0;
                        sl = Z.d.documentElement.scrollLeft || Z.d.body.scrollLeft || Z.d.scrollLeft || 0
                    }
                    s.top = (Y + st - img.height - rsp) + 'px';
                    s.left = (cw + sl - img.width - q) + 'px'
                };
                s.position = 'absolute';
                window.onscroll = window.onresize = other_scroll
            }
            Z.TN(Z.d, 'BODY')[0].appendChild(img);
            Z.E(img, 'click',
            function() {
                window.open('http://' + f.server[0] + '/')
            })
        };
        var p = function(Y) {
            if (String(Y).match(/\{pm\}$|---pm$/)) {
                return 1
            } else if (String(Y).match(/\{t=[0-9]+\}$|---t[0-9]+$/)) {
                return 2
            } else {
                return 0
            }
        };
        var O4 = function(q) {
            var O = p(q),
            orignalFont = null,
            value = null,
            proportionData = new Object();
            if (O == 1) {
                orignalFont = String(q).replace(/\{pm\}$|---pm$/, "");
                O = "pm";
                value = null
            } else if (O == 2) {
                orignalFont = String(q).replace(/\{t=[0-9]+\}$|---t[0-9]+$/, "");
                O = "t";
                var Y = String(q).match(/\{t=[0-9]+\}$|---t[0-9]+$/);
                value = String(Y).match(/[0-9]+/)
            }
            if (orignalFont) {
                proportionData['org'] = orignalFont;
                if (O) proportionData['mode'] = O;
                if (value) proportionData['value'] = value;
                return proportionData
            }
            return null
        };
        var E = function(Y) {
            var bd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', String.fromCharCode(43), String.fromCharCode(47)];
            var F = "";
            var q = Y.length;
            var O = 0;
            var bh = 0;
            var D = 0;
            while (D < q) {
                bh = Y.charCodeAt(D);
                if (bh > 0xff) {
                    return null
                }
                F += bd[(bh >> 2)];
                O = (bh & 0x03) << 4;
                D++;
                if (D >= q) {
                    break
                }
                bh = Y.charCodeAt(D);
                if (bh > 0xff) {
                    return null
                }
                F += bd[O | (bh >> 4)];
                O = (bh & 0x0f) << 2;
                D++;
                if (D >= q) {
                    break
                }
                bh = Y.charCodeAt(D);
                if (bh > 0xff) {
                    return null
                }
                F += bd[O | (bh >> 6)];
                F += bd[(bh & 0x3f)];
                D++
            }
            var be = q % 3;
            if (be) {
                F += bd[O]
            }
            if (be == 1) {
                F += "=="
            } else if (be == 2) {
                F += "="
            }
            return F9(F)
        };
        var F9 = function(Y) {
            return Y.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')
        };
        return f
    })();
    FontPlusAccessor.condition = 'fp_f1616e751829ffb77969a7b87790fd45';
    FontPlusAccessor.plusf = ["FOT-TsukuMin Pr5 L", "FOT-TsukuMin Pr5 L Regular", "FOT-TsukuMin Pr6 L", "FOT-TsukuMin Pr6 L Regular", "FOT-TsukuMin Pro L", "FOT-TsukuMin Pro L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 L", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 L", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro L", "FOT-\u7b51\u7d2b\u660e\u671d Pro L Regular", "TsukuMinPr5-L", "TsukuMinPr6-L", "TsukuMinPro-L", "FOT-TsukuMin Pr5 LB", "FOT-TsukuMin Pr5 LB Regular", "FOT-TsukuMin Pr6 LB", "FOT-TsukuMin Pr6 LB Regular", "FOT-TsukuMin Pro LB", "FOT-TsukuMin Pro LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro LB", "FOT-\u7b51\u7d2b\u660e\u671d Pro LB Regular", "TsukuMinPr5-LB", "TsukuMinPr6-LB", "TsukuMinPro-LB"];
    FontPlusAccessor.server = ['webfont.fontplus.jp', 'webfont.fontplus.jp'];
    FontPlusAccessor.trial = 0;
    FontPlusAccessor.seq = 1536296315;
    FontPlusAccessor.nolist = 0;
    FontPlusAccessor.delay = 0;
    FontPlusAccessor.timeout = 10;
    FontPlusAccessor.aa = 1;
    FontPlusAccessor.ab = 0;
    FontPlusAccessor.llt = 0;
    FontPlusAccessor.t = null;
    FontPlusAccessor.pm = null;
    FontPlusAccessor.cm = 300;
    FontPlusAccessor.exttype = '';
    FontPlusAccessor.ukey = 'RZc7Ks0OwhI';
    FontPlusAccessor.rl = 1;
    FontPlusAccessor.lsv = 'https://s3-ap-northeast-1.amazonaws.com/fontplus-sl/fontplus.gif?';
    FontPlusAccessor.bfurl = '://s3-ap-northeast-1.amazonaws.com/fp-bf/';
    FontPlusAccessor.bfnms = {
        'w': '3d4c80e6',
        'o': '5a348afb',
        't': 'ed60cc0b',
        'e': 'fb73ed3f'
    };
    FontPlusAccessor.box = 'jH4e6UJkVXs=';
    FontPlusAccessor.init();
    return FontPlusAccessor;
} ();
FONTPLUS = (function() {
    var a = FontPlus_f1616e751829ffb77969a7b87790fd45,
    options = {
        selector: '*',
        complete: false,
        callbacks: {},
        timeoutfunc: false,
        sync: true,
        size: false
    };
    var e = {
        config: function(b) {
            for (var c in b) {
                if (!b.hasOwnProperty(c)) continue;
                options[c] = b[c]
            }
        },
        reload: function(c) {
            a.reload(c)
        },
        attachCompleteEvent: function(c) {
            options.complete = c
        },
        targetSelector: function(c) {
            options.selector = c
        },
        load: function(d, b, c) {
            a.designate_load(d, b, c)
        },
        isloading: function() {
            return a.isloading()
        },
        setFonts: function(c) {
            a.setFonts(c)
        },
        ontimeout: function(c) {
            options.timeoutfunc = c
        },
        async: function() {
            options.sync = false
        },
        start: function() {
            a.reload(true)
        },
        size: function(c) {
            options.size = c
        }
    };
    a.setting(options);
    return e
})();