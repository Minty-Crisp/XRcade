//
//AUXL : A-Frame UX Library
//v0.3 Engine
//https://github.com/Minty-Crisp/AUXL
//
//Created by Minty-Crisp (mintycrisp.com)

//AUXL v0.3 Beta - Scenes

//auxl-scene-library
//User Library : User added Library items
AFRAME.registerComponent('scene-library', {
dependencies: ['auxl'],
init: function () {
//AUXL System Connection
const auxl = document.querySelector('a-scene').systems.auxl;

//SkyBox
auxl.skyGrad1Data = {
data: 'skyGrad1Data',
id: 'skyGrad1',
entity: 'a-sky',
sources: false,
text: false,
geometry: false,
material: {shader: 'threeColorGradientShader', topColor: '#613381', middleColor: '#99154E', bottomColor: '#b967ff'},
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: {

top0:{property: 'material.topColor', from: '#01cdfe', to: '#01cdfe', dur: 1, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: true, enabled: true,},

mid0:{property: 'material.middleColor', from: '#fffb96', to: '#fffb96', dur: 1, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: true, enabled: true,},

top1:{property: 'material.topColor', from: '#613381', to: '#01cdfe', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__top0, animationcomplete__top2', pauseEvents: 'pause', resumeEvents: 'resume'},

mid1:{property: 'material.middleColor', from: '#99154E', to: '#fffb96', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__mid0, animationcomplete__top2', pauseEvents: 'pause', resumeEvents: 'resume'}, 

top2:{property: 'material.topColor', from: '#01cdfe', to: '#613381', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__top1', pauseEvents: 'pause', resumeEvents: 'resume'},

mid2:{property: 'material.middleColor', from: '#fffb96', to: '#99154E', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__mid1', pauseEvents: 'pause', resumeEvents: 'resume'},

},
mixins: false,
classes: ['a-ent'],
components: false,
};
auxl.skyGrad1 = auxl.Core(auxl.skyGrad1Data);

//Lights
auxl.directionalLight.core.components.light.intensity = 0.75;
auxl.directionalLight.core.position = new THREE.Vector3(-0.25,0.75,0.5);
auxl.directionalLight2.core.components.light.intensity = 0.1;
auxl.directionalLight2.core.position = new THREE.Vector3(0.25,0.75,-0.5);
auxl.directionalLight3.core.components.light.intensity = 0.2;
auxl.directionalLight3.core.position = new THREE.Vector3(0.25,0.75,0.5);
auxl.ambientLight.core.components.light.intensity = 0.5;

//
//skyBox1
auxl.skyBox1Data = {
data:'skyBox1Data',
id:'skyBox1',
sources:false,
lights:[
auxl.directionalLight,
auxl.directionalLight2,
auxl.directionalLight3,
auxl.ambientLight,
],
sky:[
auxl.skyGrad1,
],
space:[
auxl.sunLayer,
],
};
auxl.skyBox1 = auxl.SkyBox(auxl.skyBox1Data);



//Materials
auxl.floorPattern1 = './assets/img/tiles/xrcade/1.jpg';
auxl.floorPattern2 = './assets/img/tiles/xrcade/2.png';
auxl.floorPattern3 = './assets/img/tiles/xrcade/3.gif';
auxl.floorPattern4 = './assets/img/tiles/xrcade/4.jpg';
auxl.floorPattern5 = './assets/img/tiles/xrcade/5.jpg';

//Floor
auxl.floorData = {
	data:'floorData',
	id:'floor',
	sources:false,
	text: false,
	geometry: {primitive: 'plane', height: 30, width: 20},
	material: {shader: "standard", opacity: 1, metalness: 0.1, roughness: 0.9, emissiveIntensity: 0.7, side: 'front', src: auxl.floorPattern1, repeat: '5 10'},
	position: new THREE.Vector3(0,0,-12),
	rotation: new THREE.Vector3(-90,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.floor = auxl.Core(auxl.floorData);

//Style 1
auxl.carpetChange1Data = {
data:'carpetChange1Data',
id:'carpetChange1',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern1, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(-5,1.5,1.7),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__carpet:{
		method: 'changeCarpetTexture',
		params: 'floorPattern1',
	},
},
};
auxl.carpetChange1 = auxl.Core(auxl.carpetChange1Data);
//Style 2
auxl.carpetChange2Data = {
data:'carpetChange2Data',
id:'carpetChange2',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern2, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(-2.5,1.5,1.7),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__carpet:{
		method: 'changeCarpetTexture',
		params: 'floorPattern2',
	},
},
};
auxl.carpetChange2 = auxl.Core(auxl.carpetChange2Data);
//Style 3
auxl.carpetChange3Data = {
data:'carpetChange3Data',
id:'carpetChange3',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern3, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(0,1.5,1.7),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__carpet:{
		method: 'changeCarpetTexture',
		params: 'floorPattern3',
	},
},
};
auxl.carpetChange3 = auxl.Core(auxl.carpetChange3Data);
//Style 4
auxl.carpetChange4Data = {
data:'carpetChange4Data',
id:'carpetChange4',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern4, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(2.5,1.5,1.7),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__carpet:{
		method: 'changeCarpetTexture',
		params: 'floorPattern4',
	},
},
};
auxl.carpetChange4 = auxl.Core(auxl.carpetChange4Data);
//Style 5
auxl.carpetChange5Data = {
data:'carpetChange5Data',
id:'carpetChange5',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern5, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(5,1.5,1.7),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__carpet:{
		method: 'changeCarpetTexture',
		params: 'floorPattern5',
	},
},
};
auxl.carpetChange5 = auxl.Core(auxl.carpetChange5Data);


//mtnFloor
auxl.mtnFloorData = {
	data:'mtnFloorData',
	id:'mtnFloor',
	sources:false,
	text: false,
	geometry: false,
	material: {shader: "standard", color: "#1caed1", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#1caed1", emissiveIntensity: 0.2, side: 'front', src: auxl.pattern13, repeat: '100 100'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent', 'clickable'],
	components: {
	['obj-model']:{obj: './assets/3d/XRcade/mtnFloor.obj'},
	},
};
auxl.mtnFloor = auxl.Core(auxl.mtnFloorData);

//
//Walls

//Wall Long
auxl.wallLongData = {
	data:'wallLongData',
	id:'wallLong',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 1, depth: 30},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '30 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallLong1Data = auxl.coreDataFromTemplate(auxl.wallLongData, {id: 'wallLong1', grid: {start:{x:9.5, y:0, z:-26}, end: {x:10, y:0, z:2}, yOffset: 5, collide: true}}, true);
auxl.wallLong1 = auxl.Core(auxl.wallLong1Data);
auxl.wallLong2Data = auxl.coreDataFromTemplate(auxl.wallLongData, {id: 'wallLong2', grid: {start:{x:-9.5, y:0, z:-26}, end: {x:-10, y:0, z:2}, yOffset: 5, collide: true}}, true);
auxl.wallLong2 = auxl.Core(auxl.wallLong2Data);

//Wall Short
auxl.wallShortData = {
	data:'wallShortData',
	id:'wallShort',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 20, depth: 1},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '20 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallShort1Data = auxl.coreDataFromTemplate(auxl.wallShortData, {id: 'wallShort1', grid: {start:{x:-10, y:0, z:2}, end: {x:10, y:0, z:2.5}, yOffset: 5, collide: true}}, true);
auxl.wallShort1 = auxl.Core(auxl.wallShort1Data);
auxl.wallShort2Data = auxl.coreDataFromTemplate(auxl.wallShortData, {id: 'wallShort2', grid: {start:{x:-10, y:0, z:-27}, end: {x:10, y:0, z:-27.5}, yOffset: 5, collide: true}}, true);
auxl.wallShort2 = auxl.Core(auxl.wallShort2Data);

//Wall Divide
auxl.wallDivideData = {
	data:'wallDivideData',
	id:'wallDivide',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 8, depth: 3},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '6 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallDivide1Data = auxl.coreDataFromTemplate(auxl.wallDivideData, {id: 'wallDivide1', grid: {start:{x:-4, y:0, z:-9}, end: {x:4, y:0, z:-6}, yOffset: 5, collide: true}}, true);
auxl.wallDivide1 = auxl.Core(auxl.wallDivide1Data);

//Wall Indent
auxl.wallIndentData = {
	data:'wallIndentData',
	id:'wallIndent',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 2, depth: 4},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '2 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallIndent1Data = auxl.coreDataFromTemplate(auxl.wallIndentData, {id: 'wallIndent1', grid: {start:{x:8, y:0, z:-10}, end: {x:9.5, y:0, z:-6}, yOffset: 5, collide: true}}, true);
auxl.wallIndent1 = auxl.Core(auxl.wallIndent1Data);

auxl.wallIndent2Data = auxl.coreDataFromTemplate(auxl.wallIndentData, {id: 'wallIndent2', grid: {start:{x:-9.5, y:0, z:-10}, end: {x:-8, y:0, z:-6}, yOffset: 5, collide: true}}, true);
auxl.wallIndent2 = auxl.Core(auxl.wallIndent2Data);


//Wall Corner
auxl.wallCornerData = {
	data:'wallCornerData',
	id:'wallCorner',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 1.5, depth: 1.5},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '1.5 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallCorner1Data = auxl.coreDataFromTemplate(auxl.wallCornerData, {id: 'wallCorner1', grid: {start:{x:8, y:0, z:-26.5}, end: {x:9, y:0, z:-25.5}, yOffset: 5, collide: true}}, true);
auxl.wallCorner1 = auxl.Core(auxl.wallCorner1Data);

auxl.wallCorner2Data = auxl.coreDataFromTemplate(auxl.wallCornerData, {id: 'wallCorner2', grid: {start:{x:-9, y:0, z:-26.5}, end: {x:-8, y:0, z:-25.5}, yOffset: 5, collide: true}}, true);
auxl.wallCorner2 = auxl.Core(auxl.wallCorner2Data);


//Jukebox
auxl.jukeBoxData = {
	data:'jukeBoxData',
	id:'jukeBox',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	grid: {start:{x:-2.5, y:0, z:-6}, end: {x:-1.5, y:0, z:-5}, yOffset: 0, collide: true},
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations:{
		click: {property: 'scale', from: '1 1 1', to: '1.1 1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
	},
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/jukebox.glb',
		gltfmat: {colors: '#16aa60, #05aaf4, #f4057c', emissive: '0.25,0.25,0.75'},
		clickrun__toggle:{
			cursorObj: 'jukeBoxAudioToggle',
			component: 'null',
			method: 'ToggleSpawn',
			params: 'null',
		},
		hovertext:{value: 'Background Music', hover: 'top', offset: 2, twist: true,},
	},
};
auxl.jukeBox = auxl.Core(auxl.jukeBoxData);
//Background Toggle
auxl.jukeBoxAudioToggleData = {
data:'jukeBoxAudioToggleData',
id:'jukeBoxAudioToggle',
sources: false,
text: {value:'Disable Background Audio', wrapCount: 20, color: "#FFFFFF", font: "exo2bold", zOffset: 0.051, side: 'double', align: "center", baseline: 'center', width: 1.4},
geometry: {primitive: 'box', depth: 0.1, width: 1.5, height: 0.5},
material: {shader: "standard", color: "#2694ce", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#2694ce", emissiveIntensity: 0.4, side: 'double'},
position: new THREE.Vector3(-2,2,-5.35),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	hoveron: {property: 'material.emissiveIntensity', from: '0.4', to: '0.8', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
	hoveroff: {property: 'material.emissiveIntensity', from: '0.8', to: '0.4', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__toggleaudio:{
		method: 'ToggleBackgroundAudio',
		params: 'null',
	},
	clickrunfunc__updatebackgroundtoggle:{
		method: 'ToggleBackgroundAudioText',
		params: 'null',
	},
	onspawnfunc__update:{
		auxlFunc: 'UpdateBackgroundToggleText',
		params: 'null',
	},
},
};
auxl.jukeBoxAudioToggle = auxl.Core(auxl.jukeBoxAudioToggleData);

//Token
auxl.tokenData = {
	data:'tokenData',
	id:'token',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	grid: {start:{x:1.5, y:0, z:-6}, end: {x:2.5, y:0, z:-5}, yOffset: 0, collide: true},
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/token.glb',
		gltfmat: {colors: '#f4057c, #05aaf4, #16aa60', emissive: '0.75,0.25,0.75'},
		hovertext:{value: 'Sponsor My Work', hover: 'top', offset: 2, twist: true,},
		clickrun__link1:{
			cursorObj: 'tokenLink1',
			component: 'null',
			method: 'ToggleSpawn',
			params: 'null',
		},
		clickrun__link2:{
			cursorObj: 'tokenLink2',
			component: 'null',
			method: 'ToggleSpawn',
			params: 'null',
		},
		clickrun__link3:{
			cursorObj: 'tokenLink3',
			component: 'null',
			method: 'ToggleSpawn',
			params: 'null',
		},
	},
};
auxl.token = auxl.Core(auxl.tokenData);
//Link 1 - Github
auxl.tokenLink1Data = {
data:'tokenLink1Data',
id:'tokenLink1',
sources: false,
text: {value:'Github Sponsor', wrapCount: 20, color: "#FFFFFF", font: "exo2bold", zOffset: 0.051, side: 'double', align: "center", baseline: 'center', width: 1.4},
geometry: {primitive: 'box', depth: 0.1, width: 1.5, height: 0.5},
material: {shader: "standard", color: "#2694ce", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#2694ce", emissiveIntensity: 0.4, side: 'double'},
position: new THREE.Vector3(2,2,-5.35),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	hoveron: {property: 'material.emissiveIntensity', from: '0.4', to: '0.8', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
	hoveroff: {property: 'material.emissiveIntensity', from: '0.8', to: '0.4', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__toggleaudio:{
		method: 'OpenLink',
		params: 'https://github.com/Minty-Crisp',
	},
},
};
auxl.tokenLink1 = auxl.Core(auxl.tokenLink1Data);
//Link 2 - Kofi
auxl.tokenLink2Data = {
data:'tokenLink2Data',
id:'tokenLink2',
sources: false,
text: {value:'Ko-fi', wrapCount: 20, color: "#FFFFFF", font: "exo2bold", zOffset: 0.051, side: 'double', align: "center", baseline: 'center', width: 1.4},
geometry: {primitive: 'box', depth: 0.1, width: 1.5, height: 0.5},
material: {shader: "standard", color: "#2694ce", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#2694ce", emissiveIntensity: 0.4, side: 'double'},
position: new THREE.Vector3(2,2.75,-5.35),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	hoveron: {property: 'material.emissiveIntensity', from: '0.4', to: '0.8', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
	hoveroff: {property: 'material.emissiveIntensity', from: '0.8', to: '0.4', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__toggleaudio:{
		method: 'OpenLink',
		params: 'https://ko-fi.com/mintycrisp',
	},
},
};
auxl.tokenLink2 = auxl.Core(auxl.tokenLink2Data);
//Link 3 - Liberapay
auxl.tokenLink3Data = {
data:'tokenLink3Data',
id:'tokenLink3',
sources: false,
text: {value:'Liberapay', wrapCount: 20, color: "#FFFFFF", font: "exo2bold", zOffset: 0.051, side: 'double', align: "center", baseline: 'center', width: 1.4, opacity: 0},
geometry: {primitive: 'box', depth: 0.1, width: 1.5, height: 0.5},
material: {shader: "standard", color: "#2694ce", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#2694ce", emissiveIntensity: 0.4, side: 'double'},
position: new THREE.Vector3(2,3.5,-5.35),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
	hoveron: {property: 'material.emissiveIntensity', from: '0.4', to: '0.8', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
	hoveroff: {property: 'material.emissiveIntensity', from: '0.8', to: '0.4', dur: 1, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},
	click: {property: 'scale', from: '1 1 1', to: '1.1 1.1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: {
	clickrunfunc__toggleaudio:{
		method: 'OpenLink',
		params: 'https://liberapay.com/mintycrisp/',
	},
},
};
auxl.tokenLink3 = auxl.Core(auxl.tokenLink3Data);

//Sponsor
auxl.sponsorData = {
	data:'sponsorData',
	id:'sponsor',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['zesty-banner']: {adUnit: '5380481b-af7b-4aaa-b97d-92c7d35ab4ae', format: 'wide', style: 'standard', beacon: true},
	},
};
auxl.sponsor1Data = auxl.coreDataFromTemplate(auxl.sponsorData, {id: 'sponsor1', position: new THREE.Vector3(0,3.5,-5.95),}, true);
auxl.sponsor1 = auxl.Core(auxl.sponsor1Data);

//XRcade Sign
auxl.signData = {
	data:'signData',
	id:'sign',
	sources:false,
	text: {value:'text', color: "#FFFFFF", align: "left", font: "exo2bold", width: 0.75, zOffset: 0.025, side: 'front', wrapCount: 30, baseline: 'center'},
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components: false,
};
auxl.xrcadeSignData = auxl.coreDataFromTemplate(auxl.signData, {id: 'xrcadeSign', position: new THREE.Vector3(0,7,-5.95), text: {value:'Welcome to\nMinty XRcade', color: "#FFFFFF", align: "center", font: "exo2bold", width: 7, zOffset: 0.025, side: 'front', wrapCount: 13, baseline: 'center'}}, true);
auxl.xrcadeSign = auxl.Core(auxl.xrcadeSignData);

//Waves
auxl.wavesSignData = {
	data:'wavesSignData',
	id:'wavesSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(-9.1,4.5,-17.5),
	rotation: new THREE.Vector3(90,90,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/waves.glb',
		gltfmat: {colors: '#11bfab, #05aaf4', emissive: '1,1'},
	},
};
auxl.wavesSign = auxl.Core(auxl.wavesSignData);

//Hearts
auxl.heartsSignData = {
	data:'heartsSignData',
	id:'heartsSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,4.25,-9.1),
	rotation: new THREE.Vector3(90,180,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/hearts.glb',
		gltfmat: {colors: '#f4057c, #16aa60', emissive: '1,1'},
	},
};
auxl.heartsSign = auxl.Core(auxl.heartsSignData);

//Trees
auxl.treeSignData = {
	data:'treeSignData',
	id:'treeSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(9.1,2,-17.65),
	rotation: new THREE.Vector3(90,-90,0),
	scale: new THREE.Vector3(1.25,1.25,1.25),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/palm.glb',
		gltfmat: {colors: '#912b5e, #16aa60', emissive: '1,1'},
	},
};
auxl.treeSign = auxl.Core(auxl.treeSignData);

//IVX
auxl.ivxSignData = {
	data:'ivxSignData',
	id:'ivxSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,5,-26.75),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/IVX.glb',
		gltfmat: {colors: '#05aaf4, #f4057c, #16aa60', emissive: '1,1,1'},
	},
};
auxl.ivxSign = auxl.Core(auxl.ivxSignData);


//Sign
auxl.cadeSignData = {
	data:'cadeSignData',
	id:'cadeSign1',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,7,-5.95),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/xrcade.glb',
		gltfmat: {colors: '#f4057c, #05aaf4, #eddd23, #16aa60', emissive: '1,1,1,1'},
	},
};
auxl.cadeSign1 = auxl.Core(auxl.cadeSignData);

auxl.cadeSign2Data = auxl.coreDataFromTemplate(auxl.cadeSignData, {id: 'cadeSign2', position: new THREE.Vector3(0,7,-9.1), rotation: new THREE.Vector3(90,180,0)}, true);
auxl.cadeSign2 = auxl.Core(auxl.cadeSign2Data);

//Line
auxl.lineSignData = {
	data:'lineSignData',
	id:'lineSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,7,-5.95),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
//Line1
auxl.lineSign1Data = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'lineSign1', position: new THREE.Vector3(9.1,8.5,-18.25), rotation: new THREE.Vector3(90,-90,0), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissive: '1,1'},}}, true);
auxl.lineSign1 = auxl.Core(auxl.lineSign1Data);
//Line2
auxl.lineSign2Data = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'lineSign2', position: new THREE.Vector3(0,8.5,-26.75), rotation: new THREE.Vector3(90,0,0), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissive: '1,1'},}}, true);
auxl.lineSign2 = auxl.Core(auxl.lineSign2Data);
//Line3
auxl.lineSign3Data = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'lineSign3', position: new THREE.Vector3(-9.1,8.5,-17.5), rotation: new THREE.Vector3(90,90,0), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissive: '1,1'},}}, true);
auxl.lineSign3 = auxl.Core(auxl.lineSign3Data);

