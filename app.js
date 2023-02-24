function salary() {
    let Hours = document.getElementById('Hours').value
    let Days = document.getElementById('Days').value
    let li = document.getElementById('li').value
    let SalaryForHours = document.getElementById('SalaryForHours').value
    document.getElementById('sum').innerText = (+Hours * +Days * +SalaryForHours + +li *4)
    }