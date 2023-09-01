const circle = document.querySelector('.progress-circle')
const loading = document.querySelector('.loading')

const circumference = circle.getTotalLength()

let i = 0;
const fakeUploadPerc = [0 , 10 , 20 , 30 , 45 , 50 , 60 , 70 , 75 , 90 , 95 , 97, 98 , 100]

const interval = setInterval(() => {

    circle.style.strokeDashoffset = circumference - (fakeUploadPerc[i] / 100) * circumference
    loading.innerHTML = fakeUploadPerc[i] + '%'
    
    i++
    if (i == fakeUploadPerc.length) {
        clearInterval(interval)
        loading.innerHTML = 'Ok 🚀'
    }
}, 1000);