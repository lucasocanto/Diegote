const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
       cb(null, path.join(__dirname,'../../public/images'))
    },
    filename: (req,file,cb) => {
        const name = req.params.id + Math.random() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({storage: storage})

router.get('/login', usersController.login)

router.get('/register', usersController.register)

router.post('/users/:id', upload.single('image'), usersController.save) // faltan validations 

//opcional de recordar usuario con una cookie calculo

// fatlta el inicio de sesion, despues de eso configurar que la pagina se vea diferente para admins y clientes 

module.exports = router