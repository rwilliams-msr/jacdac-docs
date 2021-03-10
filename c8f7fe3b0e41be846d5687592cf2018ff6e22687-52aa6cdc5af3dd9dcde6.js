(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "+IsV":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/** @license React v0.26.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  'use strict';

  var aa = __webpack_require__("YVoz"),
      ba = __webpack_require__("q1tI"),
      m = __webpack_require__("QCnb");

  function q(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      da = 60103,
      ea = 60106,
      fa = 60107,
      ha = 60108,
      ia = 60114,
      ja = 60109,
      ka = 60110,
      la = 60112,
      ma = 60113,
      na = 60120,
      oa = 60115,
      pa = 60116,
      qa = 60121,
      ra = 60129,
      sa = 60130,
      ta = 60131;

  if ("function" === typeof Symbol && Symbol.for) {
    var r = Symbol.for;
    da = r("react.element");
    ea = r("react.portal");
    fa = r("react.fragment");
    ha = r("react.strict_mode");
    ia = r("react.profiler");
    ja = r("react.provider");
    ka = r("react.context");
    la = r("react.forward_ref");
    ma = r("react.suspense");
    na = r("react.suspense_list");
    oa = r("react.memo");
    pa = r("react.lazy");
    qa = r("react.block");
    r("react.scope");
    ra = r("react.debug_trace_mode");
    sa = r("react.offscreen");
    ta = r("react.legacy_hidden");
  }

  var ua = "function" === typeof Symbol && Symbol.iterator;

  function va(a) {
    if (null === a || "object" !== typeof a) return null;
    a = ua && a[ua] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function wa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case fa:
        return "Fragment";

      case ea:
        return "Portal";

      case ia:
        return "Profiler";

      case ha:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === typeof a) switch (a.$$typeof) {
      case ka:
        return (a.displayName || "Context") + ".Consumer";

      case ja:
        return (a._context.displayName || "Context") + ".Provider";

      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case oa:
        return wa(a.type);

      case qa:
        return wa(a._render);

      case pa:
        b = a._payload;
        a = a._init;

        try {
          return wa(a(b));
        } catch (c) {}

    }
    return null;
  }

  function xa(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b.return;) {
      b = b.return;
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return;
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function ya(a) {
    if (xa(a) !== a) throw Error(q(188));
  }

  function za(a) {
    var b = a.alternate;

    if (!b) {
      b = xa(a);
      if (null === b) throw Error(q(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ya(e), a;
          if (f === d) return ya(e), b;
          f = f.sibling;
        }

        throw Error(q(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(q(189));
        }
      }
      if (c.alternate !== d) throw Error(q(190));
    }

    if (3 !== c.tag) throw Error(q(188));
    return c.stateNode.current === c ? a : b;
  }

  function Aa(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ba(a) {
    a = za(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function Ca(a, b) {
    for (var c = a.alternate; null !== b;) {
      if (b === a || b === c) return !0;
      b = b.return;
    }

    return !1;
  }

  var Da = $$$hostConfig.getPublicInstance,
      Ea = $$$hostConfig.getRootHostContext,
      Fa = $$$hostConfig.getChildHostContext,
      Ga = $$$hostConfig.prepareForCommit,
      Ha = $$$hostConfig.resetAfterCommit,
      Ia = $$$hostConfig.createInstance,
      Ja = $$$hostConfig.appendInitialChild,
      Ka = $$$hostConfig.finalizeInitialChildren,
      La = $$$hostConfig.prepareUpdate,
      Ma = $$$hostConfig.shouldSetTextContent,
      Na = $$$hostConfig.createTextInstance,
      Pa = $$$hostConfig.scheduleTimeout,
      Qa = $$$hostConfig.cancelTimeout,
      Ra = $$$hostConfig.noTimeout,
      Sa = $$$hostConfig.isPrimaryRenderer,
      Ta = $$$hostConfig.supportsMutation,
      Ua = $$$hostConfig.supportsPersistence,
      Va = $$$hostConfig.supportsHydration,
      Wa = $$$hostConfig.getInstanceFromNode,
      Xa = $$$hostConfig.makeOpaqueHydratingObject,
      Ya = $$$hostConfig.makeClientId,
      Za = $$$hostConfig.beforeActiveInstanceBlur,
      $a = $$$hostConfig.afterActiveInstanceBlur,
      ab = $$$hostConfig.preparePortalMount,
      bb = $$$hostConfig.supportsTestSelectors,
      cb = $$$hostConfig.findFiberRoot,
      db = $$$hostConfig.getBoundingRect,
      eb = $$$hostConfig.getTextContent,
      fb = $$$hostConfig.isHiddenSubtree,
      gb = $$$hostConfig.matchAccessibilityRole,
      hb = $$$hostConfig.setFocusIfFocusable,
      ib = $$$hostConfig.setupIntersectionObserver,
      jb = $$$hostConfig.appendChild,
      kb = $$$hostConfig.appendChildToContainer,
      lb = $$$hostConfig.commitTextUpdate,
      mb = $$$hostConfig.commitMount,
      nb = $$$hostConfig.commitUpdate,
      ob = $$$hostConfig.insertBefore,
      pb = $$$hostConfig.insertInContainerBefore,
      qb = $$$hostConfig.removeChild,
      rb = $$$hostConfig.removeChildFromContainer,
      sb = $$$hostConfig.resetTextContent,
      tb = $$$hostConfig.hideInstance,
      ub = $$$hostConfig.hideTextInstance,
      vb = $$$hostConfig.unhideInstance,
      wb = $$$hostConfig.unhideTextInstance,
      xb = $$$hostConfig.clearContainer,
      yb = $$$hostConfig.cloneInstance,
      zb = $$$hostConfig.createContainerChildSet,
      Ab = $$$hostConfig.appendChildToContainerChildSet,
      Bb = $$$hostConfig.finalizeContainerChildren,
      Cb = $$$hostConfig.replaceContainerChildren,
      Db = $$$hostConfig.cloneHiddenInstance,
      Eb = $$$hostConfig.cloneHiddenTextInstance,
      Fb = $$$hostConfig.canHydrateInstance,
      Gb = $$$hostConfig.canHydrateTextInstance,
      Hb = $$$hostConfig.isSuspenseInstancePending,
      Ib = $$$hostConfig.isSuspenseInstanceFallback,
      Jb = $$$hostConfig.getNextHydratableSibling,
      Kb = $$$hostConfig.getFirstHydratableChild,
      Lb = $$$hostConfig.hydrateInstance,
      Mb = $$$hostConfig.hydrateTextInstance,
      Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      Ob = $$$hostConfig.commitHydratedContainer,
      Pb = $$$hostConfig.commitHydratedSuspenseInstance,
      Qb;

  function Rb(a) {
    if (void 0 === Qb) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Qb = b && b[1] || "";
    }
    return "\n" + Qb + a;
  }

  var Sb = !1;

  function Tb(a, b) {
    if (!a || Sb) return "";
    Sb = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }

        a();
      }
    } catch (k) {
      if (k && d && "string" === typeof k.stack) {
        for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at ");
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      Sb = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? Rb(a) : "";
  }

  var Ub = [],
      Vb = -1;

  function Wb(a) {
    return {
      current: a
    };
  }

  function z(a) {
    0 > Vb || (a.current = Ub[Vb], Ub[Vb] = null, Vb--);
  }

  function A(a, b) {
    Vb++;
    Ub[Vb] = a.current;
    a.current = b;
  }

  var Xb = {},
      B = Wb(Xb),
      D = Wb(!1),
      Yb = Xb;

  function Zb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Xb;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function E(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function $b() {
    z(D);
    z(B);
  }

  function ac(a, b, c) {
    if (B.current !== Xb) throw Error(q(168));
    A(B, b);
    A(D, c);
  }

  function bc(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(q(108, wa(b) || "Unknown", e));
    }

    return aa({}, c, d);
  }

  function cc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Xb;
    Yb = B.current;
    A(B, a);
    A(D, D.current);
    return !0;
  }

  function dc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(q(169));
    c ? (a = bc(a, b, Yb), d.__reactInternalMemoizedMergedChildContext = a, z(D), z(B), A(B, a)) : z(D);
    A(D, c);
  }

  var ec = null,
      fc = null,
      gc = m.unstable_now;
  gc();
  var hc = 0,
      F = 8;

  function ic(a) {
    if (0 !== (1 & a)) return F = 15, 1;
    if (0 !== (2 & a)) return F = 14, 2;
    if (0 !== (4 & a)) return F = 13, 4;
    var b = 24 & a;
    if (0 !== b) return F = 12, b;
    if (0 !== (a & 32)) return F = 11, 32;
    b = 192 & a;
    if (0 !== b) return F = 10, b;
    if (0 !== (a & 256)) return F = 9, 256;
    b = 3584 & a;
    if (0 !== b) return F = 8, b;
    if (0 !== (a & 4096)) return F = 7, 4096;
    b = 4186112 & a;
    if (0 !== b) return F = 6, b;
    b = 62914560 & a;
    if (0 !== b) return F = 5, b;
    if (a & 67108864) return F = 4, 67108864;
    if (0 !== (a & 134217728)) return F = 3, 134217728;
    b = 805306368 & a;
    if (0 !== b) return F = 2, b;
    if (0 !== (1073741824 & a)) return F = 1, 1073741824;
    F = 8;
    return a;
  }

  function jc(a) {
    switch (a) {
      case 99:
        return 15;

      case 98:
        return 10;

      case 97:
      case 96:
        return 8;

      case 95:
        return 2;

      default:
        return 0;
    }
  }

  function kc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;

      case 13:
      case 12:
      case 11:
      case 10:
        return 98;

      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;

      case 3:
      case 2:
      case 1:
        return 95;

      case 0:
        return 90;

      default:
        throw Error(q(358, a));
    }
  }

  function lc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return F = 0;
    var d = 0,
        e = 0,
        f = a.expiredLanes,
        g = a.suspendedLanes,
        h = a.pingedLanes;
    if (0 !== f) d = f, e = F = 15;else if (f = c & 134217727, 0 !== f) {
      var k = f & ~g;
      0 !== k ? (d = ic(k), e = F) : (h &= f, 0 !== h && (d = ic(h), e = F));
    } else f = c & ~g, 0 !== f ? (d = ic(f), e = F) : 0 !== h && (d = ic(h), e = F);
    if (0 === d) return 0;
    d = 31 - mc(d);
    d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

    if (0 !== b && b !== d && 0 === (b & g)) {
      ic(b);
      if (e <= F) return b;
      F = e;
    }

    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - mc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function nc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function oc(a, b) {
    switch (a) {
      case 15:
        return 1;

      case 14:
        return 2;

      case 12:
        return a = pc(24 & ~b), 0 === a ? oc(10, b) : a;

      case 10:
        return a = pc(192 & ~b), 0 === a ? oc(8, b) : a;

      case 8:
        return a = pc(3584 & ~b), 0 === a && (a = pc(4186112 & ~b), 0 === a && (a = 512)), a;

      case 2:
        return b = pc(805306368 & ~b), 0 === b && (b = 268435456), b;
    }

    throw Error(q(358, a));
  }

  function pc(a) {
    return a & -a;
  }

  function qc(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function rc(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - mc(b);
    a[b] = c;
  }

  var mc = Math.clz32 ? Math.clz32 : sc,
      tc = Math.log,
      uc = Math.LN2;

  function sc(a) {
    return 0 === a ? 32 : 31 - (tc(a) / uc | 0) | 0;
  }

  var vc = m.unstable_runWithPriority,
      wc = m.unstable_scheduleCallback,
      xc = m.unstable_cancelCallback,
      yc = m.unstable_shouldYield,
      zc = m.unstable_requestPaint,
      Ac = m.unstable_now,
      Bc = m.unstable_getCurrentPriorityLevel,
      Cc = m.unstable_ImmediatePriority,
      Dc = m.unstable_UserBlockingPriority,
      Ec = m.unstable_NormalPriority,
      Fc = m.unstable_LowPriority,
      Gc = m.unstable_IdlePriority,
      Hc = {},
      Ic = void 0 !== zc ? zc : function () {},
      Jc = null,
      Kc = null,
      Lc = !1,
      Mc = Ac(),
      G = 1E4 > Mc ? Ac : function () {
    return Ac() - Mc;
  };

  function Nc() {
    switch (Bc()) {
      case Cc:
        return 99;

      case Dc:
        return 98;

      case Ec:
        return 97;

      case Fc:
        return 96;

      case Gc:
        return 95;

      default:
        throw Error(q(332));
    }
  }

  function Oc(a) {
    switch (a) {
      case 99:
        return Cc;

      case 98:
        return Dc;

      case 97:
        return Ec;

      case 96:
        return Fc;

      case 95:
        return Gc;

      default:
        throw Error(q(332));
    }
  }

  function Pc(a, b) {
    a = Oc(a);
    return vc(a, b);
  }

  function Qc(a, b, c) {
    a = Oc(a);
    return wc(a, b, c);
  }

  function H() {
    if (null !== Kc) {
      var a = Kc;
      Kc = null;
      xc(a);
    }

    Rc();
  }

  function Rc() {
    if (!Lc && null !== Jc) {
      Lc = !0;
      var a = 0;

      try {
        var b = Jc;
        Pc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        Jc = null;
      } catch (c) {
        throw null !== Jc && (Jc = Jc.slice(a + 1)), wc(Cc, H), c;
      } finally {
        Lc = !1;
      }
    }
  }

  var Sc = ca.ReactCurrentBatchConfig;

  function Tc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var I = "function" === typeof Object.is ? Object.is : Tc,
      Uc = Object.prototype.hasOwnProperty;

  function Vc(a, b) {
    if (I(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!Uc.call(b, c[d]) || !I(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function Wc(a) {
    switch (a.tag) {
      case 5:
        return Rb(a.type);

      case 16:
        return Rb("Lazy");

      case 13:
        return Rb("Suspense");

      case 19:
        return Rb("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = Tb(a.type, !1), a;

      case 11:
        return a = Tb(a.type.render, !1), a;

      case 22:
        return a = Tb(a.type._render, !1), a;

      case 1:
        return a = Tb(a.type, !0), a;

      default:
        return "";
    }
  }

  function Xc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var Yc = Wb(null),
      Zc = null,
      $c = null,
      ad = null;

  function bd() {
    ad = $c = Zc = null;
  }

  function cd(a, b) {
    a = a.type._context;
    Sa ? (A(Yc, a._currentValue), a._currentValue = b) : (A(Yc, a._currentValue2), a._currentValue2 = b);
  }

  function dd(a) {
    var b = Yc.current;
    z(Yc);
    a = a.type._context;
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }

  function ed(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if ((a.childLanes & b) === b) {
        if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
      } else a.childLanes |= b, null !== c && (c.childLanes |= b);
      a = a.return;
    }
  }

  function fd(a, b) {
    Zc = a;
    ad = $c = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (gd = !0), a.firstContext = null);
  }

  function J(a, b) {
    if (ad !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) ad = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === $c) {
        if (null === Zc) throw Error(q(308));
        $c = b;
        Zc.dependencies = {
          lanes: 0,
          firstContext: b,
          responders: null
        };
      } else $c = $c.next = b;
    }

    return Sa ? a._currentValue : a._currentValue2;
  }

  var hd = !1;

  function id(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }

  function jd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function kd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function md(a, b) {
    a = a.updateQueue;

    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }

  function nd(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function od(a, b, c, d) {
    var e = a.updateQueue;
    hd = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;

      if (null !== n) {
        n = n.updateQueue;
        var t = n.lastBaseUpdate;
        t !== g && (null === t ? n.firstBaseUpdate = l : t.next = l, n.lastBaseUpdate = k);
      }
    }

    if (null !== f) {
      t = e.baseState;
      g = 0;
      n = l = k = null;

      do {
        h = f.lane;
        var p = f.eventTime;

        if ((d & h) === h) {
          null !== n && (n = n.next = {
            eventTime: p,
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          });

          a: {
            var y = a,
                x = f;
            h = b;
            p = c;

            switch (x.tag) {
              case 1:
                y = x.payload;

                if ("function" === typeof y) {
                  t = y.call(p, t, h);
                  break a;
                }

                t = y;
                break a;

              case 3:
                y.flags = y.flags & -4097 | 64;

              case 0:
                y = x.payload;
                h = "function" === typeof y ? y.call(p, t, h) : y;
                if (null === h || void 0 === h) break a;
                t = aa({}, t, h);
                break a;

              case 2:
                hd = !0;
            }
          }

          null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
        } else p = {
          eventTime: p,
          lane: h,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        }, null === n ? (l = n = p, k = t) : n = n.next = p, g |= h;

        f = f.next;
        if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
      } while (1);

      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      pd |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }

  function qd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(q(191, e));
        e.call(d);
      }
    }
  }

  var rd = new ba.Component().refs;

  function sd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var vd = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? xa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = K(),
          e = td(a),
          f = kd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      md(a, f);
      ud(a, e, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = K(),
          d = td(a),
          e = kd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      md(a, e);
      ud(a, d, c);
    }
  };

  function wd(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Vc(c, d) || !Vc(e, f) : !0;
  }

  function xd(a, b, c) {
    var d = !1,
        e = Xb;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = J(f) : (e = E(b) ? Yb : B.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Zb(a, e) : Xb);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = vd;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function yd(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && vd.enqueueReplaceState(b, b.state, null);
  }

  function zd(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = rd;
    id(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = J(f) : (f = E(b) ? Yb : B.current, e.context = Zb(a, f));
    od(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (sd(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && vd.enqueueReplaceState(e, e.state, null), od(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4);
  }

  var Ad = Array.isArray;

  function Bd(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(q(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(q(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(a) {
          var b = d.refs;
          b === rd && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(q(284));
      if (!c._owner) throw Error(q(290, a));
    }

    return a;
  }

  function Cd(a, b) {
    if ("textarea" !== a.type) throw Error(q(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
  }

  function Dd(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.flags = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = Ed(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
      b.flags = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Fd(c, a.mode, d), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Bd(a, b, c), d.return = a, d;
      d = Gd(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Bd(a, b, c);
      d.return = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Hd(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }

    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Id(c, a.mode, d, f), b.return = a, b;
      b = e(b, c);
      b.return = a;
      return b;
    }

    function t(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Fd("" + b, a.mode, c), b.return = a, b;

      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case da:
            return c = Gd(b.type, b.key, b.props, null, a.mode, c), c.ref = Bd(a, null, b), c.return = a, c;

          case ea:
            return b = Hd(b, a.mode, c), b.return = a, b;
        }

        if (Ad(b) || va(b)) return b = Id(b, a.mode, c, null), b.return = a, b;
        Cd(a, b);
      }

      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case da:
            return c.key === e ? c.type === fa ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

          case ea:
            return c.key === e ? l(a, b, c, d) : null;
        }

        if (Ad(c) || va(c)) return null !== e ? null : n(a, b, c, d, null);
        Cd(a, c);
      }

      return null;
    }

    function y(a, b, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case da:
            return a = a.get(null === d.key ? c : d.key) || null, d.type === fa ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        }

        if (Ad(d) || va(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        Cd(b, d);
      }

      return null;
    }

    function x(e, g, h, k) {
      for (var l = null, v = null, u = g, C = g = 0, n = null; null !== u && C < h.length; C++) {
        u.index > C ? (n = u, u = null) : n = u.sibling;
        var w = p(e, u, h[C], k);

        if (null === w) {
          null === u && (u = n);
          break;
        }

        a && u && null === w.alternate && b(e, u);
        g = f(w, g, C);
        null === v ? l = w : v.sibling = w;
        v = w;
        u = n;
      }

      if (C === h.length) return c(e, u), l;

      if (null === u) {
        for (; C < h.length; C++) {
          u = t(e, h[C], k), null !== u && (g = f(u, g, C), null === v ? l = u : v.sibling = u, v = u);
        }

        return l;
      }

      for (u = d(e, u); C < h.length; C++) {
        n = y(u, e, C, h[C], k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? C : n.key), g = f(n, g, C), null === v ? l = n : v.sibling = n, v = n);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    function Y(e, g, h, k) {
      var l = va(h);
      if ("function" !== typeof l) throw Error(q(150));
      h = l.call(h);
      if (null == h) throw Error(q(151));

      for (var u = l = null, v = g, n = g = 0, C = null, w = h.next(); null !== v && !w.done; n++, w = h.next()) {
        v.index > n ? (C = v, v = null) : C = v.sibling;
        var x = p(e, v, w.value, k);

        if (null === x) {
          null === v && (v = C);
          break;
        }

        a && v && null === x.alternate && b(e, v);
        g = f(x, g, n);
        null === u ? l = x : u.sibling = x;
        u = x;
        v = C;
      }

      if (w.done) return c(e, v), l;

      if (null === v) {
        for (; !w.done; n++, w = h.next()) {
          w = t(e, w.value, k), null !== w && (g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
        }

        return l;
      }

      for (v = d(e, v); !w.done; n++, w = h.next()) {
        w = y(v, e, n, w.value, k), null !== w && (a && null !== w.alternate && v.delete(null === w.key ? n : w.key), g = f(w, g, n), null === u ? l = w : u.sibling = w, u = w);
      }

      a && v.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    return function (a, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === fa && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case da:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === fa) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }

                    break;

                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Bd(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }

                }

                c(a, k);
                break;
              } else b(a, k);

              k = k.sibling;
            }

            f.type === fa ? (d = Id(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Gd(f.type, f.key, f.props, null, a.mode, h), h.ref = Bd(a, d, f), h.return = a, a = h);
          }

          return g(a);

        case ea:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = Hd(f, a.mode, h);
            d.return = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Fd(f, a.mode, h), d.return = a, a = d), g(a);
      if (Ad(f)) return x(a, d, f, h);
      if (va(f)) return Y(a, d, f, h);
      l && Cd(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(q(152, wa(a.type) || "Component"));
      }
      return c(a, d);
    };
  }

  var Jd = Dd(!0),
      Kd = Dd(!1),
      Ld = {},
      L = Wb(Ld),
      Md = Wb(Ld),
      Nd = Wb(Ld);

  function Od(a) {
    if (a === Ld) throw Error(q(174));
    return a;
  }

  function Pd(a, b) {
    A(Nd, b);
    A(Md, a);
    A(L, Ld);
    a = Ea(b);
    z(L);
    A(L, a);
  }

  function Qd() {
    z(L);
    z(Md);
    z(Nd);
  }

  function Rd(a) {
    var b = Od(Nd.current),
        c = Od(L.current);
    b = Fa(c, a.type, b);
    c !== b && (A(Md, a), A(L, b));
  }

  function Sd(a) {
    Md.current === a && (z(L), z(Md));
  }

  var M = Wb(0);

  function Td(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Hb(c) || Ib(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }

    return null;
  }

  var Ud = null,
      Vd = null,
      Wd = !1;

  function Xd(a, b) {
    var c = Yd(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function Zd(a, b) {
    switch (a.tag) {
      case 5:
        return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function $d(a) {
    if (Wd) {
      var b = Vd;

      if (b) {
        var c = b;

        if (!Zd(a, b)) {
          b = Jb(c);

          if (!b || !Zd(a, b)) {
            a.flags = a.flags & -1025 | 2;
            Wd = !1;
            Ud = a;
            return;
          }

          Xd(Ud, c);
        }

        Ud = a;
        Vd = Kb(b);
      } else a.flags = a.flags & -1025 | 2, Wd = !1, Ud = a;
    }
  }

  function ae(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a.return;
    }

    Ud = a;
  }

  function be(a) {
    if (!Va || a !== Ud) return !1;
    if (!Wd) return ae(a), Wd = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ma(b, a.memoizedProps)) for (b = Vd; b;) {
      Xd(a, b), b = Jb(b);
    }
    ae(a);

    if (13 === a.tag) {
      if (!Va) throw Error(q(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(q(317));
      Vd = Nb(a);
    } else Vd = Ud ? Jb(a.stateNode) : null;

    return !0;
  }

  function ce() {
    Va && (Vd = Ud = null, Wd = !1);
  }

  var de = [];

  function ee() {
    for (var a = 0; a < de.length; a++) {
      var b = de[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }

    de.length = 0;
  }

  var fe = ca.ReactCurrentDispatcher,
      ge = ca.ReactCurrentBatchConfig,
      he = 0,
      N = null,
      O = null,
      P = null,
      ie = !1,
      je = !1;

  function Q() {
    throw Error(q(321));
  }

  function ke(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!I(a[c], b[c])) return !1;
    }

    return !0;
  }

  function le(a, b, c, d, e, f) {
    he = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    fe.current = null === a || null === a.memoizedState ? me : ne;
    a = c(d, e);

    if (je) {
      f = 0;

      do {
        je = !1;
        if (!(25 > f)) throw Error(q(301));
        f += 1;
        P = O = null;
        b.updateQueue = null;
        fe.current = oe;
        a = c(d, e);
      } while (je);
    }

    fe.current = pe;
    b = null !== O && null !== O.next;
    he = 0;
    P = O = N = null;
    ie = !1;
    if (b) throw Error(q(300));
    return a;
  }

  function qe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }

  function re() {
    if (null === O) {
      var a = N.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = O.next;

    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;else {
      if (null === a) throw Error(q(310));
      O = a;
      a = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null
      };
      null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }

  function se(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function te(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = O,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
          k = e;

      do {
        var l = k.lane;
        if ((he & l) === l) null !== h && (h = h.next = {
          lane: 0,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = n, f = d) : h = h.next = n;
          N.lanes |= l;
          pd |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);

      null === h ? f = d : h.next = g;
      I(d, b.memoizedState) || (gd = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }

    return [b.memoizedState, c.dispatch];
  }

  function ue(a) {
    var b = re(),
        c = b.queue;
    if (null === c) throw Error(q(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      I(f, b.memoizedState) || (gd = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function ve(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = Sa ? b._workInProgressVersionPrimary : b._workInProgressVersionSecondary;
    if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (he & a) === a) Sa ? b._workInProgressVersionPrimary = d : b._workInProgressVersionSecondary = d, de.push(b);
    if (a) return c(b._source);
    de.push(b);
    throw Error(q(350));
  }

  function we(a, b, c, d) {
    var e = R;
    if (null === e) throw Error(q(349));
    var f = b._getVersion,
        g = f(b._source),
        h = fe.current,
        k = h.useState(function () {
      return ve(e, b, c);
    }),
        l = k[1],
        n = k[0];
    k = P;
    var t = a.memoizedState,
        p = t.refs,
        y = p.getSnapshot,
        x = t.source;
    t = t.subscribe;
    var Y = N;
    a.memoizedState = {
      refs: p,
      source: b,
      subscribe: d
    };
    h.useEffect(function () {
      p.getSnapshot = c;
      p.setSnapshot = l;
      var a = f(b._source);

      if (!I(g, a)) {
        a = c(b._source);
        I(n, a) || (l(a), a = td(Y), e.mutableReadLanes |= a & e.pendingLanes);
        a = e.mutableReadLanes;
        e.entangledLanes |= a;

        for (var d = e.entanglements, h = a; 0 < h;) {
          var k = 31 - mc(h),
              t = 1 << k;
          d[k] |= a;
          h &= ~t;
        }
      }
    }, [c, b, d]);
    h.useEffect(function () {
      return d(b._source, function () {
        var a = p.getSnapshot,
            c = p.setSnapshot;

        try {
          c(a(b._source));
          var d = td(Y);
          e.mutableReadLanes |= d & e.pendingLanes;
        } catch (Oa) {
          c(function () {
            throw Oa;
          });
        }
      });
    }, [b, d]);
    I(y, c) && I(x, b) && I(t, d) || (a = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: n
    }, a.dispatch = l = xe.bind(null, N, a), k.queue = a, k.baseQueue = null, n = ve(e, b, c), k.memoizedState = k.baseState = n);
    return n;
  }

  function ye(a, b, c) {
    var d = re();
    return we(d, a, b, c);
  }

  function ze(a) {
    var b = qe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: se,
      lastRenderedState: a
    };
    a = a.dispatch = xe.bind(null, N, a);
    return [b.memoizedState, a];
  }

  function Ae(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function Be(a) {
    var b = qe();
    a = {
      current: a
    };
    return b.memoizedState = a;
  }

  function Ce() {
    return re().memoizedState;
  }

  function De(a, b, c, d) {
    var e = qe();
    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Ee(a, b, c, d) {
    var e = re();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== O) {
      var g = O.memoizedState;
      f = g.destroy;

      if (null !== d && ke(d, g.deps)) {
        Ae(b, c, f, d);
        return;
      }
    }

    N.flags |= a;
    e.memoizedState = Ae(1 | b, c, f, d);
  }

  function Fe(a, b) {
    return De(516, 4, a, b);
  }

  function Ge(a, b) {
    return Ee(516, 4, a, b);
  }

  function He(a, b) {
    return Ee(4, 2, a, b);
  }

  function Ie(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function Je(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Ee(4, 2, Ie.bind(null, b, a), c);
  }

  function Ke() {}

  function Le(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function Me(a, b) {
    var c = re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ke(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function Ne(a, b) {
    var c = Nc();
    Pc(98 > c ? 98 : c, function () {
      a(!0);
    });
    Pc(97 < c ? 97 : c, function () {
      var c = ge.transition;
      ge.transition = 1;

      try {
        a(!1), b();
      } finally {
        ge.transition = c;
      }
    });
  }

  function xe(a, b, c) {
    var d = K(),
        e = td(a),
        f = {
      lane: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.pending;
    null === g ? f.next = f : (f.next = g.next, g.next = f);
    b.pending = f;
    g = a.alternate;
    if (a === N || null !== g && g === N) je = ie = !0;else {
      if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
        var h = b.lastRenderedState,
            k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (I(k, h)) return;
      } catch (l) {} finally {}
      ud(a, e, d);
    }
  }

  var pe = {
    readContext: J,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useOpaqueIdentifier: Q,
    unstable_isNewReconciler: !1
  },
      me = {
    readContext: J,
    useCallback: function useCallback(a, b) {
      qe().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: J,
    useEffect: Fe,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return De(4, 2, Ie.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return De(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = qe();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = qe();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = xe.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: Be,
    useState: ze,
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ze(a),
          c = b[0],
          d = b[1];
      Fe(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ze(!1),
          b = a[0];
      a = Ne.bind(null, a[1]);
      Be(a);
      return [a, b];
    },
    useMutableSource: function useMutableSource(a, b, c) {
      var d = qe();
      d.memoizedState = {
        refs: {
          getSnapshot: b,
          setSnapshot: null
        },
        source: a,
        subscribe: c
      };
      return we(d, a, b, c);
    },
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      if (Wd) {
        var a = !1,
            b = Xa(function () {
          a || (a = !0, c(Ya()));
          throw Error(q(355));
        }),
            c = ze(b)[1];
        0 === (N.mode & 2) && (N.flags |= 516, Ae(5, function () {
          c(Ya());
        }, void 0, null));
        return b;
      }

      b = Ya();
      ze(b);
      return b;
    },
    unstable_isNewReconciler: !1
  },
      ne = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: te,
    useRef: Ce,
    useState: function useState() {
      return te(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = te(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = te(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return te(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      oe = {
    readContext: J,
    useCallback: Le,
    useContext: J,
    useEffect: Ge,
    useImperativeHandle: Je,
    useLayoutEffect: He,
    useMemo: Me,
    useReducer: ue,
    useRef: Ce,
    useState: function useState() {
      return ue(se);
    },
    useDebugValue: Ke,
    useDeferredValue: function useDeferredValue(a) {
      var b = ue(se),
          c = b[0],
          d = b[1];
      Ge(function () {
        var b = ge.transition;
        ge.transition = 1;

        try {
          d(a);
        } finally {
          ge.transition = b;
        }
      }, [a]);
      return c;
    },
    useTransition: function useTransition() {
      var a = ue(se)[0];
      return [Ce().current, a];
    },
    useMutableSource: ye,
    useOpaqueIdentifier: function useOpaqueIdentifier() {
      return ue(se)[0];
    },
    unstable_isNewReconciler: !1
  },
      Oe = ca.ReactCurrentOwner,
      gd = !1;

  function S(a, b, c, d) {
    b.child = null === a ? Kd(b, null, c, d) : Jd(b, a.child, c, d);
  }

  function Pe(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    fd(b, e);
    d = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, d, e);
    return b.child;
  }

  function Se(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !Te(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Ue(a, b, g, d, e, f);
      a = Gd(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }

    g = a.child;
    if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Vc, c(e, d) && a.ref === b.ref)) return Re(a, b, f);
    b.flags |= 1;
    a = Ed(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  function Ue(a, b, c, d, e, f) {
    if (null !== a && Vc(a.memoizedProps, d) && a.ref === b.ref) if (gd = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (gd = !0);else return b.lanes = a.lanes, Re(a, b, f);
    return Ve(a, b, c, d, f);
  }

  function We(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
      if (0 === (b.mode & 4)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0
      }, Xe(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a
      }, Xe(b, a), null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, Xe(b, d);
    S(a, b, e, c);
    return b.child;
  }

  function Ye(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
  }

  function Ve(a, b, c, d, e) {
    var f = E(c) ? Yb : B.current;
    f = Zb(b, f);
    fd(b, e);
    c = le(a, b, c, d, f, e);
    if (null !== a && !gd) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, Re(a, b, e);
    b.flags |= 1;
    S(a, b, c, e);
    return b.child;
  }

  function Ze(a, b, c, d, e) {
    if (E(c)) {
      var f = !0;
      cc(b);
    } else f = !1;

    fd(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), xd(b, c, d), zd(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === typeof l && null !== l ? l = J(l) : (l = E(c) ? Yb : B.current, l = Zb(b, l));
      var n = c.getDerivedStateFromProps,
          t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && yd(b, g, d, l);
      hd = !1;
      var p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || D.current || hd ? ("function" === typeof n && (sd(b, c, n, d), k = b.memoizedState), (h = hd || wd(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
    } else {
      g = b.stateNode;
      jd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Xc(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = J(k) : (k = E(c) ? Yb : B.current, k = Zb(b, k));
      var y = c.getDerivedStateFromProps;
      (n = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && yd(b, g, d, k);
      hd = !1;
      p = b.memoizedState;
      g.state = p;
      od(b, d, g, e);
      var x = b.memoizedState;
      h !== t || p !== x || D.current || hd ? ("function" === typeof y && (sd(b, c, y, d), x = b.memoizedState), (l = hd || wd(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
    }
    return $e(a, b, c, d, f, e);
  }

  function $e(a, b, c, d, e, f) {
    Ye(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && dc(b, c, !1), Re(a, b, f);
    d = b.stateNode;
    Oe.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Jd(b, a.child, null, f), b.child = Jd(b, null, h, f)) : S(a, b, h, f);
    b.memoizedState = d.state;
    e && dc(b, c, !0);
    return b.child;
  }

  function af(a) {
    var b = a.stateNode;
    b.pendingContext ? ac(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ac(a, b.context, !1);
    Pd(a, b.containerInfo);
  }

  var bf = {
    dehydrated: null,
    retryLane: 0
  };

  function cf(a, b, c) {
    var d = b.pendingProps,
        e = M.current,
        f = !1,
        g;
    (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
    A(M, e & 1);

    if (null === a) {
      void 0 !== d.fallback && $d(b);
      a = d.children;
      e = d.fallback;
      if (f) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, a;
      if ("number" === typeof d.unstable_expectedLoadTime) return a = df(b, a, e, c), b.child.memoizedState = {
        baseLanes: c
      }, b.memoizedState = bf, b.lanes = 33554432, a;
      c = ef({
        mode: "visible",
        children: a
      }, b.mode, c, null);
      c.return = b;
      return b.child = c;
    }

    if (null !== a.memoizedState) {
      if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
        baseLanes: c
      } : {
        baseLanes: e.baseLanes | c
      }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
      c = gf(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    if (f) return d = ff(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
      baseLanes: c
    } : {
      baseLanes: e.baseLanes | c
    }, f.childLanes = a.childLanes & ~c, b.memoizedState = bf, d;
    c = gf(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }

  function df(a, b, c, d) {
    var e = a.mode,
        f = a.child;
    b = {
      mode: "hidden",
      children: b
    };
    0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = ef(b, e, 0, null);
    c = Id(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }

  function gf(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Ed(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
    return b.child = c;
  }

  function ff(a, b, c, d, e) {
    var f = b.mode,
        g = a.child;
    a = g.sibling;
    var h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Ed(g, h);
    null !== a ? d = Ed(a, d) : (d = Id(d, f, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }

  function hf(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    ed(a.return, b);
  }

  function jf(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
  }

  function kf(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    S(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
      if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && hf(a, c);else if (19 === a.tag) hf(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    A(M, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === Td(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        jf(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === Td(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        jf(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        jf(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function Re(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    pd |= b.lanes;

    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(q(153));

      if (null !== b.child) {
        a = b.child;
        c = Ed(a, a.pendingProps);
        b.child = c;

        for (c.return = b; null !== a.sibling;) {
          a = a.sibling, c = c.sibling = Ed(a, a.pendingProps), c.return = b;
        }

        c.sibling = null;
      }

      return b.child;
    }

    return null;
  }

  function lf(a) {
    a.flags |= 4;
  }

  var _mf, nf, of, pf;

  if (Ta) _mf = function mf(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ja(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, nf = function nf() {}, of = function of(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = Od(L.current);
      c = La(f, c, a, d, e, g);
      (b.updateQueue = c) && lf(b);
    }
  }, pf = function pf(a, b, c, d) {
    c !== d && lf(b);
  };else if (Ua) {
    _mf = function mf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ja(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ja(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, _mf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var qf = function qf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Db(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Eb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.flags & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, qf(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    nf = function nf(a) {
      var b = a.stateNode;

      if (null !== a.firstEffect) {
        var c = b.containerInfo,
            d = zb(c);
        qf(d, a, !1, !1);
        b.pendingChildren = d;
        lf(a);
        Bb(c, d);
      }
    };

    of = function of(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = Od(L.current),
            l = null;
        g !== d && (l = La(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), Ka(f, c, d, e, k) && lf(b), b.stateNode = f, a ? lf(b) : _mf(f, b, !1, !1));
      }
    };

    pf = function pf(a, b, c, d) {
      c !== d ? (a = Od(Nd.current), c = Od(L.current), b.stateNode = Na(d, a, c, b), lf(b)) : b.stateNode = a.stateNode;
    };
  } else nf = function nf() {}, of = function of() {}, pf = function pf() {};

  function rf(a, b) {
    if (!Wd) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function sf(a, b, c) {
    var d = b.pendingProps;

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;

      case 1:
        return E(b.type) && $b(), null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        d = b.stateNode;
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) be(b) ? lf(b) : d.hydrate || (b.flags |= 256);
        nf(b);
        return null;

      case 5:
        Sd(b);
        var e = Od(Nd.current);
        c = b.type;
        if (null !== a && null != b.stateNode) of(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(q(166));
            return null;
          }

          a = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(175));
            a = Lb(b.stateNode, b.type, b.memoizedProps, e, a, b);
            b.updateQueue = a;
            null !== a && lf(b);
          } else {
            var f = Ia(c, d, e, a, b);

            _mf(f, b, !1, !1);

            b.stateNode = f;
            Ka(f, c, d, e, a) && lf(b);
          }

          null !== b.ref && (b.flags |= 128);
        }
        return null;

      case 6:
        if (a && null != b.stateNode) pf(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(q(166));
          a = Od(Nd.current);
          e = Od(L.current);

          if (be(b)) {
            if (!Va) throw Error(q(176));
            Mb(b.stateNode, b.memoizedProps, b) && lf(b);
          } else b.stateNode = Na(d, a, e, b);
        }
        return null;

      case 13:
        z(M);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return b.lanes = c, b;
        d = null !== d;
        e = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && be(b) : e = null !== a.memoizedState;
        if (d && !e && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) 0 === T && (T = 3);else {
          if (0 === T || 3 === T) T = 4;
          null === R || 0 === (pd & 134217727) && 0 === (tf & 134217727) || uf(R, U);
        }
        Ua && d && (b.flags |= 4);
        Ta && (d || e) && (b.flags |= 4);
        return null;

      case 4:
        return Qd(), nf(b), null === a && ab(b.stateNode.containerInfo), null;

      case 10:
        return dd(b), null;

      case 17:
        return E(b.type) && $b(), null;

      case 19:
        z(M);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.flags & 64);
        f = d.rendering;
        if (null === f) {
          if (e) rf(d, !1);else {
            if (0 !== T || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
              f = Td(a);

              if (null !== f) {
                b.flags |= 64;
                rf(d, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                a = c;

                for (d = b.child; null !== d;) {
                  e = d, c = a, e.flags &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childLanes = 0, e.lanes = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = f.childLanes, e.lanes = f.lanes, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, e.type = f.type, c = f.dependencies, e.dependencies = null === c ? null : {
                    lanes: c.lanes,
                    firstContext: c.firstContext
                  }), d = d.sibling;
                }

                A(M, M.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== d.tail && G() > vf && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          }
        } else {
          if (!e) if (a = Td(f), null !== a) {
            if (b.flags |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), rf(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate && !Wd) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * G() - d.renderingStartTime > vf && 1073741824 !== c && (b.flags |= 64, e = !0, rf(d, !1), b.lanes = 33554432);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
        }
        return null !== d.tail ? (a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = M.current, A(M, e ? b & 1 | 2 : b & 1), a) : null;

      case 23:
      case 24:
        return wf(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
    }

    throw Error(q(156, b.tag));
  }

  function xf(a) {
    switch (a.tag) {
      case 1:
        E(a.type) && $b();
        var b = a.flags;
        return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 3:
        Qd();
        z(D);
        z(B);
        ee();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(q(285));
        a.flags = b & -4097 | 64;
        return a;

      case 5:
        return Sd(a), null;

      case 13:
        return z(M), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

      case 19:
        return z(M), null;

      case 4:
        return Qd(), null;

      case 10:
        return dd(a), null;

      case 23:
      case 24:
        return wf(), null;

      default:
        return null;
    }
  }

  function yf(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += Wc(d), d = d.return;
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e
    };
  }

  function zf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var Af = "function" === typeof WeakMap ? WeakMap : Map;

  function Bf(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Cf || (Cf = !0, Df = d);
      zf(a, b);
    };

    return c;
  }

  function Ef(a, b, c) {
    c = kd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        zf(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === Ff ? Ff = new Set([this]) : Ff.add(this), zf(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var Gf = "function" === typeof WeakSet ? WeakSet : Set;

  function Hf(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      If(a, c);
    } else b.current = null;
  }

  function Jf(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;

      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : Xc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        return;

      case 3:
        Ta && b.flags & 256 && xb(b.stateNode.containerInfo);
        return;

      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }

    throw Error(q(163));
  }

  function Kf(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Lf(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }

            a = a.next;
          } while (a !== b);
        }

        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;

        if (null !== b) {
          a = b = b.next;

          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Mf(c, a), Nf(c, a));
            a = d;
          } while (a !== b);
        }

        return;

      case 1:
        a = c.stateNode;
        c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : Xc(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
        b = c.updateQueue;
        null !== b && qd(c, b, a);
        return;

      case 3:
        b = c.updateQueue;

        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = Da(c.child.stateNode);
              break;

            case 1:
              a = c.child.stateNode;
          }
          qd(c, b, a);
        }

        return;

      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mb(a, c.type, c.memoizedProps, c);
        return;

      case 6:
        return;

      case 4:
        return;

      case 12:
        return;

      case 13:
        Va && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Pb(c))));
        return;

      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }

    throw Error(q(163));
  }

  function Of(a, b) {
    if (Ta) for (var c = a;;) {
      if (5 === c.tag) {
        var d = c.stateNode;
        b ? tb(d) : vb(c.stateNode, c.memoizedProps);
      } else if (6 === c.tag) d = c.stateNode, b ? ub(d) : wb(d, c.memoizedProps);else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }

      if (c === a) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Pf(a, b) {
    if (fc && "function" === typeof fc.onCommitFiberUnmount) try {
      fc.onCommitFiberUnmount(ec, b);
    } catch (f) {}

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var c = a = a.next;

          do {
            var d = c,
                e = d.destroy;
            d = d.tag;
            if (void 0 !== e) if (0 !== (d & 4)) Mf(b, c);else {
              d = b;

              try {
                e();
              } catch (f) {
                If(d, f);
              }
            }
            c = c.next;
          } while (c !== a);
        }

        break;

      case 1:
        Hf(b);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          If(b, f);
        }
        break;

      case 5:
        Hf(b);
        break;

      case 4:
        Ta ? Qf(a, b) : Ua && Ua && (b = b.stateNode.containerInfo, a = zb(b), Cb(b, a));
    }
  }

  function Rf(a, b) {
    for (var c = b;;) {
      if (Pf(a, c), null === c.child || Ta && 4 === c.tag) {
        if (c === b) break;

        for (; null === c.sibling;) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }

        c.sibling.return = c.return;
        c = c.sibling;
      } else c.child.return = c, c = c.child;
    }
  }

  function Sf(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }

  function Tf(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Uf(a) {
    if (Ta) {
      a: {
        for (var b = a.return; null !== b;) {
          if (Tf(b)) break a;
          b = b.return;
        }

        throw Error(q(160));
      }

      var c = b;
      b = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          b = b.containerInfo;
          d = !0;
          break;

        case 4:
          b = b.containerInfo;
          d = !0;
          break;

        default:
          throw Error(q(161));
      }

      c.flags & 16 && (sb(b), c.flags &= -17);

      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || Tf(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.flags & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      d ? Vf(a, c, b) : Wf(a, c, b);
    }
  }

  function Vf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Vf(a, b, c), a = a.sibling; null !== a;) {
      Vf(a, b, c), a = a.sibling;
    }
  }

  function Wf(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Wf(a, b, c), a = a.sibling; null !== a;) {
      Wf(a, b, c), a = a.sibling;
    }
  }

  function Qf(a, b) {
    for (var c = b, d = !1, e, f;;) {
      if (!d) {
        d = c.return;

        a: for (;;) {
          if (null === d) throw Error(q(160));
          e = d.stateNode;

          switch (d.tag) {
            case 5:
              f = !1;
              break a;

            case 3:
              e = e.containerInfo;
              f = !0;
              break a;

            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }

          d = d.return;
        }

        d = !0;
      }

      if (5 === c.tag || 6 === c.tag) Rf(a, c), f ? rb(e, c.stateNode) : qb(e, c.stateNode);else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (Pf(a, c), null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Xf(a, b) {
    if (Ta) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Kf(3, b);
          return;

        case 1:
          return;

        case 5:
          var c = b.stateNode;

          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type,
                f = b.updateQueue;
            b.updateQueue = null;
            null !== f && nb(c, f, e, a, d, b);
          }

          return;

        case 6:
          if (null === b.stateNode) throw Error(q(162));
          c = b.memoizedProps;
          lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;

        case 3:
          Va && (b = b.stateNode, b.hydrate && (b.hydrate = !1, Ob(b.containerInfo)));
          return;

        case 12:
          return;

        case 13:
          Yf(b);
          Zf(b);
          return;

        case 19:
          Zf(b);
          return;

        case 17:
          return;

        case 23:
        case 24:
          Of(b, null !== b.memoizedState);
          return;
      }

      throw Error(q(163));
    }

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Kf(3, b);
        return;

      case 12:
        return;

      case 13:
        Yf(b);
        Zf(b);
        return;

      case 19:
        Zf(b);
        return;

      case 3:
        Va && (c = b.stateNode, c.hydrate && (c.hydrate = !1, Ob(c.containerInfo)));
        break;

      case 23:
      case 24:
        return;
    }

    a: if (Ua) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;

        case 3:
        case 4:
          b = b.stateNode;
          Cb(b.containerInfo, b.pendingChildren);
          break a;
      }

      throw Error(q(163));
    }
  }

  function Yf(a) {
    null !== a.memoizedState && ($f = G(), Ta && Of(a.child, !0));
  }

  function Zf(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Gf());
      b.forEach(function (b) {
        var d = ag.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function bg(a, b) {
    return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
  }

  var cg = 0,
      dg = 1,
      eg = 2,
      fg = 3,
      gg = 4;

  if ("function" === typeof Symbol && Symbol.for) {
    var hg = Symbol.for;
    cg = hg("selector.component");
    dg = hg("selector.has_pseudo_class");
    eg = hg("selector.role");
    fg = hg("selector.test_id");
    gg = hg("selector.text");
  }

  function ig(a) {
    var b = Wa(a);

    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(q(364));
      return b;
    }

    a = cb(a);
    if (null === a) throw Error(q(362));
    return a.stateNode.current;
  }

  function jg(a, b) {
    switch (b.$$typeof) {
      case cg:
        if (a.type === b.value) return !0;
        break;

      case dg:
        a: {
          b = b.value;
          a = [a, 0];

          for (var c = 0; c < a.length;) {
            var d = a[c++],
                e = a[c++],
                f = b[e];

            if (5 !== d.tag || !fb(d)) {
              for (; null != f && jg(d, f);) {
                e++, f = b[e];
              }

              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) {
                a.push(d, e), d = d.sibling;
              }
            }
          }

          b = !1;
        }

        return b;

      case eg:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;

      case gg:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;

      case fg:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;

      default:
        throw Error(q(365, b));
    }

    return !1;
  }

  function kg(a) {
    switch (a.$$typeof) {
      case cg:
        return "<" + (wa(a.value) || "Unknown") + ">";

      case dg:
        return ":has(" + (kg(a) || "") + ")";

      case eg:
        return '[role="' + a.value + '"]';

      case gg:
        return '"' + a.value + '"';

      case fg:
        return '[data-testname="' + a.value + '"]';

      default:
        throw Error(q(365, a));
    }
  }

  function lg(a, b) {
    var c = [];
    a = [a, 0];

    for (var d = 0; d < a.length;) {
      var e = a[d++],
          f = a[d++],
          g = b[f];

      if (5 !== e.tag || !fb(e)) {
        for (; null != g && jg(e, g);) {
          f++, g = b[f];
        }

        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) {
          a.push(e, f), e = e.sibling;
        }
      }
    }

    return c;
  }

  function mg(a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    a = lg(a, b);
    b = [];
    a = Array.from(a);

    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) {
        a.push(d), d = d.sibling;
      }
    }

    return b;
  }

  var ng = null;

  function og(a) {
    if (null === ng) try {
      var b = ("require" + Math.random()).slice(0, 7);
      ng = (module && module[b]).call(module, "timers").setImmediate;
    } catch (c) {
      ng = function ng(a) {
        var b = new MessageChannel();
        b.port1.onmessage = a;
        b.port2.postMessage(void 0);
      };
    }
    return ng(a);
  }

  var pg = Math.ceil,
      qg = ca.ReactCurrentDispatcher,
      rg = ca.ReactCurrentOwner,
      sg = ca.IsSomeRendererActing,
      V = 0,
      R = null,
      W = null,
      U = 0,
      tg = 0,
      ug = Wb(0),
      T = 0,
      vg = null,
      wg = 0,
      pd = 0,
      tf = 0,
      xg = 0,
      yg = null,
      $f = 0,
      vf = Infinity;

  function zg() {
    vf = G() + 500;
  }

  var X = null,
      Cf = !1,
      Df = null,
      Ff = null,
      Ag = !1,
      Bg = null,
      Cg = 90,
      Dg = [],
      Eg = [],
      Fg = null,
      Gg = 0,
      Hg = null,
      Ig = -1,
      Jg = 0,
      Kg = 0,
      Lg = null,
      Mg = !1;

  function K() {
    return 0 !== (V & 48) ? G() : -1 !== Ig ? Ig : Ig = G();
  }

  function td(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === Nc() ? 1 : 2;
    0 === Jg && (Jg = wg);

    if (0 !== Sc.transition) {
      0 !== Kg && (Kg = null !== yg ? yg.pendingLanes : 0);
      a = Jg;
      var b = 4186112 & ~Kg;
      b &= -b;
      0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
      return b;
    }

    a = Nc();
    0 !== (V & 4) && 98 === a ? a = oc(12, Jg) : (a = jc(a), a = oc(a, Jg));
    return a;
  }

  function ud(a, b, c) {
    if (50 < Gg) throw Gg = 0, Hg = null, Error(q(185));
    a = Ng(a, b);
    if (null === a) return null;
    rc(a, b, c);
    a === R && (tf |= b, 4 === T && uf(a, U));
    var d = Nc();
    1 === b ? 0 !== (V & 8) && 0 === (V & 48) ? Og(a) : (Z(a, c), 0 === V && (zg(), H())) : (0 === (V & 4) || 98 !== d && 99 !== d || (null === Fg ? Fg = new Set([a]) : Fg.add(a)), Z(a, c));
    yg = a;
  }

  function Ng(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a.return; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  function Z(a, b) {
    for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
      var h = 31 - mc(g),
          k = 1 << h,
          l = f[h];

      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          ic(k);
          var n = F;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);

      g &= ~k;
    }

    d = lc(a, a === R ? U : 0);
    b = F;
    if (0 === d) null !== c && (c !== Hc && xc(c), a.callbackNode = null, a.callbackPriority = 0);else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Hc && xc(c);
      }

      15 === b ? (c = Og.bind(null, a), null === Jc ? (Jc = [c], Kc = wc(Cc, Rc)) : Jc.push(c), c = Hc) : 14 === b ? c = Qc(99, Og.bind(null, a)) : (c = kc(b), c = Qc(c, Pg.bind(null, a)));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Pg(a) {
    Ig = -1;
    Kg = Jg = 0;
    if (0 !== (V & 48)) throw Error(q(327));
    var b = a.callbackNode;
    if (Qg() && a.callbackNode !== b) return null;
    var c = lc(a, a === R ? U : 0);
    if (0 === c) return null;
    var d = c;
    var e = V;
    V |= 16;
    var f = Rg();
    if (R !== a || U !== d) zg(), Sg(a, d);

    do {
      try {
        Tg();
        break;
      } catch (h) {
        Ug(a, h);
      }
    } while (1);

    bd();
    qg.current = f;
    V = e;
    null !== W ? d = 0 : (R = null, U = 0, d = T);
    if (0 !== (wg & tf)) Sg(a, 0);else if (0 !== d) {
      2 === d && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), c = nc(a), 0 !== c && (d = Vg(a, c)));
      if (1 === d) throw b = vg, Sg(a, 0), uf(a, c), Z(a, G()), b;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;

      switch (d) {
        case 0:
        case 1:
          throw Error(q(345));

        case 2:
          Zg(a);
          break;

        case 3:
          uf(a, c);

          if ((c & 62914560) === c && (d = $f + 500 - G(), 10 < d)) {
            if (0 !== lc(a, 0)) break;
            e = a.suspendedLanes;

            if ((e & c) !== c) {
              K();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }

            a.timeoutHandle = Pa(Zg.bind(null, a), d);
            break;
          }

          Zg(a);
          break;

        case 4:
          uf(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;

          for (e = -1; 0 < c;) {
            var g = 31 - mc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }

          c = e;
          c = G() - c;
          c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * pg(c / 1960)) - c;

          if (10 < c) {
            a.timeoutHandle = Pa(Zg.bind(null, a), c);
            break;
          }

          Zg(a);
          break;

        case 5:
          Zg(a);
          break;

        default:
          throw Error(q(329));
      }
    }
    Z(a, G());
    return a.callbackNode === b ? Pg.bind(null, a) : null;
  }

  function uf(a, b) {
    b &= ~xg;
    b &= ~tf;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - mc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Og(a) {
    if (0 !== (V & 48)) throw Error(q(327));
    Qg();

    if (a === R && 0 !== (a.expiredLanes & U)) {
      var b = U;
      var c = Vg(a, b);
      0 !== (wg & tf) && (b = lc(a, b), c = Vg(a, b));
    } else b = lc(a, 0), c = Vg(a, b);

    0 !== a.tag && 2 === c && (V |= 64, a.hydrate && (a.hydrate = !1, xb(a.containerInfo)), b = nc(a), 0 !== b && (c = Vg(a, b)));
    if (1 === c) throw c = vg, Sg(a, 0), uf(a, b), Z(a, G()), c;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Zg(a);
    Z(a, G());
    return null;
  }

  function $g() {
    if (null !== Fg) {
      var a = Fg;
      Fg = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Z(a, G());
      });
    }

    H();
  }

  function ah(a, b) {
    var c = V;
    V |= 1;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  }

  function bh(a, b) {
    var c = V;
    if (0 !== (c & 48)) return a(b);
    V |= 1;

    try {
      if (a) return Pc(99, a.bind(null, b));
    } finally {
      V = c, H();
    }
  }

  function Xe(a, b) {
    A(ug, tg);
    tg |= b;
    wg |= b;
  }

  function wf() {
    tg = ug.current;
    z(ug);
  }

  function Sg(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== W) for (c = W.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $b();
          break;

        case 3:
          Qd();
          z(D);
          z(B);
          ee();
          break;

        case 5:
          Sd(d);
          break;

        case 4:
          Qd();
          break;

        case 13:
          z(M);
          break;

        case 19:
          z(M);
          break;

        case 10:
          dd(d);
          break;

        case 23:
        case 24:
          wf();
      }

      c = c.return;
    }
    R = a;
    W = Ed(a.current, null);
    U = tg = wg = b;
    T = 0;
    vg = null;
    xg = tf = pd = 0;
  }

  function Ug(a, b) {
    do {
      var c = W;

      try {
        bd();
        fe.current = pe;

        if (ie) {
          for (var d = N.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          ie = !1;
        }

        he = 0;
        P = O = N = null;
        je = !1;
        rg.current = null;

        if (null === c || null === c.return) {
          T = 1;
          vg = b;
          W = null;
          break;
        }

        a: {
          var f = a,
              g = c.return,
              h = c,
              k = b;
          b = U;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;

          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k;

            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }

            var t = 0 !== (M.current & 1),
                p = g;

            do {
              var y;

              if (y = 13 === p.tag) {
                var x = p.memoizedState;
                if (null !== x) y = null !== x.dehydrated ? !0 : !1;else {
                  var Y = p.memoizedProps;
                  y = void 0 === Y.fallback ? !1 : !0 !== Y.unstable_avoidThisFallback ? !0 : t ? !1 : !0;
                }
              }

              if (y) {
                var u = p.updateQueue;

                if (null === u) {
                  var v = new Set();
                  v.add(l);
                  p.updateQueue = v;
                } else u.add(l);

                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
                    var C = kd(-1, 1);
                    C.tag = 2;
                    md(h, C);
                  }
                  h.lanes |= 1;
                  break a;
                }

                k = void 0;
                h = b;
                var Oa = f.pingCache;
                null === Oa ? (Oa = f.pingCache = new Af(), k = new Set(), Oa.set(l, k)) : (k = Oa.get(l), void 0 === k && (k = new Set(), Oa.set(l, k)));

                if (!k.has(h)) {
                  k.add(h);
                  var Qe = ch.bind(null, f, l, h);
                  l.then(Qe, Qe);
                }

                p.flags |= 4096;
                p.lanes = b;
                break a;
              }

              p = p.return;
            } while (null !== p);

            k = Error((wa(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
          }

          5 !== T && (T = 2);
          k = yf(k, h);
          p = g;

          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var Wg = Bf(p, f, b);
                nd(p, Wg);
                break a;

              case 1:
                f = k;
                var Xg = p.type,
                    ld = p.stateNode;

                if (0 === (p.flags & 64) && ("function" === typeof Xg.getDerivedStateFromError || null !== ld && "function" === typeof ld.componentDidCatch && (null === Ff || !Ff.has(ld)))) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var Yg = Ef(p, f, b);
                  nd(p, Yg);
                  break a;
                }

            }

            p = p.return;
          } while (null !== p);
        }

        dh(c);
      } catch (w) {
        b = w;
        W === c && null !== c && (W = c = c.return);
        continue;
      }

      break;
    } while (1);
  }

  function Rg() {
    var a = qg.current;
    qg.current = pe;
    return null === a ? pe : a;
  }

  function Vg(a, b) {
    var c = V;
    V |= 16;
    var d = Rg();
    R === a && U === b || Sg(a, b);

    do {
      try {
        eh();
        break;
      } catch (e) {
        Ug(a, e);
      }
    } while (1);

    bd();
    V = c;
    qg.current = d;
    if (null !== W) throw Error(q(261));
    R = null;
    U = 0;
    return T;
  }

  function eh() {
    for (; null !== W;) {
      fh(W);
    }
  }

  function Tg() {
    for (; null !== W && !yc();) {
      fh(W);
    }
  }

  function fh(a) {
    var b = gh(a.alternate, a, tg);
    a.memoizedProps = a.pendingProps;
    null === b ? dh(a) : W = b;
    rg.current = null;
  }

  function dh(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b.return;

      if (0 === (b.flags & 2048)) {
        c = sf(c, b, tg);

        if (null !== c) {
          W = c;
          return;
        }

        c = b;

        if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (tg & 1073741824) || 0 === (c.mode & 4)) {
          for (var d = 0, e = c.child; null !== e;) {
            d |= e.lanes | e.childLanes, e = e.sibling;
          }

          c.childLanes = d;
        }

        null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
      } else {
        c = xf(b);

        if (null !== c) {
          c.flags &= 2047;
          W = c;
          return;
        }

        null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
      }

      b = b.sibling;

      if (null !== b) {
        W = b;
        return;
      }

      W = b = a;
    } while (null !== b);

    0 === T && (T = 5);
  }

  function Zg(a) {
    var b = Nc();
    Pc(99, hh.bind(null, a, b));
    return null;
  }

  function hh(a, b) {
    do {
      Qg();
    } while (null !== Bg);

    if (0 !== (V & 48)) throw Error(q(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(q(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
        e = d,
        f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;

    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
      var k = 31 - mc(f),
          l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }

    null !== Fg && 0 === (d & 24) && Fg.has(a) && Fg.delete(a);
    a === R && (W = R = null, U = 0);
    1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

    if (null !== d) {
      e = V;
      V |= 32;
      rg.current = null;
      Lg = Ga(a.containerInfo);
      Mg = !1;
      X = d;

      do {
        try {
          ih();
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Lg = null;
      X = d;

      do {
        try {
          for (g = a; null !== X;) {
            var n = X.flags;
            n & 16 && Ta && sb(X.stateNode);

            if (n & 128) {
              var t = X.alternate;

              if (null !== t) {
                var p = t.ref;
                null !== p && ("function" === typeof p ? p(null) : p.current = null);
              }
            }

            switch (n & 1038) {
              case 2:
                Uf(X);
                X.flags &= -3;
                break;

              case 6:
                Uf(X);
                X.flags &= -3;
                Xf(X.alternate, X);
                break;

              case 1024:
                X.flags &= -1025;
                break;

              case 1028:
                X.flags &= -1025;
                Xf(X.alternate, X);
                break;

              case 4:
                Xf(X.alternate, X);
                break;

              case 8:
                h = g;
                f = X;
                Ta ? Qf(h, f) : Rf(h, f);
                var y = f.alternate;
                Sf(f);
                null !== y && Sf(y);
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      Mg && $a();
      Ha(a.containerInfo);
      a.current = c;
      X = d;

      do {
        try {
          for (n = a; null !== X;) {
            var x = X.flags;
            x & 36 && Lf(n, X.alternate, X);

            if (x & 128) {
              t = void 0;
              var Y = X.ref;

              if (null !== Y) {
                var u = X.stateNode;

                switch (X.tag) {
                  case 5:
                    t = Da(u);
                    break;

                  default:
                    t = u;
                }

                "function" === typeof Y ? Y(t) : Y.current = t;
              }
            }

            X = X.nextEffect;
          }
        } catch (v) {
          if (null === X) throw Error(q(330));
          If(X, v);
          X = X.nextEffect;
        }
      } while (null !== X);

      X = null;
      Ic();
      V = e;
    } else a.current = c;

    if (Ag) Ag = !1, Bg = a, Cg = b;else for (X = d; null !== X;) {
      b = X.nextEffect, X.nextEffect = null, X.flags & 8 && (x = X, x.sibling = null, x.stateNode = null), X = b;
    }
    d = a.pendingLanes;
    0 === d && (Ff = null);
    1 === d ? a === Hg ? Gg++ : (Gg = 0, Hg = a) : Gg = 0;
    c = c.stateNode;
    if (fc && "function" === typeof fc.onCommitFiberRoot) try {
      fc.onCommitFiberRoot(ec, c, void 0, 64 === (c.current.flags & 64));
    } catch (v) {}
    Z(a, G());
    if (Cf) throw Cf = !1, a = Df, Df = null, a;
    if (0 !== (V & 8)) return null;
    H();
    return null;
  }

  function ih() {
    for (; null !== X;) {
      var a = X.alternate;
      Mg || null === Lg || (0 !== (X.flags & 8) ? Ca(X, Lg) && (Mg = !0, Za()) : 13 === X.tag && bg(a, X) && Ca(X, Lg) && (Mg = !0, Za()));
      var b = X.flags;
      0 !== (b & 256) && Jf(a, X);
      0 === (b & 512) || Ag || (Ag = !0, Qc(97, function () {
        Qg();
        return null;
      }));
      X = X.nextEffect;
    }
  }

  function Qg() {
    if (90 !== Cg) {
      var a = 97 < Cg ? 97 : Cg;
      Cg = 90;
      return Pc(a, jh);
    }

    return !1;
  }

  function Nf(a, b) {
    Dg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function Mf(a, b) {
    Eg.push(b, a);
    Ag || (Ag = !0, Qc(97, function () {
      Qg();
      return null;
    }));
  }

  function jh() {
    if (null === Bg) return !1;
    var a = Bg;
    Bg = null;
    if (0 !== (V & 48)) throw Error(q(331));
    var b = V;
    V |= 32;
    var c = Eg;
    Eg = [];

    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
          f = c[d + 1],
          g = e.destroy;
      e.destroy = void 0;
      if ("function" === typeof g) try {
        g();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    c = Dg;
    Dg = [];

    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];

      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(q(330));
        If(f, k);
      }
    }

    for (h = a.current.firstEffect; null !== h;) {
      a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
    }

    V = b;
    H();
    return !0;
  }

  function kh(a, b, c) {
    b = yf(c, b);
    b = Bf(a, b, 1);
    md(a, b);
    b = K();
    a = Ng(a, 1);
    null !== a && (rc(a, 1, b), Z(a, b));
  }

  function If(a, b) {
    if (3 === a.tag) kh(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        kh(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) {
          a = yf(b, a);
          var e = Ef(c, a, 1);
          md(c, e);
          e = K();
          c = Ng(c, 1);
          if (null !== c) rc(c, 1, e), Z(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ff || !Ff.has(d))) try {
            d.componentDidCatch(b, a);
          } catch (f) {}
          break;
        }
      }

      c = c.return;
    }
  }

  function ch(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = K();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (U & c) === c && (4 === T || 3 === T && (U & 62914560) === U && 500 > G() - $f ? Sg(a, 0) : xg |= c);
    Z(a, b);
  }

  function ag(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === Nc() ? 1 : 2 : (0 === Jg && (Jg = wg), b = pc(62914560 & ~Jg), 0 === b && (b = 4194304)));
    c = K();
    a = Ng(a, b);
    null !== a && (rc(a, b, c), Z(a, c));
  }

  var gh;

  gh = function gh(a, b, c) {
    var d = b.lanes;
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || D.current) gd = !0;else if (0 !== (c & d)) gd = 0 !== (a.flags & 16384) ? !0 : !1;else {
        gd = !1;

        switch (b.tag) {
          case 3:
            af(b);
            ce();
            break;

          case 5:
            Rd(b);
            break;

          case 1:
            E(b.type) && cc(b);
            break;

          case 4:
            Pd(b, b.stateNode.containerInfo);
            break;

          case 10:
            cd(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return cf(a, b, c);
              A(M, M.current & 1);
              b = Re(a, b, c);
              return null !== b ? b.sibling : null;
            }

            A(M, M.current & 1);
            break;

          case 19:
            d = 0 !== (c & b.childLanes);

            if (0 !== (a.flags & 64)) {
              if (d) return kf(a, b, c);
              b.flags |= 64;
            }

            var e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            A(M, M.current);
            if (d) break;else return null;

          case 23:
          case 24:
            return b.lanes = 0, We(a, b, c);
        }

        return Re(a, b, c);
      }
    } else gd = !1;
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        e = Zb(b, B.current);
        fd(b, c);
        e = le(null, b, d, a, e, c);
        b.flags |= 1;

        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;

          if (E(d)) {
            var f = !0;
            cc(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          id(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && sd(b, d, g, a);
          e.updater = vd;
          b.stateNode = e;
          e._reactInternals = b;
          zd(b, d, a, c);
          b = $e(null, b, d, !0, f, c);
        } else b.tag = 0, S(null, b, e, c), b = b.child;

        return b;

      case 16:
        e = b.elementType;

        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = lh(e);
          a = Xc(e, a);

          switch (f) {
            case 0:
              b = Ve(null, b, e, a, c);
              break a;

            case 1:
              b = Ze(null, b, e, a, c);
              break a;

            case 11:
              b = Pe(null, b, e, a, c);
              break a;

            case 14:
              b = Se(null, b, e, Xc(e.type, a), d, c);
              break a;
          }

          throw Error(q(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ve(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Ze(a, b, d, e, c);

      case 3:
        af(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(q(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        jd(a, b);
        od(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) ce(), b = Re(a, b, c);else {
          e = b.stateNode;
          if (f = e.hydrate) Va ? (Vd = Kb(b.stateNode.containerInfo), Ud = b, f = Wd = !0) : f = !1;

          if (f) {
            if (Va && (a = e.mutableSourceEagerHydrationData, null != a)) for (e = 0; e < a.length; e += 2) {
              f = a[e], g = a[e + 1], Sa ? f._workInProgressVersionPrimary = g : f._workInProgressVersionSecondary = g, de.push(f);
            }
            c = Kd(b, null, d, c);

            for (b.child = c; c;) {
              c.flags = c.flags & -3 | 1024, c = c.sibling;
            }
          } else S(a, b, d, c), ce();

          b = b.child;
        }
        return b;

      case 5:
        return Rd(b), null === a && $d(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ma(d, e) ? g = null : null !== f && Ma(d, f) && (b.flags |= 16), Ye(a, b), S(a, b, g, c), b.child;

      case 6:
        return null === a && $d(b), null;

      case 13:
        return cf(a, b, c);

      case 4:
        return Pd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Jd(b, null, d, c) : S(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), Pe(a, b, d, e, c);

      case 7:
        return S(a, b, b.pendingProps, c), b.child;

      case 8:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return S(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          cd(b, f);

          if (null !== g) {
            var h = g.value;
            f = I(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !D.current) {
                b = Re(a, b, c);
                break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;

              if (null !== k) {
                g = h.child;

                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = kd(-1, c & -c), l.tag = 2, md(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    null !== l && (l.lanes |= c);
                    ed(h.return, c);
                    k.lanes |= c;
                    break;
                  }

                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }

                h = g.sibling;

                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }

                g = g.return;
              }
              h = g;
            }
          }

          S(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, fd(b, c), e = J(e, f.unstable_observedBits), d = d(e), b.flags |= 1, S(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = Xc(e, b.pendingProps), f = Xc(e.type, f), Se(a, b, e, f, d, c);

      case 15:
        return Ue(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Xc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, E(d) ? (a = !0, cc(b)) : a = !1, fd(b, c), xd(b, d, e), zd(b, d, e, c), $e(null, b, d, !0, a, c);

      case 19:
        return kf(a, b, c);

      case 23:
        return We(a, b, c);

      case 24:
        return We(a, b, c);
    }

    throw Error(q(156, b.tag));
  };

  var mh = {
    current: !1
  },
      nh = m.unstable_flushAllWithoutAsserting,
      oh = "function" === typeof nh;

  function ph() {
    if (void 0 !== nh) return nh();

    for (var a = !1; Qg();) {
      a = !0;
    }

    return a;
  }

  function qh(a) {
    try {
      ph(), og(function () {
        ph() ? qh(a) : a();
      });
    } catch (b) {
      a(b);
    }
  }

  var rh = 0,
      sh = !1;

  function th(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function Yd(a, b, c, d) {
    return new th(a, b, c, d);
  }

  function Te(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function lh(a) {
    if ("function" === typeof a) return Te(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }

    return 2;
  }

  function Ed(a, b) {
    var c = a.alternate;
    null === c ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Gd(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Te(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case fa:
        return Id(c.children, e, f, b);

      case ra:
        g = 8;
        e |= 16;
        break;

      case ha:
        g = 8;
        e |= 1;
        break;

      case ia:
        return a = Yd(12, c, b, e | 8), a.elementType = ia, a.type = ia, a.lanes = f, a;

      case ma:
        return a = Yd(13, c, b, e), a.type = ma, a.elementType = ma, a.lanes = f, a;

      case na:
        return a = Yd(19, c, b, e), a.elementType = na, a.lanes = f, a;

      case sa:
        return ef(c, e, f, b);

      case ta:
        return a = Yd(24, c, b, e), a.elementType = ta, a.lanes = f, a;

      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ja:
            g = 10;
            break a;

          case ka:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;

          case qa:
            g = 22;
            break a;
        }
        throw Error(q(130, null == a ? a : typeof a, ""));
    }
    b = Yd(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function Id(a, b, c, d) {
    a = Yd(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function ef(a, b, c, d) {
    a = Yd(23, a, d, b);
    a.elementType = sa;
    a.lanes = c;
    return a;
  }

  function Fd(a, b, c) {
    a = Yd(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function Hd(a, b, c) {
    b = Yd(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function uh(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = qc(0);
    this.expirationTimes = qc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = qc(0);
    Va && (this.mutableSourceEagerHydrationData = null);
  }

  function vh(a) {
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(q(188));
      throw Error(q(268, Object.keys(a)));
    }

    a = Aa(b);
    return null === a ? null : a.stateNode;
  }

  function wh(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function xh(a, b) {
    wh(a, b);
    (a = a.alternate) && wh(a, b);
  }

  function yh(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }

  function zh() {
    return null;
  }

  exports.IsThisRendererActing = mh;

  exports.act = function (a) {
    function b() {
      rh--;
      sg.current = c;
      mh.current = d;
    }

    !1 === sh && (sh = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
    rh++;
    var c = sg.current,
        d = mh.current;
    sg.current = !0;
    mh.current = !0;

    try {
      var e = ah(a);
    } catch (f) {
      throw b(), f;
    }

    if (null !== e && "object" === typeof e && "function" === typeof e.then) return {
      then: function then(a, d) {
        e.then(function () {
          1 < rh || !0 === oh && !0 === c ? (b(), a()) : qh(function (c) {
            b();
            c ? d(c) : a();
          });
        }, function (a) {
          b();
          d(a);
        });
      }
    };

    try {
      1 !== rh || !1 !== oh && !1 !== c || ph(), b();
    } catch (f) {
      throw b(), f;
    }

    return {
      then: function then(a) {
        a();
      }
    };
  };

  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 67108864, b);
      xh(a, 67108864);
    }
  };

  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = K(),
          c = td(a);
      ud(a, c, b);
      xh(a, c);
    }
  };

  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;

        if (b.hydrate) {
          var c = ic(b.pendingLanes);
          b.expiredLanes |= c & b.pendingLanes;
          Z(b, G());
          0 === (V & 48) && (zg(), H());
        }

        break;

      case 13:
        var d = K();
        bh(function () {
          return ud(a, 1, d);
        });
        xh(a, 4);
    }
  };

  exports.attemptUserBlockingHydration = function (a) {
    if (13 === a.tag) {
      var b = K();
      ud(a, 4, b);
      xh(a, 4);
    }
  };

  exports.batchedEventUpdates = function (a, b) {
    var c = V;
    V |= 2;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.batchedUpdates = ah;

  exports.createComponentSelector = function (a) {
    return {
      $$typeof: cg,
      value: a
    };
  };

  exports.createContainer = function (a, b, c) {
    a = new uh(a, b, c);
    b = Yd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    a.current = b;
    b.stateNode = a;
    id(b);
    return a;
  };

  exports.createHasPsuedoClassSelector = function (a) {
    return {
      $$typeof: dg,
      value: a
    };
  };

  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ea,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };

  exports.createRoleSelector = function (a) {
    return {
      $$typeof: eg,
      value: a
    };
  };

  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: fg,
      value: a
    };
  };

  exports.createTextSelector = function (a) {
    return {
      $$typeof: gg,
      value: a
    };
  };

  exports.deferredUpdates = function (a) {
    return Pc(97, a);
  };

  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = V;
    V |= 4;

    try {
      return Pc(98, a.bind(null, b, c, d, e));
    } finally {
      V = f, 0 === V && (zg(), H());
    }
  };

  exports.findAllNodes = mg;

  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(q(363));
    b = mg(a, b);
    a = [];

    for (var c = 0; c < b.length; c++) {
      a.push(db(b[c]));
    }

    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];

      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
        if (b !== h) {
          var k = a[h],
              l = k.x,
              n = l + k.width,
              t = k.y,
              p = t + k.height;

          if (d >= l && f >= t && e <= n && g <= p) {
            a.splice(b, 1);
            break;
          } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
            t > f && (k.height += t - f, k.y = f);
            p < g && (k.height = g - t);
            a.splice(b, 1);
            break;
          } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
            l > d && (k.width += l - d, k.x = d);
            n < e && (k.width = e - l);
            a.splice(b, 1);
            break;
          }
        }
      }
    }

    return a;
  };

  exports.findHostInstance = vh;

  exports.findHostInstanceWithNoPortals = function (a) {
    a = Ba(a);
    return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
  };

  exports.findHostInstanceWithWarning = function (a) {
    return vh(a);
  };

  exports.flushControlled = function (a) {
    var b = V;
    V |= 1;

    try {
      Pc(99, a);
    } finally {
      V = b, 0 === V && (zg(), H());
    }
  };

  exports.flushDiscreteUpdates = function () {
    0 === (V & 49) && ($g(), Qg());
  };

  exports.flushPassiveEffects = Qg;
  exports.flushSync = bh;

  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(q(363));
    a = ig(a);
    b = lg(a, b);
    b = Array.from(b);

    for (a = 0; a < b.length;) {
      var c = b[a++];

      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;

        for (c = c.child; null !== c;) {
          b.push(c), c = c.sibling;
        }
      }
    }

    return !1;
  };

  exports.getCurrentUpdateLanePriority = function () {
    return hc;
  };

  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(q(363));
    var c = 0,
        d = [];
    a = [ig(a), 0];

    for (var e = 0; e < a.length;) {
      var f = a[e++],
          g = a[e++],
          h = b[g];
      if (5 !== f.tag || !fb(f)) if (jg(f, h) && (d.push(kg(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) {
        a.push(f, g), f = f.sibling;
      }
    }

    if (c < b.length) {
      for (a = []; c < b.length; c++) {
        a.push(kg(b[c]));
      }

      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }

    return null;
  };

  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return Da(a.child.stateNode);

      default:
        return a.child.stateNode;
    }
  };

  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ca.ReactCurrentDispatcher,
      findHostInstanceByFiber: yh,
      findFiberByHostInstance: a.findFiberByHostInstance || zh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!b.isDisabled && b.supportsFiber) try {
        ec = b.inject(a), fc = b;
      } catch (c) {}
      a = !0;
    }
    return a;
  };

  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(q(363));
    a = mg(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };

  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };

  exports.runWithPriority = function (a, b) {
    var c = hc;

    try {
      return hc = a, b();
    } finally {
      hc = c;
    }
  };

  exports.shouldSuspend = function () {
    return !1;
  };

  exports.unbatchedUpdates = function (a, b) {
    var c = V;
    V &= -2;
    V |= 8;

    try {
      return a(b);
    } finally {
      V = c, 0 === V && (zg(), H());
    }
  };

  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
        f = K(),
        g = td(e);

    a: if (c) {
      c = c._reactInternals;

      b: {
        if (xa(c) !== c || 1 !== c.tag) throw Error(q(170));
        var h = c;

        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;

            case 1:
              if (E(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }

          }

          h = h.return;
        } while (null !== h);

        throw Error(q(171));
      }

      if (1 === c.tag) {
        var k = c.type;

        if (E(k)) {
          c = bc(c, k, h);
          break a;
        }
      }

      c = h;
    } else c = Xb;

    null === b.context ? b.context = c : b.pendingContext = c;
    b = kd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    md(e, b);
    ud(e, g, f);
    return g;
  };

  return exports;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YuTi")(module)))

/***/ }),

