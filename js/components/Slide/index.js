const states = [true, false, false];

function showItems(stateItems) {
  const noActive = Item`
.item{
  list-style: none;
  height: calc(var(--line-height) * 3);
  width: calc(var(--line-height) * 3);
  background-color: var(--happy-color);
  transition: transform 100ms linear;
  cursor: pointer;
}
`
  const itemActive = Item`

.item.active{
  transform: scale(1.6)
}
${'active'}
`

  const items = stateItems.map(state => {
    if (state) {
      return itemActive
    }
    return item
  })

  return items.join(' ')
}

function handleClick(event) {
  const { target } = event
  const allItems = document.querySelectorAll('.item');
  allItems.forEach(item => item.classList.remove('active'))
  target.classList.toggle('active')
}

function createStyle(css) {
  const head = document.querySelector('head');
  const style = `
    <style>
      ${css}
    </style>
  `
  head.insertAdjacentHTML('beforeend', style)
}

const Action = (css) => {
  createStyle(css)
  return (
    ` <li class="action"></li> `
  )
}

const Item = (css, className) => {
  createStyle(css)
  return (`
    <li class="item ${className}" style="${css}" onClick="handleClick(event)"></li>
`)
}
const Slide = (css, content) => (`
  <ul style="${css}">${content}</ul>
`)

const action = Action`
.action{
  list-style: none;
  height: calc(var(--line-height) * 4);
  width: calc(var(--line-height) * 4);
  background-color: var(--action-color);
  position: absolute;
  left: -5px;
}
.action.second{
  transform = translateX(293px);
}
`

const stylesItem = `

list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);

`

const item = Item`
.item{
    list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);
}
`



const slideContent = 'Vai!!!'
const slide = Slide`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 80%;
  height: var(--line-height);
  background-color: var(--happy-color);
  margin-top: auto;
  ${showItems(states) + action}
 `