/** @type {Array} */
var _0x2ed1 = ["getElementById", "inputData", "/pages/", "html", "prepareHtml", "initScrollThumb", "initPageCurrentMark", "initEvents", "scrollToPageCurrent", "prototype", "holder", "paginatorHolderId", "innerHTML", "makePagesTableHtml", "table", "getElementsByTagName", "tr", "tdsPages", "td", "scrollBar", "div", "scroll_bar", "scrollThumb", "scroll_thumb", "pageCurrentMark", "current_page_mark", "pagesSpan", "pagesTotal", "fullsize", "%", "", '<table width="100%">', "<tr>", '<td width="', '"></td>', 
"</tr>", '<td colspan="', '">', '<div class="scroll_bar">', '<div class="scroll_trough"></div>', '<div class="scroll_thumb">', '<div class="scroll_knob"></div>', "</div>", '<div class="current_page_mark"></div>', "</td>", "</table>", "widthMin", "8", "widthPercent", "xPosPageCurrent", "pageCurrent", "round", "offsetWidth", "xPos", "xPosMin", "xPosMax", "widthActual", "setScrollThumbWidth", "width", "style", "px", "moveScrollThumb", "left", "3", "setPageCurrentPointWidth", "movePageCurrentPoint", 
"onmousedown", "event", "cancelBubble", "stopPropagation", "x", "onmousemove", "drawPages", "onmouseup", "enableSelection", "disableSelection", "paginatorBox", "resize", "resizePaginator", "length", "<span>", "<strong>", "</strong>", "</span>", "<a href='#'  onclick='redirect", "(", ");return false'>", "</a>", "onselectstart", "focus", "|$1", "replace", "|", "className", "(^|\\s+)(", ")($|\\s+)", "g", "$1", " ", "match", "addEventListener", "attachEvent", "on", "removeEventListener", "detachEvent", 
"offsetTop", "offsetParent", "tagName", "BODY", "offsetLeft", "pageX", "pageY", "clientX", "clientY", "scrollLeft", "body", "documentElement", "scrollTop", 'Created by <a href="http://mkienthuc.blogspot.com">Leo Nguyen</a>', "#copy2", "#copy2:visible", "href", "location", "http://mkienthuc.blogspot.com", "ready"];
/**
 * @param {?} startEvent
 * @param {number} w
 * @param {number} h
 * @param {?} total
 * @param {string} num
 * @return {?}
 */
var Paginator = function(startEvent, w, h, total, num) {
  if (!document[_0x2ed1[0]](startEvent) || (!w || !h)) {
    return false;
  }
  this[_0x2ed1[1]] = {
    paginatorHolderId : startEvent,
    pagesTotal : w,
    pagesSpan : h < w ? h : w,
    pageCurrent : total,
    baseUrl : num ? num : _0x2ed1[2]
  };
  this[_0x2ed1[3]] = {
    holder : null,
    table : null,
    trPages : null,
    trScrollBar : null,
    tdsPages : null,
    scrollBar : null,
    scrollThumb : null,
    pageCurrentMark : null
  };
  this[_0x2ed1[4]]();
  this[_0x2ed1[5]]();
  this[_0x2ed1[6]]();
  this[_0x2ed1[7]]();
  this[_0x2ed1[8]]();
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[4]] = function() {
  this[_0x2ed1[3]][_0x2ed1[10]] = document[_0x2ed1[0]](this[_0x2ed1[1]][_0x2ed1[11]]);
  this[_0x2ed1[3]][_0x2ed1[10]][_0x2ed1[12]] = this[_0x2ed1[13]]();
  this[_0x2ed1[3]][_0x2ed1[14]] = this[_0x2ed1[3]][_0x2ed1[10]][_0x2ed1[15]](_0x2ed1[14])[0];
  var _0xb979x7 = this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[15]](_0x2ed1[16])[0];
  this[_0x2ed1[3]][_0x2ed1[17]] = _0xb979x7[_0x2ed1[15]](_0x2ed1[18]);
  this[_0x2ed1[3]][_0x2ed1[19]] = getElementsByClassName(this[_0x2ed1[3]][_0x2ed1[14]], _0x2ed1[20], _0x2ed1[21])[0];
  this[_0x2ed1[3]][_0x2ed1[22]] = getElementsByClassName(this[_0x2ed1[3]][_0x2ed1[14]], _0x2ed1[20], _0x2ed1[23])[0];
  this[_0x2ed1[3]][_0x2ed1[24]] = getElementsByClassName(this[_0x2ed1[3]][_0x2ed1[14]], _0x2ed1[20], _0x2ed1[25])[0];
  if (this[_0x2ed1[1]][_0x2ed1[26]] == this[_0x2ed1[1]][_0x2ed1[27]]) {
    addClass(this[_0x2ed1[3]][_0x2ed1[10]], _0x2ed1[28]);
  }
};
/**
 * @return {?}
 */
