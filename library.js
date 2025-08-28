// Initial Library Books
let library = [
    {name: "The Kite Runner", author: "Khaled Hosseini", id: 101},
    {name: "To Kill A Mockingbird", author: "Harper Lee", id: 102},
    {name: "The Alchemist", author: "Paulo Coelho", id: 103},
    {name: "Pride And Prejudice", author: "Jane Austen", id: 104},
    {name: "A Tale Of Two Cities", author: "Charles Dickens", id: 105}
  ];
  
  let students = [];

  function showSection(id) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'books') renderBooks();
    if (id === 'students') renderStudents();
    if (id === 'issue') fillBookSelect();
  }
  
  function renderBooks() {
    let tbody = document.querySelector('#bookTable tbody');
    tbody.innerHTML = "";
    library.forEach(book => {
      tbody.innerHTML += `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.id}</td></tr>`;
    });
  }
  
  function renderStudents() {
    let tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = "";
    students.forEach(stu => {
      tbody.innerHTML += `<tr><td>${stu.name}</td><td>${stu.email}</td><td>${stu.book}</td><td>${stu.id}</td></tr>`;
    });
  }
  
  function fillBookSelect() {
    let select = document.getElementById('bookSelect');
    select.innerHTML = "";
    library.forEach(book => {
      select.innerHTML += `<option value="${book.id}">${book.name} (${book.author}) - ID:${book.id}</option>`;
    });
  }
  
  function issueBook(event) {
    event.preventDefault();
    let name = document.getElementById('studentName').value;
    let email = document.getElementById('studentEmail').value;
    let bookId = parseInt(document.getElementById('bookSelect').value);
    let book = library.find(b => b.id === bookId);
  
    if (book) {
      students.push({name: name, email: email, book: book.name, id: book.id});
      library = library.filter(b => b.id !== bookId);
      alert(`Book "${book.name}" issued successfully!`);
      event.target.reset();
    }
  }
  
  function returnBook(event) {
    event.preventDefault();
    let id = parseInt(document.getElementById('returnId').value);
    let student = students.find(s => s.id === id);
    if (student) {
      library.push({name: student.book, author: "Unknown", id: student.id});
      students = students.filter(s => s.id !== id);
      alert(`Book ID ${id} returned successfully!`);
      event.target.reset();
    } else {
      alert("Invalid Book ID!");
    }
  }
  
  // Show books by default
  showSection('books');