// src/directives/scrollAnimation.js
export default {
    mounted: (el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('enter')
            el.classList.remove('before-enter')
          }
        })
      })
      el.classList.add('before-enter')
      observer.observe(el)
    }
  }