/***/ "/MSm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ImportButton; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var esm_objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__("wpWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__("668i");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__("Ovef");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__("x6Ns");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js
var Grow = __webpack_require__("bqsI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js








var SnackbarContent_styles = function styles(theme) {
  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = Object(colorManipulator["b" /* emphasize */])(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: Object(esm_extends["a" /* default */])({}, theme.typography.body2, Object(defineProperty["a" /* default */])({
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1
    }, theme.breakpoints.up('sm'), {
      flexGrow: 'initial',
      minWidth: 288
    })),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var SnackbarContent_SnackbarContent = /*#__PURE__*/react["forwardRef"](function SnackbarContent(props, ref) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      other = Object(esm_objectWithoutProperties["a" /* default */])(props, ["action", "classes", "className", "message", "role"]);

  return /*#__PURE__*/react["createElement"](Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    role: role,
    square: true,
    elevation: 6,
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: classes.message
  }, message), action ? /*#__PURE__*/react["createElement"]("div", {
    className: classes.action
  }, action) : null);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_SnackbarContent_SnackbarContent = (Object(withStyles["a" /* default */])(SnackbarContent_styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent_SnackbarContent));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js













var Snackbar_styles = function styles(theme) {
  var top1 = {
    top: 8
  };
  var bottom1 = {
    bottom: 8
  };
  var right = {
    justifyContent: 'flex-end'
  };
  var left = {
    justifyContent: 'flex-start'
  };
  var top3 = {
    top: 24
  };
  var bottom3 = {
    bottom: 24
  };
  var right3 = {
    right: 24
  };
  var left3 = {
    left: 24
  };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: Object(esm_extends["a" /* default */])({}, top1, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({}, top3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: Object(esm_extends["a" /* default */])({}, bottom1, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({}, bottom3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: Object(esm_extends["a" /* default */])({}, top1, right, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({
      left: 'auto'
    }, top3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: Object(esm_extends["a" /* default */])({}, bottom1, right, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({
      left: 'auto'
    }, bottom3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: Object(esm_extends["a" /* default */])({}, top1, left, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({
      right: 'auto'
    }, top3, left3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: Object(esm_extends["a" /* default */])({}, bottom1, left, Object(defineProperty["a" /* default */])({}, theme.breakpoints.up('sm'), Object(esm_extends["a" /* default */])({
      right: 'auto'
    }, bottom3, left3)))
  };
};
var Snackbar_Snackbar = /*#__PURE__*/react["forwardRef"](function Snackbar(props, ref) {
  var action = props.action,
      _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'bottom',
    horizontal: 'center'
  } : _props$anchorOrigin;

  var vertical = _props$anchorOrigin.vertical,
      horizontal = _props$anchorOrigin.horizontal,
      _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati,
      children = props.children,
      classes = props.classes,
      className = props.className,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      ContentProps = props.ContentProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      message = props.message,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow["a" /* default */] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? {
    enter: transitions["b" /* duration */].enteringScreen,
    exit: transitions["b" /* duration */].leavingScreen
  } : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = Object(esm_objectWithoutProperties["a" /* default */])(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var timerAutoHide = react["useRef"]();

  var _React$useState = react["useState"](true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var handleClose = Object(useEventCallback["a" /* default */])(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = Object(useEventCallback["a" /* default */])(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  react["useEffect"](function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  var handleResume = react["useCallback"](function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  var handleExited = function handleExited() {
    setExited(true);
  };

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  react["useEffect"](function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return /*#__PURE__*/react["createElement"](ClickAwayListener["a" /* default */], Object(esm_extends["a" /* default */])({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes["anchorOrigin".concat(Object(capitalize["a" /* default */])(vertical)).concat(Object(capitalize["a" /* default */])(horizontal))], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    appear: true,
    in: open,
    onEnter: Object(createChainedFunction["a" /* default */])(handleEnter, onEnter),
    onEntered: onEntered,
    onEntering: onEntering,
    onExit: onExit,
    onExited: Object(createChainedFunction["a" /* default */])(handleExited, onExited),
    onExiting: onExiting,
    timeout: transitionDuration,
    direction: vertical === 'top' ? 'down' : 'up'
  }, TransitionProps), children || /*#__PURE__*/react["createElement"](esm_SnackbarContent_SnackbarContent, Object(esm_extends["a" /* default */])({
    message: message,
    action: action
  }, ContentProps)))));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Snackbar_Snackbar = (Object(withStyles["a" /* default */])(Snackbar_styles, {
  flip: false,
  name: 'MuiSnackbar'
})(Snackbar_Snackbar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AttachFile.js
var AttachFile = __webpack_require__("vrJG");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CloudUpload.js
var CloudUpload = __webpack_require__("tB9+");
var CloudUpload_default = /*#__PURE__*/__webpack_require__.n(CloudUpload);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = new Map([['avi', 'video/avi'], ['gif', 'image/gif'], ['ico', 'image/x-icon'], ['jpeg', 'image/jpeg'], ['jpg', 'image/jpeg'], ['mkv', 'video/x-matroska'], ['mov', 'video/quicktime'], ['mp4', 'video/mp4'], ['pdf', 'application/pdf'], ['png', 'image/png'], ['zip', 'application/zip'], ['doc', 'application/msword'], ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);

  if (typeof f.path !== 'string') {
    // on electron, path is already set to the absolute path
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, 'path', {
      value: typeof path === 'string' ? path // If <input webkitdirectory> is set,
      // the File will have a {webkitRelativePath} property
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
      : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }

  return f;
}

function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf('.') !== -1;

  if (hasExtension && !file.type) {
    var ext = name.split('.').pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);

    if (type) {
      Object.defineProperty(file, 'type', {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }

  return file;
}
// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file-selector.js


var FILES_TO_IGNORE = [// Thumbnail cache files for macOS and Windows
'.DS_Store', 'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */

function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt)];
    });
  });
}

function isDragEvt(value) {
  return !!value.dataTransfer;
}

function getInputFiles(evt) {
  var files = isInput(evt.target) ? evt.target.files ? fromList(evt.target.files) : [] : [];
  return files.map(function (file) {
    return toFileWithPath(file);
  });
}

function isInput(value) {
  return value !== null;
}

function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function () {
    var items, files;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items) return [3
          /*break*/
          , 2];
          items = fromList(dt.items).filter(function (item) {
            return item.kind === 'file';
          }); // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
          // only 'dragstart' and 'drop' has access to the data (source node)

          if (type !== 'drop') {
            return [2
            /*return*/
            , items];
          }

          return [4
          /*yield*/
          , Promise.all(items.map(toFilePromises))];

        case 1:
          files = _a.sent();
          return [2
          /*return*/
          , noIgnoredFiles(flatten(files))];

        case 2:
          return [2
          /*return*/
          , noIgnoredFiles(fromList(dt.files).map(function (file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}

function noIgnoredFiles(files) {
  return files.filter(function (file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
} // IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList


function fromList(items) {
  var files = []; // tslint:disable: prefer-for-of

  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }

  return files;
} // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem


function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== 'function') {
    return fromDataTransferItem(item);
  }

  var entry = item.webkitGetAsEntry(); // Safari supports dropping an image node from a different window and can be retrieved using
  // the DataTransferItem.getAsFile() API
  // NOTE: FileSystemEntry.file() throws if trying to get the file

  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }

  return fromDataTransferItem(item);
}

function flatten(items) {
  return items.reduce(function (acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}

function fromDataTransferItem(item) {
  var file = item.getAsFile();

  if (!file) {
    return Promise.reject(item + " is not a File");
  }

  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry


function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry


function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function (resolve, reject) {
    var entries = [];

    function readEntries() {
      var _this = this; // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
      // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries


      reader.readEntries(function (batch) {
        return __awaiter(_this, void 0, void 0, function () {
          var files, err_1, items;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length) return [3
                /*break*/
                , 5];
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Promise.all(entries)];

              case 2:
                files = _a.sent();
                resolve(files);
                return [3
                /*break*/
                , 4];

              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3
                /*break*/
                , 4];

              case 4:
                return [3
                /*break*/
                , 6];

              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items); // Continue reading

                readEntries();
                _a.label = 6;

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, function (err) {
        reject(err);
      });
    }

    readEntries();
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry


function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , new Promise(function (resolve, reject) {
        entry.file(function (file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function (err) {
          reject(err);
        });
      })];
    });
  });
}
// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/index.js

// EXTERNAL MODULE: ./node_modules/attr-accept/dist/es/index.js
var es = __webpack_require__("X1Co");
var es_default = /*#__PURE__*/__webpack_require__.n(es);

// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/utils/index.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

 // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || es_default()(file, accept);
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) return file.size >= minSize && file.size <= maxSize;else if (isDefined(minSize)) return file.size >= minSize;else if (isDefined(maxSize)) return file.size <= maxSize;
  }

  return true;
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple;

  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every(function (file) {
    return fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize);
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}
function isKindFile(item) {
  return _typeof(item) === 'object' && item !== null && item.kind === 'file';
} // allow the entire document to be a drag target

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/index.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/* eslint prefer-template: 0 */





/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = Object(react["forwardRef"])(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, ["children"]);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, ["open"]);

  Object(react["useImperativeHandle"])(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return react_default.a.createElement(react["Fragment"], null, children(_objectSpread({}, props, {
    open: open
  })));
});
Dropzone.displayName = 'Dropzone';
/* harmony default export */ var dist_es = (Dropzone);
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {File[]} rejectedFiles List of rejected files
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state and some helper functions.
 *
 * @typedef {object} DropzoneState
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} draggedFiles Files in active drag
 * @property {File[]} acceptedFiles Accepted files
 * @property {File[]} rejectedFiles Rejected files
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  rejectedFiles: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {string|string[]} [props.accept] Set accepted file types.
 * See https://github.com/okonet/attr-accept for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all.
 * See: https://github.com/react-dropzone/react-dropzone/issues/276
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
 * If `multiple` is set to false and additional files are droppped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 *
 * @returns {DropzoneState}
 */

function useDropzone() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      accept = _ref2.accept,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
      getFilesFromEvent = _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
      _ref2$maxSize = _ref2.maxSize,
      maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
      _ref2$minSize = _ref2.minSize,
      minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
      onDragEnter = _ref2.onDragEnter,
      onDragLeave = _ref2.onDragLeave,
      onDragOver = _ref2.onDragOver,
      onDrop = _ref2.onDrop,
      onDropAccepted = _ref2.onDropAccepted,
      onDropRejected = _ref2.onDropRejected,
      onFileDialogCancel = _ref2.onFileDialogCancel,
      _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
      preventDropOnDocument = _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
      _ref2$noClick = _ref2.noClick,
      noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
      _ref2$noKeyboard = _ref2.noKeyboard,
      noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
      _ref2$noDrag = _ref2.noDrag,
      noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
      _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
      noDragEventsBubbling = _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

  var rootRef = Object(react["useRef"])(null);
  var inputRef = Object(react["useRef"])(null);

  var _useReducer = Object(react["useReducer"])(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

  var openFileDialog = Object(react["useCallback"])(function () {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      });
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch]); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  Object(react["useEffect"])(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = Object(react["useCallback"])(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = Object(react["useCallback"])(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = Object(react["useCallback"])(function () {
    dispatch({
      type: 'blur'
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = Object(react["useCallback"])(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick]);
  var dragTargetsRef = Object(react["useRef"])([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  Object(react["useEffect"])(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = Object(react["useCallback"])(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event); // Count the dropzone and any children that are entered.

    if (dragTargetsRef.current.indexOf(event.target) === -1) {
      dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    }

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        dispatch({
          draggedFiles: draggedFiles,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = Object(react["useCallback"])(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (isEvtWithFiles(event) && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = Object(react["useCallback"])(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return target !== event.target && rootRef.current && rootRef.current.contains(target);
    });
    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var onDropCb = Object(react["useCallback"])(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var rejectedFiles = [];
        files.forEach(function (file) {
          if (fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize)) {
            acceptedFiles.push(file);
          } else {
            rejectedFiles.push(file);
          }
        });

        if (!multiple && acceptedFiles.length > 1) {
          rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0))); // Reject everything and empty accepted files
        }

        dispatch({
          acceptedFiles: acceptedFiles,
          rejectedFiles: rejectedFiles,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(acceptedFiles, rejectedFiles, event);
        }

        if (rejectedFiles.length > 0 && onDropRejected) {
          onDropRejected(rejectedFiles, event);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(acceptedFiles, event);
        }
      });
    }

    dispatch({
      type: 'reset'
    });
  }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = Object(react["useMemo"])(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          onKeyDown = _ref3.onKeyDown,
          onFocus = _ref3.onFocus,
          onBlur = _ref3.onBlur,
          onClick = _ref3.onClick,
          onDragEnter = _ref3.onDragEnter,
          onDragOver = _ref3.onDragOver,
          onDragLeave = _ref3.onDragLeave,
          onDrop = _ref3.onDrop,
          rest = _objectWithoutProperties(_ref3, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

      return _objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}, {}, rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = Object(react["useCallback"])(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = Object(react["useMemo"])(function () {
    return function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
          onChange = _ref4.onChange,
          onClick = _ref4.onClick,
          rest = _objectWithoutProperties(_ref4, ["refKey", "onChange", "onClick"]);

      var inputProps = _defineProperty({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread({}, inputProps, {}, rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread({}, state, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case 'focus':
      return _objectSpread({}, state, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread({}, state, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread({}, state, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread({}, state, {
        acceptedFiles: action.acceptedFiles,
        rejectedFiles: action.rejectedFiles
      });

    case 'reset':
      return _objectSpread({}, state, {
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: [],
        rejectedFiles: []
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__("9jPY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__("XX3T");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("FrwU");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__("PsDL");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__("oTnw");
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__("ZPUd");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__("lPg6");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__("E8kk");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__("xV1m");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__("kfFl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__("+JwS");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__("EQI2");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__("yv+Y");

// CONCATENATED MODULE: ./node_modules/material-ui-dropzone/dist/index.es.js




































function isImage(file) {
  if (file.type.split('/')[0] === 'image') {
    return true;
  }
}

function convertBytesToMbsOrKbs(filesize) {
  var size = '';

  if (filesize >= 1048576) {
    size = filesize / 1048576 + ' megabytes';
  } else if (filesize >= 1024) {
    size = filesize / 1024 + ' kilobytes';
  } else {
    size = filesize + ' bytes';
  }

  return size;
}

function createFileFromUrl(_x) {
  return _createFileFromUrl.apply(this, arguments);
}

function _createFileFromUrl() {
  _createFileFromUrl = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(url) {
    var response, data, metadata, filename;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.blob();

          case 5:
            data = _context.sent;
            metadata = {
              type: data.type
            };
            filename = url.replace(/\?.+/, '').split('/').pop();
            return _context.abrupt("return", new File([data], filename, metadata));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createFileFromUrl.apply(this, arguments);
}

function readFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function (event) {
      var _event$target;

      resolve(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
    };

    reader.onerror = function (event) {
      reader.abort();
      reject(event);
    };

    reader.readAsDataURL(file);
  });
}

var index_es_styles = function styles(_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      spacing = _ref.spacing;
  return {
    root: {},
    imageContainer: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      '&:hover $image': {
        opacity: 0.3
      },
      '&:hover $removeButton': {
        opacity: 1
      }
    },
    image: {
      height: 100,
      width: 'initial',
      maxWidth: '100%',
      color: palette.text.primary,
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      boxSizing: 'border-box',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
      borderRadius: shape.borderRadius,
      zIndex: 5,
      opacity: 1
    },
    removeButton: {
      transition: '.5s ease',
      position: 'absolute',
      opacity: 0,
      top: spacing(-1),
      right: spacing(-1),
      width: 40,
      height: 40,
      '&:focus': {
        opacity: 1
      }
    }
  };
};

var _ref5 = /*#__PURE__*/Object(react["createElement"])(Delete_default.a, null);

function PreviewList(_ref2) {
  var fileObjects = _ref2.fileObjects,
      handleRemove = _ref2.handleRemove,
      showFileNames = _ref2.showFileNames,
      useChipsForPreview = _ref2.useChipsForPreview,
      previewChipProps = _ref2.previewChipProps,
      previewGridClasses = _ref2.previewGridClasses,
      previewGridProps = _ref2.previewGridProps,
      classes = _ref2.classes,
      getPreviewIcon = _ref2.getPreviewIcon;

  if (useChipsForPreview) {
    return Object(react["createElement"])(Grid["a" /* default */], extends_default()({
      spacing: 1,
      direction: "row"
    }, previewGridProps.container, {
      container: true,
      className: Object(clsx_m["a" /* default */])(classes.root, previewGridClasses.container)
    }), fileObjects.map(function (fileObject, i) {
      var _ref3, _fileObject$file;

      return Object(react["createElement"])(Grid["a" /* default */], extends_default()({}, previewGridProps.item, {
        item: true,
        key: "".concat((_ref3 = (_fileObject$file = fileObject.file) === null || _fileObject$file === void 0 ? void 0 : _fileObject$file.name) !== null && _ref3 !== void 0 ? _ref3 : 'file', "-").concat(i),
        className: classes.imageContainer
      }), Object(react["createElement"])(Chip["a" /* default */], extends_default()({
        variant: "outlined"
      }, previewChipProps, {
        label: fileObject.file.name,
        onDelete: handleRemove(i)
      })));
    }));
  }

  return Object(react["createElement"])(Grid["a" /* default */], extends_default()({
    spacing: 8
  }, previewGridProps.container, {
    container: true,
    className: Object(clsx_m["a" /* default */])(classes.root, previewGridClasses.container)
  }), fileObjects.map(function (fileObject, i) {
    var _ref4, _fileObject$file2;

    return Object(react["createElement"])(Grid["a" /* default */], extends_default()({
      xs: 4
    }, previewGridProps.item, {
      item: true,
      key: "".concat((_ref4 = (_fileObject$file2 = fileObject.file) === null || _fileObject$file2 === void 0 ? void 0 : _fileObject$file2.name) !== null && _ref4 !== void 0 ? _ref4 : 'file', "-").concat(i),
      className: Object(clsx_m["a" /* default */])(classes.imageContainer, previewGridClasses.item)
    }), getPreviewIcon(fileObject, classes), showFileNames && Object(react["createElement"])(Typography["a" /* default */], {
      variant: "body1",
      component: "p"
    }, fileObject.file.name), Object(react["createElement"])(Fab["a" /* default */], {
      onClick: handleRemove(i),
      "aria-label": "Delete",
      className: classes.removeButton
    }, _ref5));
  }));
}

 false ? undefined : void 0;
var PreviewList$1 = Object(withStyles["a" /* default */])(index_es_styles, {
  name: 'MuiDropzonePreviewList'
})(PreviewList);
var variantIcon = {
  success: CheckCircle_default.a,
  warning: Warning_default.a,
  error: Error_default.a,
  info: Info_default.a
};

var styles$1 = function styles(theme) {
  return {
    successAlert: {
      backgroundColor: theme.palette.success.main
    },
    errorAlert: {
      backgroundColor: theme.palette.error.main
    },
    infoAlert: {
      backgroundColor: theme.palette.info.main
    },
    warningAlert: {
      backgroundColor: theme.palette.warning.main
    },
    message: {
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        marginRight: theme.spacing(1)
      }
    },
    icon: {
      fontSize: 20,
      opacity: 0.9
    },
    closeButton: {}
  };
};

function SnackbarContentWrapper(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = objectWithoutProperties_default()(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return Object(react["createElement"])(esm_SnackbarContent_SnackbarContent, extends_default()({
    className: Object(clsx_m["a" /* default */])(classes["".concat(variant, "Alert")], className),
    "aria-describedby": "client-snackbar",
    message: Object(react["createElement"])("span", {
      id: "client-snackbar",
      className: classes.message
    }, Object(react["createElement"])(Icon, {
      className: classes.icon
    }), message),
    action: [Object(react["createElement"])(IconButton["a" /* default */], {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.closeButton,
      onClick: onClose
    }, Object(react["createElement"])(Close_default.a, {
      className: classes.icon
    }))]
  }, other));
}

 false ? undefined : void 0;
var SnackbarContentWrapper$1 = Object(withStyles["a" /* default */])(styles$1, {
  name: 'MuiDropzoneSnackbar'
})(SnackbarContentWrapper);

var styles$2 = function styles(_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      spacing = _ref.spacing;
  return {
    '@keyframes progress': {
      '0%': {
        backgroundPosition: '0 0'
      },
      '100%': {
        backgroundPosition: '-70px 0'
      }
    },
    root: {
      position: 'relative',
      width: '100%',
      minHeight: '250px',
      backgroundColor: palette.background.paper,
      border: 'dashed',
      borderColor: palette.divider,
      borderRadius: shape.borderRadius,
      boxSizing: 'border-box',
      cursor: 'pointer',
      overflow: 'hidden'
    },
    active: {
      animation: '$progress 2s linear infinite !important',
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.background.paper, ", ").concat(palette.background.paper, " 25px, ").concat(palette.divider, " 25px, ").concat(palette.divider, " 50px)"),
      backgroundSize: '150% 100%',
      border: 'solid',
      borderColor: palette.primary.light
    },
    invalid: {
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.error.light, ", ").concat(palette.error.light, " 25px, ").concat(palette.error.dark, " 25px, ").concat(palette.error.dark, " 50px)"),
      borderColor: palette.error.main
    },
    textContainer: {
      textAlign: 'center'
    },
    text: {
      marginBottom: spacing(3),
      marginTop: spacing(3)
    },
    icon: {
      width: 51,
      height: 51,
      color: palette.text.primary
    }
  };
};

var defaultSnackbarAnchorOrigin = {
  horizontal: 'left',
  vertical: 'bottom'
};

var index_es_defaultGetPreviewIcon = function defaultGetPreviewIcon(fileObject, classes) {
  if (isImage(fileObject.file)) {
    return Object(react["createElement"])("img", {
      className: classes.image,
      role: "presentation",
      src: fileObject.data
    });
  }

  return Object(react["createElement"])(AttachFile_default.a, {
    className: classes.image
  });
};
/**
 * This components creates a Material-UI Dropzone, with previews and snackbar notifications.
 */


var index_es_DropzoneAreaBase = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneAreaBase, _React$PureComponent);

  function DropzoneAreaBase() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneAreaBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneAreaBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      openSnackBar: false,
      snackbarMessage: '',
      snackbarVariant: 'success'
    };

    _this.handleDropAccepted = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(acceptedFiles, evt) {
        var _this$props, fileObjects, filesLimit, getFileAddedMessage, getFileLimitExceedMessage, onAdd, onDrop, fileObjs, message;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = _this.props, fileObjects = _this$props.fileObjects, filesLimit = _this$props.filesLimit, getFileAddedMessage = _this$props.getFileAddedMessage, getFileLimitExceedMessage = _this$props.getFileLimitExceedMessage, onAdd = _this$props.onAdd, onDrop = _this$props.onDrop;

                if (!(filesLimit > 1 && fileObjects.length + acceptedFiles.length > filesLimit)) {
                  _context2.next = 4;
                  break;
                }

                _this.setState({
                  openSnackBar: true,
                  snackbarMessage: getFileLimitExceedMessage(filesLimit),
                  snackbarVariant: 'error'
                }, _this.notifyAlert);

                return _context2.abrupt("return");

              case 4:
                // Notify Drop event
                if (onDrop) {
                  onDrop(acceptedFiles, evt);
                } // Retrieve fileObjects data


                _context2.next = 7;
                return Promise.all(acceptedFiles.map( /*#__PURE__*/function () {
                  var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(file) {
                    var data;
                    return regenerator_default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return readFile(file);

                          case 2:
                            data = _context.sent;
                            return _context.abrupt("return", {
                              file: file,
                              data: data
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 7:
                fileObjs = _context2.sent; // Notify added files

                if (onAdd) {
                  onAdd(fileObjs);
                } // Display message


                message = fileObjs.reduce(function (msg, fileObj) {
                  return msg + getFileAddedMessage(fileObj.file.name);
                }, '');

                _this.setState({
                  openSnackBar: true,
                  snackbarMessage: message,
                  snackbarVariant: 'success'
                }, _this.notifyAlert);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleDropRejected = function (rejectedFiles, evt) {
      var _this$props2 = _this.props,
          acceptedFiles = _this$props2.acceptedFiles,
          filesLimit = _this$props2.filesLimit,
          fileObjects = _this$props2.fileObjects,
          getDropRejectMessage = _this$props2.getDropRejectMessage,
          getFileLimitExceedMessage = _this$props2.getFileLimitExceedMessage,
          maxFileSize = _this$props2.maxFileSize,
          onDropRejected = _this$props2.onDropRejected;
      var message = '';

      if (fileObjects.length + rejectedFiles.length > filesLimit) {
        message = getFileLimitExceedMessage(filesLimit);
      } else {
        rejectedFiles.forEach(function (rejectedFile) {
          message = getDropRejectMessage(rejectedFile, acceptedFiles, maxFileSize);
        });
      }

      if (onDropRejected) {
        onDropRejected(rejectedFiles, evt);
      }

      _this.setState({
        openSnackBar: true,
        snackbarMessage: message,
        snackbarVariant: 'error'
      }, _this.notifyAlert);
    };

    _this.handleRemove = function (fileIndex) {
      return function (event) {
        event.stopPropagation();
        var _this$props3 = _this.props,
            fileObjects = _this$props3.fileObjects,
            getFileRemovedMessage = _this$props3.getFileRemovedMessage,
            onDelete = _this$props3.onDelete; // Find removed fileObject

        var removedFileObj = fileObjects[fileIndex]; // Notify removed file

        if (onDelete) {
          onDelete(removedFileObj, fileIndex);
        }

        _this.setState({
          openSnackBar: true,
          snackbarMessage: getFileRemovedMessage(removedFileObj.file.name),
          snackbarVariant: 'info'
        }, _this.notifyAlert);
      };
    };

    _this.handleCloseSnackbar = function () {
      _this.setState({
        openSnackBar: false
      });
    };

    return _this;
  }

  createClass_default()(DropzoneAreaBase, [{
    key: "notifyAlert",
    value: function notifyAlert() {
      var onAlert = this.props.onAlert;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          snackbarMessage = _this$state.snackbarMessage,
          snackbarVariant = _this$state.snackbarVariant;

      if (openSnackBar && onAlert) {
        onAlert(snackbarMessage, snackbarVariant);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          acceptedFiles = _this$props4.acceptedFiles,
          alertSnackbarProps = _this$props4.alertSnackbarProps,
          classes = _this$props4.classes,
          disableRejectionFeedback = _this$props4.disableRejectionFeedback,
          dropzoneClass = _this$props4.dropzoneClass,
          dropzoneParagraphClass = _this$props4.dropzoneParagraphClass,
          dropzoneProps = _this$props4.dropzoneProps,
          dropzoneText = _this$props4.dropzoneText,
          fileObjects = _this$props4.fileObjects,
          filesLimit = _this$props4.filesLimit,
          getPreviewIcon = _this$props4.getPreviewIcon,
          Icon = _this$props4.Icon,
          inputProps = _this$props4.inputProps,
          maxFileSize = _this$props4.maxFileSize,
          previewChipProps = _this$props4.previewChipProps,
          previewGridClasses = _this$props4.previewGridClasses,
          previewGridProps = _this$props4.previewGridProps,
          previewText = _this$props4.previewText,
          showAlerts = _this$props4.showAlerts,
          showFileNames = _this$props4.showFileNames,
          showFileNamesInPreview = _this$props4.showFileNamesInPreview,
          showPreviews = _this$props4.showPreviews,
          showPreviewsInDropzone = _this$props4.showPreviewsInDropzone,
          useChipsForPreview = _this$props4.useChipsForPreview;
      var _this$state2 = this.state,
          openSnackBar = _this$state2.openSnackBar,
          snackbarMessage = _this$state2.snackbarMessage,
          snackbarVariant = _this$state2.snackbarVariant;
      var acceptFiles = acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.join(',');
      var isMultiple = filesLimit > 1;
      var previewsVisible = showPreviews && fileObjects.length > 0;
      var previewsInDropzoneVisible = showPreviewsInDropzone && fileObjects.length > 0;
      return Object(react["createElement"])(react["Fragment"], null, Object(react["createElement"])(dist_es, extends_default()({}, dropzoneProps, {
        accept: acceptFiles,
        onDropAccepted: this.handleDropAccepted,
        onDropRejected: this.handleDropRejected,
        maxSize: maxFileSize,
        multiple: isMultiple
      }), function (_ref4) {
        var getRootProps = _ref4.getRootProps,
            getInputProps = _ref4.getInputProps,
            isDragActive = _ref4.isDragActive,
            isDragReject = _ref4.isDragReject;
        return Object(react["createElement"])("div", getRootProps({
          className: Object(clsx_m["a" /* default */])(classes.root, dropzoneClass, isDragActive && classes.active, !disableRejectionFeedback && isDragReject && classes.invalid)
        }), Object(react["createElement"])("input", getInputProps(inputProps)), Object(react["createElement"])("div", {
          className: classes.textContainer
        }, Object(react["createElement"])(Typography["a" /* default */], {
          variant: "h5",
          component: "p",
          className: Object(clsx_m["a" /* default */])(classes.text, dropzoneParagraphClass)
        }, dropzoneText), Icon ? Object(react["createElement"])(Icon, {
          className: classes.icon
        }) : Object(react["createElement"])(CloudUpload_default.a, {
          className: classes.icon
        })), previewsInDropzoneVisible && Object(react["createElement"])(PreviewList$1, {
          fileObjects: fileObjects,
          handleRemove: _this2.handleRemove,
          getPreviewIcon: getPreviewIcon,
          showFileNames: showFileNames,
          useChipsForPreview: useChipsForPreview,
          previewChipProps: previewChipProps,
          previewGridClasses: previewGridClasses,
          previewGridProps: previewGridProps
        }));
      }), previewsVisible && Object(react["createElement"])(react["Fragment"], null, Object(react["createElement"])(Typography["a" /* default */], {
        variant: "subtitle1",
        component: "span"
      }, previewText), Object(react["createElement"])(PreviewList$1, {
        fileObjects: fileObjects,
        handleRemove: this.handleRemove,
        getPreviewIcon: getPreviewIcon,
        showFileNames: showFileNamesInPreview,
        useChipsForPreview: useChipsForPreview,
        previewChipProps: previewChipProps,
        previewGridClasses: previewGridClasses,
        previewGridProps: previewGridProps
      })), (typeof showAlerts === 'boolean' && showAlerts || Array.isArray(showAlerts) && showAlerts.includes(snackbarVariant)) && Object(react["createElement"])(esm_Snackbar_Snackbar, extends_default()({
        anchorOrigin: defaultSnackbarAnchorOrigin,
        autoHideDuration: 6000
      }, alertSnackbarProps, {
        open: openSnackBar,
        onClose: this.handleCloseSnackbar
      }), Object(react["createElement"])(SnackbarContentWrapper$1, {
        onClose: this.handleCloseSnackbar,
        variant: snackbarVariant,
        message: snackbarMessage
      })));
    }
  }]);

  return DropzoneAreaBase;
}(react["PureComponent"]);

index_es_DropzoneAreaBase.defaultProps = {
  acceptedFiles: [],
  filesLimit: 3,
  fileObjects: [],
  maxFileSize: 3000000,
  dropzoneText: 'Drag and drop a file here or click',
  previewText: 'Preview:',
  disableRejectionFeedback: false,
  showPreviews: false,
  // By default previews show up under in the dialog and inside in the standalone
  showPreviewsInDropzone: true,
  showFileNames: false,
  showFileNamesInPreview: false,
  useChipsForPreview: false,
  previewChipProps: {},
  previewGridClasses: {},
  previewGridProps: {},
  showAlerts: true,
  alertSnackbarProps: {
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    autoHideDuration: 6000
  },
  getFileLimitExceedMessage: function getFileLimitExceedMessage(filesLimit) {
    return "Maximum allowed number of files exceeded. Only ".concat(filesLimit, " allowed");
  },
  getFileAddedMessage: function getFileAddedMessage(fileName) {
    return "File ".concat(fileName, " successfully added.");
  },
  getPreviewIcon: index_es_defaultGetPreviewIcon,
  getFileRemovedMessage: function getFileRemovedMessage(fileName) {
    return "File ".concat(fileName, " removed.");
  },
  getDropRejectMessage: function getDropRejectMessage(rejectedFile, acceptedFiles, maxFileSize) {
    var message = "File ".concat(rejectedFile.name, " was rejected. ");

    if (!acceptedFiles.includes(rejectedFile.type)) {
      message += 'File type not supported. ';
    }

    if (rejectedFile.size > maxFileSize) {
      message += 'File is too big. Size limit is ' + convertBytesToMbsOrKbs(maxFileSize) + '. ';
    }

    return message;
  }
};
var FileObjectShape = prop_types_default.a.shape({
  file: prop_types_default.a.object,
  data: prop_types_default.a.any
});
 false ? undefined : void 0;
var DropzoneAreaBase$1 = Object(withStyles["a" /* default */])(styles$2, {
  name: 'MuiDropzoneArea'
})(index_es_DropzoneAreaBase);

var index_es_splitDropzoneAreaProps = function splitDropzoneAreaProps(props) {
  var clearOnUnmount = props.clearOnUnmount,
      initialFiles = props.initialFiles,
      onChange = props.onChange,
      onDelete = props.onDelete,
      dropzoneAreaProps = objectWithoutProperties_default()(props, ["clearOnUnmount", "initialFiles", "onChange", "onDelete"]);

  return [{
    clearOnUnmount: clearOnUnmount,
    initialFiles: initialFiles,
    onChange: onChange,
    onDelete: onDelete
  }, dropzoneAreaProps];
};
/**
 * This components creates an uncontrolled Material-UI Dropzone, with previews and snackbar notifications.
 *
 * It supports all props of `DropzoneAreaBase` but keeps the files state internally.
 *
 * **Note** To listen to file changes use `onChange` event handler and notice that `onDelete` returns a `File` instance instead of `FileObject`.
 */


var index_es_DropzoneArea = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneArea, _React$PureComponent);

  function DropzoneArea() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneArea)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fileObjects: []
    };

    _this.notifyFileChange = function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;

      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    };

    _this.loadInitialFiles = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var initialFiles, fileObjs;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              initialFiles = _this.props.initialFiles;
              _context2.prev = 1;
              _context2.next = 4;
              return Promise.all(initialFiles.map( /*#__PURE__*/function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(initialFile) {
                  var file, data;
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(typeof initialFile === 'string')) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 3;
                          return createFileFromUrl(initialFile);

                        case 3:
                          file = _context.sent;
                          _context.next = 7;
                          break;

                        case 6:
                          file = initialFile;

                        case 7:
                          _context.next = 9;
                          return readFile(file);

                        case 9:
                          data = _context.sent;
                          return _context.abrupt("return", {
                            file: file,
                            data: data
                          });

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              fileObjs = _context2.sent;

              _this.setState(function (state) {
                return {
                  fileObjects: [].concat(state.fileObjects, fileObjs)
                };
              }, _this.notifyFileChange);

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    _this.addFiles = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(newFileObjects) {
        var filesLimit;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesLimit = _this.props.filesLimit; // Update component state

                _this.setState(function (state) {
                  // Handle a single file
                  if (filesLimit <= 1) {
                    return {
                      fileObjects: [].concat(newFileObjects[0])
                    };
                  } // Handle multiple files


                  return {
                    fileObjects: [].concat(state.fileObjects, newFileObjects)
                  };
                }, _this.notifyFileChange);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.deleteFile = function (removedFileObj, removedFileObjIdx) {
      event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects; // Calculate remaining fileObjects array

      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      }); // Notify removed file

      if (onDelete) {
        onDelete(removedFileObj.file);
      } // Update local state


      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    };

    return _this;
  }

  createClass_default()(DropzoneArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;

      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _splitDropzoneAreaPro = index_es_splitDropzoneAreaProps(this.props),
          _splitDropzoneAreaPro2 = slicedToArray_default()(_splitDropzoneAreaPro, 2),
          dropzoneAreaProps = _splitDropzoneAreaPro2[1];

      var fileObjects = this.state.fileObjects;
      return Object(react["createElement"])(DropzoneAreaBase$1, extends_default()({}, dropzoneAreaProps, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile
      }));
    }
  }]);

  return DropzoneArea;
}(react["PureComponent"]);

index_es_DropzoneArea.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
 false ? undefined : void 0;

function splitDropzoneDialogProps(allProps) {
  var cancelButtonText = allProps.cancelButtonText,
      dialogProps = allProps.dialogProps,
      dialogTitle = allProps.dialogTitle,
      fullWidth = allProps.fullWidth,
      maxWidth = allProps.maxWidth,
      onClose = allProps.onClose,
      onSave = allProps.onSave,
      open = allProps.open,
      submitButtonText = allProps.submitButtonText,
      dropzoneAreaProps = objectWithoutProperties_default()(allProps, ["cancelButtonText", "dialogProps", "dialogTitle", "fullWidth", "maxWidth", "onClose", "onSave", "open", "submitButtonText"]);

  return [{
    cancelButtonText: cancelButtonText,
    dialogProps: dialogProps,
    dialogTitle: dialogTitle,
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    onClose: onClose,
    onSave: onSave,
    open: open,
    submitButtonText: submitButtonText
  }, dropzoneAreaProps];
}
/**
 * This component provides the DropzoneArea inside of a Material-UI Dialog.
 *
 * It supports all the Props and Methods from `DropzoneAreaBase`.
 */


var index_es_DropzoneDialogBase = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneDialogBase, _React$PureComponent);

  function DropzoneDialogBase() {
    classCallCheck_default()(this, DropzoneDialogBase);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DropzoneDialogBase).apply(this, arguments));
  }

  createClass_default()(DropzoneDialogBase, [{
    key: "render",
    value: function render() {
      var _splitDropzoneDialogP = splitDropzoneDialogProps(this.props),
          _splitDropzoneDialogP2 = slicedToArray_default()(_splitDropzoneDialogP, 2),
          dropzoneDialogProps = _splitDropzoneDialogP2[0],
          dropzoneAreaProps = _splitDropzoneDialogP2[1];

      var cancelButtonText = dropzoneDialogProps.cancelButtonText,
          dialogProps = dropzoneDialogProps.dialogProps,
          dialogTitle = dropzoneDialogProps.dialogTitle,
          fullWidth = dropzoneDialogProps.fullWidth,
          maxWidth = dropzoneDialogProps.maxWidth,
          onClose = dropzoneDialogProps.onClose,
          onSave = dropzoneDialogProps.onSave,
          open = dropzoneDialogProps.open,
          submitButtonText = dropzoneDialogProps.submitButtonText; // Submit button state

      var submitDisabled = dropzoneAreaProps.fileObjects.length === 0;
      return Object(react["createElement"])(Dialog["a" /* default */], extends_default()({}, dialogProps, {
        fullWidth: fullWidth,
        maxWidth: maxWidth,
        onClose: onClose,
        open: open
      }), Object(react["createElement"])(DialogTitle["a" /* default */], null, dialogTitle), Object(react["createElement"])(DialogContent["a" /* default */], null, Object(react["createElement"])(DropzoneAreaBase$1, dropzoneAreaProps)), Object(react["createElement"])(DialogActions["a" /* default */], null, Object(react["createElement"])(Button["a" /* default */], {
        color: "primary",
        onClick: onClose
      }, cancelButtonText), Object(react["createElement"])(Button["a" /* default */], {
        color: "primary",
        disabled: submitDisabled,
        onClick: onSave
      }, submitButtonText)));
    }
  }]);

  return DropzoneDialogBase;
}(react["PureComponent"]);

index_es_DropzoneDialogBase.defaultProps = {
  open: false,
  dialogTitle: 'Upload file',
  dialogProps: {},
  fullWidth: true,
  maxWidth: 'sm',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Submit',
  showPreviews: true,
  showPreviewsInDropzone: false,
  showFileNamesInPreview: true
};
 false ? undefined : void 0;
/**
 * This component provides an uncontrolled version of the DropzoneDialogBase component.
 *
 * It supports all the Props and Methods from `DropzoneDialogBase` but keeps the files state internally.
 *
 * **Note** The `onSave` handler also returns `File[]` with all the accepted files.
 */

var index_es_DropzoneDialog = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneDialog, _React$PureComponent);

  function DropzoneDialog() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fileObjects: []
    };

    _this.notifyFileChange = function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;

      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    };

    _this.loadInitialFiles = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
      var initialFiles, fileObjs;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              initialFiles = _this.props.initialFiles;
              _context2.prev = 1;
              _context2.next = 4;
              return Promise.all(initialFiles.map( /*#__PURE__*/function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(initialFile) {
                  var file, data;
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(typeof initialFile === 'string')) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 3;
                          return createFileFromUrl(initialFile);

                        case 3:
                          file = _context.sent;
                          _context.next = 7;
                          break;

                        case 6:
                          file = initialFile;

                        case 7:
                          _context.next = 9;
                          return readFile(file);

                        case 9:
                          data = _context.sent;
                          return _context.abrupt("return", {
                            file: file,
                            data: data
                          });

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              fileObjs = _context2.sent;

              _this.setState(function (state) {
                return {
                  fileObjects: [].concat(state.fileObjects, fileObjs)
                };
              }, _this.notifyFileChange);

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    _this.addFiles = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(newFileObjects) {
        var filesLimit;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesLimit = _this.props.filesLimit; // Update component state

                _this.setState(function (state) {
                  // Handle a single file
                  if (filesLimit <= 1) {
                    return {
                      fileObjects: [].concat(newFileObjects[0])
                    };
                  } // Handle multiple files


                  return {
                    fileObjects: [].concat(state.fileObjects, newFileObjects)
                  };
                }, _this.notifyFileChange);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.deleteFile = function (removedFileObj, removedFileObjIdx) {
      event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects; // Calculate remaining fileObjects array

      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      }); // Notify removed file

      if (onDelete) {
        onDelete(removedFileObj.file);
      } // Update local state


      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    };

    _this.handleClose = function (evt) {
      var _this$props = _this.props,
          clearOnUnmount = _this$props.clearOnUnmount,
          onClose = _this$props.onClose;

      if (onClose) {
        onClose(evt);
      }

      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    };

    _this.handleSave = function (evt) {
      var _this$props2 = _this.props,
          clearOnUnmount = _this$props2.clearOnUnmount,
          onSave = _this$props2.onSave;
      var fileObjects = _this.state.fileObjects;

      if (onSave) {
        onSave(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }), evt);
      }

      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    };

    return _this;
  }

  createClass_default()(DropzoneDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;

      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fileObjects = this.state.fileObjects;
      return Object(react["createElement"])(index_es_DropzoneDialogBase, extends_default()({}, this.props, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile,
        onClose: this.handleClose,
        onSave: this.handleSave
      }));
    }
  }]);

  return DropzoneDialog;
}(react["PureComponent"]);

index_es_DropzoneDialog.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
 false ? undefined : void 0;

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/OpenInBrowser.js
var OpenInBrowser = __webpack_require__("zbJW");
var OpenInBrowser_default = /*#__PURE__*/__webpack_require__.n(OpenInBrowser);

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// CONCATENATED MODULE: ./src/components/ImportButton.tsx


 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function ImportButton(props) {
  var text = props.text,
      onFilesUploaded = props.onFilesUploaded,
      disabled = props.disabled,
      acceptedFiles = props.acceptedFiles,
      icon = props.icon,
      filesLimit = props.filesLimit,
      className = props.className;

  var _useState = Object(react["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleSave = function handleSave(files) {
    if (files !== null && files !== void 0 && files.length) onFilesUploaded(files);
    setOpen(false);
  };

  var handleClose = function handleClose() {
    return setOpen(false);
  };

  return /*#__PURE__*/react_default.a.createElement(Box["a" /* default */], {
    className: className
  }, icon && /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
    title: text,
    onClick: handleOpen
  }, /*#__PURE__*/react_default.a.createElement(OpenInBrowser_default.a, null)), !icon && /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    disabled: disabled,
    variant: "outlined",
    onClick: handleOpen,
    startIcon: /*#__PURE__*/react_default.a.createElement(OpenInBrowser_default.a, null)
  }, text), /*#__PURE__*/react_default.a.createElement(index_es_DropzoneDialog, {
    open: open,
    onSave: handleSave,
    maxFileSize: 5000000,
    onClose: handleClose,
    acceptedFiles: acceptedFiles,
    clearOnUnmount: true,
    filesLimit: filesLimit || 1,
    submitButtonText: "import"
  }));
}

/***/ }),

/***/ "3NjB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
}), 'Mic');

