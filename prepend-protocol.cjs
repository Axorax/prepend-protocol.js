function prependProtocol(t,e="https"){if("string"!=typeof t)throw Error("URL should be a string.");let o=/^[a-z]+:\/\//i.exec(t);if(o){let r=o[0];return r.toLowerCase()===`${e.toLowerCase()}://`?t:`${e}://${t.slice(r.length)}`}return"https"===e&&/^www\./i.test(t)?`https://${t}`:`${e}://${t}`}module.exports=prependProtocol