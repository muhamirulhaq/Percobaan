import { WebGLRenderer } from "three";

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 1, 100);
const renderer = new WebGLRenderer();

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);