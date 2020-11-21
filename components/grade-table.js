class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tBody = this.tableElement.querySelector('tbody');
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement('tr');

      var name = document.createElement('td');
      name.textContent = grades[i].name;
      row.appendChild(name);
      var course = document.createElement('td');
      course.textContent = grades[i].course;
      row.appendChild(course);
      var grade = document.createElement('td');
      grade.textContent = grades[i].grade;
      row.appendChild(grade);
      tBody.appendChild(row);
    }

    var tBody2 = tBody.children;
    var array = [];
    for(var i=0; i<tBody2.length;i++){
      array.push(tBody2[i])
      console.log("pushing to array");
    }
    console.log(array.length);
    console.log(array);
    for (var i=0; i< array.length;i++){
      array[i].remove();
    }


    // for(var i =0; i<grades.length;i++){
    //   var row = document.createElement('tr');

    //   var name = document.createElement('td');
    //   name.textContent = grades[i].name;
    //   row.appendChild(name);
    //   var course = document.createElement('td');
    //   course.textContent = grades[i].course;
    //   row.appendChild(course);
    //   var grade = document.createElement('td');
    //   grade.textContent = grades[i].grade;
    //   row.appendChild(grade);
    //   tBody.appendChild(row);
    // }

  }

}
