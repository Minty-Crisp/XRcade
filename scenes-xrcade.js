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

//
//Library Modifications

scale: new THREE.Vector3(8.046,8.046,8.046),

auxl.sun.core.geometry.radius = 100;
auxl.moon.core.geometry.radius = 100;
auxl.sun.core.position = new THREE.Vector3(0,0,-420)
auxl.moon.core.position = new THREE.Vector3(0,0,-420)

//
//Doors

//Door 1
auxl.kayKitDoor1Data = {
	data:'kayKitDoor1Data',
	id:'kayKitDoor1',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door1.glb',
	},
};
auxl.kayKitDoor1 = auxl.Core(auxl.kayKitDoor1Data);
//Door 2
auxl.kayKitDoor2Data = {
	data:'kayKitDoor2Data',
	id:'kayKitDoor2',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door2.glb',
	},
};
auxl.kayKitDoor2 = auxl.Core(auxl.kayKitDoor2Data);
//Door 3
auxl.kayKitDoor3Data = {
	data:'kayKitDoor3Data',
	id:'kayKitDoor3',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door3.glb',
	},
};
auxl.kayKitDoor3 = auxl.Core(auxl.kayKitDoor3Data);
//Door 4
auxl.kayKitDoor4Data = {
	data:'kayKitDoor4Data',
	id:'kayKitDoor4',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door4.glb',
	},
};
auxl.kayKitDoor4 = auxl.Core(auxl.kayKitDoor4Data);
//Door 5
auxl.kayKitDoor5Data = {
	data:'kayKitDoor5Data',
	id:'kayKitDoor5',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door5.glb',
	},
};
auxl.kayKitDoor5 = auxl.Core(auxl.kayKitDoor5Data);
//Door 6
auxl.kayKitDoor6Data = {
	data:'kayKitDoor6Data',
	id:'kayKitDoor6',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door6.glb',
	},
};
auxl.kayKitDoor6 = auxl.Core(auxl.kayKitDoor6Data);
//Door 7
auxl.kayKitDoor7Data = {
	data:'kayKitDoor7Data',
	id:'kayKitDoor7',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4.5,0,1.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/doors/door7.glb',
	},
};
auxl.kayKitDoor7 = auxl.Core(auxl.kayKitDoor7Data);


//
//Spooky Zone

//
//Skybox

//Use multi-sky
/*
<!-- Fading Gradient Alpha Background Night Sky -->
<a-sky id="nightsky" material="alphaTest: .89; opacity: 1;" geometry="" rotation="0 -90 0" scale="0.95 0.95 0.95" src="#sky-alpha"
animation__rotate="property: rotation; from: 0 0 0; to: 0 0 360; dur: 400000; delay: 0; loop: true; dir: normal; easing: easeInCubic; elasticity: 400; autoplay: true; enabled: true;"
></a-sky> 
*/

//SkyBox
auxl.skyGradSpookyData = {
data: 'skyGradSpookyData',
id: 'skyGradSpooky',
entity: 'a-sky',
sources: false,
text: false,
geometry: false,
material: {shader: 'threeColorGradientShader', topColor: '#613381', middleColor: '#99154E', bottomColor: '#b967ff'},
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: {

top0:{property: 'material.topColor', from: '#04718b', to: '#04718b', dur: 1, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: true, enabled: true,},

mid0:{property: 'material.middleColor', from: '#b2590c', to: '#b2590c', dur: 1, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: true, enabled: true,},

top1:{property: 'material.topColor', from: '#613381', to: '#04718b', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__top0, animationcomplete__top2', pauseEvents: 'pause', resumeEvents: 'resume'},

mid1:{property: 'material.middleColor', from: '#99154E', to: '#b2590c', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__mid0, animationcomplete__mid2', pauseEvents: 'pause', resumeEvents: 'resume'}, 

top2:{property: 'material.topColor', from: '#04718b', to: '#613381', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__top1', pauseEvents: 'pause', resumeEvents: 'resume'},

mid2:{property: 'material.middleColor', from: '#b2590c', to: '#99154E', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__mid1', pauseEvents: 'pause', resumeEvents: 'resume'},

},
mixins: false,
classes: ['a-ent'],
components: false,
};
auxl.skyGradSpooky = auxl.Core(auxl.skyGradSpookyData);

//Lights
auxl.directionalLight.core.components.light.intensity = 0.75;
auxl.directionalLight.core.position = new THREE.Vector3(-0.25,0.75,0.5);
auxl.directionalLight2.core.components.light.intensity = 0.1;
auxl.directionalLight2.core.position = new THREE.Vector3(0.25,0.75,-0.5);
auxl.directionalLight3.core.components.light.intensity = 0.2;
auxl.directionalLight3.core.position = new THREE.Vector3(0.25,0.75,0.5);
auxl.ambientLight.core.components.light.intensity = 0.5;


//Doorways
//

//Spooky to Entrance
auxl.spookyToEntranceData = {
data:'spookyToEntranceData',
id:'spookyToEntrance',
geometry: {primitive: 'box', depth: 1, width: 3, height: 4},
material: {shader: "standard", color: "#264e1a", emissive: '#264e1a', emissiveIntensity: 0.25, opacity: 1},
position: new THREE.Vector3(0,2,2.41),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
classes: ['clickable','a-ent'],
components: {
	doorway:{zone: 'spookyZone', to: 'connect0', posTo: true, pos: new THREE.Vector3(3,0,1), twistTo: true, twist: 180},
	hovertext:{value: 'Entrance',  hover: 'top', offset: 0.75, altOffset: 0.5, twist: true,},
},
};
auxl.spookyToEntrance = auxl.Core(auxl.spookyToEntranceData);

//Spooky to Exterior
auxl.spookyToExteriorData = {
data:'spookyToExteriorData',
id:'spookyToExterior',
position: new THREE.Vector3(0,0,0),
gridSize: new THREE.Vector3(3,0,0.5),
grid: {start:{x:-1.5, y:0, z:-19.5}, xOffset: 1, yOffset: 1, zOffset: 1, collide: true},
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1.25,1.25,1.25),
classes: ['clickable','a-ent'],
components: {
	['gltf-model']:'./assets/3d/kaykit/doors/door6.glb',
	doorway:{zone: 'spookyZone', to: 'connect1', posTo: true, pos: new THREE.Vector3(0,0,0), twistTo: true, twist: 0},
	hovertext:{value: 'In Progress Preview',  hover: 'front', offset: 0.75, altOffset: 2, twist: true,},
},
};
//Enter if you dare!
auxl.spookyToExterior = auxl.Core(auxl.spookyToExteriorData);

//Exterior to Spooky
auxl.exteriorToSpookyData = {
data:'exteriorToSpookyData',
id:'exteriorToSpooky',
position: new THREE.Vector3(0,0,0),
gridSize: new THREE.Vector3(3,0,0.5),
grid: {start:{x:-1.5, y:0, z:3}, yOffset: 0, collide: true},
rotation: new THREE.Vector3(0,180,0),
scale: new THREE.Vector3(1.25,1.25,1.25),
animations: false,
mixins: false,
classes: ['clickable','a-ent'],
components: {
	['gltf-model']:'./assets/3d/kaykit/doors/door6.glb',
	doorway:{zone: 'spookyZone', to: 'connect0', posTo: true, pos: new THREE.Vector3(0,0,-18), twistTo: true, twist: 180},
	hovertext:{value: 'To safety!',  hover: 'top', offset: 2, altOffset: 0.75, twist: true,},
},
};
auxl.exteriorToSpooky = auxl.Core(auxl.exteriorToSpookyData);

//Exterior to Room 1
auxl.exteriorToRoom1Data = {
data:'exteriorToRoom1Data',
id:'exteriorToRoom1',
position: new THREE.Vector3(0,0,0),
gridSize: new THREE.Vector3(2,0,0.5),
grid: {start:{x:-4, y:0, z:-8}, yOffset: 0, collide: true},
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1.25,1.25,1.25),
classes: ['clickable','a-ent'],
components: {
	['gltf-model']:'./assets/3d/kaykit/doors/door1.glb',
	doorway:{zone: 'spookyZone', to: 'connect1', posTo: true, pos: new THREE.Vector3(0,0,0), twistTo: true, twist: 0},
	hovertext:{value: 'Room 1',  hover: 'top', offset: 1, altOffset: 0.5, twist: true,},
},
};
auxl.exteriorToRoom1 = auxl.Core(auxl.exteriorToRoom1Data);

//Room 1 to Exterior
auxl.room1ToExteriorData = {
data:'room1ToExteriorData',
id:'room1ToExterior',
position: new THREE.Vector3(0,0,0),
gridSize: new THREE.Vector3(2,0,0.5),
grid: {start:{x:-1.5, y:0, z:3}, yOffset: 0, collide: true},
rotation: new THREE.Vector3(0,180,0),
scale: new THREE.Vector3(1.25,1.25,1.25),
classes: ['clickable','a-ent'],
components: {
	['gltf-model']:'./assets/3d/kaykit/doors/door1.glb',
	doorway:{zone: 'spookyZone', to: 'connect0', posTo: true, pos: new THREE.Vector3(-4,0,-7), twistTo: true, twist: 180},
	hovertext:{value: 'Return',  hover: 'top', offset: 1, altOffset: 0.5, twist: true,},
},
};
auxl.room1ToExterior = auxl.Core(auxl.room1ToExteriorData);






//Jacko
auxl.jackoSignData = {
	data:'jackoSignData',
	id:'jackoSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(10.65,1.1,-9),
	rotation: new THREE.Vector3(90,-90,0),
	scale: new THREE.Vector3(1.8,1.8,1.8),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/spooky/jacko.glb',
		gltfmat: {colors: '#d47d16, #8131d1, #eddd23, #f4057c, #11bfab', emissives: '1,1,1,1,1'},
	},
};
auxl.jackoSign = auxl.Core(auxl.jackoSignData);

//Ghost
auxl.ghostSignData = {
	data:'ghostSignData',
	id:'ghostSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(-10.65,1.1,-9),
	rotation: new THREE.Vector3(90,90,0),
	scale: new THREE.Vector3(1.8,1.8,1.8),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/spooky/ghost.glb',
		gltfmat: {colors: '#a882ce, #11bfab, #f4057c', emissives: '1,1,1'},
	},
};
auxl.ghostSign = auxl.Core(auxl.ghostSignData);

//Bats
auxl.batsSignData = {
	data:'batsSignData',
	id:'batsSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0.9,3.2,-19.65),
	rotation: new THREE.Vector3(90,180,0),
	scale: new THREE.Vector3(1.5,1.5,1.5),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/spooky/bats.glb',
		gltfmat: {colors: '#8131d1, #eddd23', emissives: '1,1'},
	},
};
auxl.batsSign = auxl.Core(auxl.batsSignData);

//Mooneyes
auxl.moonEyesData = {
	data:'moonEyesData',
	id:'moonEyes',
	defaultParent: 'moon',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,10,100),
	rotation: new THREE.Vector3(105,90,90),
	scale: new THREE.Vector3(1.5,1.5,1.5),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/spooky/mooneyes.glb',
		gltfmat: {colors: '#C14B76', emissives: '1'},
	},
};
auxl.moonEyes = auxl.Core(auxl.moonEyesData);
//
//skyBoxSpooky
auxl.skyBoxSpookyData = {
data:'skyBoxSpookyData',
id:'skyBoxSpooky',
sources:false,
lights:[
auxl.directionalLight,
auxl.directionalLight2,
auxl.directionalLight3,
auxl.ambientLight,
],
sky:[
auxl.skyGradSpooky,
],
space:[
auxl.moonLayer,
auxl.moonEyes,
],
};
auxl.skyBoxSpooky = auxl.SkyBox(auxl.skyBoxSpookyData);


//Floors
//1e7e5d
//798619

