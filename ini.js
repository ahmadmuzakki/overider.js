const fs = require('fs')
  , ini = require('ini')
function Overide(source,destination){
  let parsedsource = ini.parse(fs.readFileSync(source, 'utf-8'))
  let parseddestination = ini.parse(fs.readFileSync(destination, 'utf-8'))
  let result = doOveride(parsedsource,parseddestination)
  
  fs.writeFileSync(destination, ini.stringify(result))
}

function doOveride(source, destination) {
  if(Array.isArray(source) || (typeof source!=='object')){
    return source
  }
  
  for(let field in source){
    if(!destination.hasOwnProperty(field)){
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
