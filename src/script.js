let bg = document.getElementById('bg'),
moon = document.getElementById('moon'),
mountain = document.getElementById('mountain'),
road = document.getElementById('road'),
text = document.getElementById('text')

window.addEventListener('scroll', function() {
    let value = window.pageYOffset

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    text.style.top = value * 1 + 'px'
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 140) {
      document.getElementById('header').classList.add('fixed')
    } else {
      document.getElementById('header').classList.remove('fixed')
    }
})

const menuBtn = document.querySelector('.header-bar svg'),
menuSide = document.querySelector('.header-menu'),
crossBtn = document.querySelector('.absolute-menu-cross')
// crossBtn = window.getComputedStyle(elementCross, ':after')

menuBtn.addEventListener('click', asideMenu)
function asideMenu() {
  menuSide.classList.toggle('active-menu')
  document.body.style.overflow = 'hidden'
}

crossBtn.addEventListener('click', function() {
  menuSide.classList.remove('active-menu')
  document.body.style.overflow = 'unset'
})

document.addEventListener('mouseup', e => {
  if (!menuSide.contains(e.target)) {
    menuSide.classList.remove('active-menu')
  }
})

const rt = document.querySelector(body)