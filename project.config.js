// Configuración del proyecto Fin Track
module.exports = {
  // Configuración de desarrollo
  development: {
    port: 3000,
    host: 'localhost',
    openBrowser: true
  },
  
  // Configuración de producción
  production: {
    buildPath: 'build',
    optimize: true,
    minify: true
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Fin Track',
    version: '1.0.0',
    description: 'Control de Gastos - Aplicación para gestionar finanzas personales',
    author: 'Equipo de Desarrollo',
    license: 'MIT'
  },
  
  // Configuración de características
  features: {
    authentication: true,
    transactions: true,
    categories: true,
    reports: true,
    dataExport: true,
    responsive: true
  }
};

