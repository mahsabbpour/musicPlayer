flag = 1
_menu = document.getElementById('menu')

document.getElementById('menu_hum').addEventListener('click', function () {
    if (flag % 2) {
        _menu.style.transform = 'translate(-15%)'

    } else {
        _menu.style.transform = 'translate(-130%)'

    }
    flag++
})

_arrowDown = document.getElementById('arrow_down')
_subMenu = document.getElementById('subMenu')



_arrowDown.addEventListener('click', function () {
    if (flag % 2) {
        _subMenu.classList.remove('d-none')
    } else {
        _subMenu.classList.add('d-none')


    }
    flag++
})
let play = 1
_playIconSh = document.querySelectorAll('#shadmehr span')


for (i = 0; i < _playIconSh.length; i++) {


    _playIconSh[i].addEventListener('click', function () {
        if (play % 2) {
            this.nextElementSibling.play()
        } else {
            this.nextElementSibling.pause()
        }

        play++
    })

}
_playRdioSam = document.querySelectorAll('#radioSam span')
for (i = 0; i < _playRdioSam.length; i++) {
    _playRdioSam[i].addEventListener('click', function () {
        if (play % 2) {
            this.nextElementSibling.play()
        } else {
            this.nextElementSibling.pause()
        } play++
    })
}

_playIconEbi = document.querySelectorAll('#ebi span')


for (i = 0; i < _playIconEbi.length; i++) {

    _playIconEbi[i].addEventListener('click', function () {

        if (play % 2) {
            this.nextElementSibling.play()
        } else {
            this.nextElementSibling.pause()

        }

        play++
    })

}

_svg = document.querySelectorAll('body svg')
_iconn = document.querySelectorAll('body i')
_iconMenu = document.querySelectorAll('#menu_hum  span')
_svgMenu = document.querySelector('#svgMenu')
document.getElementById('color').addEventListener('change', function () {
    temp = this.value

    for (i = 0; i < _svg.length; i++) {

        _svg[i].style.fill = temp
    }

    for (i = 0; i < _iconn.length; i++) {

        _iconn[i].style.color = temp
    }

    for (i = 0; i < _iconMenu.length; i++) {
        _iconMenu[i].style.background = temp
    }

    _svgMenu.style.stroke = temp


})


_li = document.querySelectorAll('#searchBox>li')

for (i = 0; i < _li.length; i++) {

    text = _li[i].innerText

    _li[i].setAttribute('data-data', text)

}

document.querySelector('#search').addEventListener('input', function () {

    val = this.value

    // console.log(val);
    if ((val == '') || (val == null)) {
        for (i = 0; i < _li.length; i++) {

            _li[i].style.display = 'none'
        }
    }

    else {
        for (i = 0; i < _li.length; i++) {

            temp = _li[i].getAttribute('data-data')
            _li[i].innerText = _li[i].getAttribute('data-data')


            temp = temp.substring(0, val.length)


            if (temp == val) {
                _li[i].style.display = 'flex'
                txt = _li[i].innerText
                _unbold = txt.substring(0, val.length)
                _bold = txt.substring(val.length, txt.length)

                _li[i].innerHTML = `
            <span>${_unbold}</span>
            <strong>${_bold}</strong>
            
            `
            } else {
                _li[i].style.display = 'none'
            }


        }


    }

})

function _toggle() {
    document.querySelector('.toggle>span').classList.toggle('toggleSpan')

    document.querySelector('.toggle').classList.toggle('darkModBack')

    document.getElementsByTagName('body')[0].classList.toggle('bodyBack')

    document.getElementsByTagName('nav')[0].classList.toggle('bodyBack')

    document.getElementById('menu').classList.toggle('bodyBack')

    _menuRightColor = document.querySelectorAll('#menuRight a')
    for (i = 0; i < _menuRightColor.length; i++) {
        _menuRightColor[i].classList.toggle('darkModColor')
    }

    document.getElementById('logo').classList.toggle('darkModColor')

    document.getElementById('search').classList.toggle('darkModSearch')

    document.getElementById('searchBox').classList.toggle('darkModSearch')

    document.getElementById('megaMenu1').classList.toggle('darkModSearch')

    document.getElementById('megaMenu2').classList.toggle('darkModSearch')

    document.getElementById('color').classList.toggle('darkModBack')

    _darkMOdRadioSam = document.querySelectorAll('.autoplay figure')
    for (i = 0; i < _darkMOdRadioSam.length; i++) {
        _darkMOdRadioSam[i].classList.toggle('darkModSearch')
    }

    _h6RadioSam = document.querySelectorAll('.autoplay h6')
    for (i = 0; i < _h6RadioSam.length; i++) {
        _h6RadioSam[i].classList.toggle('darkModColor')
    }

    _h4RadioSam = document.querySelectorAll('.autoplay h4')
    for (i = 0; i < _h4RadioSam.length; i++) {
        _h4RadioSam[i].classList.toggle('darkModColor')
    }

    _menuColor = document.querySelectorAll('#menu a')
    for (i = 0; i < _menuColor.length; i++) {
        _menuColor[i].classList.toggle('darkModColor')
    }
}



























