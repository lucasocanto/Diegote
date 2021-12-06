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

modules.exports = validateRegister