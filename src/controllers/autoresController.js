import autores from "../models/Autor.js";


class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if(!err) {
                res.status(200).json(autores)
                return
            }
            res.status(500).send({message:err.message + ' falha ao listar autores'})
        })
    }

    static listarAutorPorId = (req, res) => {
        const {id} = req.params

        autores.findById(id, (err, autor) => {
            if(!err) {
                res.status(200).send({message: 'Autor cadastrado com sucesso'})
                return
            }
            res.status(500).send({message: err.message + ' falha ao listar autor individual'})
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save(err => {
            if(!err) {
                res.status(201).send(autor.toJSON())
                return
            }
            res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
        })
    }

    static atualizarAutor = (req, res) => {
        const {id} = req.params

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(201).send('Livro atualizado com sucesso')
                return
            }
            res.status(500).send({message: err.message = 'falha ao atualizar autor'})
        })
    }

    static excluirAutor = (req, res) => {
        const {id} = req.params

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autore excluido com sucesso'})
                return
            }
            res.status(500).send({message: err.message + ' falha ao excluir autor'})
        })
    }
}

export default AutoresController