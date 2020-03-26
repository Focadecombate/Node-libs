const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

//var url = typeof (data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;

class Arquivos {
    constructor(caminho,file,type) {
        this._caminho = typeof(caminho) == 'string' && caminho.length > 0 ? caminho : '/../.data/';
        __dirname = path.resolve();
        this._dir = `${__dirname}${this._caminho}`;
        this._file = file;
        this._type = type.toLowerCase();
        this._local = `${this._dir}/${this._file}.${this._type}`;
        
    }
    get dir() {
        return this._dir;

    }
    createFile(data) {
        fsPromises.open(this._local, 'wx')
            .then((fileDescriptor , err) => {
                if (!err && fileDescriptor) {
                    //Convert data to String
                    if(this._type == 'json'){
                        var stringData = JSON.stringify(data);
                    }
                    else{
                        var stringData = data;
                    }

                    //Write to file and close it
                    fsPromises.writeFile(fileDescriptor, stringData)
                        .then(() => {
                            return new Promise((res,rej)=>{
                                fs.close(fileDescriptor, function (err) {
                                    if (!err) {
                                        res(false);
                                    } else {
                                        rej('Error closing new file');
                                    }
                                });
                            });
                        })
                        .catch(() => {
                            if(err){console.log('Error writing to new file')}
                        });
                }
            })
            .catch((err) => {if(err){(console.log('Could not create a new file , it may already exist'))}});
    }
    readFile(){}
}

let arquivo = new Arquivos('','teste','html');
arquivo.createFile('teste');