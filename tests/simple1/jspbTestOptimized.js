'use strict';

function aa(a) {
  var b = typeof a;
  if ("object" == b)
    if (a) {
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" !=
        typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          "splice")) return "array";
      if ("[object Function]" == c || "undefined" != typeof a.call &&
        "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
          "call")) return "function"
    } else return "null";
  else if ("function" == b && "undefined" == typeof a.call) return "object";
  return b
}

function k(a) {
  var b = l;

  function c() {}
  c.prototype = b.prototype;
  a.s = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.o = function(a, c, f) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
      d[e - 2] = arguments[e];
    return b.prototype[c].apply(a, d)
  }
};
var m = null,
  n = null;

function ba(a) {
  var b = new Uint8Array(Math.ceil(3 * a.length / 4)),
    c = 0;
  ca(a, function(a) {
    b[c++] = a
  });
  return b.subarray(0, c)
}

function ca(a, b) {
  function c(c) {
    for (; d < a.length;) {
      var b = a.charAt(d++),
        e = n[b];
      if (null != e) return e;
      if (!/^[\s\xa0]*$/.test(b)) throw Error(
        "Unknown base64 encoding at char: " + b);
    }
    return c
  }
  p();
  for (var d = 0;;) {
    var e = c(-1),
      f = c(0),
      g = c(64),
      h = c(64);
    if (64 === h && -1 === e) break;
    b(e << 2 | f >> 4);
    64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
  }
}

function p() {
  if (!m) {
    m = {};
    n = {};
    for (var a = 0; 65 > a; a++) m[a] =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        a), n[m[a]] = a, 62 <= a && (n[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(
          a)] = a)
  }
};
var da = JSON.parse,
  ea = JSON.stringify;

function l() {}
var q = "function" == typeof Uint8Array;

function u(a, b, c) {
  a.b = null;
  b || (b = []);
  a.j = void 0;
  a.f = -1;
  a.a = b;
  a: {
    if (a.a.length) {
      b = a.a.length - 1;
      var d = a.a[b];
      if (d && "object" == typeof d && "array" != aa(d) && !(q && d instanceof Uint8Array)) {
        a.g = b - a.f;
        a.c = d;
        break a
      }
    }
    a.g = Number.MAX_VALUE
  }
  a.i = {};
  if (c)
    for (b = 0; b < c.length; b++) d = c[b], d < a.g ? (d += a.f, a.a[d] = a.a[
      d] || v) : a.c[d] = a.c[d] || v
}
var v = [];

function w(a, b) {
  if (b < a.g) {
    b += a.f;
    var c = a.a[b];
    return c === v ? a.a[b] = [] : c
  }
  c = a.c[b];
  return c === v ? a.c[b] = [] : c
}

function x(a, b, c) {
  a = w(a, b);
  return null == a ? c : a
}

function y(a, b, c) {
  b < a.g ? a.a[b + a.f] = c : a.c[b] = c
}

function z(a, b, c) {
  a.b || (a.b = {});
  if (!a.b[c]) {
    var d = w(a, c);
    d && (a.b[c] = new b(d))
  }
  return a.b[c]
}

function A(a, b, c) {
  a.b || (a.b = {});
  var d = c ? c.a : c;
  a.b[b] = c;
  y(a, b, d)
}
var B = JSON && JSON.stringify || "object" === typeof JSON && JSON.stringify;
l.prototype.h = q ? function() {
  var a = Uint8Array.prototype.toJSON;
  Uint8Array.prototype.toJSON = function() {
    p();
    for (var a = m, b = [], e = 0; e < this.length; e += 3) {
      var f = this[e],
        g = e + 1 < this.length,
        h = g ? this[e + 1] : 0,
        t = e + 2 < this.length,
        r = t ? this[e + 2] : 0,
        ga = f >> 2,
        f = (f & 3) << 4 | h >> 4,
        h = (h & 15) << 2 | r >> 6,
        r = r & 63;
      t || (r = 64, g || (h = 64));
      b.push(a[ga], a[f], a[h], a[r])
    }
    return b.join("")
  };
  try {
    var b = B.call(null, this.a, C)
  } finally {
    Uint8Array.prototype.toJSON = a
  }
  return b
} : B ? function() {
  return B.call(null, this.a, C)
} : function() {
  return ea(this.a, C)
};