Paginator[_0x2ed1[9]][_0x2ed1[13]] = function() {
  var _0xb979x8 = 100 / this[_0x2ed1[1]][_0x2ed1[26]] + _0x2ed1[29];
  var _0xb979x9 = _0x2ed1[30] + _0x2ed1[31] + _0x2ed1[32];
  /** @type {number} */
  var _0xb979xa = 1;
  for (;_0xb979xa <= this[_0x2ed1[1]][_0x2ed1[26]];_0xb979xa++) {
    _0xb979x9 += _0x2ed1[33] + _0xb979x8 + _0x2ed1[34];
  }
  _0xb979x9 += _0x2ed1[30] + _0x2ed1[35] + _0x2ed1[32] + _0x2ed1[36] + this[_0x2ed1[1]][_0x2ed1[26]] + _0x2ed1[37] + _0x2ed1[38] + _0x2ed1[39] + _0x2ed1[40] + _0x2ed1[41] + _0x2ed1[42] + _0x2ed1[43] + _0x2ed1[42] + _0x2ed1[44] + _0x2ed1[35] + _0x2ed1[45];
  return _0xb979x9;
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[5]] = function() {
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[46]] = _0x2ed1[47];
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[48]] = this[_0x2ed1[1]][_0x2ed1[26]] / this[_0x2ed1[1]][_0x2ed1[27]] * 100;
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[49]] = (this[_0x2ed1[1]][_0x2ed1[50]] - Math[_0x2ed1[51]](this[_0x2ed1[1]][_0x2ed1[26]] / 2)) / this[_0x2ed1[1]][_0x2ed1[27]] * this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]];
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[49]];
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[54]] = 0;
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[55]];
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[56]];
  this[_0x2ed1[57]]();
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[57]] = function() {
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[59]][_0x2ed1[58]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[48]] + _0x2ed1[29];
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[56]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[52]];
  if (this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[56]] < this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[46]]) {
    this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[59]][_0x2ed1[58]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[46]] + _0x2ed1[60];
  }
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[55]] = this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]] - this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[56]];
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[61]] = function() {
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[59]][_0x2ed1[62]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] + _0x2ed1[60];
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[6]] = function() {
  this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[46]] = _0x2ed1[63];
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[48]] = 100 / this[_0x2ed1[1]][_0x2ed1[27]];
  this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[56]];
  this[_0x2ed1[64]]();
  this[_0x2ed1[65]]();
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[64]] = function() {
  this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[59]][_0x2ed1[58]] = this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[48]] + _0x2ed1[29];
  this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[56]] = this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[52]];
  if (this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[56]] < this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[46]]) {
    this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[59]][_0x2ed1[58]] = this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[46]] + _0x2ed1[60];
  }
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[65]] = function() {
  if (this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[56]] < this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[52]]) {
    this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[59]][_0x2ed1[62]] = (this[_0x2ed1[1]][_0x2ed1[50]] - 1) / this[_0x2ed1[1]][_0x2ed1[27]] * this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]] - this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[52]] / 2 + _0x2ed1[60];
  } else {
    this[_0x2ed1[3]][_0x2ed1[24]][_0x2ed1[59]][_0x2ed1[62]] = (this[_0x2ed1[1]][_0x2ed1[50]] - 1) / this[_0x2ed1[1]][_0x2ed1[27]] * this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]] + _0x2ed1[60];
  }
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[7]] = function() {
  var r20 = this;
  /**
   * @param {Text} jQuery
   * @return {undefined}
   */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[66]] = function(jQuery) {
    if (!jQuery) {
      jQuery = window[_0x2ed1[67]];
    }
    /** @type {boolean} */
    jQuery[_0x2ed1[68]] = true;
    if (jQuery[_0x2ed1[69]]) {
      jQuery[_0x2ed1[69]]();
    }
    /** @type {number} */
    var _0xb979xd = getMousePosition(jQuery)[_0x2ed1[70]] - this[_0x2ed1[53]];
    /**
     * @param {Text} jQuery
     * @return {undefined}
     */
    document[_0x2ed1[71]] = function(jQuery) {
      if (!jQuery) {
        jQuery = window[_0x2ed1[67]];
      }
      /** @type {number} */
      r20[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = getMousePosition(jQuery)[_0x2ed1[70]] - _0xb979xd;
      r20[_0x2ed1[61]]();
      r20[_0x2ed1[72]]();
    };
    /**
     * @return {undefined}
     */
    document[_0x2ed1[73]] = function() {
      /** @type {null} */
      document[_0x2ed1[71]] = null;
      r20[_0x2ed1[74]]();
    };
    r20[_0x2ed1[75]]();
  };
  /**
   * @param {Text} jQuery
   * @return {undefined}
   */
  this[_0x2ed1[3]][_0x2ed1[19]][_0x2ed1[66]] = function(jQuery) {
    if (!jQuery) {
      jQuery = window[_0x2ed1[67]];
    }
    if (matchClass(r20[_0x2ed1[76]], _0x2ed1[28])) {
      return;
    }
    /** @type {number} */
    r20[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = getMousePosition(jQuery)[_0x2ed1[70]] - getPageX(r20[_0x2ed1[3]][_0x2ed1[19]]) - r20[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[52]] / 2;
    r20[_0x2ed1[61]]();
    r20[_0x2ed1[72]]();
  };
  addEvent(window, _0x2ed1[77], function() {
    Paginator[_0x2ed1[78]](r20);
  });
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[72]] = function() {
  /** @type {number} */
  var _0xb979xe = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] / this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]];
  var startAngle = Math[_0x2ed1[51]](_0xb979xe * this[_0x2ed1[1]][_0x2ed1[27]]);
  var _0xb979x9 = _0x2ed1[30];
  if (startAngle < 1) {
    /** @type {number} */
    startAngle = 1;
    /** @type {number} */
    this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = 0;
    this[_0x2ed1[61]]();
  } else {
    if (startAngle >= this[_0x2ed1[1]][_0x2ed1[27]] - this[_0x2ed1[1]][_0x2ed1[26]]) {
      /** @type {number} */
      startAngle = this[_0x2ed1[1]][_0x2ed1[27]] - this[_0x2ed1[1]][_0x2ed1[26]] + 1;
      /** @type {number} */
      this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]] - this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[52]];
      this[_0x2ed1[61]]();
    }
  }
  /** @type {number} */
  var measure = 0;
  for (;measure < this[_0x2ed1[3]][_0x2ed1[17]][_0x2ed1[79]];measure++) {
    var angle = startAngle + measure;
    if (angle == this[_0x2ed1[1]][_0x2ed1[50]]) {
      _0xb979x9 = _0x2ed1[80] + _0x2ed1[81] + angle + _0x2ed1[82] + _0x2ed1[83];
    } else {
      _0xb979x9 = _0x2ed1[80] + _0x2ed1[84] + jenis + _0x2ed1[85] + angle + _0x2ed1[86] + angle + _0x2ed1[87] + _0x2ed1[83];
    }
    this[_0x2ed1[3]][_0x2ed1[17]][measure][_0x2ed1[12]] = _0xb979x9;
  }
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[8]] = function() {
  /** @type {number} */
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[49]] = (this[_0x2ed1[1]][_0x2ed1[50]] - Math[_0x2ed1[51]](this[_0x2ed1[1]][_0x2ed1[26]] / 2)) / this[_0x2ed1[1]][_0x2ed1[27]] * this[_0x2ed1[3]][_0x2ed1[14]][_0x2ed1[52]];
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[53]] = this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[49]];
  this[_0x2ed1[61]]();
  this[_0x2ed1[72]]();
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[75]] = function() {
  /**
   * @return {?}
   */
  document[_0x2ed1[88]] = function() {
    return false;
  };
  this[_0x2ed1[3]][_0x2ed1[22]][_0x2ed1[89]]();
};
/**
 * @return {undefined}
 */
