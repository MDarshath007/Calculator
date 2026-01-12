    const display = document.getElementById("display")
    function AppendToDisplay(element)
    {
        display.value+=element
    }

    function calculate()
    {
        try{
            const result=Function('"use strict"; return('+ display.value +')')();
            display.value=result
        }
        catch(Error){
            display.value="Error"
        }
    }
    function clearElement()
    {
    display.value=display.value.slice(0,-1)
    }

    function allClear()
    {
    display.value=''
    }
