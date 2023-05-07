class Cabin {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
    }

describe() {
    return `${this.name} sleeps ${this.capacity}.`;
}
}

class Resort {
    constructor(name) {
        this.name = name;
        this.cabin = [];
}
addCabin(cabin) {
    if (cabin instanceof Cabin) {
        this.cabin.push(cabin);
    } else {
        throw new Error(`You can only add instance of cabin. Argument is not a cabin: ${cabin}`);
    }
}

describe() {
    return `${this.cabin} has ${this.cabins.length} cabins.`;
}
}

class Menu {
    constructor() {
        this.resort = [];
        this.selectedCabin = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
            case '1':
            this.createCabin();
            break;
            case '2':
            this.viewCabin();
            break; 
            case '3':
            this.deleteCabin();
            case '4':
                this.displayCabins();
                break;
                default:
                selection = 0;
selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions() {
       return prompt(`
       `)
    }
    }
}