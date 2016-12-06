set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" Syntax highlighter
Plugin 'scrooloose/syntastic'
Plugin 'Yggdroot/indentLine'
"Plugin 'elzr/vim-json'
"Plugin 'plasticboy/vim-markdown'
"Plugin 'othree/html5.vim'
"Plugin 'hail2u/vim-css3-syntax'
Plugin 'ap/vim-css-color'
"Plugin 'groenewege/vim-less'
Plugin 'pangloss/vim-javascript'
"Plugin 'walm/jshint.vim'
Plugin 'leafgarland/typescript-vim'
Plugin 'fatih/vim-go'

" Tab/Status bar modified view
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
" File finder
Plugin 'kien/ctrlp.vim'
Plugin 'mileszs/ack.vim'
" Git plugin
Plugin 'tpope/vim-fugitive'
Plugin 'airblade/vim-gitgutter'
" File/directory tree manager
Plugin 'scrooloose/nerdtree'
" Color schemes
Plugin 'tomasr/molokai'
Plugin 'altercation/vim-colors-solarized'
Plugin 'flazz/vim-colorschemes'
" Debuggers
Plugin 'joonty/vdebug'

call vundle#end()
filetype plugin indent on

" Clipboard
set clipboard=unnamedplus

" Interface
syntax enable
colorscheme molokai
set encoding=utf-8
set fileencodings=utf-8,cp1251
set t_Co=256
set number
set cursorline
set lazyredraw
set background=dark

" Solarized settings
let g:solarized_termcolors=256

" Molokai setting
let g:molokai_original=1

"Tab and Statusline settings
nnoremap <C-Left> :tabprevious<CR>
nnoremap <C-Right> :tabnext<CR>
set laststatus=2

" Always add lf in the end of file
set fileformat=unix
set title
set autoindent
set shiftwidth=4

" Use spaces instead of tab
set expandtab
set tabstop=4
set softtabstop=4

" Highlight cursor line
"set cursorline

" Airline settings
let g:airline_powerline_fonts=1
let g:airline#extensions#tabline#enabled=1

" NERDTree settings
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeWinSize = 40

" Debuggers
let g:vdebug_options={
\ 'path_maps': {'/vagrant': '/home/aliaksandr/dev/invex'},
\ 'break_on_open': 0
\}

" Mappings
:imap ;; <Esc>
