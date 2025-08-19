# PLAN DE PRUEBAS - FIN TRACK CONTROL DE GASTOS

## 1. REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES

### 1.1 Requerimientos Funcionales (Relacionados con Historias de Usuario)

#### Epic: Gestión de Usuarios
- **US-001**: Como usuario, quiero registrarme en la aplicación para poder acceder a mis finanzas personales
- **US-002**: Como usuario, quiero iniciar sesión para acceder a mi cuenta
- **US-003**: Como usuario, quiero cerrar sesión para proteger mi información

#### Epic: Gestión de Transacciones
- **US-004**: Como usuario, quiero registrar ingresos para llevar un control de mis entradas de dinero
- **US-005**: Como usuario, quiero registrar gastos para controlar mis salidas de dinero
- **US-006**: Como usuario, quiero editar transacciones para corregir errores
- **US-007**: Como usuario, quiero eliminar transacciones para mantener mi historial limpio

#### Epic: Gestión de Categorías
- **US-008**: Como usuario, quiero ver categorías predefinidas para organizar mis transacciones
- **US-009**: Como usuario, quiero crear categorías personalizadas para adaptar la aplicación a mis necesidades
- **US-010**: Como usuario, quiero editar categorías personalizadas para mantenerlas actualizadas
- **US-011**: Como usuario, quiero eliminar categorías personalizadas que ya no uso

#### Epic: Reportes y Análisis
- **US-012**: Como usuario, quiero ver mi balance mensual para conocer mi situación financiera
- **US-013**: Como usuario, quiero ver gráficos de distribución de gastos por categoría
- **US-014**: Como usuario, quiero ver tendencias de balance mensual a lo largo del tiempo

#### Epic: Gestión de Datos
- **US-015**: Como usuario, quiero exportar mis datos en formato CSV para análisis externo
- **US-016**: Como usuario, quiero exportar mis datos en formato JSON para respaldo
- **US-017**: Como usuario, quiero importar datos desde un archivo JSON para restaurar información
- **US-018**: Como usuario, quiero limpiar todos mis datos para reiniciar la aplicación

### 1.2 Requerimientos No Funcionales

#### Rendimiento
- **NF-001**: La aplicación debe cargar en menos de 3 segundos en conexiones de 3G
- **NF-002**: Las operaciones CRUD deben completarse en menos de 1 segundo
- **NF-003**: Los gráficos deben renderizarse en menos de 2 segundos

#### Usabilidad
- **NF-004**: La interfaz debe ser intuitiva para usuarios sin experiencia técnica
- **NF-005**: La aplicación debe ser responsive y funcionar en dispositivos móviles
- **NF-006**: El tiempo de aprendizaje para un nuevo usuario debe ser menor a 10 minutos

#### Seguridad
- **NF-007**: Los datos del usuario deben persistir solo en su dispositivo local
- **NF-008**: No debe haber transmisión de datos sensibles a servidores externos
- **NF-009**: Las contraseñas deben tener validación de complejidad

#### Compatibilidad
- **NF-010**: La aplicación debe funcionar en Chrome 90+, Firefox 88+, Safari 14+
- **NF-011**: Debe ser compatible con dispositivos móviles iOS 12+ y Android 8+
- **NF-012**: Debe funcionar offline una vez cargada la aplicación

## 2. CRITERIOS DE ACEPTACIÓN Y RECHAZO

### 2.1 Criterios de Aceptación

#### Criterios Generales
- ✅ La funcionalidad cumple con el comportamiento esperado descrito en la historia de usuario
- ✅ No se producen errores críticos durante la ejecución
- ✅ La interfaz de usuario responde correctamente a las interacciones del usuario
- ✅ Los datos se persisten correctamente en LocalStorage
- ✅ La aplicación mantiene consistencia de datos entre sesiones

#### Criterios Específicos por Funcionalidad

**Autenticación**
- ✅ El formulario de registro valida todos los campos requeridos
- ✅ El login autentica correctamente con credenciales válidas
- ✅ El logout limpia la sesión del usuario
- ✅ Se muestran mensajes de error apropiados para credenciales inválidas

