export interface Product {
    id: number;
    name: 'string';
    price: {
        old: number;
        best: number;
    };
    stock: number;
    qtd: number
}