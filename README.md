# Introduction

I created a workflow to be used when practicing paperless/traditional animation: This is Mono. Mono sets rules and conventions to help guide you along when studying, practicing, and making animation. The workflow features a production-like pipeline that caters to the different stages of animation production, including development, preproduction, shotproduction, ~~preproduction~~, and ~~distribution~~.

Mono was created for a few reasons. I had a problems while practicing animation. First, creating a file organization for storing the project files can be a weighty. It takes time to plan and organize files. Second, inconsistencies tend to arise between each exercises more and more. Production assets had varying &mdash; and often changing &mdash; naming schemes and hierarchical organizations. What was one thing during my last exercise was a another during the next exercise. I needed a consistent way to work. What I needed was a workflow.

[//]: # (Feels like the paragraph above needs more)

This is a living document. It is updated when I need to make improvements to it. My intention is for Mono to evolve into something useful.

## Goal

* Develop standardized rules and conventions to guide production of an animation exercise or very short animated film.


# Design

## Pipeline

In this section, the design of the pipeline is discussed.

What is a pipeline? According to Urchin, a **production pipeline** can be considered of as an amalgamation of **production software**, **standards and best practices**, and **pipeline software**.
> * Production Software; i.e. what you use to make stuff, which spills into file formats and capabilities, can also include automation / project specific software that depends on project practices.
> * Standards and Best practices: naming conventions, project file organization, dos and don’ts, limits on poly count, image size, etc.
> * Pipeline software: any software or scripts that automate the pipline, project on a metalevel, or enforce the best practices, or better, allow only those best practices to be used (i.e. instead of using append/link, use the project approved asset manager, which only links in predictable ways)
>
> *[Urchin](https://urchn.org), [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines)*

### Goal

Mono is takes its opinion on the enforcement of standards and best practices, and pipeline software. Apart from being a mental model of a pipeline, Mono will eventually become a software to help relieve some mental overhead by providing a complementary pipeline software to help enforce it's standards and practices.

## Principles

The file-organization conventions follows some principles that allow it to be useful.

[//]: # (Note:)
[//]: # (* Each principle must be written in the following format: Principle {n}. {Title}. {Paragraph about 185-200 characters long}.)

* **Principle 1** - Originals and derivatives. Separate derived files from their originals. By keeping the original files in one place we can link derived files back to the originals. This means we can link source files to project files.

* **Principle 2** - Storage. How do you handle the files: What's in a folder? What folder names you use? How you design the folder hierarchy.

* **Principle 3** - Organization. This describes how files are grouped according to content, usage or value.

* **Principle 4** - Flexibility. Offer enough of a framework for flexibility.

* **Principle 5** - DRY (Don't repeat yourself). This applies to directory names. Do not use file organization that requires for you to have two or layouts that repeat each other.

* **Principle 6** - Cohesive. This applies to Principle 3. The organization of files and folders shall be cohesive; meaning, files are grouped according to their content, usage, and value. Files that are closely related to each other in content, usage, and value are grouped together.



# Breakable rules

The workflow is made to give a guide on how to get things done, but does not enforce them. We are free to break use dfifferent names, as long as we keep the naming schemes.

# Naming conventions

All files have the same general naming scheme. Each file name stores information. File names carry semantic information about a file &mdash; what it is, what it contains, what it is for. The goal of the filename is to provide as much information as necessary to to you.

In the naming scheme, single underscore characters are used to separate information. each piece of information is separated by the underscore character. The more important information should appear first, followed by the lesser important information.

## Files

### Format

The naming scheme goes like this: *[information]/_[information]/_[information]/_[...].[extension]*. For example, a *shot project file* has this naming scheme: *[sceneNumber]/_[shotNumber]/_[shotName].[extension].
* *n* may be padded with zeroes (e.g. 001) or it may not (e.g. 1).
* *name* is written in lowerCamelCase.
* *title* is written in UpperCamelCase.
* *yyyymmdd* represents a date where *yyyy* is the year, *mm* is the month, and *dd* is the day of the month. For example, the date 20170228 means the 28th of February, 2017.

[//]: # (### Information)
[//]: # (### Prefixes)
[//]: # (### Separators)

# Directory layout

```
{ProjectName}/
    Assets/
        audio/
            music/
                music_Artist_Title.wav
                music_Artist_Title.txt
            score/
                score_Composer_Title.wav
                score_Composer_Title.txt
            voicerough/
                voicer_CharacterName_sc01_Blurb.wav
            voicefinal/
                voicef_CharacterName_sc01_Blurb.wav
            sfxrough/
                sfxr_sc01_fr001_sh01sc05_Description.wav
            sfxfinal/
                sfxf_sc01_ff001_sh01sc05_Description.wav
            foleyrough/
                foleyr_sc01
            foleyfinal/
                foleyf
        readme/
            Exercise.txt
            Readme.txt
        story/
            Concept.txt
            Script.txt
        characters/
            Starlord/
                references/
                design/
                model/
                art/
        environments/
            Space/
                references/
                design/
                model/
                art/
        props/
            Laser/
                references/
                design/
                model/
                art/
        storyboard/
            sb_sq01.storyboard
            sb_pg01_r1.png
        titles/
            opening/
                references/
                design/
                final/

            intertitle/
                references/
                design/
                final/
            subtitle/
                references/
                design/
                final/
            closing/
                references/
                design/
                final/
        animatic/
            a01_r01_yyyymmdd.prproj
            a01_r01_yyyymmdd.mov
        layout/
            l01_sc01_sh01,sh04.png ; A layout can be used for several scenes
            l01_sc01_sh05.png
            l01_sc01_sh06-sh10.png ; A layout can be used in a range of shots
    Shot/
        bg/
            bg01_starshipLobbyStairWide.psd
            bg01_starshipLobbyStairWide.png
            ...
        sq01_openingTitle/
            ...
        sq02_chase/
            sc01/
                sc01_dopesheet.psd
                sc01_sh1/
                    sc01_sh01.tvp
                    rough/
                        rough_sc01_sh01_f0001.tiff
                        ...
                    tiedown/
                        tiedown_sc01_sh01_f0001.tiff
                        ...
                    cleanup/
                        cleanup_sc01_sh01_f0001.tiff
                        ...
                    line+color/
                        lineandcolor_sc01_sh01_f0001.tiff
                        ...
                    final/
                        final_sc01_sh01_f0001.tiff
                        ...
    Post/
        edit/
            edit.prproj

    Deliverables/
        video/

        audio/
        images/

    Branding/
        poster/
            references/
            design/
            final/
        cover/
            references/
                coverr01_
            design/
                coverd01_panel1.psd
            final/
                coverf01_panel1_r1.psd
                coverf01_panel1_r1.png
```

# Project

`DwarfStarWars` (*folder*): This is the project directory and the name of the project. We use this directory to store the five main folders: `Assets`, `Shot`, `Post`, `Deliverables`, and `Branding`.

```
DwarfStarWars/
```


# Assets

`DwarfStarWars/Assets/` (*root folder*): This is the assets folder, also known as the source folder. It is called the 'Assets' folder because it used to store all the things needed to bring the idea and story to life as an animation. These assets are the ingredients needed to make the final version of the animation. Its purpose is to keep all ingredients in one easy-to-find place.

## Story

`~/Assets/story/` (*folder*): This is the story folder. Put all writings related to story in this folder.

### Concept

`~/Assets/story/concept.txt` (*document file*): This is the story concept. You Document all story concepts here. This can be a text file, image file, word-processing document, whatever.

### Script

`~/Assets/story/`**`script.txt`** (*document file*): This is the script.

## Audio

`~/Assets/audio/` (*folder*): TBD

**Music:** `~/Assets/audio/music/` (folder): TBD

**Score:** `~/Assets/audio/score/` (folder): TBD

**Voice rough:** `~/Assets/audio/voicerough/` (folder): TBD

**Voice final:** `~/Assets/audio/voicefinal` (folder): TBD

**Sound effects rough:** `~/Assets/audio/sfxrough` (folder): TBD

**Sound effects final:** `~/Assets/audio/sfxfinal` (folder): TBD

**Foley rough:** `~/Assets/audio/foleyrough` (folder): TBD

**Foley final:** `~/Assets/audio/foleyfinal` (folder): TBD

## Characters

**Characters:** `~/Assets/characters` (*folder*): TBD

## Environments

**Environments:** `~/Assets/environments` (*folder*): TBD

## Props

**Props:** `~/Assets/props` (*folder*): TBD

## Titles

**Titles:** `~/Assets/titles` (*folder*): Store all titles in this folder. The following types of titles are stored here:

### Opening titles

**Opening titles:** `~/Assets/titles/opening` (*folder*):

### Intertitles

**Intertitles:** `~/Assets/titles/intertitles` (*folder*): TBD

### Subtitles

**Subtitles:** `~/Assets/titles/subtitles` (*folder*): TBD

### Closing titles

**Closing title:** `~/Assets/titles/closing` (*folder*): TBD

## Storyboard

**Storyboard:** `~/Assets/storyboard` (*folder*): TBD

## Animatic

**Animatic**: `~/Assets/animatic` (*folder*): TBD

## Layout

**Layout:** `~/Assets/layout` (*folder*): TBD

# Shot

`DwarfStarWars/Shot` (*folder*): This is the shot folder. 'Shot' is short for 'shot-production'. Shot-production is the process of animating and bringing the story and characters to life. All the film's shots are animated at this stage. Shot-production begins once development and preproduction are completed. The purpose of this folder is to store and organize all things related to shot-production. The shot folder is so forth organized by the following conventions:

[//]: # (Let each paragraph have a consistent number of characters like say 400)

## Background

`~/Shot/bg` (*folder*): This folder stores background art. Background art lives at the same heirarchical level as the *sequence*, *scene*, and *shot* folders. This makes us happy, because a single background art can be used in multiple shots. That means, background files can be referenced to since they remain in a fixed location. Different shots can reference a single background, as opposed to having the same background file copied to different shot folders.

**Background project file:** `~/Shot/bg/bg01_starshipLobbyStairWide.psd` (*project file*): This is a project file for a background &middot; The naming scheme for a background project file follows this rule: *bg[n]_[name].[projectExt]*. The filename always begin with the mnemonic *bg*. *n* is a numerical identifier for the background art. This number help us identify and make unique each background. *name* is a name for the background. The name of a background should be descriptive. In `bg01_starshipLobbyStairWide` for example the name gives you an idea of where you are. *projectExt* is the file extension of the project file.

**Background export file:** `~/Shot/bg/bg01_starshipLobbyStairWide.png` (*exported file*): This is an exported background image. This file is the exported representation of the *background project file* &middot; Inherit the name of the export file from the *background project file*. For instance, if the name of the project file is `bg03_desertHorizon.tvp`, then the name of the *background export
 file* is `bg03_desertHorizon.png`.

## Sequence, Scenes, and Shots

A film can be broken down into sequences, scenes, and shots. A film is a series of sequences. Each sequence is made of up of a series of scenes. Lastly, scene is composed of a series of shots. I've broken down each part into an organization of folders.

### Sequence

`~/Shot/sq01_chase` (*folder*): This is a sequence. This folder stores the scenes that help make up the sequence. We write a sequence like this: *sq[n]_[name]*. A sequence is given the mnemonic *sq* (SeQuence). A sequence must have a number *n*, and can be given a *name*. The name of our sequence is 'chase'. It stands for a spaceship chase sequence.

### Scene

`~/Shot/sq01_chase/sc01` (*folder*): This is a scene. This folder stores the shots that make up a schene. We write a scene like this: *sc[n]_[name]*. A scene is given the mnemonic *sc*. A scene must have a number *n*, and can be given a *name*.

**Dopesheet:** `~/Shot/sq01_chase/sc01/sc01_dopesheet.psd` (*project file*): The dope or exposure sheet. The dope sheet is named like this: *sc[n]_dopesheet.[projectExt]*. This file inherits the scene number from its parent to its filename as *n*.

### Shot

`~/Shot/sq01_chase/sc01/sc01_sh01` (*folder*): This is a shot folder. The purpose of this folder is to store the shot's project file and exported frames. You can create as many shot folders as there are shots in your film &middot; The shot folder uses this naming scheme: *sc[m]_sh[n]_[name]*. A shot folder takes the scene mnemonic *sc*, and inherits the scene number from its parent scene as *m*. Then, the shot folder is given the mnemonic *sh* (short for 'shot') and a shot number *n*. We keep the scene number with the shot because a shot belongs to a scene.

**Shot project file:** `~/Shot/sq01_chase/sc01/sc01_sh01/sc01_sh01.tvpaint` (*project file*): This is the shot's animation project file. The animation work is done in this project file. We name this file like this: *sc[n]_sh[n].[projectExt]*. It inherits the scene number and the shot number.

### Roughs, tiedowns, cleanup, and line & color

The animator passes over a shot or scene several times to complete the animation. These passes are called the roughs, tiedowns, cleanup, and line & color.

### Roughs

`~/Shot/sq01_chase/sc01/sc01_sh01/rough` (*folder*): The purpose of this folder is to store frames of the shot's rough animation.

**Rough frame image file:** `~/Shot/sq01_chase/sc01/sc01_sh01/rough/rough_sc01_sh01_f0001.tiff` (*exported file*): This is a frame of the shot's rough animation. This file would typically be exported from the *shot project file*. We name the rough-animation frame like this: `rough_sc[k]_sh[m]_f[n].[exportExt]`. A rough frame is prefixed with 'rough'. It inherits the sequence mnemonic and sequence number as *k*, and it inherit the shot mnemonic and shot number as *m*. The frame is given the mnemonic *f*, and must have a frame number *n*. Lastly, the frame has an file extension *exportExt*. THis is the file extension of whatever file format you decide to use &mdash; whether it is .png, .jpg, .tiff, etc.

### Tiedowns

`~/Shot/sq01_chase/sc01/sc01_sh01/tiedown` (*folder*): See **Roughs**.

**Tiedown frame image file:** `~/Shot/sq01_chase/sc01/sc01_sh01/tiedown/tiedown_sc01_sh01_f0001.tiff` (*exported file*): See **Rough frame image file**.

### Cleanup

**Cleanup:** `~/Shot/sq01_chase/sc01/sc01_sh01/cleanup` (*folder*): See **Roughs**.

**Cleanup frame image file:** `~/Shot/sq01_chase/sc01/sc01_sh01/cleanup/cleanup_sc01_sh01_f0001.tiff` (*exported file*): See **Rough frame image file**.

### Line+color

`~/Shot/sq01_chase/sc01/sc01_sh01/line+color` (*folder*): See **Roughs**.

**Line+color frame image file** `~/Shot/sq01_chase/sc01/sc01_sh01/line+color/line+color_sc01_sh01_f0001.tiff` (*exported file*): See **Rough frame image file**.

### Final

`~/Shot/sq01_chase/sc01/sc01_sh01/final` (*folder*): See **Roughs**.

**Final frame image file** `~/Shot/sq01_chase/sc01/sc01_sh01/final/final_sc01_sh01_f0001.tiff` (*exported file*): See **Rough frame image file**.


# Deliverables

**Storage & organization**

# Workflow/Pipeline

# Software

# Reading

The articles below helped me a lot in understanding what I needed to make:

* [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines) by [Urchin](https://urchn.org)
* [How does Pixar organize files?](https://www.quora.com/How-does-Pixar-organize-files) on [Quora](https://www.quora.com)
* [File Management Overview](http://www.dpbestflow.org/file-management/file-management-overview) by Richard Anderson and Peter Krogh
