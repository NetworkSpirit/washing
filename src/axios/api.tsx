import axios from "axios";
const token = `ke3oljr3rfoewkferkwf0349jti34gjfdkv9ej4io3m43o`;
export const getItem = async (position: number, sort: string, type: string)=> {
    const url = `http://46.19.68.128:3030/products/search`;
    return await axios.get(url, {
        params: {
            limit: position + 12,
            offset: position,
            sort: sort,
            typeMoysklad: type,
            requestType: "moysklad",
        },
        headers: {
            token: token,
        }
    });
}
export const getOneItem = async (nameProduct: string, type: string) => {
    const url = `http://46.19.68.128:3030/products/search`;
    const token = `ke3oljr3rfoewkferkwf0349jti34gjfdkv9ej4io3m43o`;
    return await axios.get(url, {
        params: {
            limit: 1,
            offset: 0,
            name: nameProduct,
            typeMoysklad: type,
            requestType: "moysklad",
        },
        headers: {
            token: token,
        }
    });
}
export const getLabel = async () => {
    const url = 'http://46.19.68.128:3030/dictionaries/labels?page=1';
    return await axios.get(url, {
        headers: {
            token: token,
        }
    })
}

export const getVinylType = async () => {
    const url = 'http://46.19.68.128:3030/dictionaries/formats';
    return await axios.get(url);
}
export const getGenresType = async () => {
    const url = 'http://46.19.68.128:3030/dictionaries/styles';
    return await axios.get(url);
}