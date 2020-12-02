class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }

  updateAverage(newAverage){
    var gradeSearch = this.headerElement.querySelector('.badge-secondary');
    gradeSearch.textContent = newAverage;
  }

}
