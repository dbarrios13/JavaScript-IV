// CODE here for your Lambda Classes
class Person {
	constructor (props){
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
		this.gender = props.gender;
	}
	speak () {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person {
	constructor(props){
		super(props);
		this.specialty = props.specialty;
		this.favLanguage = props.favLanguage;
		this.catchPhrase = props.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    grading(student){
        student.grade = student.grade + Math.floor(Math.random() *21) -10;
    }
}

class Student extends Person {
	constructor (props) {
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
	}
	listsSubjects (){
        console.log(`${this.name} favorite subjects are:`)
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
	}
	PRAssignment (subject) {
		console.log(`${this.name} has submitted a PR for ${subject}.`);
	}
	sprintChallenge (subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate () {
        while (this.grade < 70) {
            michael.grading(this);
        } 
        console.log(`Congratulations ${this.name}, you are graduating!`);
    }
}

class ProjectManager extends Instructor {
	constructor (props) {
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}	
	standUp (channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}
	debugsCode (student, subject) {
		console.log(`${this.name} debugs ${student.name}’s code on ${subject}`);
	}
}

const michael = new Instructor ({
	name: 'Michael',
	location: 'Scranton',
	age: 35,
	gender: 'male',
	favLanguage: 'React',
	specialty: 'Front-end',
	catchPhrase: 'That’s what she said'
});

const jim = new Instructor ({
	name: 'Jim',
	location: 'Scranton',
	age: 28,
	gender: 'male',
	favLanguage: 'Java',
	specialty: 'Android Apps',
	catchPhrase: 'Computer says no'
});

const dwight = new Instructor ({
	name: 'Dwight',
	location: 'Scranton',
	age: 31,
	gender: 'male',
	favLanguage: 'mySQL',
	specialty: 'Back-end',
	catchPhrase: 'Beats, bears, Battlestar galatica'
});

const pam = new Student ({
	name: 'Pam',
	location: 'Scranton',
	age: 27,
    gender: 'female',
    grade: 90,
    previousBackground: 'Receptionist, Sales Representative',
    className: 'WEB19',
    favSubjects: ['HTML', 'CSS/Less', 'Javascript']
});

const kevin = new Student ({
	name: 'Kevin',
	location: 'Scranton',
	age: 35,
    gender: 'male',
    grade: 80,
    previousBackground: 'Accountant',
    className: 'WEB19',
    favSubjects: ['APIs', 'React', 'Python']
});

const andy = new Student ({
	name: 'Andy',
	location: 'Scranton',
	age: 25,
    gender: 'male',
    grade: 70,
    previousBackground: 'Sales Representative',
    className: 'AND6',
    favSubjects: ['Rest API', 'HTTP Requests', 'XML']
});

const toby = new ProjectManager ({
    name: 'Toby',
	location: 'Scranton',
	age: 37,
    gender: 'male',
    favLanguage: 'Javascript',
	specialty: 'Front-end',
    catchPhrase: `Homey don't play that!`,
    gradClassName: 'WEB17',
    favInstructor: 'Michael'
});

const angela = new ProjectManager ({
    name: 'Angela',
	location: 'Scranton',
	age: 31,
    gender: 'female',
    favLanguage: 'MongoDB',
	specialty: 'Back-end',
    catchPhrase: 'You idiot',
    gradClassName: 'WEB18',
    favInstructor: 'Dwight'
});

const stanley = new ProjectManager ({
    name: 'Stanley',
	location: 'Scranton',
	age: 43,
    gender: 'male',
    favLanguage: 'Java',
	specialty: 'Java Backend Data',
    catchPhrase: `You've been meatballed!`,
    gradClassName: 'AND3',
    favInstructor: 'Jim'
});

console.log(michael.speak());
console.log(toby.speak());
console.log(angela.speak());
console.log(jim.demo('Java'));
console.log(dwight.grade(pam, 'Java'));
console.log(pam.listsSubjects());
console.log(andy.PRAssignment('Rest APIs'));
console.log(kevin.sprintChallenge('React'));
console.log(stanley.standUp('web19_stanley'));
console.log(toby.debugsCode(kevin, 'Javascript'));
console.log(jim.grading(andy));
console.log(stanley.grading(pam));
console.log(dwight.grading(kevin));
console.log(pam.graduate());
console.log(andy.graduate());
console.log(kevin.graduate());

