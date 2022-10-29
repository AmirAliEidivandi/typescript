const carMakers = ["ford", "toyota", "benz"];
const dates: Date[] = [new Date(), new Date()];

const carsMakers: string[][] = [["f150"], ["corola"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car;
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
// importantDates.push(false);
importantDates.push('2030-10-10')