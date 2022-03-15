<template>
<AdminView/>
  <div class="container">
            <form v-on:submit.prevent = 'agregarProducto'>
                <div class="mb-3">
                    <label class="form-label" for="prod_nombre">
                        Nombre Producto
                    </label>
                    <input
                        id="prod_nombre"
                        name="prod_nombre"
                        type="text"
                        class="form-control"
                        v-model="prod_nombre"
                    />
                </div>

                <div className="mb-3">
                    <label class="form-label" for="prod_description">
                        Descripción Producto
                    </label>
                    <input
                        id="prod_description"
                        name="prod_description"
                        v-model="prod_description"
                        type="text"
                        class="form-control"
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label" for="prod_precio">
                        Precio Producto
                    </label>
                    <input
                        id="prod_precio"
                        name="prod_precio"
                        v-model="prod_precio"
                        type="number"
                        class="form-control"
                    />
                </div>

                <div class="mb-3">
                    <label class="form-label" for="prod_stock">
                        Stock Producto
                    </label>
                    <input
                        id="prod_stock"
                        name="prod_stock"
                        v-model="prod_stock"
                        type="number"
                        class="form-control"
                    />
                </div>

                <div class="form-check mb-3">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="prod_oferta"
                    />
                    <label class="form-check-label">
                        Ofertar Producto
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label">Imagen</label>
                    <input 
                        type="file"
                        class="form-control"
                    />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-success btn-sm mb-3" v-on:click="addData" type="submit">
                        Guardar
                    </button>
                    <router-link to="/listar" class="btn btn-warning btn-sm" type="button">
                        Eliminar
                    </router-link>
                </div>
            </form>
  </div>
</template>

<script>
import AdminView  from '@/views/AdminView.vue'
import { api } from '@/api/api'

export default {
    name: 'CrearProducto',
    components: {
        AdminView
    },
    data() {
        return {
            prod_nombre:null,
            prod_description:null,
            prod_precio:null,
            prod_stock:null,
            prod_oferta: false
        }
    },
    methods: {
        addData(e) {
            e.preventDefault()
            let {prod_nombre, prod_description, prod_precio, prod_stock, prod_oferta} = this
            let data = {prod_nombre, prod_description, prod_precio, prod_stock, prod_oferta} 
            if(data) {
                this.axios.post(api, data).then(res=> {
                    if(res.data){
                        this.$router.push('/')
                    }
                })
            }
        }
    }
    /*methods: {
        agregarProducto() {

        var datosEnviar = {
            prod_nombre:this.producto.prod_nombre,
            prod_description:this.producto.prod_description,
            prod_precio:this.producto.prod_precio,
            prod_stock:this.producto.prod_stock,
            prod_oferta:this.producto.prod_oferta
        }
        console.log(datosEnviar)

        fetch("https://6218de691a1ba20cbaae1312.mockapi.io/Productos/?insertar=1", {
            method:'POST',
            body:JSON.stringify(datosEnviar)
        })

        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
            console.log(datosRespuesta)
            window.location.href = 'listar'
        
        }))

        }
    }*/
}
</script>

<style>

</style>