var usermodel = require('../Model/usermodel')

exports.insert = async(req,res) => {

   try{
    if (!req.body.status) {
        req.body.status = 'Pending task';
    }
    var data = await usermodel.create(req.body);
    res.status(200).json({
        status:'success',data
    })
   }
   catch(error){
    console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
   }
    
}

exports.select_data = async(req,res) => {
    var data = await usermodel.find();
    res.status(200).json({
        status:'success',data
    })
}


exports.delete_data = async(req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);
    res.status(200).json({
        status:'Delate success'
    })
}

exports.update_data = async(req,res) => {
    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:'Update success'
    })
}


exports.running = async(req,res) => {
    try {
        const data = await usermodel.find({ status: /Running(?: task)?/i });
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

exports.pending = async(req,res) => {
    try {
        const data = await usermodel.find({ status: /Pending(?: task)?/i });
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

exports.decline = async(req,res) => {
    try {
        const data = await usermodel.find({ status: /decline(?: task)?/i });
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}

exports.completed = async(req,res) => {
    try {
        // var data = await usermodel.find({ status: { $regex: /completed(?: task)?/i } });
        const data = await usermodel.find({ status: /completed(?: task)?/i });
        res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
}