exports.default = _default;

/***/ }),

/***/ "6LWA":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("xrYK");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "A2ZE":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("HAuM");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "BIHw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("I+eb");
var flattenIntoArray = __webpack_require__("or9q");
var toObject = __webpack_require__("ewvW");
var toLength = __webpack_require__("UMSQ");
var toInteger = __webpack_require__("ppGB");
var arraySpeciesCreate = __webpack_require__("ZfDv");

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "NJdT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("+IsV");
} else {}

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "ReuC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ get_get; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("foSv");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["a" /* default */])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "WkPL":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "X1Co":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

/***/ }),

/***/ "ZfDv":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("hh1v");
var isArray = __webpack_require__("6LWA");
var wellKnownSymbol = __webpack_require__("tiKp");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5")["default"];

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "aUsF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // do not edit .js files directly - edit src/index.jst

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

/***/ }),

/***/ "cwtP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CanvasWidget; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js + 1 modules
var construct = __webpack_require__("RHh3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var toArray = __webpack_require__("T5bk");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__("Womt");

// EXTERNAL MODULE: ./node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__("NJdT");
var react_reconciler_default = /*#__PURE__*/__webpack_require__.n(react_reconciler);

// EXTERNAL MODULE: ./node_modules/scheduler/index.js
var scheduler = __webpack_require__("QCnb");

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__("wOJ8");

// EXTERNAL MODULE: ./node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__("aUsF");
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);

