let transform = async () => {
    const TEXT = `A L E R T A S A C T | V A s











    Parnu JK Vaprus 0-3 Paide
    ESTONIA: MEISTRILllGA
    28-08-201 8 +0.5 goles 97°/
    o
    
    New York Red Bulls 1-0 DC United
    ESTADOS UNIDOS: MLS
    27-08-201 8 +0.5 goles 98°/
    o
    
    Sporting Cristal 2-1 Sport Rosario
    PERÚ: TORNEO DESCENTRALIZADO - APERTURA
    2b-08-201 8 +0.5 goles 98°/
    o
    
    Aalesund 0-1 Nest-Sotra
    NORUEGA: OBOS-LIGAEN
    2b-08-201 8 +0.5 goles 98°/
    o
    
    Molde 2-3 Ranheim
    NORUEGA: ELITESERIEN
    2b-08-201 8 +0.5 goles 98°/
    o`;
    
    var tmp = '';
    var arr = [];
    tmp = TEXT.substring(27, (TEXT.length-1));
    tmp = tmp.replace(/\s/g, " ").split(/\°/g);
    tmp.pop();
    tmp.forEach(element => {
        var e = element.split(/\s\s+/g);
        e.pop();
        var o = {
            'match' : e[e.length-2],
            'league' : e[e.length-1]
        }
        arr.push(o);
    });
    return arr;
}

transform().then((value) => {
    console.log(value); // Success!
});