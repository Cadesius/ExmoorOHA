import os
import sys

# def addToClipBoard(text):
#     command = 'echo | set /p nul=' + text.strip() + '| clip'
#     os.system(command)

htmlpage = """<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
    <link rel="stylesheet" href="../style.css">
    <link rel="shortcut icon" href="../logo_fav_bg.png">
    <title>{fullname} - The Exmoor Oral Archives</title>
</head>
<body style="background-color: rgba(1,1,1,0);margin-bottom: 20%;">

<div class="content">

<div class="IMGBORDER" style="width: {width}%; height: auto;">
    <img class="MAINIMG" src="PHOTOS/{image}" alt="{fullname}">
</div>

<h2 style="text-align: left;">{fullnamecaps}</h2>

<table class="DLLINKS">
    <tr>
        <td><a class="DLLINK" href="{cataloguelink}">CATALOGUE</a></td>
        <td><a class="DLLINK" href="{recordinglink}">INTERVIEW</a></td>
        <td><a class="DLLINK" href="{transcriptlink}">TRANSCRIPT</a></td>
    </tr>
</table>

<p class="STATS"><b>BORN: </b>{born}</p>
<p class="STATS"><b>LIVED: </b>{lived}</p>
<p class="STATS"><b>RECORDING MADE: </b>{date}</p>
<p class="STATS"><b>RECORDING LENGTH: </b>{length}</p>

<p style="text-align: left;" class="BODY">{summarypara1}</p>
<p style="text-align: left;" class="BODY">{summarypara2}</p>
<p style="text-align: left;" class="BODY">{summarypara3}</p>
<p style="text-align: left;" class="BODY"><i>{summarypostscript}</i></p>


</div>


</body>
</html>"""

jscript = """modal_creator ("{name}");"""

htmlscript = """<div class="IMGPRV" id="modal_button_{name}">
            <a href="javascript:;open_summary">
                <img class="IMGPRVM" src="PEOPLE/PHOTOS/THUMBS/{thumbs}" alt="{fullname}, {place}">
            </a>
            <a href="javascript:;open_summary" style="text-decoration: none; color: #000000;">
                {firstname}<br><b>{lastname}</b>
            </a>
        </div>"""

htmlmodalscript = """<div id="modal_{name}" class="modal">
    <div class="modal-content">
        <span class="modal_home"><img class="modal_home_icon" src="home_icon_filled.png"><img>HOME</span>
        <span class="modal_close">&times;</span>
        <iframe id="modal_iframe_{name}" src="PEOPLE/{iframe}" style="border:none; width:100%; height: 100%;"></iframe>
    </div>
</div>"""

name = input ("Enter interviewee's name: ")
fullname = input ("Enter interviewee's full name: ")
fullnamecaps = fullname.upper ()
image = input ("\nEnter image title: ")
thumbs = input ("Enter thumbnail image title: ")
iframe = input ("\nEnter interviewee's html page name: ")
firstname = input ("\nEnter first name: ")
lastname = input ("Enter last name: ")
born = input ("\nEnter born: ")
lived = input ("Enter lived: ")
place = lived
date = input ("Enter recording date: ")
length = input ("Enter recording length: ")
summarypara1 = input ("\nEnter first paragraph of summary: ")
summarypara2 = input ("\nEnter second paragraph of summary: ")
summarypara3 = input ("\nEnter third paragraph of summary: ")
summarypostscript = input ("\nEnter summary postscript: ")
cataloguelink = input ("\nEnter link to catalogue page: ")
recordinglink = input ("Enter link to catalogue page for audio recording: ")
transcriptlink = input ("Enter link to transcript document: ")
width = input ("\nEnter image width (as a percentage of total page width): ")

print ("\nCopy this text into the modal-script.js file:\n")

print (jscript.format(name=name))

print ("\nCopy this text into the grid section of the people.html file:\n")

print (htmlscript.format(name=name, fullname=fullname, thumbs=thumbs, firstname=firstname, lastname=lastname, place=place))

print ("\nCopy this text into the modals section of the people.html file:\n")

print (htmlmodalscript.format(name=name, iframe=iframe))

print ("")

# print (htmlpage.format(fullname=fullname, fullnamecaps=fullnamecaps, image=image, born=born, lived=lived, date=date, length=length, summarypara1=summarypara1, summarypara2=summarypara2, summarypara3=summarypara3, summarypostscript=summarypostscript, cataloguelink=cataloguelink, recordinglink=recordinglink, transcriptlink=transcriptlink, width=width))

# print ("")

# addToClipBoard(str(jscript.format(name=name)))

savedirectory = 'PEOPLE/'+name+'.html'

with open(savedirectory, 'w') as file:
    file.write(htmlpage.format(fullname=fullname, fullnamecaps=fullnamecaps, image=image, born=born, lived=lived, date=date, length=length, summarypara1=summarypara1, summarypara2=summarypara2, summarypara3=summarypara3, summarypostscript=summarypostscript, cataloguelink=cataloguelink, recordinglink=recordinglink, transcriptlink=transcriptlink, width=width))

# addToClipBoard(str(jscript.format(name=name)))

os.system('pause')