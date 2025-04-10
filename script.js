const canvas = document.getElementById("canvas");
const button = document.getElementById("button");
const input = document.getElementById("input");
const div = document.getElementById("div");
const h = document.querySelectorAll(".h");
//Untuk melakukan perubahan bagi elemen yang dipilih secara real time
const accentcolor = document.getElementById("accent-color");
const aligncontent = document.getElementById("align-content");
const alignitems = document.getElementById("align-items");
const alignself = document.getElementById("align-self");
const all = document.getElementById("all");
const animation = document.getElementById("animation");
const animationdelay = document.getElementById("animation-delay");
const animationdirection = document.getElementById("animation-direction");
const animationduration = document.getElementById("animation-duration");
const animationfillmode = document.getElementById("animation-fill-mode");
const animationiterationcount = document.getElementById("animation-iteration-count");
const animationname = document.getElementById("animation-name");
const animationplaystate = document.getElementById("animation-play-state");
const animationtimingfunction = document.getElementById("animation-timing-function");
const aspectratio = document.getElementById("aspect-ratio");
const backdropfilter = document.getElementById("backdrop-filter");
const backfacevisibility = document.getElementById("backface-visibility");
const background = document.getElementById("background");
const backgroundattachment = document.getElementById("background-attachment");
const backgroundblendmode = document.getElementById("background-blend-mode");
const backgroundclip = document.getElementById("background-clip");
const backgroundcolor = document.getElementById("background-color");
const backgroundimage = document.getElementById("background-image");
const backgroundorigin = document.getElementById("background-origin");
const backgroundposition = document.getElementById("background-position");
const backgroundpositionx = document.getElementById("background-position-x");
const backgroundpositiony = document.getElementById("background-position-y");
const backgroundrepeat = document.getElementById("background-repeat");
const backgroundsize = document.getElementById("background-size");
const blocksize = document.getElementById("block-size");
const border = document.getElementById("border");
const borderblock = document.getElementById("border-block");
const borderblockcolor = document.getElementById("border-block-color");
const borderblockend = document.getElementById("border-block-end");
const borderblockendcolor = document.getElementById("border-block-end-color");
const borderblockendstyle = document.getElementById("border-block-end-style");
const borderblockendwidth = document.getElementById("border-block-end-width");
const borderblockstart = document.getElementById("border-block-start");
const borderblockstartcolor = document.getElementById("border-block-start-color");
const borderblockstartstyle = document.getElementById("border-block-start-style");
const borderblockstartwidth = document.getElementById("border-block-start-width");
const borderblockstyle = document.getElementById("border-block-style");
const borderblockwidth = document.getElementById("border-block-width");
const borderbottom = document.getElementById("border-bottom");
const borderbottomcolor = document.getElementById("border-bottom-color");
const borderbottomleftradius = document.getElementById("border-bottom-left-radius");
const borderbottomrightradius = document.getElementById("border-bottom-right-radius");
const borderbottomstyle = document.getElementById("border-bottom-style");
const borderbottomwidth = document.getElementById("border-bottom-width");
const bordercollapse = document.getElementById("border-collapse");
const bordercolor = document.getElementById("border-color");
const borderendendradius = document.getElementById("border-end-end-radius");
const borderendstartradius = document.getElementById("border-end-start-radius");
const borderimage = document.getElementById("border-image");
const borderimageoutset = document.getElementById("border-image-outset");
const borderimagerepeat = document.getElementById("border-image-repeat");
const borderimageslice = document.getElementById("border-image-slice");
const borderimagesource = document.getElementById("border-image-source");
const borderimagewidth = document.getElementById("border-image-width");
const borderinline = document.getElementById("border-inline");
const borderinlinecolor = document.getElementById("border-inline-color");
const borderinlineend = document.getElementById("border-inline-end");
const borderinlineendcolor = document.getElementById("border-inline-end-color");
const borderinlineendstyle = document.getElementById("border-inline-end-style");
const borderinlineendwidth = document.getElementById("border-inline-end-width");
const borderinlinestart = document.getElementById("border-inline-start");
const borderinlinestartcolor = document.getElementById("border-inline-start-color");
const borderinlinestartstyle = document.getElementById("border-inline-start-style");
const borderinlinestartwidth = document.getElementById("border-inline-start-width");
const borderinlinestyle = document.getElementById("border-inline-style");
const borderinlinewidth = document.getElementById("border-inline-width");
const borderleft = document.getElementById("border-left");
const borderleftcolor = document.getElementById("border-left-color");
const borderleftstyle = document.getElementById("border-left-style");
const borderleftwidth = document.getElementById("border-left-width");
const borderradius = document.getElementById("border-radius");
const borderright = document.getElementById("border-right");
const borderrightcolor = document.getElementById("border-right-color");
const borderrightstyle = document.getElementById("border-right-style");
const borderrightwidth = document.getElementById("border-right-width");
const borderspacing = document.getElementById("border-spacing");
const borderstartendradius = document.getElementById("border-start-end-radius");
const borderstartstartradius = document.getElementById("border-start-start-radius");
const borderstyle = document.getElementById("border-style");
const bordertop = document.getElementById("border-top");
const bordertopcolor = document.getElementById("border-top-color");
const bordertopleftradius = document.getElementById("border-top-left-radius");
const bordertoprightradius = document.getElementById("border-top-right-radius");
const bordertopstyle = document.getElementById("border-top-style");
const bordertopwidth = document.getElementById("border-top-width");
const borderwidth = document.getElementById("border-width");
const bottom = document.getElementById("bottom");
const boxdecorationbreak = document.getElementById("box-decoration-break");
const boxreflect = document.getElementById("box-reflect");
const boxshadow = document.getElementById("box-shadow");
const boxsizing = document.getElementById("box-sizing");
const breakafter = document.getElementById("break-after");
const breakbefore = document.getElementById("break-before");
const breakinside = document.getElementById("break-inside");
const captionside = document.getElementById("caption-side");
const caretcolor = document.getElementById("caret-color")
const clear = document.getElementById("clear");
const clip = document.getElementById("clip");
const clippath = document.getElementById("clip-path");
const color = document.getElementById("color");
const colorscheme = document.getElementById("color-scheme");
const columncount = document.getElementById("column-count");
const columnfill = document.getElementById("column-fill");
const columngap = document.getElementById("column-gap");
const columnrule = document.getElementById("column-rule");
const columnrulecolor = document.getElementById("column-rule-color");
const columnrulestyle = document.getElementById("column-rule-style");
const columnrulewidth = document.getElementById("column-rule-width");
const columnspan = document.getElementById("column-span");
const columnwidth = document.getElementById("column-width");
const columns = document.getElementById("columns")
const content = document.getElementById("content");
const counterincrement = document.getElementById("counter-increment");
const counterreset = document.getElementById("counter-reset");
const counterset = document.getElementById("counter-set")
const cursor = document.getElementById("cursor");
const direction = document.getElementById("direction");
const display = document.getElementById("display");
const emptycells = document.getElementById("empty-cells");
const filter = document.getElementById("filter");
const flex = document.getElementById("flex");
const flexbasis = document.getElementById("flex-basis");
const flexdirection = document.getElementById("flex-direction");
const flexflow = document.getElementById("flex-flow");
const flexgrow = document.getElementById("flex-grow");
const flexshrink = document.getElementById("flex-shrink");
const flexwrap = document.getElementById("flex-wrap");
const float = document.getElementById("float");
const font = document.getElementById("font")
const fontfamily = document.getElementById("font-family");
const fontfeaturesettings = document.getElementById("font-feature-settings");
const fontkerning = document.getElementById("font-kerning")
const fontsize = document.getElementById("font-size");
const fontsizeadjust = document.getElementById("font-size-adjust");
const fontstretch = document.getElementById("font-stretch");
const fontstyle = document.getElementById("font-style");
const fontvariant = document.getElementById("font-variant");
const fontvariantcaps = document.getElementById("font-variant-caps");
const fontweight = document.getElementById("font-weight");
const gap = document.getElementById("gap");
const grid = document.getElementById("grid");
const gridarea = document.getElementById("grid-area");
const gridautocolumns = document.getElementById("grid-auto-columns");
const gridautoflow = document.getElementById("grid-auto-flow");
const gridautorows = document.getElementById("grid-auto-rows");
const gridcolumn = document.getElementById("grid-column");
const gridcolumnend = document.getElementById("grid-column-end");
const gridcolumnstart = document.getElementById("grid-column-start");
const gridrow = document.getElementById("grid-row");
const gridrowend = document.getElementById("grid-row-end");
const gridrowstart = document.getElementById("grid-row-start");
const gridtemplate = document.getElementById("grid-template");
const gridtemplateareas = document.getElementById("grid-template-areas");
const gridtemplatecolumns = document.getElementById("grid-template-columns");
const gridtemplaterows = document.getElementById("grid-template-rows");
const hangingpunctuation = document.getElementById("hanging-punctuation");
const height = document.getElementById("height");
const hyphens = document.getElementById("hyphens");
const hyphenatecharacter = document.getElementById("hyphenate-character");
const imagerendering = document.getElementById("image-rendering")
const initialletter = document.getElementById("initial-letter");
const inlinesize = document.getElementById("inline-size");
const inset = document.getElementById("inset");
const insetblock = document.getElementById("inset-block");
const insetblockend = document.getElementById("inset-block-end");
const insetblockstart = document.getElementById("inset-block-start");
const insetinline = document.getElementById("inset-inline");
const insetinlineend = document.getElementById("inset-inline-end");
const insetinlinestart = document.getElementById("inset-inline-start");
const isolation = document.getElementById("isolation");
const justifycontent = document.getElementById("justify-content");
const justifyitems = document.getElementById("justify-items");
const justifyself = document.getElementById("justify-self")
const left = document.getElementById("left");
const letterspacing = document.getElementById("letter-spacing");
const lineheight = document.getElementById("line-height");
const liststyle = document.getElementById("list-style");
const liststyleimage = document.getElementById("list-style-image");
const liststyleposition = document.getElementById("list-style-position");
const liststyletype = document.getElementById("list-style-type");
const margin = document.getElementById("margin");
const marginblock = document.getElementById("margin-block");
const marginblockend = document.getElementById("margin-block-end");
const marginblockstart = document.getElementById("margin-block-start");
const marginbottom = document.getElementById("margin-bottom");
const margininline = document.getElementById("margin-inline");
const margininlineend = document.getElementById("margin-inline-end");
const margininlinestart = document.getElementById("margin-inline-start");
const marginleft = document.getElementById("margin-left");
const marginright = document.getElementById("margin-right");
const margintop = document.getElementById("margin-top");
const marker = document.getElementById("marker");
const markerend = document.getElementById("marker-end");
const markermid = document.getElementById("marker-mid");
const markerstart = document.getElementById("marker-start");
const mask = document.getElementById("mask");
const maskclip = document.getElementById("mask-clip");
const maskcomposite = document.getElementById("mask-composite");
const maskimage = document.getElementById("mask-image");
const maskmode = document.getElementById("mask-mode");
const maskorigin = document.getElementById("mask-origin");
const maskposition = document.getElementById("mask-position");
const maskrepeat = document.getElementById("mask-repeat");
const masksize = document.getElementById("mask-size");
const masktype = document.getElementById("mask-type");
const maxblocksize = document.getElementById("max-block-size");
const maxheight = document.getElementById("max-height");
const maxinlinesize = document.getElementById("max-inline-size");
const maxwidth = document.getElementById("max-width")
const minblocksize = document.getElementById("min-block-size");
const mininlinesize = document.getElementById("min-inline-size");
const minheight = document.getElementById("min-height");
const minwidth = document.getElementById("min-width");
const mixblendmode = document.getElementById("mix-blend-mode")
const objectfit = document.getElementById("object-fit");
const objectposition = document.getElementById("object-position");
const offset = document.getElementById("offset");
const offsetanchor = document.getElementById("offset-anchor");
const offsetdistance = document.getElementById("offset-distance");
const offsetpath = document.getElementById("offset-path");
const offsetposition = document.getElementById("offset-position");
const offsetrotate = document.getElementById("offset-rotate");
const opacity = document.getElementById("opacity");
const order = document.getElementById("order");
const orphans = document.getElementById("orphans");
const outline = document.getElementById("outline");
const outlinecolor = document.getElementById("outline-color");
const outlineoffset = document.getElementById("outline-offset");
const outlinestyle = document.getElementById("outline-style");
const outlinewidth = document.getElementById("outline-width");
const overflow = document.getElementById("overflow");
const overflowanchor = document.getElementById("overflow-anchor");
const overflowwrap = document.getElementById("overflow-wrap");
const overflowx = document.getElementById("overflow-x");
const overflowy = document.getElementById("overflow-y");
const overscrollbehavior = document.getElementById("overscroll-behavior");
const overscrollbehaviorblock = document.getElementById("overscroll-behavior-block");
const overscrollbehaviorinline = document.getElementById("overscroll-behavior-inline");
const overscrollbehaviorx = document.getElementById("overscroll-behavior-x");
const overscrollbehaviory = document.getElementById("overscroll-behavior-y");
const padding = document.getElementById("padding");
const paddingblock = document.getElementById("padding-block");
const paddingblockend = document.getElementById("padding-block-end");
const paddingblockstart = document.getElementById("padding-block-start");
const paddingbottom = document.getElementById("padding-bottom");
const paddinginline = document.getElementById("padding-inline");
const paddinginlineend = document.getElementById("padding-inline-end");
const paddinginlinestart = document.getElementById("padding-inline-start");
const paddingleft = document.getElementById("padding-left");
const paddingright = document.getElementById("padding-right");
const paddingtop = document.getElementById("padding-top")
const pagebreakafter = document.getElementById("page-break-after");
const pagebreakbefore = document.getElementById("page-break-before");
const pagebreakinside = document.getElementById("page-break-inside");
const paintorder = document.getElementById("paint-order");
const perspective = document.getElementById("perspective");
const perspectiveorigin = document.getElementById("perspective-origin");
const placecontent = document.getElementById("place-content");
const placeitems = document.getElementById("place-items");
const placeself = document.getElementById("place-self");
const pointerevents = document.getElementById("pointer-events");
const position = document.getElementById("position")
const quotes = document.getElementById("quotes");
const resize = document.getElementById("resize");
const right = document.getElementById("right");
const rotate = document.getElementById("rotate");
const rowgap = document.getElementById("row-gap");
const scale = document.getElementById("scale")
const scrollbehavior = document.getElementById("scroll-behavior");
const scrollmargin = document.getElementById("scroll-margin");
const scrollmarginblock = document.getElementById("scroll-margin-block");
const scrollmarginblockend = document.getElementById("scroll-margin-block-end");
const scrollmarginblockstart = document.getElementById("scroll-margin-block-start");
const scrollmarginbottom = document.getElementById("scroll-margin-bottom");
const scrollmargininline = document.getElementById("scroll-margin-inline");
const scrollmargininlineend = document.getElementById("scroll-margin-inline-end");
const scrollmargininlinestart = document.getElementById("scroll-margin-inline-start");
const scrollmarginleft = document.getElementById("scroll-margin-left");
const scrollmarginright = document.getElementById("scroll-margin-right");
const scrollmargintop = document.getElementById("scroll-margin-top");
const scrollpadding = document.getElementById("scroll-padding");
const scrollpaddingblock = document.getElementById("scroll-padding-block");
const scrollpaddingblockend = document.getElementById("scroll-padding-block-end");
const scrollpaddingblockstart = document.getElementById("scroll-padding-block-start");
const scrollpaddingbottom = document.getElementById("scroll-padding-bottom");
const scrollpaddinginline = document.getElementById("scroll-padding-inline");
const scrollpaddinginlineend = document.getElementById("scroll-padding-inline-end");
const scrollpaddinginlinestart = document.getElementById("scroll-padding-inline-start");
const scrollpaddingleft = document.getElementById("scroll-padding-left");
const scrollpaddingright = document.getElementById("scroll-padding-right");
const scrollpaddingtop = document.getElementById("scroll-padding-top");
const scrollsnapalign = document.getElementById("scroll-snap-align");
const scrollsnapstop = document.getElementById("scroll-snap-stop");
const scrollsnaptype = document.getElementById("scroll-snap-type");
const scrollbarcolor = document.getElementById("scrollbar-color");
const shapeoutside = document.getElementById("shape-outside")
const tabsize = document.getElementById("tab-size");
const tablelayout = document.getElementById("table-layout");
const textalign = document.getElementById("text-align");
const textalignlast = document.getElementById("text-align-last");
const textdecoration = document.getElementById("text-decoration");
const textdecorationcolor = document.getElementById("text-decoration-color");
const textdecorationline = document.getElementById("text-decoration-line");
const textdecorationstyle = document.getElementById("text-decoration-style");
const textdecorationthickness = document.getElementById("text-decoration-thickness");
const textemphasis = document.getElementById("text-emphasis");
const textemphasiscolor = document.getElementById("text-emphasis-color");
const textemphasisposition = document.getElementById("text-emphasis-position");
const textemphasisstyle = document.getElementById("text-emphasis-style");
const textindent = document.getElementById("text-indent");
const textjustify = document.getElementById("text-justify");
const textorientation = document.getElementById("text-orientation");
const textoverflow = document.getElementById("text-overflow");
const textshadow = document.getElementById("text-shadow");
const texttransform = document.getElementById("text-transform");
const textunderlineoffset = document.getElementById("text-underline-offset");
const textunderlineposition = document.getElementById("text-underline-position");
const topInput = document.getElementById("top");
const transform = document.getElementById("transform");
const transformorigin = document.getElementById("transform-origin");
const transformstyle = document.getElementById("transform-style");
const transition = document.getElementById("transition");
const transitiondelay = document.getElementById("transition-delay");
const transitionduration = document.getElementById("transition-duration");
const transitionproperty = document.getElementById("transition-property");
const transitiontimingfunction = document.getElementById("transition-timing-function");
const translate = document.getElementById("translate");
const unicodebidi = document.getElementById("unicode-bidi");
const userselect = document.getElementById("user-select");
const verticalalign = document.getElementById("vertical-align");
const visibility = document.getElementById("visibility");
const whitespace = document.getElementById("white-space");
const widows = document.getElementById("widows");
const width = document.getElementById("width");
const wordbreak = document.getElementById("word-break");
const wordspacing = document.getElementById("word-spacing");
const wordwrap = document.getElementById("word-wrap");
const writingmode = document.getElementById("writing-mode");
const zindex = document.getElementById("z-index");
const zoom = document.getElementById("zoom");

