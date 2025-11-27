/*


export default function ThreeBackground() {
useEffect(() => {
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.style.position = 'fixed'
renderer.domElement.style.top = 0
renderer.domElement.style.left = 0
renderer.domElement.style.zIndex = -1
document.body.appendChild(renderer.domElement)


const group = new THREE.Group()
const geometry = new THREE.SphereGeometry(0.6, 32, 32)


for (let i = 0; i < 24; i++) {
const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
const sphere = new THREE.Mesh(geometry, material)
sphere.position.set((Math.random()-0.5)*24,(Math.random()-0.5)*18,(Math.random()-0.5)*24)
group.add(sphere)
}


scene.add(group)


const light = new THREE.PointLight(0xffffff, 1)
light.position.set(2, 3, 4)
scene.add(light)


camera.position.z = 10


const onResize = () => {
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()
renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onResize)


const animate = () => {
requestAnimationFrame(animate)
group.rotation.x += 0.001
group.rotation.y += 0.0012
renderer.render(scene, camera)
}
animate()


return () => {
window.removeEventListener('resize', onResize)
document.body.removeChild(renderer.domElement)
}
}, [])


return null
}
*/