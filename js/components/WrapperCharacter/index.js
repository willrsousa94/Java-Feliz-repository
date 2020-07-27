const pathPills = 'images/pills.png'


const pills = Character`
  width: 20%;\
  margin-left: 1rem;\
  margin-right: 1rem;\
  ${pathPills}\
`


const WrapperCharacters = (css, ...children) => {
  return `
    <div style="${css}">${children}</div>
  `
}

const wrapperCharacters = WrapperCharacters`
  display: flex;\
  justify-content: space-evenly;\
  ${pills + pills + pills}\
`


