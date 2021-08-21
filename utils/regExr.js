// Expresiones regulares usadas para validar forms

// Registro
export const regExpression = {
  swuser: /^[a-zA-Z0-9_\-@]{2,16}$/,
  user: /^[a-zA-Z0-9_-]{2,16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{8,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{6,14}$/,
};
export const regMessage = {
  user: 'Solo se permiten letras, numeros, guion y guion bajo.',
  name: 'Solo se permiten letras y espacios, pueden llevar acentos.',
  password: 'La longitud debe ser de 8 a 20 digitos.',
  email: 'El formato ingresado no pertenece a un correo electronico.',
  phone: 'La longitud debe ser de 6 a 14 numeros.',
  required: 'Este campo es obligatorio.',
};

// New Product/Client
export const newExpression = {
  category: /^[0-9]$/,
  image: /^[a-zA-Z0-9_-]{1,16}$/,
  username: /^[a-zA-Z0-9_\-\s]{1,30}$/,
  code: /^[A-Z0-9]{1,10}$/,
  zip: /^[0-9]{1,6}$/,
  comment: /^[a-zA-Z0-9:_\-.,()\s]{1,310}$/,
  price: /^.{1,9}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
  phone: /^\d{7,14}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
export const newMessage = {
  image: 'Solo se permiten imagenes.',
  username: 'Solo se permiten letras, numeros y guion.',
  zip: 'Formato no valido.',
  code: 'Solo mayusculas y numeros.',
  comment: 'Solo se permiten letras, numeros, guion y parentesis (max 310 caract.).',
  price: 'Entre 1 y 10 digitos.',
  name: 'Solo se permiten letras y pueden llevar acentos.',
  phone: 'La longitud debe ser de 7 a 14 numeros.',
  email: 'El formato ingresado no pertenece a un correo electronico.',
  required: 'Este campo es obligatorio.',
};
