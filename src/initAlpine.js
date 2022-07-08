// initAlpine.js
// Import the Alpine JS framework
import Alpine from 'alpinejs'

// If you abstracted your Alpine component logic, you'd import that here
// import widget from './widget.js'

import widgetHTML from './../widget.html'

const initAlpine = () => {
  window.Alpine = Alpine
  document.addEventListener('alpine:init', () => {
    window.Alpine.data('state', () => ({
      next: false,
      back: true,
      progress: 33,
      questions: [
        {
          text: "What is the most fearsome fruit in Disney?",
          hint: "...",
          choices: ['apple', 'orange', 'banana', 'I don\'t know'],
        },
        {
          text: "What is the most ugly character in Disney?",
          hint: "...",
          choices: ['witch', 'cinderella', 'snow white', 'Not sure'],
        },
      ],
      characters: ['witch', 'cinderella', 'snow white', 'Not sure'],
      fruits: ['apple', 'orange', 'banana', 'I don\'t know'],
    }))
  })

  window.Alpine.start()

  document.getElementById("app").innerHTML = widgetHTML
}

export default initAlpine