// CONCATENATED MODULE: ./node_modules/use-asset/dist/index.js


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var globalCache = [];

function handleAsset(fn, cache, args) {
  var lifespan = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var preload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var _iterator = _createForOfIteratorHelper(cache),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _entry = _step.value;

      // Find a match
      if (fast_deep_equal_default()(args, _entry.args)) {
        // If we're pre-loading and the element is present, just return
        if (preload) return; // If an error occurred, throw

        if (_entry.error) throw _entry.error; // If a response was successful, return

        if (_entry.response) return _entry.response; // If the promise is still unresolved, throw

        throw _entry.promise;
      }
    } // The request is new or has changed.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var entry = {
    args: args,
    promise: // Make the promise request.
    fn.apply(void 0, Object(toConsumableArray["a" /* default */])(args)) // Response can't be undefined or else the loop above wouldn't be able to return it
    // This is for promises that do not return results (delays for instance)
    .then(function (response) {
      return entry.response = response != null ? response : true;
    }).catch(function (e) {
      return entry.error = e != null ? e : 'unknown error';
    }).then(function () {
      if (lifespan > 0) {
        setTimeout(function () {
          var index = cache.indexOf(entry);
          if (index !== -1) cache.splice(index, 1);
        }, lifespan);
      }
    })
  };
  cache.push(entry);
  if (!preload) throw entry.promise;
}