**Transacciones**
- ✅ Se pueden crear transacciones con todos los campos obligatorios
- ✅ Las transacciones se muestran ordenadas por fecha (más reciente primero)
- ✅ La edición de transacciones actualiza correctamente los datos
- ✅ La eliminación de transacciones requiere confirmación
- ✅ Las categorías se filtran según el tipo de transacción (ingreso/gasto)

**Categorías**
- ✅ Se muestran las categorías predefinidas al iniciar la aplicación
- ✅ Se pueden crear categorías personalizadas con nombre, tipo y color únicos
- ✅ No se pueden eliminar categorías predefinidas
- ✅ Las categorías personalizadas se pueden editar y eliminar

**Reportes**
- ✅ El balance mensual se calcula correctamente (ingresos - gastos)
- ✅ Los gráficos se renderizan sin errores
- ✅ Los datos de los gráficos reflejan las transacciones reales
- ✅ Las tendencias muestran al menos 12 meses de datos

**Exportación/Importación**
- ✅ La exportación CSV incluye todas las transacciones del usuario
- ✅ La exportación JSON incluye todos los datos (transacciones, categorías, usuario)
- ✅ La importación JSON restaura correctamente todos los datos
- ✅ Se valida el formato del archivo de importación

### 2.2 Criterios de Rechazo

#### Rechazo Automático
- ❌ La aplicación no inicia o muestra pantalla en blanco
- ❌ Se producen errores de JavaScript en consola
- ❌ Las operaciones CRUD no persisten datos en LocalStorage
- ❌ Los formularios no validan campos obligatorios
- ❌ Los gráficos no se renderizan o muestran datos incorrectos
- ❌ La aplicación no es responsive en dispositivos móviles

#### Rechazo por Calidad
- ❌ Tiempo de respuesta mayor a 3 segundos para operaciones básicas
- ❌ Interfaz confusa o no intuitiva
- ❌ Pérdida de datos entre sesiones
- ❌ Inconsistencias en la validación de formularios
- ❌ Errores de ortografía o gramática en la interfaz

## 3. HERRAMIENTAS DE PRUEBAS

### 3.1 Herramientas de Pruebas Automatizadas

#### Cypress (E2E y Component Testing)
- **Justificación**: Framework moderno para pruebas E2E con excelente soporte para React, TypeScript y Material-UI
- **Ventajas**: 
  - Sintaxis intuitiva similar a Jest
  - Debugging visual con time travel
  - Soporte nativo para TypeScript
  - Integración con CI/CD
  - Capturas de pantalla automáticas en fallos

#### Jest + Testing Library (Unit Testing)
- **Justificación**: Stack estándar para pruebas unitarias en React con excelente integración
- **Ventajas**:
  - Integración nativa con Create React App
  - Mocking robusto para servicios externos
  - Cobertura de código integrada
  - Testing Library promueve buenas prácticas de testing

### 3.2 Herramientas de Calidad de Código

#### ESLint
- **Justificación**: Linter estándar para JavaScript/TypeScript con reglas específicas para React
- **Configuración**: Extiende `react-app` y `react-app/jest`

#### Prettier
- **Justificación**: Formateador de código automático para mantener consistencia
- **Configuración**: Integrado con ESLint para evitar conflictos

### 3.3 Herramientas de CI/CD

#### Azure DevOps Pipelines
- **Justificación**: Integración nativa con el proyecto y soporte para Node.js
- **Funcionalidades**: Build, test y deploy automatizados

### 3.4 Herramientas de Monitoreo

#### Browser DevTools
- **Justificación**: Herramientas nativas del navegador para debugging
- **Uso**: Console, Network, Application (LocalStorage), Performance

## 4. CRONOGRAMA DE EJECUCIÓN DE PRUEBAS

### 4.1 Fase 1: Pruebas Unitarias (Semana 1)
- **Día 1-2**: Configuración del entorno de testing
- **Día 3-4**: Pruebas unitarias de servicios (StorageService)
- **Día 5**: Pruebas unitarias de utilidades y helpers