//navigation
const nav = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");

// Dragging functionality
let selectedElement = null;
let activeObject = null;


nav.addEventListener("click", openNav)
nav2.addEventListener("click", openNav2)

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav2() {
    document.getElementById("mySidenav2").style.width = "300px";
    document.getElementById("mySidenav2").style.left = "1236px";

}
function closeNav2() {
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav2").style.left = "1535px";
}
//yang bagian ini digunakan untuk melakukan perubahan pada properti objek yang sesuai id ketika dilakukan suatu input 
[accentcolor
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
    // , charset
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
    // , container
    , content
    , counterincrement
    , counterreset
    , counterset
    // , counterstyle
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
    // , fontface
    , fontfamily
    , fontfeaturesettings
    , fontkerning
    // , fontpalettevalues
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
    // , import2
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
    // , keyframes
    // , layer
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
    // , media
    , minblocksize
    , mininlinesize
    , minheight
    , minwidth
    , mixblendmode
    // , namespace
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
    // , page
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
    // , property
    , quotes
    , resize
    , right
    , rotate
    , rowgap
    , scale
    // , scope
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
    // , startingstyle
    // , supports
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
    , zoom].forEach(input => {
        input.addEventListener("input", () => {
            if (selectedElement) {
                if (input.id === "accent-color") selectedElement.style.accentColor = input.value;
                if (input.id === "align-content") selectedElement.style.alignContent = input.value;
                if (input.id === "align-items") selectedElement.style.alignItems = input.value;
                if (input.id === "align-self") selectedElement.style.alignSelf = input.value;
                if (input.id === "all") selectedElement.style.all = input.value;
                if (input.id === "animation") selectedElement.style.animation = input.value;
                if (input.id === "animation-delay") selectedElement.style.animationDelay = input.value;
                if (input.id === "animation-direction") selectedElement.style.animationDirection = input.value;
                if (input.id === "animation-duration") selectedElement.style.animationDuration = input.value;
                if (input.id === "animation-fill-mode") selectedElement.style.animationFillMode = input.value;
                if (input.id === "animation-iteration-count") selectedElement.style.animationIterationCount = input.value;
                if (input.id === "animation-name") selectedElement.style.animationName = input.value;
                if (input.id === "animation-play-state") selectedElement.style.animationPlayState = input.value;
                if (input.id === "animation-timing-function") selectedElement.style.animationTimingFunction = input.value;
                if (input.id === "aspect-ratio") selectedElement.style.aspectRatio = input.value;
                if (input.id === "backdrop-filter") selectedElement.style.backdropFilter = input.value;
                if (input.id === "backface-visibility") selectedElement.style.backfaceVisibility = input.value;
                if (input.id === "background") selectedElement.style.background = input.value;
                if (input.id === "background-attachment") selectedElement.style.backgroundAttachment = input.value;
                if (input.id === "background-blend-mode") selectedElement.style.backgroundBlendMode = input.value;
                if (input.id === "background-clip") selectedElement.style.backgroundClip = input.value;
                if (input.id === "background-color") selectedElement.style.backgroundColor = input.value;
                if (input.id === "background-image") selectedElement.style.backgroundImage = input.value;
                if (input.id === "background-origin") selectedElement.style.backgroundOrigin = input.value;
                if (input.id === "background-position") selectedElement.style.backgroundPosition = input.value;
                if (input.id === "background-position-x") selectedElement.style.backgroundPositionX = input.value;
                if (input.id === "background-position-y") selectedElement.style.backgroundPositionY = input.value;
                if (input.id === "background-repeat") selectedElement.style.backgroundRepeat = input.value;
                if (input.id === "background-size") selectedElement.style.backgroundSize = input.value;
                if (input.id === "block-size") selectedElement.style.blockSize = input.value;
                if (input.id === "border") selectedElement.style.border = input.value;
                if (input.id === "border-block") selectedElement.style.borderBlock = input.value;
                if (input.id === "border-block-color") selectedElement.style.borderBlockColor = input.value;
                if (input.id === "border-block-end") selectedElement.style.borderBlockEnd = input.value;
                if (input.id === "border-block-end-color") selectedElement.style.borderBlockEndColor = input.value;
                if (input.id === "border-block-end-style") selectedElement.style.borderBlockEndStyle = input.value;
                if (input.id === "border-block-end-width") selectedElement.style.borderBlockEndWidth = input.value;
                if (input.id === "border-block-start") selectedElement.style.borderBlockStart = input.value;
                if (input.id === "border-block-start-color") selectedElement.style.borderBlockStartColor = input.value;
                if (input.id === "border-block-start-style") selectedElement.style.borderBlockStartStyle = input.value;
                if (input.id === "border-block-start-width") selectedElement.style.borderBlockStartWidth = input.value;
                if (input.id === "border-block-style") selectedElement.style.borderBlockStyle = input.value;
                if (input.id === "border-block-width") selectedElement.style.borderBlockWidth = input.value;
                if (input.id === "border-bottom") selectedElement.style.borderBottom = input.value;
                if (input.id === "border-bottom-color") selectedElement.style.borderBottomColor = input.value;
                if (input.id === "border-bottom-left-radius") selectedElement.style.borderBottomLeftRadius = input.value;
                if (input.id === "border-bottom-right-radius") selectedElement.style.borderBottomRightRadius = input.value;
                if (input.id === "border-bottom-style") selectedElement.style.borderBottomStyle = input.value;
                if (input.id === "border-bottom-width") selectedElement.style.borderBottomWidth = input.value;
                if (input.id === "border-collapse") selectedElement.style.borderCollapse = input.value;
                if (input.id === "border-color") selectedElement.style.borderColor = input.value;
                if (input.id === "border-end-end-radius") selectedElement.style.borderEndEndRadius = input.value;
                if (input.id === "border-end-start-radius") selectedElement.style.borderEndStartRadius = input.value;
                if (input.id === "border-image") selectedElement.style.borderImage = input.value;
                if (input.id === "border-image-outset") selectedElement.style.borderImageOutset = input.value;
                if (input.id === "border-image-repeat") selectedElement.style.borderImageRepeat = input.value;
                if (input.id === "border-image-slice") selectedElement.style.borderImageSlice = input.value;
                if (input.id === "border-image-source") selectedElement.style.borderImageSource = input.value;
                if (input.id === "border-image-width") selectedElement.style.borderImageWidth = input.value;
                if (input.id === "border-inline") selectedElement.style.borderInline = input.value;
                if (input.id === "border-inline-color") selectedElement.style.borderInlineColor = input.value;
                if (input.id === "border-inline-end") selectedElement.style.borderInlineEnd = input.value;
                if (input.id === "border-inline-end-color") selectedElement.style.borderInlineEndColor = input.value;
                if (input.id === "border-inline-end-style") selectedElement.style.borderInlineEndStyle = input.value;
                if (input.id === "border-inline-end-width") selectedElement.style.borderInlineEndWidth = input.value;
                if (input.id === "border-inline-start") selectedElement.style.borderInlineStart = input.value;
                if (input.id === "border-inline-start-color") selectedElement.style.borderInlineStartColor = input.value;
                if (input.id === "border-inline-start-style") selectedElement.style.borderInlineStartStyle = input.value;
                if (input.id === "border-inline-start-width") selectedElement.style.borderInlineStartWidth = input.value;
                if (input.id === "border-inline-style") selectedElement.style.borderInlineStyle = input.value;
                if (input.id === "border-inline-width") selectedElement.style.borderInlineWidth = input.value;
                if (input.id === "border-left") selectedElement.style.borderLeft = input.value;
                if (input.id === "border-left-color") selectedElement.style.borderLeftColor = input.value;
                if (input.id === "border-left-style") selectedElement.style.borderLeftStyle = input.value;
                if (input.id === "border-left-width") selectedElement.style.borderLeftWidth = input.value;
                if (input.id === "border-radius") selectedElement.style.borderRadius = input.value;
                if (input.id === "border-right") selectedElement.style.borderRight = input.value;
                if (input.id === "border-right-color") selectedElement.style.borderRightColor = input.value;
                if (input.id === "border-right-style") selectedElement.style.borderRightStyle = input.value;
                if (input.id === "border-right-width") selectedElement.style.borderRightWidth = input.value;
                if (input.id === "border-spacing") selectedElement.style.borderSpacing = input.value;
                if (input.id === "border-start-end-radius") selectedElement.style.borderStartEndRadius = input.value;
                if (input.id === "border-start-start-radius") selectedElement.style.borderStartStartRadius = input.value;
                if (input.id === "border-style") selectedElement.style.borderStyle = input.value;
                if (input.id === "border-top") selectedElement.style.borderTop = input.value;
                if (input.id === "border-top-color") selectedElement.style.borderTopColor = input.value;
                if (input.id === "border-top-left-radius") selectedElement.style.borderTopLeftRadius = input.value;
                if (input.id === "border-top-right-radius") selectedElement.style.borderTopRightRadius = input.value;
                if (input.id === "border-top-style") selectedElement.style.borderTopStyle = input.value;
                if (input.id === "border-top-width") selectedElement.style.borderTopWidth = input.value;
                if (input.id === "border-width") selectedElement.style.borderWidth = input.value;
                if (input.id === "bottom") selectedElement.style.bottom = input.value;
                if (input.id === "box-decoration-break") selectedElement.style.boxDecorationBreak = input.value;
                if (input.id === "box-reflect") selectedElement.style.boxReflect = input.value;
                if (input.id === "box-shadow") selectedElement.style.boxShadow = input.value;
                if (input.id === "box-sizing") selectedElement.style.boxSizing = input.value;
                if (input.id === "break-after") selectedElement.style.breakAfter = input.value;
                if (input.id === "break-before") selectedElement.style.breakBefore = input.value;
                if (input.id === "break-inside") selectedElement.style.breakInside = input.value;
                if (input.id === "caption-side") selectedElement.style.captionSide = input.value;
                if (input.id === "caret-color") selectedElement.style.caretColor = input.value;

                if (input.id === "clear") selectedElement.style.clear = input.value;
                if (input.id === "clip") selectedElement.style.clip = input.value;
                if (input.id === "clip-path") selectedElement.style.clipPath = input.value;
                if (input.id === "color") selectedElement.style.color = input.value;
                if (input.id === "color-scheme") selectedElement.style.colorScheme = input.value;
                if (input.id === "column-count") selectedElement.style.columnCount = input.value;
                if (input.id === "column-fill") selectedElement.style.columnFill = input.value;
                if (input.id === "column-gap") selectedElement.style.columnGap = input.value;
                if (input.id === "column-rule") selectedElement.style.columnRule = input.value;
                if (input.id === "column-rule-color") selectedElement.style.columnRuleColor = input.value;
                if (input.id === "column-rule-style") selectedElement.style.columnRuleStyle = input.value;
                if (input.id === "column-rule-width") selectedElement.style.columnRuleWidth = input.value;
                if (input.id === "column-span") selectedElement.style.columnSpan = input.value;
                if (input.id === "column-width") selectedElement.style.columnWidth = input.value;
                if (input.id === "columns") selectedElement.style.columns = input.value;

                if (input.id === "content") selectedElement.style.content = input.value;
                if (input.id === "counter-increment") selectedElement.style.counterIncrement = input.value;
                if (input.id === "counter-reset") selectedElement.style.counterReset = input.value;
                if (input.id === "counter-set") selectedElement.style.counterSet = input.value;

                if (input.id === "cursor") selectedElement.style.cursor = input.value;
                if (input.id === "direction") selectedElement.style.direction = input.value;
                if (input.id === "display") selectedElement.style.display = input.value;
                if (input.id === "empty-cells") selectedElement.style.emptyCells = input.value;
                if (input.id === "filter") selectedElement.style.filter = input.value;
                if (input.id === "flex") selectedElement.style.flex = input.value;
                if (input.id === "flex-basis") selectedElement.style.flexBasis = input.value;
                if (input.id === "flex-direction") selectedElement.style.flexDirection = input.value;
                if (input.id === "flex-flow") selectedElement.style.flexFlow = input.value;
                if (input.id === "flex-grow") selectedElement.style.flexGrow = input.value;
                if (input.id === "flex-shrink") selectedElement.style.flexShrink = input.value;
                if (input.id === "flex-wrap") selectedElement.style.flexWrap = input.value;
                if (input.id === "float") selectedElement.style.float = input.value;
                if (input.id === "font") selectedElement.style.font = input.value;

                if (input.id === "font-family") selectedElement.style.fontFamily = input.value;
                if (input.id === "font-feature-settings") selectedElement.style.fontFeatureSettings = input.value;
                if (input.id === "font-kerning") selectedElement.style.fontKerning = input.value;

                if (input.id === "font-size") selectedElement.style.fontSize = input.value;
                if (input.id === "font-size-adjust") selectedElement.style.fontSizeAdjust = input.value;
                if (input.id === "font-stretch") selectedElement.style.fontStretch = input.value;
                if (input.id === "font-style") selectedElement.style.fontStyle = input.value;
                if (input.id === "font-variant") selectedElement.style.fontVariant = input.value;
                if (input.id === "font-variant-caps") selectedElement.style.fontVariantCaps = input.value;
                if (input.id === "font-weight") selectedElement.style.fontWeight = input.value;
                if (input.id === "gap") selectedElement.style.gap = input.value;
                if (input.id === "grid") selectedElement.style.grid = input.value;
                if (input.id === "grid-area") selectedElement.style.gridArea = input.value;
                if (input.id === "grid-auto-columns") selectedElement.style.gridAutoColumns = input.value;
                if (input.id === "grid-auto-flow") selectedElement.style.gridAutoFlow = input.value;
                if (input.id === "grid-auto-rows") selectedElement.style.gridAutoRows = input.value;
                if (input.id === "grid-column") selectedElement.style.gridColumn = input.value;
                if (input.id === "grid-column-end") selectedElement.style.gridColumnEnd = input.value;
                if (input.id === "grid-column-start") selectedElement.style.gridColumnStart = input.value;
                if (input.id === "grid-row") selectedElement.style.gridRow = input.value;
                if (input.id === "grid-row-end") selectedElement.style.gridRowEnd = input.value;
                if (input.id === "grid-row-start") selectedElement.style.gridRowStart = input.value;
                if (input.id === "grid-template") selectedElement.style.gridTemplate = input.value;
                if (input.id === "grid-template-areas") selectedElement.style.gridTemplateAreas = input.value;
                if (input.id === "grid-template-columns") selectedElement.style.gridTemplateColumns = input.value;
                if (input.id === "grid-template-rows") selectedElement.style.gridTemplateRows = input.value;
                if (input.id === "hanging-punctuation") selectedElement.style.hangingPunctuation = input.value;
                if (input.id === "height") selectedElement.style.height = input.value;
                if (input.id === "hyphens") selectedElement.style.hyphens = input.value;
                if (input.id === "hyphenate-character") selectedElement.style.hyphenateCharacter = input.value;
                if (input.id === "image-rendering") selectedElement.style.imageRendering = input.value;

                if (input.id === "initial-letter") selectedElement.style.initialLetter = input.value;
                if (input.id === "inline-size") selectedElement.style.inlineSize = input.value;
                if (input.id === "inset") selectedElement.style.inset = input.value;
                if (input.id === "inset-block") selectedElement.style.insetBlock = input.value;
                if (input.id === "inset-block-end") selectedElement.style.insetBlockEnd = input.value;
                if (input.id === "inset-block-start") selectedElement.style.insetBlockStart = input.value;
                if (input.id === "inset-inline") selectedElement.style.insetInline = input.value;
                if (input.id === "inset-inline-end") selectedElement.style.insetInlineEnd = input.value;
                if (input.id === "inset-inline-start") selectedElement.style.insetInlineStart = input.value;
                if (input.id === "isolation") selectedElement.style.isolation = input.value;
                if (input.id === "justify-content") selectedElement.style.justifyContent = input.value;
                if (input.id === "justify-items") selectedElement.style.justifyItems = input.value;
                if (input.id === "justify-self") selectedElement.style.justifySelf = input.value;


                if (input.id === "left") selectedElement.style.left = input.value;
                if (input.id === "letter-spacing") selectedElement.style.letterSpacing = input.value;
                if (input.id === "line-height") selectedElement.style.lineHeight = input.value;
                if (input.id === "list-style") selectedElement.style.listStyle = input.value;
                if (input.id === "list-style-image") selectedElement.style.listStyleImage = input.value;
                if (input.id === "list-style-position") selectedElement.style.listStylePosition = input.value;
                if (input.id === "list-style-type") selectedElement.style.listStyleType = input.value;
                if (input.id === "margin") selectedElement.style.margin = input.value;
                if (input.id === "margin-block") selectedElement.style.marginBlock = input.value;
                if (input.id === "margin-block-end") selectedElement.style.marginBlockEnd = input.value;
                if (input.id === "margin-block-start") selectedElement.style.marginBlockStart = input.value;
                if (input.id === "margin-bottom") selectedElement.style.marginBottom = input.value;
                if (input.id === "margin-inline") selectedElement.style.marginInline = input.value;
                if (input.id === "margin-inline-end") selectedElement.style.marginInlineEnd = input.value;
                if (input.id === "margin-inline-start") selectedElement.style.marginInlineStart = input.value;
                if (input.id === "margin-left") selectedElement.style.marginLeft = input.value;
                if (input.id === "margin-right") selectedElement.style.marginRight = input.value;
                if (input.id === "margin-top") selectedElement.style.marginTop = input.value;
                if (input.id === "marker") selectedElement.style.marker = input.value;
                if (input.id === "marker-end") selectedElement.style.markerEnd = input.value;
                if (input.id === "marker-mid") selectedElement.style.markerMid = input.value;
                if (input.id === "marker-start") selectedElement.style.markerStart = input.value;
                if (input.id === "mask") selectedElement.style.mask = input.value;
                if (input.id === "mask-clip") selectedElement.style.maskClip = input.value;
                if (input.id === "mask-composite") selectedElement.style.maskComposite = input.value;
                if (input.id === "mask-image") selectedElement.style.maskImage = input.value;
                if (input.id === "mask-mode") selectedElement.style.maskMode = input.value;
                if (input.id === "mask-origin") selectedElement.style.maskOrigin = input.value;
                if (input.id === "mask-position") selectedElement.style.maskPosition = input.value;
                if (input.id === "mask-repeat") selectedElement.style.maskRepeat = input.value;
                if (input.id === "mask-size") selectedElement.style.maskSize = input.value;
                if (input.id === "mask-type") selectedElement.style.maskType = input.value;
                if (input.id === "max-block-size") selectedElement.style.maxBlockSize = input.value;
                if (input.id === "max-height") selectedElement.style.maxHeight = input.value;
                if (input.id === "max-inline-size") selectedElement.style.maxInlineSize = input.value;
                if (input.id === "max-width") selectedElement.style.maxWidth = input.value;

                if (input.id === "min-block-size") selectedElement.style.minBlockSize = input.value;
                if (input.id === "min-inline-size") selectedElement.style.minInlineSize = input.value;
                if (input.id === "min-height") selectedElement.style.minHeight = input.value;
                if (input.id === "min-width") selectedElement.style.minWidth = input.value;
                if (input.id === "mix-blend-mode") selectedElement.style.mixBlendMode = input.value;

                if (input.id === "object-fit") selectedElement.style.objectFit = input.value;
                if (input.id === "object-position") selectedElement.style.objectPosition = input.value;
                if (input.id === "offset") selectedElement.style.offset = input.value;
                if (input.id === "offset-anchor") selectedElement.style.offsetAnchor = input.value;
                if (input.id === "offset-distance") selectedElement.style.offsetDistance = input.value;
                if (input.id === "offset-path") selectedElement.style.offsetPath = input.value;
                if (input.id === "offset-position") selectedElement.style.offsetPosition = input.value;
                if (input.id === "offset-rotate") selectedElement.style.offsetRotate = input.value;
                if (input.id === "opacity") selectedElement.style.opacity = input.value;
                if (input.id === "order") selectedElement.style.order = input.value;
                if (input.id === "orphans") selectedElement.style.orphans = input.value;
                if (input.id === "outline") selectedElement.style.outline = input.value;
                if (input.id === "outline-color") selectedElement.style.outlineColor = input.value;
                if (input.id === "outline-offset") selectedElement.style.outlineOffset = input.value;
                if (input.id === "outline-style") selectedElement.style.outlineStyle = input.value;
                if (input.id === "outline-width") selectedElement.style.outlineWidth = input.value;
                if (input.id === "overflow") selectedElement.style.overflow = input.value;
                if (input.id === "overflow-anchor") selectedElement.style.overflowAnchor = input.value;
                if (input.id === "overflow-wrap") selectedElement.style.overflowWrap = input.value;
                if (input.id === "overflow-x") selectedElement.style.overflowX = input.value;
                if (input.id === "overflow-y") selectedElement.style.overflowY = input.value;
                if (input.id === "overscroll-behavior") selectedElement.style.overscrollBehavior = input.value;
                if (input.id === "overscroll-behavior-block") selectedElement.style.overscrollBehaviorBlock = input.value;
                if (input.id === "overscroll-behavior-inline") selectedElement.style.overscrollBehaviorInline = input.value;
                if (input.id === "overscroll-behavior-x") selectedElement.style.overscrollBehaviorX = input.value;
                if (input.id === "overscroll-behavior-y") selectedElement.style.overscrollBehaviorY = input.value;
                if (input.id === "padding") selectedElement.style.padding = input.value;
                if (input.id === "padding-block") selectedElement.style.paddingBlock = input.value;
                if (input.id === "padding-block-end") selectedElement.style.paddingBlockEnd = input.value;
                if (input.id === "padding-block-start") selectedElement.style.paddingBlockStart = input.value;
                if (input.id === "padding-bottom") selectedElement.style.paddingBottom = input.value;
                if (input.id === "padding-inline") selectedElement.style.paddingInline = input.value;
                if (input.id === "padding-inline-end") selectedElement.style.paddingInlineEnd = input.value;
                if (input.id === "padding-inline-start") selectedElement.style.paddingInlineStart = input.value;
                if (input.id === "padding-left") selectedElement.style.paddingLeft = input.value;
                if (input.id === "padding-right") selectedElement.style.paddingRight = input.value;
                if (input.id === "padding-top") selectedElement.style.paddingTop = input.value;

                if (input.id === "page-break-after") selectedElement.style.pageBreakAfter = input.value;
                if (input.id === "page-break-before") selectedElement.style.pageBreakBefore = input.value;
                if (input.id === "page-break-inside") selectedElement.style.pageBreakInside = input.value;
                if (input.id === "paint-order") selectedElement.style.paintOrder = input.value;
                if (input.id === "perspective") selectedElement.style.perspective = input.value;
                if (input.id === "perspective-origin") selectedElement.style.perspectiveOrigin = input.value;
                if (input.id === "place-content") selectedElement.style.placeContent = input.value;
                if (input.id === "place-items") selectedElement.style.placeItems = input.value;
                if (input.id === "place-self") selectedElement.style.placeSelf = input.value;
                if (input.id === "pointer-events") selectedElement.style.pointerEvents = input.value;
                if (input.id === "position") selectedElement.style.position = input.value;

                if (input.id === "quotes") selectedElement.style.quotes = input.value;
                if (input.id === "resize") selectedElement.style.resize = input.value;
                if (input.id === "right") selectedElement.style.right = input.value;
                if (input.id === "rotate") selectedElement.style.rotate = input.value;
                if (input.id === "row-gap") selectedElement.style.rowGap = input.value;
                if (input.id === "scale") selectedElement.style.scale = input.value;

                if (input.id === "scroll-behavior") selectedElement.style.scrollBehavior = input.value;
                if (input.id === "scroll-margin") selectedElement.style.scrollMargin = input.value;
                if (input.id === "scroll-margin-block") selectedElement.style.scrollMarginBlock = input.value;
                if (input.id === "scroll-margin-block-end") selectedElement.style.scrollMarginBlockEnd = input.value;
                if (input.id === "scroll-margin-block-start") selectedElement.style.scrollMarginBlockStart = input.value;
                if (input.id === "scroll-margin-bottom") selectedElement.style.scrollMarginBottom = input.value;
                if (input.id === "scroll-margin-inline") selectedElement.style.scrollMarginInline = input.value;
                if (input.id === "scroll-margin-inline-end") selectedElement.style.scrollMarginInlineEnd = input.value;
                if (input.id === "scroll-margin-inline-start") selectedElement.style.scrollMarginInlineStart = input.value;
                if (input.id === "scroll-margin-left") selectedElement.style.scrollMarginLeft = input.value;
                if (input.id === "scroll-margin-right") selectedElement.style.scrollMarginRight = input.value;
                if (input.id === "scroll-margin-top") selectedElement.style.scrollMarginTop = input.value;
                if (input.id === "scroll-padding") selectedElement.style.scrollPadding = input.value;
                if (input.id === "scroll-padding-block") selectedElement.style.scrollPaddingBlock = input.value;
                if (input.id === "scroll-padding-block-end") selectedElement.style.scrollPaddingBlockEnd = input.value;
                if (input.id === "scroll-padding-block-start") selectedElement.style.scrollPaddingBlockStart = input.value;
                if (input.id === "scroll-padding-bottom") selectedElement.style.scrollPaddingBottom = input.value;
                if (input.id === "scroll-padding-inline") selectedElement.style.scrollPaddingInline = input.value;
                if (input.id === "scroll-padding-inline-end") selectedElement.style.scrollPaddingInlineEnd = input.value;
                if (input.id === "scroll-padding-inline-start") selectedElement.style.scrollPaddingInlineStart = input.value;
                if (input.id === "scroll-padding-left") selectedElement.style.scrollPaddingLeft = input.value;
                if (input.id === "scroll-padding-right") selectedElement.style.scrollPaddingRight = input.value;
                if (input.id === "scroll-padding-top") selectedElement.style.scrollPaddingTop = input.value;
                if (input.id === "scroll-snap-align") selectedElement.style.scrollSnapAlign = input.value;
                if (input.id === "scroll-snap-stop") selectedElement.style.scrollSnapStop = input.value;
                if (input.id === "scroll-snap-type") selectedElement.style.scrollSnapType = input.value;
                if (input.id === "scrollbar-color") selectedElement.style.scrollbarColor = input.value;
                if (input.id === "shape-outside") selectedElement.style.shapeOutside = input.value;


                if (input.id === "tab-size") selectedElement.style.tabSize = input.value;
                if (input.id === "table-layout") selectedElement.style.tableLayout = input.value;
                if (input.id === "text-align") selectedElement.style.textAlign = input.value;
                if (input.id === "text-align-last") selectedElement.style.textAlignLast = input.value;
                if (input.id === "text-decoration") selectedElement.style.textDecoration = input.value;
                if (input.id === "text-decoration-color") selectedElement.style.textDecorationColor = input.value;
                if (input.id === "text-decoration-line") selectedElement.style.textDecorationLine = input.value;
                if (input.id === "text-decoration-style") selectedElement.style.textDecorationStyle = input.value;
                if (input.id === "text-decoration-thickness") selectedElement.style.textDecorationThickness = input.value;
                if (input.id === "text-emphasis") selectedElement.style.textEmphasis = input.value;
                if (input.id === "text-emphasis-color") selectedElement.style.textEmphasisColor = input.value;
                if (input.id === "text-emphasis-position") selectedElement.style.textEmphasisPosition = input.value;
                if (input.id === "text-emphasis-style") selectedElement.style.textEmphasisStyle = input.value;
                if (input.id === "text-indent") selectedElement.style.textIndent = input.value;
                if (input.id === "text-justify") selectedElement.style.textJustify = input.value;
                if (input.id === "text-orientation") selectedElement.style.textOrientation = input.value;
                if (input.id === "text-overflow") selectedElement.style.textOverflow = input.value;
                if (input.id === "text-shadow") selectedElement.style.textShadow = input.value;
                if (input.id === "text-transform") selectedElement.style.textTransform = input.value;
                if (input.id === "text-underline-offset") selectedElement.style.textUnderlineOffset = input.value;
                if (input.id === "text-underline-position") selectedElement.style.textUnderlinePosition = input.value;
                if (input.id === "top") selectedElement.style.top = input.value;
                if (input.id === "transform") selectedElement.style.transform = input.value;
                if (input.id === "transform-origin") selectedElement.style.transformOrigin = input.value;
                if (input.id === "transform-style") selectedElement.style.transformStyle = input.value;
                if (input.id === "transition") selectedElement.style.transition = input.value;
                if (input.id === "transition-delay") selectedElement.style.transitionDelay = input.value;
                if (input.id === "transition-duration") selectedElement.style.transitionDuration = input.value;
                if (input.id === "transition-property") selectedElement.style.transitionProperty = input.value;
                if (input.id === "transition-timing-function") selectedElement.style.transitionTimingFunction = input.value;
                if (input.id === "translate") selectedElement.style.translate = input.value;
                if (input.id === "unicode-bidi") selectedElement.style.unicodeBidi = input.value;
                if (input.id === "user-select") selectedElement.style.userSelect = input.value;
                if (input.id === "vertical-align") selectedElement.style.verticalAlign = input.value;
                if (input.id === "visibility") selectedElement.style.visibility = input.value;
                if (input.id === "white-space") selectedElement.style.whiteSpace = input.value;
                if (input.id === "widows") selectedElement.style.widows = input.value;
                if (input.id === "width") selectedElement.style.width = input.value;
                if (input.id === "word-break") selectedElement.style.wordBreak = input.value;
                if (input.id === "word-spacing") selectedElement.style.wordSpacing = input.value;
                if (input.id === "word-wrap") selectedElement.style.wordWrap = input.value;
                if (input.id === "writing-mode") selectedElement.style.writingMode = input.value;
                if (input.id === "z-index") selectedElement.style.zIndex = input.value;
                if (input.id === "zoom") selectedElement.style.zoom = input.value;
            }
        });
    });