//Spooky Exterior Floor
auxl.spookyFloorData = {
	data:'spookyFloorData',
	id:'spookyFloor',
	sources:false,
	text: false,
	geometry: {primitive: 'plane', width: 210, height: 210,},
	material: {shader: "standard", color: "#8e6b1c", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#8e6b1c", emissiveIntensity: 0.2, side: 'front', src: auxl.pattern45, repeat: '100 100'},
	position: new THREE.Vector3(0,-0.1,-9),
	rotation: new THREE.Vector3(-90,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent', 'clickable'],
	components: false,
};
auxl.spookyFloor = auxl.Core(auxl.spookyFloorData);

//Room 1 Floor
auxl.spookyRoom1FloorData = {
	data:'spookyRoom1FloorData',
	id:'spookyRoom1Floor',
	sources:false,
	text: false,
	geometry: {primitive: 'plane', width: 60, height: 60,},
	material: {shader: "standard", color: "#ba1fae", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#ba1fae", emissiveIntensity: 0.2, side: 'front', src: auxl.pattern63, repeat: '60 60'},
	position: new THREE.Vector3(0,-0.1,-9),
	rotation: new THREE.Vector3(-90,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent', 'clickable'],
	components: false,
};
auxl.spookyRoom1Floor = auxl.Core(auxl.spookyRoom1FloorData);

//
//Horizon

//Hills
auxl.spookyHillsData = {
id: 'spookyHills',
type: 'mountains',
texture: false,
baseColor: false,
baseColorFamily: 'maroon',
radius: 190,
density: 'normal',
height: 'high',
width: 'normal',
};
auxl.spookyHills = auxl.Horizon(auxl.spookyHillsData);

//
//KayKit

//Bone A
auxl.kayKitBoneAData = {
	data:'kayKitBoneAData',
	id:'kayKitBoneA',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/bone_A.glb',
	},
};
auxl.kayKitBoneA = auxl.Core(auxl.kayKitBoneAData);
//Bone B
auxl.kayKitBoneBData = {
	data:'kayKitBoneBData',
	id:'kayKitBoneB',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/bone_B.glb',
	},
};
auxl.kayKitBoneB = auxl.Core(auxl.kayKitBoneBData);
//Bone C
auxl.kayKitBoneCData = {
	data:'kayKitBoneCData',
	id:'kayKitBoneC',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/bone_C.glb',
	},
};
auxl.kayKitBoneC = auxl.Core(auxl.kayKitBoneCData);
//Candle Triple
auxl.kayKitCandleTripleData = {
	data:'kayKitCandleTripleData',
	id:'kayKitCandleTriple',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/candle_triple.glb',
	},
};
auxl.kayKitCandleTriple = auxl.Core(auxl.kayKitCandleTripleData);
//Bench Decorated
auxl.kayKitBenchDecoratedData = {
	data:'kayKitBenchDecoratedData',
	id:'kayKitBenchDecorated',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/bench_decorated.glb',
	},
};
auxl.kayKitBenchDecorated = auxl.Core(auxl.kayKitBenchDecoratedData);
//Coffin
auxl.kayKitCoffinData = {
	data:'kayKitCoffinData',
	id:'kayKitCoffin',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,3),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/coffin.glb',
	},
};
auxl.kayKitCoffin = auxl.Core(auxl.kayKitCoffinData);
//Coffin Decorated
auxl.kayKitCoffinDecoratedData = {
	data:'kayKitCoffinDecoratedData',
	id:'kayKitCoffinDecorated',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,3),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/coffin_decorated.glb',
	},
};
auxl.kayKitCoffinDecorated = auxl.Core(auxl.kayKitCoffinDecoratedData);
//Crypt
auxl.kayKitCryptData = {
	data:'kayKitCryptData',
	id:'kayKitCrypt',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(6,0,9),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/crypt.glb',
	},
};
auxl.kayKitCrypt = auxl.Core(auxl.kayKitCryptData);
//Grave A
auxl.kayKitGraveAData = {
	data:'kayKitGraveAData',
	id:'kayKitGraveA',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/grave_A.glb',
	},
};
auxl.kayKitGraveA = auxl.Core(auxl.kayKitGraveAData);
//Grave A Destroyed
auxl.kayKitGraveADestroyedData = {
	data:'kayKitGraveADestroyedData',
	id:'kayKitGraveADestroyed',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2.5,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/grave_A_destroyed.glb',
	},
};
auxl.kayKitGraveADestroyed = auxl.Core(auxl.kayKitGraveADestroyedData);
//Grave B
auxl.kayKitGraveBData = {
	data:'kayKitGraveBData',
	id:'kayKitGraveA',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(2,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/grave_B.glb',
	},
};
auxl.kayKitGraveA = auxl.Core(auxl.kayKitGraveBData);
//Gravemarker A
auxl.kayKitGravemarkerAData = {
	data:'kayKitGravemarkerAData',
	id:'kayKitGraveA',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/gravemarker_A.glb',
	},
};
auxl.kayKitGraveA = auxl.Core(auxl.kayKitGravemarkerAData);
//Gravemarker B
auxl.kayKitGravemarkerBData = {
	data:'kayKitGravemarkerBData',
	id:'kayKitGraveB',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/gravemarker_B.glb',
	},
};
auxl.kayKitGraveB = auxl.Core(auxl.kayKitGravemarkerBData);
//Gravestone
auxl.kayKitGravestoneData = {
	data:'kayKitGravestoneData',
	id:'kayKitGravestone',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/gravestone.glb',
	},
};
auxl.kayKitGravestone = auxl.Core(auxl.kayKitGravestoneData);
//Lantern Hanging
auxl.kayKitLanternHangingData = {
	data:'kayKitLanternHangingData',
	id:'kayKitLanternHanging',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/lantern_hanging.glb',
	},
};
auxl.kayKitLanternHanging = auxl.Core(auxl.kayKitLanternHangingData);
//Lantern Standing
auxl.kayKitLanternStandingData = {
	data:'kayKitLanternStandingData',
	id:'kayKitLanternStanding',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/lantern_standing.glb',
	},
};
auxl.kayKitLanternStanding = auxl.Core(auxl.kayKitLanternStandingData);
//Pillar
auxl.kayKitPillarData = {
	data:'kayKitPillarData',
	id:'kayKitlanternStanding',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/lantern_standing.glb',
	},
};
auxl.kayKitlanternStanding = auxl.Core(auxl.kayKitPillarData);
//Plaque
auxl.kayKitPlaqueData = {
	data:'kayKitPlaqueData',
	id:'kayKitPlaque',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,1.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/plaque.glb',
	},
};
auxl.kayKitPlaque = auxl.Core(auxl.kayKitPlaqueData);
//Plaque Candles
auxl.kayKitPlaqueCandlesData = {
	data:'kayKitPlaqueCandlesData',
	id:'kayKitPlaqueCandles',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,1.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/plaque_candles.glb',
	},
};
auxl.kayKitPlaqueCandles = auxl.Core(auxl.kayKitPlaqueCandlesData);
//Post
auxl.kayKitPostData = {
	data:'kayKitPostData',
	id:'kayKitPost',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/post.glb',
	},
};
auxl.kayKitPost = auxl.Core(auxl.kayKitPostData);
//Post Lantern
auxl.kayKitPostLanternData = {
	data:'kayKitPostLanternData',
	id:'kayKitPostLantern',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/post_lantern.glb',
	},
};
auxl.kayKitPostLantern = auxl.Core(auxl.kayKitPostLanternData);
//Post Skull
auxl.kayKitPostSkullData = {
	data:'kayKitPostSkullData',
	id:'kayKitPostSkull',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/post_skull.glb',
	},
};
auxl.kayKitPostSkull = auxl.Core(auxl.kayKitPostSkullData);
//Pumpkin Orange
auxl.kayKitPumpkinOrangeData = {
	data:'kayKitPumpkinOrangeData',
	id:'kayKitPumpkinOrange',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_orange.glb',
	},
};
auxl.kayKitPumpkinOrange = auxl.Core(auxl.kayKitPumpkinOrangeData);
//Pumpkin Orange Jacko Lantern
auxl.kayKitPumpkinOrangeJackoData = {
	data:'kayKitPumpkinOrangeJackoData',
	id:'kayKitPumpkinOrangeJacko',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,1.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_orange_jackolantern.glb',
	},
};
auxl.kayKitPumpkinOrangeJacko = auxl.Core(auxl.kayKitPumpkinOrangeJackoData);
//Pumpkin Orange Small
auxl.kayKitPumpkinOrangeSmallData = {
	data:'kayKitPumpkinOrangeSmallData',
	id:'kayKitPumpkinOrangeSmall',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_orange_small.glb',
	},
};
auxl.kayKitPumpkinOrangeSmall = auxl.Core(auxl.kayKitPumpkinOrangeSmallData);
//Pumpkin Yellow
auxl.kayKitPumpkinYellowData = {
	data:'kayKitPumpkinYellowData',
	id:'kayKitPumpkinYellow',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_yellow.glb',
	},
};
auxl.kayKitPumpkinYellow = auxl.Core(auxl.kayKitPumpkinYellowData);
//Pumpkin Yellow Jacko Lantern
auxl.kayKitPumpkinYellowJackoData = {
	data:'kayKitPumpkinYellowJackoData',
	id:'kayKitPumpkinYellowJacko',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1.5,0,1.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_yellow_jackolantern.glb',
	},
};
auxl.kayKitPumpkinYellowJacko = auxl.Core(auxl.kayKitPumpkinYellowJackoData);
//Pumpkin Yellow Small
auxl.kayKitPumpkinYellowSmallData = {
	data:'kayKitPumpkinYellowSmallData',
	id:'kayKitPumpkinYellowSmall',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/pumpkin_yellow_small.glb',
	},
};
auxl.kayKitPumpkinYellowSmall = auxl.Core(auxl.kayKitPumpkinYellowSmallData);
//Ribcage
auxl.kayKitRibcageData = {
	data:'kayKitRibcageData',
	id:'kayKitRibcage',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/ribcage.glb',
	},
};
auxl.kayKitRibcage = auxl.Core(auxl.kayKitRibcageData);
//Shrine
auxl.kayKitShrineData = {
	data:'kayKitShrineData',
	id:'kayKitShrine',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/shrine.glb',
	},
};
auxl.kayKitShrine = auxl.Core(auxl.kayKitShrineData);
//Shrine Candles
auxl.kayKitShrineCandlesData = {
	data:'kayKitShrineCandlesData',
	id:'kayKitShrineCandles',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/shrine_candles.glb',
	},
};
auxl.kayKitShrineCandles = auxl.Core(auxl.kayKitShrineCandlesData);
//Skull
auxl.kayKitSkullData = {
	data:'kayKitSkullData',
	id:'kayKitSkull',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/skull.glb',
	},
};
auxl.kayKitSkull = auxl.Core(auxl.kayKitSkullData);
//Skull Candles
auxl.kayKitSkullCandlesData = {
	data:'kayKitSkullCandlesData',
	id:'kayKitSkullCandles',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/skull_candle.glb',
	},
};
auxl.kayKitSkullCandles = auxl.Core(auxl.kayKitSkullCandlesData);

//Fences
//

//Arch
auxl.kayKitArchData = {
	data:'kayKitArchData',
	id:'kayKitArch',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/arch.glb',
	},
};
auxl.kayKitArch = auxl.Core(auxl.kayKitArchData);
//Arch Gate
auxl.kayKitArchGateData = {
	data:'kayKitArchGateData',
	id:'kayKitArchGate',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4,0,0.5),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/arch_gate.glb',
	},
};
auxl.kayKitArchGate = auxl.Core(auxl.kayKitArchGateData);
//Fence
auxl.kayKitFenceData = {
	data:'kayKitFenceData',
	id:'kayKitFence',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4,0,0.5),
	grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/fence.glb',
	},
};
auxl.kayKitFence = auxl.Core(auxl.kayKitFenceData);
//Fence Broken
auxl.kayKitFenceBrokenData = {
	data:'kayKitFenceBrokenData',
	id:'kayKitFenceBroken',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4,0,0.5),
	grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/fence_broken.glb',
	},
};
auxl.kayKitFenceBroken = auxl.Core(auxl.kayKitFenceBrokenData);
//Fence Gate
auxl.kayKitFenceGateData = {
	data:'kayKitFenceGateData',
	id:'kayKitFenceGate',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(4,0,0.5),
	grid: {start:{x:-10, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/fence_gate.glb',
	},
};
auxl.kayKitFenceGate = auxl.Core(auxl.kayKitFenceGateData);
//Fence Pillar
auxl.kayKitFencePillarData = {
	data:'kayKitFencePillarData',
	id:'kayKitFencePillar',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/fence_pillar.glb',
	},
};
auxl.kayKitFencePillar = auxl.Core(auxl.kayKitFencePillarData);
//Fence Pillar Broken
auxl.kayKitFencePillarBrokenData = {
	data:'kayKitFencePillarBrokenData',
	id:'kayKitFencePillarBroken',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(0.5,0,0.5),
	grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/fence_pillar_broken.glb',
	},
};
auxl.kayKitFencePillarBroken = auxl.Core(auxl.kayKitFencePillarBrokenData);


//Trees
//

//Tree Dead Large
auxl.kayKitTreeDeadLargeData = {
	data:'kayKitTreeDeadLargeData',
	id:'kayKitTreeDeadLarge',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_dead_large.glb',
	},
};
auxl.kayKitTreeDeadLarge = auxl.Core(auxl.kayKitTreeDeadLargeData);
//Tree Dead Large Decorated
auxl.kayKitTreeDeadLargeDecoratedData = {
	data:'kayKitTreeDeadLargeDecoratedData',
	id:'kayKitTreeDeadLargeDecorated',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1,1,1),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_dead_large_decorated.glb',
	},
};
auxl.kayKitTreeDeadLargeDecorated = auxl.Core(auxl.kayKitTreeDeadLargeDecoratedData);
//Tree Dead Medium
auxl.kayKitTreeDeadMediumData = {
	data:'kayKitTreeDeadMediumData',
	id:'kayKitTreeDeadMedium',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_dead_medium.glb',
	},
};
auxl.kayKitTreeDeadMedium = auxl.Core(auxl.kayKitTreeDeadMediumData);
//Tree Dead Small
auxl.kayKitTreeDeadSmallData = {
	data:'kayKitTreeDeadSmallData',
	id:'kayKitTreeDeadSmall',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_dead_small.glb',
	},
};
auxl.kayKitTreeDeadSmall = auxl.Core(auxl.kayKitTreeDeadSmallData);
//Tree Pine Orange Large
auxl.kayKitTreePineOrangeLargeData = {
	data:'kayKitTreePineOrangeLargeData',
	id:'kayKitTreePineOrangeLarge',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_orange_large.glb',
	},
};
auxl.kayKitTreePineOrangeLarge = auxl.Core(auxl.kayKitTreePineOrangeLargeData);
//Tree Pine Orange Medium
auxl.kayKitTreePineOrangeMediumData = {
	data:'kayKitTreePineOrangeMediumData',
	id:'kayKitTreePineOrangeMedium',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_orange_medium.glb',
	},
};
auxl.kayKitTreePineOrangeMedium = auxl.Core(auxl.kayKitTreePineOrangeMediumData);
//Tree Pine Orange Small
auxl.kayKitTreePineOrangeSmallData = {
	data:'kayKitTreePineOrangeSmallData',
	id:'kayKitTreePineOrangeSmall',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_orange_small.glb',
	},
};
auxl.kayKitTreePineOrangeSmall = auxl.Core(auxl.kayKitTreePineOrangeSmallData);
//Tree Pine Yellow Large
auxl.kayKitTreePineYellowLargeData = {
	data:'kayKitTreePineYellowLargeData',
	id:'kayKitTreePineYellowLarge',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_yellow_large.glb',
	},
};
auxl.kayKitTreePineYellowLarge = auxl.Core(auxl.kayKitTreePineYellowLargeData);
//Tree Pine Yellow Medium
auxl.kayKitTreePineYellowMediumData = {
	data:'kayKitTreePineYellowMediumData',
	id:'kayKitTreePineYellowMedium',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_yellow_medium.glb',
	},
};
auxl.kayKitTreePineYellowMedium = auxl.Core(auxl.kayKitTreePineYellowMediumData);
//Tree Pine Yellow Small
auxl.kayKitTreePineYellowSmallData = {
	data:'kayKitTreePineYellowSmallData',
	id:'kayKitTreePineYellowSmall',
	position: new THREE.Vector3(),
	rotation: new THREE.Vector3(),
	scale: new THREE.Vector3(1.25,1.75,1.25),
	gridSize: new THREE.Vector3(1,0,1),
	//grid: {start:{x:0, y:0, z:-10}, yOffset: 0, collide: true},
	components:{
		['gltf-model']:'./assets/3d/kaykit/hallows/tree_pine_yellow_small.glb',
	},
};
auxl.kayKitTreePineYellowSmall = auxl.Core(auxl.kayKitTreePineYellowSmallData);


