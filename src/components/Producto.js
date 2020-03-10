import React from 'react';



const Producto = ({producto, carrito, agregarProducto, productos}) => {
    
    
        const {nombre, precio, id} = producto

        const seleccionaProducto = id => {

                const producto = productos.filter(producto => producto.id === id)[0];
                agregarProducto([ //agregar producto es una operacion que va a modificar el state

                        ...carrito, //Requerimos una copia de los productos que estan en el carrito, asi no haya nada.
                        
                        producto // y como segundo parametro le pasamos el producto que estamos agregando.

                ]);        

        }
    
    return (  

            <div> 

                    <h2> {nombre} </h2>
                    <h1> ${precio} </h1>
                    <button
                        type="button"
                        onClick={ () => seleccionaProducto(id) }
                        
                        >Comprar
                    </button>


            </div>

    );
}
 
export default Producto;