// array of objects
let data = [

    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    },
]
// to get rate
const calculateRate = (data) => {
    const {
        principal,
        time,
    } = data

    if (principal >= 2500 && time > 1 && time < 3) {
        return 3
    } else if (principal >= 2500 && time >= 3) {
        return 4
    } else if (principal < 2500 && time <= 1) {gi
        return 2
    } else {
        return 1
    }
}

const caculateInterest = (data, rate) => {
    const {
        principal,
        time
    } = data
    return (principal * rate * time) / 100
}

function interestCalculator(interestData) {
    return interestData.map((data) => {
    const rate = calculateRate(data)
     const interest = caculateInterest(data,rate)
       
        return {
            ...data,rate,
            interest
            
        } 
    })


}

console.log(interestCalculator(data))