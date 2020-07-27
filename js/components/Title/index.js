function Title(css, textContent) {
  return `
  <h1 style="${css[0]}${css[1]}">\
    ${textContent}\
  </h1>`.trim()
}

// function Title(css,textContent){
//   console.log(css)
//   let output = '';
//   for(let i = 0; i < textContent.length; i++){
//     output += css[i] + textContent[i];
//   }
//   output += css[textContent.length];

//   let lines = output.split(/(?:\r\n|\n|\r)/);

//   return lines.map((line) => {
//     return line.replace(/^\s+/gm, '');
//   }).join(' ').trim();


// }