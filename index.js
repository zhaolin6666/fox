import * as THREE from 'three';
import {GLTFLoader} from 'GLTFLoader';
// import {BufferGeometryUtils} from 'BufferGeometryUtils';
import {renderer, scene, app} from 'app';

(async () => {

const u = app.files['./fox.glb'];
let o = await new Promise((accept, reject) => {
  new GLTFLoader().load(u, accept, function progress() {}, reject);
});
o = o.scene;
app.object.add(o);

let lastUpdateTime = Date.now();
function animate() {
  const now = Date.now();
  const timeDiff = now - lastUpdateTime;
  lastUpdateTime = now;
}
app.addEventListener('frame', animate);

})();