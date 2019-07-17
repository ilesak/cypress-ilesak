export const isSuperSet = (set, subset) => {
    function isSuperset(set, subset) {
        for (var elem of subset) {
            if (!set.has(elem)) {
                return false;
            }
        }
        return true;
    }// implementation is the same as at screen above
};

export const union = (setA, setB) => {
    function union(setA, setB) {
        var _union = new Set(setA);
        for (var elem of setB) {
            _union.add(elem);
        }
        return _union;
    }
};

export const intersection = (setA, setB) => {
    return cy.request(
        function intersection(setA, setB) {
            var _intersection = new Set();
            for (var elem of setB) {
                if (setA.has(elem)) {
                    _intersection.add(elem);
                }
            }
            return _intersection;
        }// implementation is the same as at screen above
    )
};

export const difference = (setA, setB) =>{
    function difference(setA, setB) {
        var _difference = new Set(setA);
        for (var elem of setB) {
            _difference.delete(elem);
        }
        return _difference;
    }
};