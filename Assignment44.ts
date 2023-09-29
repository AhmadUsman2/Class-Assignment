function create_car(manufacturer: string, model: string, ...options: string[]) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };

    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const carInfo = create_car("Toyota", "Camry", "color", "Blue", "year", "2023");

// Print the car information
console.log(carInfo);


