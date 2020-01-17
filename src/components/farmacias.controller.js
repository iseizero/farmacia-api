import axios from 'axios';


exports.obtenerComunas = (req, res) => {
    let {
        id_region
    } = req.params;
    
    var bodyFormData = new FormData();
    
    bodyFormData.set('reg_id', id_region);

    axios({
        method:'post',
        url:'',
        data: bodyFormData,
        headers:{'Content-Type': 'multipart/form-data'}
    }).then((data) => console.log(data))
    .catch((_err)=> res.status(500).send({
        message: _err.message
    }));
}

exports.obtenerFarmacias = (req, res) => {

}

catchError = (_err) => {
    return res.status(500).send({
        message: _err.message
    });
};