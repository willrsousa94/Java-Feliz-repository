const pathPills = 'images/pills.png'

console.log(pathPills)

const pills = Character`
  width: 10%;\
  margin-left: 1rem;\
  margin-right: 1rem;\
  ${pathPills}\
`

console.log(`pills is ${pills} `)

const WrapperCharacters = (css, ...children) => {
  return `
    <div style="${css}">${children}</div>
  `
}

const wrapperCharacters = WrapperCharacters`
  display: flex;\
  justify-content: space-around;\
  ${pills + pills + pills}\
`

console.log(`wrapperCharacters is ${wrapperCharacters}`)

