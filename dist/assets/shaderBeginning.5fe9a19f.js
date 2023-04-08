import{S as y,q as P,a as _,u as T,av as b,c as q,V as M,j as C,M as F,P as R,O as S,W as E,g as U}from"./OrbitControls.0aa6d8be.js";import{G as L}from"./lil-gui.esm.7a5dd4ff.js";import{a as j,o as A,b as B,c as k,d as z}from"./index.0281c40b.js";const D=`uniform vec2 uFrequency;
uniform float uTime;
varying vec2 vUv;
varying float vElevation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
    elevation += +sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
    modelPosition.z += elevation;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    vUv = uv;
    vElevation = elevation;
    gl_Position = projectedPosition;
}`,G=`precision mediump float;
uniform vec3 uColor;
uniform sampler2D uTexture;
varying vec2 vUv;
varying float vElevation;
void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation*2.0 +0.3;
    gl_FragColor = textureColor;
}`,V=z("canvas",{class:"webgl3"},null,-1),W=[V],Y={__name:"shaderBeginning",setup(H){const w=new URL(""+new URL("flag-french.36f0c6c6.jpg",import.meta.url).href,self.location).href;let u={};return j(()=>{const r=document.querySelector("canvas.webgl3"),i=new L;u=i;const s=new y,h=new P().load(w),c=new _(1,1,32,32),f=c.attributes.position.count,l=new Array(f).fill({value:0});l.forEach(o=>o.value=Math.random());let p=l.map(o=>o.value);const g=Float32Array.from(p);c.setAttribute("aRandom",new T(g,1));const a=new b({vertexShader:D,fragmentShader:G,side:q,uniforms:{uFrequency:{value:new M(10,5)},uTime:{value:0},uColor:{value:new C("#762")},uTexture:{value:h}}});i.add(a.uniforms.uFrequency.value,"x").min(0).max(20).step(.01).name("frequnencyX"),i.add(a.uniforms.uFrequency.value,"y").min(0).max(20).step(.01).name("frequnencyY");const d=new F(c,a);d.scale.y=2/3,s.add(d);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,n.aspect=e.width/e.height,n.updateProjectionMatrix(),t.setSize(e.width,e.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2))});const n=new R(75,e.width/e.height,.1,100);n.position.set(.25,-.25,1),s.add(n);const m=new S(n,r);m.enableDamping=!0;const t=new E({canvas:r});t.setSize(e.width,e.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const x=new U,v=()=>{const o=x.getElapsedTime();a.uniforms.uTime.value=o,m.update(),t.render(s,n),window.requestAnimationFrame(v)};v()}),A(()=>{u.destroy()}),(r,i)=>(B(),k("div",null,W))}};export{Y as default};
