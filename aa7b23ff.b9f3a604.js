(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(90)),l={title:"Draggable Marker"},c={unversionedId:"example-draggable-marker",id:"example-draggable-marker",isDocsHomePage:!1,title:"Draggable Marker",description:"`tsx live noInline",source:"@site/docs/example-draggable-marker.md",slug:"/example-draggable-marker",permalink:"/docs/example-draggable-marker",version:"current",sidebar:"docs",previous:{title:"Layers control",permalink:"/docs/example-layers-control"},next:{title:"View bounds",permalink:"/docs/example-view-bounds"}},i=[],s={rightToc:i};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),"const center = {\n  lat: 51.505,\n  lng: -0.09,\n}\n\nfunction DraggableMarker() {\n  const [draggable, setDraggable] = useState(false)\n  const [position, setPosition] = useState(center)\n  const markerRef = useRef(null)\n  const eventHandlers = useMemo(\n    () => ({\n      dragend() {\n        const marker = markerRef.current\n        if (marker != null) {\n          setPosition(marker.getLatLng())\n        }\n      },\n    }),\n    [],\n  )\n  const toggleDraggable = useCallback(() => {\n    setDraggable((d) => !d)\n  }, [])\n\n  return (\n    <Marker\n      draggable={draggable}\n      eventHandlers={eventHandlers}\n      position={position}\n      ref={markerRef}>\n      <Popup minWidth={90}>\n        <span onClick={toggleDraggable}>\n          {draggable\n            ? 'Marker is draggable'\n            : 'Click here to make marker draggable'}\n        </span>\n      </Popup>\n    </Marker>\n  )\n}\n\nrender(\n  <MapContainer center={center} zoom={13} scrollWheelZoom={false}>\n    <TileLayer\n      attribution='&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n      url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n    />\n    <DraggableMarker />\n  </MapContainer>,\n)\n")))}p.isMDXComponent=!0},90:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,b=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return r?a.a.createElement(b,c(c({ref:n},s),{},{components:r})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);