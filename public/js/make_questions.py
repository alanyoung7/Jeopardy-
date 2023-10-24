import os
import csv
import random
import pandas as pd
def input(name):
    bank = {}
    Questions = []
    Correct = []
    A = []
    B = []
    C = []
    D = []
    with open(name, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["Correct"] != "TRUE" and row["Correct"] != "FALSE" and row["Correct"] != "True" and row["Correct"] != "False" and row["Correct"] != "Yes" and row["Correct"] != "No":
                Questions.append(row['Questions'])
                Correct.append(row['Correct'])
                A.append(row['A'])
                B.append(row['B'])
                C.append(row['C'])
                D.append(row['D'])
    bank["Questions"] = Questions
    bank["Correct"] = Correct
    bank["A"] = A
    bank["B"] = B
    bank["C"] = C
    bank["D"] = D
    df=pd.DataFrame(bank)
    return df

#returns 5 random questions in 5 categories for a total of 25
def get_q(questions, cat):
    c = []
    q = []
    n1 = []
    #load q with 5 lists to store 
    for i in range(6):
        q.append([])
    i = 0
    while i < 5:
        n = random.randint(0,len(questions) - 1)
        if n not in n1:
            i += 1
            c.append(cat[n])
            n1.append(n)
            q2 = questions[n].values.tolist()
            n2 = []
            j = 0
            while j < 5:
                n = random.randint(0,len(q2) - 1)
                if n not in n2:
                    j += 1
                    n2.append(n)
                    for k in range(0, len(q2[n])):
                        q[k].append(q2[n][k])

    return q, c

def main():
    
    questions = []
    cat = []
    prize = ["10", "50", "100", "500", "1000"]
    for file in os.listdir("csv/"):
        if not file.startswith('.'):
            cat.append(file[:-4]) #saves category minus .csv
            questions.append(input("csv/" + file)) #puts all questions from csv files into list
    code = "var q = []\nvar c = []\n"
    #generates 1000 games worth of questions 
    for n in range(1000):
        ques, c = get_q(questions, cat)
        cat_name = "cat" + str(n)
        code += "const " + cat_name + " = ["
        for i in range(len(c)):
            if i != len(c) - 1:
                code += "'" + c[i] + "', "
            else:
                code += "'" + c[i] + "']\n"
        ques_name = "questions" + str(n)
        code += "var " + ques_name + " = [\n"
        for i in range(len(ques[0])):
            code += "  {\n"
            code += "    prompt: '" + ques[0][i].strip() + "',\n"
            code += "    options: ['" + ques[2][i] + "', '" + ques[3][i] + "', '" + ques[4][i] + "', '" + ques[5][i] + "'],\n"
            code += "    correctAnswer: '" + ques[1][i] + "',\n"
            code += "    cashPrize: " + prize[i % 5] + "\n"
            code += "  },\n"
        code += "];\nc.push(" + cat_name + ");\nq.push(" + ques_name + ");\n"
    code += "export function getQuestions(n) {\n  return q[n];\n}\n"
    code += "export function getCat(n) {\n  return c[n];\n}\n"

    file = open('questions.js', 'w')
    file.write(code)
    file.close         

if __name__ == "__main__":
    main()