# Vim is Neat.

### Why Vim?
Quite possibly my favorite feature of vim is how quickly I can get it running. Given the "just make it a webapp and ship chrome with it" philosophy that developers have taken to these days, it's refreshing to have something that I can pop open and not have to worry about it eating my resources if I tab out of it. It's reliable. I've never had it hang on me or even crash unlike every other program I've ever used. And even if my computer did miraculously shut down, I can always recover anything I didn't save with the .swp files.

Something _very_ nice for someone who uses an array of operating systems and devices is the fact that it runs anywhere. This is the text editor equivalent of _Doom_. Anything with a unix terminal likely already has it installed. And with vim being written in C, practically anything can install it given they can compile it. And most of all, it's **free**, both as in freedom and as in beer. Nearly every single modern editor (sublime, vscode, atom) contains spyware, analytics, and phones home whenever it can. It's nice to know that there exists a piece of software that isn't silently stealing your data.

### No, Seriously. Why Vim?
I know everything up to this point has been small things like not hogging ram or selling your data, so I'll get into the good stuff. It's fast. The keybinds are a bit unintuitive at first, but once I learned them I was hooked. Every other editor I tried using after just didn't work as well. Sure they had all the same shortcuts (albeit using modifier keys), but the flaw is at the core of graphical editors: UI.

I'm not saying having a GUI is a bad thing; I couldn't imagine myself using a terminal web browser over Firefox. But these are entirely different matters. A web browser's goal is to browse the web, scroll through pages, look at images, and give your bad opinions on text editors. While the purpose of a text editor is to edit text. You really don't need a mouse for that. Vim was made in a time prior to the popularization of mice (or arrow keys for that matter, hence why hjkl is used in vim). And it works! Really well in fact. As a programmer, the only thing I do is write code. I type. I don't want to have to stop, grab my mouse, and click a button to do something or open a file. With vim I don't have to do that, there exists a keybind for every single action. And using hjkl rather than arrow keys worked out too, as the arrow keys produce a similar problem in removing my hand from the center of my keyboard.

And the bindings themselves are legitmately good. If they weren't, why would anyone bother with a text editor from the 70's, when better, more modern editors exist? How come these "modern" editors fall out of favor every 5 years, only to be replaced by something flashier? If the bindings weren't good, why would every modern editor support them to some capacity?

### Other Nice Things
I used to use sublime text briefly a few years back. I'd open it up, and open a terminal up with it so that I could compile/run my code. So whenever I'd finish something, I'd have to go to that other window, punch in the command, and see what happens. That was one of the driving forces to me jumping to visual studio code a while later, as it had the terminal build right into the editor. Little did I realize that vim had me covered there too, a simple `:!commandhere` would turn vim's window into a terminal, and once I was done, turn it right back. This had other neat ramifications, such as being able to make a git commit _all within my editor_ or being able to manipulate my file system without popping open another window.

And who could forget the .vimrc, vim's config file. I have mine right [here](https://github.com/TaizWeb/dotfiles/blob/master/.vimrc), so whenever I start using a new machine, assuming it has vim installed, I can just go download that file and have all my base settings instantly working. No mess trying to export your settings like with most editors, if you're clever enough to create symlinks between your config and a git repo (I explained this in my dotfiles repo), you can have a cloud backup of everything. My .vimrc's been going four years strong, and never once have I lost it in a move.

I'm even writing this blog post in vim. What was once my programming tool later become my go-to tool for every time I write something. It has a built in spellcheck, word counter, and bindings to boot. You can jump paragraphs, sentences, words, characters, all in a single key. And I should also mention that vim can open very very very large files as well. In one case the only tool I had to open a log file was either vim or the cat command, as everything else just ate up all my memory and froze. So as I type up my 801 page autobiography in a single text file, I'll never have to worry about sparing the details in fear of it becoming too bloated for anything to open. I'll be sure to install vim on my publisher too in case he tries to tell me nobody's going to have that printed in mass quantities.

### Plugins
When your editor's nearly twice your age, you better bet that every idea for it that could have possibly been conceived has been. Here's a few of my favorites:

[Vundle](https://github.com/VundleVim/Vundle.vim)
This list wouldn't go very far without this. This is a package manager of sorts for vim, one of many. Personally the only reason I use it is because it's the one I randomly picked years ago. But it's also never given me any problems, so it's what I use.

[Syntastic](https://github.com/vim-syntastic/syntastic)
I love this. I hardly notice it usually, but it'll tell me whenever I save a programming file if I messed up anywhere, saving me from compiling and _then_ finding out it's broken. It seems to work for any programming language I try as well, which is also nice.

[ctrl-p](https://github.com/ctrlpvim/ctrlp.vim)
No, it doesn't print. Rather, it opens up a fuzzy search bar. So I can drunkenly type in some part of a file I'm looking to open and it'll figure out what I need. Or I can type in the filetype and get a list of all of them that exist in my directory (useful for larger projects I work on).

[vim-fugitive](https://github.com/tpope/vim-fugitive)
A git wrapper so good, it's criminal! Earlier I was going on about how useful vim's ability to run terminal commands alongside it was, but this is some next level stuff. I can resolve merge conflicts, commit and push changes, and alter branches _natively_ inside vim. So rather than swapping to the terminal, I'll have stuff like the commit message able to be done right in a split vim window.

[supertab](https://github.com/ervandew/supertab)
It's basically vim autocomplete. I know, I know, there's better plugins such as youcompleteme that do it better (and with language context), but I found it too heavy to want to use on something like vim. That said, supertab is something I'd never want to be without for long in any vim session.

