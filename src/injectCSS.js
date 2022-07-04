const injectCSS = () => {
  let link = document.createElement('link')
  link.type = "text/css"
  link.rel = "stylesheet"

  // if (process.env.NODE_ENV == 'production') {
  //   link.href = "https://cdn.jsdelivr.net/gh/jochasinga/faring/dist/styles.css"
  // } else {
  //   link.href = "./../dist/styles.css"
  // }

  link.href = "https://cdn.jsdelivr.net/gh/jochasinga/faring/dist/styles.css"

  var head = document.head
  head.appendChild(link)
}

export default injectCSS