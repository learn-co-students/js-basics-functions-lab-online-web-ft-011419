function distanceFromHqInBlocks(block){
    let hq = 42

    return Math.abs(block - hq)

}

function distanceFromHqInFeet(block){

    return distanceFromHqInBlocks(block) * 264

}

function distanceTravelledInFeet(start, end){

    let distance = Math.abs(end - start)

    return distance * 264

}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)

    let price = 0

    switch(true) {
        case distance > 2500:
            return "cannot travel that far"
        case distance <= 2500 && distance > 2000:
            price = 25
            break
        case distance <= 2000 && distance > 400:
            const newDistance = distance - 400
            price += newDistance * .02
    }

    return price

}