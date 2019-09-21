import Producto from "./producto.js";

export default class Inventario{

    constructor()
    {
        arrayInventario = new Array(20);
        this._numProductos = 0;
    }

    addProducto(producto)
    {
        if(numProductos < 20)
        {
            arrayInventario[numProductos++] = producto;
        }
    }

    buscarProducto(code)
    {
        let codeP = arrayInventario[0];
        for(var i = 0; i < numProductos; i++)
            if(code == arrayInventario[i].code)
            {
                codeP = arrayInventario[i];
                break;
            }
            else{
                codeP = null;
            }
            return codeP;
    }

    eliminar(nombre)
    {
        for(var i = 0; i < numProductos; i++)
            if(nombre == arrayInventario[i].nombre)
            {
                for (int j = i + 1; j < numProductos; j++)
                    {
                        inventario[i - 1] = inventario[i];
                    }
                    inventario[numProductos--] = null;

                    break;
            }
    }


}