//Cabinet
auxl.cadeCabData = {
	data:'cadeCabData',
	id:'cadeCab',
	sources: false,
	text: false,
	sounds: {
		click: {src: auxl.drop1, autoplay: false, loop: false, volume: 1, on: 'click'},
	},
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(0.45,0.45,0.45),
	animations:false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components:{
		['gltf-model']:'./assets/3d/XRcade/cabinet.glb',
		gltfmat: {colors:['random','random','random','random','random', 'black','random','random','random','random'],},
		hovertext:{value: 'Ready?\nPlayer One', hover: 'top', offset: 5, twist: true,},
	},
};
auxl.cadeCab = auxl.Core(auxl.cadeCabData);
//Game Title
auxl.cabTitleData = {
	data:'cabTitleData',
	id:'cabTitle',
	sources: false,
	text: {value:'Coming Soon!', color: "#FFFFFF", align: "center", font: "exo2bold", width: 2, zOffset: 0.025, side: 'front', wrapCount: 16, baseline: 'center'},
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,4.15,0.95),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.cabTitle = auxl.Core(auxl.cabTitleData);
//Cab Layer
auxl.cabLayerData = {
	parent: {core: auxl.cadeCab},
	child0: {core: auxl.cabTitle},
}
auxl.cabLayer = auxl.Layer('cabLayer', auxl.cabLayerData);

