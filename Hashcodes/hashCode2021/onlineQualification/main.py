"""
This is the raw praactice file for the pizza practice problem, shared by b1ack0t
"""
class Pizza():
class Operation():

    def __init__(self):

    def readData(self, filename):
        """
        Reads the data to our data structure.
        :param filename: The filename to read to
        """
        contents = []
        filedata = open(filename, 'r+')
        for line in filedata:
            contents.append(line.split())
        self.M = int(contents[0][0])
        self.T_2 = int(contents[0][1])
        self.T_3 = int(contents[0][2])
        self.T_4 = int(contents[0][3])
        for i in range(1, self.M+1):
            ingredients = int(contents[i][0])
            self.pizzas.append(Pizza(i-1))
            for j in range(1, ingredients+1):
                self.pizzas[i-1].addIngredients(contents[i][j])
                self.pizzas[i-1].settIndex(i-1)
   
    def writeOutput(self, filename):
        """
        Writes the output of the contents to the a file.
        :param filename: The name of the file to write to.
        """
        contents = self.algorithm()
        f = open(filename, 'w')
        f.write(str(len(contents)))
        f.write('\n')
        for line in deliveries:
            for item in line:
                string = str(item) + ' '
                f.write(string)
            f.write('\n')

    def algorithm(self):


operation_a = Operation()
operation_a.readData("./Input/b_little_bit_of_everything.in")
operation_a.writeOutput("./Output/b.out")