### 4.2 Fase 2: Pruebas de Componentes (Semana 2)
- **Día 1-2**: Pruebas de componentes de autenticación
- **Día 3-4**: Pruebas de componentes de transacciones
- **Día 5**: Pruebas de componentes de reportes y categorías

### 4.3 Fase 3: Pruebas E2E (Semana 3)
- **Día 1-2**: Pruebas E2E de flujos de autenticación
- **Día 3-4**: Pruebas E2E de gestión de transacciones
- **Día 5**: Pruebas E2E de reportes y exportación

### 4.4 Fase 4: Pruebas Manuales (Semana 4)
- **Día 1-2**: Pruebas de usabilidad y UX
- **Día 3-4**: Pruebas de compatibilidad cross-browser
- **Día 5**: Pruebas de rendimiento y stress testing

### 4.5 Fase 5: Pruebas de Integración (Semana 5)
- **Día 1-2**: Pruebas de integración entre módulos
- **Día 3-4**: Pruebas de persistencia de datos
- **Día 5**: Pruebas de exportación/importación

### 4.6 Fase 6: Pruebas de Aceptación (Semana 6)
- **Día 1-3**: Validación con stakeholders
- **Día 4-5**: Corrección de defectos críticos y re-testing

## 5. PLANTILLAS PARA CASOS DE PRUEBAS

### 5.1 Plantilla para Caso de Prueba Unitario

```markdown
## Caso de Prueba: [ID] - [Nombre Descriptivo]

**Prioridad**: [Alta/Media/Baja]
**Tipo**: Unitario
**Módulo**: [Nombre del módulo]
**Responsable**: [Nombre del tester]

### Descripción
[Descripción clara del caso de prueba]

### Precondiciones
- [Lista de condiciones que deben cumplirse antes de ejecutar la prueba]

### Pasos de Ejecución
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

### Datos de Entrada
- [Descripción de los datos de entrada]

### Resultado Esperado
[Descripción del resultado esperado]

### Resultado Actual
[Descripción del resultado obtenido]

### Estado
- [ ] Pendiente
- [ ] En Ejecución
- [ ] Exitoso
- [ ] Fallido
- [ ] Bloqueado

### Observaciones
[Notas adicionales, screenshots, logs de error]

### Defectos Relacionados
[Referencias a defectos encontrados]
```

### 5.2 Plantilla para Caso de Prueba E2E

```markdown
## Caso de Prueba E2E: [ID] - [Nombre Descriptivo]

**Prioridad**: [Alta/Media/Baja]
**Tipo**: End-to-End
**Escenario**: [Descripción del escenario de usuario]
**Responsable**: [Nombre del tester]

### Objetivo
[Objetivo específico de la prueba]

### Precondiciones
- [Lista de condiciones que deben cumplirse]

### Datos de Prueba
- **Usuario**: [Credenciales de prueba]
- **Datos**: [Datos específicos para la prueba]

### Pasos de Ejecución
1. [Acción del usuario]
2. [Acción del usuario]
3. [Acción del usuario]

### Validaciones
- [ ] [Validación 1]
- [ ] [Validación 2]
- [ ] [Validación 3]

### Resultado Esperado
[Descripción del resultado esperado]

### Resultado Actual
[Descripción del resultado obtenido]

### Estado
- [ ] Pendiente
- [ ] En Ejecución
- [ ] Exitoso
- [ ] Fallido
- [ ] Bloqueado

### Screenshots
- [Capturas de pantalla relevantes]

### Logs
[Logs de consola, errores, etc.]

### Defectos Relacionados
[Referencias a defectos encontrados]
```

### 5.3 Plantilla para Reporte de Defecto