//
//Collision Decoration

//Doors

auxl.hallowGridDoorsData = {
id: 'hallowGridDoors',
coreData: [
	auxl.kayKitDoor1Data,
	auxl.kayKitDoor2Data,
	auxl.kayKitDoor3Data,
	auxl.kayKitDoor4Data,
	auxl.kayKitDoor5Data,
	auxl.kayKitDoor6Data,
	auxl.kayKitDoor7Data,
],
grids:{
layout1:[
	{start:{x:-15, y:0, z:-5},},
	{start:{x:-15, y:0, z:-10},},
	{start:{x:-15, y:0, z:-15},},
	{start:{x:-15, y:0, z:-20},},
	{start:{x:-15, y:0, z:-25},},
	{start:{x:-15, y:0, z:-30},},
	{start:{x:-15, y:0, z:-35},},
],},};
auxl.hallowGridDoors = auxl.GridLayout(auxl.hallowGridDoorsData);

//Fences
auxl.hallowGridFencesData = {
id: 'hallowGridFences',
coreData: [
	auxl.kayKitArchGateData,
	auxl.kayKitFenceData,
	auxl.kayKitFenceBrokenData,
	auxl.kayKitFenceGateData,
	auxl.kayKitFencePillarData,
	auxl.kayKitFencePillarBrokenData,
],
grids:{
layout1:[
	{start:{x:-10, y:0, z:-5},},
	{start:{x:-10, y:0, z:-10},},
	{start:{x:-10, y:0, z:-15},},
	{start:{x:-10, y:0, z:-20},},
	{start:{x:-10, y:0, z:-25},},
	{start:{x:-10, y:0, z:-30},},
],},};
auxl.hallowGridFences = auxl.GridLayout(auxl.hallowGridFencesData);

//Graves
auxl.hallowGridGravesData = {
id: 'hallowGridGraves',
coreData: [
	auxl.kayKitGraveAData,
	auxl.kayKitGraveADestroyedData,
	auxl.kayKitGraveBData,
	auxl.kayKitGravemarkerAData,
	auxl.kayKitGravemarkerBData,
	auxl.kayKitGravestoneData,
],
grids:{
layout1:[
	{start:{x:0, y:0, z:-5},},
	{start:{x:3, y:0, z:-5},},
	{start:{x:6, y:0, z:-5},},
	{start:{x:9, y:0, z:-5},},
	{start:{x:12, y:0, z:-5},},
	{start:{x:15, y:0, z:-5},},
],},};
auxl.hallowGridGraves = auxl.GridLayout(auxl.hallowGridGravesData);

//Alt Graves
auxl.hallowGridAltGravesData = {
id: 'hallowGridAltGraves',
coreData: [
	auxl.kayKitBenchDecoratedData,
	auxl.kayKitCoffinData,
	auxl.kayKitCoffinDecoratedData,
	auxl.kayKitPlaqueData,
	auxl.kayKitPlaqueCandlesData,
	auxl.kayKitRibcageData,
	auxl.kayKitShrineData,
	auxl.kayKitShrineCandlesData,
],
grids:{
layout1:[
	{start:{x:0, y:0, z:-10},},
	{start:{x:3, y:0, z:-10},},
	{start:{x:6, y:0, z:-10},},
	{start:{x:9, y:0, z:-10},},
	{start:{x:12, y:0, z:-10},},
	{start:{x:15, y:0, z:-10},},
	{start:{x:18, y:0, z:-10},},
	{start:{x:21, y:0, z:-10},},
],},};
auxl.hallowGridAltGraves = auxl.GridLayout(auxl.hallowGridAltGravesData);

//Trees
auxl.hallowGridTreesData = {
id: 'hallowGridTrees',
coreData: [
	auxl.kayKitTreeDeadLargeDecoratedData,
	auxl.kayKitTreeDeadSmallData,
	auxl.kayKitTreePineOrangeSmallData,
	auxl.kayKitTreePineYellowSmallData,
],
grids:{
layout1:[
	{start:{x:0, y:0, z:10},},
	{start:{x:3, y:0, z:10},},
	{start:{x:6, y:0, z:10},},
	{start:{x:9, y:0, z:10},},
	{start:{x:12, y:0, z:10},},
	{start:{x:15, y:0, z:10},},
],},};
auxl.hallowGridTrees = auxl.GridLayout(auxl.hallowGridTreesData);

//Deco
auxl.hallowGridDecoData = {
id: 'hallowGridDeco',
coreData: [
	auxl.kayKitPumpkinOrangeData,
	auxl.kayKitPumpkinOrangeJackoData,
	auxl.kayKitPumpkinOrangeSmallData,
	auxl.kayKitPumpkinYellowData,
	auxl.kayKitPumpkinYellowJackoData,
	auxl.kayKitPumpkinYellowSmallData,
	auxl.kayKitSkullData,
	auxl.kayKitSkullCandlesData,
	auxl.kayKitLanternHangingData,
	auxl.kayKitLanternStandingData,
],
grids:{
layout1:[
	{start:{x:0, y:0, z:5},},
	{start:{x:3, y:0, z:5},},
	{start:{x:6, y:0, z:5},},
	{start:{x:9, y:0, z:5},},
	{start:{x:12, y:0, z:5},},
	{start:{x:15, y:0, z:5},},
	{start:{x:18, y:0, z:5},},
	{start:{x:21, y:0, z:5},},
	{start:{x:24, y:0, z:5},},
	{start:{x:27, y:0, z:5},},
	{start:{x:30, y:0, z:5},},
],},};
auxl.hallowGridDeco = auxl.GridLayout(auxl.hallowGridDecoData);

//Tall Deco
auxl.hallowGridTallDecoData = {
id: 'hallowGridTallDeco',
coreData: [
	auxl.kayKitPillarData,
	auxl.kayKitPostData,
	auxl.kayKitPostLanternData,
	auxl.kayKitPostSkullData,
],
grids:{
layout1:[
	{start:{x:0, y:0, z:-15},},
	{start:{x:3, y:0, z:-15},},
	{start:{x:6, y:0, z:-15},},
	{start:{x:9, y:0, z:-15},},
],},};
auxl.hallowGridTallDeco = auxl.GridLayout(auxl.hallowGridTallDecoData);















//
//No Collision Decoration


//Outer Environment Rings
//