// Set nilai input saat elemen dipilih
// intinya yang bagian ini digunakan untuk menampilakn nilai yang sudah diterapkan pada element yang dipilih
canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        selectedElement = event.target;

        const computedStyle = window.getComputedStyle(selectedElement); // Gunakan computedStyle
        // Bagian kompres RGB menjadi Hexa
        // let rgbValue1 = computedStyle.backgroundColor;
        // let rgbValue2 = computedStyle.borderColor;
        // let rgbValue3 = computedStyle.color;
        // let [a, b, c] = rgbValue1.match(/\d+/g).map(Number);
        // let [d, e, f] = rgbValue2.match(/\d+/g).map(Number);
        // let [g, h, i] = rgbValue3.match(/\d+/g).map(Number);
        // backgroundInput.value = rgbToHex(a, b, c);
        // borderColorInput.value = rgbToHex(d, e, f);
        // fontColorInput.value = rgbToHex(g, h, i);
        accentcolor.value = computedStyle.accentColor;
        aligncontent.value = computedStyle.alignContent;
        alignitems.value = computedStyle.alignItems;
        alignself.value = computedStyle.alignSelf;
        all.value = computedStyle.all;
        animation.value = computedStyle.animation;
        animationdelay.value = computedStyle.animationDelay;
        animationdirection.value = computedStyle.animationDirection;
        animationduration.value = computedStyle.animationDuration;
        animationfillmode.value = computedStyle.animationFillMode;
        animationiterationcount.value = computedStyle.animationIterationCount;
        animationname.value = computedStyle.animationName;
        animationplaystate.value = computedStyle.animationPlayState;
        animationtimingfunction.value = computedStyle.animationTimingFunction;
        aspectratio.value = computedStyle.aspectRatio;
        backdropfilter.value = computedStyle.backdropFilter;
        backfacevisibility.value = computedStyle.backfaceVisibility;
        background.value = computedStyle.background;
        backgroundattachment.value = computedStyle.backgroundAttachment;
        backgroundblendmode.value = computedStyle.backgroundBlendMode;
        backgroundclip.value = computedStyle.backgroundClip;
        backgroundcolor.value = computedStyle.backgroundColor;
        backgroundimage.value = computedStyle.backgroundImage;
        backgroundorigin.value = computedStyle.backgroundOrigin;
        backgroundposition.value = computedStyle.backgroundPosition;
        backgroundpositionx.value = computedStyle.backgroundPositionX;
        backgroundpositiony.value = computedStyle.backgroundPositionY;
        backgroundrepeat.value = computedStyle.backgroundRepeat;
        backgroundsize.value = computedStyle.backgroundSize;
        blocksize.value = computedStyle.blockSize;
        border.value = computedStyle.border;
        borderblock.value = computedStyle.borderBlock;
        borderblockcolor.value = computedStyle.borderBlockColor;
        borderblockend.value = computedStyle.borderBlockEnd;
        borderblockendcolor.value = computedStyle.borderBlockEndColor;
        borderblockendstyle.value = computedStyle.borderBlockEndStyle;
        borderblockendwidth.value = computedStyle.borderBlockEndWidth;
        borderblockstart.value = computedStyle.borderBlockStart;
        borderblockstartcolor.value = computedStyle.borderBlockStartColor;
        borderblockstartstyle.value = computedStyle.borderBlockStartStyle;
        borderblockstartwidth.value = computedStyle.borderBlockStartWidth;
        borderblockstyle.value = computedStyle.borderBlockStyle;
        borderblockwidth.value = computedStyle.borderBlockWidth;
        borderbottom.value = computedStyle.borderBottom;
        borderbottomcolor.value = computedStyle.borderBottomColor;
        borderbottomleftradius.value = computedStyle.borderBottomLeftRadius;
        borderbottomrightradius.value = computedStyle.borderBottomRightRadius;
        borderbottomstyle.value = computedStyle.borderBottomStyle;
        borderbottomwidth.value = computedStyle.borderBottomWidth;
        bordercollapse.value = computedStyle.borderCollapse;
        bordercolor.value = computedStyle.borderColor;
        borderendendradius.value = computedStyle.borderEndEndRadius;
        borderendstartradius.value = computedStyle.borderEndStartRadius;
        borderimage.value = computedStyle.borderImage;
        borderimageoutset.value = computedStyle.borderImageOutset;
        borderimagerepeat.value = computedStyle.borderImageRepeat;
        borderimageslice.value = computedStyle.borderImageSlice;
        borderimagesource.value = computedStyle.borderImageSource;
        borderimagewidth.value = computedStyle.borderImageWidth;
        borderinline.value = computedStyle.borderInline;
        borderinlinecolor.value = computedStyle.borderInlineColor;
        borderinlineend.value = computedStyle.borderInlineEnd;
        borderinlineendcolor.value = computedStyle.borderInlineEndColor;
        borderinlineendstyle.value = computedStyle.borderInlineEndStyle;
        borderinlineendwidth.value = computedStyle.borderInlineEndWidth;
        borderinlinestart.value = computedStyle.borderInlineStart;
        borderinlinestartcolor.value = computedStyle.borderInlineStartColor;
        borderinlinestartstyle.value = computedStyle.borderInlineStartStyle;
        borderinlinestartwidth.value = computedStyle.borderInlineStartWidth;
        borderinlinestyle.value = computedStyle.borderInlineStyle;
        borderinlinewidth.value = computedStyle.borderInlineWidth;
        borderleft.value = computedStyle.borderLeft;
        borderleftcolor.value = computedStyle.borderLeftColor;
        borderleftstyle.value = computedStyle.borderLeftStyle;
        borderleftwidth.value = computedStyle.borderLeftWidth;
        borderradius.value = computedStyle.borderRadius;
        borderright.value = computedStyle.borderRight;
        borderrightcolor.value = computedStyle.borderRightColor;
        borderrightstyle.value = computedStyle.borderRightStyle;
        borderrightwidth.value = computedStyle.borderRightWidth;
        borderspacing.value = computedStyle.borderSpacing;
        borderstartendradius.value = computedStyle.borderStartEndRadius;
        borderstartstartradius.value = computedStyle.borderStartStartRadius;
        borderstyle.value = computedStyle.borderStyle;
        bordertop.value = computedStyle.borderTop;
        bordertopcolor.value = computedStyle.borderTopColor;
        bordertopleftradius.value = computedStyle.borderTopLeftRadius;
        bordertoprightradius.value = computedStyle.borderTopRightRadius;
        bordertopstyle.value = computedStyle.borderTopStyle;
        bordertopwidth.value = computedStyle.borderTopWidth;
        borderwidth.value = computedStyle.borderWidth;
        bottom.value = computedStyle.bottom;
        boxdecorationbreak.value = computedStyle.boxDecorationBreak;
        boxreflect.value = computedStyle.boxReflect;
        boxshadow.value = computedStyle.boxShadow;
        boxsizing.value = computedStyle.boxSizing;
        breakafter.value = computedStyle.breakAfter;
        breakbefore.value = computedStyle.breakBefore;
        breakinside.value = computedStyle.breakInside;
        captionside.value = computedStyle.captionSide;
        caretcolor.value = computedStyle.caretColor;

        clear.value = computedStyle.clear;
        clip.value = computedStyle.clip;
        clippath.value = computedStyle.clipPath;
        color.value = computedStyle.color;
        colorscheme.value = computedStyle.colorScheme;
        columncount.value = computedStyle.columnCount;
        columnfill.value = computedStyle.columnFill;
        columngap.value = computedStyle.columnGap;
        columnrule.value = computedStyle.columnRule;
        columnrulecolor.value = computedStyle.columnRuleColor;
        columnrulestyle.value = computedStyle.columnRuleStyle;
        columnrulewidth.value = computedStyle.columnRuleWidth;
        columnspan.value = computedStyle.columnSpan;
        columnwidth.value = computedStyle.columnWidth;
        columns.value = computedStyle.columns;

        content.value = computedStyle.content;
        counterincrement.value = computedStyle.counterIncrement;
        counterreset.value = computedStyle.counterReset;
        counterset.value = computedStyle.counterSet;

        cursor.value = computedStyle.cursor;
        direction.value = computedStyle.direction;
        display.value = computedStyle.display;
        emptycells.value = computedStyle.emptyCells;
        filter.value = computedStyle.filter;
        flex.value = computedStyle.flex;
        flexbasis.value = computedStyle.flexBasis;
        flexdirection.value = computedStyle.flexDirection;
        flexflow.value = computedStyle.flexFlow;
        flexgrow.value = computedStyle.flexGrow;
        flexshrink.value = computedStyle.flexShrink;
        flexwrap.value = computedStyle.flexWrap;
        float.value = computedStyle.float;
        font.value = computedStyle.font;

        fontfamily.value = computedStyle.fontFamily;
        fontfeaturesettings.value = computedStyle.fontFeatureSettings;
        fontkerning.value = computedStyle.fontKerning;

        fontsize.value = computedStyle.fontSize;
        fontsizeadjust.value = computedStyle.fontSizeAdjust;
        fontstretch.value = computedStyle.fontStretch;
        fontstyle.value = computedStyle.fontStyle;
        fontvariant.value = computedStyle.fontVariant;
        fontvariantcaps.value = computedStyle.fontVariantCaps;
        fontweight.value = computedStyle.fontWeight;
        gap.value = computedStyle.gap;
        grid.value = computedStyle.grid;
        gridarea.value = computedStyle.gridArea;
        gridautocolumns.value = computedStyle.gridAutoColumns;
        gridautoflow.value = computedStyle.gridAutoFlow;
        gridautorows.value = computedStyle.gridAutoRows;
        gridcolumn.value = computedStyle.gridColumn;
        gridcolumnend.value = computedStyle.gridColumnEnd;
        gridcolumnstart.value = computedStyle.gridColumnStart;
        gridrow.value = computedStyle.gridRow;
        gridrowend.value = computedStyle.gridRowEnd;
        gridrowstart.value = computedStyle.gridRowStart;
        gridtemplate.value = computedStyle.gridTemplate;
        gridtemplateareas.value = computedStyle.gridTemplateAreas;
        gridtemplatecolumns.value = computedStyle.gridTemplateColumns;
        gridtemplaterows.value = computedStyle.gridTemplateRows;
        hangingpunctuation.value = computedStyle.hangingPunctuation;
        height.value = computedStyle.height;
        hyphens.value = computedStyle.hyphens;
        hyphenatecharacter.value = computedStyle.hyphenateCharacter;
        imagerendering.value = computedStyle.imageRendering;

        initialletter.value = computedStyle.initialLetter;
        inlinesize.value = computedStyle.inlineSize;
        inset.value = computedStyle.inset;
        insetblock.value = computedStyle.insetBlock;
        insetblockend.value = computedStyle.insetBlockEnd;
        insetblockstart.value = computedStyle.insetBlockStart;
        insetinline.value = computedStyle.insetInline;
        insetinlineend.value = computedStyle.insetInlineEnd;
        insetinlinestart.value = computedStyle.insetInlineStart;
        isolation.value = computedStyle.isolation;
        justifycontent.value = computedStyle.justifyContent;
        justifyitems.value = computedStyle.justifyItems;
        justifyself.value = computedStyle.justifySelf;


        left.value = computedStyle.left;
        letterspacing.value = computedStyle.letterSpacing;
        lineheight.value = computedStyle.lineHeight;
        liststyle.value = computedStyle.listStyle;
        liststyleimage.value = computedStyle.listStyleImage;
        liststyleposition.value = computedStyle.listStylePosition;
        liststyletype.value = computedStyle.listStyleType;
        margin.value = computedStyle.margin;
        marginblock.value = computedStyle.marginBlock;
        marginblockend.value = computedStyle.marginBlockEnd;
        marginblockstart.value = computedStyle.marginBlockStart;
        marginbottom.value = computedStyle.marginBottom;
        margininline.value = computedStyle.marginInline;
        margininlineend.value = computedStyle.marginInlineEnd;
        margininlinestart.value = computedStyle.marginInlineStart;
        marginleft.value = computedStyle.marginLeft;
        marginright.value = computedStyle.marginRight;
        margintop.value = computedStyle.marginTop;
        marker.value = computedStyle.marker;
        markerend.value = computedStyle.markerEnd;
        markermid.value = computedStyle.markerMid;
        markerstart.value = computedStyle.markerStart;
        mask.value = computedStyle.mask;
        maskclip.value = computedStyle.maskClip;
        maskcomposite.value = computedStyle.maskComposite;
        maskimage.value = computedStyle.maskImage;
        maskmode.value = computedStyle.maskMode;
        maskorigin.value = computedStyle.maskOrigin;
        maskposition.value = computedStyle.maskPosition;
        maskrepeat.value = computedStyle.maskRepeat;
        masksize.value = computedStyle.maskSize;
        masktype.value = computedStyle.maskType;
        maxblocksize.value = computedStyle.maxBlockSize;
        maxheight.value = computedStyle.maxHeight;
        maxinlinesize.value = computedStyle.maxInlineSize;
        maxwidth.value = computedStyle.maxWidth;

        minblocksize.value = computedStyle.minBlockSize;
        mininlinesize.value = computedStyle.minInlineSize;
        minheight.value = computedStyle.minHeight;
        minwidth.value = computedStyle.minWidth;
        mixblendmode.value = computedStyle.mixBlendMode;

        objectfit.value = computedStyle.objectFit;
        objectposition.value = computedStyle.objectPosition;
        offset.value = computedStyle.offset;
        offsetanchor.value = computedStyle.offsetAnchor;
        offsetdistance.value = computedStyle.offsetDistance;
        offsetpath.value = computedStyle.offsetPath;
        offsetposition.value = computedStyle.offsetPosition;
        offsetrotate.value = computedStyle.offsetRotate;
        opacity.value = computedStyle.opacity;
        order.value = computedStyle.order;
        orphans.value = computedStyle.orphans;
        outline.value = computedStyle.outline;
        outlinecolor.value = computedStyle.outlineColor;
        outlineoffset.value = computedStyle.outlineOffset;
        outlinestyle.value = computedStyle.outlineStyle;
        outlinewidth.value = computedStyle.outlineWidth;
        overflow.value = computedStyle.overflow;
        overflowanchor.value = computedStyle.overflowAnchor;
        overflowwrap.value = computedStyle.overflowWrap;
        overflowx.value = computedStyle.overflowX;
        overflowy.value = computedStyle.overflowY;
        overscrollbehavior.value = computedStyle.overscrollBehavior;
        overscrollbehaviorblock.value = computedStyle.overscrollBehaviorBlock;
        overscrollbehaviorinline.value = computedStyle.overscrollBehaviorInline;
        overscrollbehaviorx.value = computedStyle.overscrollBehaviorX;
        overscrollbehaviory.value = computedStyle.overscrollBehaviorY;
        padding.value = computedStyle.padding;
        paddingblock.value = computedStyle.paddingBlock;
        paddingblockend.value = computedStyle.paddingBlockEnd;
        paddingblockstart.value = computedStyle.paddingBlockStart;
        paddingbottom.value = computedStyle.paddingBottom;
        paddinginline.value = computedStyle.paddingInline;
        paddinginlineend.value = computedStyle.paddingInlineEnd;
        paddinginlinestart.value = computedStyle.paddingInlineStart;
        paddingleft.value = computedStyle.paddingLeft;
        paddingright.value = computedStyle.paddingRight;
        paddingtop.value = computedStyle.paddingTop;

        pagebreakafter.value = computedStyle.pageBreakAfter;
        pagebreakbefore.value = computedStyle.pageBreakBefore;
        pagebreakinside.value = computedStyle.pageBreakInside;
        paintorder.value = computedStyle.paintOrder;
        perspective.value = computedStyle.perspective;
        perspectiveorigin.value = computedStyle.perspectiveOrigin;
        placecontent.value = computedStyle.placeContent;
        placeitems.value = computedStyle.placeItems;
        placeself.value = computedStyle.placeSelf;
        pointerevents.value = computedStyle.pointerEvents;
        position.value = computedStyle.position;

        quotes.value = computedStyle.quotes;
        resize.value = computedStyle.resize;
        right.value = computedStyle.right;
        rotate.value = computedStyle.rotate;
        rowgap.value = computedStyle.rowGap;
        scale.value = computedStyle.scale;

        scrollbehavior.value = computedStyle.scrollBehavior;
        scrollmargin.value = computedStyle.scrollMargin;
        scrollmarginblock.value = computedStyle.scrollMarginBlock;
        scrollmarginblockend.value = computedStyle.scrollMarginBlockEnd;
        scrollmarginblockstart.value = computedStyle.scrollMarginBlockStart;
        scrollmarginbottom.value = computedStyle.scrollMarginBottom;
        scrollmargininline.value = computedStyle.scrollMarginInline;
        scrollmargininlineend.value = computedStyle.scrollMarginInlineEnd;
        scrollmargininlinestart.value = computedStyle.scrollMarginInlineStart;
        scrollmarginleft.value = computedStyle.scrollMarginLeft;
        scrollmarginright.value = computedStyle.scrollMarginRight;
        scrollmargintop.value = computedStyle.scrollMarginTop;
        scrollpadding.value = computedStyle.scrollPadding;
        scrollpaddingblock.value = computedStyle.scrollPaddingBlock;
        scrollpaddingblockend.value = computedStyle.scrollPaddingBlockEnd;
        scrollpaddingblockstart.value = computedStyle.scrollPaddingBlockStart;
        scrollpaddingbottom.value = computedStyle.scrollPaddingBottom;
        scrollpaddinginline.value = computedStyle.scrollPaddingInline;
        scrollpaddinginlineend.value = computedStyle.scrollPaddingInlineEnd;
        scrollpaddinginlinestart.value = computedStyle.scrollPaddingInlineStart;
        scrollpaddingleft.value = computedStyle.scrollPaddingLeft;
        scrollpaddingright.value = computedStyle.scrollPaddingRight;
        scrollpaddingtop.value = computedStyle.scrollPaddingTop;
        scrollsnapalign.value = computedStyle.scrollSnapAlign;
        scrollsnapstop.value = computedStyle.scrollSnapStop;
        scrollsnaptype.value = computedStyle.scrollSnapType;
        scrollbarcolor.value = computedStyle.scrollbarColor;
        shapeoutside.value = computedStyle.shapeOutside;


        tabsize.value = computedStyle.tabSize;
        tablelayout.value = computedStyle.tableLayout;
        textalign.value = computedStyle.textAlign;
        textalignlast.value = computedStyle.textAlignLast;
        textdecoration.value = computedStyle.textDecoration;
        textdecorationcolor.value = computedStyle.textDecorationColor;
        textdecorationline.value = computedStyle.textDecorationLine;
        textdecorationstyle.value = computedStyle.textDecorationStyle;
        textdecorationthickness.value = computedStyle.textDecorationThickness;
        textemphasis.value = computedStyle.textEmphasis;
        textemphasiscolor.value = computedStyle.textEmphasisColor;
        textemphasisposition.value = computedStyle.textEmphasisPosition;
        textemphasisstyle.value = computedStyle.textEmphasisStyle;
        textindent.value = computedStyle.textIndent;
        textjustify.value = computedStyle.textJustify;
        textorientation.value = computedStyle.textOrientation;
        textoverflow.value = computedStyle.textOverflow;
        textshadow.value = computedStyle.textShadow;
        texttransform.value = computedStyle.textTransform;
        textunderlineoffset.value = computedStyle.textUnderlineOffset;
        textunderlineposition.value = computedStyle.textUnderlinePosition;
        topInput.value = computedStyle.top;
        transform.value = computedStyle.transform;
        transformorigin.value = computedStyle.transformOrigin;
        transformstyle.value = computedStyle.transformStyle;
        transition.value = computedStyle.transition;
        transitiondelay.value = computedStyle.transitionDelay;
        transitionduration.value = computedStyle.transitionDuration;
        transitionproperty.value = computedStyle.transitionProperty;
        transitiontimingfunction.value = computedStyle.transitionTimingFunction;
        translate.value = computedStyle.translate;
        unicodebidi.value = computedStyle.unicodeBidi;
        userselect.value = computedStyle.userSelect;
        verticalalign.value = computedStyle.verticalAlign;
        visibility.value = computedStyle.visibility;
        whitespace.value = computedStyle.whiteSpace;
        widows.value = computedStyle.widows;
        width.value = computedStyle.width;
        wordbreak.value = computedStyle.wordBreak;
        wordspacing.value = computedStyle.wordSpacing;
        wordwrap.value = computedStyle.wordWrap;
        writingmode.value = computedStyle.writingMode;
        zindex.value = computedStyle.zIndex;
        zoom.value = computedStyle.zoom;

    }
});
//function untuk perubahan rgb ke hexa
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}



