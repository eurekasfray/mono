# Introduction

I have designed a convention to standardize a workflow for when I practice animation. This is Mono. It offers a pipeline that caters to the stages of animation production. I consider the stages of development, preproduction, shotproduction, preproduction, and distribution.

<!-- Feels like the paragraph above needs more here. -->

This is a living document. It is updated when I need to make improvements to it. My intention is for Mono to evolve into something useful.

## Goal

* Develop standardized rules and conventions to guide production of an animation exercise or very short animated film.

## What is Mono?

Mono is a workflow that sets rules and conventions to guide me along when I'm studying, practicing, and making animation. The workflow features a production-like pipeline.

## Background

I made Mono because I had found that inconsistencies arose between each of my productions as I animated more and more. Production assets had varying &mdash; and often changing &mdash; names and hierarchical organizations. What was one thing during my last exercise was a another during the next exercise. I soon identified the issue at hand to be the result of an unestablished production pipeline. I needed a consistent workflow. And that was how I conceived Mono.


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

<!--
TODO:
Make each principle in the following format: Principle {n}. {Title}. {Paragraph about with about 160 characters}.
-->

* Principle 1. Originals and derivatives. Separate derived files from their originals. By keeping the original files in one place we can link derived files back to the originals. This applies to linking project files to source files.

* Principle 2. Organization describes how files are grouped according to content, usage or value.

* Principle 3. -- Storage is how you handle the files: What's in a folder? What folder names you use? How you design the folder hierarchy.

* Principle 4. Flexibility. Offer enough of a framework for flexibility.

* Principle 5. DRY. Don't repeat yourself. This applies to directory names. Do not use file organization that requires for you to have two or layouts that repeat each other.


# Directory layout

    /Source                                                                         contains originals for project files and exports
       /
    /Exports                                                                        contains deliverables
    /ProjectFiles                                                                   contains project files

    {ProjectName}
        Assets
            audio
                music
                    m01_Artist_Title.psd
                    m01_Artist_Title.txt
                score
                    s01_Composer_Title.wav
                    s01_Composer_Title.txt
                voicerough
                    CharacterName_sc01_Blurb.wav
                voicefinal
                    CharacterName_sc01_Blurb.wav
                sfxrough
                    sc01_fr001_sh01sc05_Description.wav
                sfxfinal
                    sc01_ff001_sh01sc05_Description.wav
            readme
                Exercise.txt
                Readme.txt
            story
                Concept.txt
                Script.txt
            characters
                Starlord
                    reference
                    model
                    art
            environments
                Space
                    reference
                    model
                    art
            props
                Laser
                    references
                    model
                    art
            storyboard
                sb_p01_r1.png
            titles
                opening
                    references
                    art
                intertitle
                    references
                    art
                subtitle
                    references
                    art
                closing
                    references
                    art
            animatic
                a01_r01_yyyymmdd.mov
            layout
                sc01_sh01,sh04.png ; A layout can be used for several scenes
                sc01_sh05.png
                sc01_sh06-sh10.png
            shot
                bg
                    bg01_starshipLobbyStairWide.psd
                    bg01_starshipLobbyStairWide.png
                    ...
                sq01_chase
                    sc01
                        sc01_dopesheet.psd
                        sc01_sh1
                            sc01_sh01.tvp
                            rough
                                rough_sc01_sh01_f0001.tiff
                                ...
                            cleanup
                                cleanup_sc01_sh01_f0001.tiff
                                ...
                            paintandink
                                paintandink_sc01_sh01_f0001.tiff
                                ...
                            final
                                final_sc01_sh01_f0001.tiff
                                ...
        Deliverables
            video
            audio
            images

        ProjectFiles
            shotprod
                bg
                    bg_starshipLobby.psd
                sq01_chase
                    sc01_sh1
            edit
                premiere
                    edit.prproj
                animatic
                    a01_r01_yyyymmdd.prproj
            video
                animatic
                    a01_r01_yyyymmdd.mov


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

`Shot` is short for `shotproduction`. This folder has the following conventions:

<!-- Let each paragraph have a consistent number of characters like say 400 -->

* `bg` (*folder*): Stores background art. Because a single background art can be used in multiple shots, background art lives outside the sequence, scene, and shot folders, and resides in its own space. This makes us happy. Backgrounds can be referenced to since they're kept in a fixed location. Different shots can reference a single background.
* `bg\bg01_starshipLobbyStairWide.psd` (*project file*): This is the project file for a background. Its filename goes like this: *bg[n]_[name].[projectExt]*. *n* is a numerical identifier for the background art. Totally up to you. This number help us identity and make unique each background. *name* is a name for the background.
* `bg\bg01_starshipLobbyStairWide.png` (*exported file*): An exported background image. This file's name must be the same as the file from which it was exported. Its filename is written like this: *bg[n]_[name].[exportExt]*.

A film can be broken down into sequences, scenes, and shots. A film is a series of sequences. Each sequence is made of up of a series of scenes, which is composed of a series of shots. I've broken down each part into an orginization of folders.

* `sq01_chase` (*folder*): A sequence; stores scenes that help make it up. A sequence has an number and can be given a name, and is written like this: *sq[n]_[name]*.
* `sq01_chase\sc01` (*folder*): A scene. Each scene is numbered. Each scene folder is written like this: *sc[n]*.
* `sq01_chase\sc01\sc01_dopesheet.psd` (*project file*): The dope or exposure sheet. The dope sheet is named like this: `sc[n]_dopesheet.[projectExt]`. It keeps the scene number as *n*.
* `sq01_chase\sc01\sc01_sh01` (*folder*): This is a shot folder. A shot folder takes the scene number and gets a shot number. We name a shot folder like this: *sc[n]_sh[n]*.
* `sq01_chase\sc01\sc01_sh01\sc01_sh01.tvpaint` (*project file*): A shot animation project file. Animation work is done in this project file. It takes the scene number and the shot number. We name this file like this: *sc[n]_sh[n].[projectExt]*.


# Deliverables

**Storage & organization**


# Conventions

* *n* may padded with zeroes (e.g. 001) or it may not (e.g. 1).
* *name* is written in lowerCamelCase,


# Reading

The articles below helped me a lot in understanding what I needed to make:

* [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines) by [Urchin](https://urchn.org)
