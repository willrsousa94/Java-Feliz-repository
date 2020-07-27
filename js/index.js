const root = document.querySelector('#root')
const textTitle = 'Dificuldade'


// Tagged Template String
const title = Title`\
  color: red;\
  font-size: 1.5rem;\
  letter-spacing: 1.2px;\
  margin-bottom: 4rem;
  ${textTitle}\
`.trim()



root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)