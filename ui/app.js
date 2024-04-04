window.addEventListener('message', (event) => {
    let data = event.data
    if (data.action === 'noti') {
        createNotification(data.title, data.message, data.type, data.duration)
    }
}) 


const createNotification = (title, message, type, Duration) => {
    // Create Elements
    let container = document.querySelector('.container')
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

    notification.appendChild(titleDiv)
    titleDiv.appendChild(titleMsg)

    notification.appendChild(messageDiv)
    messageDiv.appendChild(messageCtn)

    notification.appendChild(progressBar)
    progressBar.appendChild(progressBg)
    progressBg.appendChild(progress)

    notification.appendChild(iconDiv)
    iconDiv.appendChild(iconSpan)

    container.appendChild(notification)

    // Style / Insert Data to elements

    // Adding test to Title & Message Contents
    titleMsg.innerHTML = title
    messageCtn.innerHTML = message
    iconSpan.classList.add('icon')

    // Add style for specific option

    const removeNotification = () => {
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
    let type = type.toLowerCase();
    let start = new Date();
    let timeoutVal = Math.floor(Duration/100)
    
    const updateProgress = (percentage) => {
        progress.style.width = `${percentage}%`
    }

    const anime = () => {
        let currentTime = new Date();
        let timeDiff = currentTime.getTime() - start.getTime();
        let percent = Math.round((timeDiff/Duration)*100);
        if (percent <= 100) {
            updateProgress(percent)
            setTimeout(anime, timeoutVal)
            notification.classList.remove('hideNotification')
            notification.classList.add('showNotification')
        } else {
            notification.classList.remove('showNotification')
            notification.classList.add('hideNotification')
            notification.addEventListener('animationend', removeNotification);
        }
    }

    anime()
}

const createNewElement = (element, className, innerHtml) => {
    newElm = document.createElement(element)
    className && newElm.classList.add(className)
    innerHtml && (newElm.innerHTML = innerHtml)
    return newElm
}

const trigEvent = () => {
    const eventData = {
        title: "SUPER DUPER LONG TITLE THAT TAKES UP ALOT OF SPACE!",
        message: "noti",
        type: "success",
        duration: 5000 // Sample time value in milliseconds
    };
    window.postMessage(eventData, '*');
}