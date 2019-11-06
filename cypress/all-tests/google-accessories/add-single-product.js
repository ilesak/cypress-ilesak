import Chance from 'chance'
import SearchResultsPage from "../../page-objects/google-accessories/searchResultsPage"
import AccessoriesPage from "../../page-objects/google-accessories/accessoriesPage"
import AddProductToCart from "../../page-objects/google-accessories/addProductToCart"


describe('UI tests', () => {
    before (() => {
        cy.fixture('google-accessories/product').then(data => {
            cy.wrap(data).as('productData')
        })
    })
    it('Positive: Create user', () => {
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open()

            cy.log("WHEN User performs search product by name")
            AccessoriesPage.performSearch(productData.name)

            cy.log("THEN User get search result")
            SearchResultsPage.getProductByDocId(productData.url)
                .should ('exist')
            SearchResultsPage.performRedirect()

            AddProductToCart.performAddingToCart()

        })
    })
})