addEventListener('DOMContentLoaded',()=>{

    const schedule = document.querySelector('#schedule');
    const schedule_item = document.querySelector('#schedule-item');

    schedule.addEventListener('mouseover',()=>{
        console.log('hola');
        schedule_item.classList.toggle('schedule-active');
    })
})