function _clear(cache) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args === undefined) cache.splice(0, cache.length);else {
    var entry = cache.find(function (entry) {
      return fast_deep_equal_default()(args, entry.args);
    });

    if (entry) {
      var index = cache.indexOf(entry);
      if (index !== -1) cache.splice(index, 1);
    }
  }
}

function createAsset(fn) {
  var lifespan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var cache = [];
  return {
    /**
     * @throws Suspense Promise if asset is not yet ready
     * @throws Error if the promise rejected for some reason
     */
    read: function read() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return handleAsset(fn, cache, args, lifespan);
    },
    preload: function preload() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return void handleAsset(fn, cache, args, lifespan, true);
    },
    clear: function clear() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _clear.apply(void 0, [cache].concat(args));
    },
    peek: function peek() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var _cache$find;

      return (_cache$find = cache.find(function (entry) {
        return fast_deep_equal_default()(args, entry.args);
      })) == null ? void 0 : _cache$find.response;
    }
  };
}

function useAsset(fn) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return Object(react["useMemo"])(function () {
    return handleAsset(fn, globalCache, args, useAsset.lifespan);
  }, args);
}

useAsset.lifespan = 0;

useAsset.clear = function () {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return _clear.apply(void 0, [globalCache].concat(args));
};

useAsset.preload = function (fn) {
  for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    args[_key8 - 1] = arguments[_key8];
  }

  return void handleAsset(fn, globalCache, args, useAsset.lifespan, true);
};

useAsset.peek = function () {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var _globalCache$find;

  return (_globalCache$find = globalCache.find(function (entry) {
    return fast_deep_equal_default()(args, entry.args);
  })) == null ? void 0 : _globalCache$find.response;
};


// EXTERNAL MODULE: ./node_modules/react-use-measure/dist/web.js
var web = __webpack_require__("iEE2");

// CONCATENATED MODULE: ./node_modules/react-merge-refs/dist/react-merge-refs.esm.js
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

/* harmony default export */ var react_merge_refs_esm = (mergeRefs);
// CONCATENATED MODULE: ./node_modules/react-three-fiber/web.js







function web_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = web_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function web_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return web_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return web_arrayLikeToArray(o, minLen); }

function web_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var web_name = "react-three-fiber";
var version = "5.3.19";
var roots = new Map();
var emptyObject = {};
var is = {
  obj: function obj(a) {
    return a === Object(a) && !is.arr(a);
  },
  fun: function fun(a) {
    return typeof a === 'function';
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  num: function num(a) {
    return typeof a === 'number';
  },
  und: function und(a) {
    return a === void 0;
  },
  arr: function arr(a) {
    return Array.isArray(a);
  },
  equ: function equ(a, b) {
    // Wrong type or one of the two undefined, doesn't match
    if (typeof a !== typeof b || !!a !== !!b) return false; // Atomic, just compare a against b

    if (is.str(a) || is.num(a) || is.obj(a)) return a === b; // Array, shallow compare first to see if it's a match

    if (is.arr(a) && a == b) return true; // Last resort, go through keys

    var i;

    for (i in a) {
      if (!(i in b)) return false;
    }

    for (i in b) {
      if (a[i] !== b[i]) return false;
    }

    return is.und(i) ? a === b : true;
  }
};

function createSubs(callback, subs) {
  var index = subs.length;
  subs.push(callback);
  return function () {
    return void subs.splice(index, 1);
  };
}

var globalEffects = [];
var globalAfterEffects = [];
var globalTailEffects = [];

var addEffect = function addEffect(callback) {
  return createSubs(callback, globalEffects);
};

var addAfterEffect = function addAfterEffect(callback) {
  return createSubs(callback, globalAfterEffects);
};

var addTail = function addTail(callback) {
  return createSubs(callback, globalTailEffects);
};

function renderGl(state, timestamp) {
  var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var runGlobalEffects = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var i; // Run global effects

  if (runGlobalEffects) {
    for (i = 0; i < globalEffects.length; i++) {
      globalEffects[i](timestamp);
      repeat++;
    }
  } // Run local effects


  var delta = state.current.clock.getDelta();

  for (i = 0; i < state.current.subscribers.length; i++) {
    state.current.subscribers[i].ref.current(state.current, delta);
  } // Decrease frame count


  state.current.frames = Math.max(0, state.current.frames - 1);
  repeat += !state.current.invalidateFrameloop ? 1 : state.current.frames; // Render content

  if (!state.current.manual && state.current.gl.render) state.current.gl.render(state.current.scene, state.current.camera); // Run global after-effects

  if (runGlobalEffects) {
    for (i = 0; i < globalAfterEffects.length; i++) {
      globalAfterEffects[i](timestamp);
    }
  }

  return repeat;
}

var running = false;

function renderLoop(timestamp) {
  running = true;
  var repeat = 0;
  var i; // Run global effects

  for (i = 0; i < globalEffects.length; i++) {
    globalEffects[i](timestamp);
    repeat++;
  }

  roots.forEach(function (root) {
    var state = root.containerInfo.__state; // If the frameloop is invalidated, do not run another frame

    if (state.current.active && state.current.ready && (!state.current.invalidateFrameloop || state.current.frames > 0)) {
      repeat = renderGl(state, timestamp, repeat);
    } else {
      repeat = 0;
    }
  }); // Run global after-effects

  for (i = 0; i < globalAfterEffects.length; i++) {
    globalAfterEffects[i](timestamp);
  }

  if (repeat !== 0) {
    return requestAnimationFrame(renderLoop);
  } else {
    // Tail call effects, they are called when rendering stops
    for (i = 0; i < globalTailEffects.length; i++) {
      globalTailEffects[i](timestamp);
    }
  } // Flag end of operation


  running = false;
}

function _invalidate() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var frames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (state === true) {
    roots.forEach(function (root) {
      var state = root.containerInfo.__state;
      state.current.frames = state.current.ready ? state.current.frames + frames : frames;
    });
  } else if (state && state.current) {
    if (state.current.vr) return;
    state.current.frames = state.current.ready ? state.current.frames + frames : frames;
  }

  if (!running) {
    running = true;
    requestAnimationFrame(renderLoop);
  }
}

function web_forceResize() {
  roots.forEach(function (root) {
    return root.containerInfo.__state.current.forceResize();
  });
}

var catalogue = {};

var extend = function extend(objects) {
  return void (catalogue = _objectSpread(_objectSpread({}, catalogue), objects));
};

function applyProps(instance, newProps) {
  var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var accumulative = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Filter equals, events and reserved props
  var container = instance.__container;
  var sameProps = [];
  var handlers = [];
  var i;
  var keys = Object.keys(newProps);

  for (i = 0; i < keys.length; i++) {
    if (is.equ(newProps[keys[i]], oldProps[keys[i]])) {
      sameProps.push(keys[i]);
    } // Event-handlers ...
    //   are functions, that
    //   start with "on", and
    //   contain the name "Pointer", "Click", "ContextMenu", or "Wheel"


    if (is.fun(newProps[keys[i]]) && keys[i].startsWith('on')) {
      if (keys[i].includes('Pointer') || keys[i].includes('Click') || keys[i].includes('ContextMenu') || keys[i].includes('Wheel')) {
        handlers.push(keys[i]);
      }
    }
  }

  var leftOvers = [];
  keys = Object.keys(oldProps);

  if (accumulative) {
    for (i = 0; i < keys.length; i++) {
      if (newProps[keys[i]] === void 0) {
        leftOvers.push(keys[i]);
      }
    }
  }

  var toFilter = [].concat(sameProps, ['children', 'key', 'ref']); // Instances use "object" as a reserved identifier

  if (instance.__instance) toFilter.push('object');

  var filteredProps = _objectSpread({}, newProps); // Removes sameProps and reserved props from newProps


  keys = Object.keys(filteredProps);

  for (i = 0; i < keys.length; i++) {
    if (toFilter.indexOf(keys[i]) > -1) {
      delete filteredProps[keys[i]];
    }
  } // Add left-overs as undefined props so they can be removed


  keys = Object.keys(leftOvers);

  for (i = 0; i < keys.length; i++) {
    if (keys[i] !== 'children') {
      filteredProps[keys[i]] = undefined;
    }
  }

  var filteredPropsEntries = Object.entries(filteredProps);

  if (filteredPropsEntries.length > 0) {
    filteredPropsEntries.forEach(function (_ref) {
      var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if (!handlers.includes(key)) {
        var _instance$__container, _instance$__container2;

        var root = instance;
        var target = root[key];

        if (key.includes('-')) {
          var entries = key.split('-');
          target = entries.reduce(function (acc, key) {
            return acc[key];
          }, instance); // If the target is atomic, it forces us to switch the root

          if (!(target && target.set)) {
            var _entries$reverse = entries.reverse(),
                _entries$reverse2 = Object(toArray["a" /* default */])(_entries$reverse),
                _name = _entries$reverse2[0],
                reverseEntries = _entries$reverse2.slice(1);

            root = reverseEntries.reverse().reduce(function (acc, key) {
              return acc[key];
            }, instance);
            key = _name;
          }
        } // Special treatment for objects with support for set/copy


        var isColorManagement = (_instance$__container = instance.__container) == null ? void 0 : (_instance$__container2 = _instance$__container.__state) == null ? void 0 : _instance$__container2.current.colorManagement;

        if (target && target.set && (target.copy || target instanceof three_module["Layers"])) {
          // If value is an array it has got to be the set function
          if (Array.isArray(value)) {
            var _target;

            (_target = target).set.apply(_target, Object(toConsumableArray["a" /* default */])(value));
          } // Test again target.copy(class) next ...
          else if (target.copy && value && value.constructor && target.constructor.name === value.constructor.name) {
              target.copy(value);
            } // If nothing else fits, just set the single value, ignore undefined
            // https://github.com/react-spring/react-three-fiber/issues/274
            else if (value !== undefined) {
                target.set(value); // Auto-convert sRGB colors, for now ...
                // https://github.com/react-spring/react-three-fiber/issues/344

                if (isColorManagement && target instanceof three_module["Color"]) {
                  target.convertSRGBToLinear();
                }
              } // Else, just overwrite the value

        } else {
          root[key] = value; // Auto-convert sRGB textures, for now ...
          // https://github.com/react-spring/react-three-fiber/issues/344

          if (isColorManagement && root[key] instanceof three_module["Texture"]) {
            root[key].encoding = three_module["sRGBEncoding"];
          }
        }

        invalidateInstance(instance);
      }
    }); // Preemptively delete the instance from the containers interaction

    if (accumulative && container && instance.raycast && instance.__handlers) {
      instance.__handlers = undefined;

      var index = container.__interaction.indexOf(instance);

      if (index > -1) container.__interaction.splice(index, 1);
    } // Prep interaction handlers


    if (handlers.length) {
      if (accumulative && container && instance.raycast) container.__interaction.push(instance); // Add handlers to the instances handler-map

      instance.__handlers = handlers.reduce(function (acc, key) {
        acc[key.charAt(2).toLowerCase() + key.substr(3)] = newProps[key];
        return acc;
      }, {});
    } // Call the update lifecycle when it is being updated, but only when it is part of the scene


    if (instance.parent) updateInstance(instance);
  }
}

function invalidateInstance(instance) {
  if (instance.__container && instance.__container.__state) _invalidate(instance.__container.__state);
}

function updateInstance(instance) {
  if (instance.onUpdate) instance.onUpdate(instance);
}

function createInstance(type, _ref3, container, hostContext, internalInstanceHandle) {
  var _ref3$args = _ref3.args,
      args = _ref3$args === void 0 ? [] : _ref3$args,
      props = Object(objectWithoutProperties["a" /* default */])(_ref3, ["args"]);

  var name = "".concat(type[0].toUpperCase()).concat(type.slice(1));
  var instance;

  if (type === 'primitive') {
    // Switch off dispose for primitive objects
    props = _objectSpread({
      dispose: null
    }, props);
    instance = props.object;
    instance.__instance = true;
    instance.__dispose = instance.dispose;
  } else {
    var target = catalogue[name] || three_module[name];

    if (!target) {
      throw "\"".concat(name, "\" is not part of the THREE namespace! Did you forget to extend it? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively");
    }

    instance = is.arr(args) ? Object(construct["a" /* default */])(target, Object(toConsumableArray["a" /* default */])(args)) : new target(args);
  } // Bind to the root container in case portals are being used
  // This is perhaps better for event management as we can keep them on a single instance


  while (container.__container) {
    container = container.__container;
  } // TODO: https://github.com/facebook/react/issues/17147
  // If it's still not there it means the portal was created on a virtual node outside of react


  if (!roots.has(container)) {
    var fn = function fn(node) {
      if (!node.return) return node.stateNode && node.stateNode.containerInfo;else return fn(node.return);
    };

    container = fn(internalInstanceHandle);
  } // Apply initial props


  instance.__objects = [];
  instance.__container = container; // Auto-attach geometries and materials

  if (name.endsWith('Geometry')) {
    props = _objectSpread({
      attach: 'geometry'
    }, props);
  } else if (name.endsWith('Material')) {
    props = _objectSpread({
      attach: 'material'
    }, props);
  } // It should NOT call onUpdate on object instanciation, because it hasn't been added to the
  // view yet. If the callback relies on references for instance, they won't be ready yet, this is
  // why it passes "true" here


  applyProps(instance, props, {});
  return instance;
}

function appendChild(parentInstance, child) {
  if (child) {
    if (child.isObject3D) {
      parentInstance.add(child);
    } else {
      parentInstance.__objects.push(child);

      child.parent = parentInstance; // The attach attribute implies that the object attaches itself on the parent

      if (child.attachArray) {
        if (!is.arr(parentInstance[child.attachArray])) parentInstance[child.attachArray] = [];
        parentInstance[child.attachArray].push(child);
      } else if (child.attachObject) {
        if (!is.obj(parentInstance[child.attachObject[0]])) parentInstance[child.attachObject[0]] = {};
        parentInstance[child.attachObject[0]][child.attachObject[1]] = child;
      } else if (child.attach) {
        parentInstance[child.attach] = child;
      }
    }

    updateInstance(child);
    invalidateInstance(child);
  }
}

function insertBefore(parentInstance, child, beforeChild) {
  if (child) {
    if (child.isObject3D) {
      child.parent = parentInstance;
      child.dispatchEvent({
        type: 'added'
      });
      var restSiblings = parentInstance.children.filter(function (sibling) {
        return sibling !== child;
      }); // TODO: the order is out of whack if data objects are present, has to be recalculated

      var index = restSiblings.indexOf(beforeChild);
      parentInstance.children = [].concat(Object(toConsumableArray["a" /* default */])(restSiblings.slice(0, index)), [child], Object(toConsumableArray["a" /* default */])(restSiblings.slice(index)));
      updateInstance(child);
    } else {
      appendChild(parentInstance, child);
    } // TODO: order!!!


    invalidateInstance(child);
  }
}

function removeRecursive(array, parent) {
  var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (array) {
    // Three uses splice op's internally we may have to shallow-clone the array in order to safely remove items
    var target = clone ? Object(toConsumableArray["a" /* default */])(array) : array;
    target.forEach(function (child) {
      return removeChild(parent, child);
    });
  }
}

function removeChild(parentInstance, child) {
  if (child) {
    if (child.isObject3D) {
      parentInstance.remove(child);
    } else {
      child.parent = null;
      if (parentInstance.__objects) parentInstance.__objects = parentInstance.__objects.filter(function (x) {
        return x !== child;
      }); // Remove attachment

      if (child.attachArray) {
        parentInstance[child.attachArray] = parentInstance[child.attachArray].filter(function (x) {
          return x !== child;
        });
      } else if (child.attachObject) {
        delete parentInstance[child.attachObject[0]][child.attachObject[1]];
      } else if (child.attach) {
        parentInstance[child.attach] = null;
      }
    } // Remove interactivity


    if (child.__container) child.__container.__interaction = child.__container.__interaction.filter(function (x) {
      return x !== child;
    });
    invalidateInstance(child); // Allow objects to bail out of recursive dispose alltogether by passing dispose={null}

    if (child.dispose !== null) {
      Object(scheduler["unstable_runWithPriority"])(scheduler["unstable_IdlePriority"], function () {
        // Remove nested child objects
        removeRecursive(child.__objects, child);
        removeRecursive(child.children, child, true); // Dispose item

        if (child.dispose && child.type !== 'Scene') child.dispose();else if (child.__dispose) child.__dispose(); // Remove references

        delete child.__container;
        delete child.__objects;
      });
    }
  }
}

function switchInstance(instance, type, newProps, fiber) {
  var parent = instance.parent;
  var newInstance = createInstance(type, newProps, instance.__container, null, fiber);
  removeChild(parent, instance);
  appendChild(parent, newInstance) // This evil hack switches the react-internal fiber node
  // https://github.com/facebook/react/issues/14983
  // https://github.com/facebook/react/pull/15021
  ;
  [fiber, fiber.alternate].forEach(function (fiber) {
    if (fiber !== null) {
      fiber.stateNode = newInstance;

      if (fiber.ref) {
        if (is.fun(fiber.ref)) fiber.ref(newInstance);else fiber.ref.current = newInstance;
      }
    }
  });
}

var Renderer = react_reconciler_default()({
  now: scheduler["unstable_now"],
  createInstance: createInstance,
  removeChild: removeChild,
  appendChild: appendChild,
  insertBefore: insertBefore,
  warnsIfNotActing: true,
  supportsMutation: true,
  isPrimaryRenderer: false,
  scheduleTimeout: is.fun(setTimeout) ? setTimeout : undefined,
  cancelTimeout: is.fun(clearTimeout) ? clearTimeout : undefined,
  // @ts-ignore
  setTimeout: is.fun(setTimeout) ? setTimeout : undefined,
  // @ts-ignore
  clearTimeout: is.fun(clearTimeout) ? clearTimeout : undefined,
  noTimeout: -1,
  appendInitialChild: appendChild,
  appendChildToContainer: appendChild,
  removeChildFromContainer: removeChild,
  insertInContainerBefore: insertBefore,
  commitUpdate: function commitUpdate(instance, updatePayload, type, oldProps, newProps, fiber) {
    if (instance.__instance && newProps.object && newProps.object !== instance) {
      // <instance object={...} /> where the object reference has changed
      switchInstance(instance, type, newProps, fiber);
    } else {
      // This is a data object, let's extract critical information about it
      var _newProps$args = newProps.args,
          argsNew = _newProps$args === void 0 ? [] : _newProps$args,
          restNew = Object(objectWithoutProperties["a" /* default */])(newProps, ["args"]);

      var _oldProps$args = oldProps.args,
          argsOld = _oldProps$args === void 0 ? [] : _oldProps$args,
          restOld = Object(objectWithoutProperties["a" /* default */])(oldProps, ["args"]); // If it has new props or arguments, then it needs to be re-instanciated


      var hasNewArgs = argsNew.some(function (value, index) {
        return is.obj(value) ? Object.entries(value).some(function (_ref4) {
          var _ref5 = Object(slicedToArray["a" /* default */])(_ref4, 2),
              key = _ref5[0],
              val = _ref5[1];

          return val !== argsOld[index][key];
        }) : value !== argsOld[index];
      });

      if (hasNewArgs) {
        // Next we create a new instance and append it again
        switchInstance(instance, type, newProps, fiber);
      } else {
        // Otherwise just overwrite props
        applyProps(instance, restNew, restOld, true);
      }
    }
  },
  hideInstance: function hideInstance(instance) {
    if (instance.isObject3D) {
      instance.visible = false;
      invalidateInstance(instance);
    }
  },
  unhideInstance: function unhideInstance(instance, props) {
    if (instance.isObject3D && props.visible == null || props.visible) {
      instance.visible = true;
      invalidateInstance(instance);
    }
  },
  hideTextInstance: function hideTextInstance() {
    throw new Error('Text is not allowed in the react-three-fibre tree. You may have extraneous whitespace between components.');
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  getRootHostContext: function getRootHostContext() {
    return emptyObject;
  },
  getChildHostContext: function getChildHostContext() {
    return emptyObject;
  },
  createTextInstance: function createTextInstance() {},
  finalizeInitialChildren: function finalizeInitialChildren(instance) {
    // https://github.com/facebook/react/issues/20271
    // Returning true will trigger commitMount
    return instance.__handlers;
  },
  commitMount: function commitMount(instance)
  /*, type, props*/
  {
    // https://github.com/facebook/react/issues/20271
    // This will make sure events are only added once to the central container
    var container = instance.__container;
    if (container && instance.raycast && instance.__handlers) container.__interaction.push(instance);
  },
  prepareUpdate: function prepareUpdate() {
    return emptyObject;
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  preparePortalMount: function preparePortalMount() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  clearContainer: function clearContainer() {
    return false;
  }
});
var hasSymbol = is.fun(Symbol) && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;

function render(element, container, state) {
  var root = roots.get(container);

  if (!root) {
    container.__state = state; // @ts-ignore

    var newRoot = root = Renderer.createContainer(container, state !== undefined && state.current.concurrent ? 2 : 0, false, // @ts-ignore
    null);
    roots.set(container, newRoot);
  }

  Renderer.updateContainer(element, root, null, function () {
    return undefined;
  });
  return Renderer.getPublicRootInstance(root);
}

function unmountComponentAtNode(container, callback) {
  var root = roots.get(container);

  if (root) {
    Renderer.updateContainer(null, root, null, function () {
      roots.delete(container);
      if (callback) callback(container);
    });
  }
}

function createPortal(children, containerInfo, implementation) {
  var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!containerInfo.__objects) containerInfo.__objects = [];
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : '' + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}

Renderer.injectIntoDevTools({
  bundleType:  true ? 0 : undefined,
  //@ts-ignore
  findHostInstanceByFiber: function findHostInstanceByFiber() {
    return null;
  },
  version: version,
  rendererPackageName: web_name
});
var threeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null
});

