import {
    inputs, canvas, button, input, div, h, accentcolor
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
    , zoom
    , nav
    , nav2
} from './Kumpulan_DOM.js';
import { openNav, closeNav, openNav2, closeNav2 } from './Navigation.js';
import { search } from './Searching.js';
import { arrows } from './Arrow.js';
//bagian navigation
window.closeNav = closeNav;
window.closeNav2 = closeNav2;
window.closeNav();
window.closeNav2();
nav.addEventListener("click", openNav)
nav2.addEventListener("click", openNav2)


//bagian search
window.search = search;
window.search();


// Dragging functionality
let selectedElement = null;



//yang bagian ini digunakan untuk melakukan perubahan pada properti objek yang sesuai id ketika dilakukan suatu input 
inputs.forEach(input => {
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

// intinya yang bagian ini digunakan untuk menampilakn nilai yang sudah diterapkan pada element yang dipilih
canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        selectedElement = event.target;
        const computedStyle = window.getComputedStyle(selectedElement); // Gunakan computedStyle
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

//klo ini digunakan untuk penambahan element baru 
div.addEventListener("click", () => {
    //bagian ini digunakna untuk mengambil data-element yang akan menjadi status tag HTML-nya
    const elementType = div.getAttribute("data-element");
    const newdiv = document.createElement(elementType);
    newdiv.classList.add("editable");
    newdiv.setAttribute("tabindex", "0");
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
        newh1.setAttribute("tabindex", "0");
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

canvas.addEventListener("keydown", (keyEvent) => {
    if (keyEvent.target.classList.contains("editable")) {
        if (keyEvent.key == "Backspace" || keyEvent.key === "Delete") {
            deleteElement(keyEvent.target);
        }
    }
});
function deleteElement(target) {
    if (target) {
        console.log("Menghapus elemen:", target);
        target.remove();
    } else {
        console.log("TIdak ada yang dihapus")
    }
}
canvas.addEventListener("click", (event) => {
    if (event.target.classList.contains("editable")) {
        arrows(event.target)
    }

});

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

    // Default CSS properti untuk perbandingan
    const defaultStyles = document.createElement("div");
    document.body.appendChild(defaultStyles); // Tambahkan elemen sementara ke body untuk mengambil default styles
    const defaultComputedStyles = window.getComputedStyle(defaultStyles);
    Array.from(elements).forEach((element, index) => {
        // Generate HTML
        const elementTag = element.tagName.toLowerCase();
        htmlContent += `<${elementTag} class="class-${index}">${element.innerHTML}</${elementTag}>\n`;

        // Generate CSS with custom styles
        const styles = window.getComputedStyle(element);
        let cssString = `.class-${index} {\n`;

        for (let i = 0; i < styles.length; i++) {
            const styleName = styles[i]; // Get property name
            const styleValue = styles.getPropertyValue(styleName); // Get property value
            const defaultValue = defaultComputedStyles.getPropertyValue(styleName); // Get default value

            if (styleValue !== defaultValue && styleValue !== "") {
                cssString += `    ${styleName}: ${styleValue};\n`;
            }
        }
        cssString += `accent - color:  ${styles.getPropertyValue("accentColor")};`;
        cssString += `align - content: ${styles.getPropertyValue("alignContent")};`;
        cssString += `align - items: ${styles.getPropertyValue("alignItems")};`;
        cssString += `align - self: ${styles.getPropertyValue("alignSelf")};`;
        cssString += `all: ${styles.getPropertyValue("all")};`;
        cssString += `animation: ${styles.getPropertyValue("animation")};`;
        cssString += `animation - delay: ${styles.getPropertyValue("animationDelay")};`;
        cssString += `animation - direction: ${styles.getPropertyValue("animationDirection")};`;
        cssString += `animation - duration: ${styles.getPropertyValue("animationDuration")};`;
        cssString += `animation - fill - mode: ${styles.getPropertyValue("animationFillMode")};`;
        cssString += `animation - iteration - count: ${styles.getPropertyValue("animationIterationCount")};`;
        cssString += `animation - name: ${styles.getPropertyValue("animationName")};`;
        cssString += `animation - play - state: ${styles.getPropertyValue("animationPlayState")};`;
        cssString += `animation - timing - function: $ { styles.getPropertyValue("animationTimingFunction") };`;
        cssString += `aspect - ratio: ${styles.getPropertyValue("aspectRatio")};`;
        cssString += `backdrop - filter: ${styles.getPropertyValue("backdropFilter")};`;
        cssString += `backface - visibility: ${styles.getPropertyValue("backfaceVisibility")};`;
        cssString += `background: ${styles.getPropertyValue("background")};`;
        cssString += `background - attachment: ${styles.getPropertyValue("backgroundAttachment")};`;
        cssString += `background - blend - mode: ${styles.getPropertyValue("backgroundBlendMode")};`;
        cssString += `background - clip: ${styles.getPropertyValue("backgroundClip")};`;
        cssString += `background - color: ${styles.getPropertyValue("backgroundColor")};`;
        cssString += `background - image: ${styles.getPropertyValue("backgroundImage")};`;
        cssString += `background - origin: ${styles.getPropertyValue("backgroundOrigin")};`;
        cssString += `background - position: ${styles.getPropertyValue("backgroundPosition")};`;
        cssString += `background - position - x: ${styles.getPropertyValue("backgroundPositionX")};`;
        cssString += `background - position - y: ${styles.getPropertyValue("backgroundPositionY")};`;
        cssString += `background - repeat: ${styles.getPropertyValue("backgroundRepeat")};`;
        cssString += `background - size: ${styles.getPropertyValue("backgroundSize")};`;
        cssString += `block - size: ${styles.getPropertyValue("blockSize")};`;
        cssString += `border: ${styles.getPropertyValue("border")};`;
        cssString += `border - block: ${styles.getPropertyValue("borderBlock")};`;
        cssString += `border - block - color: ${styles.getPropertyValue("borderBlockColor")};`;
        cssString += `border - block - end: ${styles.getPropertyValue("borderBlockEnd")};`;
        cssString += `border - block - end - color: ${styles.getPropertyValue("borderBlockEndColor")};`;
        cssString += `border - block - end - style: ${styles.getPropertyValue("borderBlockEndStyle")};`;
        cssString += `border - block - end - width: ${styles.getPropertyValue("borderBlockEndWidth")};`;
        cssString += `border - block - start: ${styles.getPropertyValue("borderBlockStart")};`;
        cssString += `border - block - start - color: ${styles.getPropertyValue("borderBlockStartColor")};`;
        cssString += `border - block - start - style: ${styles.getPropertyValue("borderBlockStartStyle")};`;
        cssString += `border - block - start - width: ${styles.getPropertyValue("borderBlockStartWidth")};`;
        cssString += `border - block - style: ${styles.getPropertyValue("borderBlockStyle")};`;
        cssString += `border - block - width: ${styles.getPropertyValue("borderBlockWidth")};`;
        cssString += `border - bottom: ${styles.getPropertyValue("borderBottom")};`;
        cssString += `border - bottom - color: ${styles.getPropertyValue("borderBottomColor")};`;
        cssString += `border - bottom - left - radius: ${styles.getPropertyValue("borderBottomLeftRadius")};`;
        cssString += `border - bottom - right - radius: ${styles.getPropertyValue("borderBottomRightRadius")};`;
        cssString += `border - bottom - style: ${styles.getPropertyValue("borderBottomStyle")};`;
        cssString += `border - bottom - width: ${styles.getPropertyValue("borderBottomWidth")};`;
        cssString += `border - collapse: ${styles.getPropertyValue("borderCollapse")};`;
        cssString += `border - color: ${styles.getPropertyValue("borderColor")};`;
        cssString += `border - end - end - radius: ${styles.getPropertyValue("borderEndEndRadius")};`;
        cssString += `border - end - start - radius: ${styles.getPropertyValue("borderEndStartRadius")};`;
        cssString += `border - image: ${styles.getPropertyValue("borderImage")};`;
        cssString += `border - image - outset: ${styles.getPropertyValue("borderImageOutset")};`;
        cssString += `border - image - repeat: ${styles.getPropertyValue("borderImageRepeat")};`;
        cssString += `border - image - slice: ${styles.getPropertyValue("borderImageSlice")};`;
        cssString += `border - image - source: ${styles.getPropertyValue("borderImageSource")};`;
        cssString += `border - image - width: ${styles.getPropertyValue("borderImageWidth")};`;
        cssString += `border - inline: ${styles.getPropertyValue("borderInline")};`;
        cssString += `border - inline - color: ${styles.getPropertyValue("borderInlineColor")};`;
        cssString += `border - inline - end: ${styles.getPropertyValue("borderInlineEnd")};`;
        cssString += `border - inline - end - color: ${styles.getPropertyValue("borderInlineEndColor")};`;
        cssString += `border - inline - end - style: ${styles.getPropertyValue("borderInlineEndStyle")};`;
        cssString += `border - inline - end - width: ${styles.getPropertyValue("borderInlineEndWidth")};`;
        cssString += `border - inline - start: ${styles.getPropertyValue("borderInlineStart")};`;
        cssString += `border - inline - start - color: ${styles.getPropertyValue("borderInlineStartColor")};`;
        cssString += `border - inline - start - style: ${styles.getPropertyValue("borderInlineStartStyle")};`;
        cssString += `border - inline - start - width: ${styles.getPropertyValue("borderInlineStartWidth")};`;
        cssString += `border - inline - style: ${styles.getPropertyValue("borderInlineStyle")};`;
        cssString += `border - inline - width: ${styles.getPropertyValue("borderInlineWidth")};`;
        cssString += `border - left: ${styles.getPropertyValue("borderLeft")};`;
        cssString += `border - left - color: ${styles.getPropertyValue("borderLeftColor")};`;
        cssString += `border - left - style: ${styles.getPropertyValue("borderLeftStyle")};`;
        cssString += `border - left - width: ${styles.getPropertyValue("borderLeftWidth")};`;
        cssString += `border - radius: ${styles.getPropertyValue("borderRadius")};`;
        cssString += `border - right: ${styles.getPropertyValue("borderRight")};`;
        cssString += `border - right - color: ${styles.getPropertyValue("borderRightColor")};`;
        cssString += `border - right - style: ${styles.getPropertyValue("borderRightStyle")};`;
        cssString += `border - right - width: ${styles.getPropertyValue("borderRightWidth")};`;
        cssString += `border - spacing: ${styles.getPropertyValue("borderSpacing")};`;
        cssString += `border - start - end - radius: ${styles.getPropertyValue("borderStartEndRadius")};`;
        cssString += `border - start - start - radius: ${styles.getPropertyValue("borderStartStartRadius")};`;
        cssString += `border - style: ${styles.getPropertyValue("borderStyle")};`;
        cssString += `border - top: ${styles.getPropertyValue("borderTop")};`;
        cssString += `border - top - color: ${styles.getPropertyValue("borderTopColor")};`;
        cssString += `border - top - left - radius: ${styles.getPropertyValue("borderTopLeftRadius")};`;
        cssString += `border - top - right - radius: ${styles.getPropertyValue("borderTopRightRadius")};`;
        cssString += `border - top - style: ${styles.getPropertyValue("borderTopStyle")};`;
        cssString += `border - top - width: ${styles.getPropertyValue("borderTopWidth")};`;
        cssString += `border - width: ${styles.getPropertyValue("borderWidth")};`;
        cssString += `bottom: ${styles.getPropertyValue("bottom")};`;
        cssString += `box - decoration -break: ${styles.getPropertyValue("boxDecorationBreak")};`;
        cssString += `box - reflect: ${styles.getPropertyValue("boxReflect")};`;
        cssString += `box - shadow: ${styles.getPropertyValue("boxShadow")};`;
        cssString += `box - sizing: ${styles.getPropertyValue("boxSizing")};`;
        cssString += `break-after: ${styles.getPropertyValue("breakAfter")};`;
        cssString += `break-before: ${styles.getPropertyValue("breakBefore")};`;
        cssString += `break-inside: ${styles.getPropertyValue("breakInside")};`;
        cssString += `caption - side: ${styles.getPropertyValue("captionSide")};`;
        cssString += `caret - color: ${styles.getPropertyValue("caretColor")};`;
        cssString += `clear: ${styles.getPropertyValue("clear")};`;
        cssString += `clip: ${styles.getPropertyValue("clip")};`;
        cssString += `clip - path: ${styles.getPropertyValue("clipPath")};`;
        cssString += `color: ${styles.getPropertyValue("color")};`;
        cssString += `color - scheme: ${styles.getPropertyValue("colorScheme")};`;
        cssString += `column - count: ${styles.getPropertyValue("columnCount")};`;
        cssString += `column - fill: ${styles.getPropertyValue("columnFill")};`;
        cssString += `column - gap: ${styles.getPropertyValue("columnGap")};`;
        cssString += `column - rule: ${styles.getPropertyValue("columnRule")};`;
        cssString += `column - rule - color: ${styles.getPropertyValue("columnRuleColor")};`;
        cssString += `column - rule - style: ${styles.getPropertyValue("columnRuleStyle")};`;
        cssString += `column - rule - width: ${styles.getPropertyValue("columnRuleWidth")};`;
        cssString += `column - span: ${styles.getPropertyValue("columnSpan")};`;
        cssString += `column - width: ${styles.getPropertyValue("columnWidth")};`;
        cssString += `columns: ${styles.getPropertyValue("columns")};`;
        cssString += `counter - increment: ${styles.getPropertyValue("counterIncrement")};`;
        cssString += `counter - reset: ${styles.getPropertyValue("counterReset")};`;
        cssString += `counter - set: ${styles.getPropertyValue("counterSet")};`;
        cssString += `direction: ${styles.getPropertyValue("direction")};`;
        cssString += `display: ${styles.getPropertyValue("display")};`;
        cssString += `empty - cells: ${styles.getPropertyValue("emptyCells")};`;
        cssString += `filter: ${styles.getPropertyValue("filter")};`;
        cssString += `flex: ${styles.getPropertyValue("flex")};`;
        cssString += `flex - basis: ${styles.getPropertyValue("flexBasis")};`;
        cssString += `flex - direction: ${styles.getPropertyValue("flexDirection")};`;
        cssString += `flex - flow: ${styles.getPropertyValue("flexFlow")};`;
        cssString += `flex - grow: ${styles.getPropertyValue("flexGrow")};`;
        cssString += `flex - shrink: ${styles.getPropertyValue("flexShrink")};`;
        cssString += `flex - wrap: ${styles.getPropertyValue("flexWrap")};`;
        cssString += `float: ${styles.getPropertyValue("float")};`;
        cssString += `font: ${styles.getPropertyValue("font")};`;
        cssString += `font - feature - settings: ${styles.getPropertyValue("fontFeatureSettings")};`;
        cssString += `font - kerning: ${styles.getPropertyValue("fontKerning  ")};`;
        cssString += `font - size - adjust: ${styles.getPropertyValue("fontSizeAdjust")};`;
        cssString += `font - stretch: ${styles.getPropertyValue("fontStretch")};`;
        cssString += `font - style: ${styles.getPropertyValue("fontStyle")};`;
        cssString += `font - variant: ${styles.getPropertyValue("fontVariant")};`;
        cssString += `font - variant - caps: ${styles.getPropertyValue("fontVariantCaps")};`;
        cssString += `font - weight: ${styles.getPropertyValue("fontWeight")};`;
        cssString += `gap: ${styles.getPropertyValue("gap")};`;
        cssString += `grid: ${styles.getPropertyValue("grid")};`;
        cssString += `grid - area: ${styles.getPropertyValue("gridArea")};`;
        cssString += `grid - auto - columns: ${styles.getPropertyValue("gridAutoColumns")};`;
        cssString += `grid - auto - flow: ${styles.getPropertyValue("gridAutoFlow")};`;
        cssString += `grid - auto - rows: ${styles.getPropertyValue("gridAutoRows")};`;
        cssString += `grid - column: ${styles.getPropertyValue("gridColumn")};`;
        cssString += `grid - column - end: ${styles.getPropertyValue("gridColumnEnd")};`;
        cssString += `grid - column - start: ${styles.getPropertyValue("gridColumnStart")};`;
        cssString += `grid - row: ${styles.getPropertyValue("gridRow")};`;
        cssString += `grid - row - end: ${styles.getPropertyValue("gridRowEnd")};`;
        cssString += `grid - row - start: ${styles.getPropertyValue("gridRowStart")};`;
        cssString += `grid - template: ${styles.getPropertyValue("gridTemplate")};`;
        cssString += `grid - template - areas: ${styles.getPropertyValue("gridTemplateAreas")};`;
        cssString += `grid - template - columns: ${styles.getPropertyValue("gridTemplateColumns")};`;
        cssString += `grid - template - rows: ${styles.getPropertyValue("gridTemplateRows")};`;
        cssString += `hanging - punctuation: ${styles.getPropertyValue("hangingPunctuation")};`;
        cssString += `height: ${styles.getPropertyValue("height")};`;
        cssString += `hyphens: ${styles.getPropertyValue("hyphens")};`;
        cssString += `hyphenate - character: ${styles.getPropertyValue("hyphenateCharacter")};`;
        cssString += `image - rendering: ${styles.getPropertyValue("imageRendering")};`;
        cssString += `inline - size: ${styles.getPropertyValue("inlineSize")};`;
        cssString += `inset: ${styles.getPropertyValue("inset")};`;
        cssString += `inset - block: ${styles.getPropertyValue("insetBlock")};`;
        cssString += `inset - block - end: ${styles.getPropertyValue("insetBlockEnd")};`;
        cssString += `inset - block - start: ${styles.getPropertyValue("insetBlockStart")};`;
        cssString += `inset - inline: ${styles.getPropertyValue("insetInline")};`;
        cssString += `inset - inline - end: ${styles.getPropertyValue("insetInlineEnd")};`;
        cssString += `inset - inline - start: ${styles.getPropertyValue("insetInlineStart")};`;
        cssString += `isolation: ${styles.getPropertyValue("isolation")};`;
        cssString += `justify - content: ${styles.getPropertyValue("justifyContent")};`;
        cssString += `justify - items: ${styles.getPropertyValue("justifyItems")};`;
        cssString += `justify - self: ${styles.getPropertyValue("justifySelf")};`;
        cssString += `left: ${styles.getPropertyValue("left")};`;
        cssString += `letter - spacing: ${styles.getPropertyValue("letterSpacing")};`;
        cssString += `line - height: ${styles.getPropertyValue("lineHeight")};`;
        cssString += `list - style: ${styles.getPropertyValue("listStyle")};`;
        cssString += `list - style - image: ${styles.getPropertyValue("listStyleImage")};`;
        cssString += `list - style - position: ${styles.getPropertyValue("listStylePosition")};`;
        cssString += `list - style - type: ${styles.getPropertyValue("listStyleType")};`;
        cssString += `margin: ${styles.getPropertyValue("margin")};`;
        cssString += `margin - block: ${styles.getPropertyValue("marginBlock")};`;
        cssString += `margin - block - end: ${styles.getPropertyValue("marginBlockEnd")};`;
        cssString += `margin - block - start: ${styles.getPropertyValue("marginBlockStart")};`;
        cssString += `margin - bottom: ${styles.getPropertyValue("marginBottom")};`;
        cssString += `margin - inline: ${styles.getPropertyValue("marginInline")};`;
        cssString += `margin - inline - end: ${styles.getPropertyValue("marginInlineEnd")};`;
        cssString += `margin - inline - start: ${styles.getPropertyValue("marginInlineStart")};`;
        cssString += `margin - left: ${styles.getPropertyValue("marginLeft")};`;
        cssString += `margin - right: ${styles.getPropertyValue("marginRight")};`;
        cssString += `margin - top: ${styles.getPropertyValue("marginTop")};`;
        cssString += `marker: ${styles.getPropertyValue("marker")};`;
        cssString += `marker - end: ${styles.getPropertyValue("markerEnd")};`;
        cssString += `marker - mid: ${styles.getPropertyValue("markerMid")};`;
        cssString += `marker - start: ${styles.getPropertyValue("markerStart")};`;
        cssString += `mask: ${styles.getPropertyValue("mask")};`;
        cssString += `mask - clip: ${styles.getPropertyValue("maskClip")};`;
        cssString += `mask - composite: ${styles.getPropertyValue("maskComposite")};`;
        cssString += `mask - image: ${styles.getPropertyValue("maskImage")};`;
        cssString += `mask - mode: ${styles.getPropertyValue("maskMode")};`;
        cssString += `mask - origin: ${styles.getPropertyValue("maskOrigin")};`;
        cssString += `mask - position: ${styles.getPropertyValue("maskPosition")};`;
        cssString += `mask - repeat: ${styles.getPropertyValue("maskRepeat")};`;
        cssString += `mask - size: ${styles.getPropertyValue("maskSize")};`;
        cssString += `mask - type: ${styles.getPropertyValue("maskType")};`;
        cssString += `max - block - size: ${styles.getPropertyValue("maxBlockSize")};`;
        cssString += `max - height: ${styles.getPropertyValue("maxHeight")};`;
        cssString += `max - inline - size: ${styles.getPropertyValue("maxInlineSize")};`;
        cssString += `max - width: ${styles.getPropertyValue("maxWidth")};`;
        cssString += `min - inline - size: ${styles.getPropertyValue("minInlineSize")};`;
        cssString += `min - height: ${styles.getPropertyValue("minHeight")};`;
        cssString += `min - width: ${styles.getPropertyValue("minWidth")};`;
        cssString += `mix - blend - mode: ${styles.getPropertyValue("mixBlendMode")};`;
        cssString += `object - position: ${styles.getPropertyValue("objectPosition")};`;
        cssString += `offset: ${styles.getPropertyValue("offset")};`;
        cssString += `offset - anchor: ${styles.getPropertyValue("offsetAnchor")};`;
        cssString += `offset - distance: ${styles.getPropertyValue("offsetDistance")};`;
        cssString += `offset - path: ${styles.getPropertyValue("offsetPath")};`;
        cssString += `offset - position: ${styles.getPropertyValue("offsetPosition")};`;
        cssString += `offset - rotate: ${styles.getPropertyValue("offsetRotate")};`;
        cssString += `opacity: ${styles.getPropertyValue("opacity")};`;
        cssString += `order: ${styles.getPropertyValue("order")};`;
        cssString += `orphans: ${styles.getPropertyValue("orphans")};`;
        cssString += `outline: ${styles.getPropertyValue("outline")};`;
        cssString += `outline - color: ${styles.getPropertyValue("outlineColor")};`;
        cssString += `outline - offset: ${styles.getPropertyValue("outlineOffset")};`;
        cssString += `outline - style: ${styles.getPropertyValue("outlineStyle")};`;
        cssString += `outline - width: ${styles.getPropertyValue("outlineWidth")};`;
        cssString += `overflow: ${styles.getPropertyValue("overflow")};`;
        cssString += `overflow - anchor: ${styles.getPropertyValue("overflowAnchor")};`;
        cssString += `overflow - wrap: ${styles.getPropertyValue("overflowWrap")};`;
        cssString += `overflow - x: ${styles.getPropertyValue("overflowX")};`;
        cssString += `overflow - y: ${styles.getPropertyValue("overflowY")};`;
        cssString += `overscroll - behavior: ${styles.getPropertyValue("overscrollBehavior")};`;
        cssString += `overscroll - behavior - block: ${styles.getPropertyValue("overscrollBehaviorBlock")};`;
        cssString += `overscroll - behavior - inline: ${styles.getPropertyValue("overscrollBehaviorInline")};`;
        cssString += `overscroll - behavior - x: ${styles.getPropertyValue("overscrollBehaviorX")};`;
        cssString += `overscroll - behavior - y: ${styles.getPropertyValue("overscrollBehaviorY")};`;
        cssString += `padding: ${styles.getPropertyValue("padding")};`;
        cssString += `padding - block: ${styles.getPropertyValue("paddingBlock")};`;
        cssString += `padding - block - end: ${styles.getPropertyValue("paddingBlockEnd")};`;
        cssString += `padding - block - start: ${styles.getPropertyValue("paddingBlockStart")};`;
        cssString += `padding - bottom: ${styles.getPropertyValue("paddingBottom")};`;
        cssString += `padding - inline: ${styles.getPropertyValue("paddingInline")};`;
        cssString += `padding - inline - end: ${styles.getPropertyValue("paddingInlineEnd")};`;
        cssString += `padding - inline - start: ${styles.getPropertyValue("paddingInlineStart")};`;
        cssString += `padding - left: ${styles.getPropertyValue("paddingLeft")};`;
        cssString += `padding - right: ${styles.getPropertyValue("paddingRight")};`;
        cssString += `padding - top: ${styles.getPropertyValue("paddingTop  ")};`;
        cssString += `page -break-before: ${styles.getPropertyValue("pageBreakBefore")};`;
        cssString += `page -break-inside: ${styles.getPropertyValue("pageBreakInside")};`;
        cssString += `paint - order: ${styles.getPropertyValue("paintOrder")};`;
        cssString += `perspective: ${styles.getPropertyValue("perspective")};`;
        cssString += `perspective - origin: ${styles.getPropertyValue("perspectiveOrigin")};`;
        cssString += `place - content: ${styles.getPropertyValue("placeContent")};`;
        cssString += `place - items: ${styles.getPropertyValue("placeItems")};`;
        cssString += `place - self: ${styles.getPropertyValue("placeSelf")};`;
        cssString += `pointer - events: ${styles.getPropertyValue("pointerEvents")};`;
        cssString += `position: ${styles.getPropertyValue("position")};`;
        cssString += `resize: ${styles.getPropertyValue("resize")};`;
        cssString += `right: ${styles.getPropertyValue("right")};`;
        cssString += `rotate: ${styles.getPropertyValue("rotate")};`;
        cssString += `row - gap: ${styles.getPropertyValue("rowGap")};`;
        cssString += `scale: ${styles.getPropertyValue("scale")};`;
        cssString += `scroll - margin: ${styles.getPropertyValue("scrollMargin")};`;
        cssString += `scroll - margin - block: ${styles.getPropertyValue("scrollMarginBlock")};`;
        cssString += `scroll - margin - block - end: ${styles.getPropertyValue("scrollMarginBlockEnd")};`;
        cssString += `scroll - margin - block - start: ${styles.getPropertyValue("scrollMarginBlockStart")};`;
        cssString += `scroll - margin - bottom: ${styles.getPropertyValue("scrollMarginBottom")};`;
        cssString += `scroll - margin - inline: ${styles.getPropertyValue("scrollMarginInline")};`;
        cssString += `scroll - margin - inline - end: ${styles.getPropertyValue("scrollMarginInlineEnd")};`;
        cssString += `scroll - margin - inline - start: ${styles.getPropertyValue("scrollMarginInlineStart")};`;
        cssString += `scroll - margin - left: ${styles.getPropertyValue("scrollMarginLeft")};`;
        cssString += `scroll - margin - right: ${styles.getPropertyValue("scrollMarginRight")};`;
        cssString += `scroll - margin - top: ${styles.getPropertyValue("scrollMarginTop")};`;
        cssString += `scroll - padding: ${styles.getPropertyValue("scrollPadding")};`;
        cssString += `scroll - padding - block: ${styles.getPropertyValue("scrollPaddingBlock")};`;
        cssString += `scroll - padding - block - end: ${styles.getPropertyValue("scrollPaddingBlockEnd")};`;
        cssString += `scroll - padding - block - start: ${styles.getPropertyValue("scrollPaddingBlockStart")};`;
        cssString += `scroll - padding - bottom: ${styles.getPropertyValue("scrollPaddingBottom")};`;
        cssString += `scroll - padding - inline: ${styles.getPropertyValue("scrollPaddingInline")};`;
        cssString += `scroll - padding - inline - end: ${styles.getPropertyValue("scrollPaddingInlineEnd")};`;
        cssString += `scroll - padding - inline - start: ${styles.getPropertyValue("scrollPaddingInlineStart")};`;
        cssString += `scroll - padding - left: ${styles.getPropertyValue("scrollPaddingLeft")};`;
        cssString += `scroll - padding - right: ${styles.getPropertyValue("scrollPaddingRight")};`;
        cssString += `scroll - padding - top: ${styles.getPropertyValue("scrollPaddingTop")};`;
        cssString += `scroll - snap - align: ${styles.getPropertyValue("scrollSnapAlign")};`;
        cssString += `scroll - snap - stop: ${styles.getPropertyValue("scrollSnapStop")};`;
        cssString += `scroll - snap - type: ${styles.getPropertyValue("scrollSnapType")};`;
        cssString += `scrollbar - color: ${styles.getPropertyValue("scrollbarColor")};`;
        cssString += `shape - outside: ${styles.getPropertyValue("shapeOutside")};`;
        cssString += `table - layout: ${styles.getPropertyValue("tableLayout")};`;
        cssString += `text - align: ${styles.getPropertyValue("textAlign")};`;
        cssString += `text - align - last: ${styles.getPropertyValue("textAlignLast")};`;
        cssString += `text - decoration: ${styles.getPropertyValue("textDecoration")};`;
        cssString += `text - decoration - color: ${styles.getPropertyValue("textDecorationColor")};`;
        cssString += `text - decoration - line: ${styles.getPropertyValue("textDecorationLine")};`;
        cssString += `text - decoration - style: ${styles.getPropertyValue("textDecorationStyle")};`;
        cssString += `text - decoration - thickness: ${styles.getPropertyValue("textDecorationThickness")};`;
        cssString += `text - emphasis: ${styles.getPropertyValue("textEmphasis")};`;
        cssString += `text - emphasis - color: ${styles.getPropertyValue("textEmphasisColor")};`;
        cssString += `text - emphasis - position: ${styles.getPropertyValue("textEmphasisPosition")};`;
        cssString += `text - emphasis - style: ${styles.getPropertyValue("textEmphasisStyle")};`;
        cssString += `text - indent: ${styles.getPropertyValue("textIndent")};`;
        cssString += `text - justify: ${styles.getPropertyValue("textJustify")};`;
        cssString += `text - orientation: ${styles.getPropertyValue("textOrientation")};`;
        cssString += `text - overflow: ${styles.getPropertyValue("textOverflow")};`;
        cssString += `text - shadow: ${styles.getPropertyValue("textShadow")};`;
        cssString += `text - transform: ${styles.getPropertyValue("textTransform")};`;
        cssString += `text - underline - offset: ${styles.getPropertyValue("textUnderlineOffset")};`;
        cssString += `text - underline - position: ${styles.getPropertyValue("textUnderlinePosition")};`;
        cssString += `top: ${styles.getPropertyValue("top")};`;
        cssString += `transform: ${styles.getPropertyValue("transform")};`;
        cssString += `transform - origin: ${styles.getPropertyValue("transformOrigin")};`;
        cssString += `transform - style: ${styles.getPropertyValue("transformStyle")};`;
        cssString += `transition: ${styles.getPropertyValue("transition")};`;
        cssString += `transition - delay: ${styles.getPropertyValue("transitionDelay")};`;
        cssString += `transition - duration: ${styles.getPropertyValue("transitionDuration")};`;
        cssString += `transition - property: ${styles.getPropertyValue("transitionProperty")};`;
        cssString += `transition - timing - function: $ { styles.getPropertyValue("transitionTimingFunction") };`;
        cssString += `translate: ${styles.getPropertyValue("translate")};`;
        cssString += `unicode - bidi: ${styles.getPropertyValue("unicodeBidi")};`;
        cssString += `user - select: ${styles.getPropertyValue("userSelect")};`;
        cssString += `vertical - align: ${styles.getPropertyValue("verticalAlign")};`;
        cssString += `visibility: ${styles.getPropertyValue("visibility")};`;
        cssString += `white - space: ${styles.getPropertyValue("whiteSpace")};`;
        cssString += `widows: ${styles.getPropertyValue("widows")};`;
        cssString += `width: ${styles.getPropertyValue("width")};`;
        cssString += `word -break: ${styles.getPropertyValue("wordBreak")};`;
        cssString += `word - spacing: ${styles.getPropertyValue("wordSpacing")};`;
        cssString += `word - wrap: ${styles.getPropertyValue("wordWrap")};`;
        cssString += `writing - mode: ${styles.getPropertyValue("writingMode")};`;
        cssString += `z - index: ${styles.getPropertyValue("zIndex")};`;
        cssString += `zoom: ${styles.getPropertyValue("zoom")};`;
        cssString += `} \n`;
        cssContent += cssString;
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