function C(a, b) {
  if ("number" == typeof b) {
    if (isNaN(b)) return "NaN";
    if (Infinity === b) return "Infinity";
    if (-Infinity === b) return "-Infinity"
  }
  return b
}
l.prototype.toString = function() {
  return this.a.toString()
};
var D = 0,
  E = 0;

function F(a, b, c) {
  this.b = null;
  this.g = this.h = this.a = this.f = this.i = 0;
  this.j = !1;
  a && G(this, a, b, c)
}
var H = [];

function G(a, b, c, d) {
  b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(
      b) : b.constructor === Array ? new Uint8Array(b) : b.constructor ===
    String ? ba(b) : new Uint8Array(0);
  a.b = b;
  a.i = void 0 !== c ? c : 0;
  a.f = void 0 !== d ? a.i + d : a.b.length;
  a.a = a.i
}
F.prototype.c = function() {
  var a, b = this.b;
  a = b[this.a + 0];
  var c = a & 127;
  if (128 > a) return this.a += 1, c;
  a = b[this.a + 1];
  c |= (a & 127) << 7;
  if (128 > a) return this.a += 2, c;
  a = b[this.a + 2];
  c |= (a & 127) << 14;
  if (128 > a) return this.a += 3, c;
  a = b[this.a + 3];
  c |= (a & 127) << 21;
  if (128 > a) return this.a += 4, c;
  a = b[this.a + 4];
  c |= (a & 15) << 28;
  if (128 > a) return this.a += 5, c >>> 0;
  this.a += 10;
  return c
};
F.prototype.l = F.prototype.c;

function I(a) {
  a: {
    for (var b, c = 0, d, e = 0; 4 > e; e++)
      if (b = a.b[a.a++], c |= (b & 127) << 7 * e, 128 > b) {
        a.h = c >>> 0;
        a.g = 0;
        break a
      }
    b = a.b[a.a++];c |= (b & 127) << 28;d = 0 | (b & 127) >> 4;
    if (128 > b) a.h = c >>> 0,
    a.g = d >>> 0;
    else {
      for (e = 0; 5 > e; e++)
        if (b = a.b[a.a++], d |= (b & 127) << 7 * e + 3, 128 > b) {
          a.h = c >>> 0;
          a.g = d >>> 0;
          break a
        }
      a.j = !0
    }
  }
  b = a.h;c = a.g;
  if (a = c & 2147483648) b = ~b + 1 >>> 0,
  c = ~c >>> 0,
  b || (c = c + 1 >>> 0);b = 4294967296 * c + b;
  return a ? -b : b
}

function J(a) {
  var b = a.b[a.a + 0],
    c = a.b[a.a + 1],
    d = a.b[a.a + 2],
    e = a.b[a.a + 3];
  a.a += 4;
  return (b << 0 | c << 8 | d << 16 | e << 24) >>> 0
}
F.prototype.m = function() {
  return !!this.b[this.a++]
};

function K() {
  this.a = []
}
K.prototype.length = function() {
  return this.a.length
};

function L(a) {
  var b = a.a;
  a.a = [];
  return b
}

function M(a, b) {
  for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
  a.a.push(b)
}

function N(a, b) {
  if (0 <= b) M(a, b);
  else {
    for (var c = 0; 9 > c; c++) a.a.push(b & 127 | 128), b >>= 7;
    a.a.push(1)
  }
}

function O(a, b) {
  a.a.push(b >>> 0 & 255);
  a.a.push(b >>> 8 & 255);
  a.a.push(b >>> 16 & 255);
  a.a.push(b >>> 24 & 255)
};

