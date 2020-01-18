/**
 * Dao Farmacias
 * Date: 16-01-2020
 * Author: Mirko Gonzalez Vasquez
 * Version: v1.0.0
 */

const axios = require('axios')
const convert = require('html-to-json-data')
const {
    text
} = require('html-to-json-data/definitions')
let FormData = require('form-data')

class Farmacia {

    /**
     * @param {comuna} comuna Comuna de farmacias
     * @param {nombreLocal} nombreLocal Nombre de la farmacia
     */
    constructor(comuna = null, nombreLocal = null) {
        this.comuna = comuna
        this.nombreLocal = nombreLocal
    }

    static async parseContent(data) {
        const json = convert(data,{
            comunas: text('option')
        })
        return json
    }

    static async obtenerComunas(){
        try {
            let bodyFormData = new FormData();
            bodyFormData.append('reg_id','7')
            let result = await axios({
                method: 'post',
                url: 'https://midastest.minsal.cl/farmacias/maps/index.php/utilidades/maps_obtener_comunas_por_regiones',
                data: bodyFormData,
                headers: {'Content-Type': bodyFormData.getHeaders()['content-type'] }
                })
            return Farmacia.parseContent(result.data)
        }catch(error) {
            throw new Error(`Error al obtener comunas: ${error}`);
        }
    }


    async obtenerFarmacia() {
        try {
            const url = 'https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7'
            const result = await axios.get(url)
            let content = result.data

            if (this.comuna != null && this.nombreLocal != null) {
                content = content.filter(el => (el.comuna_nombre === this.comuna && el.local_nombre === this.nombreLocal))
            }

            if (this.comuna != null) {
                content = content.filter(el => el.comuna_nombre === this.comuna)
            }

            if (this.nombreLocal != null) {
                content = content.filter(el => el.local_nombre === this.nombreLocal)
            }

            return content
        } catch (er) {
            throw new Error(`Error al obtener farmacias: ${er}`)
        }
    }
}

const listarFarmacias = async (comuna = null, nombreLocal = null) => {
    const instance = new Farmacia(comuna, nombreLocal)
    return instance.obtenerFarmacia()
}

module.exports = {
    Farmacia,
    listarFarmacias
}
