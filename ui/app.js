window.addEventListener('message', (event) => {
    let data = event.data
    if (data.action === 'noti') {
        createNotification(data.title, data.message, data.type.toLowerCase(), data.duration, data.sound, data.position.toLowerCase())
    }
}) 

let audio = new Audio('notifySound.mp3');
audio.volume = 0.6;

const createNotification = (title, message, type, Duration, sound, position) => {
    // Create Elements
    let container = document.querySelector('.container')
    let notificationCont = createNewElement('div', 'notification-container')
    let notification = createNewElement('div', 'notification')
    let titleDiv = createNewElement('div', 'title')
    let titleMsg = createNewElement('h1')
    let messageDiv = createNewElement('div', 'message')
    let messageCtn = createNewElement('p')
    let progressBar = createNewElement('div', 'progressbar')
    let progressBg = createNewElement('div', 'progressbg')
    let progress = createNewElement('div', 'progress')
    let iconDiv = createNewElement('div', 'icon')
    let iconSpan = createNewElement('span', 'material-icons')


    notificationCont.appendChild(notification)

    notification.appendChild(titleDiv)
    titleDiv.appendChild(titleMsg)

    notification.appendChild(messageDiv)
    messageDiv.appendChild(messageCtn)

    notification.appendChild(progressBar)
    progressBar.appendChild(progressBg)
    progressBg.appendChild(progress)

    notification.appendChild(iconDiv)
    iconDiv.appendChild(iconSpan)

    container.appendChild(notificationCont)

    // Style / Insert Data to elements

    // Adding test to Title & Message Contents
    titleMsg.innerHTML = title
    messageCtn.innerHTML = message
    iconSpan.classList.add('icon')

    // Add style for specific option

    const removeNotification = () => {
        notificationCont.remove()
        notification.remove()
    }

    try {
        type ? titleMsg.style.color = types[type].color : titleMsg.style.color = '#fff'
        type ? iconSpan.style.color = types[type].color : iconSpan.style.color = '#fff'
        type ? progress.style.background = types[type].color : progress.style.background = '#fff'
        type ? iconSpan.innerHTML = types[type].icon : iconSpan.innerHTML = 'mode_comment'
    }
    catch(err) {
        console.log("There was an error selecting the type! Please ensure you are using a valid type")
        removeNotification()
    }

    // Making The Notification Work
    let start = new Date();
    let timeoutVal = Math.floor(Duration/100)
    
    const updateProgress = (percentage) => {
        progress.style.width = `${percentage}%`
    }

    if (position === 'right') {
        notificationCont.classList.add('rightEnd')
        notification.classList.remove('hideNotificationRight')
        notification.classList.add('showNotificationRight')
    } else if (position === 'bottomRight') {
        notificationCont.classList.add('rightEnd')
        notification.classList.remove('hideNotificationRight')
        notification.classList.add('showNotificationRight')
    } else {
        notification.classList.remove('hideNotificationLeft')
        notification.classList.add('showNotificationLeft')
    }

    const anime = () => {
        let currentTime = new Date();
        let timeDiff = currentTime.getTime() - start.getTime();
        let percent = Math.round((timeDiff/Duration)*100);
        if (percent <= 100) {
            updateProgress(percent)
            setTimeout(anime, timeoutVal)
        } else {
            if (position === 'right') {
                notification.classList.remove('showNotificationRight')
                notification.classList.add('hideNotificationRight')
            } else if(position === 'bottomRight') {
                notification.classList.remove('showNotificationRight')
                notification.classList.add('hideNotificationRight')
            } else {
                notification.classList.remove('showNotificationLeft')
                notification.classList.add('hideNotificationLeft')
            }
            notification.addEventListener('animationend', removeNotification);
        }
    }

    if (sound) {
        audio.play();
    }
    anime()
}

const createNewElement = (element, className, innerHtml) => {
    newElm = document.createElement(element)
    className && newElm.classList.add(className)
    innerHtml && (newElm.innerHTML = innerHtml)
    return newElm
}