function fa(a) {
  if (H.length) {
    var b = H.pop();
    a && G(b, a, void 0, void 0);
    a = b
  } else a = new F(a, void 0, void 0);
  this.a = a;
  this.b = this.c = -1;
  this.f = !1
}

function P(a) {
  var b = a.a;
  (b = b.a == b.f) || (b = a.f) || (b = a.a, b = b.j || 0 > b.a || b.a > b.f);
  if (b) return !1;
  var b = a.a.c(),
    c = b & 7;
  if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.f = !0, !
    1;
  a.c = b >>> 3;
  a.b = c;
  return !0
}

function Q(a) {
  switch (a.b) {
    case 0:
      if (0 != a.b) Q(a);
      else {
        for (a = a.a; a.b[a.a] & 128;) a.a++;
        a.a++
      }
      break;
    case 1:
      1 != a.b ? Q(a) : (a = a.a, a.a += 8);
      break;
    case 2:
      if (2 != a.b) Q(a);
      else {
        var b = a.a.c();
        a = a.a;
        a.a += b
      }
      break;
    case 5:
      5 != a.b ? Q(a) : (a = a.a, a.a += 4);
      break;
    case 3:
      b = [a.c];
      do {
        if (!P(a)) {
          a.f = !0;
          break
        }
        if (3 == a.b) b.push(a.c);
        else if (4 == a.b && a.c != b.pop()) {
          a.f = !0;
          break
        }
      } while (0 < b.length)
  }
}

function R(a, b, c) {
  var d = a.a.f,
    e = a.a.c(),
    e = a.a.a + e;
  a.a.f = e;
  c(b, a);
  a.a.a = e;
  a.a.f = d
}

function ha(a) {
  var b = a.a.c();
  a = a.a;
  for (var c = a.b, d = a.a, b = d + b, e = [], f = ""; d < b;) {
    var g = c[d++];
    if (128 > g) e.push(g);
    else if (192 > g) continue;
    else if (224 > g) {
      var h = c[d++];
      e.push((g & 31) << 6 | h & 63)
    } else if (240 > g) {
      var h = c[d++],
        t = c[d++];
      e.push((g & 15) << 12 | (h & 63) << 6 | t & 63)
    } else if (248 > g) {
      var h = c[d++],
        t = c[d++],
        r = c[d++],
        g = (g & 7) << 18 | (h & 63) << 12 | (t & 63) << 6 | r & 63,
        g = g - 65536;
      e.push((g >> 10 & 1023) + 55296, (g & 1023) + 56320)
    }
    8192 <= e.length && (f += String.fromCharCode.apply(null, e), e.length = 0)
  }
  f += String.fromCharCode.apply(null, e);
  a.a = d;
  return f
}

function ia(a, b) {
  for (var c = a.a.c(), c = a.a.a + c, d = []; a.a.a < c;) d.push(b.call(a.a));
  return d
};

function ja() {
  this.c = [];
  this.b = 0;
  this.a = new K
}

function S(a, b) {
  T(a, b, 2);
  b = L(a.a);
  a.c.push(b);
  a.b += b.length;
  b.push(a.b);
  return b
}

function U(a, b) {
  for (var c = b.pop(), c = a.b + a.a.length() - c; 127 < c;) b.push(c & 127 |
    128), c >>>= 7, a.b++;
  b.push(c);
  a.b++
}

function T(a, b, c) {
  M(a.a, 8 * b + c)
}

function ka(a, b, c) {
  if (null != c) {
    b = S(a, b);
    for (var d = a.a, e = 0; e < c.length; e++) {
      var f = c.charCodeAt(e);
      if (128 > f) d.a.push(f);
      else if (2048 > f) d.a.push(f >> 6 | 192), d.a.push(f & 63 | 128);
      else if (65536 > f)
        if (55296 <= f && 56319 >= f && e + 1 < c.length) {
          var g = c.charCodeAt(e + 1);
          56320 <= g && 57343 >= g && (f = 1024 * (f - 55296) + g - 56320 +
            65536, d.a.push(f >> 18 | 240), d.a.push(f >> 12 & 63 | 128), d.a
            .push(f >> 6 & 63 | 128), d.a.push(f & 63 | 128), e++)
        } else d.a.push(f >> 12 | 224), d.a.push(f >> 6 & 63 | 128), d.a.push(f &
          63 | 128)
    }
    U(a, b)
  }
}

