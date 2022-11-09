/*
Flanx Quikker JavaScript Library.
v0.0.2

- Flanx Quikker also known as FQJS is a JavaScript library which is the main objective is to write, style and function the webpage using only JavaScript that does not need to use multiple files and languages like HTML & CSS to achieve a better performance and also it can also integrate with other frameworks like Bootstrap, Tailwind etc.

Created by Yerenzter
*/
let out = (html, css) => {
  let body = document.querySelector("body");
  body.style.margin = 0;
  body.style.padding = 0;
  
  let fqRoot = document.querySelector("#fq-root");
  fqRoot.style.display = "block";
  fqRoot.style.justifyItems = "center",
  fqRoot.style.alignContent = "flex-start",
  fqRoot.style.width = "100vw",
  fqRoot.style.height = "100vh";
  
  let onHTML = () => {
    let hypertext = {};
    let select = document.querySelector(html.hypertext.select);
    let elem = document.createElement(html.hypertext.elem);
    elem.textContent = html.hypertext.text;
    elem.accept = html.hypertext.accept;
    elem.acceptCharset = html.hypertext.acceptCharset;
    elem.accessKey = html.hypertext.accessKey;
    elem.action = html.hypertext.action;
    elem.align = html.hypertext.align;
    elem.alt = html.hypertext.alt;
    elem.async = html.hypertext.async;
    elem.autoComplete = html.hypertext.autoComplete;
    elem.autoFocus = html.hypertext.autoFocus;
    elem.autoPlay = html.hypertext.autoPlay;
    elem.bgColor = html.hypertext.bgColor;
    elem.border = html.hypertext.border;
    elem.charset = html.hypertext.charset;
    elem.checked = html.hypertext.checked;
    elem.cite = html.hypertext.cite;
    elem.className = html.hypertext.className;
    elem.color = html.hypertext.color;
    elem.colspan = html.hypertext.colspan;
    elem.content = html.hypertext.content;
    elem.contentEditable = !html.hypertext.contentEditable ? false : html.hypertext.contentEditable;
    elem.controls = html.hypertext.controls;
    elem.coords = html.hypertext.coords;
    elem.data = html.hypertext.data;
    elem.dateTime = html.hypertext.dateTime;
    elem.default = html.hypertext.default;
    elem.defer = html.hypertext.defer;
    elem.dir = html.hypertext.dir;
    elem.dirName = html.hypertext.dirName;
    elem.disabled = html.hypertext.disabled;
    elem.download = html.hypertext.download;
    elem.draggable = html.hypertext.draggable;
    elem.enctype = html.hypertext.enctype;
    elem.for = html.hypertext.for;
    elem.form = html.hypertext.form;
    elem.formAction = html.hypertext.formAction;
    elem.headers = html.hypertext.headers;
    elem.height = html.hypertext.height;
    elem.hidden = html.hypertext.hidden;
    elem.high = html.hypertext.high;
    elem.href = html.hypertext.href;
    elem.hrefLang = html.hypertext.hrefLang;
    elem.httpEquiv = html.hypertext.httpEquiv;
    elem.id = html.hypertext.id;
    elem.isMap = html.hypertext.isMap;
    elem.kind = html.hypertext.kind;
    elem.label = html.hypertext.label;
    elem.lang = html.hypertext.lang;
    elem.list = html.hypertext.list;
    elem.loop = html.hypertext.loop;
    elem.low = html.hypertext.low;
    elem.max = html.hypertext.max;
    elem.maxLength = html.hypertext.maxLength;
    elem.media = html.hypertext.media;
    elem.method = html.hypertext.method;
    elem.min = html.hypertext.min;
    elem.multiple = html.hypertext.multiple;
    elem.muted = html.hypertext.muted;
    elem.name = html.hypertext.name;
    elem.noValidate = html.hypertext.noValidate;
    elem.onabort = html.hypertext.onabort;
    elem.onafterprint = html.hypertext.onafterprint;
    elem.onbeforeprint = html.hypertext.onbeforeprint;
    elem.onbeforeunload = html.hypertext.onbeforeunload;
    elem.onblur = html.hypertext.onblur;
    elem.oncanplay = html.hypertext.oncanplay;
    elem.oncanplaythrough = html.hypertext.oncanplaythrough;
    elem.onchange = html.hypertext.onchange;
    elem.onclick = html.hypertext.onclick;
    elem.oncontextmenu = html.hypertext.oncontextmenu;
    elem.oncopy = html.hypertext.oncopy;
    elem.oncuechange = html.hypertext.oncuechange;
    elem.oncut = html.hypertext.oncut;
    elem.ondbclick = html.hypertext.ondbclick;
    elem.ondrag = html.hypertext.ondrag;
    elem.ondragend = html.hypertext.ondragend;
    elem.ondragend = html.hypertext.ondragend;
    elem.ondragleave = html.hypertext.ondragleave;
    elem.ondragover = html.hypertext.ondragover;
    elem.ondragstart = html.hypertext.ondragstart;
    elem.ondrop = html.hypertext.ondrop;
    elem.ondurationchange = html.hypertext.ondurationchange;
    elem.onemptied = html.hypertext.onemptied;
    elem.onended = html.hypertext.onended;
    elem.onerror = html.hypertext.onerror;
    elem.onfocus = html.hypertext.onfocus;
    elem.onhaschange = html.hypertext.onhaschange;
    elem.oninput = html.hypertext.oninput;
    elem.oninvalid = html.hypertext.oninvalid;
    elem.onkeydown = html.hypertext.onkeydown;
    elem.onkeypress = html.hypertext.onkeypress;
    elem.onkeyup = html.hypertext.onkeyup;
    elem.onload = html.hypertext.onload;
    elem.onloadeddata = html.hypertext.onloadeddata;
    elem.onloadedmetadata = html.hypertext.onloadedmetadata;
    elem.onloadstart = html.hypertext.onloadstart;
    elem.onmousedown = html.hypertext.onmousedown;
    elem.onmousemove = html.hypertext.onmousemove;
    elem.onmouseout = html.hypertext.onmouseout;
    elem.onmouseover = html.hypertext.onmouseover;
    elem.onmouseup = html.hypertext.onmouseup;
    elem.onmousewheel = html.hypertext.onmousewheel;
    elem.onoffline = html.hypertext.onoffline;
    elem.ononline = html.hypertext.ononline;
    elem.onpagehide = html.hypertext.onpagehide;
    elem.onpageshow = html.hypertext.onpageshow;
    elem.onpaste = html.hypertext.onpaste;
    elem.onpause = html.hypertext.onpause;
    elem.onplay = html.hypertext.onplay;
    elem.onplaying = html.hypertext.onplaying;
    elem.onpopstate = html.hypertext.onpopstate;
    elem.onprogress = html.hypertext.onprogress;
    elem.onratechange = html.hypertext.onratechange;
    elem.onreset = html.hypertext.onreset;
    elem.onresize = html.hypertext.onresize;
    elem.onscroll = html.hypertext.onscroll;
    elem.onsearch = html.hypertext.onsearch;
    elem.onseeked = html.hypertext.onseeked;
    elem.onseeking = html.hypertext.onseeking;
    elem.onselect = html.hypertext.onselect;
    elem.onstalled = html.hypertext.onstalled;
    elem.onstorage = html.hypertext.onstorage;
    elem.onsubmit = html.hypertext.onsubmit;
    elem.onsuspend = html.hypertext.onsuspend;
    elem.ontimeupdate = html.hypertext.ontimeupdate;
    elem.ontoggle = html.hypertext.ontoggle;
    elem.onunload = html.hypertext.onunload;
    elem.onvolumechange = html.hypertext.onvolumechange;
    elem.onwaiting = html.hypertext.onwaiting;
    elem.onwheel = html.hypertext.onwheel;
    elem.open = html.hypertext.open;
    elem.optimum = html.hypertext.optimum;
    elem.pattern = html.hypertext.pattern;
    elem.placeholder = html.hypertext.placeholder;
    elem.poster = html.hypertext.poster;
    elem.preload = html.hypertext.preload;
    elem.readOnly = html.hypertext.readOnly;
    elem.rel = html.hypertext.rel;
    elem.required = html.hypertext.required;
    elem.reversed = html.hypertext.reversed;
    elem.rows = html.hypertext.rows;
    elem.rowspan = html.hypertext.rowspan;
    elem.sandbox = html.hypertext.sandbox;
    elem.scope = html.hypertext.scope;
    elem.selected = html.hypertext.selected;
    elem.shape = html.hypertext.shape;
    elem.setAttribute("size", html.hypertext.size);
    elem.sizes = html.hypertext.sizes;
    elem.span = html.hypertext.span;
    elem.spellCheck = html.hypertext.spellCheck;
    elem.src = html.hypertext.src;
    elem.srcDoc = html.hypertext.srcDoc;
    elem.srcLang = html.hypertext.srcLang;
    elem.srcSet = html.hypertext.srcSet;
    elem.start = html.hypertext.start;
    elem.step = html.hypertext.step;
    elem.style = html.hypertext.style;
    elem.tabIndex = html.hypertext.tabIndex;
    elem.target = html.hypertext.target;
    elem.title = html.hypertext.title;
    elem.translate = html.hypertext.translate;
    elem.type = html.hypertext.type;
    elem.useMap = html.hypertext.useMap;
    elem.value = !html.hypertext.value ? null : html.hypertext.value;
    elem.width = html.hypertext.width;
    elem.wrap = html.hypertext.wrap;
    select.appendChild(elem);
  };

  let onCSS = () => {
    let stylesheet = {};
    let id = document.querySelector(css.stylesheet.id);
    id.style.accentColor = css.stylesheet.accentColor;
    id.style.alignContent = css.stylesheet.alignContent;
    id.style.alignItems = css.stylesheet.alignItems;
    id.style.alignSelf = css.stylesheet.alignSelf;
    id.style.all = css.stylesheet.all;
    id.style.animation = css.stylesheet.animation;
    id.style.animationDelay = css.stylesheet.animationDelay;
    id.style.animationDirection = css.stylesheet.animationDirection;
    id.style.animationDuration = css.stylesheet.animationDuration;
    id.style.animationFillMode = css.stylesheet.animationFillMode;
    id.style.animationIterationCount = css.stylesheet.animationIterationCount;
    id.style.animationName = css.stylesheet.animationName;
    id.style.animationPlayState = css.stylesheet.animationPlayState;
    id.style.animationTimingFunction = css.stylesheet.animationTimingFunction;
    id.style.backdropFilter = css.stylesheet.backdropFilter;
    id.style.backfaceVisibility = css.stylesheet.backfaceVisibility;
    id.style.background = css.stylesheet.background;
    id.style.backgroundAttachment = css.stylesheet.backgroundAttachment;
    id.style.backgroundBlendMode = css.stylesheet.backgroundBlendMode;
    id.style.backgroundClip = css.stylesheet.backgroundClip;
    id.style.backgroundColor = css.stylesheet.backgroundColor;
    id.style.backgroundImage = css.stylesheet.backgroundImage;
    id.style.backgroundOrigin = css.stylesheet.backgroundOrigin;
    id.style.backgroundPosition = css.stylesheet.backgroundPosition;
    id.style.backgroundRepeat = css.stylesheet.backgroundRepeat;
    id.style.backgroundSize = css.stylesheet.backgroundSize;
    id.style.border = css.stylesheet.border;
    id.style.borderBottom = css.stylesheet.borderBottom;
    id.style.borderBottomColor = css.stylesheet.borderBottomColor;
    id.style.borderBottomLeftRadius = css.stylesheet.borderBottomLeftRadius;
    id.style.borderBottomRightRadius = css.stylesheet.borderBottomRightRadius;
    id.style.borderBottomStyle = css.stylesheet.borderBottomStyle;
    id.style.borderBottomWidth = css.stylesheet.borderBottomWidth;
    id.style.borderCollapse = css.stylesheet.borderCollapse;
    id.style.borderColor = css.stylesheet.borderColor;
    id.style.borderImage = css.stylesheet.borderImage;
    id.style.borderImageOutset = css.stylesheet.borderImageOutset;
    id.style.borderImageRepeat = css.stylesheet.borderImageRepeat;
    id.style.borderImageSlice = css.stylesheet.borderImageSlice;
    id.style.borderImageSource = css.stylesheet.borderImageSource;
    id.style.borderImageWidth = css.stylesheet.borderImageWidth;
    id.style.borderLeft = css.stylesheet.borderLeft;
    id.style.borderLeftColor = css.stylesheet.borderLeftColor;
    id.style.borderLeftStyle = css.stylesheet.borderLeftStyle;
    id.style.borderLeftWidth = css.stylesheet.borderLeftWidth;
    id.style.borderRadius = css.stylesheet.borderRadius;
    id.style.borderRight = css.stylesheet.borderRight;
    id.style.borderRightColor = css.stylesheet.borderRightColor;
    id.style.borderRightStyle = css.stylesheet.borderRightStyle;
    id.style.borderRightWidth = css.stylesheet.borderRightWidth;
    id.style.borderSpacing = css.stylesheet.borderSpacing;
    id.style.borderStyle = css.stylesheet.borderStyle;
    id.style.borderTop = css.stylesheet.borderTop;
    id.style.borderTopColor = css.stylesheet.borderTopColor;
    id.style.borderTopLeftRadius = css.stylesheet.borderTopLeftRadius;
    id.style.borderTopRightRadius = css.stylesheet.borderTopRightRadius;
    id.style.borderTopStyle = css.stylesheet.borderTopStyle;
    id.style.borderTopWidth = css.stylesheet.borderTopWidth;
    id.style.borderWidth = css.stylesheet.borderWidth;
    id.style.bottom = css.stylesheet.bottom;
    id.style.boxDecorationBreak = css.stylesheet.boxDecorationBreak;
    id.style.boxShadow = css.stylesheet.boxShadow;
    id.style.boxSizing = css.stylesheet.boxSizing;
    id.style.breakAfter = css.stylesheet.breakAfter;
    id.style.breakBefore = css.stylesheet.breakBefore;
    id.style.breakInside = css.stylesheet.breakInside;
    id.style.captionSide = css.stylesheet.captionSide;
    id.style.caretColor = css.stylesheet.caretColor;
    /* THIS LINE HAS LEAVE BLANK FOR @CHARSET PROPERTY */
    id.style.clear = css.stylesheet.clear;
    id.style.clip = css.stylesheet.clip;
    id.style.color = css.stylesheet.color;
    id.style.columnCount = css.stylesheet.columnCount;
    id.style.columnFill = css.stylesheet.columnFill;
    id.style.columnGap = css.stylesheet.columnGap;
    id.style.columnRule = css.stylesheet.columnRule;
    id.style.columnRuleColor = css.stylesheet.columnRuleColor;
    id.style.columnRuleStyle = css.stylesheet.columnRuleStyle;
    id.style.columnRuleWidth = css.stylesheet.columnRuleWidth;
    id.style.columnSpan = css.stylesheet.columnSpan;
    id.style.columnWidth = css.stylesheet.columnWidth;
    id.style.columns = css.stylesheet.columns;
    id.style.content = css.stylesheet.content;
    id.style.counterIncrement = css.stylesheet.counterIncrement;
    id.style.counterReset = css.stylesheet.counterReset;
    id.style.cursor = css.stylesheet.cursor;
    id.style.direction = css.stylesheet.direction;
    id.style.display = css.stylesheet.display;
    id.style.emptyCells = css.stylesheet.emptyCells;
    id.style.filter = css.stylesheet.filter;
    id.style.flex = css.stylesheet.flex;
    id.style.flexBasis = css.stylesheet.flexBasis;
    id.style.flexDirection = css.stylesheet.flexDirection;
    id.style.flexFlow = css.stylesheet.flexFlow;
    id.style.flexGrow = css.stylesheet.flexGrow;
    id.style.flexShrink = css.stylesheet.flexShrink;
    id.style.flexWrap = css.stylesheet.flexWrap;
    id.style.float = css.stylesheet.float;
    id.style.font = css.stylesheet.font;
    /* THIS LINE LEAVE BLANK FOR @FONTFACE PROPERTY */
    id.style.fontFamily = css.stylesheet.fontFamily;
    id.style.fontFeatureSettings = css.stylesheet.fontFeatureSettings;
    /* THIS LINE LEAVE BLANK FOR @FONTFEATUREVALUES PROPERTY */
    id.style.fontKerning = css.stylesheet.fontKerning;
    id.style.fontLanguageOverride = css.stylesheet.fontLanguageOverride;
    id.style.fontSize = css.stylesheet.fontSize;
    id.style.fontSizeAdjust = css.stylesheet.fontSizeAdjust;
    id.style.fontStretch = css.stylesheet.fontStretch;
    id.style.fontStyle = css.stylesheet.fontStyle;
    id.style.fontSynthesis = css.stylesheet.fontSynthesis;
    id.style.fontVariant = css.stylesheet.fontVariant;
    id.style.fontVariantAlternates = css.stylesheet.fontVariantAlternates;
    id.style.fontVariantCaps = css.stylesheet.fontVariantCaps;
    id.style.fontVariantEastAsian = css.stylesheet.fontVariantEastAsian;
    id.style.fontVariantLigatures = css.stylesheet.fontVariantLigatures;
    id.style.fontVariantNumeric = css.stylesheet.fontVariantNumeric;
    id.style.fontVariantPosition = css.stylesheet.fontVariantPosition;
    id.style.fontWeight = css.stylesheet.fontWeight;
    id.style.gap = css.stylesheet.gap;
    id.style.grid = css.stylesheet.grid;
    id.style.gridArea = css.stylesheet.gridArea;
    id.style.gridAutoColumns = css.stylesheet.gridAutoColumns;
    id.style.gridAutoFlow = css.stylesheet.gridAutoFlow;
    id.style.gridAutoRows = css.stylesheet.gridAutoRows;
    id.style.gridColumn = css.stylesheet.gridColumn;
    id.style.gridColumnEnd = css.stylesheet.gridColumnEnd;
    id.style.gridRowGap = css.stylesheet.gridRowGap;
    id.style.gridRowStart = css.stylesheet.gridRowStart;
    id.style.gridTemplate = css.stylesheet.gridTemplate;
    id.style.gridTemplateAreas = css.stylesheet.gridTemplateAreas;
    id.style.gridTemplateColumns = css.stylesheet.gridTemplateColumns;
    id.style.gridTemplateRows = css.stylesheet.gridTemplateRows;
    id.style.hangingPunctuation = css.stylesheet.hangingPunctuation;
    id.style.height = css.stylesheet.height;
    id.style.hypens = css.stylesheet.hypens;
    id.style.imageRendering = css.stylesheet.imageRendering;
    /* THIS LINE LEAVE BLANK FOR @IMPORT PROPERTY */
    id.style.isolation = css.stylesheet.isolation;
    id.style.justifyContent = css.stylesheet.justifyContent;
    /* THIS LINE LEAVE BLANK FOR @KEYFRAMES PROPERTY */
    id.style.left = css.stylesheet.left;
    id.style.letterSpacing = css.stylesheet.letterSpacing;
    id.style.lineBreak = css.stylesheet.lineBreak;
    id.style.lineHeight = css.stylesheet.lineHeight;
    id.style.listStyle = css.stylesheet.listStyle;
    id.style.listStyleImage = css.stylesheet.listStyleImage;
    id.style.listStylePosition = css.stylesheet.listStylePosition;
    id.style.listStyleType = css.stylesheet.listStyleType;
    id.style.margin = css.stylesheet.margin;
    id.style.marginBottom = css.stylesheet.marginBottom;
    id.style.marginLeft = css.stylesheet.marginLeft;
    id.style.marginRight = css.stylesheet.marginRight;
    id.style.marginTop = css.stylesheet.marginTop;
    id.style.mask = css.stylesheet.mask;
    id.style.maskClip = css.stylesheet.maskClip;
    id.style.maskComposite = css.stylesheet.maskComposite;
    id.style.maskImage = css.stylesheet.maskImage;
    id.style.maskMode = css.stylesheet.maskMode;
    id.style.maskOrigin = css.stylesheet.maskOrigin;
    id.style.maskPosition = css.stylesheet.maskPosition;
    id.style.maskRepeat = css.stylesheet.maskRepeat;
    id.style.maskSize = css.stylesheet.maskSize;
    id.style.maskType = css.stylesheet.maskType;
    id.style.maxHeight = css.stylesheet.maxHeight;
    id.style.maxWidth = css.stylesheet.maxWidth;
    /* THIS LINE LEAVE BLANK FOR @MEDIA PROPERTY */
    id.style.minHeight = css.stylesheet.minHeight;
    id.style.minWidth = css.stylesheet.minWidth;
    id.style.mixBlendMode = css.stylesheet.mixBlendMode;
    id.style.objectFit = css.stylesheet.objectFit;
    id.style.objectPosition = css.stylesheet.objectPosition;
    id.style.opacity = css.stylesheet.opacity;
    id.style.order = css.stylesheet.order;
    id.style.orphans = css.stylesheet.orphans;
    id.style.outline = css.stylesheet.outline;
    id.style.outlineColor = css.stylesheet.outlineColor;
    id.style.outlineOffset = css.stylesheet.outlineOffset;
    id.style.outlineStyle = css.stylesheet.outlineStyle;
    id.style.outlineWidth = css.stylesheet.outlineWidth;
    id.style.overFlow = css.stylesheet.overFlow;
    id.style.overFlowWrap = css.stylesheet.overFlowWrap;
    id.style.overFlowX = css.stylesheet.overFlowX;
    id.style.overFlowY = css.stylesheet.overFlowY;
    id.style.padding = css.stylesheet.padding;
    id.style.paddingBottom = css.stylesheet.paddingBottom;
    id.style.paddingLeft = css.stylesheet.paddingLeft;
    id.style.paddingRight = css.stylesheet.paddingRight;
    id.style.paddingTop = css.stylesheet.paddingTop;
    id.style.pageBreakAfter = css.stylesheet.pageBreakAfter;
    id.style.pageBreakBefore = css.stylesheet.pageBreakBefore;
    id.style.pageBreakInside = css.stylesheet.pageBreakInside;
    id.style.perspective = css.stylesheet.perspective;
    id.style.perspectiveOrigin = css.stylesheet.perspectiveOrigin;
    id.style.pointerEvents = css.stylesheet.pointerEvents;
    id.style.position = css.stylesheet.position;
    id.style.quotes = css.stylesheet.quotes;
    id.style.resize = css.stylesheet.resize;
    id.style.right = css.stylesheet.right;
    id.style.rowGap = css.stylesheet.rowGap;
    id.style.scrollBehavior = css.stylesheet.scrollBehavior;
    id.style.tabSize = css.stylesheet.tabSize;
    id.style.tableLayout = css.stylesheet.tableLayout;
    id.style.textAlign = css.stylesheet.textAlign;
    id.style.textAlignLast = css.stylesheet.textAlignLast;
    id.style.textCombineUpright = css.stylesheet.textCombineUpright;
    id.style.textDecoration = css.stylesheet.textDecoration;
    id.style.textDecorationColor = css.stylesheet.textDecorationColor;
    id.style.textDecorationLine = css.stylesheet.textDecorationLine;
    id.style.textDecorationStyle = css.stylesheet.textDecorationStyle;
    id.style.textDecorationThickness = css.stylesheet.textDecorationThickness;
    id.style.textEmphasis = css.stylesheet.textEmphasis;
    id.style.textIndent = css.stylesheet.textIndent;
    id.style.textJustify = css.stylesheet.textJustify;
    id.style.textOrientation = css.stylesheet.textOrientation;
    id.style.textOverFlow = css.stylesheet.textOverFlow;
    id.style.textShadow = css.stylesheet.textShadow;
    id.style.textTransform = css.stylesheet.textTransform;
    id.style.textUnderlinePosition = css.stylesheet.textUnderlinePosition;
    id.style.top = css.stylesheet.top;
    id.style.transform = css.stylesheet.transform;
    id.style.transformOrigin = css.stylesheet.transformOrigin;
    id.style.transformStyle = css.stylesheet.transformStyle;
    id.style.transition = css.stylesheet.transition;
    id.style.transitionDelay = css.stylesheet.transitionDelay;
    id.style.transitionDuration = css.stylesheet.transitionDuration;
    id.style.transitionProperty = css.stylesheet.transitionProperty;
    id.style.transitionTimingFunction = css.stylesheet.transitionTimingFunction;
    id.style.unicodeBidi = css.stylesheet.unicodeBidi;
    id.style.userSelect = css.stylesheet.userSelect;
    id.style.verticalAlign = css.stylesheet.verticalAlign;
    id.style.visibility = css.stylesheet.visibility;
    id.style.whiteSpace = css.stylesheet.whiteSpace;
    id.style.widows = css.stylesheet.widows;
    id.style.width = css.stylesheet.width;
    id.style.wordBreak = css.stylesheet.wordBreak;
    id.style.wordSpacing = css.stylesheet.wordSpacing;
    id.style.wordWrap = css.stylesheet.wordWrap;
    id.style.writingMode = css.stylesheet.writingMode;
    id.style.zIndex = css.stylesheet.zIndex;
  };

  return !css ? onHTML() : onHTML() || onCSS();
};
