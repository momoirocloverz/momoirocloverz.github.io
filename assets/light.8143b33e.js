import{S as x,P as f,O as u,aw as b,D as S,ax as v,b as M,M as l,d as _,a as y,W as P,g as z}from"./OrbitControls.0aa6d8be.js";import{G as L}from"./lil-gui.esm.7a5dd4ff.js";import{a as k,b as G,c as R}from"./index.d90aeefb.js";const C={class:"webgl"},q={__name:"light",setup(D){return k(()=>{const t=new L,n=new x,a={width:window.innerWidth,height:window.innerHeight},r=document.querySelector("canvas.webgl"),i=new f(75,a.width/a.height,.1,100);i.position.x=1,i.position.y=1,i.position.z=2;const c=new u(i,r);c.enableDamping=!0,n.add(i);const h=new b(16777215,.5);t.add(h,"intensity").min(0).max(1).step(.001),n.add(h);const e=new S(16777215,.5);e.position.set(2,2,-1),t.add(e,"intensity").min(0).max(1).step(.001),t.add(e.position,"x").min(-5).max(5).step(.001),t.add(e.position,"y").min(-5).max(5).step(.001),t.add(e.position,"z").min(-5).max(5).step(.001),n.add(e),e.castShadow=!0,console.log("directionLight",e.shadow),e.shadow.mapSize.x=1024,e.shadow.mapSize.y=1024,e.shadow.radius=16,e.shadow.camera.near=1,e.shadow.camera.far=6,e.shadow.camera.left=-2,e.shadow.camera.right=2,e.shadow.camera.top=2,e.shadow.camera.bottom=-2;const w=new v(e.shadow.camera);w.visible=!1,n.add(w);const o=new M;o.roughness=.7,t.add(o,"metalness").min(0).max(1).step(.001),t.add(o,"roughness").min(0).max(1).step(.001);const m=new l(new _(.5,32,32),o);m.castShadow=!0;const d=new l(new y(5,5),o);d.rotation.x=-Math.PI*.5,d.position.y=-.5,d.receiveShadow=!0,n.add(m,d);const s=new P({canvas:r});s.setSize(a.width,a.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight,i.aspect=a.width/a.height,i.updateProjectionMatrix(),s.setSize(a.width,a.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2))});const g=new z,p=()=>{g.getElapsedTime(),c.update(),s.render(n,i),window.requestAnimationFrame(p)};p()}),(t,n)=>(G(),R("canvas",C))}};export{q as default};
