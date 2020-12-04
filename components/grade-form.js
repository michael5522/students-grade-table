class GradeForm{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit called");

    var formData = new FormData(event.target);
    var studentName = formData.get("name");
    var studentCourse = formData.get("course");
    var studentGrade = formData.get("grade");
    this.createGrade(studentName, studentCourse, studentGrade);
    event.target.reset();

    console.log(formData);
    console.log(studentName);
    console.log(studentCourse);
    console.log(studentGrade);
  }

}
