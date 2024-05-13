let eventsListItem = document.querySelectorAll('.events__list__item'),
eventsInfoTitle = document.querySelector('.events__info__title'),
eventsInfoText = document.querySelector('.events__info__text'),
eventsImg = document.querySelectorAll('.events__img__main-img')

eventsListItem.forEach(item => item.addEventListener('click', (e) => {
    for (let i = 0; i < eventsListItem.length; i++) {
        eventsListItem[i].classList.remove('active__list__item')
        eventsImg[i].classList.remove('events__active-img')
    }

    item.classList.add('active__list__item')

    eventsInfoTitle.textContent = item.textContent
    
    if(item.textContent == 'Special Events'){
        eventsImg[1].classList.add('events__active-img')
        eventsInfoText.innerText = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
    } else if(item.textContent == 'Social Events'){
        eventsImg[2].classList.add('events__active-img')
        eventsInfoText.innerText = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
    } else {
        eventsImg[0].classList.add('events__active-img')
        eventsInfoText.innerText = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    }
}))