function isOrthographicCamera(def) {
  return def.isOrthographicCamera;
}

function makeId(event) {
  return (event.eventObject || event.object).uuid + '/' + event.index;
}

var stateContext = /*#__PURE__*/Object(react["createContext"])({});

var web_useCanvas = function useCanvas(props) {
  var children = props.children,
      gl = props.gl,
      camera = props.camera,
      orthographic = props.orthographic,
      raycaster = props.raycaster,
      size = props.size,
      pixelRatio = props.pixelRatio,
      _props$vr = props.vr,
      vr = _props$vr === void 0 ? false : _props$vr,
      _props$concurrent = props.concurrent,
      concurrent = _props$concurrent === void 0 ? false : _props$concurrent,
      _props$shadowMap = props.shadowMap,
      shadowMap = _props$shadowMap === void 0 ? false : _props$shadowMap,
      _props$colorManagemen = props.colorManagement,
      colorManagement = _props$colorManagemen === void 0 ? true : _props$colorManagemen,
      _props$invalidateFram = props.invalidateFrameloop,
      invalidateFrameloop = _props$invalidateFram === void 0 ? false : _props$invalidateFram,
      _props$updateDefaultC = props.updateDefaultCamera,
      updateDefaultCamera = _props$updateDefaultC === void 0 ? true : _props$updateDefaultC,
      _props$noEvents = props.noEvents,
      noEvents = _props$noEvents === void 0 ? false : _props$noEvents,
      onCreated = props.onCreated,
      onPointerMissed = props.onPointerMissed,
      forceResize = props.forceResize; // Local, reactive state

  var _useState = Object(react["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = Object(react["useState"])(function () {
    return new three_module["Vector2"]();
  }),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 1),
      mouse = _useState4[0];

  var _useState5 = Object(react["useState"])(function () {
    var ray = new three_module["Raycaster"]();

    if (raycaster) {
      var filter = raycaster.filter,
          computeOffsets = raycaster.computeOffsets,
          raycasterProps = Object(objectWithoutProperties["a" /* default */])(raycaster, ["filter", "computeOffsets"]);

      applyProps(ray, raycasterProps, {});
    }

    return ray;
  }),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 1),
      defaultRaycaster = _useState6[0];

  var _useState7 = Object(react["useState"])(function () {
    var scene = new three_module["Scene"]();
    scene.__interaction = [];
    scene.__objects = [];
    return scene;
  }),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 1),
      defaultScene = _useState8[0];

  var _useState9 = Object(react["useState"])(function () {
    var cam = orthographic ? new three_module["OrthographicCamera"](0, 0, 0, 0, 0.1, 1000) : new three_module["PerspectiveCamera"](75, 0, 0.1, 1000);
    cam.position.z = 5;
    if (camera) applyProps(cam, camera, {}); // Always look at [0, 0, 0]

    cam.lookAt(0, 0, 0);
    return cam;
  }),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      defaultCam = _useState10[0],
      _setDefaultCamera = _useState10[1];

  var _useState11 = Object(react["useState"])(function () {
    return new three_module["Clock"]();
  }),
      _useState12 = Object(slicedToArray["a" /* default */])(_useState11, 1),
      clock = _useState12[0]; // Public state


  var state = Object(react["useRef"])({
    ready: false,
    active: true,
    manual: 0,
    colorManagement: colorManagement,
    vr: vr,
    concurrent: concurrent,
    noEvents: noEvents,
    invalidateFrameloop: false,
    frames: 0,
    aspect: 0,
    subscribers: [],
    camera: defaultCam,
    scene: defaultScene,
    raycaster: defaultRaycaster,
    mouse: mouse,
    clock: clock,
    gl: gl,
    size: size,
    viewport: null,
    initialClick: [0, 0],
    initialHits: [],
    pointer: new tiny_emitter["TinyEmitter"](),
    captured: undefined,
    events: undefined,
    subscribe: function subscribe(ref) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // If this subscription was given a priority, it takes rendering into its own hands
      // For that reason we switch off automatic rendering and increase the manual flag
      // As long as this flag is positive (there could be multiple render subscription)
      // ..there can be no internal rendering at all
      if (priority) state.current.manual++;
      state.current.subscribers.push({
        ref: ref,
        priority: priority
      }); // Sort layers from lowest to highest, meaning, highest priority renders last (on top of the other frames)

      state.current.subscribers = state.current.subscribers.sort(function (a, b) {
        return a.priority - b.priority;
      });
      return function () {
        var _state$current;

        if ((_state$current = state.current) == null ? void 0 : _state$current.subscribers) {
          // Decrease manual flag if this subscription had a priority
          if (priority) state.current.manual--;
          state.current.subscribers = state.current.subscribers.filter(function (s) {
            return s.ref !== ref;
          });
        }
      };
    },
    setDefaultCamera: function setDefaultCamera(camera) {
      return _setDefaultCamera(camera);
    },
    invalidate: function invalidate() {
      return _invalidate(state);
    },
    intersect: function intersect() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var prepare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return handlePointerMove(event, prepare);
    },
    forceResize: forceResize
  });
  var position = new three_module["Vector3"]();
  var getCurrentViewport = Object(react["useCallback"])(function () {
    var camera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state.current.camera;
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new three_module["Vector3"](0, 0, 0);
    var _state$current$size = state.current.size,
        width = _state$current$size.width,
        height = _state$current$size.height;
    var distance = camera.getWorldPosition(position).distanceTo(target);

    if (isOrthographicCamera(camera)) {
      return {
        width: width / camera.zoom,
        height: height / camera.zoom,
        factor: 1,
        distance: distance
      };
    } else {
      var fov = camera.fov * Math.PI / 180; // convert vertical fov to radians

      var h = 2 * Math.tan(fov / 2) * distance; // visible height

      var w = h * (width / height);
      return {
        width: w,
        height: h,
        factor: width / w,
        distance: distance
      };
    }
  }, []); // Writes locals into public state for distribution among subscribers, context, etc

  Object(react["useMemo"])(function () {
    state.current.ready = ready;
    state.current.size = size;
    state.current.camera = defaultCam;
    state.current.invalidateFrameloop = invalidateFrameloop;
    state.current.vr = vr;
    state.current.gl = gl;
    state.current.concurrent = concurrent;
    state.current.noEvents = noEvents; // Make viewport backwards compatible

    state.current.viewport = getCurrentViewport; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalidateFrameloop, vr, concurrent, noEvents, ready, size, defaultCam, gl]); // Adjusts default camera

  Object(react["useMemo"])(function () {
    state.current.aspect = size.width / size.height; // Assign viewport props to the function

    Object.assign(state.current.viewport, getCurrentViewport()); // https://github.com/drcmda/react-three-fiber/issues/92
    // Sometimes automatic default camera adjustment isn't wanted behaviour

    if (updateDefaultCamera) {
      if (isOrthographicCamera(defaultCam)) {
        defaultCam.left = size.width / -2;
        defaultCam.right = size.width / 2;
        defaultCam.top = size.height / 2;
        defaultCam.bottom = size.height / -2;
      } else {
        defaultCam.aspect = state.current.aspect;
      }

      defaultCam.updateProjectionMatrix(); // https://github.com/react-spring/react-three-fiber/issues/178
      // Update matrix world since the renderer is a frame late

      defaultCam.updateMatrixWorld();
    }

    gl.setSize(size.width, size.height);
    if (ready) _invalidate(state); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCam, gl, size, updateDefaultCamera, ready]); // Only trigger the context provider when necessary

  var sharedState = Object(react["useRef"])(null);
  Object(react["useMemo"])(function () {
    var _state$current2 = state.current,
        ready = _state$current2.ready,
        manual = _state$current2.manual,
        vr = _state$current2.vr,
        noEvents = _state$current2.noEvents,
        invalidateFrameloop = _state$current2.invalidateFrameloop,
        frames = _state$current2.frames,
        subscribers = _state$current2.subscribers,
        captured = _state$current2.captured,
        initialClick = _state$current2.initialClick,
        initialHits = _state$current2.initialHits,
        props = Object(objectWithoutProperties["a" /* default */])(_state$current2, ["ready", "manual", "vr", "noEvents", "invalidateFrameloop", "frames", "subscribers", "captured", "initialClick", "initialHits"]);

    sharedState.current = props; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, defaultCam]); // Update pixel ratio

  Object(react["useLayoutEffect"])(function () {
    if (pixelRatio) {
      if (Array.isArray(pixelRatio)) gl.setPixelRatio(Math.max(Math.min(pixelRatio[0], window.devicePixelRatio), pixelRatio[1]));else gl.setPixelRatio(pixelRatio);
    }
  }, [gl, pixelRatio]); // Update shadow map

  Object(react["useLayoutEffect"])(function () {
    if (shadowMap) {
      gl.shadowMap.enabled = true;
      if (typeof shadowMap === 'object') Object.assign(gl.shadowMap, shadowMap);else gl.shadowMap.type = three_module["PCFSoftShadowMap"];
    }

    if (colorManagement) {
      gl.toneMapping = three_module["ACESFilmicToneMapping"];
      gl.outputEncoding = three_module["sRGBEncoding"];
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [shadowMap, colorManagement]);
  /** Events ------------------------------------------------------------------------------------------------ */

  var hovered = Object(react["useMemo"])(function () {
    return new Map();
  }, []);
  var temp = new three_module["Vector3"]();
  /** Sets up defaultRaycaster */

  var prepareRay = Object(react["useCallback"])(function (event) {
    // https://github.com/pmndrs/react-three-fiber/pull/782
    // Events trigger outside of canvas when moved
    var offsets = (raycaster == null ? void 0 : raycaster.computeOffsets == null ? void 0 : raycaster.computeOffsets(event, sharedState.current)) || event.nativeEvent;

    if (offsets) {
      var offsetX = offsets.offsetX,
          offsetY = offsets.offsetY;
      var _state$current$size2 = state.current.size,
          width = _state$current$size2.width,
          height = _state$current$size2.height;
      mouse.set(offsetX / width * 2 - 1, -(offsetY / height) * 2 + 1);
      defaultRaycaster.setFromCamera(mouse, state.current.camera);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  /** Intersects interaction objects using the event input */

  var intersect = Object(react["useCallback"])(function (filter) {
    // Skip event handling when noEvents is set
    if (state.current.noEvents) return [];
    var seen = new Set();
    var hits = []; // Allow callers to eliminate event objects

    var eventsObjects = filter ? filter(state.current.scene.__interaction) : state.current.scene.__interaction; // Intersect known handler objects and filter against duplicates

    var intersects = defaultRaycaster.intersectObjects(eventsObjects, true).filter(function (item) {
      var id = makeId(item);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    }); // https://github.com/mrdoob/three.js/issues/16031
    // Allow custom userland intersect sort order

    if (raycaster && raycaster.filter && sharedState.current) {
      intersects = raycaster.filter(intersects, sharedState.current);
    }

    var _iterator = web_createForOfIteratorHelper(intersects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _intersect = _step.value;
        var eventObject = _intersect.object; // Bubble event up

        while (eventObject) {
          var handlers = eventObject.__handlers;
          if (handlers) hits.push(_objectSpread(_objectSpread({}, _intersect), {}, {
            eventObject: eventObject
          }));
          eventObject = eventObject.parent;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return hits;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  /**  Calculates click deltas */

  var calculateDistance = Object(react["useCallback"])(function (event) {
    var dx = event.nativeEvent.offsetX - state.current.initialClick[0];
    var dy = event.nativeEvent.offsetY - state.current.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }, []);
  var handlePointerCancel = Object(react["useCallback"])(function (event, hits) {
    var prepare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    state.current.pointer.emit('pointerCancel', event);
    if (prepare) prepareRay(event);
    Array.from(hovered.values()).forEach(function (hoveredObj) {
      // When no objects were hit or the the hovered object wasn't found underneath the cursor
      // we call onPointerOut and delete the object from the hovered-elements map
      if (hits && (!hits.length || !hits.find(function (hit) {
        return hit.object === hoveredObj.object && hit.index === hoveredObj.index;
      }))) {
        var eventObject = hoveredObj.eventObject;
        var handlers = eventObject.__handlers;
        hovered.delete(makeId(hoveredObj));

        if (handlers) {
          // Clear out intersects, they are outdated by now
          var data = _objectSpread(_objectSpread({}, hoveredObj), {}, {
            intersections: hits || []
          });

          if (handlers.pointerOut) handlers.pointerOut(_objectSpread(_objectSpread({}, data), {}, {
            type: 'pointerout'
          }));
          if (handlers.pointerLeave) handlers.pointerLeave(_objectSpread(_objectSpread({}, data), {}, {
            type: 'pointerleave'
          }));
        }
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**  Creates filtered intersects and returns an array of positive hits */

  var getIntersects = Object(react["useCallback"])(function (event, filter) {
    // Get fresh intersects
    var intersections = intersect(filter); // If the interaction is captured take that into account, the captured event has to be part of the intersects

    if (state.current.captured && event.type !== 'click' && event.type !== 'wheel') {
      state.current.captured.forEach(function (captured) {
        if (!intersections.find(function (hit) {
          return hit.eventObject === captured.eventObject;
        })) intersections.push(captured);
      });
    }

    return intersections;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  /**  Handles intersections by forwarding them to handlers */

  var handleIntersects = Object(react["useCallback"])(function (intersections, event, fn) {
    // If anything has been found, forward it to the event listeners
    if (intersections.length) {
      (function () {
        var unprojectedPoint = temp.set(mouse.x, mouse.y, 0).unproject(state.current.camera);
        var delta = event.type === 'click' ? calculateDistance(event) : 0;

        var releasePointerCapture = function releasePointerCapture(id) {
          return event.target.releasePointerCapture(id);
        };

        var localState = {
          stopped: false,
          captured: false
        };

        var _iterator2 = web_createForOfIteratorHelper(intersections),
            _step2;

        try {
          var _loop = function _loop() {
            var hit = _step2.value;

            var setPointerCapture = function setPointerCapture(id) {
              // If the hit is going to be captured flag that we're in captured state
              if (!localState.captured) {
                localState.captured = true; // The captured hit array is reset to collect hits

                state.current.captured = [];
              } // Push hits to the array


              if (state.current.captured) {
                state.current.captured.push(hit);
              } // Call the original event now


              event.target.setPointerCapture(id);
            };

            var raycastEvent = _objectSpread(_objectSpread(_objectSpread({}, event), hit), {}, {
              intersections: intersections,
              stopped: localState.stopped,
              delta: delta,
              unprojectedPoint: unprojectedPoint,
              ray: defaultRaycaster.ray,
              camera: state.current.camera,
              // Hijack stopPropagation, which just sets a flag
              stopPropagation: function stopPropagation() {
                // https://github.com/react-spring/react-three-fiber/issues/596
                // Events are not allowed to stop propagation if the pointer has been captured
                var cap = state.current.captured;

                if (!cap || cap.find(function (h) {
                  return h.eventObject.id === hit.eventObject.id;
                })) {
                  raycastEvent.stopped = localState.stopped = true; // Propagation is stopped, remove all other hover records
                  // An event handler is only allowed to flush other handlers if it is hovered itself

                  if (hovered.size && Array.from(hovered.values()).find(function (i) {
                    return i.eventObject === hit.eventObject;
                  })) {
                    // Objects cannot flush out higher up objects that have already caught the event
                    var higher = intersections.slice(0, intersections.indexOf(hit));
                    handlePointerCancel(raycastEvent, [].concat(Object(toConsumableArray["a" /* default */])(higher), [hit]));
                  }
                }
              },
              target: _objectSpread(_objectSpread({}, event.target), {}, {
                setPointerCapture: setPointerCapture,
                releasePointerCapture: releasePointerCapture
              }),
              currentTarget: _objectSpread(_objectSpread({}, event.currentTarget), {}, {
                setPointerCapture: setPointerCapture,
                releasePointerCapture: releasePointerCapture
              }),
              sourceEvent: event
            });

            fn(raycastEvent); // Event bubbling may be interrupted by stopPropagation

            if (localState.stopped === true) return "break";
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _ret = _loop();

            if (_ret === "break") break;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      })();
    }

    return intersections;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var handlePointerMove = Object(react["useCallback"])(function (event) {
    var prepare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    state.current.pointer.emit('pointerMove', event);
    if (prepare) prepareRay(event);
    var hits = getIntersects(event, // This is onPointerMove, we're only interested in events that exhibit this particular event
    function (objects) {
      return objects.filter(function (obj) {
        return ['Move', 'Over', 'Enter', 'Out', 'Leave'].some(function (name) {
          return obj.__handlers['pointer' + name];
        });
      });
    }); // Take care of unhover

    handlePointerCancel(event, hits);
    handleIntersects(hits, event, function (data) {
      var eventObject = data.eventObject;
      var handlers = eventObject.__handlers; // Check presence of handlers

      if (!handlers) return; // Check if mouse enter or out is present

      if (handlers.pointerOver || handlers.pointerEnter || handlers.pointerOut || handlers.pointerLeave) {
        var id = makeId(data);
        var hoveredItem = hovered.get(id);

        if (!hoveredItem) {
          // If the object wasn't previously hovered, book it and call its handler
          hovered.set(id, data);
          if (handlers.pointerOver) handlers.pointerOver(_objectSpread(_objectSpread({}, data), {}, {
            type: 'pointerover'
          }));
          if (handlers.pointerEnter) handlers.pointerEnter(_objectSpread(_objectSpread({}, data), {}, {
            type: 'pointerenter'
          }));
        } else if (hoveredItem.stopped) {
          // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
          data.stopPropagation();
        }
      } // Call mouse move


      if (handlers.pointerMove) handlers.pointerMove(data);
    });
    return hits; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var handlePointer = Object(react["useCallback"])(function (name) {
    return function (event) {
      var prepare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      state.current.pointer.emit(name, event);
      if (prepare) prepareRay(event);
      var hits = getIntersects(event);
      handleIntersects(hits, event, function (data) {
        var eventObject = data.eventObject;
        var handlers = eventObject.__handlers;

        if (handlers && handlers[name]) {
          // Forward all events back to their respective handlers with the exception of click events,
          // which must use the initial target
          if (name !== 'click' && name !== 'contextMenu' && name !== 'doubleClick' || state.current.initialHits.includes(eventObject)) {
            handlers[name](data);
            pointerMissed(event, defaultScene.__interaction, function (object) {
              return object !== eventObject;
            });
          }
        }
      }); // If a click yields no results, pass it back to the user as a miss

      if (name === 'pointerDown') {
        state.current.initialClick = [event.nativeEvent.offsetX, event.nativeEvent.offsetY];
        state.current.initialHits = hits.map(function (hit) {
          return hit.eventObject;
        });
      }

      if ((name === 'click' || name === 'contextMenu' || name === 'doubleClick') && !hits.length) {
        if (calculateDistance(event) <= 2) {
          pointerMissed(event, defaultScene.__interaction);
          if (onPointerMissed) onPointerMissed();
        }
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [onPointerMissed, calculateDistance, getIntersects, handleIntersects, prepareRay]);
  Object(react["useMemo"])(function () {
    state.current.events = {
      onClick: handlePointer('click'),
      onContextMenu: handlePointer('contextMenu'),
      onDoubleClick: handlePointer('doubleClick'),
      onWheel: handlePointer('wheel'),
      onPointerDown: handlePointer('pointerDown'),
      onPointerUp: handlePointer('pointerUp'),
      onPointerLeave: function onPointerLeave(e) {
        return handlePointerCancel(e, []);
      },
      onPointerMove: handlePointerMove,
      // onGotPointerCapture is not needed any longer because the behaviour is hacked into
      // the event itself (see handleIntersects). But in order for non-web targets to simulate
      // it we keep the legacy event, which simply flags all current intersects as captured
      onGotPointerCaptureLegacy: function onGotPointerCaptureLegacy(e) {
        return state.current.captured = intersect();
      },
      onLostPointerCapture: function onLostPointerCapture(e) {
        return state.current.captured = undefined, handlePointerCancel(e);
      }
    };
  }, [handlePointer, intersect, handlePointerCancel, handlePointerMove]);
  /** Events ------------------------------------------------------------------------------------------------- */
  // This component is a bridge into the three render context, when it gets rendered
  // we know we are ready to compile shaders, call subscribers, etc

  var Canvas = Object(react["useCallback"])(function Canvas(props) {
    var activate = function activate() {
      return setReady(true);
    }; // Pre-compile all materials before rendering out the first time


    Object(react["useLayoutEffect"])(function () {
      return void gl.compile(defaultScene, defaultCam);
    }, []);
    Object(react["useEffect"])(function () {
      var result = onCreated && onCreated(state.current);
      if (result && result.then) result.then(activate);else activate();
    }, []);
    return props.children;
  }, // The Canvas component has to be static, it should not be re-created ever
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Render v-dom into scene

  Object(react["useLayoutEffect"])(function () {
    render( /*#__PURE__*/Object(react["createElement"])(Canvas, null, /*#__PURE__*/Object(react["createElement"])(stateContext.Provider, {
      value: sharedState.current
    }, typeof children === 'function' ? children(state.current) : children)), defaultScene, state); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, children, sharedState.current]);
  Object(react["useLayoutEffect"])(function () {
    if (ready) {
      // Start render-loop, either via RAF or setAnimationLoop for VR
      if (!state.current.vr) {
        if (state.current.frames === 0) _invalidate(state);
      } else if ((gl.xr || gl.vr) && gl.setAnimationLoop) {
        (gl.xr || gl.vr).enabled = true;
        gl.setAnimationLoop(function (t) {
          return renderGl(state, t, 0, true);
        });
      } else {
        console.warn('the gl instance does not support VR!');
      }
    }
  }, [gl, ready, invalidateFrameloop]); // Dispose renderer on unmount

  Object(react["useEffect"])(function () {
    return function () {
      if (state.current.gl) {
        if (state.current.gl.renderLists) state.current.gl.renderLists.dispose();
        if (state.current.gl.forceContextLoss) state.current.gl.forceContextLoss();
        dispose(state.current.gl);
      }

      unmountComponentAtNode(state.current.scene, function () {
        dispose(state.current.raycaster);
        dispose(state.current.camera);
        dispose(state.current);
      });
    };
  }, []);
  return state.current.events;
};

function pointerMissed(event, objects) {
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (object) {
    return true;
  };
  objects.filter(filter).forEach(function (object) {
    var _handlers$pointerMis, _handlers;

    return (_handlers$pointerMis = (_handlers = object.__handlers).pointerMissed) == null ? void 0 : _handlers$pointerMis.call(_handlers, event);
  });
}

function dispose(obj) {
  if (obj.dispose && obj.type !== 'Scene') obj.dispose();

  for (var p in obj) {
    if (typeof p === 'object' && p.dispose) p.dispose();
    delete obj[p];
  }
}

function useContext(context) {
  var result = Object(react["useContext"])(context);

  if (!('subscribe' in result)) {
    throw new Error("\u26A1\uFE0F react-three-fiber hooks can only be used within the Canvas component! https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#hooks");
  }

  return result;
}

function useFrame(callback) {
  var renderPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useContext = useContext(stateContext),
      subscribe = _useContext.subscribe; // Update ref


  var ref = Object(react["useRef"])(callback);
  Object(react["useLayoutEffect"])(function () {
    return void (ref.current = callback);
  }, [callback]); // Subscribe/unsub

  Object(react["useEffect"])(function () {
    var unsubscribe = subscribe(ref, renderPriority);
    return function () {
      return unsubscribe();
    };
  }, [renderPriority, subscribe]);
  return null;
}

function useThree() {
  return useContext(stateContext);
}

function useUpdate(callback, dependents, optionalRef) {
  var _useContext2 = useContext(stateContext),
      invalidate = _useContext2.invalidate;

  var localRef = Object(react["useRef"])();
  var ref = optionalRef ? optionalRef : localRef;
  Object(react["useLayoutEffect"])(function () {
    if (ref.current) {
      callback(ref.current);
      invalidate();
    }
  }, dependents); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}

function useResource(optionalRef) {
  var _useState13 = Object(react["useState"])(false),
      _useState14 = Object(slicedToArray["a" /* default */])(_useState13, 2),
      _ = _useState14[0],
      forceUpdate = _useState14[1];

  var localRef = Object(react["useRef"])(undefined);
  var ref = optionalRef ? optionalRef : localRef;
  Object(react["useLayoutEffect"])(function () {
    return void forceUpdate(function (i) {
      return !i;
    });
  }, []);
  return ref;
}

function buildGraph(object) {
  var data = {
    nodes: {},
    materials: {}
  };

  if (object) {
    object.traverse(function (obj) {
      if (obj.name) data.nodes[obj.name] = obj;
      if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
    });
  }

  return data;
}

function useGraph(object) {
  return Object(react["useMemo"])(function () {
    return buildGraph(object);
  }, [object]);
}

function loadingFn(extensions, onProgress) {
  return function (Proto) {
    // Construct new loader and run extensions
    var loader = new Proto();
    if (extensions) extensions(loader); // Go through the urls and load them

    for (var _len = arguments.length, input = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      input[_key - 1] = arguments[_key];
    }

    return Promise.all(input.map(function (input) {
      return new Promise(function (res, reject) {
        return loader.load(input, function (data) {
          if (data.scene) Object.assign(data, buildGraph(data.scene));
          res(data);
        }, onProgress, function (error) {
          var _error$message;

          return reject((_error$message = error.message) != null ? _error$message : "failure loading ".concat(input));
        });
      });
    }));
  };
}

function useLoader(Proto, input, extensions, onProgress) {
  // Use suspense to load async assets
  var keys = Array.isArray(input) ? input : [input];
  var results = useAsset.apply(void 0, [loadingFn(extensions, onProgress), Proto].concat(Object(toConsumableArray["a" /* default */])(keys))); // Return the object/s

  return Array.isArray(input) ? results : results[0];
}

useLoader.preload = function (Proto, input, extensions) {
  var keys = Array.isArray(input) ? input : [input];
  return useAsset.preload.apply(useAsset, [loadingFn(extensions), Proto].concat(Object(toConsumableArray["a" /* default */])(keys)));
};

var defaultStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

function Content(_ref6) {
  var children = _ref6.children,
      setEvents = _ref6.setEvents,
      container = _ref6.container,
      renderer = _ref6.renderer,
      effects = _ref6.effects,
      props = Object(objectWithoutProperties["a" /* default */])(_ref6, ["children", "setEvents", "container", "renderer", "effects"]);

  // Create renderer
  var _useState15 = Object(react["useState"])(renderer),
      _useState16 = Object(slicedToArray["a" /* default */])(_useState15, 1),
      gl = _useState16[0];

  if (!gl) console.warn('No renderer created!'); // Mount and unmount management

  Object(react["useEffect"])(function () {
    if (effects) effects(gl, container);
  }, [container, effects, gl]); // Init canvas, fetch events, hand them back to the wrapping div

  var events = web_useCanvas(_objectSpread(_objectSpread({}, props), {}, {
    children: children,
    gl: gl
  }));
  Object(react["useEffect"])(function () {
    setEvents(events);
  }, [events, setEvents]);
  return null;
}

var web_ResizeContainer = /*#__PURE__*/react_default.a.memo(function ResizeContainer(props) {
  var renderer = props.renderer,
      effects = props.effects,
      children = props.children,
      vr = props.vr,
      webgl1 = props.webgl1,
      concurrent = props.concurrent,
      shadowMap = props.shadowMap,
      colorManagement = props.colorManagement,
      orthographic = props.orthographic,
      invalidateFrameloop = props.invalidateFrameloop,
      updateDefaultCamera = props.updateDefaultCamera,
      noEvents = props.noEvents,
      gl = props.gl,
      camera = props.camera,
      raycaster = props.raycaster,
      pixelRatio = props.pixelRatio,
      onCreated = props.onCreated,
      onPointerMissed = props.onPointerMissed,
      preRender = props.preRender,
      resize = props.resize,
      style = props.style,
      restSpread = Object(objectWithoutProperties["a" /* default */])(props, ["renderer", "effects", "children", "vr", "webgl1", "concurrent", "shadowMap", "colorManagement", "orthographic", "invalidateFrameloop", "updateDefaultCamera", "noEvents", "gl", "camera", "raycaster", "pixelRatio", "onCreated", "onPointerMissed", "preRender", "resize", "style"]);

  var containerRef = Object(react["useRef"])(); // onGotPointerCaptureLegacy is a fake event used by non-web targets to simulate poinzter capture

  var _useState17 = Object(react["useState"])({}),
      _useState18 = Object(slicedToArray["a" /* default */])(_useState17, 2),
      _useState18$ = _useState18[0],
      onGotPointerCaptureLegacy = _useState18$.onGotPointerCaptureLegacy,
      events = Object(objectWithoutProperties["a" /* default */])(_useState18$, ["onGotPointerCaptureLegacy"]),
      setEvents = _useState18[1];

  var _useMeasure = Object(web["a" /* default */])(_objectSpread({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    }
  }, resize)),
      _useMeasure2 = Object(slicedToArray["a" /* default */])(_useMeasure, 3),
      bind = _useMeasure2[0],
      size = _useMeasure2[1],
      forceResize = _useMeasure2[2]; // Flag view ready once it's been measured out


  var readyFlag = Object(react["useRef"])(false);
  var ready = Object(react["useMemo"])(function () {
    return readyFlag.current = readyFlag.current || !!size.width && !!size.height;
  }, [size]);
  var state = Object(react["useMemo"])(function () {
    return {
      size: size,
      forceResize: forceResize,
      setEvents: setEvents,
      container: containerRef.current
    };
  }, [forceResize, size]); // Allow Gatsby, Next and other server side apps to run. Will output styles to reduce flickering.

  if (typeof window === 'undefined') return /*#__PURE__*/react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    style: _objectSpread(_objectSpread({}, defaultStyles), style)
  }, restSpread), preRender); // Render the canvas into the dom

  return /*#__PURE__*/react_default.a.createElement("div", Object(esm_extends["a" /* default */])({
    ref: react_merge_refs_esm([bind, containerRef]),
    style: _objectSpread(_objectSpread({}, defaultStyles), style)
  }, events, restSpread), preRender, ready && /*#__PURE__*/react_default.a.createElement(Content, Object(esm_extends["a" /* default */])({}, props, state)));
});
var web_Canvas = /*#__PURE__*/react_default.a.memo(function Canvas(_ref7) {
  var children = _ref7.children,
      props = Object(objectWithoutProperties["a" /* default */])(_ref7, ["children"]);

  var canvasRef = Object(react["useRef"])();

  var _renderer = props.webgl1 ? three_module["WebGL1Renderer"] : three_module["WebGLRenderer"];

  return /*#__PURE__*/react_default.a.createElement(web_ResizeContainer, Object(esm_extends["a" /* default */])({}, props, {
    renderer: function renderer() {
      if (canvasRef.current) {
        var params = _objectSpread({
          antialias: true,
          alpha: true
        }, props.gl);

        var temp = new _renderer(_objectSpread({
          powerPreference: 'high-performance',
          //stencil: false,
          //depth: false,
          canvas: canvasRef.current
        }, params));
        return temp;
      }
    },
    preRender: /*#__PURE__*/react_default.a.createElement("canvas", {
      ref: canvasRef,
      style: {
        display: 'block'
      }
    })
  }), children);
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__("BIHw");

// CONCATENATED MODULE: ./node_modules/three/examples/jsm/lines/LineSegmentsGeometry.js


var LineSegmentsGeometry_LineSegmentsGeometry = function LineSegmentsGeometry() {
  three_module["InstancedBufferGeometry"].call(this);
  this.type = 'LineSegmentsGeometry';
  var positions = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0];
  var uvs = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2];
  var index = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
  this.setIndex(index);
  this.setAttribute('position', new three_module["Float32BufferAttribute"](positions, 3));
  this.setAttribute('uv', new three_module["Float32BufferAttribute"](uvs, 2));
};

LineSegmentsGeometry_LineSegmentsGeometry.prototype = Object.assign(Object.create(three_module["InstancedBufferGeometry"].prototype), {
  constructor: LineSegmentsGeometry_LineSegmentsGeometry,
  isLineSegmentsGeometry: true,
  applyMatrix4: function applyMatrix4(matrix) {
    var start = this.attributes.instanceStart;
    var end = this.attributes.instanceEnd;

    if (start !== undefined) {
      start.applyMatrix4(matrix);
      end.applyMatrix4(matrix);
      start.needsUpdate = true;
    }

    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }

    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }

    return this;
  },
  setPositions: function setPositions(array) {
    var lineSegments;

    if (array instanceof Float32Array) {
      lineSegments = array;
    } else if (Array.isArray(array)) {
      lineSegments = new Float32Array(array);
    }

    var instanceBuffer = new three_module["InstancedInterleavedBuffer"](lineSegments, 6, 1); // xyz, xyz

    this.setAttribute('instanceStart', new three_module["InterleavedBufferAttribute"](instanceBuffer, 3, 0)); // xyz

    this.setAttribute('instanceEnd', new three_module["InterleavedBufferAttribute"](instanceBuffer, 3, 3)); // xyz
    //

    this.computeBoundingBox();
    this.computeBoundingSphere();
    return this;
  },
  setColors: function setColors(array) {
    var colors;

    if (array instanceof Float32Array) {
      colors = array;
    } else if (Array.isArray(array)) {
      colors = new Float32Array(array);
    }

    var instanceColorBuffer = new three_module["InstancedInterleavedBuffer"](colors, 6, 1); // rgb, rgb

    this.setAttribute('instanceColorStart', new three_module["InterleavedBufferAttribute"](instanceColorBuffer, 3, 0)); // rgb

    this.setAttribute('instanceColorEnd', new three_module["InterleavedBufferAttribute"](instanceColorBuffer, 3, 3)); // rgb

    return this;
  },
  fromWireframeGeometry: function fromWireframeGeometry(geometry) {
    this.setPositions(geometry.attributes.position.array);
    return this;
  },
  fromEdgesGeometry: function fromEdgesGeometry(geometry) {
    this.setPositions(geometry.attributes.position.array);
    return this;
  },
  fromMesh: function fromMesh(mesh) {
    this.fromWireframeGeometry(new three_module["WireframeGeometry"](mesh.geometry)); // set colors, maybe

    return this;
  },
  fromLineSegments: function fromLineSegments(lineSegments) {
    var geometry = lineSegments.geometry;

    if (geometry.isGeometry) {
      console.error('THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.');
      return;
    } else if (geometry.isBufferGeometry) {
      this.setPositions(geometry.attributes.position.array); // assumes non-indexed
    } // set colors, maybe


    return this;
  },
  computeBoundingBox: function () {
    var box = new three_module["Box3"]();
    return function computeBoundingBox() {
      if (this.boundingBox === null) {
        this.boundingBox = new three_module["Box3"]();
      }

      var start = this.attributes.instanceStart;
      var end = this.attributes.instanceEnd;

      if (start !== undefined && end !== undefined) {
        this.boundingBox.setFromBufferAttribute(start);
        box.setFromBufferAttribute(end);
        this.boundingBox.union(box);
      }
    };
  }(),
  computeBoundingSphere: function () {
    var vector = new three_module["Vector3"]();
    return function computeBoundingSphere() {
      if (this.boundingSphere === null) {
        this.boundingSphere = new three_module["Sphere"]();
      }

      if (this.boundingBox === null) {
        this.computeBoundingBox();
      }

      var start = this.attributes.instanceStart;
      var end = this.attributes.instanceEnd;

      if (start !== undefined && end !== undefined) {
        var center = this.boundingSphere.center;
        this.boundingBox.getCenter(center);
        var maxRadiusSq = 0;

        for (var i = 0, il = start.count; i < il; i++) {
          vector.fromBufferAttribute(start, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
          vector.fromBufferAttribute(end, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
        }

        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);

        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.', this);
        }
      }
    };
  }(),
  toJSON: function toJSON() {// todo
  },
  applyMatrix: function applyMatrix(matrix) {
    console.warn('THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().');
    return this.applyMatrix4(matrix);
  }
});

// CONCATENATED MODULE: ./node_modules/three/examples/jsm/lines/LineGeometry.js


var LineGeometry_LineGeometry = function LineGeometry() {
  LineSegmentsGeometry_LineSegmentsGeometry.call(this);
  this.type = 'LineGeometry';
};

LineGeometry_LineGeometry.prototype = Object.assign(Object.create(LineSegmentsGeometry_LineSegmentsGeometry.prototype), {
  constructor: LineGeometry_LineGeometry,
  isLineGeometry: true,
  setPositions: function setPositions(array) {
    // converts [ x1, y1, z1,  x2, y2, z2, ... ] to pairs format
    var length = array.length - 3;
    var points = new Float32Array(2 * length);

    for (var i = 0; i < length; i += 3) {
      points[2 * i] = array[i];
      points[2 * i + 1] = array[i + 1];
      points[2 * i + 2] = array[i + 2];
      points[2 * i + 3] = array[i + 3];
      points[2 * i + 4] = array[i + 4];
      points[2 * i + 5] = array[i + 5];
    }

    LineSegmentsGeometry_LineSegmentsGeometry.prototype.setPositions.call(this, points);
    return this;
  },
  setColors: function setColors(array) {
    // converts [ r1, g1, b1,  r2, g2, b2, ... ] to pairs format
    var length = array.length - 3;
    var colors = new Float32Array(2 * length);

    for (var i = 0; i < length; i += 3) {
      colors[2 * i] = array[i];
      colors[2 * i + 1] = array[i + 1];
      colors[2 * i + 2] = array[i + 2];
      colors[2 * i + 3] = array[i + 3];
      colors[2 * i + 4] = array[i + 4];
      colors[2 * i + 5] = array[i + 5];
    }

    LineSegmentsGeometry_LineSegmentsGeometry.prototype.setColors.call(this, colors);
    return this;
  },
  fromLine: function fromLine(line) {
    var geometry = line.geometry;

    if (geometry.isGeometry) {
      console.error('THREE.LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.');
      return;
    } else if (geometry.isBufferGeometry) {
      this.setPositions(geometry.attributes.position.array); // assumes non-indexed
    } // set colors, maybe


    return this;
  },
  copy: function copy()
  /* source */
  {
    // todo
    return this;
  }
});

// CONCATENATED MODULE: ./node_modules/three/examples/jsm/lines/LineMaterial.js

/**
 * parameters = {
 *  color: <hex>,
 *  linewidth: <float>,
 *  dashed: <boolean>,
 *  dashScale: <float>,
 *  dashSize: <float>,
 *  dashOffset: <float>,
 *  gapSize: <float>,
 *  resolution: <Vector2>, // to be set by renderer
 * }
 */

three_module["UniformsLib"].line = {
  linewidth: {
    value: 1
  },
  resolution: {
    value: new three_module["Vector2"](1, 1)
  },
  dashScale: {
    value: 1
  },
  dashSize: {
    value: 1
  },
  dashOffset: {
    value: 0
  },
  gapSize: {
    value: 1
  },
  // todo FIX - maybe change to totalSize
  opacity: {
    value: 1
  }
};
three_module["ShaderLib"]['line'] = {
  uniforms: three_module["UniformsUtils"].merge([three_module["UniformsLib"].common, three_module["UniformsLib"].fog, three_module["UniformsLib"].line]),
  vertexShader: "\n\t\t#include <common>\n\t\t#include <color_pars_vertex>\n\t\t#include <fog_pars_vertex>\n\t\t#include <logdepthbuf_pars_vertex>\n\t\t#include <clipping_planes_pars_vertex>\n\n\t\tuniform float linewidth;\n\t\tuniform vec2 resolution;\n\n\t\tattribute vec3 instanceStart;\n\t\tattribute vec3 instanceEnd;\n\n\t\tattribute vec3 instanceColorStart;\n\t\tattribute vec3 instanceColorEnd;\n\n\t\tvarying vec2 vUv;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashScale;\n\t\t\tattribute float instanceDistanceStart;\n\t\t\tattribute float instanceDistanceEnd;\n\t\t\tvarying float vLineDistance;\n\n\t\t#endif\n\n\t\tvoid trimSegment( const in vec4 start, inout vec4 end ) {\n\n\t\t\t// trim end segment so it terminates between the camera plane and the near plane\n\n\t\t\t// conservative estimate of the near plane\n\t\t\tfloat a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n\t\t\tfloat b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n\t\t\tfloat nearEstimate = - 0.5 * b / a;\n\n\t\t\tfloat alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n\t\t\tend.xyz = mix( start.xyz, end.xyz, alpha );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#ifdef USE_COLOR\n\n\t\t\t\tvColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n\t\t\t#endif\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n\n\t\t\t#endif\n\n\t\t\tfloat aspect = resolution.x / resolution.y;\n\n\t\t\tvUv = uv;\n\n\t\t\t// camera space\n\t\t\tvec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n\t\t\tvec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n\t\t\t// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n\t\t\t// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n\t\t\t// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n\t\t\t// perhaps there is a more elegant solution -- WestLangley\n\n\t\t\tbool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n\t\t\tif ( perspective ) {\n\n\t\t\t\tif ( start.z < 0.0 && end.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( start, end );\n\n\t\t\t\t} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( end, start );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// clip space\n\t\t\tvec4 clipStart = projectionMatrix * start;\n\t\t\tvec4 clipEnd = projectionMatrix * end;\n\n\t\t\t// ndc space\n\t\t\tvec2 ndcStart = clipStart.xy / clipStart.w;\n\t\t\tvec2 ndcEnd = clipEnd.xy / clipEnd.w;\n\n\t\t\t// direction\n\t\t\tvec2 dir = ndcEnd - ndcStart;\n\n\t\t\t// account for clip-space aspect ratio\n\t\t\tdir.x *= aspect;\n\t\t\tdir = normalize( dir );\n\n\t\t\t// perpendicular to dir\n\t\t\tvec2 offset = vec2( dir.y, - dir.x );\n\n\t\t\t// undo aspect ratio adjustment\n\t\t\tdir.x /= aspect;\n\t\t\toffset.x /= aspect;\n\n\t\t\t// sign flip\n\t\t\tif ( position.x < 0.0 ) offset *= - 1.0;\n\n\t\t\t// endcaps\n\t\t\tif ( position.y < 0.0 ) {\n\n\t\t\t\toffset += - dir;\n\n\t\t\t} else if ( position.y > 1.0 ) {\n\n\t\t\t\toffset += dir;\n\n\t\t\t}\n\n\t\t\t// adjust for linewidth\n\t\t\toffset *= linewidth;\n\n\t\t\t// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n\t\t\toffset /= resolution.y;\n\n\t\t\t// select end\n\t\t\tvec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n\t\t\t// back to clip space\n\t\t\toffset *= clip.w;\n\n\t\t\tclip.xy += offset;\n\n\t\t\tgl_Position = clip;\n\n\t\t\tvec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n\t\t\t#include <logdepthbuf_vertex>\n\t\t\t#include <clipping_planes_vertex>\n\t\t\t#include <fog_vertex>\n\n\t\t}\n\t\t",
  fragmentShader: "\n\t\tuniform vec3 diffuse;\n\t\tuniform float opacity;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashSize;\n\t\t\tuniform float dashOffset;\n\t\t\tuniform float gapSize;\n\n\t\t#endif\n\n\t\tvarying float vLineDistance;\n\n\t\t#include <common>\n\t\t#include <color_pars_fragment>\n\t\t#include <fog_pars_fragment>\n\t\t#include <logdepthbuf_pars_fragment>\n\t\t#include <clipping_planes_pars_fragment>\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\t#include <clipping_planes_fragment>\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tif ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n\t\t\t\tif ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n\t\t\t#endif\n\n\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\tfloat a = vUv.x;\n\t\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\t\tfloat len2 = a * a + b * b;\n\n\t\t\t\tif ( len2 > 1.0 ) discard;\n\n\t\t\t}\n\n\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t\t\t#include <logdepthbuf_fragment>\n\t\t\t#include <color_fragment>\n\n\t\t\tgl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\t\t\t#include <fog_fragment>\n\t\t\t#include <premultiplied_alpha_fragment>\n\n\t\t}\n\t\t"
};

var LineMaterial_LineMaterial = function LineMaterial(parameters) {
  three_module["ShaderMaterial"].call(this, {
    type: 'LineMaterial',
    uniforms: three_module["UniformsUtils"].clone(three_module["ShaderLib"]['line'].uniforms),
    vertexShader: three_module["ShaderLib"]['line'].vertexShader,
    fragmentShader: three_module["ShaderLib"]['line'].fragmentShader,
    clipping: true // required for clipping support

  });
  this.dashed = false;
  Object.defineProperties(this, {
    color: {
      enumerable: true,
      get: function get() {
        return this.uniforms.diffuse.value;
      },
      set: function set(value) {
        this.uniforms.diffuse.value = value;
      }
    },
    linewidth: {
      enumerable: true,
      get: function get() {
        return this.uniforms.linewidth.value;
      },
      set: function set(value) {
        this.uniforms.linewidth.value = value;
      }
    },
    dashScale: {
      enumerable: true,
      get: function get() {
        return this.uniforms.dashScale.value;
      },
      set: function set(value) {
        this.uniforms.dashScale.value = value;
      }
    },
    dashSize: {
      enumerable: true,
      get: function get() {
        return this.uniforms.dashSize.value;
      },
      set: function set(value) {
        this.uniforms.dashSize.value = value;
      }
    },
    dashOffset: {
      enumerable: true,
      get: function get() {
        return this.uniforms.dashOffset.value;
      },
      set: function set(value) {
        this.uniforms.dashOffset.value = value;
      }
    },
    gapSize: {
      enumerable: true,
      get: function get() {
        return this.uniforms.gapSize.value;
      },
      set: function set(value) {
        this.uniforms.gapSize.value = value;
      }
    },
    opacity: {
      enumerable: true,
      get: function get() {
        return this.uniforms.opacity.value;
      },
      set: function set(value) {
        this.uniforms.opacity.value = value;
      }
    },
    resolution: {
      enumerable: true,
      get: function get() {
        return this.uniforms.resolution.value;
      },
      set: function set(value) {
        this.uniforms.resolution.value.copy(value);
      }
    }
  });
  this.setValues(parameters);
};

LineMaterial_LineMaterial.prototype = Object.create(three_module["ShaderMaterial"].prototype);
LineMaterial_LineMaterial.prototype.constructor = LineMaterial_LineMaterial;
LineMaterial_LineMaterial.prototype.isLineMaterial = true;

// CONCATENATED MODULE: ./node_modules/three/examples/jsm/lines/LineSegments2.js




var LineSegments2_LineSegments2 = function LineSegments2(geometry, material) {
  if (geometry === undefined) geometry = new LineSegmentsGeometry_LineSegmentsGeometry();
  if (material === undefined) material = new LineMaterial_LineMaterial({
    color: Math.random() * 0xffffff
  });
  three_module["Mesh"].call(this, geometry, material);
  this.type = 'LineSegments2';
};

LineSegments2_LineSegments2.prototype = Object.assign(Object.create(three_module["Mesh"].prototype), {
  constructor: LineSegments2_LineSegments2,
  isLineSegments2: true,
  computeLineDistances: function () {
    // for backwards-compatability, but could be a method of LineSegmentsGeometry...
    var start = new three_module["Vector3"]();
    var end = new three_module["Vector3"]();
    return function computeLineDistances() {
      var geometry = this.geometry;
      var instanceStart = geometry.attributes.instanceStart;
      var instanceEnd = geometry.attributes.instanceEnd;
      var lineDistances = new Float32Array(2 * instanceStart.data.count);

      for (var i = 0, j = 0, l = instanceStart.data.count; i < l; i++, j += 2) {
        start.fromBufferAttribute(instanceStart, i);
        end.fromBufferAttribute(instanceEnd, i);
        lineDistances[j] = j === 0 ? 0 : lineDistances[j - 1];
        lineDistances[j + 1] = lineDistances[j] + start.distanceTo(end);
      }

      var instanceDistanceBuffer = new three_module["InstancedInterleavedBuffer"](lineDistances, 2, 1); // d0, d1

      geometry.setAttribute('instanceDistanceStart', new three_module["InterleavedBufferAttribute"](instanceDistanceBuffer, 1, 0)); // d0

      geometry.setAttribute('instanceDistanceEnd', new three_module["InterleavedBufferAttribute"](instanceDistanceBuffer, 1, 1)); // d1

      return this;
    };
  }(),
  raycast: function () {
    var start = new three_module["Vector4"]();
    var end = new three_module["Vector4"]();
    var ssOrigin = new three_module["Vector4"]();
    var ssOrigin3 = new three_module["Vector3"]();
    var mvMatrix = new three_module["Matrix4"]();
    var line = new three_module["Line3"]();
    var closestPoint = new three_module["Vector3"]();
    return function raycast(raycaster, intersects) {
      if (raycaster.camera === null) {
        console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');
      }

      var threshold = raycaster.params.Line2 !== undefined ? raycaster.params.Line2.threshold || 0 : 0;
      var ray = raycaster.ray;
      var camera = raycaster.camera;
      var projectionMatrix = camera.projectionMatrix;
      var geometry = this.geometry;
      var material = this.material;
      var resolution = material.resolution;
      var lineWidth = material.linewidth + threshold;
      var instanceStart = geometry.attributes.instanceStart;
      var instanceEnd = geometry.attributes.instanceEnd; // camera forward is negative

      var near = -camera.near; // pick a point 1 unit out along the ray to avoid the ray origin
      // sitting at the camera origin which will cause "w" to be 0 when
      // applying the projection matrix.

      ray.at(1, ssOrigin); // ndc space [ - 1.0, 1.0 ]

      ssOrigin.w = 1;
      ssOrigin.applyMatrix4(camera.matrixWorldInverse);
      ssOrigin.applyMatrix4(projectionMatrix);
      ssOrigin.multiplyScalar(1 / ssOrigin.w); // screen space

      ssOrigin.x *= resolution.x / 2;
      ssOrigin.y *= resolution.y / 2;
      ssOrigin.z = 0;
      ssOrigin3.copy(ssOrigin);
      var matrixWorld = this.matrixWorld;
      mvMatrix.multiplyMatrices(camera.matrixWorldInverse, matrixWorld);

      for (var i = 0, l = instanceStart.count; i < l; i++) {
        start.fromBufferAttribute(instanceStart, i);
        end.fromBufferAttribute(instanceEnd, i);
        start.w = 1;
        end.w = 1; // camera space

        start.applyMatrix4(mvMatrix);
        end.applyMatrix4(mvMatrix); // skip the segment if it's entirely behind the camera

        var isBehindCameraNear = start.z > near && end.z > near;

        if (isBehindCameraNear) {
          continue;
        } // trim the segment if it extends behind camera near


        if (start.z > near) {
          var deltaDist = start.z - end.z;
          var t = (start.z - near) / deltaDist;
          start.lerp(end, t);
        } else if (end.z > near) {
          var _deltaDist = end.z - start.z;

          var _t = (end.z - near) / _deltaDist;

          end.lerp(start, _t);
        } // clip space


        start.applyMatrix4(projectionMatrix);
        end.applyMatrix4(projectionMatrix); // ndc space [ - 1.0, 1.0 ]

        start.multiplyScalar(1 / start.w);
        end.multiplyScalar(1 / end.w); // screen space

        start.x *= resolution.x / 2;
        start.y *= resolution.y / 2;
        end.x *= resolution.x / 2;
        end.y *= resolution.y / 2; // create 2d segment

        line.start.copy(start);
        line.start.z = 0;
        line.end.copy(end);
        line.end.z = 0; // get closest point on ray to segment

        var param = line.closestPointToPointParameter(ssOrigin3, true);
        line.at(param, closestPoint); // check if the intersection point is within clip space

        var zPos = three_module["MathUtils"].lerp(start.z, end.z, param);
        var isInClipSpace = zPos >= -1 && zPos <= 1;
        var isInside = ssOrigin3.distanceTo(closestPoint) < lineWidth * 0.5;

        if (isInClipSpace && isInside) {
          line.start.fromBufferAttribute(instanceStart, i);
          line.end.fromBufferAttribute(instanceEnd, i);
          line.start.applyMatrix4(matrixWorld);
          line.end.applyMatrix4(matrixWorld);
          var pointOnLine = new three_module["Vector3"]();
          var point = new three_module["Vector3"]();
          ray.distanceSqToSegment(line.start, line.end, point, pointOnLine);
          intersects.push({
            point: point,
            pointOnLine: pointOnLine,
            distance: ray.origin.distanceTo(point),
            object: this,
            face: null,
            faceIndex: i,
            uv: null,
            uv2: null
          });
        }
      }
    };
  }()
});

// CONCATENATED MODULE: ./node_modules/three/examples/jsm/lines/Line2.js




var Line2_Line2 = function Line2(geometry, material) {
  if (geometry === undefined) geometry = new LineGeometry_LineGeometry();
  if (material === undefined) material = new LineMaterial_LineMaterial({
    color: Math.random() * 0xffffff
  });
  LineSegments2_LineSegments2.call(this, geometry, material);
  this.type = 'Line2';
};

Line2_Line2.prototype = Object.assign(Object.create(LineSegments2_LineSegments2.prototype), {
  constructor: Line2_Line2,
  isLine2: true
});

// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/Line.js









var Line_Line = /*#__PURE__*/Object(react["forwardRef"])(function Line(_ref, ref) {
  var points = _ref.points,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'black' : _ref$color,
      vertexColors = _ref.vertexColors,
      lineWidth = _ref.lineWidth,
      dashed = _ref.dashed,
      rest = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["points", "color", "vertexColors", "lineWidth", "dashed"]);

  var _useState = Object(react["useState"])(function () {
    return new Line2_Line2();
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 1),
      line2 = _useState2[0];

  var _useState3 = Object(react["useState"])(function () {
    return new LineMaterial_LineMaterial();
  }),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 1),
      lineMaterial = _useState4[0];

  var _useState5 = Object(react["useState"])(function () {
    return new three_module["Vector2"](512, 512);
  }),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 1),
      resolution = _useState6[0];

  var lineGeom = Object(react["useMemo"])(function () {
    var geom = new LineGeometry_LineGeometry();
    var pValues = points.map(function (p) {
      return p instanceof three_module["Vector3"] ? p.toArray() : p;
    });
    geom.setPositions(pValues.flat());

    if (vertexColors) {
      var cValues = vertexColors.map(function (c) {
        return c instanceof three_module["Color"] ? c.toArray() : c;
      });
      geom.setColors(cValues.flat());
    }

    return geom;
  }, [points, vertexColors]);
  Object(react["useEffect"])(function () {
    line2.computeLineDistances();
  }, [line2]);
  Object(react["useLayoutEffect"])(function () {
    if (dashed) {
      lineMaterial.defines.USE_DASH = '';
    } else {
      // Setting lineMaterial.defines.USE_DASH to undefined is apparently not sufficient.
      delete lineMaterial.defines.USE_DASH;
    }

    lineMaterial.needsUpdate = true;
  }, [dashed, lineMaterial]);
  return /*#__PURE__*/Object(react["createElement"])("primitive", Object(esm_extends["a" /* default */])({
    dispose: undefined,
    object: line2,
    ref: ref
  }, rest), /*#__PURE__*/Object(react["createElement"])("primitive", {
    dispose: undefined,
    object: lineGeom,
    attach: "geometry"
  }), /*#__PURE__*/Object(react["createElement"])("primitive", Object(esm_extends["a" /* default */])({
    dispose: undefined,
    object: lineMaterial,
    attach: "material",
    color: color,
    vertexColors: Boolean(vertexColors),
    resolution: resolution,
    linewidth: lineWidth,
    dashed: dashed
  }, rest)));
});

// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/shapes.js




function create(type) {
  var El = type + 'BufferGeometry';
  return /*#__PURE__*/Object(react["forwardRef"])(function (_ref, ref) {
    var args = _ref.args,
        children = _ref.children,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["args", "children"]);

    return /*#__PURE__*/Object(react["createElement"])("mesh", Object(esm_extends["a" /* default */])({
      ref: ref
    }, props), /*#__PURE__*/Object(react["createElement"])(El, {
      attach: "geometry",
      args: args
    }), children);
  });
}

var Box = create('box');
var Circle = create('circle');
var Cone = create('cone');
var Cylinder = create('cylinder');
var Sphere = create('sphere');
var Plane = create('plane');
var Tube = create('tube');
var Torus = create('torus');
var TorusKnot = create('torusKnot');
var Tetrahedron = create('tetrahedron');
var Ring = create('ring');
var Polyhedron = create('polyhedron');
var Icosahedron = create('icosahedron');
var Octahedron = create('octahedron');
var Dodecahedron = create('dodecahedron');
var Extrude = create('extrude');
var Lathe = create('lathe');
var Parametric = create('parametric');

// CONCATENATED MODULE: ./node_modules/@react-three/drei/helpers/useEffectfulState.js



function call(ref, value) {
  if (typeof ref === 'function') ref(value);else if (ref != null) ref.current = value;
}

function useEffectfulState(fn) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var cb = arguments.length > 2 ? arguments[2] : undefined;

  var _useState = Object(react["useState"])(),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  Object(react["useLayoutEffect"])(function () {
    var value = fn();
    set(value);
    call(cb, value);
    return function () {
      return call(cb, null);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}

/* harmony default export */ var helpers_useEffectfulState = (useEffectfulState);
// CONCATENATED MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js
 // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

var OrbitControls_OrbitControls = function OrbitControls(object, domElement) {
  if (domElement === undefined) console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.');
  if (domElement === document) console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
  this.object = object;
  this.domElement = domElement; // Set to false to disable this control

  this.enabled = true; // "target" sets the location of focus, where the object orbits around

  this.target = new three_module["Vector3"](); // How far you can dolly in and out ( PerspectiveCamera only )

  this.minDistance = 0;
  this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )

  this.minZoom = 0;
  this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.

  this.minPolarAngle = 0; // radians

  this.maxPolarAngle = Math.PI; // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )

  this.minAzimuthAngle = -Infinity; // radians

  this.maxAzimuthAngle = Infinity; // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop

  this.enableDamping = false;
  this.dampingFactor = 0.05; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming

  this.enableZoom = true;
  this.zoomSpeed = 1.0; // Set to false to disable rotating

  this.enableRotate = true;
  this.rotateSpeed = 1.0; // Set to false to disable panning

  this.enablePan = true;
  this.panSpeed = 1.0;
  this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up

  this.keyPanSpeed = 7.0; // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop

  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
  // The four arrow keys

  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }; // Mouse buttons

  this.mouseButtons = {
    LEFT: three_module["MOUSE"].ROTATE,
    MIDDLE: three_module["MOUSE"].DOLLY,
    RIGHT: three_module["MOUSE"].PAN
  }; // Touch fingers

  this.touches = {
    ONE: three_module["TOUCH"].ROTATE,
    TWO: three_module["TOUCH"].DOLLY_PAN
  }; // for reset

  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom; // the target DOM element for key events

  this._domElementKeyEvents = null; //
  // public methods
  //

  this.getPolarAngle = function () {
    return spherical.phi;
  };

  this.getAzimuthalAngle = function () {
    return spherical.theta;
  };

  this.listenToKeyEvents = function (domElement) {
    domElement.addEventListener('keydown', onKeyDown);
    this._domElementKeyEvents = domElement;
  };

  this.saveState = function () {
    scope.target0.copy(scope.target);
    scope.position0.copy(scope.object.position);
    scope.zoom0 = scope.object.zoom;
  };

  this.reset = function () {
    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;
    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);
    scope.update();
    state = STATE.NONE;
  }; // this method is exposed, but perhaps it would be better if we can make it private...


  this.update = function () {
    var offset = new three_module["Vector3"](); // so camera.up is the orbit axis

    var quat = new three_module["Quaternion"]().setFromUnitVectors(object.up, new three_module["Vector3"](0, 1, 0));
    var quatInverse = quat.clone().invert();
    var lastPosition = new three_module["Vector3"]();
    var lastQuaternion = new three_module["Quaternion"]();
    var twoPI = 2 * Math.PI;
    return function update() {
      var position = scope.object.position;
      offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space

      offset.applyQuaternion(quat); // angle from z-axis around y-axis

      spherical.setFromVector3(offset);

      if (scope.autoRotate && state === STATE.NONE) {
        rotateLeft(getAutoRotationAngle());
      }

      if (scope.enableDamping) {
        spherical.theta += sphericalDelta.theta * scope.dampingFactor;
        spherical.phi += sphericalDelta.phi * scope.dampingFactor;
      } else {
        spherical.theta += sphericalDelta.theta;
        spherical.phi += sphericalDelta.phi;
      } // restrict theta to be between desired limits


      var min = scope.minAzimuthAngle;
      var max = scope.maxAzimuthAngle;

      if (isFinite(min) && isFinite(max)) {
        if (min < -Math.PI) min += twoPI;else if (min > Math.PI) min -= twoPI;
        if (max < -Math.PI) max += twoPI;else if (max > Math.PI) max -= twoPI;

        if (min <= max) {
          spherical.theta = Math.max(min, Math.min(max, spherical.theta));
        } else {
          spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
        }
      } // restrict phi to be between desired limits


      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
      spherical.makeSafe();
      spherical.radius *= scale; // restrict radius to be between desired limits

      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location

      if (scope.enableDamping === true) {
        scope.target.addScaledVector(panOffset, scope.dampingFactor);
      } else {
        scope.target.add(panOffset);
      }

      offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space

      offset.applyQuaternion(quatInverse);
      position.copy(scope.target).add(offset);
      scope.object.lookAt(scope.target);

      if (scope.enableDamping === true) {
        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;
        panOffset.multiplyScalar(1 - scope.dampingFactor);
      } else {
        sphericalDelta.set(0, 0, 0);
        panOffset.set(0, 0, 0);
      }

      scale = 1; // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8

      if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;
        return true;
      }

      return false;
    };
  }();

  this.dispose = function () {
    scope.domElement.removeEventListener('contextmenu', onContextMenu);
    scope.domElement.removeEventListener('pointerdown', onPointerDown);
    scope.domElement.removeEventListener('wheel', onMouseWheel);
    scope.domElement.removeEventListener('touchstart', onTouchStart);
    scope.domElement.removeEventListener('touchend', onTouchEnd);
    scope.domElement.removeEventListener('touchmove', onTouchMove);
    scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
    scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);

    if (scope._domElementKeyEvents !== null) {
      scope._domElementKeyEvents.removeEventListener('keydown', onKeyDown);
    } //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

  }; //
  // internals
  //


  var scope = this;
  var changeEvent = {
    type: 'change'
  };
  var startEvent = {
    type: 'start'
  };
  var endEvent = {
    type: 'end'
  };
  var STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  };
  var state = STATE.NONE;
  var EPS = 0.000001; // current position in spherical coordinates

  var spherical = new three_module["Spherical"]();
  var sphericalDelta = new three_module["Spherical"]();
  var scale = 1;
  var panOffset = new three_module["Vector3"]();
  var zoomChanged = false;
  var rotateStart = new three_module["Vector2"]();
  var rotateEnd = new three_module["Vector2"]();
  var rotateDelta = new three_module["Vector2"]();
  var panStart = new three_module["Vector2"]();
  var panEnd = new three_module["Vector2"]();
  var panDelta = new three_module["Vector2"]();
  var dollyStart = new three_module["Vector2"]();
  var dollyEnd = new three_module["Vector2"]();
  var dollyDelta = new three_module["Vector2"]();

  function getAutoRotationAngle() {
    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
  }

  function getZoomScale() {
    return Math.pow(0.95, scope.zoomSpeed);
  }

  function rotateLeft(angle) {
    sphericalDelta.theta -= angle;
  }

  function rotateUp(angle) {
    sphericalDelta.phi -= angle;
  }

  var panLeft = function () {
    var v = new three_module["Vector3"]();
    return function panLeft(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix

      v.multiplyScalar(-distance);
      panOffset.add(v);
    };
  }();

  var panUp = function () {
    var v = new three_module["Vector3"]();
    return function panUp(distance, objectMatrix) {
      if (scope.screenSpacePanning === true) {
        v.setFromMatrixColumn(objectMatrix, 1);
      } else {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.crossVectors(scope.object.up, v);
      }

      v.multiplyScalar(distance);
      panOffset.add(v);
    };
  }(); // deltaX and deltaY are in pixels; right and down are positive


  var pan = function () {
    var offset = new three_module["Vector3"]();
    return function pan(deltaX, deltaY) {
      var element = scope.domElement;

      if (scope.object.isPerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we use only clientHeight here so aspect ratio does not distort speed

        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
      } else if (scope.object.isOrthographicCamera) {
        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;
      }
    };
  }();

  function dollyOut(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale /= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  }

  function dollyIn(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale *= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  } //
  // event callbacks - update the object state
  //


  function handleMouseDownRotate(event) {
    rotateStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownDolly(event) {
    dollyStart.set(event.clientX, event.clientY);
  }

  function handleMouseDownPan(event) {
    panStart.set(event.clientX, event.clientY);
  }

  function handleMouseMoveRotate(event) {
    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
    scope.update();
  }

  function handleMouseMoveDolly(event) {
    dollyEnd.set(event.clientX, event.clientY);
    dollyDelta.subVectors(dollyEnd, dollyStart);

    if (dollyDelta.y > 0) {
      dollyOut(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyIn(getZoomScale());
    }

    dollyStart.copy(dollyEnd);
    scope.update();
  }

  function handleMouseMovePan(event) {
    panEnd.set(event.clientX, event.clientY);
    panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }

  function handleMouseUp()
  /*event*/
  {// no-op
  }

  function handleMouseWheel(event) {
    if (event.deltaY < 0) {
      dollyIn(getZoomScale());
    } else if (event.deltaY > 0) {
      dollyOut(getZoomScale());
    }

    scope.update();
  }

  function handleKeyDown(event) {
    var needsUpdate = false;

    switch (event.keyCode) {
      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        needsUpdate = true;
        break;

      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;

      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        needsUpdate = true;
        break;
    }

    if (needsUpdate) {
      // prevent the browser from scrolling on cursor keys
      event.preventDefault();
      scope.update();
    }
  }

  function handleTouchStartRotate(event) {
    if (event.touches.length == 1) {
      rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      rotateStart.set(x, y);
    }
  }

  function handleTouchStartPan(event) {
    if (event.touches.length == 1) {
      panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchStartDolly(event) {
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyStart.set(0, distance);
  }

  function handleTouchStartDollyPan(event) {
    if (scope.enableZoom) handleTouchStartDolly(event);
    if (scope.enablePan) handleTouchStartPan(event);
  }

  function handleTouchStartDollyRotate(event) {
    if (scope.enableZoom) handleTouchStartDolly(event);
    if (scope.enableRotate) handleTouchStartRotate(event);
  }

  function handleTouchMoveRotate(event) {
    if (event.touches.length == 1) {
      rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      rotateEnd.set(x, y);
    }

    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
    var element = scope.domElement;
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
    rotateStart.copy(rotateEnd);
  }

  function handleTouchMovePan(event) {
    if (event.touches.length == 1) {
      panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      var x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      var y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
      panEnd.set(x, y);
    }

    panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
  }

  function handleTouchMoveDolly(event) {
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyEnd.set(0, distance);
    dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
    dollyOut(dollyDelta.y);
    dollyStart.copy(dollyEnd);
  }

  function handleTouchMoveDollyPan(event) {
    if (scope.enableZoom) handleTouchMoveDolly(event);
    if (scope.enablePan) handleTouchMovePan(event);
  }

  function handleTouchMoveDollyRotate(event) {
    if (scope.enableZoom) handleTouchMoveDolly(event);
    if (scope.enableRotate) handleTouchMoveRotate(event);
  }

  function handleTouchEnd()
  /*event*/
  {// no-op
  } //
  // event handlers - FSM: listen for events and reset state
  //


  function onPointerDown(event) {
    if (scope.enabled === false) return;

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseDown(event);
        break;
      // TODO touch
    }
  }

  function onPointerMove(event) {
    if (scope.enabled === false) return;

    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseMove(event);
        break;
      // TODO touch
    }
  }

  function onPointerUp(event) {
    switch (event.pointerType) {
      case 'mouse':
      case 'pen':
        onMouseUp(event);
        break;
      // TODO touch
    }
  }

  function onMouseDown(event) {
    // Prevent the browser from scrolling.
    event.preventDefault(); // Manually set the focus since calling preventDefault above
    // prevents the browser from setting it automatically.

    scope.domElement.focus ? scope.domElement.focus() : window.focus();
    var mouseAction;

    switch (event.button) {
      case 0:
        mouseAction = scope.mouseButtons.LEFT;
        break;

      case 1:
        mouseAction = scope.mouseButtons.MIDDLE;
        break;

      case 2:
        mouseAction = scope.mouseButtons.RIGHT;
        break;

      default:
        mouseAction = -1;
    }

    switch (mouseAction) {
      case three_module["MOUSE"].DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseDownDolly(event);
        state = STATE.DOLLY;
        break;

      case three_module["MOUSE"].ROTATE:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (scope.enablePan === false) return;
          handleMouseDownPan(event);
          state = STATE.PAN;
        } else {
          if (scope.enableRotate === false) return;
          handleMouseDownRotate(event);
          state = STATE.ROTATE;
        }

        break;

      case three_module["MOUSE"].PAN:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (scope.enableRotate === false) return;
          handleMouseDownRotate(event);
          state = STATE.ROTATE;
        } else {
          if (scope.enablePan === false) return;
          handleMouseDownPan(event);
          state = STATE.PAN;
        }

        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      scope.domElement.ownerDocument.addEventListener('pointermove', onPointerMove);
      scope.domElement.ownerDocument.addEventListener('pointerup', onPointerUp);
      scope.dispatchEvent(startEvent);
    }
  }

  function onMouseMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();

    switch (state) {
      case STATE.ROTATE:
        if (scope.enableRotate === false) return;
        handleMouseMoveRotate(event);
        break;

      case STATE.DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseMoveDolly(event);
        break;

      case STATE.PAN:
        if (scope.enablePan === false) return;
        handleMouseMovePan(event);
        break;
    }
  }

  function onMouseUp(event) {
    scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
    scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
    if (scope.enabled === false) return;
    handleMouseUp(event);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onMouseWheel(event) {
    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
    event.preventDefault();
    event.stopPropagation();
    scope.dispatchEvent(startEvent);
    handleMouseWheel(event);
    scope.dispatchEvent(endEvent);
  }

  function onKeyDown(event) {
    if (scope.enabled === false || scope.enablePan === false) return;
    handleKeyDown(event);
  }

  function onTouchStart(event) {
    if (scope.enabled === false) return;
    event.preventDefault(); // prevent scrolling

    switch (event.touches.length) {
      case 1:
        switch (scope.touches.ONE) {
          case three_module["TOUCH"].ROTATE:
            if (scope.enableRotate === false) return;
            handleTouchStartRotate(event);
            state = STATE.TOUCH_ROTATE;
            break;

          case three_module["TOUCH"].PAN:
            if (scope.enablePan === false) return;
            handleTouchStartPan(event);
            state = STATE.TOUCH_PAN;
            break;

          default:
            state = STATE.NONE;
        }

        break;

      case 2:
        switch (scope.touches.TWO) {
          case three_module["TOUCH"].DOLLY_PAN:
            if (scope.enableZoom === false && scope.enablePan === false) return;
            handleTouchStartDollyPan(event);
            state = STATE.TOUCH_DOLLY_PAN;
            break;

          case three_module["TOUCH"].DOLLY_ROTATE:
            if (scope.enableZoom === false && scope.enableRotate === false) return;
            handleTouchStartDollyRotate(event);
            state = STATE.TOUCH_DOLLY_ROTATE;
            break;

          default:
            state = STATE.NONE;
        }

        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      scope.dispatchEvent(startEvent);
    }
  }

  function onTouchMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault(); // prevent scrolling

    event.stopPropagation();

    switch (state) {
      case STATE.TOUCH_ROTATE:
        if (scope.enableRotate === false) return;
        handleTouchMoveRotate(event);
        scope.update();
        break;

      case STATE.TOUCH_PAN:
        if (scope.enablePan === false) return;
        handleTouchMovePan(event);
        scope.update();
        break;

      case STATE.TOUCH_DOLLY_PAN:
        if (scope.enableZoom === false && scope.enablePan === false) return;
        handleTouchMoveDollyPan(event);
        scope.update();
        break;

      case STATE.TOUCH_DOLLY_ROTATE:
        if (scope.enableZoom === false && scope.enableRotate === false) return;
        handleTouchMoveDollyRotate(event);
        scope.update();
        break;

      default:
        state = STATE.NONE;
    }
  }

  function onTouchEnd(event) {
    if (scope.enabled === false) return;
    handleTouchEnd(event);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }

  function onContextMenu(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
  } //


  scope.domElement.addEventListener('contextmenu', onContextMenu);
  scope.domElement.addEventListener('pointerdown', onPointerDown);
  scope.domElement.addEventListener('wheel', onMouseWheel);
  scope.domElement.addEventListener('touchstart', onTouchStart);
  scope.domElement.addEventListener('touchend', onTouchEnd);
  scope.domElement.addEventListener('touchmove', onTouchMove); // force an update at start

  this.update();
};

OrbitControls_OrbitControls.prototype = Object.create(three_module["EventDispatcher"].prototype);
OrbitControls_OrbitControls.prototype.constructor = OrbitControls_OrbitControls; // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

var OrbitControls_MapControls = function MapControls(object, domElement) {
  OrbitControls_OrbitControls.call(this, object, domElement);
  this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

  this.mouseButtons.LEFT = three_module["MOUSE"].PAN;
  this.mouseButtons.RIGHT = three_module["MOUSE"].ROTATE;
  this.touches.ONE = three_module["TOUCH"].PAN;
  this.touches.TWO = three_module["TOUCH"].DOLLY_ROTATE;
};

OrbitControls_MapControls.prototype = Object.create(three_module["EventDispatcher"].prototype);
OrbitControls_MapControls.prototype.constructor = OrbitControls_MapControls;

// CONCATENATED MODULE: ./node_modules/@react-three/drei/core/OrbitControls.js





var core_OrbitControls_OrbitControls = /*#__PURE__*/Object(react["forwardRef"])(function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    enableDamping: true
  };
  var ref = arguments.length > 1 ? arguments[1] : undefined;

  var _useThree = useThree(),
      camera = _useThree.camera,
      gl = _useThree.gl,
      invalidate = _useThree.invalidate;

  var controls = helpers_useEffectfulState(function () {
    return new OrbitControls_OrbitControls(camera, gl.domElement);
  }, [camera, gl], ref);
  useFrame(function () {
    return controls == null ? void 0 : controls.update();
  });
  Object(react["useEffect"])(function () {
    controls == null ? void 0 : controls.addEventListener == null ? void 0 : controls.addEventListener('change', invalidate);
    return function () {
      return controls == null ? void 0 : controls.removeEventListener == null ? void 0 : controls.removeEventListener('change', invalidate);
    };
  }, [controls, invalidate]);
  return controls ? /*#__PURE__*/Object(react["createElement"])("primitive", Object(esm_extends["a" /* default */])({
    dispose: undefined,
    object: controls,
    enableDamping: true
  }, props)) : null;
});

// CONCATENATED MODULE: ./src/components/widgets/CanvasWidget.tsx





function Axis() {
  var lineProps = {
    lineWidth: 4,
    // In pixels (default)
    dashed: false // Default

  };
  var c = 1;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Line_Line, Object.assign({
    points: [[0, 0, 0], [c, 0, 0]] // Array of points
    ,
    color: "blue"
  }, lineProps)), /*#__PURE__*/react_default.a.createElement(Line_Line, Object.assign({
    points: [[0, 0, 0], [0, c, 0]] // Array of points
    ,
    color: "red"
  }, lineProps)), /*#__PURE__*/react_default.a.createElement(Line_Line, Object.assign({
    points: [[0, 0, 0], [0, 0, c]] // Array of points
    ,
    color: "black"
  }, lineProps)));
}

function Cube(props) {
  var color = props.color,
      rotator = props.rotator;
  var meshRef = Object(react["useRef"])(); // updates outside of react

  useFrame(function (state, delta) {
    var mesh = meshRef.current;
    if (!mesh) return;
    var rot = rotator(delta, mesh.rotation);
    if (!rot) return;
    var x = rot.x,
        y = rot.y,
        z = rot.z;
    mesh.rotation.x = x;
    mesh.rotation.y = y;
    mesh.rotation.z = z;
  });
  return /*#__PURE__*/react_default.a.createElement("mesh", {
    ref: meshRef,
    receiveShadow: true,
    castShadow: true
  }, /*#__PURE__*/react_default.a.createElement("boxBufferGeometry", {
    attach: "geometry"
  }), /*#__PURE__*/react_default.a.createElement("meshPhongMaterial", {
    attach: "material",
    color: color
  }));
}

function CanvasWidget(props) {
  var showAxes = props.showAxes,
      others = Object(objectWithoutPropertiesLoose["a" /* default */])(props, ["showAxes"]);

  return /*#__PURE__*/react_default.a.createElement(web_Canvas, {
    shadowMap: true,
    camera: {
      position: [-1, 0.5, 2],
      fov: 50
    }
  }, /*#__PURE__*/react_default.a.createElement("hemisphereLight", {
    intensity: 0.35
  }), /*#__PURE__*/react_default.a.createElement("spotLight", {
    position: [10, 10, 10],
    angle: 0.3,
    penumbra: 1,
    intensity: 2,
    castShadow: true
  }), /*#__PURE__*/react_default.a.createElement(Plane, {
    receiveShadow: true,
    castShadow: true,
    args: [5, 5],
    position: [0, -1, 0],
    rotation: [-Math.PI / 2, 0, 0]
  }), showAxes && /*#__PURE__*/react_default.a.createElement(Axis, null), /*#__PURE__*/react_default.a.createElement(Cube, others), /*#__PURE__*/react_default.a.createElement(core_OrbitControls_OrbitControls, null));
}

/***/ }),

/***/ "ewvW":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("HYAF");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "iEE2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KQm4");
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ODXe");
/* harmony import */ var _home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1OyB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sBL/");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_4__);






function useMeasure() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    debounce: 0,
    scroll: false
  },
      debounce$1 = _ref.debounce,
      scroll = _ref.scroll,
      polyfill = _ref.polyfill;

  var ResizeObserver = polyfill || (typeof window === 'undefined' ? function ResizeObserver() {
    Object(_home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, ResizeObserver);
  } : window.ResizeObserver);

  if (!ResizeObserver) {
    throw new Error('This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills');
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }),
      _useState2 = Object(_home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      bounds = _useState2[0],
      set = _useState2[1]; // keep all state in a ref


  var state = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  }); // set actual debounce values early, so effects know if they should react accordingly

  var scrollDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.scroll : null;
  var resizeDebounce = debounce$1 ? typeof debounce$1 === 'number' ? debounce$1 : debounce$1.resize : null; // make sure to update state only as long as the component is truly mounted

  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mounted.current = true;
    return function () {
      return void (mounted.current = false);
    };
  }); // memoize handlers, so event-listeners know when they should update

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var callback = function callback() {
      if (!state.current.element) return;

      var _state$current$elemen = state.current.element.getBoundingClientRect(),
          left = _state$current$elemen.left,
          top = _state$current$elemen.top,
          width = _state$current$elemen.width,
          height = _state$current$elemen.height,
          bottom = _state$current$elemen.bottom,
          right = _state$current$elemen.right,
          x = _state$current$elemen.x,
          y = _state$current$elemen.y;

      var size = {
        left: left,
        top: top,
        width: width,
        height: height,
        bottom: bottom,
        right: right,
        x: x,
        y: y
      };
      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);
    };

    return [callback, resizeDebounce ? Object(debounce__WEBPACK_IMPORTED_MODULE_4__["debounce"])(callback, resizeDebounce) : callback, scrollDebounce ? Object(debounce__WEBPACK_IMPORTED_MODULE_4__["debounce"])(callback, scrollDebounce) : callback];
  }, [set, scrollDebounce, resizeDebounce]),
      _useMemo2 = Object(_home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useMemo, 3),
      forceRefresh = _useMemo2[0],
      resizeChange = _useMemo2[1],
      scrollChange = _useMemo2[2]; // cleanup current scroll-listeners / observers


  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach(function (element) {
        return element.removeEventListener('scroll', scrollChange, true);
      });
      state.current.scrollContainers = null;
    }

    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  } // add scroll-listeners / observers


  function addListeners() {
    if (!state.current.element) return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);

    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach(function (scrollContainer) {
        return scrollContainer.addEventListener('scroll', scrollChange, {
          capture: true,
          passive: true
        });
      });
    }
  } // the ref we expose to the user


  var ref = function ref(node) {
    if (!node || node === state.current.element) return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  }; // add general event listeners


  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]); // remove all listeners when the components unmounts

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return removeListeners;
  }, []);
  return [ref, bounds, forceRefresh];
} // Adds native resize listener to window


