let rewire = require('rewire'),
  ini = rewire('../ini');

describe("ini test",()=>{
  let doOveride = ini.__get__('doOveride');
  it('overide parsed json',()=>{
    let src = {
      "hello":"dunia",
      "default":{
        "foo":"bars",
      },
      "foo":{
        "bar":[200]
      }
    }
    let dst = {
      "hello":"world",
      "foos":"ffo",
      "default":{
        "foo":"baz",
        "dog":"asu"
      },
      "foo":{
        "bar":[1,2,3]
      }
    }
    let result = doOveride(src,dst)
    expect(result).toEqual({
      "hello":"dunia",
      "foos":"ffo",
      "default":{
        "foo":"bars",
        "dog":"asu"
      },
      "foo":{
        "bar":[200]
      }
    })
  })
})
