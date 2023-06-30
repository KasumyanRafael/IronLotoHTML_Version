let button=document.getElementById('accelerator');
button.addEventListener("click",function(){
    let area=document.querySelector('gamearea');
    var elementToBeRemoved = document.getElementById('picture');
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
    drawTable();
    alert("abba");
})
function drawTable(){
    var data = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [7, 8, 9 ] ];
    var html = '<table><tbody>';
    for (var i = 0, len = data.length; i < len; ++i) {
        html += '<tr>';
        for (var j = 0, rowLen = data[i].length; j < rowLen; ++j ) {
           html += '<td>' + data[i][j] + '</td>';
        }
    html += "</tr>";
    }
    html += '</tbody></table>';
    $(html).appendTo('gamearea');
}