var p = document.querySelector('p');

var table = document.querySelector('table');
var gTable = new GradeTable(table, p);

var headerElement = document.querySelector('header');
var pageHeader = new PageHeader(headerElement);

var formElement = document.querySelector('form');
var gradeForm = new GradeForm(formElement);

var app = new App(gTable, pageHeader, gradeForm);
app.start();
