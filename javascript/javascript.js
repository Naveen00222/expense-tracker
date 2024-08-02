
function add() {
    
    const name = document.getElementsByClassName("name")[0].value;
    const amount = document.getElementsByClassName("amount")[0].value;  
    const category = document.getElementsByClassName("category")[0].value;
    const date = document.getElementsByClassName("date")[0].value;
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
      <td>${name}</td>
      <td>${amount}</td>
      <td>${category}</td>
      <td>${date}</td>
      <td><button onclick="deleteTransaction(this)">Delete</button></td>
    `;
    document.getElementsByTagName("table")[0].append(newrow);      
  }
  function deleteTransaction(button){
    button.parentNode.parentNode.remove();
  }

  