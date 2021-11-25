var addToList = document.getElementById("addTodo");
var inputField = document.getElementById("textTodo");
var toDoList = document.getElementById("toDos");

addToList.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    toDoList.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";
    var buttonClick = document.createElement('button');
    paragraph.appendChild(buttonClick);
    buttonClick.innerText = "done";
    buttonClick.style.cssText = `
        float: right;
        background: #909090;
        border: none;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        padding: 2px 5px;
    `;
    buttonClick.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.background = "#c6c6c6";
        var buttonExit = document.createElement('button');
            buttonExit.innerText = "x";
            paragraph.appendChild(buttonExit);
            buttonExit.style.cssText = `
                float: right;
                background: transparent;
                border: none;
                cursor: pointer;
                color: #707070;
                font-size: 16px;
            `;
            buttonExit.addEventListener('click', function() {
                paragraph.removeChild(buttonExit);
                toDoList.removeChild(paragraph);
            })
            
    }, {once: true})
    paragraph.addEventListener('dblclick', function() {
        toDoList.removeChild(paragraph);
    })
});

inputField.addEventListener("keydown", checkKey);
function checkKey(key) {
    if (key.keyCode == "13") {
        var paragraph = document.createElement('p');
        toDoList.appendChild(paragraph);      
        paragraph.innerText = inputField.value;    
        inputField.value = "";
        var buttonClick = document.createElement('button');
        paragraph.appendChild(buttonClick);
        buttonClick.innerText = "done";
        buttonClick.style.cssText = `
            float: right;
            background: #909090;
            border: none;
            border-radius: 3px;
            color: #fff;
            cursor: pointer;
            padding: 2px 5px;
        `;
        buttonClick.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
            paragraph.style.background = "#c6c6c6";
            var buttonExit = document.createElement('button');
            buttonExit.innerText = "x";
            paragraph.appendChild(buttonExit);
            buttonExit.style.cssText = `
                float: right;
                background: transparent;
                border: none;
                cursor: pointer;
                color: #707070;
                font-size: 16px;
            `;
            buttonExit.addEventListener('click', function() {
                paragraph.removeChild(buttonExit);          
                toDoList.removeChild(paragraph);          
            });
    
        }, {once: true})
        paragraph.addEventListener('dblclick', function() {
            toDoList.removeChild(paragraph);
        })
    }
};
