//bagian canvas untuk meletakkan tag
export const canvas = document.getElementById("canvas");
//bagian tag
export const button = document.getElementById("button");
export const input = document.getElementById("input");
export const div = document.getElementById("div");
export const h = document.querySelectorAll(".h");

// initial,inherit, unset 
//initial digunakan untuk membuat style nya kembali kestyle default bawaan browser
//inherit digunakan untuk membuat style nya mewarisi nilai bawaan induknya
//unset adalah kombinasi keduanya

//accent color digunakan untuk di tag <input> dengan type ,checkbox, radio, range, dan juga <tag> progress
export const accentcolor = document.getElementById("accent-color");

//algin-content digunakan dengan display flex atau grid dan hanya berlaku disuatu container itu memiliki lebih dari satu baris content.
// dan nilai yang diterimanya: stretch,center,flex - start,flex - end,space - between,space - around,space - evenly,
export const aligncontent = document.getElementById("align-content");

//align items digunakan dengan display flex atau grid untuk perataan  item  dalam sebuah baris
//nilai yang didukungnya: stretch, center, flex-start, flex-end, baseline
export const alignitems = document.getElementById("align-items");

//align self digunakan dengan ketentuan display flex atau grid 
// nilai yang diterimanya :stretch;,center;,flex-start;,flex-end;,baseline;
export const alignself = document.getElementById("align-self");

//all digunakan untuk mengatur atau mengatur ulang semua properti CSS yang dapat diwariskan atau tidak dapat diwariskan pada sebuah elemen
//nilai yang diterima : initial ,inherit ,unset
export const all = document.getElementById("all");

//animation ini dgunakan untuk melakukan pergerakan container seperti animasi tapi klo properti ini adalah paket lengkap dari animation karena animation ini memiliki pecahan
export const animation = document.getElementById("animation");

//animation delay digunakan untuk kapan animasinya dimulai
//nilai yang diterima : time,initial,inherit
export const animationdelay = document.getElementById("animation-delay");

