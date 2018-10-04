CLI Based Notes application using Nodejs
==========================================

CLI based note application helps to understand how note application work. here i have write code for read, write, List and Delete the note. 

you can import this module and work in your terminal 
 If you are using windows - Powershell or command prompt (Powershell recommended)
 If you are using Linux or mac - use terminal window to execute

<a href="https://www.buymeacoffee.com/amarnath" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>


# Install

```js
- Install [node](http://nodejs.org/download).
- Run `npm i amarnath-cli-notes`

```

#Help

```js


node app.js help

Commands:
  app.js add     create New note
  app.js list    List of all notes
  app.js remove  Remove note using title
  app.js read    read the note for given title

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]


 title: {
            describe: 'this is the title of note',
            demand: true, // true means Required field and false means not required
            alias: 't' // we can use both t or title to get title values
        },
        body: {
            describe: 'this is the Body of note',
            demand: true,
            alias: 'b'
        }

```

#Commands

```js


1) Create Note Command
----------------------

- Run `node app.js add --t='amarnath' --b='i am a software Developer' `

(or)

- Run `node app.js add --title='amarnath' --body='i am a software Developer'`

Result
-------
Give Command is : add
Here Showing Notes
---------------
Title: amarnath
Body: i am a software Developer


2) Read Note Command
--------------------

- Run `node app.js read --t='amarnath'`

(or)

- Run `node app.js read --title='amarnath'`


Result
------

Read amarnath
[ { title: 'amarnath', body: 'i am a software Developer' } ]
Here Showing Notes
---------------
Title: amarnath
Body: i am a software Developer


3) List All Notes Command
-------------------------

- Run `node app.js list`

Result
-------
Give Command is : list
List of Post
No of 5 Note(s)
---------------
Title: asdasd
Body: asdasdasasdasdd
Here Showing Notes
---------------
Title: asdgdfdaasjhfhd
Body: asdasdasasdasdd
Here Showing Notes
---------------
Title: asdgdfdaassadsadasdjhfhd
Body: asdasdasasdasdd
Here Showing Notes
---------------
Title: amarwin
Body: asdasdas
---------------
Title: amarnath
Body: i am a software Developer


4) Delete particular note command
---------------------------------

- Run `node app.js remove --t='amarnath'`

(or)

- Run `node app.js remove --title='amarnath'`

Result
------

Give Command is : remove
Notes have been succesfully removed


```



# cli

- Install [node](http://nodejs.org/download).
- Run `npm i amarnath-cli-notes`

```
# Author

 - Amarnath TSR (https://www.amarnath.xyz)

# license

MIT