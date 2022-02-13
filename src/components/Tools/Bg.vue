<!-- <template>
  <canvas></canvas>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as THREE from "three";
let camera: any
let scene: any
let renderer: any
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = 1
let windowHalfY = 1
onMounted(() => {
  init()
  animate()

  function init() {

    /* 创建一个垂直夹角为80度、渲染区域为距离镜头1px到2000px的透视投影相机，
    设置其位置为z:500px，镜头朝向空间坐标轴原点x:0,y:0,z:0 */
    camera = new THREE.PerspectiveCamera(80, 294 / 182, 1, 2000)
    camera.position.z = 500

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const size = 6000

    for (let i = 0; i < 20000; i++) {
      const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
      const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
      const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

      vertices.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    material = new THREE.PointsMaterial({
      size: 2,
      color: 0xffffff,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(294, 183)
    document.body.appendChild(renderer.domElement)

    document.body.style.touchAction = 'none'
    document.body.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onWindowResize)
  }

  function onWindowResize() {
    windowHalfX = 294 / 2
    windowHalfY = 182 / 2

    camera.aspect = 294 / 200
    camera.updateProjectionMatrix()
    renderer.setSize(294, 182)
  }

  function onPointerMove(event: any) {
    mouseX = 200 - windowHalfX
    mouseY = 200 - windowHalfY
  }

  function animate() {
    requestAnimationFrame(animate)
    render()
  }

  function render() {
    camera.position.x += (mouseX * 0.0000002 - camera.position.x) * 0.02
    camera.position.y += (-mouseY * 0.0000002 - camera.position.y) * 0.02
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    scene.rotation.x += 0.01
    scene.rotation.y += 0.02
  }
})
</script>

<style>
canvas {
  display: block;
  width: 294px;
  height: 182px;
  position: absolute;
  top: 145px;
  right: 47px;
  border-radius: 15px;
  z-index: auto;
  display: none;
}
</style>
 -->
