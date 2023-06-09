import random

random_number = random.randint(1, 100)
counter = 6

user_number = int(input("Enter a whole number between 1 and 100: "))

for i in range(1, 6):
  if user_number == random_number:
    print("You guessed it! Congratulations!")
    print(r"""
   _____                            _       _ 
  / ____|                          | |     | |
 | |     ___  _ __   __ _ _ __ __ _| |_ ___| |
 | |    / _ \| '_ \ / _` | '__/ _` | __/ __| |
 | |___| (_) | | | | (_| | | | (_| | |_\__ \_|
  \_____\___/|_| |_|\__, |_|  \__,_|\__|___(_)
                     __/ |                    
                    |___/                     
    """)
    break
  elif user_number > random_number:
    print("Too big! Try again.")
    counter -= 1
    user_number = int(float(input("Remaining attempts: " + str(counter) + ".\nEnter a whole number between 1 and 100: ")))
  elif user_number < random_number:
    print("Too small! Try again.")
    counter -= 1
    user_number = int(float(input("Remaining attempts: " + str(counter) + ".\nEnter a whole number between 1 and 100: ")))

if user_number != random_number:
  print("The random number was " + str(random_number) + ". Better luck next time!")