//klo ini digunakan untuk penambahan element baru 
div.addEventListener("click", () => {
    //bagian ini digunakna untuk mengambil data-element yang akan menjadi status tag HTML-nya
    const elementType = div.getAttribute("data-element");
    const newdiv = document.createElement(elementType);
    newdiv.classList.add("editable");
    newdiv.style.width = "100px";
    newdiv.style.height = "50px";
    newdiv.style.backgroundColor = "#ddd";
    newdiv.style.left = "682px";
    newdiv.style.top = "326px";

    // Tambahkan drag interactivity
    newdiv.addEventListener("mousedown", startDrag);
    canvas.appendChild(newdiv);
});

h.forEach(allh => {
    allh.addEventListener("click", () => {
        const elementType = allh.getAttribute("data-element");
        const newh1 = document.createElement(elementType);
        newh1.classList.add("editable");
        newh1.style.width = "100px";
        newh1.style.height = "50px";
        newh1.style.backgroundColor = "white";
        newh1.style.left = "682px";
        newh1.style.top = "326px";
        newh1.textContent = "Isi kata kata ...";

        // Tambahkan drag interactivity
        newh1.addEventListener("mousedown", startDrag);
        canvas.appendChild(newh1);
    })
}
);

function startDrag(event) {
    selectedElement = event.target;
    const offsetX = event.clientX - selectedElement.offsetLeft;
    const offsetY = event.clientY - selectedElement.offsetTop;

    function onMouseMove(e) {
        if (selectedElement) {
            selectedElement.style.left = `${e.clientX - offsetX}px`;
            selectedElement.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function stopDrag() {
        selectedElement = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", stopDrag);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDrag);
}

canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        arrows(event.target)
    }
});
function arrows(objek) {
    const object = objek;
    if (activeObject && activeObject !== object) {
        activeObject.style.outline = "";
        activeObject.innerHTML = "";
    }
    arrow(object);
    activeObject = object;

}
function arrow(object) {
    object.innerHTML = `
    <img id="resizeHandle1" class="arrow arrow-top" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute; top: -25px;left: 44%;transform: rotate(-90deg);">

<img id="resizeHandle2" class="arrow arrow-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute;  top: 40%;right: -39px;transform: translateX(-100%);">

<img id="resizeHandle3" class="arrow arrow-bottom" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute; bottom: -25px;left: 45%;transform: rotate(-90deg);">

<img id="resizeHandle4" class="arrow arrow-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px; position: absolute;  top: 40%;left: -18px;transform: translateX(-40%);">

<img id="resizeHandle5" class="corner corner-top-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;top: -21px;left: -19px;transform: rotate(50deg);">

<img id="resizeHandle6" class="corner corner-top-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;top: -22px;right: -19px;transform: rotate(-50deg);">
    
<img id="resizeHandle7" class="corner corner-bottom-left" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute;bottom: -18px;left: -20px;transform: rotate(-50deg);">

<img id="resizeHandle8" class="corner corner-bottom-right" src="arrows_outward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ikon Panah Kanan"
    style=" width: 15px;height: 15px;position: absolute; bottom: -20px;right: -19px;transform: rotate(50deg);">
    `;

    // BAGIAN VARIABEL UNTUK DRAG_SCALE

    const resizeHandle1 = document.getElementById("resizeHandle1");
    const resizeHandle2 = document.getElementById("resizeHandle2");
    const resizeHandle3 = document.getElementById("resizeHandle3");
    const resizeHandle4 = document.getElementById("resizeHandle4");
    const resizeHandle5 = document.getElementById("resizeHandle5");
    const resizeHandle6 = document.getElementById("resizeHandle6");
    const resizeHandle7 = document.getElementById("resizeHandle7");
    const resizeHandle8 = document.getElementById("resizeHandle8");
    const allimg = document.querySelectorAll("img");
    let isResizing = false;
    let startX1, startY1, startWidth1, startHeight1;

    //BAGIAN DRAG_SCALE VERTICAL KEATAS

    function resizeVerticalTop(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startY1 = event.clientY;
            startHeight1 = object.offsetHeight;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaY = startY1 - event.clientY;
                    const newHeight = startHeight1 + deltaY;
                    const newTop = startTop - deltaY;
                    object.style.height = `${newHeight}px`;
                    object.style.top = `${newTop}px`;


                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeVerticalTop(resizeHandle1);


    //BAGIAN DRAG_SCALE VERTICAL KEBAWAH

    function resizeVerticalBottom(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startY1 = event.clientY;
            startWidth1 = object.offsetWidth;
            startHeight1 = object.offsetHeight;



            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const newHeight = startHeight1 + (event.clientY - startY1);

                    object.style.Height = newHeight + "px";
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeVerticalBottom(resizeHandle3);

    //BAGIAN DRAG_SCALE HORIZONTAL KEKIRI

    function resizeHorizontalLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startWidth1 = object.offsetWidth;
            const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX;

                    const newWidth = startWidth1 + deltaX;
                    const newLeft = startLeft - deltaX;
                    object.style.width = `${newWidth}px`;
                    object.style.left = `${newLeft}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeHorizontalLeft(resizeHandle4);

    // BAGIAN DRAG_SCALE HORIZONTAL KEKANAN

    function resizeHorizontalRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startWidth1 = object.offsetWidth;
            startHeight1 = object.offsetHeight;

            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const newWidth = startWidth1 + (event.clientX - startX1);
                    object.style.width = newWidth + "px";
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    resizeHorizontalRight(resizeHandle2);
    // BAGIAN DRAG_SCALE CORNER

    function bottomRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;
            startX1 = event.clientX;
            startY1 = event.clientY;
            startHeight1 = object.offsetHeight;
            startWidth1 = object.offsetWidth;
            event.preventDefault();
        });
        document.addEventListener("mousemove", (event) => {
            if (isResizing) {
                isDragging = false
                const newWidth = startWidth1 + (event.clientX - startX1);
                const newHeight = startHeight1 + (event.clientY - startY1);
                object.style.width = newWidth + "px";
                object.style.height = newHeight + "px";
            }
        });
        document.addEventListener("mouseup", () => {
            isResizing = false;
        });
    }
    bottomRight(resizeHandle8);

    function bottomLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;
            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX; const deltaY = event.clientY - startY1;
                    const newWidth = startWidth1 + deltaX; const newLeft = startLeft - deltaX; const newHeight = startHeight1 + deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.left = `${newLeft}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    bottomLeft(resizeHandle7);


    function topLeft(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startLeft = parseInt(window.getComputedStyle(object).left, 10) || 0;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;


            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = startX1 - event.clientX; const deltaY = startY1 - event.clientY;
                    const newWidth = startWidth1 + deltaX; const newLeft = startLeft - deltaX; const newHeight = startHeight1 + deltaY; const newTop = startTop - deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.left = `${newLeft}px`;
                    object.style.top = `${newTop}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    topLeft(resizeHandle5);

    function topRight(button) {
        button.addEventListener("mousedown", (event) => {
            isResizing = true;

            startX1 = event.clientX; startY1 = event.clientY; startHeight1 = object.offsetHeight; startWidth1 = object.offsetWidth; const startRight = parseInt(window.getComputedStyle(object).right, 10) || 0;
            const startTop = parseInt(window.getComputedStyle(object).top, 10) || 0;


            document.addEventListener("mousemove", (event) => {
                if (isResizing) {
                    const deltaX = event.clientX - startX1; const deltaY = startY1 - event.clientY;
                    const newWidth = startWidth1 + deltaX; const newRight = startRight - deltaX; const newHeight = startHeight1 + deltaY; const newTop = startTop - deltaY;

                    object.style.width = newWidth + "px";
                    object.style.height = newHeight + "px";
                    object.style.right = `${newRight}px`;
                    object.style.top = `${newTop}px`;
                }
            });

            document.addEventListener("mouseup", () => {
                isResizing = false;
            });
            event.preventDefault();
        });
    }
    topRight(resizeHandle6);
    //BAGIAN HOVER ARROW

    allimg.forEach((img) => {
        img.addEventListener("mouseover", () => hoverImg(img));
        img.addEventListener("mouseout", () => normalImg(img));
    })
    object.style.outline = "3px dashed gray";

    document.addEventListener("click", (event) => {
        if (activeObject && !activeObject.contains(event.target)) {
            // Hapus panah dari objek aktif
            activeObject.style.outline = ""; // Hapus outline
            activeObject.innerHTML = ""; // Kosongkan konten
            activeObject = null; // Set objek aktif menjadi null
        } else if (event.target.classList.contains("selectable")) {
            // Jika pengguna mengklik objek yang bisa dipilih
            if (activeObject) {
                // Hapus gaya dari objek sebelumnya
                activeObject.style.outline = "";
                activeObject.innerHTML = "";
            }
            activeObject = event.target; // Tetapkan elemen yang baru dipilih
            activeObject.style.outline = "2px solid blue"; // Tambahkan outline sebagai indikator
        }
    });
    if (activeObject && activeObject !== object) {
        allimg.remove()
    }
}
//BAGIAN HOVER ARROW
function hoverImg(x) {
    x.style.filter = "invert(100%)";
}
function normalImg(x) {
    x.style.filter = "invert(0%)";
}

document.getElementById("exportButton").addEventListener("click", exportProject);
function exportProject() {
    const canvas = document.getElementById("canvas");

    // Ambil semua elemen dalam kanvas
    const elements = canvas.children;
    let htmlContent = ""; // Untuk menyimpan HTML
    let cssContent = ""; // Untuk menyimpan CSS
    if (elements.length === 0) {
        alert("Tidak ada elemen di dalam kanvas!");
        return;
    }

    Array.from(elements).forEach((element, index) => {
        // Generate HTML
        const elementTag = element.tagName.toLowerCase();
        htmlContent += `<${elementTag} class="class-${index}">${element.innerHTML}</${elementTag}>\n`;

        // Generate CSS
        const styles = window.getComputedStyle(element);
        //dibagian sini harus ditambahkan apa apa saja yang mau didownload untuk bagian css-nya
        let cssString = `
.class-${index} {
    accent-color:  ${style.accentColor}
    align-content: ${style.alignContent};
    align-items: ${style.alignItems};
    align-self: ${style.alignSelf};
    all: ${style.all};
    animation: ${style.animation};
    animation-delay: ${style.animationDelay};
    animation-direction: ${style.animationDirection};
    animation-duration: ${style.animationDuration};
    animation-fill-mode: ${style.animationFillMode};
    animation-iteration-count: ${style.animationIterationCount};
    animation-name: ${style.animationName};
    animation-play-state: ${style.animationPlayState};
    animation-timing-function: ${style.animationTimingFunction};
    aspect-ratio: ${style.aspectRatio};
    backdrop-filter: ${style.backdropFilter};
    backface-visibility: ${style.backfaceVisibility};
    background: ${style.background};
    background-attachment: ${style.backgroundAttachment};
    background-blend-mode: ${style.backgroundBlendMode};
    background-clip: ${style.backgroundClip};
    background-color: ${style.backgroundColor};
    background-image: ${style.backgroundImage};
    background-origin: ${style.backgroundOrigin};
    background-position: ${style.backgroundPosition};
    background-position-x: ${style.backgroundPositionX};
    background-position-y: ${style.backgroundPositionY};
    background-repeat: ${style.backgroundRepeat};
    background-size: ${style.backgroundSize};
    block-size: ${style.blockSize};
    border: ${style.border};
    border-block: ${style.borderBlock};
    border-block-color: ${style.borderBlockColor};
    border-block-end: ${style.borderBlockEnd};
    border-block-end-color: ${style.borderBlockEndColor};
    border-block-end-style: ${style.borderBlockEndStyle};
    border-block-end-width: ${style.borderBlockEndWidth};
    border-block-start: ${style.borderBlockStart};
    border-block-start-color: ${style.borderBlockStartColor};
    border-block-start-style: ${style.borderBlockStartStyle};
    border-block-start-width: ${style.borderBlockStartWidth};
    border-block-style: ${style.borderBlockStyle};
    border-block-width: ${style.borderBlockWidth};
    border-bottom: ${style.borderBottom};
    border-bottom-color: ${style.borderBottomColor};
    border-bottom-left-radius: ${style.borderBottomLeftRadius};
    border-bottom-right-radius: ${style.borderBottomRightRadius};
    border-bottom-style: ${style.borderBottomStyle};
    border-bottom-width: ${style.borderBottomWidth};
    border-collapse: ${style.borderCollapse};
    border-color: ${style.borderColor};
    border-end-end-radius: ${style.borderEndEndRadius};
    border-end-start-radius: ${style.borderEndStartRadius};
    border-image: ${style.borderImage};
    border-image-outset: ${style.borderImageOutset};
    border-image-repeat: ${style.borderImageRepeat};
    border-image-slice: ${style.borderImageSlice};
    border-image-source: ${style.borderImageSource};
    border-image-width: ${style.borderImageWidth};
    border-inline: ${style.borderInline};
    border-inline-color: ${style.borderInlineColor};
    border-inline-end: ${style.borderInlineEnd};
    border-inline-end-color: ${style.borderInlineEndColor};
    border-inline-end-style: ${style.borderInlineEndStyle};
    border-inline-end-width: ${style.borderInlineEndWidth};
    border-inline-start: ${style.borderInlineStart};
    border-inline-start-color: ${style.borderInlineStartColor};
    border-inline-start-style: ${style.borderInlineStartStyle};
    border-inline-start-width: ${style.borderInlineStartWidth};
    border-inline-style: ${style.borderInlineStyle};
    border-inline-width: ${style.borderInlineWidth};
    border-left: ${style.borderLeft};
    border-left-color: ${style.borderLeftColor};
    border-left-style: ${style.borderLeftStyle};
    border-left-width: ${style.borderLeftWidth};
    border-radius: ${style.borderRadius};
    border-right: ${style.borderRight};
    border-right-color: ${style.borderRightColor};
    border-right-style: ${style.borderRightStyle};
    border-right-width: ${style.borderRightWidth};
    border-spacing: ${style.borderSpacing};
    border-start-end-radius: ${style.borderStartEndRadius};
    border-start-start-radius: ${style.borderStartStartRadius};
    border-style: ${style.borderStyle};
    border-top: ${style.borderTop};
    border-top-color: ${style.borderTopColor};
    border-top-left-radius: ${style.borderTopLeftRadius};
    border-top-right-radius: ${style.borderTopRightRadius};
    border-top-style: ${style.borderTopStyle};
    border-top-width: ${style.borderTopWidth};
    border-width: ${style.borderWidth};
    bottom: ${style.bottom};
    box-decoration-break: ${style.boxDecorationBreak};
    box-reflect: ${style.boxReflect};
    box-shadow: ${style.boxShadow};
    box-sizing: ${style.boxSizing};
    break-after: ${style.breakAfter};
    break-before: ${style.breakBefore};
    break-inside: ${style.breakInside};
    caption-side: ${style.captionSide};
    caret-color: ${style.caretColor};
    clear: ${style.clear};
    clip: ${style.clip};
    clip-path: ${style.clipPath};
    color: ${style.color};
    color-scheme: ${style.colorScheme};
    column-count: ${style.columnCount};
    column-fill: ${style.columnFill};
    column-gap: ${style.columnGap};
    column-rule: ${style.columnRule};
    column-rule-color: ${style.columnRuleColor};
    column-rule-style: ${style.columnRuleStyle};
    column-rule-width: ${style.columnRuleWidth};
    column-span: ${style.columnSpan};
    column-width: ${style.columnWidth};
    columns: ${style.columns};
    counter-increment: ${style.counterIncrement};
    counter-reset: ${style.counterReset};
    counter-set: ${style.counterSet};
    direction: ${style.direction};
    display: ${style.display};
    empty-cells: ${style.emptyCells};
    filter: ${style.filter};
    flex: ${style.flex};
    flex-basis: ${style.flexBasis};
    flex-direction: ${style.flexDirection};
    flex-flow: ${style.flexFlow};
    flex-grow: ${style.flexGrow};
    flex-shrink: ${style.flexShrink};
    flex-wrap: ${style.flexWrap};
    float: ${style.float};
    font: ${style.font};    
    font-feature-settings: ${style.fontFeatureSettings};
    font-kerning: ${style.fontKerning};    
    font-size-adjust: ${style.fontSizeAdjust};
    font-stretch: ${style.fontStretch};
    font-style: ${style.fontStyle};
    font-variant: ${style.fontVariant};
    font-variant-caps: ${style.fontVariantCaps};
    font-weight: ${style.fontWeight};
    gap: ${style.gap};
    grid: ${style.grid};
    grid-area: ${style.gridArea};
    grid-auto-columns: ${style.gridAutoColumns};
    grid-auto-flow: ${style.gridAutoFlow};
    grid-auto-rows: ${style.gridAutoRows};
    grid-column: ${style.gridColumn};
    grid-column-end: ${style.gridColumnEnd};
    grid-column-start: ${style.gridColumnStart};
    grid-row: ${style.gridRow};
    grid-row-end: ${style.gridRowEnd};
    grid-row-start: ${style.gridRowStart};
    grid-template: ${style.gridTemplate};
    grid-template-areas: ${style.gridTemplateAreas};
    grid-template-columns: ${style.gridTemplateColumns};
    grid-template-rows: ${style.gridTemplateRows};
    hanging-punctuation: ${style.hangingPunctuation};
    height: ${style.height};
    hyphens: ${style.hyphens};
    hyphenate-character: ${style.hyphenateCharacter};
    image-rendering: ${style.imageRendering};
    inline-size: ${style.inlineSize};
    inset: ${style.inset};
    inset-block: ${style.insetBlock};
    inset-block-end: ${style.insetBlockEnd};
    inset-block-start: ${style.insetBlockStart};
    inset-inline: ${style.insetInline};
    inset-inline-end: ${style.insetInlineEnd};
    inset-inline-start: ${style.insetInlineStart};
    isolation: ${style.isolation};
    justify-content: ${style.justifyContent};
    justify-items: ${style.justifyItems};
    justify-self: ${style.justifySelf};
    left: ${style.left};
    letter-spacing: ${style.letterSpacing};
    line-height: ${style.lineHeight};
    list-style: ${style.listStyle};
    list-style-image: ${style.listStyleImage};
    list-style-position: ${style.listStylePosition};
    list-style-type: ${style.listStyleType};
    margin: ${style.margin};
    margin-block: ${style.marginBlock};
    margin-block-end: ${style.marginBlockEnd};
    margin-block-start: ${style.marginBlockStart};
    margin-bottom: ${style.marginBottom};
    margin-inline: ${style.marginInline};
    margin-inline-end: ${style.marginInlineEnd};
    margin-inline-start: ${style.marginInlineStart};
    margin-left: ${style.marginLeft};
    margin-right: ${style.marginRight};
    margin-top: ${style.marginTop};
    marker: ${style.marker};
    marker-end: ${style.markerEnd};
    marker-mid: ${style.markerMid};
    marker-start: ${style.markerStart};
    mask: ${style.mask};
    mask-clip: ${style.maskClip};
    mask-composite: ${style.maskComposite};
    mask-image: ${style.maskImage};
    mask-mode: ${style.maskMode};
    mask-origin: ${style.maskOrigin};
    mask-position: ${style.maskPosition};
    mask-repeat: ${style.maskRepeat};
    mask-size: ${style.maskSize};
    mask-type: ${style.maskType};
    max-block-size: ${style.maxBlockSize};
    max-height: ${style.maxHeight};
    max-inline-size: ${style.maxInlineSize};
    max-width: ${style.maxWidth};
    min-inline-size: ${style.minInlineSize};
    min-height: ${style.minHeight};
    min-width: ${style.minWidth};
    mix-blend-mode: ${style.mixBlendMode};
    object-position: ${style.objectPosition};
    offset: ${style.offset};
    offset-anchor: ${style.offsetAnchor};
    offset-distance: ${style.offsetDistance};
    offset-path: ${style.offsetPath};
    offset-position: ${style.offsetPosition};
    offset-rotate: ${style.offsetRotate};
    opacity: ${style.opacity};
    order: ${style.order};
    orphans: ${style.orphans};
    outline: ${style.outline};
    outline-color: ${style.outlineColor};
    outline-offset: ${style.outlineOffset};
    outline-style: ${style.outlineStyle};
    outline-width: ${style.outlineWidth};
    overflow: ${style.overflow};
    overflow-anchor: ${style.overflowAnchor};
    overflow-wrap: ${style.overflowWrap};
    overflow-x: ${style.overflowX};
    overflow-y: ${style.overflowY};
    overscroll-behavior: ${style.overscrollBehavior};
    overscroll-behavior-block: ${style.overscrollBehaviorBlock};
    overscroll-behavior-inline: ${style.overscrollBehaviorInline};
    overscroll-behavior-x: ${style.overscrollBehaviorX};
    overscroll-behavior-y: ${style.overscrollBehaviorY};
    padding: ${style.padding};
    padding-block: ${style.paddingBlock};
    padding-block-end: ${style.paddingBlockEnd};
    padding-block-start: ${style.paddingBlockStart};
    padding-bottom: ${style.paddingBottom};
    padding-inline: ${style.paddingInline};
    padding-inline-end: ${style.paddingInlineEnd};
    padding-inline-start: ${style.paddingInlineStart};
    padding-left: ${style.paddingLeft};
    padding-right: ${style.paddingRight};
    padding-top: ${style.paddingTop};    
    page-break-before: ${style.pageBreakBefore};
    page-break-inside: ${style.pageBreakInside};
    paint-order: ${style.paintOrder};
    perspective: ${style.perspective};
    perspective-origin: ${style.perspectiveOrigin};
    place-content: ${style.placeContent};
    place-items: ${style.placeItems};
    place-self: ${style.placeSelf};
    pointer-events: ${style.pointerEvents};
    position: ${style.position};
    resize: ${style.resize};
    right: ${style.right};
    rotate: ${style.rotate};
    row-gap: ${style.rowGap};
    scale: ${style.scale};    
    scroll-margin: ${style.scrollMargin};
    scroll-margin-block: ${style.scrollMarginBlock};
    scroll-margin-block-end: ${style.scrollMarginBlockEnd};
    scroll-margin-block-start: ${style.scrollMarginBlockStart};
    scroll-margin-bottom: ${style.scrollMarginBottom};
    scroll-margin-inline: ${style.scrollMarginInline};
    scroll-margin-inline-end: ${style.scrollMarginInlineEnd};
    scroll-margin-inline-start: ${style.scrollMarginInlineStart};
    scroll-margin-left: ${style.scrollMarginLeft};
    scroll-margin-right: ${style.scrollMarginRight};
    scroll-margin-top: ${style.scrollMarginTop};
    scroll-padding: ${style.scrollPadding};
    scroll-padding-block: ${style.scrollPaddingBlock};
    scroll-padding-block-end: ${style.scrollPaddingBlockEnd};
    scroll-padding-block-start: ${style.scrollPaddingBlockStart};
    scroll-padding-bottom: ${style.scrollPaddingBottom};
    scroll-padding-inline: ${style.scrollPaddingInline};
    scroll-padding-inline-end: ${style.scrollPaddingInlineEnd};
    scroll-padding-inline-start: ${style.scrollPaddingInlineStart};
    scroll-padding-left: ${style.scrollPaddingLeft};
    scroll-padding-right: ${style.scrollPaddingRight};
    scroll-padding-top: ${style.scrollPaddingTop};
    scroll-snap-align: ${style.scrollSnapAlign};
    scroll-snap-stop: ${style.scrollSnapStop};
    scroll-snap-type: ${style.scrollSnapType};
    scrollbar-color: ${style.scrollbarColor};
    shape-outside: ${style.shapeOutside};    
    table-layout: ${style.tableLayout};
    text-align: ${style.textAlign};
    text-align-last: ${style.textAlignLast};
    text-decoration: ${style.textDecoration};
    text-decoration-color: ${style.textDecorationColor};
    text-decoration-line: ${style.textDecorationLine};
    text-decoration-style: ${style.textDecorationStyle};
    text-decoration-thickness: ${style.textDecorationThickness};
    text-emphasis: ${style.textEmphasis};
    text-emphasis-color: ${style.textEmphasisColor};
    text-emphasis-position: ${style.textEmphasisPosition};
    text-emphasis-style: ${style.textEmphasisStyle};
    text-indent: ${style.textIndent};
    text-justify: ${style.textJustify};
    text-orientation: ${style.textOrientation};
    text-overflow: ${style.textOverflow};
    text-shadow: ${style.textShadow};
    text-transform: ${style.textTransform};
    text-underline-offset: ${style.textUnderlineOffset};
    text-underline-position: ${style.textUnderlinePosition};
    top: ${style.top};
    transform: ${style.transform};
    transform-origin: ${style.transformOrigin};
    transform-style: ${style.transformStyle};
    transition: ${style.transition};
    transition-delay: ${style.transitionDelay};
    transition-duration: ${style.transitionDuration};
    transition-property: ${style.transitionProperty};
    transition-timing-function:  ${style.transitionTimingFunction};
    translate: ${style.translate};
    unicode-bidi: ${style.unicodeBidi};
    user-select: ${style.userSelect};
    vertical-align: ${style.verticalAlign};
    visibility: ${style.visibility};
    white-space: ${style.whiteSpace};
    widows: ${style.widows};
    width: ${style.width};
    word -break: ${style.wordBreak};
    word-spacing: ${style.wordSpacing};
    word-wrap: ${style.wordWrap};
    writing-mode: ${style.writingMode};
    z-index: ${style.zIndex};
    zoom: ${style.zoom};
} `;
        cssContent += cssString + "\n";
    });

    // Gabungkan HTML dan CSS dalam file
    downloadFile("project.html", htmlContent);
    downloadFile("styles.css", cssContent);
}

function downloadFile(fileName, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
}

let undoStack = []; // Menyimpan status untuk undo
let redoStack = []; // Menyimpan status untuk redo

// Fungsi untuk menyimpan status elemen
function saveState() {
    const state = canvas.innerHTML; // Simpan HTML kanvas saat ini
    undoStack.push(state); // Tambahkan ke stack undo
    redoStack = []; // Kosongkan redo saat ada perubahan baru
}

// Fungsi Undo
function undo() {
    if (undoStack.length > 0) {
        const lastState = undoStack.pop(); // Ambil status terakhir dari undo
        redoStack.push(canvas.innerHTML); // Simpan status saat ini ke redo
        canvas.innerHTML = lastState; // Kembalikan ke status sebelumnya
    } else {
        alert("Tidak ada aksi untuk di-undo!");
    }
}

// Fungsi Redo
function redo() {
    if (redoStack.length > 0) {
        const nextState = redoStack.pop(); // Ambil status terakhir dari redo
        undoStack.push(canvas.innerHTML); // Simpan status saat ini ke undo
        canvas.innerHTML = nextState; // Terapkan status redo
    } else {
        alert("Tidak ada aksi untuk di-redo!");
    }
}

// Tambahkan event listener untuk tombol undo dan redo
document.getElementById("undoButton").addEventListener("click", undo);
document.getElementById("redoButton").addEventListener("click", redo);

// Contoh: Simpan status setiap kali ada perubahan pada elemen
canvas.addEventListener("click", saveState);
canvas.addEventListener("input", saveState); // Simpan saat ada perubahan input
