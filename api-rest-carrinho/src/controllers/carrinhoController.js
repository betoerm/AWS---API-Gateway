exports.get = (req, res, next) => {
    res.status(200).send('Lista de carrinhos de compra retornada com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Carrinho de compra retornado com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('Carrinho de compra incluído com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Carrinho de compra alterado com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Carrinho de compra removido com sucesso! ${id}`);
};