function useOnWindowResize(onWindowResize) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var cb = onWindowResize;
    window.addEventListener('resize', cb);
    return function () {
      return void window.removeEventListener('resize', cb);
    };
  }, [onWindowResize]);
}

function useOnWindowScroll(onScroll, enabled) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (enabled) {
      var cb = onScroll;
      window.addEventListener('scroll', cb, {
        capture: true,
        passive: true
      });
      return function () {
        return void window.removeEventListener('scroll', cb, true);
      };
    }
  }, [onScroll, enabled]);
} // Returns a list of scroll offsets


function findScrollContainers(element) {
  var result = [];
  if (!element || element === document.body) return result;

  var _window$getComputedSt = window.getComputedStyle(element),
      overflow = _window$getComputedSt.overflow,
      overflowX = _window$getComputedSt.overflowX,
      overflowY = _window$getComputedSt.overflowY;

  if ([overflow, overflowX, overflowY].some(function (prop) {
    return prop === 'auto' || prop === 'scroll';
  })) result.push(element);
  return [].concat(result, Object(_home_runner_work_jacdac_docs_jacdac_docs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(findScrollContainers(element.parentElement)));
} // Checks if element boundaries are equal


var keys = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'];

var areBoundsEqual = function areBoundsEqual(a, b) {
  return keys.every(function (key) {
    return a[key] === b[key];
  });
};

if ( true && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(module, 'exports').writable) {
  module.exports = useMeasure;
}

/* harmony default export */ __webpack_exports__["a"] = (useMeasure);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "oTnw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');

exports.default = _default;

/***/ }),

