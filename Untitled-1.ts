
let myString: string = "Привет, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myArray: number[] = [5, 10, 15, 20];

console.log("Переменные:  Untitled1:7 - Untitled-1.ts:7");
console.log(myString, myNumber, myBoolean, myArray);


function calculateAverage(grades: number[]): number {
    if (grades.length === 0) return 0;
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

console.log("Среднее значение:  Untitled1:17 - Untitled-1.ts:17", calculateAverage([4, 5, 3, 5]));

interface Student {
    id: number;
    name: string;
    age: number;
    grades: number[];
}


const student1: Student = {
    id: 1,
    name: "Алекс",
    age: 20,
    grades: [5, 4, 3, 5]
};

console.log("Студент:  Untitled1:35 - Untitled-1.ts:34", student1);


class StudentManager {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    listStudents(): void {
        console.log("Список студентов:  Untitled1:46 - Untitled-1.ts:45");
        this.students.forEach(s => {
            console.log(`${s.id}. ${s.name}, возраст: ${s.age}, оценки: ${s.grades}  Untitled1:48 - Untitled-1.ts:47`);
        });
    }
}

const manager = new StudentManager();
manager.addStudent(student1);
manager.addStudent({ id: 2, name: "Иван", age: 22, grades: [4, 4, 5] });
manager.listStudents();


function printData<T>(data: T): void {
    console.log("Generic вывод:  Untitled1:60 - Untitled-1.ts:59", data);
}

printData<string>("Hello, world!");
printData<number>(123);
printData<Student>(student1);

