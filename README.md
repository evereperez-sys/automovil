# Aplicación Personaliza tu Automovil (TypeScript)

##  Descripción

Esta aplicación es un sistema de **personalizacion de un automovil** desarrollado en **TypeScript**, diseñado siguiendo principios de diseño orientados a reducir el acoplamiento entre objetos y mejorar la mantenibilidad del sistema.

Se evita que se tengan multiples constructores o un constructor con muchos parametros segun la personalizacion del cliente.

Este enfoque está inspirado en el **Patrón  de Diseño creacional Builder**.

---

##  Problema que resuelve

   
  Personalizacion: Permite que los clientes puedan escojer las diferentes opciones disponibles a su preferencia

  Nuevas opciones: Permiete a la empresa añadir o quitar rapidamente las opciones para sus clientes.


---


##  Beneficios de esta arquitectura

1. **Facilita el mantenimiento**  
   - Se puede agregar o eliminar opciones para el automovil sin modificar otros componentes.
2. **La logica de Construccion**
    - La lógica de qué piezas necesita un automovil está en el Builder




---

## Cómo ejecutar

```bash
npm  install
npm  run build
npm start

```
---

##  Arquitectura y Diagrama de Clases

El sistema sigue el **Patrón Builder**, donde:

- `Automovil` → es el automovil pedido.
- `AutomovilBuilder` → es la logica de partes del automovil.

```mermaid
classDiagram
    class Automovil {
        +motor: string
        +color: string
        +llantas: string
        +sistemaSonido: string
        +interiores: string
        +techoSolar: boolean
        +gps: boolean
        +mostrarEspecificaciones() void
    }

    class IAutomovil {
        <<interface>>
        +setMotor(tipo: string) this
        +setColor(color: string) this
        +setLlantas(tipo: string) this
        +setSistemaSonido(marca: string) this
        +setInteriores(material: string) this
        +conTechoSolar(tiene: boolean) this
        +conGPS(tiene: boolean) this
        +build() Automovil
    }

    class AutomovilBuilder {
        -auto: Automovil
        +setMotor(tipo: string) this
        +setColor(color: string) this
        +setLlantas(tipo: string) this
        +setSistemaSonido(marca: string) this
        +setInteriores(material: string) this
        +conTechoSolar(tiene: boolean) this
        +conGPS(tiene: boolean) this
        +build() Automovil
        -reset() void
    }

    IAutomovil <|.. AutomovilBuilder : implements
    AutomovilBuilder o-- Automovil : builds
 