//animation direction ini mengatur gaya berpindahnya
//nilai yang diterima : normal, reserve, alternate, alternate-reserve, initial ,inherit
export const animationdirection = document.getElementById("animation-direction");
export const animationduration = document.getElementById("animation-duration");
export const animationfillmode = document.getElementById("animation-fill-mode");
export const animationiterationcount = document.getElementById("animation-iteration-count");
export const animationname = document.getElementById("animation-name");
export const animationplaystate = document.getElementById("animation-play-state");
export const animationtimingfunction = document.getElementById("animation-timing-function");
export const aspectratio = document.getElementById("aspect-ratio");
export const backdropfilter = document.getElementById("backdrop-filter");
export const backfacevisibility = document.getElementById("backface-visibility");
export const background = document.getElementById("background");
export const backgroundattachment = document.getElementById("background-attachment");
export const backgroundblendmode = document.getElementById("background-blend-mode");
export const backgroundclip = document.getElementById("background-clip");
export const backgroundcolor = document.getElementById("background-color");
export const backgroundimage = document.getElementById("background-image");
export const backgroundorigin = document.getElementById("background-origin");
export const backgroundposition = document.getElementById("background-position");
export const backgroundpositionx = document.getElementById("background-position-x");
export const backgroundpositiony = document.getElementById("background-position-y");
export const backgroundrepeat = document.getElementById("background-repeat");
export const backgroundsize = document.getElementById("background-size");
export const blocksize = document.getElementById("block-size");
export const border = document.getElementById("border");
export const borderblock = document.getElementById("border-block");
export const borderblockcolor = document.getElementById("border-block-color");
export const borderblockend = document.getElementById("border-block-end");
export const borderblockendcolor = document.getElementById("border-block-end-color");
export const borderblockendstyle = document.getElementById("border-block-end-style");
export const borderblockendwidth = document.getElementById("border-block-end-width");
export const borderblockstart = document.getElementById("border-block-start");
export const borderblockstartcolor = document.getElementById("border-block-start-color");
export const borderblockstartstyle = document.getElementById("border-block-start-style");
export const borderblockstartwidth = document.getElementById("border-block-start-width");
export const borderblockstyle = document.getElementById("border-block-style");
export const borderblockwidth = document.getElementById("border-block-width");
export const borderbottom = document.getElementById("border-bottom");
export const borderbottomcolor = document.getElementById("border-bottom-color");
export const borderbottomleftradius = document.getElementById("border-bottom-left-radius");
export const borderbottomrightradius = document.getElementById("border-bottom-right-radius");
export const borderbottomstyle = document.getElementById("border-bottom-style");
export const borderbottomwidth = document.getElementById("border-bottom-width");
export const bordercollapse = document.getElementById("border-collapse");
export const bordercolor = document.getElementById("border-color");
export const borderendendradius = document.getElementById("border-end-end-radius");
export const borderendstartradius = document.getElementById("border-end-start-radius");
export const borderimage = document.getElementById("border-image");
export const borderimageoutset = document.getElementById("border-image-outset");
export const borderimagerepeat = document.getElementById("border-image-repeat");
export const borderimageslice = document.getElementById("border-image-slice");
export const borderimagesource = document.getElementById("border-image-source");
export const borderimagewidth = document.getElementById("border-image-width");
export const borderinline = document.getElementById("border-inline");
export const borderinlinecolor = document.getElementById("border-inline-color");
export const borderinlineend = document.getElementById("border-inline-end");
export const borderinlineendcolor = document.getElementById("border-inline-end-color");
export const borderinlineendstyle = document.getElementById("border-inline-end-style");
export const borderinlineendwidth = document.getElementById("border-inline-end-width");
export const borderinlinestart = document.getElementById("border-inline-start");
export const borderinlinestartcolor = document.getElementById("border-inline-start-color");
export const borderinlinestartstyle = document.getElementById("border-inline-start-style");
export const borderinlinestartwidth = document.getElementById("border-inline-start-width");
export const borderinlinestyle = document.getElementById("border-inline-style");
export const borderinlinewidth = document.getElementById("border-inline-width");
export const borderleft = document.getElementById("border-left");
export const borderleftcolor = document.getElementById("border-left-color");
export const borderleftstyle = document.getElementById("border-left-style");
export const borderleftwidth = document.getElementById("border-left-width");
export const borderradius = document.getElementById("border-radius");
export const borderright = document.getElementById("border-right");
export const borderrightcolor = document.getElementById("border-right-color");
export const borderrightstyle = document.getElementById("border-right-style");
export const borderrightwidth = document.getElementById("border-right-width");
export const borderspacing = document.getElementById("border-spacing");
export const borderstartendradius = document.getElementById("border-start-end-radius");
export const borderstartstartradius = document.getElementById("border-start-start-radius");
export const borderstyle = document.getElementById("border-style");
export const bordertop = document.getElementById("border-top");
export const bordertopcolor = document.getElementById("border-top-color");
export const bordertopleftradius = document.getElementById("border-top-left-radius");
export const bordertoprightradius = document.getElementById("border-top-right-radius");
export const bordertopstyle = document.getElementById("border-top-style");
export const bordertopwidth = document.getElementById("border-top-width");
export const borderwidth = document.getElementById("border-width");
export const bottom = document.getElementById("bottom");
export const boxdecorationbreak = document.getElementById("box-decoration-break");
export const boxreflect = document.getElementById("box-reflect");
export const boxshadow = document.getElementById("box-shadow");
export const boxsizing = document.getElementById("box-sizing");
export const breakafter = document.getElementById("break-after");
export const breakbefore = document.getElementById("break-before");
export const breakinside = document.getElementById("break-inside");
export const captionside = document.getElementById("caption-side");
export const caretcolor = document.getElementById("caret-color")
export const clear = document.getElementById("clear");
export const clip = document.getElementById("clip");
export const clippath = document.getElementById("clip-path");
export const color = document.getElementById("color");
export const colorscheme = document.getElementById("color-scheme");
export const columncount = document.getElementById("column-count");
export const columnfill = document.getElementById("column-fill");
export const columngap = document.getElementById("column-gap");
export const columnrule = document.getElementById("column-rule");
export const columnrulecolor = document.getElementById("column-rule-color");
export const columnrulestyle = document.getElementById("column-rule-style");
export const columnrulewidth = document.getElementById("column-rule-width");
export const columnspan = document.getElementById("column-span");
export const columnwidth = document.getElementById("column-width");
export const columns = document.getElementById("columns")
export const content = document.getElementById("content");
export const counterincrement = document.getElementById("counter-increment");
export const counterreset = document.getElementById("counter-reset");
export const counterset = document.getElementById("counter-set")
export const cursor = document.getElementById("cursor");
export const direction = document.getElementById("direction");
export const display = document.getElementById("display");
export const emptycells = document.getElementById("empty-cells");
export const filter = document.getElementById("filter");
export const flex = document.getElementById("flex");
export const flexbasis = document.getElementById("flex-basis");
export const flexdirection = document.getElementById("flex-direction");
export const flexflow = document.getElementById("flex-flow");
export const flexgrow = document.getElementById("flex-grow");
export const flexshrink = document.getElementById("flex-shrink");
export const flexwrap = document.getElementById("flex-wrap");
export const float = document.getElementById("float");
export const font = document.getElementById("font")
export const fontfamily = document.getElementById("font-family");
export const fontfeaturesettings = document.getElementById("font-feature-settings");
export const fontkerning = document.getElementById("font-kerning")
export const fontsize = document.getElementById("font-size");
export const fontsizeadjust = document.getElementById("font-size-adjust");
export const fontstretch = document.getElementById("font-stretch");
export const fontstyle = document.getElementById("font-style");
export const fontvariant = document.getElementById("font-variant");
export const fontvariantcaps = document.getElementById("font-variant-caps");
export const fontweight = document.getElementById("font-weight");
export const gap = document.getElementById("gap");
export const grid = document.getElementById("grid");
export const gridarea = document.getElementById("grid-area");
export const gridautocolumns = document.getElementById("grid-auto-columns");
export const gridautoflow = document.getElementById("grid-auto-flow");
export const gridautorows = document.getElementById("grid-auto-rows");
export const gridcolumn = document.getElementById("grid-column");
export const gridcolumnend = document.getElementById("grid-column-end");
export const gridcolumnstart = document.getElementById("grid-column-start");
export const gridrow = document.getElementById("grid-row");
export const gridrowend = document.getElementById("grid-row-end");
export const gridrowstart = document.getElementById("grid-row-start");
export const gridtemplate = document.getElementById("grid-template");
export const gridtemplateareas = document.getElementById("grid-template-areas");
export const gridtemplatecolumns = document.getElementById("grid-template-columns");
export const gridtemplaterows = document.getElementById("grid-template-rows");
export const hangingpunctuation = document.getElementById("hanging-punctuation");
export const height = document.getElementById("height");
export const hyphens = document.getElementById("hyphens");
export const hyphenatecharacter = document.getElementById("hyphenate-character");
export const imagerendering = document.getElementById("image-rendering")
export const initialletter = document.getElementById("initial-letter");
export const inlinesize = document.getElementById("inline-size");
export const inset = document.getElementById("inset");
export const insetblock = document.getElementById("inset-block");
export const insetblockend = document.getElementById("inset-block-end");
export const insetblockstart = document.getElementById("inset-block-start");
export const insetinline = document.getElementById("inset-inline");
export const insetinlineend = document.getElementById("inset-inline-end");
export const insetinlinestart = document.getElementById("inset-inline-start");
export const isolation = document.getElementById("isolation");
export const justifycontent = document.getElementById("justify-content");
export const justifyitems = document.getElementById("justify-items");
export const justifyself = document.getElementById("justify-self")
export const left = document.getElementById("left");
export const letterspacing = document.getElementById("letter-spacing");
export const lineheight = document.getElementById("line-height");
export const liststyle = document.getElementById("list-style");
export const liststyleimage = document.getElementById("list-style-image");
export const liststyleposition = document.getElementById("list-style-position");
export const liststyletype = document.getElementById("list-style-type");
export const margin = document.getElementById("margin");
export const marginblock = document.getElementById("margin-block");
export const marginblockend = document.getElementById("margin-block-end");
export const marginblockstart = document.getElementById("margin-block-start");
export const marginbottom = document.getElementById("margin-bottom");
export const margininline = document.getElementById("margin-inline");
export const margininlineend = document.getElementById("margin-inline-end");
export const margininlinestart = document.getElementById("margin-inline-start");
export const marginleft = document.getElementById("margin-left");
export const marginright = document.getElementById("margin-right");
export const margintop = document.getElementById("margin-top");
export const marker = document.getElementById("marker");
export const markerend = document.getElementById("marker-end");
export const markermid = document.getElementById("marker-mid");
export const markerstart = document.getElementById("marker-start");
export const mask = document.getElementById("mask");
export const maskclip = document.getElementById("mask-clip");
export const maskcomposite = document.getElementById("mask-composite");
export const maskimage = document.getElementById("mask-image");
export const maskmode = document.getElementById("mask-mode");
export const maskorigin = document.getElementById("mask-origin");
export const maskposition = document.getElementById("mask-position");
export const maskrepeat = document.getElementById("mask-repeat");
export const masksize = document.getElementById("mask-size");
export const masktype = document.getElementById("mask-type");
export const maxblocksize = document.getElementById("max-block-size");
export const maxheight = document.getElementById("max-height");
export const maxinlinesize = document.getElementById("max-inline-size");
export const maxwidth = document.getElementById("max-width")
export const minblocksize = document.getElementById("min-block-size");
export const mininlinesize = document.getElementById("min-inline-size");
export const minheight = document.getElementById("min-height");
export const minwidth = document.getElementById("min-width");
export const mixblendmode = document.getElementById("mix-blend-mode")
export const objectfit = document.getElementById("object-fit");
export const objectposition = document.getElementById("object-position");
export const offset = document.getElementById("offset");
export const offsetanchor = document.getElementById("offset-anchor");
export const offsetdistance = document.getElementById("offset-distance");
export const offsetpath = document.getElementById("offset-path");
export const offsetposition = document.getElementById("offset-position");
export const offsetrotate = document.getElementById("offset-rotate");
export const opacity = document.getElementById("opacity");
export const order = document.getElementById("order");
export const orphans = document.getElementById("orphans");
export const outline = document.getElementById("outline");
export const outlinecolor = document.getElementById("outline-color");
export const outlineoffset = document.getElementById("outline-offset");
export const outlinestyle = document.getElementById("outline-style");
export const outlinewidth = document.getElementById("outline-width");
export const overflow = document.getElementById("overflow");
export const overflowanchor = document.getElementById("overflow-anchor");
export const overflowwrap = document.getElementById("overflow-wrap");
export const overflowx = document.getElementById("overflow-x");
export const overflowy = document.getElementById("overflow-y");
export const overscrollbehavior = document.getElementById("overscroll-behavior");
export const overscrollbehaviorblock = document.getElementById("overscroll-behavior-block");
export const overscrollbehaviorinline = document.getElementById("overscroll-behavior-inline");
export const overscrollbehaviorx = document.getElementById("overscroll-behavior-x");
export const overscrollbehaviory = document.getElementById("overscroll-behavior-y");
export const padding = document.getElementById("padding");
export const paddingblock = document.getElementById("padding-block");
export const paddingblockend = document.getElementById("padding-block-end");
export const paddingblockstart = document.getElementById("padding-block-start");
export const paddingbottom = document.getElementById("padding-bottom");
export const paddinginline = document.getElementById("padding-inline");
export const paddinginlineend = document.getElementById("padding-inline-end");
export const paddinginlinestart = document.getElementById("padding-inline-start");
export const paddingleft = document.getElementById("padding-left");
export const paddingright = document.getElementById("padding-right");
export const paddingtop = document.getElementById("padding-top")
export const pagebreakafter = document.getElementById("page-break-after");
export const pagebreakbefore = document.getElementById("page-break-before");
export const pagebreakinside = document.getElementById("page-break-inside");
export const paintorder = document.getElementById("paint-order");
export const perspective = document.getElementById("perspective");
export const perspectiveorigin = document.getElementById("perspective-origin");
export const placecontent = document.getElementById("place-content");
export const placeitems = document.getElementById("place-items");
export const placeself = document.getElementById("place-self");
export const pointerevents = document.getElementById("pointer-events");
export const position = document.getElementById("position")
export const quotes = document.getElementById("quotes");
export const resize = document.getElementById("resize");
export const right = document.getElementById("right");
export const rotate = document.getElementById("rotate");
export const rowgap = document.getElementById("row-gap");
export const scale = document.getElementById("scale")
export const scrollbehavior = document.getElementById("scroll-behavior");
export const scrollmargin = document.getElementById("scroll-margin");
export const scrollmarginblock = document.getElementById("scroll-margin-block");
export const scrollmarginblockend = document.getElementById("scroll-margin-block-end");
export const scrollmarginblockstart = document.getElementById("scroll-margin-block-start");
export const scrollmarginbottom = document.getElementById("scroll-margin-bottom");
export const scrollmargininline = document.getElementById("scroll-margin-inline");
export const scrollmargininlineend = document.getElementById("scroll-margin-inline-end");
export const scrollmargininlinestart = document.getElementById("scroll-margin-inline-start");
export const scrollmarginleft = document.getElementById("scroll-margin-left");
export const scrollmarginright = document.getElementById("scroll-margin-right");
export const scrollmargintop = document.getElementById("scroll-margin-top");
export const scrollpadding = document.getElementById("scroll-padding");
export const scrollpaddingblock = document.getElementById("scroll-padding-block");
export const scrollpaddingblockend = document.getElementById("scroll-padding-block-end");
export const scrollpaddingblockstart = document.getElementById("scroll-padding-block-start");
export const scrollpaddingbottom = document.getElementById("scroll-padding-bottom");
export const scrollpaddinginline = document.getElementById("scroll-padding-inline");
export const scrollpaddinginlineend = document.getElementById("scroll-padding-inline-end");
export const scrollpaddinginlinestart = document.getElementById("scroll-padding-inline-start");
export const scrollpaddingleft = document.getElementById("scroll-padding-left");
export const scrollpaddingright = document.getElementById("scroll-padding-right");
export const scrollpaddingtop = document.getElementById("scroll-padding-top");
export const scrollsnapalign = document.getElementById("scroll-snap-align");
export const scrollsnapstop = document.getElementById("scroll-snap-stop");
export const scrollsnaptype = document.getElementById("scroll-snap-type");
export const scrollbarcolor = document.getElementById("scrollbar-color");
export const shapeoutside = document.getElementById("shape-outside")
export const tabsize = document.getElementById("tab-size");
export const tablelayout = document.getElementById("table-layout");
export const textalign = document.getElementById("text-align");
export const textalignlast = document.getElementById("text-align-last");
export const textdecoration = document.getElementById("text-decoration");
export const textdecorationcolor = document.getElementById("text-decoration-color");
export const textdecorationline = document.getElementById("text-decoration-line");
export const textdecorationstyle = document.getElementById("text-decoration-style");
export const textdecorationthickness = document.getElementById("text-decoration-thickness");
export const textemphasis = document.getElementById("text-emphasis");
export const textemphasiscolor = document.getElementById("text-emphasis-color");
export const textemphasisposition = document.getElementById("text-emphasis-position");
export const textemphasisstyle = document.getElementById("text-emphasis-style");
export const textindent = document.getElementById("text-indent");
export const textjustify = document.getElementById("text-justify");
export const textorientation = document.getElementById("text-orientation");
export const textoverflow = document.getElementById("text-overflow");
export const textshadow = document.getElementById("text-shadow");
export const texttransform = document.getElementById("text-transform");
export const textunderlineoffset = document.getElementById("text-underline-offset");
export const textunderlineposition = document.getElementById("text-underline-position");
export const topInput = document.getElementById("top");
export const transform = document.getElementById("transform");
export const transformorigin = document.getElementById("transform-origin");
export const transformstyle = document.getElementById("transform-style");
export const transition = document.getElementById("transition");
export const transitiondelay = document.getElementById("transition-delay");
export const transitionduration = document.getElementById("transition-duration");
export const transitionproperty = document.getElementById("transition-property");
export const transitiontimingfunction = document.getElementById("transition-timing-function");
export const translate = document.getElementById("translate");
export const unicodebidi = document.getElementById("unicode-bidi");
export const userselect = document.getElementById("user-select");
export const verticalalign = document.getElementById("vertical-align");
export const visibility = document.getElementById("visibility");
export const whitespace = document.getElementById("white-space");
export const widows = document.getElementById("widows");
export const width = document.getElementById("width");
export const wordbreak = document.getElementById("word-break");
export const wordspacing = document.getElementById("word-spacing");
export const wordwrap = document.getElementById("word-wrap");
export const writingmode = document.getElementById("writing-mode");
export const zindex = document.getElementById("z-index");
export const zoom = document.getElementById("zoom");

