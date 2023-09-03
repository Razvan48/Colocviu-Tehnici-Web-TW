const numRow = 10;
const numCol = 10;

const resetCellsTime = 500;

function resetCells()
{
	let pressedCells = 0;
	
	for (let i = 0; i < numRow; ++i)
	{
		for (let j = 0; j < numCol; ++j)
		{
			if (document.getElementById("r" + i + "c" + j).getElementsByTagName("img")[0].src.endsWith("image1.png"))
			{
				++pressedCells;
			}
		}
	}
	
	if (pressedCells > 0)
	{
		for (let i = 0; i + 1 < numRow; ++i)
		{
			for (let j = 0; j < numCol; ++j)
			{
				document.getElementById("r" + i + "c" + j).getElementsByTagName("img")[0].src = 
				document.getElementById("r" + (i + 1) + "c" + j).getElementsByTagName("img")[0].src;
			}
		}
		
		for (let j = 0; j < numCol; ++j)
		{
			document.getElementById("r" + (numRow - 1) + "c" + j).getElementsByTagName("img")[0].src = "image0.png";
		}
		
		setTimeout(resetCells, resetCellsTime);
	}
}

function clearScreen()
{
	for (let i = 0; i < numRow; ++i)
	{
		for (let j = 0; j < numCol; ++j)
		{
			document.getElementById("r" + i + "c" + j).getElementsByTagName("img")[0].src = "image0.png";
		}
	}
}

window.onload = function()
{
	let mainTable = document.createElement("table");
	mainTable.id = "mainTable";
	document.getElementById("mainDiv").appendChild(mainTable);
	mainTable = document.getElementById("mainTable");
	
	for (let i = 0; i < numRow; ++i)
	{
		let mainTableRow = document.createElement("tr");
		
		mainTable.appendChild(mainTableRow);
		
		for (let j = 0; j < numCol; ++j)
		{
			let mainTableData = document.createElement("td");
			mainTableData.id = "r" + i + "c" + j;
			mainTableRow.appendChild(mainTableData);
			
			let mainTableDataImage = document.createElement("img");
			mainTableDataImage.src = "image0.png";
			
			mainTableData.appendChild(mainTableDataImage);
			
			mainTableDataImage.addEventListener("click", function(event)
			{
				event.target.src = "image1.png";
			});
		}
	}
	
	document.addEventListener("keyup", function(event)
	{
		if (event.key == "r" || event.key == "R")
		{
			setTimeout(resetCells, resetCellsTime);
		}
		else if (event.key == "p" || event.key == "P")
		{
			clearScreen();
		}
	});
};