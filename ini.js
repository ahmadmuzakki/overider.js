const fs = require('fs')
  , ini = require('ini')
function Overide(source,destination,output){
  let parsedsource = ini.parse(fs.readFileSync(source, 'utf-8'))
  let parseddestination = ini.parse(fs.readFileSync(destination, 'utf-8'))
  let result = doOveride(parsedsource,parseddestination)
  
  if(output){
    destination = output
  }
  
  console.log(`Output: ${destination}`)
  fs.writeFileSync(destination, ini.stringify(result))
}

function doOveride(source, destination) {
  if(Array.isArray(source) || (typeof source!=='object')){
    return source
  }
  
  for(let field in destination){
    if(!source.hasOwnProperty(field)){
      continue
    }
    
    if(typeof source[field]==='object'){
      destination[field] = doOveride(source[field],destination[field])
      continue
    }
    destination[field] = source[field]
  }
  return destination
}

exports.Overide = Overide
