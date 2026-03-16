// ── Mostrar / ocultar contraseña ──
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);

  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

/* ======================
   CAMBIO ENTRE FORMULARIOS
====================== */

function mostrarLogin() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';

  document.querySelector('.form-header h1').textContent = 'Iniciar Sesión';
  document.querySelector('.form-header p').textContent =
    'Accede con tu cuenta';
}

function mostrarRegistro() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';

  document.querySelector('.form-header h1').textContent = 'Crear Cuenta';
  document.querySelector('.form-header p').textContent =
    'Completa los campos para registrarte';
}

/* ======================
   VALIDACIONES REGISTRO
====================== */

function setError(input, msg, texto) {
  input.className = 'error';
  msg.className = 'field-message error';
  msg.textContent = texto;
}

function setSuccess(input, msg, texto) {
  input.className = 'success';
  msg.className = 'field-message success';
  msg.textContent = texto;
}

function validarNombre() {
  const input = nombre;
  const msg = nombreMsg;

  if (input.value.trim().length < 3) {
    setError(input, msg, 'Mínimo 3 caracteres');
    return false;
  }

  setSuccess(input, msg, 'Nombre válido ✓');
  return true;
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(correo.value.trim())) {
    setError(correo, correoMsg, 'Correo inválido');
    return false;
  }

  setSuccess(correo, correoMsg, 'Correo válido ✓');
  return true;
}

function validarPassword() {
  if (password.value.length < 8) {
    setError(password, passwordMsg, 'Mínimo 8 caracteres');
    return false;
  }

  setSuccess(password, passwordMsg, 'Contraseña válida ✓');
  return true;
}

function validarConfirmar() {
  if (confirmar.value !== password.value) {
    setError(confirmar, confirmarMsg, 'No coinciden');
    return false;
  }

  setSuccess(confirmar, confirmarMsg, 'Correcto ✓');
  return true;
}

/* ======================
   EVENTOS
====================== */

nombre.addEventListener('input', validarNombre);
correo.addEventListener('input', validarCorreo);
password.addEventListener('input', validarPassword);
confirmar.addEventListener('input', validarConfirmar);

registerForm.addEventListener('submit', e => {
  e.preventDefault();

  if (
    validarNombre() &&
    validarCorreo() &&
    validarPassword() &&
    validarConfirmar()
  ) {
    registerForm.style.display = 'none';
    successMessage.style.display = 'block';
  }
});