//Left
//Cab 1
auxl.cadeCab1Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab1Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-12}, end: {x:-8.5, y:0, z:-11.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab1Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game1Preview,]};
auxl.cadeCab1Layer.layer.all.child0.core.core.text.value = 'Memory Order';
//Cab 2
auxl.cadeCab2Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab2Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-14}, end: {x:-8.5, y:0, z:-13.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab2Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game2Preview,]};
auxl.cadeCab2Layer.layer.all.child0.core.core.text.value = 'Swipe Launch';
//Cab 3
auxl.cadeCab3Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab3Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-16}, end: {x:-8.5, y:0, z:-15.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab3Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game3Preview,]};
auxl.cadeCab3Layer.layer.all.child0.core.core.text.value = 'Guess Hit';
//Cab 4
auxl.cadeCab4Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab4Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-18}, end: {x:-8.5, y:0, z:-17.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab4Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game4Preview,]};
auxl.cadeCab4Layer.layer.all.child0.core.core.text.value = 'Drag Diffuse';
//Cab 5
auxl.cadeCab5Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab5Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-20}, end: {x:-8.5, y:0, z:-19.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab5Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game5Preview,]};
auxl.cadeCab5Layer.layer.all.child0.core.core.text.value = 'Sharp Shooter';
//Cab 6
auxl.cadeCab6Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab6Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-22}, end: {x:-8.5, y:0, z:-21.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab6Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game6Preview,]};
auxl.cadeCab6Layer.layer.all.child0.core.core.text.value = 'Perfect Scale';
//Cab 7
auxl.cadeCab7Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab7Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-24}, end: {x:-8.5, y:0, z:-23.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab7Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game7Preview,]};
auxl.cadeCab7Layer.layer.all.child0.core.core.text.value = 'Reflex 7';

