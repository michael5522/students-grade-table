class GradeFrom{
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.submit(this.handleSubmit);
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit called");
  }

}
