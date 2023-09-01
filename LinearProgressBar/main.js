const progress = document.querySelector('.progress')
const loading = document.querySelector('.loading')

let i = 0;
const fakeUploadPerc = [0 , 10 , 14 , 20 , 25 , 40 , 50 , 70 , 75 , 90 , 95 , 97 , 98 , 99 , 100]

const interval = setInterval(() => {
    
    progress.style.width = `${fakeUploadPerc[i]}%`
    loading.innerHTML = fakeUploadPerc[i] + '%'
    
    i++
    
    if (i == fakeUploadPerc.length) {
        clearInterval(interval)
        loading.innerHTML = 'Completed'
    }

}, 1000);