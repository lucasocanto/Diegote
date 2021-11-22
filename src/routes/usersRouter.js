const express = require('express')
const router = express.Router()

const path = require('path')

const usersController = require('../controllers/usersController')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
       cb(null, path.join(__dirname,'../../public/images'))
    },
    filename: (req,file,cb) => {
        const name =  Math.random() + path.extname(file.originalname)
        cb(null, name)
    }
})

const upload = multer({storage: storage})

const {body} = require('express-validator')

const validateRegister = [
    /*body('first_name').notEmpty().withMessage('Ingrese su nombre').bail(),

      body('last_name').notEmpty().withMessage('Inrgese su apellido').bail(),

    body('mail').notEmpty().withMessage('Complete este campo').bail()
    .isEmail().withMessage('Ingrese su correo electrónico').bail(),

    body('password').notEmpty().withMessage('Ingrese una contraseña').bail()
    .isLength({min: 8}).withMessage('Debe ingresar una contraseña de al menos 8 caracteres').bail(),

  body('repite_password').notEmpty().withMessage('Vuelva a ingresar su contraseña').bail()
    .equals('password').withMessage('Las contraseñas no coinciden').bail(),

    body('image').notEmpty().withMessage('Debe cargar una foto de perfil')  */
]

router.get('/login', usersController.login)

router.get('/register', usersController.register)

router.post('/register', validateRegister, upload.single('image'), usersController.save) 

//opcional de recordar usuario con una cookie calculo

// fatlta el inicio de sesion, despues de eso configurar que la pagina se vea diferente para admins y clientes 

module.exports = router