'use strict';
    
        {
          const open = document.getElementById('hamopen');
          const overlay = document.querySelector('.overlay');
          const close = document.getElementById('closebtn');
        
          open.addEventListener('click', () => {
            overlay.classList.add('show');
            open.classList.add('hide');
          });
        
          close.addEventListener('click', () => {
            overlay.classList.remove('show');
            open.classList.remove('hide');
          });

          document.addEventListener("click", e => {
            const target = e.target;
            // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
            if (!target.classList.contains("js-smooth-scroll")) return;
            e.preventDefault();
            const targetId = target.hash;
            document.querySelector(targetId).scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            close.click();
          });
        }