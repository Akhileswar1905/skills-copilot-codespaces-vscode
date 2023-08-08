function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000
    };

    member.showName = function () {
        console.log(this.name);
    };

    member.showSkills = function () {
        this.skills.forEach(function (skill) {
            console.log(skill);
        });
    };

    member.showSalary = function () {
        console.log(this.salary);
    };

    return member;
}