import fs from 'fs'
import path from 'path'
import axios from 'axios'

function isValidEmr(emr) {
  var relativePath = __dirname + '/../../static'
  if (fs.existsSync(path.join(relativePath, emr.filePath))) {
    return true
  }
  return false;
}
// TODO: Check if valid URL to file (GCS)

//Can't figure out async shit for real URL checking, hacky checking
function isValidUrl(emr) {
  if (emr.filePath.includes('https://storage.googleapis.com/emrworx.com/')){
    return true
  }
  return false
}

export default isValidUrl
