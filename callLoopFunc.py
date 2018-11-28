from loopFunc import looper

def main():
	looper(7)

if __name__ == "__main__":
	main()

# Line 6 means, when running this file, do everything under 
# this if block. In this case, it will call the main function.
# The reason for this demo is to show that when importing and
# invoking a function from another file, if it is not called
# within a function inside the invoking origin file, python
# will read and execute all code within the file the function
# is being imported from, and not just the function that is 
# being imported and needed. In this file, the imported 
# function `looper` will run but the print statement within
# the same file (loopFunc.py), will not be read and executed.
