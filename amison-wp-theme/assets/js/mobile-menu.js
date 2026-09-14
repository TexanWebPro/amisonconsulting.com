const menuButton = document.getElementById('menu-btn')
const drawer = document.getElementById('drawer')
const drawerOverlay = document.getElementById('drawer-overlay')

function toggleDrawer() {
    drawer.classList.toggle('hidden')
    drawerOverlay.classList.toggle('hidden')
}

menuButton.addEventListener('click', toggleDrawer)
drawerOverlay.addEventListener('click', toggleDrawer)

drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', toggleDrawer)
})