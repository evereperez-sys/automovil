# Aplicación Personaliza tu Automovil (TypeScript)

##  Descripción

Esta aplicación es un sistema de **personalizacion de un automovil** desarrollado en **TypeScript**, diseñado siguiendo principios de diseño orientados a reducir el acoplamiento entre objetos y mejorar la mantenibilidad del sistema.

Se evita que se tengan multiples constructores o un constructor con muchos parametros segun la personalizacion del cliente.

Este enfoque está inspirado en el **Patrón de Diseño Builder**.

---

##  Problema que resuelve

   
  Personalizacion: Permite que los clientes puedan escojer las diferentes opciones disponibles a su preferencia

  Nuevas opciones: Permiete a la empresa añadir rapidamente mas opciones para sus clientes.


---

##  Solución Implementada

Se introduce una **Sala de Chat (`MediatorChatGrupal`)** como mediador central que:

- Recibe mensajes de los usuarios.
- Distribuye los mensajes a los destinatarios correspondientes.
- Gestiona el registro y eliminación de usuarios.

Los usuarios solo se comunican con la sala de chat, **no entre sí directamente**.

---

##  Beneficios de esta arquitectura

1. **Facilita el mantenimiento**  
   - Se puede agregar o eliminar opciones para el automovil sin modificar otros componentes.

2. **Mejor organización del código**  
   - Toda la lógica de comunicación está centralizada en el mediador (`MediatorChatGrupal`).

3. **Reduce la complejidad del sistema**  
   - Evita relaciones punto a punto entre usuarios.

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

- `Usuario` → es el colega concreto.
- `Emisor` → es la clase base de los participantes.
- `IMediador` → define el contrato del mediador.
- `MediadorChatGrupal` → coordina la comunicación.

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

    class IAutomovilBuilder {
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

    IAutomovilBuilder <|.. AutomovilBuilder : implements
    AutomovilBuilder o-- Automovil : builds