//Right
//Cab 8
auxl.cadeCab8Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab8Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-12}, end: {x:9, y:0, z:-11.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab8Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game8Preview,]};
auxl.cadeCab8Layer.layer.all.child0.core.core.text.value = 'Tap It';
//Cab 9
auxl.cadeCab9Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab9Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-14}, end: {x:9, y:0, z:-13.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab9Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game9Preview,]};
auxl.cadeCab9Layer.layer.all.child0.core.core.text.value = 'Pop Pop';
//Cab 10
auxl.cadeCab10Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab10Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-16}, end: {x:9, y:0, z:-15.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab10Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game10Preview,]};
auxl.cadeCab10Layer.layer.all.child0.core.core.text.value = 'Horde Halt';
//Cab 11
auxl.cadeCab11Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab11Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-18}, end: {x:9, y:0, z:-17.5}, yOffset: 0, collide: true}}, true);
//Cab 12
auxl.cadeCab12Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab12Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-20}, end: {x:9, y:0, z:-19.5}, yOffset: 0, collide: true}}, true);
//Cab 13
auxl.cadeCab13Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab13Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-22}, end: {x:9, y:0, z:-21.5}, yOffset: 0, collide: true}}, true);
//Cab 14
auxl.cadeCab14Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab14Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-24}, end: {x:9, y:0, z:-23.5}, yOffset: 0, collide: true}}, true);

//Back
//Cab 15
auxl.cadeCab15Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab15Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:6, y:0, z:-26.5}, end: {x:6.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
//Cab 16
auxl.cadeCab16Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab16Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:3.5, y:0, z:-26.5}, end: {x:4, y:0, z:-26}, yOffset: 0, collide: true}}, true);
//Cab 17
auxl.cadeCab17Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab17Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:1, y:0, z:-26.5}, end: {x:1.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
//Cab 18
auxl.cadeCab18Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab18Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-1.5, y:0, z:-26.5}, end: {x:-1, y:0, z:-26}, yOffset: 0, collide: true}}, true);
//Cab 19
auxl.cadeCab19Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab19Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-4, y:0, z:-26.5}, end: {x:-3.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
//Cab 20
auxl.cadeCab20Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab20Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-6.5, y:0, z:-26.5}, end: {x:-6, y:0, z:-26}, yOffset: 0, collide: true}}, true);

//Front
//Cab 21
auxl.cadeCab21Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab21Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:-3.5, y:0, z:-10}, end: {x:-3, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
//Cab 22
auxl.cadeCab22Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab22Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:-1.5, y:0, z:-10}, end: {x:-1, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
//Cab 23
auxl.cadeCab23Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab23Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:1, y:0, z:-10}, end: {x:1.5, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
//Cab 24
auxl.cadeCab24Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab24Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:3, y:0, z:-10}, end: {x:3.5, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);

