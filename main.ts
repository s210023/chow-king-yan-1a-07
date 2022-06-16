let x = 1
function DisplayLetter(x: number) {
    if (x == 0) {
        basic.showString("A")
    }
    
    if (x == 1) {
        basic.showString("B")
    }
    
    if (x == 2) {
        basic.showString("C")
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    x = x + 1
    if (x > 2) {
        x = 2
    }
    
    DisplayLetter(x)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    x = x - 1
    if (x < 0) {
        x = 0
    }
    
    DisplayLetter(x)
})