//Tree Ring 1
auxl.treeRing1Data = {
	id: 'treeRing1',
	objData: auxl.kayKitTreePineOrangeLargeData,
	total: 10,
	outerRingRadius: 150,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing1 = auxl.ObjsGenRing(auxl.treeRing1Data);
//Tree Ring 2
auxl.treeRing2Data = {
	id: 'treeRing2',
	objData: auxl.kayKitTreePineOrangeMediumData,
	total: 20,
	outerRingRadius: 100,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing2 = auxl.ObjsGenRing(auxl.treeRing2Data);
//Tree Ring 3
auxl.treeRing3Data = {
	id: 'treeRing3',
	objData: auxl.kayKitTreePineYellowLargeData,
	total: 10,
	outerRingRadius: 150,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing3 = auxl.ObjsGenRing(auxl.treeRing3Data);
//Tree Ring 4
auxl.treeRing4Data = {
	id: 'treeRing4',
	objData: auxl.kayKitTreePineYellowMediumData,
	total: 20,
	outerRingRadius: 100,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing4 = auxl.ObjsGenRing(auxl.treeRing4Data);
//Tree Ring 5
auxl.treeRing5Data = {
	id: 'treeRing5',
	objData: auxl.kayKitTreeDeadLargeData,
	total: 10,
	outerRingRadius: 150,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing5 = auxl.ObjsGenRing(auxl.treeRing5Data);
//Tree Ring 6
auxl.treeRing6Data = {
	id: 'treeRing6',
	objData: auxl.kayKitTreeDeadMediumData,
	total: 20,
	outerRingRadius: 100,
	innerRingRadius: 50,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 1,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.treeRing6 = auxl.ObjsGenRing(auxl.treeRing6Data);

//Inner Environment Decoration Rings
//

//Inner Ring 1
auxl.innerRing1Data = {
	id: 'innerRing1',
	objData: auxl.kayKitBoneAData,
	total: 5,
	outerRingRadius: 22,
	innerRingRadius: 1,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: false,
	ranScaleZ: true,
	scaleFlex: 0.25,
	ranRotX: true,
	ranRotY: true,
	ranRotZ: true,
};
auxl.innerRing1 = auxl.ObjsGenRing(auxl.innerRing1Data);
//Inner Ring 2
auxl.innerRing2Data = {
	id: 'innerRing2',
	objData: auxl.kayKitBoneBData,
	total: 4,
	outerRingRadius: 22,
	innerRingRadius: 1,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: false,
	ranScaleZ: true,
	scaleFlex: 0.25,
	ranRotX: true,
	ranRotY: true,
	ranRotZ: true,
};
auxl.innerRing2 = auxl.ObjsGenRing(auxl.innerRing2Data);
//Inner Ring 3
auxl.innerRing3Data = {
	id: 'innerRing3',
	objData: auxl.kayKitBoneCData,
	total: 3,
	outerRingRadius: 22,
	innerRingRadius: 1,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: false,
	ranScaleZ: true,
	scaleFlex: 0.25,
	ranRotX: true,
	ranRotY: true,
	ranRotZ: true,
};
auxl.innerRing3 = auxl.ObjsGenRing(auxl.innerRing3Data);
//Inner Ring 4
auxl.innerRing4Data = {
	id: 'innerRing4',
	objData: auxl.kayKitCandleTripleData,
	total: 6,
	outerRingRadius: 22,
	innerRingRadius: 1,
	sameTypeRadius: 2,
	otherTypeRadius: 1,
	ranYPos: false,
	yPosFlex: 1,
	ranScaleX: true,
	ranScaleY: true,
	ranScaleZ: true,
	scaleFlex: 0.5,
	ranRotX: false,
	ranRotY: true,
	ranRotZ: false,
};
auxl.innerRing4 = auxl.ObjsGenRing(auxl.innerRing4Data);


//
//Entrance & Floor 1


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

mid1:{property: 'material.middleColor', from: '#99154E', to: '#fffb96', dur: auxl.timeInDay/6, delay: 0, loop: 'false', dir: 'normal', easing: 'linear', elasticity: 400, autoplay: false, enabled: true, startEvents: 'animationcomplete__mid0, animationcomplete__mid2', pauseEvents: 'pause', resumeEvents: 'resume'}, 

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


//
//Doorways

//Entrance to Floor1
auxl.entranceToFloor1Data = {
data:'entranceToFloor1Data',
id:'entranceToFloor1',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 1, width: 3, height: 4},
material: {shader: "standard", color: "#264e1a", emissive: '#264e1a', emissiveIntensity: 0.25, opacity: 1},
position: new THREE.Vector3(0,2,2.41),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: false,
mixins: false,
classes: ['clickable','a-ent'],
components: {
	doorway:{zone: 'entranceZone', to: 'connect0'},
	hovertext:{value: 'Floor 1',  hover: 'top', offset: 0.75, altOffset: 0.5, twist: true,},
},
};
auxl.entranceToFloor1 = auxl.Core(auxl.entranceToFloor1Data);

//Floor1 to Entrance
auxl.floor1ToEntranceData = {
data:'floor1ToEntranceData',
id:'floor1ToEntrance',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 1, width: 3, height: 4},
material: {shader: "standard", color: "#264e1a", emissive: '#264e1a', emissiveIntensity: 0.25, opacity: 1},
position: new THREE.Vector3(0,2,2.41),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: false,
mixins: false,
classes: ['clickable','a-ent'],
components: {
	doorway:{zone: 'xrcadeZone', to: 'connect0'},
	hovertext:{value: 'Entrance',  hover: 'top', offset: 0.75, altOffset: 0.5, twist: true,},
},
};
auxl.floor1ToEntrance = auxl.Core(auxl.floor1ToEntranceData);

//Entrance to Spooky
auxl.entranceToSpookyData = {
data:'entranceToSpookyData',
id:'entranceToSpooky',
gridSize: new THREE.Vector3(3,0,0.5),
grid: {start:{x:3, y:0, z:-13}, yOffset: 0, collide: true},
//position: new THREE.Vector3(3,2,-13),
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1.25,1.25,1.25),
classes: ['clickable','a-ent'],
components: {
	['gltf-model']:'./assets/3d/kaykit/doors/door6.glb',
	doorway:{zone: 'entranceZone', to: 'connect1', posTo: true, pos: new THREE.Vector3(0,0,-1), twistTo: true, twist: 0},
	hovertext:{value: 'Spooky Zone',  hover: 'top', offset: 1.25, altOffset: 1, twist: true,},
},
};
auxl.entranceToSpooky = auxl.Core(auxl.entranceToSpookyData);

//Materials
auxl.floorPattern1 = './assets/img/tiles/xrcade/1.jpg';
auxl.floorPattern2 = './assets/img/tiles/xrcade/2.png';
auxl.floorPattern3 = './assets/img/tiles/xrcade/3.gif';
auxl.floorPattern4 = './assets/img/tiles/xrcade/4.jpg';
auxl.floorPattern5 = './assets/img/tiles/xrcade/5.jpg';
auxl.floorPattern6 = './assets/img/tiles/xrcade/6.jpg';

//Floor
auxl.floorData = {
	data:'floorData',
	id:'floor',
	sources:false,
	text: false,
	geometry: {primitive: 'plane', height: 22, width: 22},
	material: {shader: 'flat', side: 'front', src: auxl.floorPattern1, repeat: '5.5 5.5'},
	position: new THREE.Vector3(0,0,-9),
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
position: new THREE.Vector3(5.75,2.5,1.74),
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
position: new THREE.Vector3(6.5,1.25,1.74),
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
position: new THREE.Vector3(5,1.25,1.74),
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
position: new THREE.Vector3(3.5,1.25,1.74),
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
position: new THREE.Vector3(4.25,2.5,1.74),
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
//Style 6
auxl.carpetChange6Data = {
data:'carpetChange6Data',
id:'carpetChange6',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 0.1, width: 1, height: 1},
material: {shader: "flat", src: auxl.floorPattern6, repeat: '1 1', opacity: 1},
position: new THREE.Vector3(2.75,2.5,1.74),
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
		params: 'floorPattern6',
	},
},
};
auxl.carpetChange6 = auxl.Core(auxl.carpetChange6Data);

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



//Ceiling
auxl.ceilingData = {
	data:'ceilingData',
	id:'ceiling',
	sources:false,
	text: false,
	geometry: {primitive: 'plane', height: 22, width: 22},
	material: {shader: 'flat', side: 'front', src: auxl.pattern49, repeat: '2 2', blending: 'additive', opacity: 0.05},
	position: new THREE.Vector3(0,10,-9),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.ceiling = auxl.Core(auxl.ceilingData);


//
//Walls

//Wall Frame
auxl.wallFrameData = {
	data:'wallFrameData',
	id:'wallFrame',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components:{
		['gltf-model']:'./assets/3d/XRcade/glass-frame.glb',
		gltfmat: {colors:['white','black',], opacities:[1,0.25],},
	},
};

//Wall East
auxl.wallEastWestSegData = {
	data:'wallEastWestSegData',
	id:'wallEastWestSeg',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 0.5, depth: 4},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '4 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
//Wall East Segment 1 (Left)
auxl.wallEastSeg1Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallEastSeg1', grid: {start:{x:11, y:0, z:-20}, end: {x:11, y:0, z:-16}, yOffset: 5, collide: true}, }, true);
auxl.wallEastSeg1 = auxl.Core(auxl.wallEastSeg1Data);
//Wall East Segment 2 (Middle)
auxl.wallEastSeg2Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallEastSeg2', grid: {start:{x:11, y:0, z:-13.5}, end: {x:11, y:0, z:-4.5}, yOffset: 5, collide: true}, geometry: {primitive: 'box', height: 10, width: 0.5, depth: 9}, material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '10 10'}, }, true);
auxl.wallEastSeg2 = auxl.Core(auxl.wallEastSeg2Data);
//Wall East Segment 3 (Right)
auxl.wallEastSeg3Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallEastSeg3', grid: {start:{x:11, y:0, z:-2}, end: {x:11, y:0, z:2}, yOffset: 5, collide: true}, }, true);
auxl.wallEastSeg3 = auxl.Core(auxl.wallEastSeg3Data);
//Wall East Frame 1 (Left)
auxl.wallEastFrame1Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallEastFrame1', grid: {start:{x:11, y:0, z:-16}, end: {x:11, y:0, z:-13.5}, collide: true}, }, true);
auxl.wallEastFrame1 = auxl.Core(auxl.wallEastFrame1Data);
//Wall East Frame 2 (Right)
auxl.wallEastFrame2Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallEastFrame2', grid: {start:{x:11, y:0, z:-4.5}, end: {x:11, y:0, z:-2}, collide: true}, }, true);
auxl.wallEastFrame2 = auxl.Core(auxl.wallEastFrame2Data);


//Wall West

//Wall West Segment 1 (Left)
auxl.wallWestSeg1Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallWestSeg1', grid: {start:{x:-11, y:0, z:-20}, end: {x:-11, y:0, z:-16}, yOffset: 5, collide: true}, }, true);
auxl.wallWestSeg1 = auxl.Core(auxl.wallWestSeg1Data);
//Wall West Segment 2 (Middle)
auxl.wallWestSeg2Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallWestSeg2', grid: {start:{x:-11, y:0, z:-13.5}, end: {x:-11, y:0, z:-4.5}, yOffset: 5, collide: true}, geometry: {primitive: 'box', height: 10, width: 0.5, depth: 9}, material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '10 10'}, }, true);
auxl.wallWestSeg2 = auxl.Core(auxl.wallWestSeg2Data);
//Wall West Segment 3 (Right)
auxl.wallWestSeg3Data = auxl.coreDataFromTemplate(auxl.wallEastWestSegData, {id: 'wallWestSeg3', grid: {start:{x:-11, y:0, z:-2}, end: {x:-11, y:0, z:2}, yOffset: 5, collide: true}, rotation: new THREE.Vector3(0,180,0),}, true);
auxl.wallWestSeg3 = auxl.Core(auxl.wallWestSeg3Data);
//Wall West Frame 1 (Left)
auxl.wallWestFrame1Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallWestFrame1', grid: {start:{x:-11, y:0, z:-16}, end: {x:-11, y:0, z:-13.5}, collide: true}, rotation: new THREE.Vector3(0,180,0),}, true);
auxl.wallWestFrame1 = auxl.Core(auxl.wallWestFrame1Data);
//Wall West Frame 2 (Right)
auxl.wallWestFrame2Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallWestFrame2', grid: {start:{x:-11, y:0, z:-4.5}, end: {x:-11, y:0, z:-2}, collide: true}, rotation: new THREE.Vector3(0,180,0),}, true);
auxl.wallWestFrame2 = auxl.Core(auxl.wallWestFrame2Data);


//Wall North
auxl.wallNorthSegData = {
	data:'wallNorthSegData',
	id:'wallNorthSeg',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 4.5, depth: 0.5},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '4.5 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
//Wall North Segment 1 (Left)
auxl.wallNorthSeg1Data = auxl.coreDataFromTemplate(auxl.wallNorthSegData, {id: 'wallNorthSeg1', grid: {start:{x:-11, y:0, z:-20}, end: {x:-7.5, y:0, z:-20}, yOffset: 5, collide: true}, }, true);
auxl.wallNorthSeg1 = auxl.Core(auxl.wallNorthSeg1Data);
//Wall North Segment 2 (Middle)
auxl.wallNorthSeg2Data = auxl.coreDataFromTemplate(auxl.wallNorthSegData, {id: 'wallNorthSeg2', grid: {start:{x:-4.5, y:0, z:-20}, end: {x:4.5, y:0, z:-20}, yOffset: 5, collide: true}, geometry: {primitive: 'box', height: 10, width: 9, depth: 0.5}, material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '10 10'}, }, true);
auxl.wallNorthSeg2 = auxl.Core(auxl.wallNorthSeg2Data);
//Wall North Segment 3 (Right)
auxl.wallNorthSeg3Data = auxl.coreDataFromTemplate(auxl.wallNorthSegData, {id: 'wallNorthSeg3', grid: {start:{x:7.5, y:0, z:-20}, end: {x:11, y:0, z:-20}, yOffset: 5, collide: true}, }, true);
auxl.wallNorthSeg3 = auxl.Core(auxl.wallNorthSeg3Data);
//Wall North Frame 1 (Left)
auxl.wallNorthFrame1Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallNorthFrame1', grid: {start:{x:-7, y:0, z:-20}, end: {x:-4.5, y:0, z:-20}, collide: true}, rotation: new THREE.Vector3(0,90,0),}, true);
auxl.wallNorthFrame1 = auxl.Core(auxl.wallNorthFrame1Data);
//Wall North Frame 2 (Right)
auxl.wallNorthFrame2Data = auxl.coreDataFromTemplate(auxl.wallFrameData, {id: 'wallNorthFrame2', grid: {start:{x:4.5, y:0, z:-20}, end: {x:7, y:0, z:-20}, collide: true}, rotation: new THREE.Vector3(0,90,0),}, true);
auxl.wallNorthFrame2 = auxl.Core(auxl.wallNorthFrame2Data);

//Wall South
auxl.wallSouthPartData = {
	data:'wallSouthPartData',
	id:'wallSouthPart',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 6, width: 22, depth: 0.5},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '22 6'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
//Wall Segment Top
auxl.wallSouthTopData = auxl.coreDataFromTemplate(auxl.wallSouthPartData, {id: 'wallSouthTop', grid: {start:{x:-11, y:0, z:2}, end: {x:11, y:0, z:2}, yOffset: 7, collide: false}, }, true);
auxl.wallSouthTop = auxl.Core(auxl.wallSouthTopData);
//Wall Segment Partial 1 (Left)
auxl.wallSouthPart1Data = auxl.coreDataFromTemplate(auxl.wallSouthPartData, {id: 'wallSouthPart1', grid: {start:{x:1.5, y:0, z:2}, end: {x:11, y:0, z:2}, yOffset: 2, collide: true}, geometry: {primitive: 'box', height: 4, width: 9.5, depth: 0.5}, material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '9.5 4'},}, true);
auxl.wallSouthPart1 = auxl.Core(auxl.wallSouthPart1Data);
//Wall Segment Partial 2 (Right)
auxl.wallSouthPart2Data = auxl.coreDataFromTemplate(auxl.wallSouthPartData, {id: 'wallSouthPart2', grid: {start:{x:-11, y:0, z:2}, end: {x:-1.5, y:0, z:2}, yOffset: 2, collide: true}, geometry: {primitive: 'box', height: 4, width: 9.5, depth: 0.5}, material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '9.5 4'}, }, true);
auxl.wallSouthPart2 = auxl.Core(auxl.wallSouthPart2Data);

//
//Wall Pilar

//North West
auxl.wallPilarData = {
	data:'wallPilarData',
	id:'wallPilar',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 4, depth: 4},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '4 10'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.wallPilar1Data = auxl.coreDataFromTemplate(auxl.wallPilarData, {id: 'wallPilar1', grid: {start:{x:9, y:0, z:0}, end: {x:13, y:0, z:4}, yOffset: 5, collide: true}}, true);
auxl.wallPilar1 = auxl.Core(auxl.wallPilar1Data);
//North East
auxl.wallPilar2Data = auxl.coreDataFromTemplate(auxl.wallPilarData, {id: 'wallPilar2', grid: {start:{x:-13, y:0, z:0}, end: {x:-9, y:0, z:4}, yOffset: 5, collide: true}}, true);
auxl.wallPilar2 = auxl.Core(auxl.wallPilar2Data);
//South West
auxl.wallPilar3Data = auxl.coreDataFromTemplate(auxl.wallPilarData, {id: 'wallPilar3', grid: {start:{x:9, y:0, z:-22}, end: {x:13, y:0, z:-18}, yOffset: 5, collide: true}}, true);
auxl.wallPilar3 = auxl.Core(auxl.wallPilar3Data);
//South East
auxl.wallPilar4Data = auxl.coreDataFromTemplate(auxl.wallPilarData, {id: 'wallPilar4', grid: {start:{x:-13, y:0, z:-22}, end: {x:-9, y:0, z:-18}, yOffset: 5, collide: true}}, true);
auxl.wallPilar4 = auxl.Core(auxl.wallPilar4Data);


//
//Inner Pilars

//North West
auxl.InnerPilarData = {
	data:'InnerPilarData',
	id:'InnerPilar',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 10, width: 2, depth: 2},
	material: {shader: "standard", opacity: 1, color: '#a23737', metalness: 0.3, roughness: 0.7, emissive: '#a23737', emissiveIntensity: 0.7, side: 'double', src: auxl.pattern18, repeat: '2 10',},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.InnerPilar1Data = auxl.coreDataFromTemplate(auxl.InnerPilarData, {id: 'InnerPilar1', grid: {start:{x:-7, y:0, z:-4.5}, end: {x:-5, y:0, z:-2}, yOffset: 5, collide: true}}, true);
auxl.InnerPilar1 = auxl.Core(auxl.InnerPilar1Data);
//North East
auxl.InnerPilar2Data = auxl.coreDataFromTemplate(auxl.InnerPilarData, {id: 'InnerPilar2', grid: {start:{x:5, y:0, z:-4.5}, end: {x:7, y:0, z:-2}, yOffset: 5, collide: true}}, true);
auxl.InnerPilar2 = auxl.Core(auxl.InnerPilar2Data);
//South West
auxl.InnerPilar3Data = auxl.coreDataFromTemplate(auxl.InnerPilarData, {id: 'InnerPilar3', grid: {start:{x:-7, y:0, z:-16}, end: {x:-5, y:0, z:-13.5}, yOffset: 5, collide: true}}, true);
auxl.InnerPilar3 = auxl.Core(auxl.InnerPilar3Data);
//South East
auxl.InnerPilar4Data = auxl.coreDataFromTemplate(auxl.InnerPilarData, {id: 'InnerPilar4', grid: {start:{x:5, y:0, z:-16}, end: {x:7, y:0, z:-13.5}, yOffset: 5, collide: true}}, true);
auxl.InnerPilar4 = auxl.Core(auxl.InnerPilar4Data);


//
//Dividers

//Divider North, East, South & West


//Divider
auxl.dividerData = {
	data:'dividerData',
	id:'divider',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 1.5, width: 1, depth: 6},
	material: {shader: 'flat', src: auxl.floorPattern1, repeat: '2 0.5'},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
//East
auxl.dividerEastData = auxl.coreDataFromTemplate(auxl.dividerData, {id: 'dividerEast', grid: {start:{x:5.5, y:0, z:-12}, end: {x:6, y:0, z:-6}, yOffset: 0.75, collide: true}, }, true);
auxl.dividerEast = auxl.Core(auxl.dividerEastData);
//West
auxl.dividerWestData = auxl.coreDataFromTemplate(auxl.dividerData, {id: 'dividerWest', grid: {start:{x:-6, y:0, z:-12}, end: {x:-5.5, y:0, z:-6}, yOffset: 0.75, collide: true}, }, true);
auxl.dividerWest = auxl.Core(auxl.dividerWestData);
//North
auxl.dividerNorthData = auxl.coreDataFromTemplate(auxl.dividerData, {id: 'dividerNorth', grid: {start:{x:-3, y:0, z:-15}, end: {x:3, y:0, z:-14.5}, yOffset: 0.75, collide: true}, geometry: {primitive: 'box', height: 1.5, width: 6, depth: 1},}, true);
auxl.dividerNorth = auxl.Core(auxl.dividerNorthData);
//South
auxl.dividerSouthData = auxl.coreDataFromTemplate(auxl.dividerData, {id: 'dividerSouth', grid: {start:{x:-3, y:0, z:-3.5}, end: {x:3, y:0, z:-3}, yOffset: 0.75, collide: true}, geometry: {primitive: 'box', height: 1.5, width: 6, depth: 1},}, true);
auxl.dividerSouth = auxl.Core(auxl.dividerSouthData);


//
//Elevator
//Elevator at South wall

//Doorway


