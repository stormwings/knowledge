// Singleton
// Singleton is a creational design pattern that restricts class to have only one instance, 
// while also creating a global access point to this instance. 
// It is used when control access to a shared resource is needed.

// Use this pattern when you need to ensure control access to a resource that might return 
// inconsistencies if it is changed by two different objects at the same time. (Ex. Databases, state of an object)

class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

// Observer
// Observer is a behavioral design pattern in which objects get information about and
// events happening to the object they are observing. The observer pattern defines a subscriber method,
// which will update every object that is subscribed to itself, making sure every subscriber gets the latest update.

// An example of an observer in our daily life would be subscribing to a newsletter. 
// The moment you join the mailing list you are notified when there is a new publication.

// Use this pattern when changes on one object may require updating other objects, 
// and the actual set of objects is unknown or changes dynamically.

class Observable {

    // List of observers
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const exists = this.observers.includes(observer);
        if (!exists) {
            this.observers.push(observer);
        }
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class Observer {
    public update(observable: Observable): void {
        // Update observer according to Observable state
    }
}

// Decorator
// Decorator is a structural pattern that lets you add new characteristics to objects
// by adding a wrapper that contains the behaviors.

// We can find examples of this pattern in food delivery apps where you can choose
// any toppings or extras to your food, then the application adds the corresponding cost to your order.

// Use this pattern when it's necessary to add these extra behaviors on run time,
// or when inheritance is not possible.

interface Coffee {
    getCost(): number;
}

class SimpleCoffee implements Coffee {
    public getCost(): number {
        return 2;
    }
}

class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: SimpleCoffee;

    constructor(decoratedCoffee: SimpleCoffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    public getCost(): number {
        return this.getCost();
    }
}

class WithMilk extends CoffeeDecorator {
    public getCost(): number {
        return this.getCost() + 0.5;
    }
}

// Fast user creation with constructor auto loader
class User {
    constructor(
        private firstName: string,
        private lastName: string,
        private age: number,
        private isGraduated: boolean,
    ) { }
}