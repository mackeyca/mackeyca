const buttonResume = document.getElementById('toggle-resume');
const buttonJob3 = document.getElementById('toggle-job3');
const buttonJob2 = document.getElementById('toggle-job2');
const buttonJob1 = document.getElementById('toggle-job1');
const ResumeHolder = document.getElementById('ResumeHolder');
const Job3Holder = document.getElementById('Job3');
const Job2Holder = document.getElementById('Job2');
const Job1Holder = document.getElementById('Job1');

buttonResume.addEventListener('click', function () {
    if (ResumeHolder.classList.contains('ResumeOff')) {
        ResumeHolder.classList.remove('ResumeOff');
        ResumeHolder.classList.add('ResumeOn');
    }
    if (Job3Holder.classList.contains('ResumeOn')) {
        Job3Holder.classList.remove('ResumeOn');
        Job3Holder.classList.add('ResumeOff');
    }
    if (Job2Holder.classList.contains('ResumeOn')) {
        Job2Holder.classList.remove('ResumeOn');
        Job2Holder.classList.add('ResumeOff');
    }
    if (Job1Holder.classList.contains('ResumeOn')) {
        Job1Holder.classList.remove('ResumeOn');
        Job1Holder.classList.add('ResumeOff');
    }
});
buttonJob3.addEventListener('click', function () {
    if (Job3Holder.classList.contains('ResumeOff')) {
        Job3Holder.classList.remove('ResumeOff');
        Job3Holder.classList.add('ResumeOn');
    }
    if (ResumeHolder.classList.contains('ResumeOn')) {
        ResumeHolder.classList.remove('ResumeOn');
        ResumeHolder.classList.add('ResumeOff');
    }
    if (Job2Holder.classList.contains('ResumeOn')) {
        Job2Holder.classList.remove('ResumeOn');
        Job2Holder.classList.add('ResumeOff');
    }
    if (Job1Holder.classList.contains('ResumeOn')) {
        Job1Holder.classList.remove('ResumeOn');
        Job1Holder.classList.add('ResumeOff');
    }
});
buttonJob2.addEventListener('click', function () {
    if (Job2Holder.classList.contains('ResumeOff')) {
        Job2Holder.classList.remove('ResumeOff');
        Job2Holder.classList.add('ResumeOn');
    }
    if (Job3Holder.classList.contains('ResumeOn')) {
        Job3Holder.classList.remove('ResumeOn');
        Job3Holder.classList.add('ResumeOff');
    }
    if (ResumeHolder.classList.contains('ResumeOn')) {
        ResumeHolder.classList.remove('ResumeOn');
        ResumeHolder.classList.add('ResumeOff');
    }
    if (Job1Holder.classList.contains('ResumeOn')) {
        Job1Holder.classList.remove('ResumeOn');
        Job1Holder.classList.add('ResumeOff');
    }
});
buttonJob1.addEventListener('click', function () {
    if (Job1Holder.classList.contains('ResumeOff')) {
        Job1Holder.classList.remove('ResumeOff');
        Job1Holder.classList.add('ResumeOn');
    }
    if (Job3Holder.classList.contains('ResumeOn')) {
        Job3Holder.classList.remove('ResumeOn');
        Job3Holder.classList.add('ResumeOff');
    }
    if (Job2Holder.classList.contains('ResumeOn')) {
        Job2Holder.classList.remove('ResumeOn');
        Job2Holder.classList.add('ResumeOff');
    }
    if (ResumeHolder.classList.contains('ResumeOn')) {
        ResumeHolder.classList.remove('ResumeOn');
        ResumeHolder.classList.add('ResumeOff');
    }
});