
const head = document.querySelector('head');

const css = `<style>
    * {
      margin: 0;
      padding: 0;
      border: none;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #2C3A47;
    }

    #root {
      box-sizing: border-box;
      font-family: 'Press Start 2P', cursive;
      background-color: #3b3b98;
      width: 40vw;
      min-width: 768px;
      height: 65vh;
      text-align: center;
      padding-top: 4rem;
    }
  </style>`

head.insertAdjacentHTML('beforeend', css  )