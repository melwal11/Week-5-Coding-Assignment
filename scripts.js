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
        let cabinString = '';
        for (let i = 0; i < this.cabin.length; i++) {
            cabinString += `${i}) ${this.cabin[i].name} - ${this.cabin[i].capacity}\n`;
        }
        return `${this.name} has ${this.cabin.length} cabin.\n${cabinString}`;
    }
}

class Menu {
    constructor() {
        this.resort = [];
        this.selectedResort = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createResort();
                    break;
                case '2':
                    this.viewResort();
                    break;
                case '3':
                    this.deleteResort();
                    break;
                case '4':
                    this.displayResort();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new resort
            2) view resort
            3) delete resort
            4) display all resorts
        `);
    }