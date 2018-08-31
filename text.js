function transform(TEXT) {
    let result = [];
    let textSplit = TEXT.substring(27, (TEXT.length-1)).replace(/\s/g, " ").split(/\°/g);
    textSplit.pop();
    
    textSplit.forEach(piece => {
        piece = piece.split(/\s\s+/g);
        piece.pop();
        result.push({
            'match' : piece[piece.length-2],
            'league' : piece[piece.length-1]
        });
    });
    return result;
}

module.exports.transform = transform;