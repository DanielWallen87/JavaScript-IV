// CODE here for your Lambda Classes

class Person {
    constructor (attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (attrs) {
        super(attrs, Person);
        this.specialty = attrs.specialty;
        this.faveLanguage = attrs.faveLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    updateGrade (student) { // I know the instructions said "graduate," but this makes more sense to me
        student.grade += Math.round(Math.random() * 10);
        if (student.grade > 70) {
            console.log(`${student.name} passed with flying colors!`);
        }
        else if (student.grade < 70) {
            student.grade += Math.round(Math.random() * 5);
            console.log(`${student.name} currently has ${student.grade}. So close... keep going!`)
        }
    }
}

class Student extends Instructor {
    constructor (attrs) {
        super(attrs, Instructor);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.faveSubjects = attrs.faveSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects() {
        console.log(`${this.faveSubjects}`);
    }
    PRassignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Student {
    constructor (attrs) {
        super(attrs, Student);
        this.gradClassName = attrs.gradClassName;
        this.faveInstructor = attrs.faveInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, it's standup time!`);
    }
    debug (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.demo("HTML");

  const jay = new Instructor({
    name: 'Jay',
    location: 'New Jersey',
    age: 40,
    favLanguage: 'Klingon',
    specialty: 'Standing in front of convenience stores',
    catchPhrase: `Snoochie boochies!`
  });

  jay.speak();

  const bob = new Instructor({
    name: 'Bob',
    location: 'Anywhere',
    age: 50,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `YOLO`
  });

const daniel = new Student({
    name: 'Daniel',
    location: 'TN',
    age: 32,
    favLanguage: 'CSS',
    specialty: 'Content marketing',
    catchPhrase: `The way you do one thing is the way you do everything`,
    previousBackground: `Freelance writing, banking, waiting tables, walking dogs`,
    className: `Web22`,
    faveSubjects: ['Array methods', 'CSS animations'],
    grade: 100
  });

  bob.grade(daniel, "Javascript");

  daniel.sprintChallenge("Prototype refactoring");

  const dillon = new Student({
    name: 'Dillon',
    location: 'VA',
    age: 33,
    favLanguage: 'Spanish',
    specialty: 'Eating pizza',
    catchPhrase: `Just do it`,
    previousBackground: `Writing children's books`,
    className: `Web22`,
    faveSubjects: ['all', 'of', 'them'],
    grade: 50
  });

  dillon.PRassignment("Object oriented programming");

  const david = new Student({
    name: 'David',
    location: 'NC',
    age: 34,
    favLanguage: 'CSS2',
    specialty: 'Cake decorating',
    catchPhrase: `Let them have their cake (and eat it, too)`,
    previousBackground: `Decorating cupcakes`,
    className: `Web24`,
    faveSubjects: ['drawing', 'baking', 'caking'], 
    grade: 75
  });

  david.listsSubjects();

  const brandon = new ProjectManager({
    name: 'Brandon',
    location: 'Atlantis',
    age: 35,
    favLanguage: 'Java',
    specialty: 'Small group leading',
    catchPhrase: `Let the Javascript flow through you`,
    previousBackground: `Traveling the world`,
    className: `Web200`,
    faveSubjects: ['lifting', 'reading', 'prototypes'], 
    gradClassName: 'Web20',
    faveInstructor: 'Brit'
  });

  brandon.standUp('web22_brandon');

  const elijah = new ProjectManager({
    name: 'Elijah',
    location: 'Pluto',
    age: 5,
    favLanguage: 'Plutonian',
    specialty: 'Mindreading',
    catchPhrase: `Go shorty it's your birthday`,
    previousBackground: `Outerspace`,
    className: `Web2000`,
    faveSubjects: ['flight', 'gravity', 'black holes'], 
    gradClassName: 'Web2',
    faveInstructor: 'Brittlorax'
  });

  elijah.debug(daniel, "Agile");

  bob.updateGrade(daniel);
  bob.updateGrade(david);
  
  brandon.updateGrade(dillon);
  brandon.updateGrade(dillon);