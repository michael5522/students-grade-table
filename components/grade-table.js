class GradeTable {
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){

    var tBody = this.tableElement.querySelector('tbody');
    tBody.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var studentGrades = this.renderGradeRow(grades[i], this.deleteGrade);
      tBody.append(studentGrades);
    }

    console.log(grades);

    var p = document.querySelector('p');
    if (grades.length) {
      console.log("there are grades",p);
      p.className = "d-none";
    } else {
      console.log(p);
      p.className = "";
    }
  }


  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.textContent = data.name;
    row.appendChild(name);

    var course = document.createElement('td');
    course.textContent = data.course;
    row.appendChild(course);

    var grade = document.createElement('td');
    grade.textContent = data.grade;
    row.appendChild(grade);

    var deleteD = document.createElement('td');
    row.appendChild(deleteD);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", deleteGrade(data.id));
    deleteD.appendChild(deleteBtn);
    return row;
  }

}
