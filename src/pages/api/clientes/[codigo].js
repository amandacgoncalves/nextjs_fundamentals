export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Amanda ${codigo}`,
        email: `example${codigo}@example.com`
    })
}