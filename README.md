# Introduction

I have designed a workflow for when practicing animation. This is Mono. Mono sets rules and conventions to guide me along when I'm studying, practicing, and making animation. The workflow features a production-like pipeline which caters to the different stages of animation production &mdash; development, preproduction, shotproduction, preproduction, and distribution.

I made Mono for various reasons. First, devising a method for storing the files weighed heavily on me each time I performed an exercise. Second, inconsistencies arose between each exercise more and more. Production assets had varying &mdash; and often changing &mdash; names and hierarchical organizations. What was one thing during my last exercise was a another during the next exercise. I needed a consistent way to work. What I needed was a workflow. I needed a pipeline.

[//]: # (Feels like the paragraph above needs more)

This is a living document. It is updated when I need to make improvements to it. My intention is for Mono to evolve into something useful.

## Goal

* Develop standardized rules and conventions to guide production of an animation exercise or very short animated film.


# Design

## Pipeline

A production pipeline according to Urchin "can be considered to be an amalgam of"
> * Production Software; i.e. what you use to make stuff, which spills into file formats and capabilities, can also include automation / project specific software that depends on project practices.
> * Standards and Best practices: naming conventions, project file organization, dos and don’ts, limits on poly count, image size, etc.
> * Pipeline software: any software or scripts that automate the pipline, project on a metalevel, or enforce the best practices, or better, allow only those best practices to be used (i.e. instead of using append/link, use the project approved asset manager, which only links in predictable ways)
>
> *[Urchin](https://urchn.org), [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines)*

## Principles

The file-organization conventions follows some principles that allow it to be useful.

[//]: # (Note:)
[//]: # (* Each principle must be written in the following format: Principle {n}. {Title}. {Paragraph about 185-200 characters long}.)

* **Principle 1** - Originals and derivatives. Separate derived files from their originals. By keeping the original files in one place we can link derived files back to the originals. This means we can link source files to project files.

* **Principle 2** - Storage. How do you handle the files: What's in a folder? What folder names you use? How you design the folder hierarchy.

* **Principle 3** - Organization. This describes how files are grouped according to content, usage or value.

* **Principle 4** - Flexibility. Offer enough of a framework for flexibility.

* **Principle 5** - DRY (Don't repeat yourself). This applies to directory names. Do not use file organization that requires for you to have two or layouts that repeat each other.


# Conventions

* *n* may padded with zeroes (e.g. 001) or it may not (e.g. 1).
* *name* is written in lowerCamelCase.
* *title* is written in UpperCamelCase.
* *yyyymmdd* represents a date where *yyyy* is the year, *mm* is the month, and *dd* is the day of the month. For example, the date 20170228 means the 28th of February, 2017.


# Directory layout

    /Source                                                                         contains originals for project files and exports
       /
    /Exports                                                                        contains deliverables
    /ProjectFiles                                                                   contains project files

    {ProjectName}/
        Assets/
            audio/
                music/
                    music_Artist_Title.mp3
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
                    reference/
                    model/
                    art/
            environments/
                Space/
                    reference/
                    model/
                    art/
            props/
                Laser/
                    references/
                    model/
                    art/
            storyboard/
                sb_pg01_r1.png
            titles/
                opening/
                    references/
                    art/
                intertitle/
                    references/
                    art/
                subtitle/
                    references/
                    art/
                closing/
                    references/
                    art/
            animatic/
                a01_r01_yyyymmdd.prproj
                a01_r01_yyyymmdd.mov
            layout/
                sc01_sh01,sh04.png ; A layout can be used for several scenes
                sc01_sh05.png
                sc01_sh06-sh10.png ; A layout can be used in a range of shots
            shot/
                bg/
                    bg01_starshipLobbyStairWide.psd
                    bg01_starshipLobbyStairWide.png
                    ...
                sq01_chase/
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
            post/
                edit/
                    edit.prproj

        Deliverables/
            video/
            audio/
            images/


# Assets

**Storage & organization**

TBD

## Story

    Assets\story

## Audio

    Assets\audio

## Characters

    Assets\characters

## Environments

    Assets\environments

## Props

    Assets\props

## Titles

    Assets\titles

## Storyboard

    Assets\storyboard

## Animatic

    Assets\animatic

## Layout

    Assets\layout

## Shot

    Assets\shot

**Shot:** `shot` (*folder*): This is the shot folder. 'Shot' is short for 'shot-production'. Shot-production is the process of animating and bringing the story and characters to life. All the film's shots are animated at this stage. Shot-production begins once development and preproduction are completed. The purpose of this folder is to store and organize all things related to shot-production. The shot folder is so forth organized by the following conventions:

[//]: # (Let each paragraph have a consistent number of characters like say 400)

### Background

**Background:** `shot/bg` (*folder*): This folder stores background art. Background art lives at the same heirarchical level as the *sequence*, *scene*, and *shot* folders. This makes us happy, because a single background art can be used in multiple shots. That means, background files can be referenced to since they remain in a fixed location. Different shots can reference a single background, as opposed to having the same background file copied to different shot folders.

**Background project file:** `shot/bg/bg01_starshipLobbyStairWide.psd` (*project file*): This is a project file for a background. The name of a background-art file follows this convention: *bg[n]_[name].[projectExt]*. Background-art files always begin with the mnemonic *bg*. *n* is a numerical identifier for the background art. This number help us identity and make unique each background.  How you number your backgrounds is totally up to you. You may fill a number with zeroes; for example: a background numbered `1` will be named `bg01...`. *name* is a name for the background. The name of a background should be descriptive. In `bg01_starshipLobbyStairWide` for example the name gives you an idea of where you are. Other descriptive names are desertOasisAerial, desertDuneHorizon, hotelRoom301Window,

**Background export file:** `bg/bg01_starshipLobbyStairWide.png` (*exported file*): An exported background image. The name of this must be the same as the file from which it was exported. Its filename is written like this: *<project_file_name>.[exportExt]*.

### Sequence, Scenes, and Shots

A film can be broken down into sequences, scenes, and shots. A film is a series of sequences. Each sequence is made of up of a series of scenes. Lastly, scene is composed of a series of shots. I've broken down each part into an organization of folders.

**Sequence:** `sq01_chase` (*folder*): This is a sequence. This folder stores the scenes that help make up the sequence. We write a sequence like this: *sq<n>_<name>*. A sequence is given the mnemonic *sq* (SeQuence). A sequence must have a number *n*, and can be given a *name*. The name of our sequence is 'chase'. It stands for a spaceship chase sequence.

**Scene:** `sq01_chase/sc01` (*folder*): This is a scene. This folder stores the shots that make up a schene. We write a scene like this: *sc[n]_[name]*. A scene is given the mnemonic *sc*. A scene must have a number *n*, and can be given a *name*.

**Dopesheet:** `sq01_chase/sc01/sc01_dopesheet.psd` (*project file*): The dope or exposure sheet. The dope sheet is named like this: *sc[n]_dopesheet.[projectExt]*. This file inherits the scene number in its filename as *n*.

**Shot:** `sq01_chase/sc01/sc01_sh01` (*folder*): This is a shot folder. We name a shot folder like this: *sc[m]_sh[n]_[name]*. A shot folder takes the sequence mnemonic *sc* and inherits the scene number as *m* in to keep scene and shot together. Then, the shot folder is given the mnemonic *sh* and must have a shot number *n*.

**Shot animation project file:** `sq01_chase/sc01/sc01_sh01/sc01_sh01.tvpaint` (*project file*): A shot animation project file. Animation work is done in this project file. It inherits the scene number and the shot number. We name this file like this: *sc[n]_sh[n].[projectExt]*.

**Roughs:** `sq01_chase/sc01/sc01_sh01/rough` (*folder*): This folder stores the rough animation frames for the shot.

**Rough frame image file:** `sq01_chase/sc01/sc01_sh01/rough/rough_sc01_sh01_f0001.tiff` (*exported file*): This is a frame for the roughs of the shot. We name the rough-animation frame like this: `rough_sc[k]_sh[m]_f[n].[exportExt]`. A rough frame is prefixed with 'rough'. It inherits the sequence mnemonic and sequence number as *k*, and it inherit the shot mnemonic and shot number as *m*. The frame is given the mnemonic *f*, and must have a frame number *n*. Lastly, the frame has an file extension *exportExt*. THis is the file extension of whatever file format you decide to use &mdash; whether it is .png, .jpg, .tiff, etc.

**Tiedowns:** `sq01_chase/sc01/sc01_sh01/tiedown` (*folder*): TBD

**Tiedown frame image file:** `sq01_chase/sc01/sc01_sh01/tiedown/tiedown_sc01_sh01_f0001.tiff` (*exported file*): TBD

**Cleanup:** `sq01_chase/sc01/sc01_sh01/cleanup` (*folder*): TBD

**Cleanup frame image file:** `sq01_chase/sc01/sc01_sh01/cleanup/cleanup_sc01_sh01_f0001.tiff` (*exported file*): TBD

**Line+color:** `sq01_chase/sc01/sc01_sh01/line+color` (*folder*): TBD

**Line+color frame image file** `sq01_chase/sc01/sc01_sh01/line+color/line+color_sc01_sh01_f0001.tiff` (*exported file*): TBD

**Final** `sq01_chase/sc01/sc01_sh01/final` (*folder*): TBD

**Final frame image file** `sq01_chase/sc01/sc01_sh01/final/final_sc01_sh01_f0001.tiff` (*exported file*): TBD


# Deliverables

**Storage & organization**




# Reading

The articles below helped me a lot in understanding what I needed to make:

* [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines) by [Urchin](https://urchn.org)
* [How does Pixar organize files?](https://www.quora.com/How-does-Pixar-organize-files) on [Quora](https://www.quora.com)
* [File Management Overview](http://www.dpbestflow.org/file-management/file-management-overview) by Richard Anderson and Peter Krogh
