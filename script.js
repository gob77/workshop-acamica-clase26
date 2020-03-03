document.addEventListener("DOMContentLoaded", () => {
    const nuevo = document.getElementById("new");
    const productoBTN = document.getElementById("productoBTN");

    const listaUsers = [];
    const listaProds = [];

    nuevo.addEventListener("click", event => {
        class NuevoUsuario {
            constructor(nombre, apellido, email, telefono) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.email = email;
                this.telefono = telefono;
                this.guardar = function() {
                    const tHead = document.getElementById("thead");
                    listaUsers.push(this);
                    tHead.insertAdjacentHTML(
                        "afterend",
                        `
                    <tr>
                        <td>${this.nombre} ${this.apellido}</td>
                        <td>${this.email}</td>
                        <td>${this.telefono}</td>
                    </tr>
                    `
                    );
                };
            }
        }

        let nombre = prompt("Ingrese el nombre de usuario");
        let apellido = prompt("ingrese el apellido del usuario");
        let email = prompt("Ingrese su Email");
        let telefono = prompt("ingrese su telefono");

        let nuevoUsuario = new NuevoUsuario(nombre, apellido, email, telefono);

        nuevoUsuario.guardar();
    });

    productoBTN.addEventListener("click", () => {
        console.log("clicked");
        class Producto {
            constructor(producto, precio) {
                this.producto = producto;
                this.precio = precio;
                this.guardar = function() {
                    listaProds.push(this);
                };
            }
        }

        let producto = prompt("Nombre del producto?");
        let precio = prompt("Precio del producto?");

        let nuevoProducto = new Producto(producto, precio);

        nuevoProducto.guardar();
        console.log(listaProds);
    });
});