```markdown
## Defecto: [ID] - [Título Descriptivo]

**Severidad**: [Crítica/Alta/Media/Baja]
**Prioridad**: [Alta/Media/Baja]
**Estado**: [Nuevo/En Análisis/Asignado/En Desarrollo/En Testing/Cerrado]
**Asignado a**: [Desarrollador responsable]

### Descripción
[Descripción clara del defecto]

### Pasos para Reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

### Comportamiento Esperado
[Descripción del comportamiento correcto]

### Comportamiento Actual
[Descripción del comportamiento defectuoso]

### Entorno
- **Navegador**: [Versión]
- **Sistema Operativo**: [Versión]
- **Dispositivo**: [Tipo de dispositivo]

### Evidencia
- [Screenshots, videos, logs]

### Impacto
[Descripción del impacto en el usuario o sistema]

### Solución Propuesta
[Descripción de la solución sugerida]

### Notas Adicionales
[Información adicional relevante]
```

## 6. EQUIPOS DE PRUEBAS Y RESPONSABILIDADES

### 6.1 Estructura del Equipo de Testing

#### Líder de QA
- **Responsabilidades**:
  - Coordinación del plan de pruebas
  - Asignación de recursos
  - Reportes de progreso
  - Comunicación con stakeholders
- **Perfil**: QA Senior con experiencia en React y metodologías ágiles

#### Testers Automatizados
- **Responsabilidades**:
  - Desarrollo de pruebas automatizadas con Cypress
  - Mantenimiento del framework de testing
  - Integración con CI/CD
  - Reportes de cobertura
- **Perfil**: Desarrolladores con experiencia en testing automatizado

#### Testers Manuales
- **Responsabilidades**:
  - Ejecución de pruebas manuales
  - Validación de UX/UI
  - Testing de compatibilidad cross-browser
  - Reportes de defectos
- **Perfil**: QA con experiencia en testing manual y usabilidad

#### Testers de Performance
- **Responsabilidades**:
  - Pruebas de rendimiento
  - Análisis de métricas
  - Optimización de performance
  - Stress testing
- **Perfil**: QA especializado en performance testing

### 6.2 Matriz de Responsabilidades

| Actividad | Líder QA | Tester Auto | Tester Manual | Tester Perf |
|-----------|-----------|--------------|---------------|-------------|
| Planificación | ✅ | 🔶 | 🔶 | 🔶 |
| Pruebas Unitarias | 🔶 | ✅ | 🔶 | ❌ |
| Pruebas Componentes | 🔶 | ✅ | 🔶 | ❌ |
| Pruebas E2E | 🔶 | ✅ | 🔶 | ❌ |
| Pruebas Manuales | 🔶 | 🔶 | ✅ | 🔶 |
| Pruebas Performance | 🔶 | 🔶 | 🔶 | ✅ |
| Reportes | ✅ | 🔶 | 🔶 | 🔶 |

**Leyenda**: ✅ Responsable principal, 🔶 Participación, ❌ No participa

## 7. PLAN DE AUTOMATIZACIÓN DE PRUEBAS

### 7.1 Estrategia de Automatización

#### Pirámide de Testing
```
        /\
       /  \     Pruebas E2E (10%)
      /____\    Pruebas de Integración (20%)
     /      \   Pruebas Unitarias (70%)
    /________\
```

#### Criterios de Automatización
- **Automatizar Siempre**:
  - Pruebas de regresión
  - Flujos críticos de usuario
  - Validaciones de formularios
  - Operaciones CRUD básicas

- **Automatizar Condicionalmente**:
  - Pruebas de UI complejas
  - Validaciones de gráficos
  - Operaciones de exportación/importación

- **No Automatizar**:
  - Pruebas de usabilidad
  - Validaciones visuales subjetivas
  - Pruebas de performance manuales

### 7.2 Herramientas y Configuración

#### Cypress Configuration
```typescript
// cypress.config.ts
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});
```

#### Custom Commands
```typescript
// cypress/support/commands.ts
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('createTestUser', () => {
  cy.visit('/');
  cy.contains('Regístrate aquí').click();
  cy.get('input[name="name"]').type('Test User');
  cy.get('input[name="email"]').type('test@example.com');
  cy.get('input[name="password"]').type('password123');
  cy.get('input[name="confirmPassword"]').type('password123');
  cy.get('button[type="submit"]').click();
});
```

### 7.3 Estrategia de Datos de Prueba

