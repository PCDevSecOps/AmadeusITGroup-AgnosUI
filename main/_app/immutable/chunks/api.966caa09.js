const e=[{name:"ariaLabelHandle",description:"Return the value for the 'aria-label' attribute for the handle",fileName:"core/lib/slider.ts",start:{line:142,character:2,position:3168},end:{line:142,character:81,position:3247},type:"(value: number, sortedIndex: number, index: number) => string",defaultValue:"(value, _index) => '' + value"},{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string",defaultValue:"''"},{name:"disabled",description:"If `true` slider value cannot be changed and the slider cannot be focused",fileName:"core/lib/slider.ts",start:{line:65,character:2,position:1554},end:{line:65,character:20,position:1572},type:"boolean",defaultValue:"false"},{name:"max",description:"Maximum value that can be assigned to the slider",fileName:"core/lib/slider.ts",start:{line:50,character:2,position:1275},end:{line:50,character:14,position:1287},type:"number",defaultValue:"100"},{name:"min",description:"Minimum value that can be assigned to the slider",fileName:"core/lib/slider.ts",start:{line:45,character:2,position:1197},end:{line:45,character:14,position:1209},type:"number",defaultValue:"0"},{name:"onValuesChange",description:`An event emitted when slider values are changed

Event payload equals to the updated slider values`,fileName:"core/lib/slider.ts",start:{line:149,character:2,position:3370},end:{line:149,character:45,position:3413},type:"(values: number[]) => void",defaultValue:"noop"},{name:"readonly",description:"If `true` slider value cannot be changed but the slider is still focusable",fileName:"core/lib/slider.ts",start:{line:60,character:2,position:1445},end:{line:60,character:20,position:1463},type:"boolean",defaultValue:"false"},{name:"showMinMaxLabels",description:"If `true` the min and max labels are displayed on the slider",fileName:"core/lib/slider.ts",start:{line:85,character:2,position:1900},end:{line:85,character:28,position:1926},type:"boolean",defaultValue:"true"},{name:"showValueLabels",description:"If `true` the value labels are displayed on the slider",fileName:"core/lib/slider.ts",start:{line:80,character:2,position:1797},end:{line:80,character:27,position:1822},type:"boolean",defaultValue:"true"},{name:"stepSize",description:"Unit value between slider steps",fileName:"core/lib/slider.ts",start:{line:55,character:2,position:1336},end:{line:55,character:19,position:1353},type:"number",defaultValue:"1"},{name:"values",description:"Current slider values",fileName:"core/lib/slider.ts",start:{line:75,character:2,position:1708},end:{line:75,character:19,position:1725},type:"number[]",defaultValue:"[0]"},{name:"vertical",description:"If `true` is vertically positioned otherwise it is horizontal",fileName:"core/lib/slider.ts",start:{line:70,character:2,position:1651},end:{line:70,character:20,position:1669},type:"boolean",defaultValue:"false"}],i=[{name:"className",description:"CSS classes to be applied on the widget main container",fileName:"core/lib/commonProps.ts",start:{line:5,character:2,position:116},end:{line:5,character:20,position:134},type:"string"},{name:"combinedLabelDisplay",description:"If true, the label when the handles are close is visible",fileName:"core/lib/slider.ts",start:{line:117,character:2,position:2472},end:{line:117,character:32,position:2502},type:"boolean"},{name:"combinedLabelPositionLeft",description:"Combined label left offset in %",fileName:"core/lib/slider.ts",start:{line:97,character:2,position:2103},end:{line:97,character:36,position:2137},type:"number"},{name:"combinedLabelPositionTop",description:"Combined label top offset in %",fileName:"core/lib/slider.ts",start:{line:102,character:2,position:2185},end:{line:102,character:35,position:2218},type:"number"},{name:"disabled",description:"If `true` slider value cannot be changed and the slider cannot be focused",fileName:"core/lib/slider.ts",start:{line:65,character:2,position:1554},end:{line:65,character:20,position:1572},type:"boolean"},{name:"handleDisplayOptions",description:"Array of objects representing handle display options",fileName:"core/lib/slider.ts",start:{line:132,character:2,position:2813},end:{line:132,character:47,position:2858},type:"HandleDisplayOptions[]"},{name:"max",description:"Maximum value that can be assigned to the slider",fileName:"core/lib/slider.ts",start:{line:50,character:2,position:1275},end:{line:50,character:14,position:1287},type:"number"},{name:"maxValueLabelDisplay",description:"If true, the maximum label will be visible",fileName:"core/lib/slider.ts",start:{line:112,character:2,position:2368},end:{line:112,character:32,position:2398},type:"boolean"},{name:"min",description:"Minimum value that can be assigned to the slider",fileName:"core/lib/slider.ts",start:{line:45,character:2,position:1197},end:{line:45,character:14,position:1209},type:"number"},{name:"minValueLabelDisplay",description:"If true, the minimum label will be visible",fileName:"core/lib/slider.ts",start:{line:107,character:2,position:2278},end:{line:107,character:32,position:2308},type:"boolean"},{name:"progressDisplayOptions",description:"Array of objects representing progress display options",fileName:"core/lib/slider.ts",start:{line:127,character:2,position:2694},end:{line:127,character:51,position:2743},type:"ProgressDisplayOptions[]"},{name:"readonly",description:"If `true` slider value cannot be changed but the slider is still focusable",fileName:"core/lib/slider.ts",start:{line:60,character:2,position:1445},end:{line:60,character:20,position:1463},type:"boolean"},{name:"showMinMaxLabels",description:"If `true` the min and max labels are displayed on the slider",fileName:"core/lib/slider.ts",start:{line:85,character:2,position:1900},end:{line:85,character:28,position:1926},type:"boolean"},{name:"showValueLabels",description:"If `true` the value labels are displayed on the slider",fileName:"core/lib/slider.ts",start:{line:80,character:2,position:1797},end:{line:80,character:27,position:1822},type:"boolean"},{name:"sortedHandles",description:"Array of the sorted handles to display",fileName:"core/lib/slider.ts",start:{line:122,character:2,position:2558},end:{line:122,character:66,position:2622},type:"{value: number; id: number; ariaLabel: string}[]"},{name:"sortedValues",description:"Sorted slider values",fileName:"core/lib/slider.ts",start:{line:92,character:2,position:2031},end:{line:92,character:25,position:2054},type:"number[]"},{name:"stepSize",description:"Unit value between slider steps",fileName:"core/lib/slider.ts",start:{line:55,character:2,position:1336},end:{line:55,character:19,position:1353},type:"number"},{name:"values",description:"Current slider values",fileName:"core/lib/slider.ts",start:{line:75,character:2,position:1708},end:{line:75,character:19,position:1725},type:"number[]"},{name:"vertical",description:"If `true` is vertically positioned otherwise it is horizontal",fileName:"core/lib/slider.ts",start:{line:70,character:2,position:1651},end:{line:70,character:20,position:1669},type:"boolean"}],t=[],a={props:e,state:i,api:t};export{a as d};