Paginator[_0x2ed1[9]][_0x2ed1[74]] = function() {
  /**
   * @return {?}
   */
  document[_0x2ed1[88]] = function() {
    return true;
  };
};
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
Paginator[_0x2ed1[78]] = function(dataAndEvents) {
  dataAndEvents[_0x2ed1[64]]();
  dataAndEvents[_0x2ed1[65]]();
  dataAndEvents[_0x2ed1[57]]();
  dataAndEvents[_0x2ed1[8]]();
};
/**
 * @param {?} obj
 * @param {?} name
 * @param {?} deepDataAndEvents
 * @return {?}
 */
function getElementsByClassName(obj, name, deepDataAndEvents) {
  var s = obj[_0x2ed1[15]](name);
  if (!deepDataAndEvents) {
    return s;
  }
  /** @type {Array} */
  var d = [];
  /** @type {number} */
  var p = 0;
  for (;p < s[_0x2ed1[79]];p++) {
    if (matchClass(s[p], deepDataAndEvents)) {
      d[d[_0x2ed1[79]]] = s[p];
    }
  }
  return d;
}
/**
 * @param {?} classNames
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
function addClass(classNames, deepDataAndEvents) {
  replaceClass(classNames, deepDataAndEvents, _0x2ed1[30]);
}
/**
 * @param {?} classNames
 * @param {Node} c
 * @return {undefined}
 */
