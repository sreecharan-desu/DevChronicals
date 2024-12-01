import pyfiglet

def print_star_representation(text):
    # Generate the ASCII art for the input text
    ascii_art = pyfiglet.figlet_format(text)
    print(ascii_art)

# Get input from the user
input_text = input("Enter text: ")
print_star_representation(input_text)

