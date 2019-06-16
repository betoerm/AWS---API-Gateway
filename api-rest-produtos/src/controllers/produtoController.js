exports.get = (req, res, next) => {
    res.status(200).send('Lista de produtos retornada com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Produto retornado com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('Produto incluído com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Produto alterado com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Produto removido com sucesso! ${id}`);
};