//navigation
export const nav = document.getElementById("nav1");
export const nav2 = document.getElementById("nav2");

//untuk iterabel
export const inputs = [accentcolor
    , aligncontent
    , alignitems
    , alignself
    , all
    , animation
    , animationdelay
    , animationdirection
    , animationduration
    , animationfillmode
    , animationiterationcount
    , animationname
    , animationplaystate
    , animationtimingfunction
    , aspectratio
    , backdropfilter
    , backfacevisibility
    , background
    , backgroundattachment
    , backgroundblendmode
    , backgroundclip
    , backgroundcolor
    , backgroundimage
    , backgroundorigin
    , backgroundposition
    , backgroundpositionx
    , backgroundpositiony
    , backgroundrepeat
    , backgroundsize
    , blocksize
    , border
    , borderblock
    , borderblockcolor
    , borderblockend
    , borderblockendcolor
    , borderblockendstyle
    , borderblockendwidth
    , borderblockstart
    , borderblockstartcolor
    , borderblockstartstyle
    , borderblockstartwidth
    , borderblockstyle
    , borderblockwidth
    , borderbottom
    , borderbottomcolor
    , borderbottomleftradius
    , borderbottomrightradius
    , borderbottomstyle
    , borderbottomwidth
    , bordercollapse
    , bordercolor
    , borderendendradius
    , borderendstartradius
    , borderimage
    , borderimageoutset
    , borderimagerepeat
    , borderimageslice
    , borderimagesource
    , borderimagewidth
    , borderinline
    , borderinlinecolor
    , borderinlineend
    , borderinlineendcolor
    , borderinlineendstyle
    , borderinlineendwidth
    , borderinlinestart
    , borderinlinestartcolor
    , borderinlinestartstyle
    , borderinlinestartwidth
    , borderinlinestyle
    , borderinlinewidth
    , borderleft
    , borderleftcolor
    , borderleftstyle
    , borderleftwidth
    , borderradius
    , borderright
    , borderrightcolor
    , borderrightstyle
    , borderrightwidth
    , borderspacing
    , borderstartendradius
    , borderstartstartradius
    , borderstyle
    , bordertop
    , bordertopcolor
    , bordertopleftradius
    , bordertoprightradius
    , bordertopstyle
    , bordertopwidth
    , borderwidth
    , bottom
    , boxdecorationbreak
    , boxreflect
    , boxshadow
    , boxsizing
    , breakafter
    , breakbefore
    , breakinside
    , captionside
    , caretcolor
    , clear
    , clip
    , clippath
    , color
    , colorscheme
    , columncount
    , columnfill
    , columngap
    , columnrule
    , columnrulecolor
    , columnrulestyle
    , columnrulewidth
    , columnspan
    , columnwidth
    , columns
    , content
    , counterincrement
    , counterreset
    , counterset
    , cursor
    , direction
    , display
    , emptycells
    , filter
    , flex
    , flexbasis
    , flexdirection
    , flexflow
    , flexgrow
    , flexshrink
    , flexwrap
    , float
    , font
    , fontfamily
    , fontfeaturesettings
    , fontkerning
    , fontsize
    , fontsizeadjust
    , fontstretch
    , fontstyle
    , fontvariant
    , fontvariantcaps
    , fontweight
    , gap
    , grid
    , gridarea
    , gridautocolumns
    , gridautoflow
    , gridautorows
    , gridcolumn
    , gridcolumnend
    , gridcolumnstart
    , gridrow
    , gridrowend
    , gridrowstart
    , gridtemplate
    , gridtemplateareas
    , gridtemplatecolumns
    , gridtemplaterows
    , hangingpunctuation
    , height
    , hyphens
    , hyphenatecharacter
    , imagerendering
    , initialletter
    , inlinesize
    , inset
    , insetblock
    , insetblockend
    , insetblockstart
    , insetinline
    , insetinlineend
    , insetinlinestart
    , isolation
    , justifycontent
    , justifyitems
    , justifyself
    , left
    , letterspacing
    , lineheight
    , liststyle
    , liststyleimage
    , liststyleposition
    , liststyletype
    , margin
    , marginblock
    , marginblockend
    , marginblockstart
    , marginbottom
    , margininline
    , margininlineend
    , margininlinestart
    , marginleft
    , marginright
    , margintop
    , marker
    , markerend
    , markermid
    , markerstart
    , mask
    , maskclip
    , maskcomposite
    , maskimage
    , maskmode
    , maskorigin
    , maskposition
    , maskrepeat
    , masksize
    , masktype
    , maxblocksize
    , maxheight
    , maxinlinesize
    , maxwidth
    , minblocksize
    , mininlinesize
    , minheight
    , minwidth
    , mixblendmode
    , objectfit
    , objectposition
    , offset
    , offsetanchor
    , offsetdistance
    , offsetpath
    , offsetposition
    , offsetrotate
    , opacity
    , order
    , orphans
    , outline
    , outlinecolor
    , outlineoffset
    , outlinestyle
    , outlinewidth
    , overflow
    , overflowanchor
    , overflowwrap
    , overflowx
    , overflowy
    , overscrollbehavior
    , overscrollbehaviorblock
    , overscrollbehaviorinline
    , overscrollbehaviorx
    , overscrollbehaviory
    , padding
    , paddingblock
    , paddingblockend
    , paddingblockstart
    , paddingbottom
    , paddinginline
    , paddinginlineend
    , paddinginlinestart
    , paddingleft
    , paddingright
    , paddingtop
    , pagebreakafter
    , pagebreakbefore
    , pagebreakinside
    , paintorder
    , perspective
    , perspectiveorigin
    , placecontent
    , placeitems
    , placeself
    , pointerevents
    , position
    , quotes
    , resize
    , right
    , rotate
    , rowgap
    , scale
    , scrollbehavior
    , scrollmargin
    , scrollmarginblock
    , scrollmarginblockend
    , scrollmarginblockstart
    , scrollmarginbottom
    , scrollmargininline
    , scrollmargininlineend
    , scrollmargininlinestart
    , scrollmarginleft
    , scrollmarginright
    , scrollmargintop
    , scrollpadding
    , scrollpaddingblock
    , scrollpaddingblockend
    , scrollpaddingblockstart
    , scrollpaddingbottom
    , scrollpaddinginline
    , scrollpaddinginlineend
    , scrollpaddinginlinestart
    , scrollpaddingleft
    , scrollpaddingright
    , scrollpaddingtop
    , scrollsnapalign
    , scrollsnapstop
    , scrollsnaptype
    , scrollbarcolor
    , shapeoutside
    , tabsize
    , tablelayout
    , textalign
    , textalignlast
    , textdecoration
    , textdecorationcolor
    , textdecorationline
    , textdecorationstyle
    , textdecorationthickness
    , textemphasis
    , textemphasiscolor
    , textemphasisposition
    , textemphasisstyle
    , textindent
    , textjustify
    , textorientation
    , textoverflow
    , textshadow
    , texttransform
    , textunderlineoffset
    , textunderlineposition
    , topInput
    , transform
    , transformorigin
    , transformstyle
    , transition
    , transitiondelay
    , transitionduration
    , transitionproperty
    , transitiontimingfunction
    , translate
    , unicodebidi
    , userselect
    , verticalalign
    , visibility
    , whitespace
    , widows
    , width
    , wordbreak
    , wordspacing
    , wordwrap
    , writingmode
    , zindex
    , zoom].filter(input => input !== null);