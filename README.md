# Introduction

I have designed a convention to standardize a workflow for when I practice animation. This is Mono. It offers a pipeline that caters to the stages of animation production. I consider the stages of development, preproduction, shotproduction, preproduction, and distribution.

<!-- Feels like the paragraph above needs more here. -->

This is a living document. It is updated when I need to make improvements to it. My intention is for Mono to evolve into something useful.

## Goal

* Develop standardized rules and conventions to guide production of an animation exercise or very short animated film.

## What is Mono?

Mono is a workflow that sets rules and conventions to guide me along when I'm studying, practicing, and making animation. The workflow features a production-like pipeline.

## Background

I made Mono because I had found that inconsistencies arose between each of my productions as I animated more and more. Production assets had varying -- and often changing -- names and hierarchical organizations. What was one thing during my last exercise was a another during the next exercise. I soon identified the issue at hand to be the result of an unestablished production pipeline. I needed a consistent workflow. And that was how I conceived Mono.


# Design

## Pipeline

A production pipeline according to Urchin

> can be considered to be an amalgam of
> * Production Software; i.e. what you use to make stuff, which spills into file formats and capabilities, can also include automation / project specific software that depends on project practices.
> * Standards and Best practices: naming conventions, project file organization, dos and don’ts, limits on poly count, image size, etc.
> * Pipeline software: any software or scripts that automate the pipline, project on a metalevel, or enforce the best practices, or better, allow only those best practices to be used (i.e. instead of using append/link, use the project approved asset manager, which only links in predictable ways)

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
                bg ; Because a single background art can be used in multiple
                shots across different scenes, background art lives outside the
                sequence and shot folder. By keeping background art in a fixed
                location, we can reference background across different shots.
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


# Deliverables

**Storage & organization**


# Reading

The articles below helped me a lot in understanding what I needed to make:

* [Managing Animation Pipelines (on Internet Archive)](http://web.archive.org/web/20160525161931/https://urchn.org/post/managing-animation-pipelines) by [Urchin](https://urchn.org)
