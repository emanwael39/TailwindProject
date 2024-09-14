function openMenu(icon){
    var list=document.querySelector("ul")
    var btn=document.getElementsByClassName("btn")[0]
    if (icon.classList.contains('bx-menu')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
        btn.classList.add('opacity-100')
        // list.classList.add('top-[80px]')
        list.classList.add('opacity-100')
        list.classList.add('w-full')
        list.classList.add('bg-white')
        list.classList.add('absolute')
        btn.classList.add('absolute')
        btn.classList.add('top-52')
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
        // list.classList.remove('top-[80px]')
        list.classList.remove('opacity-100')
        btn.classList.remove('opacity-100')
        list.classList.remove('w-full')
        list.classList.remove('bg-white')
        list.classList.remove('absolute')
        btn.classList.remove('absolute')
        btn.classList.remove('top-52')
    }


}