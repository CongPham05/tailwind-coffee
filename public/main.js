
document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    alert('Quick note: This website is a learning project in the field of programming. All information in this website are sample data, they are not real. Thanks for reading this note!')
  }
}

const topMenu = document.getElementById('pc-top-menu')
const toggleTopMenuIcon = document.getElementById('pc-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('pc-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click Outside from Toggle top menu icon
    if (topMenu.classList.contains('pc-topmenu-expanded')) {
      topMenu.classList.remove('pc-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
