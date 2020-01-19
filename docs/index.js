let links = document.querySelectorAll('a[href^="#"]')

links.forEach(element =>
  element.addEventListener('click', event => {
    event.preventDefault()
    const hash = element.getAttribute('href')
    const targetEl = document.getElementById(hash.replace('#', ''))
    targetEl.scrollIntoView({
      left: 0,
      block: 'start',
      behavior: 'smooth'
    })
  })
)
