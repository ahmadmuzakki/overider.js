let args = process.argv.splice(process.execArgv.length + 2);
let ini = require("./ini")

const help = `Usage:
  node overider.js <source> <destination>
  
  source : file containing variable that gonna replaced into destination
	destination : file containing original content that will replaced by variable in source`

if(args.length==1){
  let arg = args[0]
  if(arg=="--h"||arg=="--help"){
    console.log(help)
    process.exit()
  }
  console.log("Wrong number of argument")
  console.log(help)
  process.exit()
}

if(args.length!==2){
  console.log("Wrong number of argument")
  console.log(help)
  process.exit()
}

let src=args[0],dst=args[1]
let tipe = getType(src,dst)
if( tipe=="ini"){
  console.log(`Overiding ini files: ${src} into ${dst}`)
  ini.Overide(src,dst)
  exit("exit")
}

function getType(src,dst){
  let srcSplit = src.split(".")
  let dstSplit = dst.split(".")
  
  if( srcSplit.length==1){
      exit("Invalid source file")
  }
  
  if(dstSplit.length==1){
    exit("Invalid destination file")
  }
  
  let ext1 = srcSplit[srcSplit.length-1]
  let ext2 = dstSplit[dstSplit.length-1]
  
  if( ext1!==ext2){
    exit("File type is not same")
  }
  
  return ext1
}

function exit(message){
  console.log(message)
  process.exit()
}
