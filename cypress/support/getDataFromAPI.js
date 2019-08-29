export const getProductDataFromAPI = () => {
    return cy.request({
        method: 'get',
        url: 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1566902029',
    })
        .then(response => {
            return response.body
        })
}

