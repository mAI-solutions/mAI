# Azure Devops

## Features

### Azure Repos
Hasta ahora, hemos visto el potencial de Azure DevOps como herramienta de planificación y seguimiento de tareas. Llevar acabo estas tareas requiere que múltiples miembros del equipo colaboren en el desarrollo de código, lo cuál puede ser un reto si no se cuenta con una herramienta que facilite la colaboración.

A lo largo del curso, hemos explorado distintos sistemas de control de versiones, los cuáles permiten hacer seguimiento a los cambios que sufre un repositorio a lo largo del tiempo. Esto, de por sí, ya es bastante útil para mantener orden en el desarrollo. Sin embargo, aún es necesario que nuestro repositorio esté alojado en algun lugar accesible para todos los miembros del equipo.

Repos es un servicio de Azure DevOps que, en pocas palabras, permite alojar repositorios en la nube y gestionar los cambios que se realizan en estos.

Cada equipo de trabajo tiene distintas opiniones sobre cómo gestionar los cambios en un repositorio.

Equipos pequeños pueden preferir un flujo de trabajo centralizado, donde todos los cambios se realizan en una sola rama. Sin embargo, a medida que el equipo crece, la resolución de conflictos puede volverse un obstáculo significativo. 

<!-- Hay quienes, incluso, prefieren un flujo de trabajo basado en forks, donde cada desarrollador trabaja en su propio fork del repositorio y, una vez completada la tarea, se envía una pull request para integrar los cambios en el repositorio principal. -->

Repos ofrece todas las herramientas necesarias para que cada equipo lleve a cabo su flujo de trabajo ideal, sin tener que preocuparse por acciones repetitivas que no aportan valor al desarrollo. Recordemos que la filosofía de DevOps se centra en automatizar tantos procesos como sea posible. En el caso de Repos, esto se traduce en la posibilidad de:

- **Enlazar nuevas ramas a work items**: Como se mencionó, es común que cada nueva feature o bugfix se realice en una rama distinta. Al enlazar estas ramas a work items, es posible monitorizar el progreso de las tareas sin tener que navegar por el repositorio.

- **Conectarse a través de cualquier entorno**: Repos es compatible con Git, lo que hace posible interactuar con el repositorio desde cualquier entorno de desarrollo que soporte Git, sin necesidad de configuraciones adicionales.

- **Proteger ramas críticas**: Para evitar cambios no deseados en la rama principal, es posible establecer políticas que impidan la ejecución de pull request que no cumplan con ciertos criterios, entre ellos:
  - Ausencia de conflictos.
  - Pruabas unitarias exitosas.
  - Resolución de todos los comentarios.
  - Aprobación de un número mínimo de revisores.
  - Aprobación de revisores específicos.
