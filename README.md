# Introduction

I have designed a convention to standardize a workflow for my exercises and animation practices. This is Mono. It caters to the stages of animation production, which include development, preproduction, shotproduction, preproduction, and distribution, offering a standard pipeline.

This is a living document. I update it when I need to make improvements. My intention is for Mono to evolve into something useful.

## Goal

Develop standardized rules and conventions to guide production of an animation exercise or very short animated film.

## What is Mono?

Mono is a workflow that establishes rules and conventions that guide the production of animation exercises. The workflow features a production pipeline and methods of asset management. Mono is designed explicitly for animation exercises (though this may change in the future as Mono grows and adapts to the needs and wants of its user).

Mono treats animation exercises as very short films. An animation exercise and an animated short film share many similarities. What sets them apart is their quality.

## Background

Mono was designed to solve an issue that I faced. I had found that the process of making animation exercises arose increasing inconsistencies between each of my productions. Production assets had varying -- and often changing -- names and hierarchical organizations. What was one thing during the last production was a another during the next one. I soon identified the issue at hand to be the result of an unestablished production pipeline and unestablished means of managing production assets. Obviously, I needed a consistent workflow. That was the conception of Mono.


# Principles

The file-organization conventions follows some principles that allow it to be useful.

<!--
TODO:
Make each principle in the following format: Principle {n}. {Title}. {Paragraph about with about 160 characters}.
-->

* Principle 1. Originals and derivatives. Separate derived files from their originals. By keeping the original files in one place we can link derived files back to the originals. This applies to linking project files to source files.

* Principle 2. Organization describes how files are grouped according to content, usage or value.

* Principle 3. -- Storage is how you handle the files: What's in a folder? What folder names you use? How you design the folder hierarchy.

* Principle 4. Flexibility. Offer enough of a framework for flexibility.


# Directory layout

/Source                                                                         contains originals for project files and exports
   /
/Exports                                                                        contains deliverables
/ProjectFiles                                                                   contains project files

{ProjectName}
Assets
Assets\audio
Assets\audio\music
Assets\audio\music\m01_Artist_Title.wav
Assets\audio\music\m01_Artist_Title.txt
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
       storyboard
           p01.png
       animatic
           a01_r01_yyyymmdd.mov
       layout
           sc01_sh01,sh04.png                                                  ; A layout can be used for several scenes
           sc01_sh05.png
           sc01_sh06-sh10.png
       shot
           bg                                                                  ; Background art lives outside the sequence and shot folder, because a single background art can be used in multiple shots across different scenes. By keeping background art in a fixed location, we can reference background across different shots.
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

       video
           animatic
               a01_r01_yyyymmdd.mov
