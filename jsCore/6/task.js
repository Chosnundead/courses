// Создайте класс University со свойствами
// названия университета и факультетов.
// Включите методы для добавления отдела,
// удаления отдела и отображения всех
// отделов. Создайте экземпляр класса
// University, а также реализуйте логику
// добавления и удаления факультетов.

class University {
    constructor(name) {
        this.name = name;
        this.faculties = [];
    }
    addFaculty(faculty) {
        this.faculties.push(faculty);
    }
    removeFaculty(faculty) {
        this.faculties = this.faculties.filter((f) => f !== faculty);
    }
    displayFaculties() {
        console.log(this.faculties);
    }
}

const university = new University("KPI");
university.addFaculty("IT");
university.addFaculty("Economy");
university.displayFaculties();
university.removeFaculty("Economy");
university.displayFaculties();
