export const isSuperset = (setMixed, setDollar) => {
        for (var elem of setDollar) {
            if (!setMixed.has(elem)) {
                return false;
            }
        }
        return true;
}

export const union = (setPeso, setFranc) => {
        var _union = new Set(setPeso);
        for (var elem of setFranc) {
            _union.add(elem);
        }
        return _union;
}

export const intersection = (setMixed, setPound) => {
            var _intersection = new Set();
            for (var elem of setPound) {
                if (setMixed.has(elem)) {
                    _intersection.add(elem);
                }
            }
            return _intersection;
}

export const difference = (setMixed, setDollar) =>{
        var _difference = new Set(setMixed);
        for (var elem of setDollar) {
            _difference.delete(elem);
        }
        return _difference;
}