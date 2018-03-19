
function saludar(name, lastName) {
    console.log(`Hola ${name} ${lastName}`)
}

saludar('Cristian', 'Moreno')

// letra, _, $, camelCase

function sumarDosNumeros(val1, val2, fn) {
    fn()
    return val1 + val2
}

const result = sumarDosNumeros(1, 2, function() {
    saludar('Cristian', 'Moreno', function() {

    })
})
console.log(result)

function viajarPorElMu() {
    console.log('Buen viaje!!!')
}

const array = []
const user = {
    name: 'Cristian',
    age: 28,
    size: 'L',
    hobbies: ['Comer', 'Saltar', 'Foto'],
    viajar: function () {
        console.log('Buen viaje!!!')
        setTimeout(() => {
            console.log('Volvi!!!')
        }, 3000);
    }
}

console.log(user.hobbies)

user.name = 'Camilo'
user.lastName = 'Moreno'
user.hobbies.concat(user.hobbies, 'Bailar')

delete user.size

user.viajar()

console.log(user)