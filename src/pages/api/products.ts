// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

    const products = [
        { id: 101, name: 'Produto 01', price: { old: 101, best: 90}, stock: 10 },
        { id: 102, name: 'Produto 02', price: { old: 102, best: 90}, stock: 100 },
        { id: 103, name: 'Produto 03', price: { old: 103, best: 90}, stock: 1000 },
        { id: 104, name: 'Produto 04', price: { old: 104, best: 90}, stock: 1 }
    ];

    res.status(200).json(products);

}
