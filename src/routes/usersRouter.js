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

const {check} = require('express-validator')

const validateRegister = [
    check('first_name').trim().notEmpty().withMessage('Ingrese su nombre').bail(),

    check('last_name').trim().notEmpty().withMessage('Ingrese su apellido').bail(),

    check('mail').trim().notEmpty().withMessage('Ingrese su correo electrónico').bail()
    .isEmail().withMessage('Ingrese su correo electrónico').bail()
    .normalizeEmail(),

    check('password').trim().notEmpty().withMessage('Ingrese su contraseña').bail()
    .isLength({min: 8}).withMessage('Su contraseña debe tener al menos 8 caracteres').bail(),

    check('repite_password').trim().notEmpty().withMessage('Vuelva a ingresar su contraseña').bail(),

   /*  falta agregar middleware para checkear si se cargo una foto de perfil  */    
]

router.get('/login', usersController.login)

router.get('/register', usersController.register)

router.post('/register', upload.single('image'), validateRegister, usersController.save) 

//opcional de recordar usuario con una cookie calculo

// fatlta el inicio de sesion, despues de eso configurar que la pagina se vea diferente para admins y clientes 

module.exports = router