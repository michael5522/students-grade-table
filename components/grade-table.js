class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tBody = this.tableElement.querySelector('tbody');
    var tBody2 = tBody.children;
    var array = [];
    for(var i=0; i < tBody2.length; i++){
      array.push(tBody2[i])
    }
    for (var i=0; i< array.length;i++){
      array[i].remove();
    }
    for(var i =0; i<grades.length;i++){
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
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var $row = $("<tr>");
    var $name = $("<td>", { text: data.name });
    var $course = $("<td>", { text: data.course });
    var $grade = $("<td>", { text: data.grade });
    var $delete = $("<td>");
    var $delBtn = $("<button>", { class: "btn btn-danger", text: "DELETE", click: deleteGrade(data.id) });
    $delete.append($delBtn);
    $row.append($name, $course, $grade, $delete);
    return $row;

    // var row = document.createElement('tr');
    // var name = document.createElement('td');
    // name.textContent = data.name;
    // row.appendChild(name);

    // var course = document.createElement('td');
    // course.textContent = data.course;
    // row.appendChild(course);

    // var grade = document.createElement('td');
    // grade.textContent = data.grade;
    // row.appendChild(grade);

    // var deleteD = document.createElement('td');
    // row.appendChild(deleteD);

    // var deleteBtn = document.createElement('button');
    // deleteBtn.className = "btn btn-danger";
    // deleteBtn.textContent = "DELETE";
    // deleteBtn.addEventListener("click", deleteGrade(data.id));

    // return row;
  }

}
