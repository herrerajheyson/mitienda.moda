import axios from 'axios'

class Axios
{
  /**
  * este metodo se encarga de hacer la peticion a la api
  * para obtener todos los maestros registrados en el sistema
  * @return {Promise}
  */
  static async getMasters(route) {
      return await axios.get(route)
  }

  /**
  * este metodo se encarga de hacer la peticion a la api
  * para obtener datos del backend con parametros por http
  * @param  {JSON}
  * @return {Promise}
  */
   static async postMaster(data) {
    return await axios.post(data.route, data)
  }

  /**
  * este metodo se encarga de hacer la peticion a la api
  * para almacenar un modulo nuevo en la base de datos
  * @param  {JSON}
  * @return {Promise}
  */
  static async saveMaster(data) {
      return await axios.post(data.route, data)
  }

  /**
  * este metodo se encarga de hacer la peticion a la api
  * para actualizar un modulo existente en la base de datos
  * @param  {JSON}
  * @return {Promise}
  */
  static async updateMaster(data) {
      return await axios.put(data.route + '/' + data.id, data)
  }

  /**
  * este metodo se encarga de hacer la peticion a la api
  * para eliminar un modulo existente en la base de datos
  * @param  {JSON}
  * @return {Promise}
  */
  static async destroyMaster(data) {
      return await axios.delete(data.route + '/' + data.id)
  }
}

export {Axios}