//Jukebox
auxl.jukeBoxData = {
	data:'jukeBoxData',
	id:'jukeBox',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,0,0),
	grid: {start:{x:-5, y:0, z:-3.5}, end: {x:-4, y:0, z:-3}, yOffset: 0, collide: true},
	rotation: new THREE.Vector3(0,90,0),
	scale: new THREE.Vector3(1,1,1),
	animations:{
		click: {property: 'scale', from: '1 1 1', to: '1.1 1 1.1', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
	},
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/jukebox.glb',
		gltfmat: {colors: '#16aa60, #05aaf4, #f4057c', emissives: '0.25,0.25,0.75'},
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
position: new THREE.Vector3(-4.75,2.25,-3.25),
rotation: new THREE.Vector3(0,90,0),
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
	grid: {start:{x:4, y:0, z:-3.5}, end: {x:5, y:0, z:-3}, yOffset: 0, collide: true},
	rotation: new THREE.Vector3(0,-90,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/token.glb',
		gltfmat: {colors: '#f4057c, #05aaf4, #16aa60', emissives: '0.75,0.25,0.75'},
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
position: new THREE.Vector3(4.75,2.25,-3.25),
rotation: new THREE.Vector3(0,-90,0),
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
position: new THREE.Vector3(4.75,3,-3.25),
rotation: new THREE.Vector3(0,-90,0),
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
position: new THREE.Vector3(4.75,3.75,-3.25),
rotation: new THREE.Vector3(0,-90,0),
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
	rotation: new THREE.Vector3(0,180,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['clickable','a-ent'],
	components: {
		['zesty-banner']: {adUnit: '5380481b-af7b-4aaa-b97d-92c7d35ab4ae', format: 'wide', style: 'standard', beacon: true},
		//['stare']:{id: 'playerRig'},
	},
};
auxl.sponsor1Data = auxl.coreDataFromTemplate(auxl.sponsorData, {id: 'sponsor1', position: new THREE.Vector3(-5.5,6,1.74),}, true);
//position: new THREE.Vector3(0,12,-9)
//position: new THREE.Vector3(0,3.5,-0.05)
auxl.sponsor1 = auxl.Core(auxl.sponsor1Data);

//
//Neons

//Neon Lines
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

//Center
//

//Minty's XRCade Sign
auxl.cadeSignData = {
	data:'cadeSignData',
	id:'cadeSign1',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,-0.25,0.1),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/xrcade.glb',
		gltfmat: {colors: '#f4057c, #05aaf4, #eddd23, #16aa60', emissives: '1,1,1,1'},
	},
};
auxl.cadeSign1 = auxl.Core(auxl.cadeSignData);

auxl.cadeSign2Data = auxl.coreDataFromTemplate(auxl.cadeSignData, {id: 'cadeSign2', position: new THREE.Vector3(0,-0.25,-0.1), rotation: new THREE.Vector3(90,180,0)}, true);
auxl.cadeSign2 = auxl.Core(auxl.cadeSign2Data);


auxl.signSpinnerData = {
	data:'signSpinnerData',
	id:'signSpinner',
	sources:false,
	text: false,
	geometry: {primitive: 'box', height: 2.25, width: 8, depth: 0.1},
	material: {shader: "standard", opacity: 1, color: '#4a4848', metalness: 0.3, roughness: 0.7, emissive: '#4a4848', emissiveIntensity: 0.7,},
	position: new THREE.Vector3(0,9,-9),
	rotation: new THREE.Vector3(0,0,0),
	scale: new THREE.Vector3(1,1,1),
	animations:{spin: {property: 'object3D.rotation.y', from: 0, to: 360, dur: 20000, delay: 0, loop: true, dir: 'normal', easing: 'linear', elasticity: 400, autoplay: true, enabled: true,}, },
	mixins: false,
	classes: ['a-ent'],
	components: false,
};
auxl.signSpinner = auxl.Core(auxl.signSpinnerData);

//Sign Spinner Layer
auxl.cadeSignSpinnerData = {
	parent: {core: auxl.signSpinner},
	child0: {core: auxl.cadeSign1},
	child1: {core: auxl.cadeSign2},
}
auxl.cadeSignSpinner = auxl.Layer('cadeSignSpinner', auxl.cadeSignSpinnerData);


//East Wall Neon
//

//Waves
auxl.wavesSignData = {
	data:'wavesSignData',
	id:'wavesSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(-10.65,4.5,-9),
	rotation: new THREE.Vector3(90,90,0),
	scale: new THREE.Vector3(1.8,1.8,1.8),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/waves.glb',
		gltfmat: {colors: '#11bfab, #05aaf4', emissives: '1,1'},
	},
};
auxl.wavesSign = auxl.Core(auxl.wavesSignData);

//Wave Lines
auxl.waveLineSignData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'waveLineSign', position: new THREE.Vector3(-10.65,8.5,-8.75), rotation: new THREE.Vector3(90,90,0), scale: new THREE.Vector3(1.6,1.6,1.6), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},}}, true);
auxl.waveLineSign = auxl.Core(auxl.waveLineSignData);

//West Wall Neon
//

//Trees
auxl.treeSignData = {
	data:'treeSignData',
	id:'treeSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(10.65,2,-9),
	rotation: new THREE.Vector3(90,-90,0),
	scale: new THREE.Vector3(1.25,1.25,1.25),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/palm.glb',
		gltfmat: {colors: '#912b5e, #16aa60', emissives: '1,1'},
	},
};
auxl.treeSign = auxl.Core(auxl.treeSignData);
//Tree Lines
auxl.treeLineSignData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'treeLineSign', position: new THREE.Vector3(10.65,8.5,-9.25), rotation: new THREE.Vector3(90,-90,0), scale: new THREE.Vector3(1.6,1.6,1.6), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},}}, true);
auxl.treeLineSign = auxl.Core(auxl.treeLineSignData);

//South Wall Neon
//

//Hearts
auxl.heartsSignData = {
	data:'heartsSignData',
	id:'heartsSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0.5,5.75,1.65),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/hearts.glb',
		gltfmat: {colors: '#f4057c, #16aa60', emissives: '1,1'},
	},
};
auxl.heartsSign = auxl.Core(auxl.heartsSignData);
//Geart Lines
auxl.heartLineSignData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'heartLineSign', position: new THREE.Vector3(0,8.5,1.65), rotation: new THREE.Vector3(-90,0,0), scale: new THREE.Vector3(1.6,1.6,1.6), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#eddd23, #f4057c', emissives: '1,1'},}}, true);
auxl.heartLineSign = auxl.Core(auxl.heartLineSignData);

//North Wall Neon
//

//IVX
auxl.ivxSignData = {
	data:'ivxSignData',
	id:'ivxSign',
	sources:false,
	text: false,
	geometry: false,
	material: false,
	position: new THREE.Vector3(0,5,-19.65),
	rotation: new THREE.Vector3(90,0,0),
	scale: new THREE.Vector3(2,2,2),
	animations: false,
	mixins: false,
	classes: ['a-ent'],
	components: {
		['gltf-model']:'./assets/3d/XRcade/IVX.glb',
		gltfmat: {colors: '#05aaf4, #f4057c, #16aa60', emissives: '1,1,1'},
	},
};
auxl.ivxSign = auxl.Core(auxl.ivxSignData);
//IVX Line Sign
auxl.ivxLineSignData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'ivxLineSign', position: new THREE.Vector3(-0.25,8.5,-19.65), rotation: new THREE.Vector3(90,0,0), scale: new THREE.Vector3(1.6,1.6,1.6), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},}}, true);
auxl.ivxLineSign = auxl.Core(auxl.ivxLineSignData);




//North West Wall Pilar Lines
//East
auxl.nwWallPilarLineEastData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'nwWallPilarLineEast', position: new THREE.Vector3(-8.95,4.7,-18.93), rotation: new THREE.Vector3(0,0,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},}}, true);
auxl.nwWallPilarLineEast = auxl.Core(auxl.nwWallPilarLineEastData);
//South
auxl.nwWallPilarLineSouthData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'nwWallPilarLineSouth', position: new THREE.Vector3(-10.05,4.7,-17.945), rotation: new THREE.Vector3(0,90,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},}}, true);
auxl.nwWallPilarLineSouth = auxl.Core(auxl.nwWallPilarLineSouthData);

//South West Wall Pilar Lines
//West
auxl.swWallPilarLineWestData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'swWallPilarLineWest', position: new THREE.Vector3(-8.95,4.7,0.93), rotation: new THREE.Vector3(0,0,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},}}, true);
auxl.swWallPilarLineWest = auxl.Core(auxl.swWallPilarLineWestData);
//North
auxl.swWallPilarLineNorthData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'swWallPilarLineNorth', position: new THREE.Vector3(-10.05,4.7,-0.05), rotation: new THREE.Vector3(0,90,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},}}, true);
auxl.swWallPilarLineNorth = auxl.Core(auxl.swWallPilarLineNorthData);


//North East Wall Pilar Lines
//West
auxl.neWallPilarLineWestData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'neWallPilarLineWest', position: new THREE.Vector3(8.95,4.7,-18.93), rotation: new THREE.Vector3(0,0,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},}}, true);
auxl.neWallPilarLineWest = auxl.Core(auxl.neWallPilarLineWestData);
//South
auxl.neWallPilarLineSouthData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'neWallPilarLineSouth', position: new THREE.Vector3(10.05,4.7,-17.945), rotation: new THREE.Vector3(0,-90,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},}}, true);
auxl.neWallPilarLineSouth = auxl.Core(auxl.neWallPilarLineSouthData);

//South East Wall Pilar Lines
//West
auxl.seWallPilarLineWestData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'seWallPilarLineWest', position: new THREE.Vector3(8.95,4.7,0.93), rotation: new THREE.Vector3(0,180,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},}}, true);
auxl.seWallPilarLineWest = auxl.Core(auxl.seWallPilarLineWestData);
//North
auxl.seWallPilarLineNorthData = auxl.coreDataFromTemplate(auxl.lineSignData, {id: 'seWallPilarLineNorth', position: new THREE.Vector3(10.05,4.7,-0.05), rotation: new THREE.Vector3(0,-90,90), scale: new THREE.Vector3(1.9,1.9,1.9), components: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},}}, true);
auxl.seWallPilarLineNorth = auxl.Core(auxl.seWallPilarLineNorthData);


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
//Logo Left
auxl.logoLeftData = {
	data:'logoLeftData',
	id:'logoLeft',
	sources:false,
	text: false,
	geometry: {primitive: 'circle', radius: 0.5, segments: 32, thetaStart: 0, thetaLength: 360},
	material: {shader: "standard", color: "white", opacity: 1, metalness: 0.6, roughness: 0.4, emissive: "#1e7e5d", emissiveIntensity: 0.2, side: 'front',},
	position: new THREE.Vector3(0,0,0),
	rotation: new THREE.Vector3(0,-90,0),
	scale: new THREE.Vector3(1,1,1),
	animations: false,
	mixins: false,
	classes: ['a-ent',],
	components: false,
};
auxl.logoLeft = auxl.Core(auxl.logoLeftData);

//Cab Layer
auxl.cabLayerData = {
	parent: {core: auxl.cadeCab},
	child0: {core: auxl.cabTitle},
}
auxl.cabLayer = auxl.Layer('cabLayer', auxl.cabLayerData);

//Left
//Cab 1
auxl.cadeCab1LayerData = auxl.layerDataFromTemplate(auxl.cabLayerData, 'cadeCab1LayerData', {rotation: new THREE.Vector3(0,90,0), components:{['gltf-model']:'./assets/3d/XRcade/cabinet.glb', gltfmat: {colors:['random', 'random', 'random', 'random', 'random', 'white', 'random', 'random', 'random', 'random'], textures:[false, false, false, false, false, auxl.game1Preview,],}, hovertext:{value: 'Ready?\nPlayer One', hover: 'top', offset: 5, twist: true,},},}, {grid: {start:{x:-5.5, y:0, z:-7.5}, end: {x:-4, y:0, z:-6}, yOffset: 0, collide: true}}, true);
auxl.cadeCab1Layer = auxl.Layer('cadeCab1Layer', auxl.cadeCab1LayerData);
auxl.cadeCab1Layer.layer.all.child0.core.core.text.value = 'Memory Order';
//Cab 2
auxl.cadeCab2Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab2Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-9}, end: {x:-4, y:0, z:-7.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab2Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game2Preview,]};
auxl.cadeCab2Layer.layer.all.child0.core.core.text.value = 'Swipe Launch';
//Cab 3
auxl.cadeCab3Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab3Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-10.5}, end: {x:-4, y:0, z:-9}, yOffset: 0, collide: true}}, true);
auxl.cadeCab3Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game3Preview,]};
auxl.cadeCab3Layer.layer.all.child0.core.core.text.value = 'Guess Hit';
//Cab 4
auxl.cadeCab4Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab4Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-12}, end: {x:-4, y:0, z:-10.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab4Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game4Preview,]};
auxl.cadeCab4Layer.layer.all.child0.core.core.text.value = 'Drag Diffuse';
//Cab 5
auxl.cadeCab5Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab5Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-3, y:0, z:-14.5}, end: {x:-1.5, y:0, z:-13}, yOffset: 0, collide: true}}, true);
auxl.cadeCab5Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game5Preview,]};
auxl.cadeCab5Layer.layer.all.child0.core.core.text.value = 'Sharp Shooter';
//Cab 6
auxl.cadeCab6Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab6Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-1.5, y:0, z:-14.5}, end: {x:0, y:0, z:-13}, yOffset: 0, collide: true}}, true);
auxl.cadeCab6Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game6Preview,]};
auxl.cadeCab6Layer.layer.all.child0.core.core.text.value = 'Perfect Scale';
//Cab 7
auxl.cadeCab7Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab7Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:0, y:0, z:-14.5}, end: {x:1.5, y:0, z:-13}, yOffset: 0, collide: true}}, true);
auxl.cadeCab7Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game7Preview,]};
auxl.cadeCab7Layer.layer.all.child0.core.core.text.value = 'Reflex 7';
//Cab 8
auxl.cadeCab8Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab8Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:1.5, y:0, z:-14.5}, end: {x:3, y:0, z:-13}, yOffset: 0, collide: true}}, true);
auxl.cadeCab8Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game8Preview,]};
auxl.cadeCab8Layer.layer.all.child0.core.core.text.value = 'Tap It';
//Cab 9
auxl.cadeCab9Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab9Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-12}, end: {x:5.5, y:0, z:-10.5}, yOffset: 0, collide: true}}, true);
auxl.cadeCab9Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game9Preview,]};
auxl.cadeCab9Layer.layer.all.child0.core.core.text.value = 'Pop Pop';
//Cab 10
auxl.cadeCab10Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab10Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-10.5}, end: {x:5.5, y:0, z:-9}, yOffset: 0, collide: true}}, true);
auxl.cadeCab10Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game10Preview,]};
auxl.cadeCab10Layer.layer.all.child0.core.core.text.value = 'Horde Halt';
//Cab 11
auxl.cadeCab11Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab11Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-9}, end: {x:5.5, y:0, z:-7.5}, yOffset: 0, collide: true}}, true);
//Cab 12
auxl.cadeCab12Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab12Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-7.5}, end: {x:5.5, y:0, z:-6}, yOffset: 0, collide: true}}, true);



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
//NPC