//
//Companion Menu Style
auxl.menuStyleData = {
data:'menuStyleData',
id:'menuStyle',
sources:false,
text: {value:'Menu', wrapCount: 20, color: "#FFFFFF", font: "exo2bold", zOffset: 0.025, side: 'double', align: "center", baseline: 'center'},
geometry: {primitive: 'circle', radius: 0.25, segments: 32, thetaStart: 0, thetaLength: 360},
material: {shader: "standard", color: "#2694ce", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#2694ce", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:{
click1:{property: 'scale', from: '1 1 1', to: '1.05 1.05 1.05', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};

//
//Companion Menu Additions
//Main Menu Additions
auxl.addToMainMenu = {
	menu3: {
		id: 'backgroundMusic',
		style: false,
		title: 'Music',
		description: 'Toggle background audio',
		subMenu: false,
		action: {
			auxlObj: 'player',
			component: false,
			method: 'ToggleBackgroundAudio',
			params: 'null',
			menu: 'stay',
		},
	},
};


//
//More Companion Shapes

//
//Pac-Man
auxl.compManParentData = {
data:'compManParentData',
id:'compManParent',
sources:false,
text: false,
geometry: false,
material: false,
position: new THREE.Vector3(2,1.5,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['a-ent'],
components: {
['stare']:{id: 'playerRig'},
},
};
auxl.compManParent = auxl.Core(auxl.compManParentData);
auxl.compManData = {
data:'compManData',
id:'compMan',
sources: false,
text: false,
geometry: {primitive: 'cylinder', height:0.225, radius:0.325, segmentsHeight:2, segmentsRadial:32, openEnded:false, side:'double', thetaStart:225, thetaLength:270},
material: {shader: "standard", color: "#f2f603", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#f2f603", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,90,90),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compMan = auxl.Core(auxl.compManData);
auxl.compManLayerData = {
	parent: {core: auxl.compManParent},
	child0: {core: auxl.compMan}, 
}
auxl.compManLayer = auxl.Layer('compManLayer',auxl.compManLayerData);
auxl.comp.AddAvatar('Pac Man','compManLayer');

//
//Snow Man
auxl.compShape1ParentData = {
data:'compShape1ParentData',
id:'compShape1Parent',
sources:false,
text: false,
geometry: false,
material: false,
position: new THREE.Vector3(2,1.5,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['a-ent'],
components: {
['stare']:{id: 'playerRig'},
},
};
auxl.compShape1Parent = auxl.Core(auxl.compShape1ParentData);
auxl.compShape1Data = {
data:'compShape1Data',
id:'compShape1',
sources:false,
text: false,
geometry: {primitive: 'sphere', radius: 0.25,},
material: {shader: "standard", color: "#d6d6d6", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#d6d6d6", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,-0.4,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1 = auxl.Core(auxl.compShape1Data);
auxl.compShape1aData = {
data:'compShape1aData',
id:'compShape1a',
sources:false,
text: false,
geometry: {primitive: 'sphere', radius: 0.2,},
material: {shader: "standard", color: "#d6d6d6", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#d6d6d6", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,-0.1,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1a = auxl.Core(auxl.compShape1aData);
auxl.compShape1bData = {
data:'compShape1bData',
id:'compShape1b',
sources:false,
text: false,
geometry: {primitive: 'sphere', radius: 0.15,},
material: {shader: "standard", color: "#d6d6d6", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#d6d6d6", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,0.15,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1b = auxl.Core(auxl.compShape1bData);
auxl.compShape1b1Data = {
data:'compShape1b1Data',
id:'compShape1b1',
sources:false,
text: false,
geometry: {primitive: 'cylinder', height:0.04, radius:0.04, segmentsHeight:2, segmentsRadial:32, openEnded:false, side:'double', thetaStart:0, thetaLength:360},
material: {shader: "standard", color: "#4b4848", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#4b4848", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(-0.075,0.025,0.15),
rotation: new THREE.Vector3(0,90,90),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1b1 = auxl.Core(auxl.compShape1b1Data);
auxl.compShape1b2Data = {
data:'compShape1b2Data',
id:'compShape1b2',
sources:false,
text: false,
geometry: {primitive: 'cylinder', height:0.04, radius:0.04, segmentsHeight:2, segmentsRadial:32, openEnded:false, side:'double', thetaStart:0, thetaLength:360},
material: {shader: "standard", color: "#4b4848", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#4b4848", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0.075,0.025,0.15),
rotation: new THREE.Vector3(0,90,90),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1b2 = auxl.Core(auxl.compShape1b2Data);
auxl.compShape1b3Data = {
data:'compShape1b3Data',
id:'compShape1b3',
sources:false,
text: false,
geometry: {primitive: 'cone', height:0.04, radiusBottom:0.04, radiusTop: 0, segmentsHeight:2, segmentsRadial:32, openEnded:false, side:'double', thetaStart:0, thetaLength:360},
material: {shader: "standard", color: "#e29c00", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#e29c00", emissiveIntensity: 0.6, side: 'double'},
position: new THREE.Vector3(0,-0.025,0.15),
rotation: new THREE.Vector3(0,90,90),
scale: new THREE.Vector3(1,1,1),
animations:false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.compShape1b3 = auxl.Core(auxl.compShape1b3Data);
auxl.compShape1LayerData = {
	parent: {core: auxl.compShape1Parent},
	child0: {core: auxl.compShape1}, 
	child1: {core: auxl.compShape1a}, 
	child2: {
		parent: {core: auxl.compShape1b},
		child0: {core: auxl.compShape1b1}, 
		child1: {core: auxl.compShape1b2},
		child2: {core: auxl.compShape1b3},
	},
}
auxl.compShape1Layer = auxl.Layer('compShape1Layer',auxl.compShape1LayerData);
auxl.comp.AddAvatar('Snow Man','compShape1Layer');

//
//Companion Speech
//Comp Book
auxl.compCadePage0Data = {
	info:{
		id:'compCadePage0',
		description:'Companion page 0.',
		tags:'comp',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	timeline0:{
		self:{Speak:{speech:'Hello! I am your attendent, open my menu to see everything I can do for you.'},},
	},
	timeline1:{
		self:{Speak:{speech:'Use the assigned button or click on the your floor compass to toggle me.'},},
	},
	timeline2:{
		self:{Speak:{speech:'Check out each named arcade cabinet for a game to play.'},},
	},
	timeline3:{
		self:{Speak:{speech:'Your top 5 High Scores for each game are recorded. Use the HTML menu to reset them if you need.'},},
	},
	timeline4:{
		self:{Speak:{speech:'For more nostalgic styles, you can change the carpet with a few classic options on the back wall.'},},
	},
	timeline5:{
		self:{Speak:{speech:'Check back often for more games!'},},
	},
	timeline6:{
		self:{Speak:{speech:'Interested in supporting Mintys XRcade development?'},},
	},
	timeline7:{
		self:{Speak:{speech:'There are various ways you can help, view them all at mintycrisp.com or mintyxr.com .'},},
	},
	timeline8:{
		self:{Speak:{speech:'Mintys XRcade is made for Web XR. You can play on Desktop, Mobile and in VR!'},},
	},
	timeline9:{
		self:{Speak:{speech:'XRcade is built with AUXL (A-Frame UX Library). An engine built on top of the excellent XR renderer A-Frame.'},},
	},
	timeline10:{
		self: {ResetBook: true},
	},
};
auxl.compCadeIdleData = {
	info:{
		id:'compCadeIdleData',
		description:'Companion idle page.',
		tags:'comp',
		nextPage: null,
		prevPage: null,
		timeline:'random',
	},
	timeline0:{
		self:{Speak:{speech:'How good are your memory skills? Play the Memory Order game to test yourself.'}},
	},
	timeline1:{
		self:{Speak:{speech:'Do you have a quick hand? See how quick with the Swipe Launch game.'}},
	},
	timeline2:{
		self:{Speak:{speech:'Have an eye for distance? Use your skills progress through the Guess Hit game.'}},
	},
	timeline3:{
		self:{Speak:{speech:'Do you have fast reflexes? Test your speed with an onslaught of targets with Drag Diffuse.'}},
	},
	timeline4:{
		self:{Speak:{speech:'Fancy yourself a quick shot? Try the Sharp Shooter game to see!'}},
	},
	timeline5:{
		self:{Speak:{speech:'Can you find the right shape in Perfect Scale? Tweak them till you find it!'}},
	},
	timeline6:{
		self:{Speak:{speech:'You may have a quick response time once, but how well can you do with 7 average chances?'}},
	},
	timeline7:{
		self:{Speak:{speech:'Tap it, Swipe it, Double Tap it or Drag it! Can you keep up?'}},
	},
	timeline8:{
		self:{Speak:{speech:'Call yourself a collector? Collect as many as you can in Pop Pop!'}},
	},
	timeline9:{
		self:{Speak:{speech:'Can you withstand the onslaught? Stun and Slash to protect yourself and see how long you can last.'}},
	},
	timeline10:{
		self:{Speak:{speech:'Your top 5 High Scores for each game are recorded. Use the HTML menu to reset them if you need.'},},
	},
	timeline11:{
		self:{Speak:{speech:'For more nostalgic styles, you can change the carpet with a few classic options on the back wall.'},},
	},
	timeline12:{
		self:{Speak:{speech:'Check back often for more games!'},},
	},
	timeline13:{
		self:{Speak:{speech:'Interested in supporting Mintys XRcade development?'},},
	},
	timeline14:{
		self:{Speak:{speech:'There are various ways you can help, view them all at mintycrisp.com or mintyxr.com .'},},
	},
	timeline15:{
		self:{Speak:{speech:'Mintys XRcade is made for Web XR. You can play on Desktop, Mobile and in VR!'},},
	},
	timeline16:{
		self:{Speak:{speech:'XRcade is built with AUXL (A-Frame UX Library). An engine built on top of the excellent XR renderer A-Frame.'},},
	},
	timeline11:{
		self: {IdleReset: true},
	},
};
auxl.compCadeBookData = {
	info:{
		id:'compCadeBook',
		name: 'Comp',
		description:'Companion book.',
		tags:'comp',
		timeline: 'other',
		idleDelay: 5000,
		idleInterval: 8000,
	},
	pages:{
		page0: auxl.compCadePage0Data,
	},
	idle:{
		page0: auxl.compCadeIdleData,
	},
};

//
//Custom Functions

//Carpet Changes Buttons
auxl.changeCarpetTexture = (style) => {
	auxl.floor.core.material.src = auxl[style];
	if(auxl.floor.core.inScene){
		auxl.floor.ChangeSelf({property: 'material', value:{src: auxl[style]}})
	}
}

//JukeBox Controls
//Update Text
auxl.UpdateBackgroundToggleText = () => {
	if(auxl.backgroundAudio){
		auxl.jukeBoxAudioToggle.ChangeSelf({property: 'text', value:{value: 'Disable Background Audio'}});
	} else {
		auxl.jukeBoxAudioToggle.ChangeSelf({property: 'text', value:{value: 'Enable Background Audio'}});
	}
	//Workaround to ensure toggled spawn of option is removed on scene swap
	auxl.spawnTracker('jukeBoxAudioToggle', 'node');
}
//Toggle Text
auxl.ToggleBackgroundAudioText = () => {
	if(auxl.backgroundAudio){
		auxl.jukeBoxAudioToggle.ChangeSelf({property: 'text', value:{value: 'Disable Background Audio'}});
	} else {
		auxl.jukeBoxAudioToggle.ChangeSelf({property: 'text', value:{value: 'Enable Background Audio'}});
	}
}


//Build Scene Library Objects
auxl.buildSceneLibrary = () => {
	auxl.skyGrad1 = auxl.Core(auxl.skyGrad1Data);
	auxl.skyBox1 = auxl.SkyBox(auxl.skyBox1Data);
	auxl.floor = auxl.Core(auxl.floorData);
	auxl.carpetChange1 = auxl.Core(auxl.carpetChange1Data);
	auxl.carpetChange2 = auxl.Core(auxl.carpetChange2Data);
	auxl.carpetChange3 = auxl.Core(auxl.carpetChange3Data);
	auxl.carpetChange4 = auxl.Core(auxl.carpetChange4Data);
	auxl.carpetChange5 = auxl.Core(auxl.carpetChange5Data);
	auxl.mtnFloor = auxl.Core(auxl.mtnFloorData);
	auxl.wallLong1 = auxl.Core(auxl.wallLong1Data);
	auxl.wallLong2 = auxl.Core(auxl.wallLong2Data);
	auxl.wallShort1 = auxl.Core(auxl.wallShort1Data);
	auxl.wallShort2 = auxl.Core(auxl.wallShort2Data);
	auxl.wallDivide1 = auxl.Core(auxl.wallDivide1Data);
	auxl.wallIndent1 = auxl.Core(auxl.wallIndent1Data);
	auxl.wallIndent2 = auxl.Core(auxl.wallIndent2Data);
	auxl.wallCorner1 = auxl.Core(auxl.wallCorner1Data);
	auxl.wallCorner2 = auxl.Core(auxl.wallCorner2Data);
	auxl.jukeBox = auxl.Core(auxl.jukeBoxData);
	auxl.jukeBoxAudioToggle = auxl.Core(auxl.jukeBoxAudioToggleData);
	auxl.token = auxl.Core(auxl.tokenData);
	auxl.sponsor1 = auxl.Core(auxl.sponsor1Data);
	auxl.xrcadeSign = auxl.Core(auxl.xrcadeSignData);
	auxl.wavesSign = auxl.Core(auxl.wavesSignData);
	auxl.heartsSign = auxl.Core(auxl.heartsSignData);
	auxl.treeSign = auxl.Core(auxl.treeSignData);
	auxl.ivxSign = auxl.Core(auxl.ivxSignData);
	auxl.cadeSign1 = auxl.Core(auxl.cadeSignData);
	auxl.cadeSign2 = auxl.Core(auxl.cadeSign2Data);
	auxl.lineSign1 = auxl.Core(auxl.lineSign1Data);
	auxl.lineSign2 = auxl.Core(auxl.lineSign2Data);
	auxl.lineSign3 = auxl.Core(auxl.lineSign3Data);
	auxl.cadeCab = auxl.Core(auxl.cadeCabData);
	auxl.cabTitle = auxl.Core(auxl.cabTitleData);
	auxl.cabLayer = auxl.Layer('cabLayer', auxl.cabLayerData);
	auxl.compManLayer = auxl.Layer('compManLayer',auxl.compManLayerData);
	auxl.comp.AddAvatar('Pac Man','compManLayer');
	auxl.compShape1Parent = auxl.Core(auxl.compShape1ParentData);
	auxl.compShape1 = auxl.Core(auxl.compShape1Data);
	auxl.compShape1a = auxl.Core(auxl.compShape1aData);
	auxl.compShape1b = auxl.Core(auxl.compShape1bData);
	auxl.compShape1b1 = auxl.Core(auxl.compShape1b1Data);
	auxl.compShape1b2 = auxl.Core(auxl.compShape1b2Data);
	auxl.compShape1b3 = auxl.Core(auxl.compShape1b3Data);
	auxl.compShape1Layer = auxl.Layer('compShape1Layer',auxl.compShape1LayerData);
	auxl.comp.AddAvatar('Snow Man','compShape1Layer');
	//Left
	//Cab 1
	auxl.cadeCab1Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab1Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-12}, end: {x:-8.5, y:0, z:-11.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab1Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game1Preview,]};
	auxl.cadeCab1Layer.GetChild('cadeCab1Layer1').core.text.value = 'Memory Order';
	//Cab 2
	auxl.cadeCab2Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab2Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-14}, end: {x:-8.5, y:0, z:-13.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab2Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game2Preview,]};
	auxl.cadeCab2Layer.GetChild('cadeCab2Layer1').core.text.value = 'Swipe Launch';
	//Cab 3
	auxl.cadeCab3Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab3Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-16}, end: {x:-8.5, y:0, z:-15.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab3Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game3Preview,]};
	auxl.cadeCab3Layer.GetChild('cadeCab3Layer1').core.text.value = 'Guess Hit';
	//Cab 4
	auxl.cadeCab4Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab4Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-18}, end: {x:-8.5, y:0, z:-17.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab4Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game4Preview,]};
	auxl.cadeCab4Layer.GetChild('cadeCab4Layer1').core.text.value = 'Drag Diffuse';
	//Cab 5
	auxl.cadeCab5Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab5Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-20}, end: {x:-8.5, y:0, z:-19.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab5Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game5Preview,]};
	auxl.cadeCab5Layer.layer.all.child0.core.core.text.value = 'Sharp Shooter';
	//Cab 6
	auxl.cadeCab6Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab6Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-22}, end: {x:-8.5, y:0, z:-21.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab6Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game6Preview,]};
	auxl.cadeCab6Layer.layer.all.child0.core.core.text.value = 'Perfect Scale';
	//Cab 7
	auxl.cadeCab7Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab7Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-9, y:0, z:-24}, end: {x:-8.5, y:0, z:-23.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab7Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game7Preview,]};
	auxl.cadeCab7Layer.layer.all.child0.core.core.text.value = 'Reflex 7';

	//Right
	//Cab 8
	auxl.cadeCab8Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab8Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-12}, end: {x:9, y:0, z:-11.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab8Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game8Preview,]};
	auxl.cadeCab8Layer.layer.all.child0.core.core.text.value = 'Tap It';
	//Cab 9
	auxl.cadeCab9Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab9Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-14}, end: {x:9, y:0, z:-13.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab9Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game9Preview,]};
	auxl.cadeCab9Layer.layer.all.child0.core.core.text.value = 'Pop Pop';
	//Cab 10
	auxl.cadeCab10Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab10Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-16}, end: {x:9, y:0, z:-15.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab10Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game10Preview,]};
	auxl.cadeCab10Layer.layer.all.child0.core.core.text.value = 'Horde Halt';
	//Cab 11
	auxl.cadeCab11Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab11Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-18}, end: {x:9, y:0, z:-17.5}, yOffset: 0, collide: true}}, true);
	//Cab 12
	auxl.cadeCab12Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab12Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-20}, end: {x:9, y:0, z:-19.5}, yOffset: 0, collide: true}}, true);
	//Cab 13
	auxl.cadeCab13Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab13Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-22}, end: {x:9, y:0, z:-21.5}, yOffset: 0, collide: true}}, true);
	//Cab 14
	auxl.cadeCab14Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab14Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:8.5, y:0, z:-24}, end: {x:9, y:0, z:-23.5}, yOffset: 0, collide: true}}, true);
	//Back
	//Cab 15
	auxl.cadeCab15Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab15Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:6, y:0, z:-26.5}, end: {x:6.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Cab 16
	auxl.cadeCab16Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab16Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:3.5, y:0, z:-26.5}, end: {x:4, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Cab 17
	auxl.cadeCab17Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab17Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:1, y:0, z:-26.5}, end: {x:1.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Cab 18
	auxl.cadeCab18Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab18Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-1.5, y:0, z:-26.5}, end: {x:-1, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Cab 19
	auxl.cadeCab19Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab19Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-4, y:0, z:-26.5}, end: {x:-3.5, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Cab 20
	auxl.cadeCab20Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab20Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-6.5, y:0, z:-26.5}, end: {x:-6, y:0, z:-26}, yOffset: 0, collide: true}}, true);
	//Front
	//Cab 21
	auxl.cadeCab21Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab21Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:-3.5, y:0, z:-10}, end: {x:-3, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
	//Cab 22
	auxl.cadeCab22Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab22Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:-1.5, y:0, z:-10}, end: {x:-1, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
	//Cab 23
	auxl.cadeCab23Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab23Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:1, y:0, z:-10}, end: {x:1.5, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);
	//Cab 24
	auxl.cadeCab24Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab24Layer', {rotation: new THREE.Vector3(0,180,0)}, {grid: {start:{x:3, y:0, z:-10}, end: {x:3.5, y:0, z:-9.5}, yOffset: 0, collide: true}}, true);

}
auxl.toBeRebuilt('buildSceneLibrary');

},
});

