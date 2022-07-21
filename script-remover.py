import os

print ("CAUTION - REMOVAL OF INTERVIEWEES CANNOT BE UNDONE - WILL REQUIRE RE-ENTRY OF DATA USING THE 'script-generator.py' FILE")
print ("")

firstname = input ("Enter first name (The portion that appears in normal font on the 'people.html' page): ")
lastname = input ("Enter last name (The portion that appears in bold font on the 'people.html' page): ")

print ("")

firstname = firstname.title ()
lastname = lastname.title ()

fullname = firstname + " " + lastname

with open ("modal-script.js", "r") as input:
    with open ("modal-script-temp.js", "w") as output:
        for line in input:
            if fullname not in line.strip ("\n"):
                output.write (line)

# replace file with original name
os.replace ('modal-script-temp.js', 'modal-script.js')

fullname_lower = fullname.lower ()
fullname_lower = fullname_lower.replace (" ", "_")

if os.path.exists ("PEOPLE/" + fullname_lower + ".html"):
    os.remove ("PEOPLE/" + fullname_lower + ".html")