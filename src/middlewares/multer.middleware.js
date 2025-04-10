import multer from "multer";
import path from "path";

// __dirname is not available in ES modules directly
// So mimic it if using ES modules:
const tempPath = path.resolve("public/temp");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, tempPath)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export  const upload = multer({ storage: storage })