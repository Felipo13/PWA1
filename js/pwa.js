if('serviceWorker'in navigator){
  navigator.serviceWorker.register('./js/sw.js')
  .then(reg=>console.log('Registro exitoso',reg))
  .catch(err=>console.warn('Error al trartar de registra el SW', err))
}