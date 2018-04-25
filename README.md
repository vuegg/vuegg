<p align="center">
  <a href="https://vuegg.github.io/" target="_blank">
    <img width="180" src="https://vuegg.now.sh/static/vuegg-fam.svg">
  </a>
</p>
<h1 align="center">vuegg</h1>
<p align="center"><strong>vue</strong>.js <strong>G</strong>UI <strong>g</strong>enerator</p>
<p align="center">[ Mockups and code in one go! ]</p>

</br>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-%5E2.5-41b883.svg?longCache=true" alt="vue">
  </a>
  <a href="https://github.com/vuegg/vuegg/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg?longCache=true" alt="mit">
  </a>
  <a href="https://travis-ci.org/vuegg/vuegg/branches">
    <img src="https://img.shields.io/travis/vuegg/vuegg/master.svg" alt="travis-ci">
  </a>
</p>

</br>

## About vuegg

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3413bed1e8ec41ea89582c042bcd8b55)](https://app.codacy.com/app/alxpez/vuegg?utm_source=github.com&utm_medium=referral&utm_content=vuegg/vuegg&utm_campaign=badger)

Scaffold vuejs projects by dragging-dropping components directly into the visual editor and moving-resizing them to your choice. Vuegg leverages the creation of the pages and routes of your app/website, eases the styling work and helps to achieve a rapid-prototyping workflow (... at least in theory).

The aim of this project is to merge designing and prototyping into one single process. Whenever you're happy with what you see on the screen, just get your code.

</br>

<img style="border: 1px solid #e0e0e0; border-radius: 5px" src="https://vuegg.github.io/static/editor.png">


</br>

## Current Features

* Mockup / prototype by drag'n'drop components and move/resize them
* Support for standard Mouse and Keyboard combinations
* Responsive preview (phone, tablet, web)
* Basic set of HTML5 elements
* Material design components ([vue-mdc-adapter](https://github.com/stasson/vue-mdc-adapter))
* [Vuejs](https://github.com/vuejs/vue) sources generation (download .zip)
* Connect with GitHub (save/load vuegg projects)
* Local persistence to save the work in progress
* ... more to come with time

</br>

## Keyboard Shortcuts

### Selection
* **Mouse down + Drag + Mouse up**: Draw a selection area
* **Ctrl [or Meta] + Click**: Select outer-most item, or parent container
* **Ctrl [or Meta] + Shift + Click**: Add [outer-most] item to selection
* **Esc**: Clear selection

### Undo / Redo
* **Ctrl [or Meta] + Z**: Undo last action
* **Ctrl [or Meta] + Shift + Z**: Redo last action

### Copy / Cut / paste
* **Ctrl [or Meta] + C**: Copy selection
* **Ctrl [or Meta] + X**: Cut selection
* **Ctrl [or Meta] + V**: paste selection

### Delete
* **Delete [or Backspace]**: Deletes selection

</br>

## Roadmap

Off the top of my head, I foresee the following features to be developed for the next releases:

- [ ] Hold shift to maintain aspect ratio on manual resize
- [ ] Ability to zoom-in / zoom-out in the editor
- [ ] Allow the insertion of raw CSS rules (expert mode)
  - [ ] Identify possible risks
- [ ] Add extra styles controls
  - [ ] BoxShadow
  - [ ] Overflow
  - [ ] TextOverflow
- [ ] Manage creation/edition of custom components
  - [ ] Transition to custom component (group/ungroup)
  - [ ] Implement custom component editor view
- [ ] Implement tree navigator to visualize page structure

</br>

## Run vuegg locally

### Auto-run
``` bash
# install, build and serve
npm run vuegg
```
Navigate to `localhost:5000` to serve (a production-ready) vuegg.

</br>

### Step-by-step setup

##### 1. installation
``` bash
# install client & server dependencies
npm run install:all

# OR install only client / server
npm run install:client
npm run install:server
```

##### 2. development
``` bash
# serve vuegg-client with hot reload
npm run client

# start vuegg-server (auto-restarts on changes)
npm run server
```
Navigate to `localhost:8080` to serve *vuegg-client* with hot-reload (development server).

> For detailed explanation on how things work on the client side, checkout the **[vuejs-templates/webpack](http://vuejs-templates.github.io/webpack/)** guide and docs for **[vue-loader](http://vuejs.github.io/vue-loader)**.

> For development *vuegg-server* will only generate vuejs projects (it won't be serving *vuegg-client* resources). Auto-restart capabilities possible thanks to **[nodemon](https://github.com/remy/nodemon)**.

> The above commands should be run in separate terminal instances.

##### 3. production
``` bash
# build vuegg-client for production with minification
npm run build

# start vuegg-server at localhost:5000
npm run start
```
Navigate to `localhost:5000` to serve (a production-ready) vuegg.

</br>

## History & current state

The project was born as a sandbox for me to get started on the [vue](https://github.com/vuejs/vue) world, in fact its ~~un~~original name was vuexample (*very unique*, I thought at the time).

Not long after it became a personal challenge, I went on adding new features (mainly things I feel like learning) and gave it a proper name (and even a *face*). Eventually I considered it to be ready for the open-source community... and here is *vuegg*, my pet project.

</br>

## Contribute

Vuegg is a concept project (and work-in-progress too), feel free to fork it or contribute however possible. You've got a feature idea? Open an [issue](https://github.com/vuegg/vuegg/issues)! Are you up to the task of implementing it? Open a [PR](https://github.com/vuegg/vuegg/pulls)!

Help me make vuegg grow!

</br>

## Donate

Do you like vuegg? :hatching_chick:

As for today, this project is developed and maintained with :heart: by me ([@alxpez](https://github.com/alxpez)), on my spare time, after work hours and during homie weekends. There's still much work to do and ideas waiting to come afloat.

Contribution is the most desirable help for keeping up the project, but for those with no much time in hands that still want contribute...

Wanna <a href="https://www.buymeacoffee.com/alxpez" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/black_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a> ?

Your donation will help me to stay awake during those hours I should be sleeping.
