class SearchResultsPage{
    getProductByDocId(productName){
        return cy.get(`a[href="/product/${productName}"]`);
    }

    getClickableElement(){
        return cy.get(".image-wrapper-three")
    }

    performRedirect(){
        this.getClickableElement().click();

    }
}

export default new SearchResultsPage()