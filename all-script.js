window.onload = () => {
    slidingUserWindow();
    }    
    function slidingUserWindow(){
        let userIcon = document.querySelector('#pivo');
        let userPopup = document.querySelector('#user_window'); 
        document.addEventListener('click', () => userPopup.classList.add('hidden'));
        userIcon.addEventListener('click', (event) => event.stopPropagation());
        userIcon.addEventListener('click', () => 
            userPopup.classList.remove('hidden')
        );
    }