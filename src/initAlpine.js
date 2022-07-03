// initAlpine.js
// Import the Alpine JS framework
import Alpine from 'alpinejs'

// If you abstracted your Alpine component logic, you'd import that here
import widget from './widget.js'

import widgetHTML from './..widget.html'

const initAlpine = () => {
  window.Alpine = Alpine
  Alpine.start()

  document.getElementById("app").innerHTML = widgetHTML
}