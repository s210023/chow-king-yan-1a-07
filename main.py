x = 1
def DisplayLetter(x):
    if x==0:
        basic.show_string('A')
    if x==1:
        basic.show_string('B')
    if x==2:
        basic.show_string('C')
def on_button_pressed_b():
    global x
    x = x + 1
    if x>2:
        x = 2
    DisplayLetter(x)
input.on_button_pressed(Button.B, on_button_pressed_b)
def on_button_pressed_a():
    global x
    x = x - 1
    if x<0:
        x = 0
    DisplayLetter(x)
input.on_button_pressed(Button.A, on_button_pressed_a)