//Attendant
//

//Podium
auxl.npcAttPodiumData = {
data:'npcAttPodiumData',
id:'npcAttPodium',
sources: false,
text: false,
geometry: {primitive: 'box', depth: 1, width: 1, height: 0.4},
material: {shader: "standard", color: "#7d7581", emissive: '#7d7581', emissiveIntensity: 0.25, opacity: 1, side: 'double', metalness: 0.2, roughness: 0.8},
position: new THREE.Vector3(0,0,0),
grid: {start:{x:-0.5, y:0, z:-5.5}, end: {x:0.5, y:0, z:-4.5}, yOffset: 0.2, collide: true},
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: false,
mixins: false,
classes: ['a-ent', 'clickable'],
components: {
	hovertext:{value: 'Attendant',  hover: 'front', offset: 0.707, twist: true,},
},
};
auxl.npcAttPodium = auxl.Core(auxl.npcAttPodiumData);

//Parent
auxl.npcAttParentData = {
data:'npcAttParentData',
id:'npcAttParent',
sources: false,
text: false,
geometry: false,
material: false,
position: new THREE.Vector3(0,1.2,-5),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: false,
mixins: false,
classes: ['a-ent'],
components: {
	['stare']:{id: 'playerRig'},
},
};
auxl.npcAttParent = auxl.Core(auxl.npcAttParentData);
//Body
auxl.npcAttBodyData = {
data:'npcAttBodyData',
id:'npcAtt',
sources: false,
text: {value:'O_O', width: 2, wrapCount: 14, color: "#FFFFFF", align: "center", font: "exo2bold", zOffset: 0.26, side: 'double'},
geometry: {primitive: 'box', depth: 0.5, width: 0.5, height: 0.5},
material: {src: './assets/img/minty/4up.jpg', shader: "flat", color: "#FFFFFF", opacity: 1},
position: new THREE.Vector3(0,0,0),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(1,1,1),
animations: false,
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.npcAttBody = auxl.Core(auxl.npcAttBodyData);
//Rig
auxl.npcAttRigData = {
	parent: {core: auxl.npcAttParent}, 
	child0: {core: auxl.npcAttBody}, 
}
auxl.npcAttRig = auxl.Layer('npcAttRig',auxl.npcAttRigData);

//Book & Pages
auxl.npcAttPage0Data = {
	info:{
		id:'npcAttPage0',
		description:'Attendant intro and topic selection.',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	timeline0:{
		self:{Speak:{speech:'Hey there and welcome to Mintys XRcade!'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'I am the buildings attendant and can help answer some questions you may have.'},},
	},
	timeline2:{
		self:{Speak:{speech:'If there is nothing though, you may proceed to any doorway aka floor you currently have access to and of course have fun!'},},
	},
	topics:{
		self:{Speak:{speech:'Anything you want to know?'}, SelectJump:['Questions?',
['What is this place?','timeline4'],
['What are the controls?','timeline5'],
['Where are the games?','timeline6'],
['What kind of games are there?','timeline7'],
['How do you play a game?','timeline8'],
['When will more games be added?','timeline9'],
['Is this free to play?','timeline10'],
['Nothing else, thank you.','timelineEnd'],
],},
	},

	timeline4:{
		self:{
			Speak:{speech:'What is this place?'},
			Jump: {page: 'page1', timeline: 'timeline0'},
		}, 
	},
	timeline5:{
		self:{
			Speak:{speech:'What are the controls?'},
			Jump: {page: 'page2', timeline: 'page2Time0',},
		}, 
	},
	timeline6:{
		self:{
			Speak:{speech:'Where are the games?'},
			Jump: {page: 'page3', timeline: 'page3Time0'},
		}, 
	},
	timeline7:{
		self:{
			Speak:{speech:'What kind of games are there?'},
			Jump: {page: 'page4', timeline: 'page4Time0'},
		}, 
	},
	timeline8:{
		self:{
			Speak:{speech:'How do you play a game?'},
			Jump: {page: 'page5', timeline: 'page5Time0'},
		}, 
	},
	timeline9:{
		self:{
			Speak:{speech:'When will more games be added?'},
			Jump: {page: 'page6', timeline: 'page6Time0'},
		}, 
	},
	timeline10:{
		self:{
			Speak:{speech:'Is this free to play?'},
			Jump: {page: 'page7', timeline: 'page7Time0'},
		}, 
	},
	timelineEnd:{
		self:{
			Speak:{speech:'Enjoy your time at Mintys XRcade!'},
		}, 
	},
	timelineReset:{
		self: {ResetSpeech: true},
	},
};
auxl.npcAttPage1Data = {
	info:{
		id:'npcAttPage1',
		description:'What is this place?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	timeline0:{
		self:{Speak:{speech:'This is Mintys XRcade, a collection of mini-games, experiences, demos, experiments and more.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'All of that in the browser with support for XR. Playable on Desktop, Mobile and in VR too. More to be added!'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'It is a creative outlet and good place to showcase things I ve built with my personally made A-Frame engine called AUXL (A-Frame UX Library).'}}, 
	},
	timeline3:{
		self:{Speak:{speech:'Please have a look around and if you have any questions, comments or inquiries, feel free to reach me at one of my contacts you can find at mintycrisp.com .'}}, 
	},
	timeline4:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline5:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage2Data = {
	info:{
		id:'npcAttPage2',
		description:'What are the controls?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page2Time0:{
		self:{Speak:{speech:'Controls are dependent upon your hardware and the mode selected such as Desktop, Mobile or VR.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'The system allows the use of about a dozen or so actions at one time which can change from scene.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'Standard controls will allow you to move, look around, click/select with a raycaster, snap turn, crouch mode, vr sitting mode, etc...'}}, 
	},
	timeline3:{
		self:{Speak:{speech:'Reverting, overwriting and/or additional controls can be introduced in new scenes, during the scene, manually by the player or by the system due to an action.'}}, 
	},
	timeline4:{
		self:{
			Speak:{speech:'You can always view you a list of the current actions assigned and the mode settings in your Companions Menu under Controls.'},
		}, 
	},
	timeline5:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline6:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage3Data = {
	info:{
		id:'npcAttPage3',
		description:'Where are the games?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page3Time0:{
		self:{Speak:{speech:'You are currently in the building lobby. To find something to do, please take any doorway you see to another floor.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'Other floors will contain various shaped portals such as an arcade cabinet that will allow you to load into the connect game.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'In addition to games, there may be other types of experiences. Keep an open mind when exploring!'}}, 
	},
	timeline3:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline4:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage4Data = {
	info:{
		id:'npcAttPage4',
		description:'What kind of games are there?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page4Time0:{
		self:{Speak:{speech:'Currently a majority of mini-games with the addition of a Spooky set of experiences in progress, but much more coming soon.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'The game lengths can be quite varied too. Some quick, some endless and some other are fixed length.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'All games can be exitted while in-progress. If main menu isnt available, use your Companion Menu.'}}, 
	},
	timeline3:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline4:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage5Data = {
	info:{
		id:'npcAttPage5',
		description:'How do you play a game?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page5Time0:{
		self:{Speak:{speech:'On each floor, there will be various hardware consoles such as arcade cabinets which act the games menu toggle.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'Click on one to bring up the menu where you can read all about what the game is, controls, high scores as well as load it.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'When you load a game, you are jumping into the game world via the console.'}}, 
	},
	timeline3:{
		self:{Speak:{speech:'Each game world can have its own set of rules, control layouts, objectives, high scores, etc...'}}, 
	},
	timeline4:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline5:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage6Data = {
	info:{
		id:'npcAttPage6',
		description:'When will more games be added?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page6Time0:{
		self:{Speak:{speech:'For the month of October, a focus on Spooky games and experiences is the priority.'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'Next month will see experiments with Rollercoasters, using the engines new Physics access to create attractions, games and more.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'Check back often for new updates or follow one of Minty Crisps channels to stay up to date.'}}, 
	},
	timeline3:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline4:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttPage7Data = {
	info:{
		id:'npcAttPage7',
		description:'Is this free to play?',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	page7Time0:{
		self:{Speak:{speech:'Mintys XRcade is currently totally free to play. Built by Minty Crisp and shared with the world!'}}, 
	},
	timeline1:{
		self:{Speak:{speech:'If you enjoy the product and can afford to donate however, anything would be greatly appreciated.'}}, 
	},
	timeline2:{
		self:{Speak:{speech:'You can find out how to contribute and more at mintycrisp.com or within the arcades sponsor/token machines for a link to donation portals.'}}, 
	},
	timeline3:{
		self:{
			Speak:{speech:'The site does use a Zesty Billboard Ad in addition for monetization, however we have yet to book a client.'},
		}, 
	},
	timeline4:{
		self:{
			Speak:{speech:'So if you are interested in advertising via Zesty, we are on the marketplace or if you are interested in other advertising, please contact Minty Crisp.'},
		}, 
	},
	timeline5:{
		self:{
			Speak:{speech:'Any more questions?'},
		}, 
	},
	timeline4:{
		self: {BackwardJump: {page: 'page0', timeline: 'topics'},},
	},
};
auxl.npcAttIdleData = {
	info:{
		id:'npcAttIdleData',
		description:'Attendant idle speech.',
		tags:'npc',
		nextPage: null,
		prevPage: null,
		timeline:'linear',
	},
	timeline0:{
		self:{Speak:{speech:'Yo ho ho ho and a bottle of rum for me...'}},
	},
	timeline1:{
		self:{Speak:{speech:'Ooh a piece of candy!'}},
	},
	timeline1:{
		self:{Speak:{speech:'Nom nom nom nom.....'}},
	},
	timeline3:{
		self: {IdleReset: true},
	},
};
auxl.npcAttBookData = {
	info:{
		id:'npcAtt',
		name: 'Att',
		description:'XRcade Attendant',
		tags:'npc',
		timeline: 'linear',
		idleDelay: 7000,
		idleInterval: 10000,
		offset: new THREE.Vector3(0.5,0.25,0.25),
	},
	pages:{
		page0: auxl.npcAttPage0Data,
		page1: auxl.npcAttPage1Data,
		page2: auxl.npcAttPage2Data,
		page3: auxl.npcAttPage3Data,
		page4: auxl.npcAttPage4Data,
		page5: auxl.npcAttPage5Data,
		page6: auxl.npcAttPage6Data,
		page7: auxl.npcAttPage7Data,
	},
	idle:{
		page0: auxl.npcAttIdleData,
	},
};
//Bubble
auxl.attBubbleParentData = {
data:'attBubbleParentData',
id:'attBubbleParent',
sources:false,
text: {value:'... ... ...', color: "#FFFFFF", align: "left", font: "exo2bold", width: 1.1, zOffset: 0.025, side: 'front', wrapCount: 30, baseline: 'center'},
geometry: {primitive: 'box', depth: 0.025, width: 1.15, height: 0.4},
material: {shader: "standard", color: "#4bb8c1", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#4bb8c1", emissiveIntensity: 0.6},
position: new THREE.Vector3(0,0.6,-0.05),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(0.01,0.01,0.01),
animations: {
loadin: {property: 'scale', from: new THREE.Vector3(0.01,0.01,0.01), to: new THREE.Vector3(1,1,1), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadin'},
loadout: {property: 'scale', from: new THREE.Vector3(1,1,1), to: new THREE.Vector3(0.01,0.01,0.01), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeInElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadout'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.attBubbleParent = auxl.Core(auxl.attBubbleParentData);
//Speech Close
auxl.attBubbleCloseData = {
data:'attBubbleCloseData',
id:'attBubbleClose',
sources:false,
text: {value:'X', color: "#FFFFFF", align: "center", font: "exo2bold", zOffset: 0.025, side: 'front', wrapCount: 2, baseline: 'center'},
geometry: {primitive: 'box', depth: 0.025, width: 0.12, height: 0.12},
material: {shader: "standard", color: "#4bb8c1", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#4bb8c1", emissiveIntensity: 0.6},
position: new THREE.Vector3(0.7,0.08,-0.05),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(0.01,0.01,0.01),
animations: {
loadin: {property: 'scale', from: new THREE.Vector3(0.01,0.01,0.01), to: new THREE.Vector3(1,1,1), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadin'},
loadout: {property: 'scale', from: new THREE.Vector3(1,1,1), to: new THREE.Vector3(0.01,0.01,0.01), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeInElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadout'},

hoveron: {property: 'text.color', to: '#000000', dur: 100, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutSine', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
hoveroff: {property: 'text.color', to: '#ffffff', dur: 100, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutSine', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},

click: {property: 'scale', from: '1 1 1', to: '1.25 1.25 1.25', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.attBubbleClose = auxl.Core(auxl.attBubbleCloseData);
//Speech Reset
auxl.attBubbleResetData = {
data:'attBubbleResetData',
id:'attBubbleReset',
sources:false,
text: {value:'@', color: "#FFFFFF", align: "center", font: "exo2bold", zOffset: 0.025, side: 'front', wrapCount: 2, baseline: 'center'},
geometry: {primitive: 'box', depth: 0.025, width: 0.12, height: 0.12},
material: {shader: "standard", color: "#4bb8c1", opacity: 1, metalness: 0.2, roughness: 0.8, emissive: "#4bb8c1", emissiveIntensity: 0.6},
position: new THREE.Vector3(0.7,-0.06,-0.05),
rotation: new THREE.Vector3(0,0,0),
scale: new THREE.Vector3(0.01,0.01,0.01),
animations: {
loadin: {property: 'scale', from: new THREE.Vector3(0.01,0.01,0.01), to: new THREE.Vector3(1,1,1), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadin'},
loadout: {property: 'scale', from: new THREE.Vector3(1,1,1), to: new THREE.Vector3(0.01,0.01,0.01), dur: 1000, delay: 0, loop: false, dir: 'normal', easing: 'easeInElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'loadout'},

hoveron: {property: 'text.color', to: '#000000', dur: 100, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutSine', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseenter'},
hoveroff: {property: 'text.color', to: '#ffffff', dur: 100, delay: 0, loop: false, dir: 'normal', easing: 'easeInOutSine', elasticity: 400, autoplay: false, enabled: true, startEvents: 'mouseleave'},

click: {property: 'scale', from: '1 1 1', to: '1.25 1.25 1.25', dur: 125, delay: 0, loop: '1', dir: 'alternate', easing: 'easeInOutElastic', elasticity: 400, autoplay: false, enabled: true, startEvents: 'click'},
},
mixins: false,
classes: ['clickable','a-ent'],
components: false,
};
auxl.attBubbleReset = auxl.Core(auxl.attBubbleResetData);
//Comp Bubble Layer
auxl.attBubbleLayerData = {
	parent: {core: auxl.attBubbleParent}, 
	child0: {core: auxl.attBubbleClose}, 
	child1: {core: auxl.attBubbleReset}, 
}
auxl.attBubbleLayer = auxl.Layer('attBubbleLayer',auxl.attBubbleLayerData);
//NPC
auxl.npcAtt = auxl.NPC('npcAtt', auxl.npcAttRig, auxl.npcAttBookData, auxl.attBubbleLayer, true);


//
//Companion Additions

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
		self:{Speak:{speech:'Hello! I am your attendant, open my menu to see everything I can do for you.'},},
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
//Custom Scene Functions

//Carpet Changes Buttons
auxl.changeCarpetTexture = (style) => {
	auxl.floor.ChangeSelf({property: 'material', value:{shader: 'flat', side: 'front', src: auxl[style], repeat: auxl.floor.core.material.repeat}}, true)
	auxl.dividerEast.ChangeSelf({property: 'material', value:{shader: 'flat', src: auxl[style], repeat: auxl.dividerEast.core.material.repeat}}, true)
	auxl.dividerWest.ChangeSelf({property: 'material', value:{shader: 'flat', src: auxl[style], repeat: auxl.dividerWest.core.material.repeat}}, true)
	auxl.dividerNorth.ChangeSelf({property: 'material', value:{shader: 'flat', src: auxl[style], repeat: auxl.dividerNorth.core.material.repeat}}, true)
	auxl.dividerSouth.ChangeSelf({property: 'material', value:{shader: 'flat', src: auxl[style], repeat: auxl.dividerSouth.core.material.repeat}}, true)
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

//Enable Lightning Rain Storm Weather
auxl.WeatherControls = () => {

	let weather = {};
	weather.id = 'atmos';

	//Spawn Weather
	const SpawnWeather = () => {
		auxl.sceneEl.setAttribute('rain', {density: 20})
		auxl.sceneEl.setAttribute('lightningbolt', true)
	}
	//Despawn Weather
	const DespawnWeather = () => {
		auxl.sceneEl.removeAttribute('rain');
		auxl.sceneEl.removeAttribute('lightningbolt');
	}

	return {weather, SpawnWeather, DespawnWeather}
}

auxl.atmos = auxl.WeatherControls();


//#rebuild
//Build Scene Library Objects - Re-add all objGen declerations
auxl.buildSceneLibrary = () => {
	auxl.skyGrad1 = auxl.Core(auxl.skyGrad1Data);
	auxl.skyBox1 = auxl.SkyBox(auxl.skyBox1Data);
	auxl.floor = auxl.Core(auxl.floorData);
	auxl.carpetChange1 = auxl.Core(auxl.carpetChange1Data);
	auxl.carpetChange2 = auxl.Core(auxl.carpetChange2Data);
	auxl.carpetChange3 = auxl.Core(auxl.carpetChange3Data);
	auxl.carpetChange4 = auxl.Core(auxl.carpetChange4Data);
	auxl.carpetChange5 = auxl.Core(auxl.carpetChange5Data);
	auxl.carpetChange6 = auxl.Core(auxl.carpetChange6Data);
	auxl.mtnFloor = auxl.Core(auxl.mtnFloorData);
	auxl.jukeBox = auxl.Core(auxl.jukeBoxData);
	auxl.jukeBoxAudioToggle = auxl.Core(auxl.jukeBoxAudioToggleData);
	auxl.token = auxl.Core(auxl.tokenData);
	auxl.sponsor1 = auxl.Core(auxl.sponsor1Data);
	auxl.wavesSign = auxl.Core(auxl.wavesSignData);
	auxl.heartsSign = auxl.Core(auxl.heartsSignData);
	auxl.heartLineSign = auxl.Core(auxl.heartLineSignData);
	auxl.treeSign = auxl.Core(auxl.treeSignData);
	auxl.ivxSign = auxl.Core(auxl.ivxSignData);
	auxl.cadeSign1 = auxl.Core(auxl.cadeSignData);
	auxl.cadeSign2 = auxl.Core(auxl.cadeSign2Data);
	auxl.signSpinner = auxl.Core(auxl.signSpinnerData);
	auxl.cadeSignSpinner = auxl.Layer('cadeSignSpinner', auxl.cadeSignSpinnerData);
	auxl.treeLineSign = auxl.Core(auxl.treeLineSignData);
	auxl.ivxLineSign = auxl.Core(auxl.ivxLineSignData);
	auxl.waveLineSign = auxl.Core(auxl.waveLineSignData);
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
	auxl.cadeCab1LayerData = auxl.layerDataFromTemplate(auxl.cabLayerData, 'cadeCab1LayerData', {rotation: new THREE.Vector3(0,90,0), components:{['gltf-model']:'./assets/3d/XRcade/cabinet.glb', gltfmat: {colors:['random', 'random', 'random', 'random', 'random', 'white', 'random', 'random', 'random', 'random'], textures:[false, false, false, false, false, auxl.game1Preview,],}, hovertext:{value: 'Ready?\nPlayer One', hover: 'top', offset: 5, twist: true,},},}, {grid: {start:{x:-5.5, y:0, z:-7.5}, end: {x:-4, y:0, z:-6}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab1Layer = auxl.Layer('cadeCab1Layer', auxl.cadeCab1LayerData);
	auxl.cadeCab1Layer.layer.all.child0.core.core.text.value = 'Memory Order';
	//Cab 2
	auxl.cadeCab2Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab2Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-9}, end: {x:-4, y:0, z:-7.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab2Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game2Preview,]};
	auxl.cadeCab2Layer.layer.all.child0.core.core.text.value = 'Swipe Launch';
	//Cab 3
	auxl.cadeCab3Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab3Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-10.5}, end: {x:-4, y:0, z:-9}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab3Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game3Preview,]};
	auxl.cadeCab3Layer.layer.all.child0.core.core.text.value = 'Guess Hit';
	//Cab 4
	auxl.cadeCab4Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab4Layer', {rotation: new THREE.Vector3(0,90,0)}, {grid: {start:{x:-5.5, y:0, z:-12}, end: {x:-4, y:0, z:-10.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab4Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game4Preview,]};
	auxl.cadeCab4Layer.layer.all.child0.core.core.text.value = 'Drag Diffuse';
	//Cab 5
	auxl.cadeCab5Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab5Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-3, y:0, z:-14.5}, end: {x:-1.5, y:0, z:-13}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab5Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game5Preview,]};
	auxl.cadeCab5Layer.layer.all.child0.core.core.text.value = 'Sharp Shooter';
	//Cab 6
	auxl.cadeCab6Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab6Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:-1.5, y:0, z:-14.5}, end: {x:0, y:0, z:-13}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab6Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game6Preview,]};
	auxl.cadeCab6Layer.layer.all.child0.core.core.text.value = 'Perfect Scale';
	//Cab 7
	auxl.cadeCab7Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab7Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:0, y:0, z:-14.5}, end: {x:1.5, y:0, z:-13}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab7Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game7Preview,]};
	auxl.cadeCab7Layer.layer.all.child0.core.core.text.value = 'Reflex 7';
	//Cab 8
	auxl.cadeCab8Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab8Layer', {rotation: new THREE.Vector3(0,0,0)}, {grid: {start:{x:1.5, y:0, z:-14.5}, end: {x:3, y:0, z:-13}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab8Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game8Preview,]};
	auxl.cadeCab8Layer.layer.all.child0.core.core.text.value = 'Tap It';
	//Cab 9
	auxl.cadeCab9Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab9Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-12}, end: {x:5.5, y:0, z:-10.5}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab9Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game9Preview,]};
	auxl.cadeCab9Layer.layer.all.child0.core.core.text.value = 'Pop Pop';
	//Cab 10
	auxl.cadeCab10Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab10Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-10.5}, end: {x:5.5, y:0, z:-9}, yOffset: 0, collide: true}}, true);
	auxl.cadeCab10Layer.layer.all.parent.core.core.components.gltfmat = {colors:['random','random','random','random','random','white','random','random','random','random'], textures:[false, false, false, false, false, auxl.game10Preview,]};
	auxl.cadeCab10Layer.layer.all.child0.core.core.text.value = 'Horde Halt';
	//Cab 11
	auxl.cadeCab11Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab11Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-9}, end: {x:5.5, y:0, z:-7.5}, yOffset: 0, collide: true}}, true);
	//Cab 12
	auxl.cadeCab12Layer = auxl.layerFromTemplate(auxl.cabLayer, 'cadeCab12Layer', {rotation: new THREE.Vector3(0,-90,0)}, {grid: {start:{x:4, y:0, z:-7.5}, end: {x:5.5, y:0, z:-6}, yOffset: 0, collide: true}}, true);

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
//Entrance Zone
auxl.entranceZoneData = {
	info:{
		id: 'entranceZone',
		name: 'Entrance Zone',
		zoneNum: 0,
		start: 'entranceHome',
		travelMenu: false,
	},
	controls:{
	},
	start:{
		skyBox1:{SpawnSkyBox: null},
		player:{UpdatePlayerPosition: new THREE.Vector3(0,0,-1), TwistTo: 0},
	},
	delay:{
		100:{
			skyBox1:{SetTime: 9},
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
//Home
auxl.entranceHomeData = {
	info:{
		id:'entranceHome',
		name: 'Entrance Home',
		description: 'Welcome to Minty&sbquo;s XR Land! This is the home area for all the zones.',
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
		//Bug workaround to ensure game menus are removed
		allGameMenus:{DespawnAllGameMenus:null},
		//Attendant
		npcAtt:{SpawnNPC:null},
		npcAttPodium:{SpawnCoreOnGrid:null},
		//Doorways
		entranceToFloor1:{SpawnCore:null},
		entranceToSpooky:{SpawnCoreOnGrid:null},
		//Floor
		floor:{SpawnCore:null},
		carpetChange1:{SpawnCore:null},
		carpetChange2:{SpawnCore:null},
		carpetChange3:{SpawnCore:null},
		carpetChange4:{SpawnCore:null},
		carpetChange5:{SpawnCore:null},
		carpetChange6:{SpawnCore:null},
		//North
		wallNorthSeg1:{SpawnCoreOnGrid:null},
		wallNorthFrame1:{SpawnCoreOnGrid:null},
		wallNorthSeg2:{SpawnCoreOnGrid:null},
		wallNorthFrame2:{SpawnCoreOnGrid:null},
		wallNorthSeg3:{SpawnCoreOnGrid:null},
		//East
		wallEastSeg1:{SpawnCoreOnGrid:null},
		wallEastFrame1:{SpawnCoreOnGrid:null},
		wallEastSeg2:{SpawnCoreOnGrid:null},
		wallEastFrame2:{SpawnCoreOnGrid:null},
		wallEastSeg3:{SpawnCoreOnGrid:null},
		//South
		wallSouthTop:{SpawnCoreOnGrid:null},
		wallSouthPart1:{SpawnCoreOnGrid:null},
		wallSouthPart2:{SpawnCoreOnGrid:null},
		//West
		wallWestSeg1:{SpawnCoreOnGrid:null},
		wallWestFrame1:{SpawnCoreOnGrid:null},
		wallWestSeg2:{SpawnCoreOnGrid:null},
		wallWestFrame2:{SpawnCoreOnGrid:null},
		wallWestSeg3:{SpawnCoreOnGrid:null},
		//Wall Pilars
		wallPilar1:{SpawnCoreOnGrid:null},
		wallPilar2:{SpawnCoreOnGrid:null},
		wallPilar3:{SpawnCoreOnGrid:null},
		wallPilar4:{SpawnCoreOnGrid:null},
		//Inner Pilars
		InnerPilar1:{SpawnCoreOnGrid:null},
		InnerPilar2:{SpawnCoreOnGrid:null},
		InnerPilar3:{SpawnCoreOnGrid:null},
		InnerPilar4:{SpawnCoreOnGrid:null},
		//Dividers
		//dividerNorth:{SpawnCoreOnGrid:null},
		//dividerEast:{SpawnCoreOnGrid:null},
		//dividerSouth:{SpawnCoreOnGrid:null},
		//dividerWest:{SpawnCoreOnGrid:null},
		//Mini Menus
		jukeBox:{SpawnCoreOnGrid:null},
		token:{SpawnCoreOnGrid:null},
		//Billboard Ad
		sponsor1:{SpawnCore:null},
		//XRCade Sign
		cadeSignSpinner:{SpawnLayer:null},
		//North Wall
		ivxSign:{SpawnCore:null},
		ivxLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//East Wall
		treeSign:{SpawnCore:null},
		treeLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//South Wall
		heartsSign:{SpawnCore:null},
		heartLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#eddd23, #f4057c', emissives: '1,1'},},}, SpawnCore:null,},
		//West Wall
		wavesSign:{SpawnCore:null},
		waveLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//Wall Pilar Lines
		nwWallPilarLineEast:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		nwWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
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
	map:{
		data: auxl.entranceZoneData.entranceHome,
	},
};
//Build
auxl.entranceHome = auxl.SceneNode(auxl.entranceHomeData);
auxl.entranceZone = auxl.MapZone(auxl.entranceZoneData);

//
//XRcade Zone
auxl.xrcadeZoneData = {
	info:{
		id: 'xrcadeZone',
		name: 'XRcade Zone',
		zoneNum: 1,
		start: 'xrcadeHome',
		travelMenu: false,
	},
	controls:{
	},
	start:{
		skyBox1:{SpawnSkyBox: null},
		player:{UpdatePlayerPosition: new THREE.Vector3(0,0,-1), TwistTo: 0},
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
		//allGameMenus:{DespawnAllGameMenus:null},
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
			size: 100,
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
		//Doorway
		floor1ToEntrance:{SpawnCore:null},
		//Floor
		floor:{SpawnCore:null},
		carpetChange1:{SpawnCore:null},
		carpetChange2:{SpawnCore:null},
		carpetChange3:{SpawnCore:null},
		carpetChange4:{SpawnCore:null},
		carpetChange5:{SpawnCore:null},
		carpetChange6:{SpawnCore:null},
		//North
		wallNorthSeg1:{SpawnCoreOnGrid:null},
		wallNorthFrame1:{SpawnCoreOnGrid:null},
		wallNorthSeg2:{SpawnCoreOnGrid:null},
		wallNorthFrame2:{SpawnCoreOnGrid:null},
		wallNorthSeg3:{SpawnCoreOnGrid:null},
		//East
		wallEastSeg1:{SpawnCoreOnGrid:null},
		wallEastFrame1:{SpawnCoreOnGrid:null},
		wallEastSeg2:{SpawnCoreOnGrid:null},
		wallEastFrame2:{SpawnCoreOnGrid:null},
		wallEastSeg3:{SpawnCoreOnGrid:null},
		//South
		wallSouthTop:{SpawnCoreOnGrid:null},
		wallSouthPart1:{SpawnCoreOnGrid:null},
		wallSouthPart2:{SpawnCoreOnGrid:null},
		//West
		wallWestSeg1:{SpawnCoreOnGrid:null},
		wallWestFrame1:{SpawnCoreOnGrid:null},
		wallWestSeg2:{SpawnCoreOnGrid:null},
		wallWestFrame2:{SpawnCoreOnGrid:null},
		wallWestSeg3:{SpawnCoreOnGrid:null},
		//Wall Pilars
		wallPilar1:{SpawnCoreOnGrid:null},
		wallPilar2:{SpawnCoreOnGrid:null},
		wallPilar3:{SpawnCoreOnGrid:null},
		wallPilar4:{SpawnCoreOnGrid:null},
		//Inner Pilars
		InnerPilar1:{SpawnCoreOnGrid:null},
		InnerPilar2:{SpawnCoreOnGrid:null},
		InnerPilar3:{SpawnCoreOnGrid:null},
		InnerPilar4:{SpawnCoreOnGrid:null},
		//Dividers
		dividerNorth:{SpawnCoreOnGrid:null},
		dividerEast:{SpawnCoreOnGrid:null},
		//dividerSouth:{SpawnCoreOnGrid:null},
		dividerWest:{SpawnCoreOnGrid:null},
		//Mini Menus
		jukeBox:{SpawnCoreOnGrid:null},
		token:{SpawnCoreOnGrid:null},
		//Billboard Ad
		sponsor1:{SpawnCore:null},
		//XRCade Sign
		cadeSignSpinner:{SpawnLayer:null},
		//North Wall
		ivxSign:{SpawnCore:null},
		ivxLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//East Wall
		treeSign:{SpawnCore:null},
		treeLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//South Wall
		heartsSign:{SpawnCore:null},
		heartLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#eddd23, #f4057c', emissives: '1,1'},},}, SpawnCore:null,},
		//West Wall
		wavesSign:{SpawnCore:null},
		waveLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//Wall Pilar Lines
		nwWallPilarLineEast:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		nwWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#16aa60, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#f4057c, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#05aaf4, #eddd23', emissives: '1,1'},},}, SpawnCore:null,},
		//Cabinets
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
		//High Scores
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-3.5,0,-6.75), TwistTo: 90},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-3.5,0,-8.25), TwistTo: 90},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-3.5,0,-9.75), TwistTo: 90},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-3.5,0,-11.25), TwistTo: 90},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-2.5,0,-12.5), TwistTo: 0},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(-0.75,0,-12.5), TwistTo: 0},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(0.75,0,-12.5), TwistTo: 0},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(2.25,0,-12.5), TwistTo: 0},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(3,0,-11.25), TwistTo: -90},
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
		player:{UpdatePlayerPosition: new THREE.Vector3(3,0,-9.75), TwistTo: -90},
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
//Spooky Zone





