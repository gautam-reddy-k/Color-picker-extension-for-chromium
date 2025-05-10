document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('color-pick');

    button.addEventListener("click", async function (){
        if(!window.EyeDropper){
            alert('EyeDropper API not supported in this browser')
            return;
        }

        let eyedropper = new EyeDropper()

        try{
            let result = await eyedropper.open()
            let color = result.sRGBHex
            await navigator.clipboard.writeText(color)
            alert(`Color picked: ${color} (Copied to clipboard!)`)
        }
        catch(err){
            console.error("There was a problem", err)
        }
    })

});