//auxl-scenes
//AUXL Scenario : NodeScene and MapZone's Data and Cores
AFRAME.registerComponent('scenes', {
dependencies: ['auxl'],
init: function () {
//AUXL System Connection
const auxl = document.querySelector('a-scene').systems.auxl;

//
//World Atlas MapZones & NodeScenes

//
//XRcade Zone
auxl.xrcadeZoneData = {
	info:{
		id: 'xrcadeZone',
		name: 'XRcade Zone',
		zoneNum: 0,
		start: 'xrcadeHome',
		travelMenu: false,
	},
	controls:{
	},
	start:{
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{

	},
};
//Home
auxl.xrcadeHomeData = {
	info:{
		id:'xrcadeHome',
		name: 'XRcade Home',
		description: 'Welcome to XRcade! This is the home area for all the games.',
		sceneText: false,
		fog: false,
		map: {
			size: 120,
			height: {top: 2, bottom: 0},
			edge: false,
			spawnEdge: false,
			edgeUpdate: false,
		},
		spawnPos:'other',
	},
	controls:{
	},
	start:{
		floor:{SpawnCore:null},
		wallLong1:{SpawnCoreOnGrid:null},
		wallLong2:{SpawnCoreOnGrid:null},
		wallShort1:{SpawnCoreOnGrid:null},
		wallShort2:{SpawnCoreOnGrid:null},
		wallDivide1:{SpawnCoreOnGrid:null},
		wallIndent1:{SpawnCoreOnGrid:null},
		wallIndent2:{SpawnCoreOnGrid:null},
		wallCorner1:{SpawnCoreOnGrid:null},
		wallCorner2:{SpawnCoreOnGrid:null},
		cadeCab1Layer:{SpawnLayerOnGrid:null},
		cadeCab2Layer:{SpawnLayerOnGrid:null},
		cadeCab3Layer:{SpawnLayerOnGrid:null},
		cadeCab4Layer:{SpawnLayerOnGrid:null},
		cadeCab5Layer:{SpawnLayerOnGrid:null},
		cadeCab6Layer:{SpawnLayerOnGrid:null},
		cadeCab7Layer:{SpawnLayerOnGrid:null},
		cadeCab8Layer:{SpawnLayerOnGrid:null},
		cadeCab9Layer:{SpawnLayerOnGrid:null},
		cadeCab10Layer:{SpawnLayerOnGrid:null},
		cadeCab11Layer:{SpawnLayerOnGrid:null},
		cadeCab12Layer:{SpawnLayerOnGrid:null},
		cadeCab13Layer:{SpawnLayerOnGrid:null},
		cadeCab14Layer:{SpawnLayerOnGrid:null},
		cadeCab15Layer:{SpawnLayerOnGrid:null},
		cadeCab16Layer:{SpawnLayerOnGrid:null},
		cadeCab17Layer:{SpawnLayerOnGrid:null},
		cadeCab18Layer:{SpawnLayerOnGrid:null},
		cadeCab19Layer:{SpawnLayerOnGrid:null},
		cadeCab20Layer:{SpawnLayerOnGrid:null},
		cadeCab21Layer:{SpawnLayerOnGrid:null},
		cadeCab22Layer:{SpawnLayerOnGrid:null},
		cadeCab23Layer:{SpawnLayerOnGrid:null},
		cadeCab24Layer:{SpawnLayerOnGrid:null},
		jukeBox:{SpawnCoreOnGrid:null},
		token:{SpawnCoreOnGrid:null},
		sponsor1:{SpawnCore:null},
		cadeSign1:{SpawnCore:null},
		cadeSign2:{SpawnCore:null},
		wavesSign:{SpawnCore:null},
		heartsSign:{SpawnCore:null},
		treeSign:{SpawnCore:null},
		ivxSign:{SpawnCore:null},
		lineSign1:{SpawnCore:null},
		lineSign2:{SpawnCore:null},
		lineSign3:{SpawnCore:null},
		carpetChange1:{SpawnCore:null},
		carpetChange2:{SpawnCore:null},
		carpetChange3:{SpawnCore:null},
		carpetChange4:{SpawnCore:null},
		carpetChange5:{SpawnCore:null},
		highScoresBoard:{SpawnBoard:null, UpdateBoard:null},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
		click:{
			cadeCab1Layer:{relay:{
				memoryGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab2Layer:{relay:{
				swipeLaunchGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab3Layer:{relay:{
				guessHitGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab4Layer:{relay:{
				dragDiffuseGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab5Layer:{relay:{
				sharpShooterGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab6Layer:{relay:{
				perfectScaleGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab7Layer:{relay:{
				reflex7GameMenu:{ToggleGameMenu:null},
			}},
			cadeCab8Layer:{relay:{
				tapItGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab9Layer:{relay:{
				popPopGameMenu:{ToggleGameMenu:null},
			}},
			cadeCab10Layer:{relay:{
				hordeHaltGameMenu:{ToggleGameMenu:null},
			}},
		},
	},
	exit:{
	},
	map:{
		data: auxl.xrcadeZoneData.xrcadeHome,
	},
};
//Game 1 - Memory Order
auxl.game1Data = {
	info:{
		id:'game1',
		name: 'Memory Order',
		description: 'Play the Memory Order game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.memoryGameColor.compl, emissive: auxl.memoryGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:0},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		memory:{SpawnMemGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern27, repeat: '50 50',color: auxl.memoryGameColor.base, emissive: auxl.memoryGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-11.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game1,
	},
};
//Game 2 - Swipe Launch
auxl.game2Data = {
	info:{
		id:'game2',
		name: 'Swipe Launch',
		description: 'Play the Swipe Launch game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.swipeLaunchGameColor.compl, emissive: auxl.swipeLaunchGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:1},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		swipeLaunchGame:{SpawnSLGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern16, repeat: '50 50',color: auxl.swipeLaunchGameColor.base, emissive: auxl.swipeLaunchGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-13.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game2,
	},
};
//Game 3 - Guess Hit
auxl.game3Data = {
	info:{
		id:'game3',
		name: 'Guess Hit',
		description: 'Play the Guess Hit game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.guessHitGameColor.compl, emissive: auxl.guessHitGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:1},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		guessHitGame:{SpawnGHGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern14, repeat: '50 50',color: auxl.guessHitGameColor.base, emissive: auxl.guessHitGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-15.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game3,
	},
};
//Game 4 - Drag Diffuse
auxl.game4Data = {
	info:{
		id:'game4',
		name: 'Drag Diffuse',
		description: 'Play the Drag Diffuse game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.dragDiffuseGameColor.compl, emissive: auxl.dragDiffuseGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:1},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		dragDiffuseGame:{SpawnDDGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern32, repeat: '50 50',color: auxl.dragDiffuseGameColor.base, emissive: auxl.dragDiffuseGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-17.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game4,
	},
};
//Game 5 - Sharp Shooter
auxl.game5Data = {
	info:{
		id:'game5',
		name: 'Sharp Shooter',
		description: 'Play the Sharp Shooter game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.sharpShooterGameColor.compl, emissive: auxl.sharpShooterGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:2},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		sharpShooterGame:{SpawnSSGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern80, repeat: '50 50', color: auxl.sharpShooterGameColor.base, emissive: auxl.sharpShooterGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-19.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game5,
	},
};
//Game 6 - Perfect Scale
auxl.game6Data = {
	info:{
		id:'game6',
		name: 'Perfect Scale',
		description: 'Play the Perfect Scale game.',
		sceneText: false,
		fog: false,
		map: {
			size: 50,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.perfectScaleGameColor.compl, emissive: auxl.perfectScaleGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:9},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		perfectScaleGame:{SpawnPSGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern60, repeat: '50 50', color: auxl.perfectScaleGameColor.base, emissive: auxl.perfectScaleGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-21.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game6,
	},
};
//Game 7 - Reflex 7
auxl.game7Data = {
	info:{
		id:'game7',
		name: 'Reflex 7',
		description: 'Play the Reflex 7 game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.reflex7GameColor.compl, emissive: auxl.reflex7GameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:2},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		reflex7Game:{SpawnR7Game: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern83, repeat: '50 50', color: auxl.reflex7GameColor.base, emissive: auxl.reflex7GameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(-7,0,-23.75), TwistTo: 90},
	},
	map:{
		data: auxl.xrcadeZoneData.game7,
	},
};
//Game 8 - Tap It
auxl.game8Data = {
	info:{
		id:'game8',
		name: 'Tap It',
		description: 'Play the Tap It game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.tapItGameColor.compl, emissive: auxl.tapItGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:2},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		tapItGame:{SpawnTIGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern75, repeat: '50 50', color: auxl.tapItGameColor.base, emissive: auxl.tapItGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(7,0,-11.75), TwistTo: -90},
	},
	map:{
		data: auxl.xrcadeZoneData.game8,
	},
};
//Game 9 - Pop Pop
auxl.game9Data = {
	info:{
		id:'game9',
		name: 'Pop Pop',
		description: 'Play the Pop Pop game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.popPopGameColor.compl, emissive: auxl.popPopGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:2},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		popPopGame:{SpawnPPGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern34, repeat: '50 50', color: auxl.popPopGameColor.base, emissive: auxl.popPopGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(7,0,-13.75), TwistTo: -90},
	},
	map:{
		data: auxl.xrcadeZoneData.game9,
	},
};
//Game 10 - Horde Halt
auxl.game10Data = {
	info:{
		id:'game10',
		name: 'Horde Halt',
		description: 'Play the Horde Halt game.',
		sceneText: false,
		fog: false,
		map: {
			size: 10,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: {shader: "standard", color: auxl.hordeHaltGameColor.compl, emissive: auxl.hordeHaltGameColor.compl, emissiveIntensity: 0.1, opacity: 1},
		},
		spawnPos:{x:0,y:0,z:2},
	},
	controls:{
	},
	start:{
		player:{TwistTo: 0},
		hordeHaltGame:{SpawnHHGame: null},
		mtnFloor:{SpawnCore:null,ChangeSelf:{property: 'material', value: {src: auxl.pattern82, repeat: '50 50', color: auxl.hordeHaltGameColor.base, emissive: auxl.hordeHaltGameColor.base,},}},
	},
	delay:{
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
		player:{UpdatePlayerPosition: new THREE.Vector3(7,0,-15.75), TwistTo: -90},
	},
	map:{
		data: auxl.xrcadeZoneData.game10,
	},
};
//Build
auxl.xrcadeHome = auxl.SceneNode(auxl.xrcadeHomeData);
auxl.game1 = auxl.SceneNode(auxl.game1Data);
auxl.game2 = auxl.SceneNode(auxl.game2Data);
auxl.game3 = auxl.SceneNode(auxl.game3Data);
auxl.game4 = auxl.SceneNode(auxl.game4Data);
auxl.game5 = auxl.SceneNode(auxl.game5Data);
auxl.game6 = auxl.SceneNode(auxl.game6Data);
auxl.game7 = auxl.SceneNode(auxl.game7Data);
auxl.game8 = auxl.SceneNode(auxl.game8Data);
auxl.game9 = auxl.SceneNode(auxl.game9Data);
auxl.game10 = auxl.SceneNode(auxl.game10Data);
auxl.xrcadeZone = auxl.MapZone(auxl.xrcadeZoneData);

//
//Scenarios

//
//Testing Scenario
auxl.mintyScenarioData = {
	info:{
		id: 'mintyScenario',
		name: 'Minty XRcade',
		scenarioNum: 0,
		startZone: 'xrcadeZone',
		instructions: 'A scenario consisting of a bunch of mini games.',
	},
	
	map:{
		xrcadeZone:{
			xrcadeHome:{
				connect0: {inZone: true, node: 'game1',},
				connect1: {inZone: true, node: 'game2',},
				connect2: {inZone: true, node: 'game3',},
				connect3: {inZone: true, node: 'game4',},
				connect4: {inZone: true, node: 'game5',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game1:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game2',},
				connect2: {inZone: true, node: 'game3',},
				connect3: {inZone: true, node: 'game4',},
				connect4: {inZone: true, node: 'game5',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game2:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game3',},
				connect3: {inZone: true, node: 'game4',},
				connect4: {inZone: true, node: 'game5',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game3:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game4',},
				connect4: {inZone: true, node: 'game5',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game4:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game5',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game5:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game6',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game6:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game7',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game7:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game6',},
				connect7: {inZone: true, node: 'game8',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game8:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game6',},
				connect7: {inZone: true, node: 'game7',},
				connect8: {inZone: true, node: 'game9',},
				connect9: {inZone: true, node: 'game10',},
			},
			game9:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game6',},
				connect7: {inZone: true, node: 'game7',},
				connect8: {inZone: true, node: 'game8',},
				connect9: {inZone: true, node: 'game10',},
			},
			game10:{
				connect0: {inZone: true, node: 'xrcadeHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game6',},
				connect7: {inZone: true, node: 'game7',},
				connect8: {inZone: true, node: 'game8',},
				connect9: {inZone: true, node: 'game9',},
			},
		},
	},
	controls:{
		action1Down:{auxlObj: 'playerRig', component: 'locomotion', func: 'toggleSpeed', name: 'Toggle Walk/Run', info: 'Change your walking speed between walk and run.'},
		action2Down:{auxlObj: 'player', func: 'ToggleCrouch', name: 'Toggle Crouch/Stand', info: 'Change your position speed between crouch and standing.'},
		action6Down:{auxlObj: 'player', func: 'SnapLeft45', name: 'Snap View Left', info: 'Quick snap your view 45 degrees to the left.'},
		action7Down:{auxlObj: 'player', func: 'SnapRight45', name: 'Snap View Right', info: 'Quick snap your view 45 degrees to the right.'},
		action8Down:{auxlObj: 'player', func: 'MainMenuAction', name: 'Toggle Main Menu', info: 'Go back in the Main Menu or Spawn/Despawn Companion.'},
	},
	start:{
		skyBox1:{SpawnSkyBox: null},
		comp:{SpawnComp: null},
	},
	delay:{
		100:{
			skyBox1:{SetTime: 6.45},
		},
	},
	interval:{
	},
	event:{
	},
	interaction:{
	},
	exit:{
	},
};
auxl.mintyScenario = auxl.Scenario(auxl.mintyScenarioData);

//
//Minty World
auxl.mintyWorldData = {
	info:{
		id: 'mintyWorld',
		name: 'Minty World',
		description: 'A world containing various games.',
		maxLoadtime: 5000,
		dayTime: 60000,
		inventory: false,
		collision: true,
		physics: false,
		menuStyle: auxl.menuStyleData,
		menuOptions: auxl.addToMainMenu,
		backgroundAudio: auxl.town3,
		compBookUpdate: auxl.compCadeBookData,

	},
	scenarios:[
		auxl.mintyScenario,
	],
};
auxl.mintyWorld = auxl.World(auxl.mintyWorldData);
auxl.mintyWorld.SetAsDefault();

//
//System Loaded
auxl.systemLoaded();

    },
});