#### Datos Estáticos
- Usuarios de prueba predefinidos
- Categorías base
- Transacciones de ejemplo

#### Datos Dinámicos
- Generación de datos aleatorios para testing
- Limpieza automática de datos de prueba
- Isolación de datos entre tests

### 7.4 Integración con CI/CD

#### Pipeline de Testing
```yaml
# azure-pipelines.yml
- stage: Test
  displayName: 'Testing Stage'
  jobs:
  - job: UnitTests
    steps:
    - script: npm test -- --coverage --watchAll=false
    
  - job: E2ETests
    steps:
    - script: npm run build
    - script: npm run start:ci &
    - script: npx cypress run
```

#### Criterios de Aprobación
- Todas las pruebas unitarias deben pasar
- Cobertura de código > 80%
- Todas las pruebas E2E críticas deben pasar
- Sin defectos críticos o altos

## 8. EJECUCIÓN Y DEMOSTRACIÓN

### 8.1 Evidencia de Automatización

#### Screenshots de Pruebas Exitosas
- Capturas de pantalla de flujos completos
- Validación de elementos visuales
- Confirmación de estados de la aplicación

#### Videos de Ejecución
- Grabaciones de pruebas E2E completas
- Demostración de flujos críticos
- Evidencia de manejo de errores

#### Reportes de Cobertura
- Métricas de cobertura de código
- Análisis de ramas cubiertas
- Identificación de código no testeado

### 8.2 Métricas de Testing

#### Métricas de Calidad
- **Defectos por Sprint**: Objetivo < 5 defectos críticos
- **Tiempo de Resolución**: Objetivo < 48 horas para defectos críticos
- **Cobertura de Código**: Objetivo > 80%

#### Métricas de Eficiencia
- **Tiempo de Ejecución**: Objetivo < 30 minutos para suite completa
- **Tasa de Falsos Positivos**: Objetivo < 5%
- **Tiempo de Mantenimiento**: Objetivo < 20% del tiempo total de testing

### 8.3 Dashboard de Testing

#### KPIs Principales
- Estado de las pruebas por módulo
- Tendencias de defectos
- Cobertura de código por componente
- Tiempo de ejecución de pruebas

#### Alertas Automáticas
- Fallos en pruebas críticas
- Degradación de performance
- Aumento en tasa de defectos
- Cobertura por debajo del objetivo

### 8.4 Documentación de Evidencia

#### Repositorio de Evidencia
- Screenshots organizados por fecha y funcionalidad
- Videos de ejecución con anotaciones
- Logs de consola para análisis de errores
- Reportes de performance y métricas

#### Proceso de Validación
- Revisión semanal de evidencia
- Validación con stakeholders
- Archivo de evidencia histórica
- Trazabilidad con casos de prueba

---

## APÉNDICE A: CHECKLIST DE PREPARACIÓN

### Entorno de Testing
- [ ] Node.js y npm instalados
- [ ] Dependencias del proyecto instaladas
- [ ] Cypress configurado y funcionando
- [ ] Base de datos de prueba configurada
- [ ] Usuarios de prueba creados

### Herramientas de Testing
- [ ] Cypress abierto y funcionando
- [ ] DevTools del navegador disponibles
- [ ] Herramientas de captura de pantalla configuradas
- [ ] Software de grabación de video instalado

### Documentación
- [ ] Casos de prueba preparados
- [ ] Plantillas de reporte disponibles
- [ ] Matriz de responsabilidades definida
- [ ] Cronograma de testing aprobado

---

## APÉNDICE B: GLOSARIO DE TÉRMINOS

- **E2E**: End-to-End testing
- **CRUD**: Create, Read, Update, Delete
- **CI/CD**: Continuous Integration/Continuous Deployment
- **QA**: Quality Assurance
- **UX**: User Experience
- **UI**: User Interface
- **LocalStorage**: Almacenamiento local del navegador
- **Responsive**: Diseño adaptable a diferentes dispositivos
- **Cross-browser**: Compatibilidad entre navegadores
- **Performance**: Rendimiento y velocidad de la aplicación

