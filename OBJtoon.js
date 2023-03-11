

import * as THREE from 'three'

import { OBJLoader } from './js/OBJLoader.js';

import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';

var container;

var camera, scene, renderer;

init();
animate();


function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );



	camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 5;
     camera.position.y = 0.3 ;
     camera.position.x = 1; 


	// scene

	scene = new THREE.Scene();

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );

	var pointLight = new THREE.PointLight( 0xffffff, 0.5);
	camera.add( pointLight );
	scene.add( camera );





	// model
const material1 =  new THREE.MeshToonMaterial({ 
color: 'grey', })


	var loader = new OBJLoader();

	loader.load( 'sasuke.obj', function ( obj ) {

		// center asset
          obj.scale.set( 0.03, 0.03, 0.03);	

obj.traverse( function ( child ) {
                             if ( child instanceof THREE.Mesh ) {
 

const material =  new THREE.MeshToonMaterial;                                                                   child.material =  material1
                                 }
                             } );scene.add(obj);
	} );

	//

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}



function animate() {




	requestAnimationFrame( animate );



	render();

}


                        document.body.appendChild( renderer.domElement );



function render() {


	renderer.render( scene, camera );

}
