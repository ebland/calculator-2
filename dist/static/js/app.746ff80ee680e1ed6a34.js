webpackJsonp([0],[,function(t,e,n){function a(t){n(42)}var r=n(0)(n(8),n(82),a,null,null);t.exports=r.exports},,function(t,e,n){"use strict";var a=n(2),r=n(90),o=n(67),i=n.n(o),l=n(50),c=n.n(l),u=n(51),s=n.n(u),v=n(52),x=n.n(v),d=n(53),f=n.n(d),m=n(54),p=n.n(m),h=n(55),_=n.n(h),g=n(56),b=n.n(g),y=n(57),k=n.n(y),F=n(58),w=n.n(F),U=n(59),C=n.n(U),M=n(60),P=n.n(M),$=n(61),B=n.n($),D=n(62),E=n.n(D),j=n(63),A=n.n(j),S=n(64),q=n.n(S),O=n(65),R=n.n(O),T=n(66),K=n.n(T),N=n(68),H=n.n(N);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",component:i.a},{path:"/acceleration",component:c.a},{path:"/amount-of-substance",component:s.a},{path:"/angle",component:x.a},{path:"/area",component:f.a},{path:"/astronomical",component:p.a},{path:"/blood-sugar",component:_.a},{path:"/capacitance",component:b.a},{path:"/computer",component:k.a},{path:"/cooking",component:w.a},{path:"/data-transfer",component:C.a},{path:"/density",component:P.a},{path:"/dynamic-viscosity",component:B.a},{path:"/electric-charge",component:E.a},{path:"/electrical-resistance",component:A.a},{path:"/energy",component:q.a},{path:"/force",component:R.a},{path:"/illuminance",component:K.a},{path:"/inductance",component:H.a}]})},function(t,e,n){"use strict";var a=n(2),r=n(92);a.a.use(r.a),e.a=new r.a.Store({state:{unit:null},mutations:{setUnit:function(t,e){t.unit=e}},actions:{setUnit:function(t,e){(0,t.commit)("setUnit",e)}}})},function(t,e,n){function a(t){n(47)}var r=n(0)(n(7),n(87),a,null,null);t.exports=r.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{heading:"Home"},{icon:"home",text:"Home",href:"/"},{divider:!0},{heading:"Tool"},{icon:"check_circle",text:"Acceleration",href:"/acceleration"},{icon:"check_circle",text:"Amount of substance",href:"/amount-of-substance"},{icon:"check_circle",text:"Angle",href:"/angle"},{icon:"check_circle",text:"Area",href:"/area"},{icon:"check_circle",text:"Astronomical",href:"/astronomical"},{icon:"check_circle",text:"Blood Sugar",href:"/blood-sugar"},{icon:"check_circle",text:"Capacitance",href:"/capacitance"},{icon:"check_circle",text:"Computer Data Storage",href:"/computer"},{icon:"check_circle",text:"Cooking",href:"/cooking"},{icon:"check_circle",text:"Data Transfer",href:"/data-transfer"},{icon:"check_circle",text:"Density",href:"/density"},{icon:"check_circle",text:"Dynamic Viscosity",href:"/dynamic-viscosity"},{icon:"check_circle",text:"Electric Charge",href:"/electric-charge"},{icon:"check_circle",text:"Electrical Resistance",href:"/electrical-resistance"},{icon:"check_circle",text:"Energy",href:"/energy"},{icon:"check_circle",text:"Force",href:"/force"},{icon:"check_circle",text:"Illuminance",href:"/illuminance"},{icon:"check_circle",text:"Inductance",href:"/inductance"}],miniVariant:!1,title:"Unit Converter"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{unitFrom:this.$store.state.unit[0],unitTo:this.$store.state.unit[0],valueFrom:null,valueTo:null}},computed:{unit:function(){return this.$store.state.unit}},watch:{valueFrom:function(){isNaN(this.valueFrom)||(this.valueTo=this.convert())},unitFrom:function(){isNaN(this.valueFrom)||(this.valueTo=this.convert())},unitTo:function(){isNaN(this.valueFrom)||(this.valueTo=this.convert())}},methods:{convert:function(){return(this.unitTo.val*this.valueFrom/this.unitFrom.val).toString()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"meter / square second (m/sec²)",val:1},{text:"centimeter / square second (cm/sec²)",val:100},{text:"foot / square second (ft/sec²)",val:3.280839895},{text:"standard gravity (grav)",val:.1019716213},{text:"gal(cm/s²)",val:100},{text:"g-unit",val:.1019716213},{text:"kilometer / square hour (km/h²)",val:12960},{text:"kilometer / hour second(km/h-s)",val:3.6},{text:"mile / hour minute(mi/h-min)",val:134.21617752},{text:"mile / hour second (mi/hr-s)",val:2.2369362921},{text:"mile / square second (mi/sec²)",val:.00062137119224},{text:"inch / square second (in/s²)",val:39.37007874}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"millimole(mmol)",val:1},{text:"mol(mol)",val:.001},{text:"gram-mole(g-mol)",val:.001},{text:"kilomole(kmol)",val:1e-6},{text:"pound mole(lb-mol)",val:2204622621849e-18}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"degrees (deg)",val:1},{text:"full circle",val:.002777777777778},{text:"grad",val:1.111111111111},{text:"radians (rad)",val:.01745329251994}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"acre",val:1},{text:"are (a)",val:40.468564224},{text:"barn (b)",val:4.0468564224e31},{text:"hectare (ha)",val:.40468564224},{text:"homestead",val:.00625},{text:"rood",val:4},{text:"square centimeter (cm²)",val:40468564.224},{text:"square foot (ft²)",val:43560},{text:"square inch (in²)",val:6272640},{text:"square kilometer (km²)",val:.0040468564224},{text:"square meter (m²)",val:4046.8564224},{text:"square mile",val:.0015625},{text:"square millimeter (mm²)",val:4046856422.4},{text:"square rod",val:160},{text:"square yard (yd²)",val:4840},{text:"township (twp)",val:4340277777778e-17}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"parsec",val:1},{text:"astronomical unit (AU)",val:206264.8077366},{text:"kilometer (km)",val:30856776029500},{text:"meter (m)",val:308567760295e5},{text:"mile (mi)",val:19167794603220},{text:"light-year (Julian)",val:3.2615638},{text:"light-year (Gregorian)",val:3.261630773938},{text:"light-year (traditional)",val:3.263797747808},{text:"light-year (tropical / solar)",val:3.261633463758},{text:"light-week",val:170.1837397071},{text:"light-day",val:1191.28617795},{text:"light-hour",val:28590.8682708},{text:"light-minut",val:1715452.096248},{text:"light-second",val:102927125.7749}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"mmol / l",val:1},{text:"mg / dl",val:18},{text:"mg%",val:18}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Abfarad (abF)",val:1},{text:"Attofarad (aF)",val:1e27},{text:"Centifarad (cF)",val:1e11},{text:"Coulomb per volt",val:1e9},{text:"Decafarad (daF)",val:1e8},{text:"Decifarad (dF)",val:1e10},{text:"Exafarad (EF)",val:1e-9},{text:"Farad (F)",val:1e9},{text:"Femtofarad (fF)",val:1e24},{text:"Gigafarad (GF)",val:1},{text:"Hectofarad (hF)",val:1e7},{text:"Kilofarad (kF)",val:1e6},{text:"Megafarad (MF)",val:1e3},{text:"Microfarad (µF)",val:1e15},{text:"Millifarad (mF)",val:1e12},{text:"Nanofarad (nF)",val:1e12},{text:"Petafarad (PF)",val:1e-6},{text:"Picofarad (pF)",val:1e21},{text:"Statfarad (statF)",val:8987551787365e8},{text:"Terafarad (TF)",val:.001},{text:"Yoctofarad (yF)",val:1e33},{text:"Yottafarad (YF)",val:1e-15},{text:"Zeptofarad (zF)",val:1e30},{text:"Zettafarad (ZF)",val:1e-12}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"bit (bit)",val:1},{text:"byte (B)",val:.125},{text:"kilobit (Kbit)",val:.0009765625},{text:"kilobyte (KB)",val:.0001220703125},{text:"megabit (Mbit)",val:9.536743164063e-7},{text:"megabyte (MB)",val:1.192092895508e-7},{text:"gigabit (Gbit)",val:9.313225746155e-10},{text:"gigabyte (GB)",val:1.164153218269e-10},{text:"terabit (Tbit)",val:9.094947017729e-13},{text:"terabyte (TB)",val:1.136912032962e-13},{text:"petabit (Pbit)",val:8.881784160621e-16},{text:"petabyte (PB)",val:2.953157760203e-10},{text:'floppy disk (3.5", DD)',val:1.71507288469e-7},{text:'floppy disk (3.5", HD)',val:8.575364417629e-8},{text:'floppy disk (5.25", DD)',val:3.430145764374e-7},{text:'floppy disk (5.25", HD)',val:1.02969474881e-7},{text:"Zip 100",val:1.244624808896e-9},{text:"Zip 250",val:4.978499258868e-10},{text:"Jaz 1GB",val:1.164153218269e-10},{text:"Jaz 2GB",val:5.820766091347e-11},{text:"CD (74 minute)",val:1.835378818214e-10},{text:"CD (80 minute)",val:1.697725383565e-10},{text:"DVD (1 layer)",val:2.476922236383e-11},{text:"DVD (2 layer)",val:1.369592500851e-11},{text:"Blu-ray (1 layer)",val:4.656612873077e-12},{text:"Blu-ray (2 layer)",val:2.328306436539e-12},{text:"HD-DVD (1 layer)",val:7.761021454353e-12},{text:"HD-DVD (2 layer)",val:3.880506847054e-12}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"cup [US]",val:1},{text:"dash",val:383.9999999956},{text:"dessertspoon [US]",val:24.00000000106},{text:"dessertspoon [UK]",val:19.98417216308},{text:"dram[US fluid]",val:64},{text:"dram[UK fluid]",val:66.61393477032},{text:"drop",val:4607.999999938},{text:"fifth",val:.3125},{text:"fluid ounce [US fluid, fl oz]",val:8},{text:"fluid ounce [UK fluid, fl oz]",val:8.32674184629},{text:"gallon [US, fluid]",val:.0625},{text:"gallon [US, dry]",val:.05371013825974},{text:"gallon [UK]",val:.05204213653931},{text:"gill [US]",val:2},{text:"gill [UK]",val:1.665348369258},{text:"liter",val:.2365882365},{text:"milliliter",val:236.5882365},{text:"pint [US, fluid]",val:.5},{text:"pint [US, dry]",val:.4296811060779},{text:"pint [UK]",val:.4163370923145},{text:"quart [US, fluid]",val:.25},{text:"quart [US, dry]",val:.214840553039},{text:"quart [UK]",val:.2081685461572},{text:"tablepoon [US]",val:16},{text:"tablepoon [Food and Drug Administration]",val:15.7725491},{text:"teaspoon [US]",val:48},{text:"teaspoon [Food and Drug Administration]",val:47.3176473}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"bit / second (bit/s)",val:1},{text:"byte / second (B/s)",val:.125},{text:"kilobit / second (Kbit/s)",val:.0009765625},{text:"kilobyte / second (KB/s)",val:.0001220703125},{text:"megabit / second (Mbit/s)",val:9.536743164063e-7},{text:"megabyte / second (MB/s)",val:1.192092895508e-7},{text:"gigabit / second (Gbit/s)",val:9.313225746155e-10},{text:"gigabyte / second (GB/s)",val:1.164153218269e-10},{text:"byte / minute (B/min)",val:7.5},{text:"byte / hour (B/h)",val:450},{text:"kilobyte / minute (KB/min)",val:.00732421875},{text:"kilobyte / hour (KB/h)",val:.439453125},{text:"megabyte / minute (MB/min)",val:7152557373047e-18},{text:"megabyte / hour (MB/h)",val:.0004291534423828}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"gram / cubic centimeter (g/cm³)",val:1},{text:"gram / cubic decimeter",val:1e3},{text:"gram / cubic meter (g/m³)",val:1e6},{text:"gram / liter",val:1e3},{text:"gram / milliliter",val:1},{text:"megagram / cubic centimeter",val:1e-5},{text:"megagram / cubic meter",val:1},{text:"megagram / liter",val:.001},{text:"megagram / milliliter",val:1e-5},{text:"milligram / cubic centimeter (mg/cm³)",val:1e3},{text:"milligram / cubic decimeter",val:1e6},{text:"milligram / cubic meter (mg/m³)",val:1e9},{text:"milligram / liter",val:1e6},{text:"milligram / milliliter",val:1e3},{text:"kilogram / cubic centimeter (kg/cm³)",val:.001},{text:"kilogram / cubic decimeter",val:1},{text:"kilogram / cubic meter (kg/m³)",val:1e3},{text:"kilogram / liter",val:1},{text:"kilogram / milliliter",val:.001},{text:"ounce / cubic foot",val:998.84737348},{text:"ounce / cubic inch",val:.57803667444},{text:"ounce / cubic yard",val:26968.879083},{text:"ounce / gallon (U.K.)(oz/gal)",val:160.35860568},{text:"ounce / gallon (U.S.)(oz/gal)",val:133.5264718},{text:"pound / circular mil foot",val:340.4917061},{text:"pound / cubic foot (lb/ft³)",val:62.427960841},{text:"pound / cubic inch (lb/in³)",val:.036127292153},{text:"pound / cubic yard",val:1685.5549427},{text:"pound / gallon (U.K.)(lb/gal)",val:10.022412855},{text:"pound / gallon (U.S.)(lb/gal)",val:8.3454044873},{text:"grain / cubic foot",val:436995.72588},{text:"grain / cubic inch",val:252.89104507},{text:"grain / cubic yard",val:11798884.599},{text:"grain / gallon (U.K.)",val:70156.889986},{text:"grain / gallon (U.S.)",val:58417.831411},{text:"tonne / cubic centimeter",val:1e-5},{text:"tonne / cubic decimeter",val:.001},{text:"tonne / cubic meter",val:1},{text:"tonne / liter",val:.001},{text:"tonne / milliliter",val:1e-5}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Centipoise (cP)",val:1},{text:"Gram per centimeter second (g/(cm·s))",val:.01},{text:"Kilogram per metre second (kg/(m·s))",val:.001},{text:"Newton second per square metre (N·s/m²)",val:.001},{text:"Pascal-second (Pa·s)",val:.001},{text:"Poise (P)",val:.01},{text:"Pound-force second per square inch (lbf·s/in²)",val:1.45037737797e-7},{text:"Pound-force second per square foot (lbf·s/ft²)",val:208854342332e-16},{text:"Pound per foot second (lb/(ft·s))",val:.00067196897514},{text:"Pound per foot hour (lb/(ft·h))",val:2.419088310502},{text:"Slug per foot second (slug/(ft·s))",val:208854342332e-16},{text:"Poundal second per square foot",val:.0001019716212978},{text:"Dyne second per square centimetre (dyn·s/cm²)",val:.01}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Abcoulomb (abC)",val:1},{text:"Ampere-hour (Ah)",val:.00277777777778},{text:"Coulomb (C)",val:10},{text:"Elementary charge (e)",val:6241509474154e7},{text:"Faraday (F)",val:.0001036426864904},{text:"Kilocoulomb (kC)",val:.01},{text:"Megacoulomb (MC)",val:1e-5},{text:"Microcoulomb (µC)",val:1e7},{text:"Milliampere-hour (mAh)",val:2.77777777778},{text:"Millicoulomb (mC)",val:1e4},{text:"Nanocoulomb (nC)",val:1e10},{text:"Statcoulomb (statC)",val:29979245800}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Abohm (abΩ)",val:1},{text:"Gigaohm (GΩ)",val:1e-18},{text:"Kiloohm (kΩ)",val:1e-12},{text:"Megaohm (MΩ)",val:1e-15},{text:"Microohm (µΩ)",val:.001},{text:"Milliohm (mΩ)",val:1e-6},{text:"Nanoohm (nΩ)",val:1},{text:"Ohm (Ω)",val:1e-9},{text:"Volt per ampere (V/A)",val:1e-9}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"BTU",val:1},{text:"calorie (cal)",val:251.9957963122},{text:"electronvolt (eV)",val:6.585142305005e21},{text:"erg",val:1055056e4},{text:"foot-pound",val:778.1693709679},{text:"gigajoule (GJ)",val:1055056e-12},{text:"joule (J)",val:1055.056},{text:"kilocalorie (kcal)",val:.2519957963122},{text:"kilojoule (kJ)",val:1.055056},{text:"kilowatt hour (kWh)",val:.0002930711111111},{text:"megajoule (MJ)",val:.001055056},{text:"nutrition calorie (Cal)",val:.2519957963122},{text:"ton of TNT (tn)",val:2.521644359465e-7},{text:"watt hour (Wh)",val:.2930711111111}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"attonewton",val:1},{text:"centinewton",val:1e-17},{text:"decigram-force",val:1.019716213e-16},{text:"decinewton",val:1e-18},{text:"dekagram-force",val:1.019716213e-18},{text:"dekanewton",val:1e-20},{text:"dyne (dyn)",val:1e-14},{text:"exanewton",val:1e-36},{text:"femtonewton",val:.001},{text:"giganewton (GN)",val:1e-27},{text:"gram-force",val:1.019716213e-17},{text:"hectonewton",val:1e-21},{text:"joule / meter (J/m)",val:1e-19},{text:"kilogram-force (kgf)",val:1.019716e-20},{text:"kilonewton (kN)",val:1e-22},{text:"kilopond (kp)",val:1.019716e-20},{text:"kip (kip)",val:2.248e-23},{text:"meganewton",val:1e-24},{text:"megapond",val:1.019716213e-23},{text:"micronewton (µN)",val:1e-13},{text:"millinewton (mN)",val:1e-16},{text:"nanonewton (nN)",val:1e-10},{text:"newton (N)",val:1e-19},{text:"ounce-force (ozf)",val:3.5969431019e-19},{text:"petanewton",val:1e-33},{text:"piconewton",val:1e-7},{text:"pond",val:1.019716213e-17},{text:"pound-force (lbf)",val:2.2480894387e-20},{text:"poundal (pdl)",val:7.2330140801e-19},{text:"sthene (sn)",val:1e-22},{text:"teranewton",val:1e-30},{text:"ton-force (long)(tnf)",val:1.0036113566e-23},{text:"ton-force (metric)(tnf)",val:1.019716213e-23},{text:"ton-force (short)(tnf)",val:1.1240447194e-23},{text:"yoctonewton",val:1e6},{text:"yottanewton",val:1e-42},{text:"zeptonewton",val:1e3},{text:"zettanewton",val:1e-39}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Foot-candle (fc)",val:1},{text:"Kilolux (klx)",val:.01076391041671},{text:"Lumen per square centimeter (lm/cm²)",val:.001076391041671},{text:"Lumen per square meter (lm/m²)",val:10.76391041671},{text:"Lux (lx)",val:10.76391041671},{text:"Microlux (µlx)",val:10763910.41671},{text:"Millilux (mlx)",val:10763.91041671},{text:"Nox",val:10763.91041671},{text:"Phot (ph)",val:.001076391041671}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listUnit:[{name:"Acceleration",color:"light-blue darken-2",href:"/acceleration"},{name:"Amount of Substance",color:"blue darken-2",href:"/amount-of-substance"},{name:"Angle",color:"indigo darken-2",href:"/angle"},{name:"Area",color:"teal darken-2",href:"/area"},{name:"Astronomical",color:"green darken-2",href:"/astronomical"},{name:"Blood Sugar",color:"light-green darken-2",href:"/blood-sugar"},{name:"Capacitance",color:"lime darken-2",href:"/capacitance"},{name:"Computer Storage",color:"yellow darken-2",href:"/computer"},{name:"Cooking",color:"amber darken-2",href:"/cooking"},{name:"Data Transfer",color:"orange darken-2",href:"/data-transfer"},{name:"Density",color:"deep-orange darken-2",href:"/density"},{name:"Dynamic Viscosity",color:"brown darken-2",href:"/dynamic-viscosity"},{name:"Electric Charge",color:"blue-grey darken-2",href:"/electric-charge"},{name:"Electrical Resistance",color:"grey darken-2",href:"/electrical-resistance"},{name:"Energy and Work",color:"red darken-2",href:"/energy"},{name:"Force",color:"pink darken-2",href:"/force"},{name:"Illuminance",color:"purple darken-2",href:"/illuminance"},{name:"Inductance",color:"deep-purple darken-2",href:"/inductance"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n.n(a);e.default={components:{ConvertBox:r.a},data:function(){return{unit:[{text:"Abhenry (abH)",val:1},{text:"Gigahenry (GH)",val:1e-18},{text:"Henry (H)",val:1e-9},{text:"Kilohenry (kH)",val:1e-12},{text:"Megahenry (MH)",val:1e-15},{text:"Microhenry (µH)",val:.001},{text:"Millihenry (mH)",val:1e-6},{text:"Nanohenry (nH)",val:1},{text:"Weber per ampere (Wb/A)",val:1e-9}]}},created:function(){this.$store.dispatch("setUnit",this.unit)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=n(6),o=n.n(r),i=n(5),l=n.n(i),c=n(3),u=n(4);a.a.use(o.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:l.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function a(t){n(38)}var r=n(0)(n(9),n(78),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(39)}var r=n(0)(n(10),n(79),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(37)}var r=n(0)(n(11),n(77),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(43)}var r=n(0)(n(12),n(83),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(33)}var r=n(0)(n(13),n(73),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(41)}var r=n(0)(n(14),n(81),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(49)}var r=n(0)(n(15),n(89),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(31)}var r=n(0)(n(16),n(71),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(32)}var r=n(0)(n(17),n(72),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(34)}var r=n(0)(n(18),n(74),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(45)}var r=n(0)(n(19),n(85),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(46)}var r=n(0)(n(20),n(86),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(40)}var r=n(0)(n(21),n(80),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(44)}var r=n(0)(n(22),n(84),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(30)}var r=n(0)(n(23),n(70),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(35)}var r=n(0)(n(24),n(75),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(48)}var r=n(0)(n(25),n(88),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(36)}var r=n(0)(n(26),n(76),a,null,null);t.exports=r.exports},function(t,e,n){function a(t){n(29)}var r=n(0)(n(27),n(69),a,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Inductance ")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Energy and Work")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Computer Data Storage")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Cooking")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Astronomical")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Data transfer")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Force ")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-parallax",{attrs:{src:"https://chuszoof.files.wordpress.com/2014/11/material_wallpaper_set_two-1.jpg"}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("h1",{staticClass:"white--text"},[t._v("Unit converter")])])],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.listUnit,function(e,a){return n("v-flex",{key:a,attrs:{xs4:""}},[n("v-card",{staticClass:"white--text mr-2 mb-2",attrs:{color:e.color}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(e.name))])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",dark:""},nativeOn:{click:function(n){t.$router.push(e.href)}}},[t._v("Convert now")])],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Angle")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Acceleration")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Amount of Substance")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Electric Charge")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Blood sugar")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{items:t.unit,label:"Select","single-line":"",bottom:""},model:{value:t.unitFrom,callback:function(e){t.unitFrom=e},expression:"unitFrom"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","offset-xs1":""}},[n("v-select",{attrs:{items:t.unit,label:"Select","single-line":"",bottom:""},model:{value:t.unitTo,callback:function(e){t.unitTo=e},expression:"unitTo"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{label:"From"},model:{value:t.valueFrom,callback:function(e){t.valueFrom=e},expression:"valueFrom"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:"","offset-xs1":""}},[n("v-text-field",{attrs:{label:"To",label:t.valueTo,disabled:""}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Area")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Electrical Resistance")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Density")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Dynamic Viscosity")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e,a){return[e.heading?n("v-layout",{key:a,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1)],1):e.divider?n("v-divider",{key:a,staticClass:"my-4",attrs:{dark:""}}):n("v-list-tile",{key:a,on:{click:function(n){t.$router.push(e.href)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)]})],2)],1),t._v(" "),n("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("main",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© 2017")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Illuminance ")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("h3",[t._v("Capacitance")]),t._v(" "),n("convert-box")],1)],1)},staticRenderFns:[]}}],[28]);
//# sourceMappingURL=app.746ff80ee680e1ed6a34.js.map