function V(a, b, c, d) {
  null != c && (b = S(a, b), d(c, a), U(a, b))
};

function W(a) {
  u(this, a, la)
}
k(W);
var la = [5, 6];

function X(a) {
  u(this, a, null)
}
k(X);

function ma(a, b) {
  for (; P(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c = b.a.l();
      y(a, 1, c);
      break;
    case 2:
      c = new Y;
      R(b, c, na);
      A(a, 2, c);
      break;
    case 3:
      c = new Z;
      R(b, c, oa);
      A(a, 3, c);
      break;
    default:
      Q(b)
  }
  return a
}

function pa(a, b) {
  var c;
  (c = x(a, 1, 0)) && null != c && null != c && (T(b, 1, 0), N(b.a, c));
  (c = z(a, Y, 2)) && V(b, 2, c, qa);
  (c = z(a, Z, 3)) && V(b, 3, c, ra)
}

function Y(a) {
  u(this, a, null)
}
k(Y);

function na(a, b) {
  for (; P(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c = I(b.a);
      y(a, 1, c);
      break;
    case 2:
      c = I(b.a);
      y(a, 2, c);
      break;
    case 3:
      c = b.a.c();
      c = c >>> 1 ^ -(c & 1);
      y(a, 3, c);
      break;
    default:
      Q(b)
  }
  return a
}

function qa(a, b) {
  var c;
  if ((c = x(a, 1, 0)) && null != c) {
    var d = c;
    if (null != d) {
      T(b, 1, 0);
      c = b.a;
      var e = d,
        d = 0 > e,
        e = Math.abs(e),
        f = e >>> 0,
        e = Math.floor((e - f) / 4294967296),
        e = e >>> 0;
      d && (e = ~e >>> 0, f = (~f >>> 0) + 1, 4294967295 < f && (f = 0, e++,
        4294967295 < e && (e = 0)));
      D = f;
      E = e;
      d = D;
      for (f = E; 0 < f || 127 < d;) c.a.push(d & 127 | 128), d = (d >>> 7 | f <<
        25) >>> 0, f >>>= 7;
      c.a.push(d)
    }
  }
  c = x(a, 2, 0);
  0 !== c && null != c && (T(b, 2, 0), N(b.a, c));
  (c = x(a, 3, 0)) && null != c && (a = c, null != a && (T(b, 3, 0), M(b.a, (a <<
    1 ^ a >> 31) >>> 0)))
}

function Z(a) {
  u(this, a, sa)
}
k(Z);
var sa = [1];

function oa(a, b) {
  for (; P(b) && 4 != b.b;) switch (b.c) {
    case 1:
      var c = ia(b, b.a.m);
      y(a, 1, c || []);
      break;
    case 2:
      var d = b.a,
        c = J(d),
        e = J(d),
        d = 2 * (e >> 31) + 1,
        f = e >>> 20 & 2047,
        c = 4294967296 * (e & 1048575) + c,
        c = 2047 == f ? c ? NaN : Infinity * d : f ? d * Math.pow(2, f - 1075) *
        (c + 4503599627370496) : d * Math.pow(2, -1074) * c;
      y(a, 2, c);
      break;
    default:
      Q(b)
  }
  return a
}

function ra(a, b) {
  var c;
  c = w(a, 1);
  if (0 < c.length && c && c.length) {
    T(b, 1, 2);
    M(b.a, c.length);
    for (var d = 0; d < c.length; d++) b.a.a.push(c[d] ? 1 : 0)
  }
  if (c = +x(a, 2, 0)) a = c, null != a && (T(b, 2, 1), b = b.a, d = a, (d = (a =
      0 > d ? 1 : 0) ? -d : d) ? isNaN(d) ? (E = 2147483647, D = 4294967295) :
    1.7976931348623157E308 < d ? (E = (a << 31 | 2146435072) >>> 0, D = 0) :
    2.2250738585072014E-308 > d ? (d /= Math.pow(2, -1074), E = (a << 31 | d /
      4294967296) >>> 0, D = d >>> 0) : (c = Math.floor(Math.log(d) / Math.LN2),
      1024 == c && (c = 1023), d *= Math.pow(2, -c), E = (a << 31 | c + 1023 <<
        20 | 1048576 * d & 1048575) >>> 0, D = 4503599627370496 *
      d >>> 0) : (E = 0 < 1 / d ? 0 : 2147483648, D = 0), O(b, D), O(b, E))
};
module.exports.deserializeBinaryTest = function(a) {
  a = new fa(a);
  for (var b = new W; P(a) && 4 != a.b;) switch (a.c) {
    case 1:
      var c = ha(a);
      y(b, 1, c);
      break;
    case 2:
      c = a.a.c();
      y(b, 2, c);
      break;
    case 3:
      c = new X;
      R(a, c, ma);
      A(b, 3, c);
      break;
    case 4:
      var d = J(a.a),
        c = 2 * (d >> 31) + 1,
        e = d >>> 23 & 255,
        d = d & 8388607,
        c = 255 == e ? d ? NaN : Infinity * c : e ? c * Math.pow(2, e - 150) *
        (d + Math.pow(2, 23)) : c * Math.pow(2, -149) * d;
      y(b, 4, c);
      break;
    case 5:
      c = ia(a, a.a.l);
      y(b, 5, c || []);
      break;
    case 6:
      c = ha(a);
      w(b, 6).push(c);
      break;
    default:
      Q(a)
  }
  return b
};
module.exports.serializeBinaryTest = function(a) {
  var b = new ja,
    c;
  c = x(a, 1, "");
  0 < c.length && ka(b, 1, c);
  (c = x(a, 2, 0)) && null != c && null != c && (T(b, 2, 0), M(b.a, c));
  (c = z(a, X, 3)) && V(b, 3, c, pa);
  if (c = +x(a, 4, 0)) {
    var d = c;
    if (null != d) {
      T(b, 4, 5);
      c = b.a;
      var e = d,
        e = (d = 0 > e ? 1 : 0) ? -e : e,
        f;
      e ? isNaN(e) ? (E = 0, D = 2147483647) : 3.4028234663852886E38 < e ? (E =
          0, D = (d << 31 | 2139095040) >>> 0) : 1.1754943508222875E-38 > e ?
        (e = Math.round(e / Math.pow(2, -149)), E = 0, D = (d << 31 | e) >>>
          0) : (f = Math.floor(Math.log(e) / Math.LN2), e *= Math.pow(2, -f),
          e = Math.round(8388608 * e) & 8388607, E = 0,
          D = (d << 31 | f + 127 << 23 | e) >>> 0) : 0 < 1 / e ? D = E = 0 :
        (E = 0, D = 2147483648);
      O(c, D)
    }
  }
  c = w(a, 5);
  if (0 < c.length && c && c.length) {
    d = S(b, 5);
    for (f = 0; f < c.length; f++) N(b.a, c[f]);
    U(b, d)
  }
  c = w(a, 6);
  if (0 < c.length && (a = c))
    for (c = 0; c < a.length; c++) ka(b, 6, a[c]);
  a = new Uint8Array(b.b + b.a.length());
  d = b.c;
  f = d.length;
  for (e = c = 0; e < f; e++) {
    var g = d[e];
    a.set(g, c);
    c += g.length
  }
  d = L(b.a);
  a.set(d, c);
  b.c = [a];
  return a
};
module.exports.deserializeJspbTest = function(a) {
  return new W(da(a))
};
module.exports.serializeTextTest = function(a) {
  return a.h()
};
