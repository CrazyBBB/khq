const pieces = [
    ["香","桂","銀","金","玉","金","銀","桂","香"],
    ["","飛","","","","","","角",""],
    ["歩","歩","歩","歩","歩","歩","歩","歩","歩"],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["歩","歩","歩","歩","歩","歩","歩","歩","歩"],
    ["","角","","","","","","飛",""],
    ["香","桂","銀","金","玉","金","銀","桂","香"],
]

$(function(){
    const table: HTMLTableElement = <HTMLTableElement> document.getElementById('tb');
    const d: number = Math.min(innerWidth, innerHeight) * 0.9;
    table.setAttribute("width", '' + d);
    table.setAttribute("height", '' + d);
    table.setAttribute("style", "font-size: " + Math.ceil(d / 200) + "em");

    for (let i = 0; i < 9; i++) {
        const row: HTMLTableRowElement = table.insertRow(i);
        for (let j = 0; j < 9; j++) {
            const cell:HTMLTableCellElement = row.insertCell(j);
            cell.innerHTML = pieces[i][j];
            if (i < 3) {
                cell.setAttribute("style", "transform: rotate(180deg)")
            }

            if (i == 6 && j == 2) {
                cell.setAttribute("style", "color: white; background-color: black")
            }
            if (i == 5 && j == 2) {
                cell.setAttribute("style", "background-color: lightgray")
            }
        }
    }
});