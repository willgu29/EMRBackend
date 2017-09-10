import fs from 'fs'
import path from 'path'

function isValidEmr(emr) {
  var relativePath = __dirname + '/../../static'
  if (fs.existsSync(path.join(relativePath, emr.filePath))) {
    return true
  }
  return false;
}

export default isValidEmr