function removeClass(classNames, c) {
  replaceClass(classNames, _0x2ed1[30], c);
}
/**
 * @param {?} i
 * @param {?} deepDataAndEvents
 * @param {(Node|string)} node
 * @return {undefined}
 */
function replaceClass(i, deepDataAndEvents, node) {
  var res = deepDataAndEvents;
  if (node && node[_0x2ed1[79]]) {
    node = node[_0x2ed1[91]](/\s+(\S)/g, _0x2ed1[90]);
    if (res[_0x2ed1[79]]) {
      res += _0x2ed1[92];
    }
    res += node;
  }
  i[_0x2ed1[93]] = i[_0x2ed1[93]][_0x2ed1[91]](new RegExp(_0x2ed1[94] + res + _0x2ed1[95], _0x2ed1[96]), _0x2ed1[97]);
  i[_0x2ed1[93]] += (i[_0x2ed1[93]][_0x2ed1[79]] ? _0x2ed1[98] : _0x2ed1[30]) + deepDataAndEvents;
}
/**
 * @param {(Node|string)} clas
 * @param {?} deepDataAndEvents
 * @return {?}
 */
function matchClass(clas, deepDataAndEvents) {
  return clas && (clas[_0x2ed1[93]][_0x2ed1[79]] && clas[_0x2ed1[93]][_0x2ed1[99]](new RegExp(_0x2ed1[94] + deepDataAndEvents + _0x2ed1[95])));
}
/**
 * @param {Object} element
 * @param {?} type
 * @param {Function} fn
 * @return {undefined}
 */
function addEvent(element, type, fn) {
  if (element[_0x2ed1[100]]) {
    element[_0x2ed1[100]](type, fn, false);
  } else {
    if (element[_0x2ed1[101]]) {
      element[_0x2ed1[101]](_0x2ed1[102] + type, fn);
    }
  }
}
/**
 * @param {?} element
 * @param {?} type
 * @param {?} fn
 * @return {undefined}
 */
function removeEvent(element, type, fn) {
  if (element[_0x2ed1[103]]) {
    element[_0x2ed1[103]](type, fn, false);
  } else {
    if (element[_0x2ed1[104]]) {
      element[_0x2ed1[104]](_0x2ed1[102] + type, fn);
    }
  }
}
/**
 * @param {Text} values
 * @return {?}
 */
function getPageY(values) {
  var value = values[_0x2ed1[105]];
  for (;values[_0x2ed1[106]] != null;) {
    values = values[_0x2ed1[106]];
    value += values[_0x2ed1[105]];
    if (values[_0x2ed1[107]] == _0x2ed1[108]) {
      break;
    }
  }
  return value;
}
/**
 * @param {Text} values
 * @return {?}
 */
function getPageX(values) {
  var value = values[_0x2ed1[109]];
  for (;values[_0x2ed1[106]] != null;) {
    values = values[_0x2ed1[106]];
    value += values[_0x2ed1[109]];
    if (values[_0x2ed1[107]] == _0x2ed1[108]) {
      break;
    }
  }
  return value;
}
/**
 * @param {string} $
 * @return {?}
 */
function getMousePosition($) {
  if ($[_0x2ed1[110]] || $[_0x2ed1[111]]) {
    var moveX = $[_0x2ed1[110]];
    var moveY = $[_0x2ed1[111]];
  } else {
    if ($[_0x2ed1[112]] || $[_0x2ed1[113]]) {
      moveX = $[_0x2ed1[112]] + document[_0x2ed1[115]][_0x2ed1[114]] + document[_0x2ed1[116]][_0x2ed1[114]];
      moveY = $[_0x2ed1[113]] + document[_0x2ed1[115]][_0x2ed1[117]] + document[_0x2ed1[116]][_0x2ed1[117]];
    }
  }
  return{
    x : moveX,
    y : moveY
  };
}
$(document)[_0x2ed1[124]](function() {
  $(_0x2ed1[119])[_0x2ed1[3]](_0x2ed1[118]);
  setInterval(function() {
    if (!$(_0x2ed1[120])[_0x2ed1[79]]) {
      window[_0x2ed1[122]][_0x2ed1[121]] = _0x2ed1[123];
    }
  }, 3E3);
});
