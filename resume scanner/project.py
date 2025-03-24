#import necessary libraries 
import re
import os
import time 
import pyinputplus as pyip
import PyPDF2 as pdf

#initialse arrayrs to store keywords and filtered pdf files 
pdfFiles = []
keywords = ["Security+", "CEH", "GSEC", "OSCP", "CISM", "CISP", "GPEN", "Metasploit", "Kali", "Python", "Java", "C#", "AWS", "Azure"]
#set abort to false so that the game doesn't end 
abort = False
#variables to check if the information have already been printed 
phonePrint = False
emailPrint = False
linkedinPrint = False

#function to filter out pdf from the directory 
def filterPdf(directory):
    for files in os.listdir(directory):
        if(files.endswith('.pdf')):
            pdfFiles.append(directory + "\\" + files)

    return pdfFiles

#function that scans through the resume 
def scanResume(fileList, quantity):
    #uses global variables for phonePrint, emailPrint, and linkedinPrint
    global phonePrint, emailPrint, linkedinPrint
    try:
        if(quantity != 0):
            #if they set a certain quantity, only loop it for that amount of time 
            for i in range(0, quantity):
                #open the pdf file and read
                openFile = open(str(fileList[i]), "rb")
                contents = pdf.PdfReader(openFile)
                #read the texts in the file 
                for page in range(len(contents.pages)):
                    texts = contents.pages[page].extract_text()
                    #returns the boolean value of whether the words have been found in the text
                    for words in keywords:
                        found = words in texts
                        if found:
                            #searches the phone number, email, and linkedin if any of the keywords are found 
                            openTxt = open("K:\\Georgian College\\Sem 2\\Document automation using python\\project\\ChosenCandidates.txt", "a")
                            phone = re.compile(r'\+1 \(\d{3}\) \d{3}-\d{4}')
                            phoneMatch = phone.search(texts)
                            email = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
                            emailMatch = email.search(texts)
                            linkedin = re.compile(r'linkedin\.com/in/[a-zA-Z0-9-]+/?')
                            linkedinMatch = linkedin.search(texts)
                            if phoneMatch and not phonePrint:
                                openTxt.write(phoneMatch.group() + "\n")
                                phonePrint = True
                            if emailMatch and not emailPrint:
                                openTxt.write(emailMatch.group() + "\n")
                                emailPrint = True
                            if linkedinMatch and not linkedinPrint:
                                openTxt.write(linkedinMatch.group() + "\n")
                                linkedinPrint = True
                            openTxt.close()
                openFile.close()

        else:
            #loop for all the files if they didn't set the certain quantity
            for j in range(0, len(pdfFiles)):
                openFile = open(str(fileList[j]), "rb")
                contents = pdf.PdfReader(openFile)
                for page in range(len(contents.pages)):
                    texts = contents.pages[page].extract_text()
                    for words in keywords:
                        found = words in texts
                        if found:
                            openTxt = open("K:\\Georgian College\\Sem 2\\Document automation using python\\project\\ChosenCandidates.txt", "a")
                            phone = re.compile(r'\+1 \(\d{3}\) \d{3}-\d{4}')
                            phoneMatch = phone.search(texts)
                            email = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
                            emailMatch = email.search(texts)
                            linkedin = re.compile(r'linkedin\.com/in/[a-zA-Z0-9-]+/?')
                            linkedinMatch = linkedin.search(texts)
                            if phoneMatch and not phonePrint:
                                openTxt.write(phoneMatch.group() + "\n")
                                phonePrint = True
                            if emailMatch and not emailPrint:
                                openTxt.write(emailMatch.group() + "\n")
                                emailPrint = True
                            if linkedinMatch and not linkedinPrint:
                                openTxt.write(linkedinMatch.group() + "\n")
                                linkedinPrint = True
                            openTxt.close()
                openFile.close()
    #catching IndexError exception if it goes out of range when looping either the keywords or the files 
    except IndexError:
        print("The index is out of range. ")

    return 0

#prints words that was used to find each job 
def printKeywords(fileList):
    print("Words used to scan for network analyst roles")
    print(fileList[0:10])
    print("Words used to scan for SWE roles")
    print(fileList[10:])


#asks the user how many they would like to scan or quit
quantity = pyip.inputNum("How many resumes would you like to scan today? (type 0 for all, -1 to quit): ")

#decides which function to run or end depending on the user choice 
while not(abort):
    if quantity == -1:
        abort = True
    elif quantity < -1:
        quantity = pyip.inputNum("Numbeers less than -1 is not accepted. Please try again. ")
    else:
        startTime = time.time()
        filterPdf("K:\\Georgian College\\Sem 2\\Document automation using python\\project")
        scanResume(pdfFiles, quantity)
        endTime = time.time()
        timeTaken = endTime - startTime 
        print("You took", timeTaken, "to scan", len(pdfFiles), "documents. ")
        printKeywords(keywords)
        abort = True
