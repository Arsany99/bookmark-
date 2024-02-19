var siteName = document.getElementById("name");
var urlName = document.getElementById("url");
var addBtn = document.getElementById("addbtn");
var tableBody = document.getElementById("tableBody");
var mainIndex =0 ;

var bookmarks = [];

addBtn.onclick = function(){
    if (addBtn.innerHTML =="update") {
        addBtn.innerHTML ="Submit"
        var bookmark = {
            name :siteName.value,
            url :urlName.value
        }
        bookmarks.splice(mainIndex,1,bookmark)
    } else {
        var bookmark = {
            name :siteName.value,
            url :urlName.value
        }
        bookmarks.push(bookmark);
    }

    display(bookmarks);
    clearData();
}
function display(anyArray){
    var marks=``
    for (var i = 0; i < anyArray.length; i++){
        marks +=`
        <tr>
            <td>${anyArray[i].name}</td>
            <td><a href="${anyArray[i].url}"><button class="btn btn-primary">visit</button></a></td>
            <td><button onclick="updateBook(${i})" class="btn btn-info">update</button></td>
            <td><button onclick="deletBook(${i})" class="btn btn-danger">delete</button></td>
        </tr>
        `
        
    }
    tableBody.innerHTML=marks;
}
function deletBook(index){
    bookmarks.splice(index , 1);
    display(bookmarks);
}
function clearData(){
    siteName.value=""
    urlName.value=""
}
function updateBook (index){
    siteName.value=bookmarks[index].name
    urlName.value=bookmarks[index].url
    addBtn.innerHTML="update"
    mainIndex = index

}
function search(term){
    var wantedBook = [];
    for (var i = 0; i < bookmarks.length ; i++){
        if(bookmarks[i].name.toLowerCase().includes(term.toLowerCase())){
            wantedBook.push(bookmarks[i]);
        }
        
    }
    display(wantedBook);
}