//
//Spooky Zone
auxl.spookyZoneData = {
	info:{
		id: 'spookyZone',
		name: 'Spooky Zone',
		zoneNum: 0,
		start: 'spookyHome',
		travelMenu: false,
	},
	controls:{
	},
	start:{
		skyBoxSpooky:{SpawnSkyBox: null},
		//player:{UpdatePlayerPosition: new THREE.Vector3(0,0,1.5), TwistTo: 0},
	},
	delay:{
		100:{
			skyBoxSpooky:{SetTime: 21},
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
//Home
auxl.spookyHomeData = {
	info:{
		id:'spookyHome',
		name: 'Spooky Home',
		description: 'Welcome to the Spooky Zone!',
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
		//Doorway
		spookyToEntrance:{SpawnCore:null},
		//spookyToExterior:{SpawnCore:null},
		spookyToExterior:{SpawnCoreOnGrid:null},

		//Floor
		floor:{SpawnCore:null},
		carpetChange1:{SpawnCore:null},
		carpetChange2:{SpawnCore:null},
		carpetChange3:{SpawnCore:null},
		carpetChange4:{SpawnCore:null},
		carpetChange5:{SpawnCore:null},
		carpetChange6:{SpawnCore:null},
		//North
		wallNorthSeg1:{SpawnCoreOnGrid:null},
		wallNorthFrame1:{SpawnCoreOnGrid:null},
		wallNorthSeg2:{SpawnCoreOnGrid:null},
		wallNorthFrame2:{SpawnCoreOnGrid:null},
		wallNorthSeg3:{SpawnCoreOnGrid:null},
		//East
		wallEastSeg1:{SpawnCoreOnGrid:null},
		wallEastFrame1:{SpawnCoreOnGrid:null},
		wallEastSeg2:{SpawnCoreOnGrid:null},
		wallEastFrame2:{SpawnCoreOnGrid:null},
		wallEastSeg3:{SpawnCoreOnGrid:null},
		//South
		wallSouthTop:{SpawnCoreOnGrid:null},
		wallSouthPart1:{SpawnCoreOnGrid:null},
		wallSouthPart2:{SpawnCoreOnGrid:null},
		//West
		wallWestSeg1:{SpawnCoreOnGrid:null},
		wallWestFrame1:{SpawnCoreOnGrid:null},
		wallWestSeg2:{SpawnCoreOnGrid:null},
		wallWestFrame2:{SpawnCoreOnGrid:null},
		wallWestSeg3:{SpawnCoreOnGrid:null},
		//Wall Pilars
		wallPilar1:{SpawnCoreOnGrid:null},
		wallPilar2:{SpawnCoreOnGrid:null},
		wallPilar3:{SpawnCoreOnGrid:null},
		wallPilar4:{SpawnCoreOnGrid:null},
		//Inner Pilars
		InnerPilar1:{SpawnCoreOnGrid:null},
		InnerPilar2:{SpawnCoreOnGrid:null},
		InnerPilar3:{SpawnCoreOnGrid:null},
		InnerPilar4:{SpawnCoreOnGrid:null},
		//Dividers
		//dividerNorth:{SpawnCoreOnGrid:null},
		//dividerEast:{SpawnCoreOnGrid:null},
		//dividerSouth:{SpawnCoreOnGrid:null},
		//dividerWest:{SpawnCoreOnGrid:null},
		//Mini Menus
		jukeBox:{SpawnCoreOnGrid:null},
		token:{SpawnCoreOnGrid:null},
		//Billboard Ad
		sponsor1:{SpawnCore:null},
		//XRCade Sign
		cadeSignSpinner:{SpawnLayer:null},
		//North Wall
		batsSign:{SpawnCore:null},
		ivxLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#000000, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		//East Wall
		jackoSign:{SpawnCore:null},
		treeLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#9939e0, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		//South Wall
		heartsSign:{SpawnCore:null},
		heartLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#d47d16, #000000', emissives: '1,1'},},}, SpawnCore:null,},
		//West Wall
		ghostSign:{SpawnCore:null},
		waveLineSign:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#11bfab, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		//Wall Pilar Lines
		nwWallPilarLineEast:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#000000, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		nwWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#11bfab, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#000000, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		swWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#11bfab, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#000000, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		neWallPilarLineSouth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#9939e0, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineWest:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#000000, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},
		seWallPilarLineNorth:{ChangeCore:{property: 'components', value: {['gltf-model']:'./assets/3d/XRcade/line.glb', gltfmat: {colors: '#9939e0, #d47d16', emissives: '1,1'},},}, SpawnCore:null,},

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
	map:{
		data: auxl.spookyZoneData.spookyHome,
	},
};
//Exterior
auxl.spookyExtData = {
	info:{
		id:'spookyExt',
		name: 'Hallows Cemetery Ext',
		description: 'Exterior of the Hallows Cemetery.',
		sceneText: false,
		fog: {type: 'exponential', color: '#000', density: 0.025},
		map: {
			size: 200,
			height: {top: 2, bottom: 0},
			edge: false,
			spawnEdge: false,
			edgeUpdate: false,
		},
		spawnPos: 'other',
	},
	controls:{
	},
	start:{
		//Door
		exteriorToSpooky:{SpawnCoreOnGrid:null},
		exteriorToRoom1:{SpawnCoreOnGrid:null},
		//Horizon
		spookyHills:{SpawnHorizon:null},
		//Floor
		spookyFloor:{SpawnCore:null},
		//Fence
		//kayKitFence:{SpawnCoreOnGrid:null},
		//kayKitFenceBroken:{SpawnCoreOnGrid:null},
		//kayKitFenceGate:{SpawnCoreOnGrid:null},
		//kayKitFencePillar:{SpawnCoreOnGrid:null},
		//kayKitFencePillarBroken:{SpawnCoreOnGrid:null},

		//Grid Layouts
		hallowGridDoors:{SpawnGridLayout:'layout1'},
		hallowGridFences:{SpawnGridLayout:'layout1'},
		hallowGridGraves:{SpawnGridLayout:'layout1'},
		hallowGridAltGraves:{SpawnGridLayout:'layout1'},
		hallowGridTrees:{SpawnGridLayout:'layout1'},
		hallowGridDeco:{SpawnGridLayout:'layout1'},
		hallowGridTallDeco:{SpawnGridLayout:'layout1'},

		//Outer Ring
		treeRing1:{SpawnObjRing:null},
		treeRing2:{SpawnObjRing:null},
		treeRing3:{SpawnObjRing:null},
		treeRing4:{SpawnObjRing:null},
		treeRing5:{SpawnObjRing:null},
		treeRing6:{SpawnObjRing:null},
		//Inner Ring
		innerRing1:{SpawnObjRing:null},
		innerRing2:{SpawnObjRing:null},
		innerRing3:{SpawnObjRing:null},
		innerRing4:{SpawnObjRing:null},

		//Weather
		atmos:{SpawnWeather:null},

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
		//Weather
		atmos:{DespawnWeather:null},
	},
	map:{
		data: auxl.spookyZoneData.spookyExt,
	},
};
auxl.spookyRoom1Data = {
	info:{
		id:'spookyRoom1',
		name: 'Room 1',
		description: 'Spooky room 1.',
		sceneText: true,
		fog: false,
		map: {
			size: 60,
			height: {top: 2, bottom: 0},
			edge: true,
			spawnEdge: true,
			edgeUpdate: false,
		},
		spawnPos: 'other',
	},
	controls:{
	},
	start:{
		//Door
		room1ToExterior:{SpawnCoreOnGrid:null},
		//Horizon
		//spookyHills:{SpawnHorizon:null},
		//Floor
		spookyRoom1Floor:{SpawnCore:null},
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
	map:{
		data: auxl.spookyZoneData.spookyRoom1,
	},
};
//Build
auxl.spookyHome = auxl.SceneNode(auxl.spookyHomeData);
auxl.spookyExt = auxl.SceneNode(auxl.spookyExtData);
auxl.spookyRoom1 = auxl.SceneNode(auxl.spookyRoom1Data);
auxl.spookyZone = auxl.MapZone(auxl.spookyZoneData);



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
		entranceZone:{
			entranceHome:{
				connect0: {inZone: 'xrcadeZone', node: 'xrcadeHome',},
				connect1: {inZone: 'spookyZone', node: 'spookyHome',},
			},
		},
		xrcadeZone:{
			xrcadeHome:{
				connect0: {inZone: 'entranceZone', node: 'entranceHome',},
				connect1: {inZone: true, node: 'game1',},
				connect2: {inZone: true, node: 'game2',},
				connect3: {inZone: true, node: 'game3',},
				connect4: {inZone: true, node: 'game4',},
				connect5: {inZone: true, node: 'game5',},
				connect6: {inZone: true, node: 'game6',},
				connect7: {inZone: true, node: 'game7',},
				connect8: {inZone: true, node: 'game8',},
				connect9: {inZone: true, node: 'game9',},
				connect10: {inZone: true, node: 'game10',},
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
		spookyZone:{
			spookyHome:{
				connect0: {inZone: 'entranceZone', node: 'entranceHome',},
				connect1: {inZone: true, node: 'spookyExt',},
			},
			spookyExt:{
				connect0: {inZone: true, node: 'spookyHome',},
				connect1: {inZone: true, node: 'spookyRoom1',},
			},
			spookyRoom1:{
				connect0: {inZone: true, node: 'spookyExt',},
			},
		},
	},
	controls:{
		action1Down:{auxlObj: 'playerRig', component: 'locomotion', func: 'toggleSpeed', name: 'Toggle Walk/Run', info: 'Change your walking speed between walk and run.'},
		action2Down:{auxlObj: 'player', func: 'ToggleCrouch', name: 'Toggle Crouch/Stand', info: 'Change your position speed between crouch and standing.'},
		action3Down:{auxlObj: 'player', func: 'ToggleSittingMode', name: 'Toggle Sit/Stand', info: 'Change your height between sitting and standing mode.'},
		action6Down:{auxlObj: 'player', func: 'SnapLeft45', name: 'Snap View Left', info: 'Quick snap your view 45 degrees to the left.'},
		action7Down:{auxlObj: 'player', func: 'SnapRight45', name: 'Snap View Right', info: 'Quick snap your view 45 degrees to the right.'},
		action8Down:{auxlObj: 'player', func: 'MainMenuAction', name: 'Toggle Main Menu', info: 'Go back in the Main Menu or Spawn/Despawn Compaon.'},
	},
	start:{
		comp:{SpawnComp: null},
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
		soundEffects: {},
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