/***/ "or9q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("6LWA");
var toLength = __webpack_require__("UMSQ");
var bind = __webpack_require__("A2ZE");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "sBL/":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  ;

  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

; // Adds compatibility for ES modules

debounce.debounce = debounce;
module.exports = debounce;

/***/ }),

/***/ "sgTi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useMicrophoneAnalyzer; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./src/components/hooks/useAudioContext.ts

function useAudioContext() {
  var audioContextRef = Object(react["useRef"])(); // final cleanup

  Object(react["useEffect"])(function () {
    return function () {
      var _audioContextRef$curr;

      return (_audioContextRef$curr = audioContextRef.current) === null || _audioContextRef$curr === void 0 ? void 0 : _audioContextRef$curr.close();
    };
  }, []); // needs to be initiated in onClick on safari mobile

  var onClickActivateAudioContext = function onClickActivateAudioContext() {
    if (audioContextRef.current) return audioContextRef.current; // activating audio context

    try {
      console.log('activating audio context');
      var ctx = new (window.AudioContext || window.webkitAudioContext)(); // play silence sound within onlick to unlock it

      var buffer = ctx.createBuffer(1, 1, 22050);
      var source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start();
      audioContextRef.current = ctx;
      console.log("audio context activated");
      return ctx;
    } catch (e) {
      console.error(e);
    }

    return audioContextRef.current;
  };

  return {
    onClickActivateAudioContext: onClickActivateAudioContext
  };
}
// CONCATENATED MODULE: ./src/components/hooks/useAudioAnalyzer.ts




function useMicrophoneAnalyzer(options) {
  var _ref = options || {},
      fftSize = _ref.fftSize,
      smoothingTimeConstant = _ref.smoothingTimeConstant,
      minDecibels = _ref.minDecibels,
      maxDecibels = _ref.maxDecibels;

  var _useAudioContext = useAudioContext(),
      onClickActivateAudioContext = _useAudioContext.onClickActivateAudioContext;

  var analyzerRef = Object(react["useRef"])();
  var microphoneSource = Object(react["useRef"])();

  var applyOptions = function applyOptions() {
    var analyzer = analyzerRef.current;

    if (analyzer) {
      // must be multiple of power of two
      if (!isNaN(fftSize)) analyzer.fftSize = fftSize;
      if (!isNaN(smoothingTimeConstant)) analyzer.smoothingTimeConstant = smoothingTimeConstant;
      if (!isNaN(minDecibels)) analyzer.minDecibels = minDecibels;
      if (!isNaN(maxDecibels)) analyzer.maxDecibels = maxDecibels;
    }
  }; // grab microphone


  var onClickActivateMicrophone = /*#__PURE__*/function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var audioContext, resp, source, node;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!analyzerRef.current) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", analyzerRef.current);

            case 2:
              audioContext = onClickActivateAudioContext();
              _context.prev = 3;
              console.log('activating microphone', {
                audioContext: audioContext
              });
              _context.next = 7;
              return navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true
              });

            case 7:
              resp = _context.sent;
              source = microphoneSource.current = audioContext.createMediaStreamSource(resp);
              node = audioContext.createAnalyser();
              source.connect(node);
              analyzerRef.current = node;
              applyOptions();
              console.log("microphone analyzer activated");
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](3);
              console.warn(_context.t0);

            case 19:
              return _context.abrupt("return", analyzerRef.current);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 16]]);
    }));

    return function onClickActivateMicrophone() {
      return _ref2.apply(this, arguments);
    };
  }();

  var closeMicrophone = function closeMicrophone() {
    if (!microphoneSource.current) return;

    try {
      var _microphoneSource$cur, _microphoneSource$cur2, _analyzerRef$current;

      console.log("closing microphone");
      var stream = (_microphoneSource$cur = microphoneSource.current) === null || _microphoneSource$cur === void 0 ? void 0 : _microphoneSource$cur.mediaStream;
      (_microphoneSource$cur2 = microphoneSource.current) === null || _microphoneSource$cur2 === void 0 ? void 0 : _microphoneSource$cur2.disconnect();
      (_analyzerRef$current = analyzerRef.current) === null || _analyzerRef$current === void 0 ? void 0 : _analyzerRef$current.disconnect();
      var tracks = stream === null || stream === void 0 ? void 0 : stream.getTracks();
      tracks === null || tracks === void 0 ? void 0 : tracks.forEach(function (track) {
        return track.stop();
      });
    } catch (e) {
      console.warn(e);
    } finally {
      microphoneSource.current = undefined;
      analyzerRef.current = undefined;
    }
  }; // final cleanup


  Object(react["useEffect"])(function () {
    return closeMicrophone;
  }, []); // update options

  Object(react["useEffect"])(applyOptions, [analyzerRef.current, fftSize, smoothingTimeConstant, minDecibels, maxDecibels]);
  return {
    onClickActivateMicrophone: onClickActivateMicrophone,
    closeMicrophone: closeMicrophone,
    analyser: function analyser() {
      return analyzerRef.current;
    }
  };
}

/***/ }),

/***/ "tB9+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), 'CloudUpload');

exports.default = _default;

/***/ }),

/***/ "vrJG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), 'AttachFile');

exports.default = _default;

/***/ }),

/***/ "wOJ8":
/***/ (function(module, exports) {

function E() {// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });
    return this;
  },
  once: function once(name, callback, ctx) {
    var self = this;

    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }

    ;
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function emit(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },
  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    } // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
module.exports = E;
module.exports.TinyEmitter = E;

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "xV1m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.default = _default;

/***/ }),

/***/ "yXPU":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "zbJW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-52aa6cdc5af3dd9dcde6.js.map